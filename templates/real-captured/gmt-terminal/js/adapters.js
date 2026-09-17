/* GMT data architecture: two explicitly separate adapters + provenance hub.
   1) LIVE ADAPTER   — real HTTP fetch, only when live.config.js provides endpoints (never on file://).
   2) DEMO ADAPTER   — deterministic bundled fixtures (window.GMT_FIXTURES), the offline default.
   Every dataset resolves to { data, prov } where prov = {adapter, source, asof, mode, latencyMs, error, fallback}.
   Cached/demo values are never presented as live. */
window.GMT = window.GMT || {};
(function (G) {
  "use strict";
  const U = G.util;

  const status = {
    demo: { name: "DETERMINISTIC DEMO ADAPTER", state: "OK", lastSuccess: null, latencyMs: 0, error: null, fallback: null, note: "bundled fixtures v" + (G.GMT_FIXTURES ? G.GMT_FIXTURES.meta.fixturesVersion : "?") },
    live: { name: "LIVE ADAPTER", state: "UNCONFIGURED", lastSuccess: null, latencyMs: null, error: null, fallback: "no live.config.js endpoints — DEMO mode primary", note: "see live.config.example.js" }
  };
  const listeners = [];
  function emit() { listeners.forEach(f => { try { f(); } catch (e) {} }); }

  const DemoAdapter = {
    id: "demo",
    get(dataset) {
      const t0 = performance.now();
      const F = G.GMT_FIXTURES;
      const map = {
        tape: F.tape, stocks: F.stocks, aapl60: F.aapl60,
        metals: F.metals, sectors: F.sectors, news: F.news, meta: [F.meta]
      };
      if (!map[dataset]) throw new Error("unknown dataset " + dataset);
      const asof = dataset === "metals" ? F.meta.metalsAsOf : F.meta.demoAsOf;
      status.demo.state = "OK";
      status.demo.lastSuccess = U.nowIso();
      status.demo.latencyMs = Math.round(performance.now() - t0);
      return {
        data: map[dataset],
        prov: {
          adapter: "demo", source: "bundled deterministic fixtures v" + F.meta.fixturesVersion,
          asof: asof, mode: "DEMO", latencyMs: status.demo.latencyMs, error: null,
          fallback: null, convention: F.meta.convention
        }
      };
    }
  };

  const LiveAdapter = {
    id: "live",
    config() { return (typeof window.GMT_LIVE_CONFIG === "object" && window.GMT_LIVE_CONFIG) || null; },
    available() {
      const c = this.config();
      if (location.protocol === "file:") {
        status.live.state = "DISABLED";
        status.live.fallback = "file:// context — static delivery defaults to DEMO";
        return false;
      }
      if (!c || !c.endpoints || !c.endpoints.quotes) {
        status.live.state = "UNCONFIGURED";
        status.live.fallback = "no endpoints configured — DEMO mode primary";
        return false;
      }
      return true;
    },
    get(dataset) {
      const c = this.config();
      const url = c && c.endpoints ? c.endpoints[dataset] || c.endpoints.quotes : null;
      if (!url) return Promise.reject(new Error("no endpoint for dataset " + dataset));
      const t0 = performance.now();
      return U.fetchJson(url + (url.indexOf("?") >= 0 ? "&" : "?") + "dataset=" + dataset, (c && c.timeoutMs) || 4000)
        .then(j => {
          status.live.state = "OK";
          status.live.lastSuccess = U.nowIso();
          status.live.latencyMs = Math.round(performance.now() - t0);
          status.live.error = null; status.live.fallback = null; emit();
          return {
            data: j.data,
            prov: {
              adapter: "live", source: (c && c.sourceName) || "live endpoint",
              asof: j.asof || U.nowIso(), mode: "LIVE",
              latencyMs: status.live.latencyMs, error: null, fallback: null,
              convention: (j.convention) || "live source conventions — see provider docs"
            }
          };
        })
        .catch(err => {
          status.live.state = "ERROR";
          status.live.error = String(err && err.message || err);
          status.live.fallback = "live request failed → deterministic DEMO fallback (cached fixtures)";
          status.live.latencyMs = Math.round(performance.now() - t0);
          emit();
          throw err;
        });
    }
  };

  /* cache of last successful payload per dataset (keyed by mode) */
  const cache = {};

  const Hub = {
    mode: "DEMO",
    get(dataset) {
      if (LiveAdapter.available()) {
        return LiveAdapter.get(dataset)
          .then(r => { cache[dataset] = r; Hub.mode = "LIVE"; emit(); return r; })
          .catch(() => {
            const r = cache[dataset] && cache[dataset].prov.mode === "LIVE"
              ? { data: cache[dataset].data, prov: Object.assign({}, cache[dataset].prov, { mode: "STALE", fallback: "serving last successful LIVE cache (stale)", error: status.live.error }) }
              : DemoAdapter.get(dataset);
            Hub.mode = "DEMO"; emit();
            return r;
          });
      }
      const r = DemoAdapter.get(dataset);
      Hub.mode = "DEMO";
      return Promise.resolve(r);
    },
    status() { return status; },
    cache() { return cache; },
    adapters() { return [status.demo, status.live]; },
    onChange(fn) { listeners.push(fn); },
    refreshLiveProbe() { // called by DATA STATUS panel "RETRY LIVE" button
      if (!LiveAdapter.available()) { emit(); return Promise.resolve(false); }
      return LiveAdapter.get("tape").then(() => true).catch(() => false);
    }
  };

  G.data = { Hub, DemoAdapter, LiveAdapter, status };
})(window.GMT);
