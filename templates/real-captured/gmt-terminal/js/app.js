/* GMT app: boot, command bar, ticker tape, keyboard, data-status panel, add-widget menu, hover preview. */
window.GMT = window.GMT || {};
(function (G) {
  "use strict";
  const U = G.util, el = U.el;

  const PREF_DEFAULTS = {
    tz: "America/New_York", tapePaused: false, heatArea: "CHG", heatFilter: "ALL",
    heatQuery: "", breadthHL: null, newsCats: [], newsQ: "", newsPaused: false,
    metalSel: "XAU", editMode: false, preset: "GLOBAL", focus: "AAPL"
  };

  G.state = {
    prefs: Object.assign({}, PREF_DEFAULTS, U.store.get("prefs.v1", {})),
    readNews: U.store.get("readNews.v1", {})
  };
  G.datasets = {}; G.prov = {};

  const app = {
    savePrefs() { U.store.set("prefs.v1", G.state.prefs); },
    saveRead() { U.store.set("readNews.v1", G.state.readNews); },

    /* ---------- widget rendering ---------- */
    renderWidget(id) {
      const item = G.layout.entry(id);
      const body = U.$("#body-" + id);
      if (!item || !body || item.visible === false) return;
      body.innerHTML = "";
      if (item.min) return;
      try { G.widgets.WIDGETS[id].render(body); }
      catch (e) { body.appendChild(el("div", { class: "pad", style: "color:var(--dn)", text: "> render error: " + e.message })); console.error(e); }
      const asof = U.$("#asof-" + id);
      if (asof) {
        if (id === "pulse") asof.textContent = "LIVE CLOCK";
        else if (id === "metals") asof.textContent = "as-of " + (G.prov.metals ? G.prov.metals.asof.slice(5, 16).replace("T", " ") : "—");
        else asof.textContent = "as-of " + (G.prov.tape ? G.prov.tape.asof.slice(5, 16).replace("T", " ") : "—") + " DEMO";
      }
    },
    renderAll() { Object.keys(G.widgets.WIDGETS).forEach(id => app.renderWidget(id)); },
    rerender(id) { app.renderWidget(id); },

    setFocus(sym) {
      G.state.prefs.focus = sym;
      const map = { stock: "heat", metal: "metals" };
      let wid = "ticker";
      if (G.datasets.stocks && G.datasets.stocks.find(s => s.t === sym)) wid = "heat";
      if (sym === "AAPL") wid = "aapl";
      if (G.datasets.metals && G.datasets.metals.find(m => m.sym === sym)) {
        wid = "metals";
        if (G.state.prefs.metalSel !== sym) { G.state.prefs.metalSel = sym; app.savePrefs(); app.rerender("metals"); }
      }
      Object.keys(G.layout.nodes).forEach(k => G.layout.nodes[k].classList.remove("focused"));
      const node = G.layout.nodes[wid];
      if (node) {
        node.classList.add("focused");
        node.scrollIntoView({ block: "nearest", behavior: "auto" });
        setTimeout(() => node.classList.remove("focused"), 1800);
      }
    },

    /* ---------- hover preview card ---------- */
    hoverPreview(type, payload, anchor) {
      const hc = U.$("#hovercard");
      if (!type) { hc.style.display = "none"; return; }
      hc.innerHTML = "";
      if (type === "stock") {
        const s = payload;
        hc.appendChild(el("div", { class: "h", text: s.t + " · " + s.name }));
        hc.appendChild(el("div", { html:
          `LAST <b class="num">${U.fmtNum(s.last, 2)}</b> · <span class="${U.cls(s.chgPct)}">${U.arrow(s.chgPct)} ${U.fmtPct(s.chgPct)}</span><br>` +
          `O ${U.fmtNum(s.open, 2)} · H ${U.fmtNum(s.high, 2)} · L ${U.fmtNum(s.low, 2)}<br>` +
          `VOL ${U.fmtVol(s.volume)} · CAP $${U.fmtBig(s.mktCap)}<br><span class="faint">click pins full quote → Inspector</span>` }));
      }
      const r = anchor.getBoundingClientRect();
      hc.style.display = "block";
      const hw = hc.offsetWidth, hh = hc.offsetHeight;
      hc.style.left = U.clamp(r.left + r.width / 2 - hw / 2, 4, window.innerWidth - hw - 4) + "px";
      hc.style.top = (r.top - hh - 6 > 40 ? r.top - hh - 6 : r.bottom + 6) + "px";
    },

    /* ---------- add widget menu ---------- */
    syncAddMenu() {
      const m = U.$("#addmenu");
      m.innerHTML = "";
      m.appendChild(el("div", { class: "am-h", text: "ADD WIDGET (deleted widgets restore here)" }));
      Object.keys(G.widgets.WIDGETS).forEach(id => {
        const it = G.layout.entry(id);
        const vis = it && it.visible !== false;
        const b = el("button", { disabled: vis ? "disabled" : null });
        b.appendChild(el("span", { text: G.widgets.WIDGETS[id].num + " " + G.widgets.WIDGETS[id].title }));
        b.appendChild(el("span", { class: vis ? "faint" : "org", text: vis ? "ADDED" : "+ ADD" }));
        if (!vis) b.addEventListener("click", () => { G.layout.addWidget(id); app.syncAddMenu(); app.toggleAddMenu(false); });
        m.appendChild(b);
      });
    },
    toggleAddMenu(force) {
      const m = U.$("#addmenu");
      const open = force !== undefined ? force : !m.classList.contains("open");
      m.classList.toggle("open", open);
      if (open) {
        const b = U.$("#btn-add").getBoundingClientRect();
        m.style.right = Math.max(4, window.innerWidth - b.right) + "px";
        m.style.top = (b.bottom + 2) + "px";
      }
    },

    /* ---------- command bar ---------- */
    buildCmdBar() {
      const bar = U.$("#cmdbar");
      bar.innerHTML = "";
      bar.appendChild(el("div", { class: "brand", html: 'GMT://TERMINAL<span class="cursor"></span>' }));
      const clock = el("div", { class: "seg clock", id: "cmd-clock", text: "--:--:--" });
      bar.appendChild(clock);
      const modeChip = el("div", { class: "seg" });
      modeChip.appendChild(el("span", { class: "mode-chip demo", id: "mode-chip", text: "DEMO DATA" }));
      bar.appendChild(modeChip);
      const conn = el("div", { class: "seg hide-s", id: "conn-state", text: "CONN: DEMO/OFFLINE" });
      bar.appendChild(conn);
      const grow = el("div", { class: "seg grow hide-s" });
      grow.appendChild(el("span", { id: "focus-label", text: "> FOCUS: " + G.state.prefs.focus + " · [E]dit [A]dd [R]eset [D]ata [T]ape [Esc]close" }));
      bar.appendChild(grow);
      // presets
      const presets = el("div", { class: "seg", role: "group", "aria-label": "layout presets" });
      [["GLOBAL", "GLB"], ["EQUITIES", "EQ"], ["METALS", "MET"], ["NEWS", "NWS"]].forEach(([name, lab]) => {
        presets.appendChild(el("button", {
          text: lab, title: "preset: " + name, "aria-pressed": G.state.prefs.preset === name,
          id: "preset-" + name,
          onclick: () => { G.layout.applyPreset(name); app.syncPresetButtons(); }
        }));
      });
      bar.appendChild(presets);
      bar.appendChild(el("button", { id: "btn-edit", text: "EDIT", title: "EDIT LAYOUT mode [E] — gates drag/resize", "aria-pressed": false, onclick: () => app.toggleEdit() }));
      bar.appendChild(el("button", { id: "btn-add", text: "+WIDGET", title: "add/restore widget [A]", onclick: () => app.toggleAddMenu() }));
      bar.appendChild(el("button", { id: "btn-reset", text: "RESET", title: "reset default layout [R]", onclick: () => { G.layout.resetDefault(); app.syncPresetButtons(); } }));
      bar.appendChild(el("button", { id: "btn-pop", text: "POP", title: "standalone/pinned desktop window (mini session clock)", onclick: () => app.popout() }));
      bar.appendChild(el("button", { id: "btn-dstatus", text: "DATA", title: "DATA STATUS panel [D]", onclick: () => app.toggleDStatus() }));
      app.tickCmdClock();
    },
    syncPresetButtons() {
      ["GLOBAL", "EQUITIES", "METALS", "NEWS"].forEach(n => {
        const b = U.$("#preset-" + n);
        if (b) b.setAttribute("aria-pressed", G.state.prefs.preset === n);
      });
    },
    tickCmdClock() {
      const c = U.$("#cmd-clock");
      if (c) {
        const now = new Date();
        c.textContent = U.fmtClock(now, G.state.prefs.tz, true) + " " + U.tzOffsetLabel(now, G.state.prefs.tz) + " · " + U.fmtClock(now, "Etc/UTC", true) + " UTC";
      }
      setTimeout(app.tickCmdClock, 1000);
    },
    toggleEdit() {
      const p = G.state.prefs;
      p.editMode = !p.editMode;
      app.savePrefs();
      U.$("#canvas").classList.toggle("edit", p.editMode);
      U.$("#btn-edit").setAttribute("aria-pressed", p.editMode);
      U.$("#btn-edit").textContent = p.editMode ? "EDIT✓" : "EDIT";
    },

    /* ---------- ticker tape ---------- */
    buildTape() {
      const track = U.$("#tape-track");
      track.innerHTML = "";
      const mk = () => G.datasets.tape.map(r => {
        const it = el("div", { class: "tape-item", tabindex: "0", role: "button", "aria-label": r.sym + " " + r.last + " " + U.fmtPct(r.chgPct) });
        it.innerHTML =
          `<span class="sym">${U.esc(r.sym)}</span>` +
          `<span class="last num">${U.fmtNum(r.last, 2)}</span>` +
          `<span class="num ${U.cls(r.chg)}">${U.arrow(r.chg)} ${U.fmtChg(r.chg, 2)}</span>` +
          `<span class="num ${U.cls(r.chgPct)}">${U.fmtPct(r.chgPct)}</span>` +
          `<span class="faint state-${U.esc(r.state)}" style="font-size:9px">${U.esc(r.state)}</span>`;
        const open = () => { app.setFocus(r.sym); G.inspector.open("instrument", r); };
        it.addEventListener("click", open);
        it.addEventListener("keydown", e => { if (e.key === "Enter") open(); });
        return it;
      });
      mk().concat(mk()).forEach(n => track.appendChild(n)); // 2 copies for seamless loop
      app.startTape();
    },
    startTape() {
      const bar = U.$("#tapebar"), track = U.$("#tape-track");
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) { bar.classList.add("static"); return; }
      bar.classList.remove("static");
      let x = 0, half = 0, last = 0, running = true;
      const measure = () => { half = track.scrollWidth / 2; };
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
      measure();
      window.addEventListener("resize", measure);
      function frame(ts) {
        if (!document.body.contains(track)) return;
        const dt = last ? ts - last : 16; last = ts;
        const paused = G.state.prefs.tapePaused || bar.matches(":hover") || G.state.prefs.editMode;
        if (!paused && half > 0) {
          x -= dt * 0.028; // ~28px/s, slow terminal crawl
          if (-x >= half) x += half;
          track.style.transform = "translateX(" + x.toFixed(1) + "px)";
        }
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    },

    /* ---------- DATA STATUS panel ---------- */
    toggleDStatus(force) {
      const d = U.$("#dstatus");
      const open = force !== undefined ? force : !d.classList.contains("open");
      d.classList.toggle("open", open);
      if (open) app.renderDStatus();
    },
    renderDStatus() {
      const body = U.$("#ds-body");
      body.innerHTML = "";
      body.appendChild(el("div", { class: "org", style: "font-weight:800;font-size:11px;margin-bottom:4px", text: "ADAPTER STATUS" }));
      const tbl = el("table", { class: "tbl" });
      tbl.innerHTML = "<thead><tr><th>ADAPTER</th><th>STATE</th><th>LAST OK</th><th>LATENCY</th><th>ERROR</th></tr></thead>";
      const tb = el("tbody");
      G.data.Hub.adapters().forEach(a => {
        const tr = el("tr");
        tr.innerHTML =
          `<td style="text-align:left">${U.esc(a.name)}</td>` +
          `<td class="${a.state === "OK" ? "up" : "dn"}">${U.esc(a.state)}</td>` +
          `<td class="dim">${a.lastSuccess ? U.esc(a.lastSuccess.slice(11, 19)) + "Z" : "—"}</td>` +
          `<td class="num">${a.latencyMs != null ? a.latencyMs + "ms" : "—"}</td>` +
          `<td class="dim" style="white-space:normal">${U.esc(a.error || "—")}</td>`;
        tb.appendChild(tr);
        if (a.fallback) {
          const fr = el("tr");
          fr.innerHTML = `<td></td><td colspan="4" class="faint" style="white-space:normal">fallback: ${U.esc(a.fallback)}</td>`;
          tb.appendChild(fr);
        }
      });
      tbl.appendChild(tb);
      body.appendChild(tbl);
      body.appendChild(el("button", {
        class: "chip", style: "margin:6px 0", text: "↻ RETRY LIVE PROBE",
        onclick: () => G.data.Hub.refreshLiveProbe().then(() => { app.renderDStatus(); app.refreshModeChip(); })
      }));
      body.appendChild(el("div", { class: "org", style: "font-weight:800;font-size:11px;margin:6px 0 4px", text: "DATASETS (per-widget as-of)" }));
      const cache = G.data.Hub.cache();
      Object.keys(G.prov).forEach(k => {
        const p = G.prov[k];
        const c = cache[k];
        body.appendChild(el("div", { class: "kv" }, [
          el("div", { class: "k", text: k }),
          el("div", { class: "v", text: `${p.mode} · as-of ${p.asof} · ${p.source}` })
        ]));
        body.appendChild(el("div", { class: "kv" }, [
          el("div", { class: "k", text: "  cache" }),
          el("div", { class: "v faint", text: c ? `${c.prov.mode} cache, ts ${c.prov.asof}` : "empty — demo primary, no live cache yet" })
        ]));
      });
      body.appendChild(el("div", { class: "org", style: "font-weight:800;font-size:11px;margin:6px 0 4px", text: "CONVENTIONS" }));
      body.appendChild(el("div", { class: "dim", style: "font-size:10px", text: G.GMT_FIXTURES.meta.convention }));
      body.appendChild(el("div", { class: "dim", style: "font-size:10px;margin-top:4px", text: "Trading-day convention: weekday sessions only (holiday calendar not applied). Timezone: IANA via Intl. Currency: USD unless labeled. Adjustment: unadjusted DEMO fixtures. Spot/futures: metals are homogeneous spot USD/t oz. Index vs ETF: indices are index levels, not tradable ETFs." }));
    },
    refreshModeChip() {
      const live = G.data.status.live;
      const chip = U.$("#mode-chip"), conn = U.$("#conn-state");
      if (live.state === "OK") {
        chip.textContent = "LIVE"; chip.className = "mode-chip live";
        conn.textContent = "CONN: LIVE OK";
      } else {
        chip.textContent = "DEMO DATA"; chip.className = "mode-chip demo";
        conn.textContent = "CONN: DEMO/OFFLINE · live " + live.state.toLowerCase();
      }
    },

    /* ---------- transient graceful note (non-error) ---------- */
    note(msg, ms) {
      let n = U.$("#toast");
      if (!n) {
        n = el("div", { id: "toast", role: "status", style: "position:fixed;top:calc(var(--cmdh) + var(--tapeh) + 6px);right:8px;z-index:600;background:#0A0A08;border:1px solid var(--org);color:var(--ink);padding:5px 10px;font-size:11px;max-width:380px" });
        document.body.appendChild(n);
      }
      n.textContent = "» " + msg;
      n.style.display = "block";
      clearTimeout(app._toastT);
      app._toastT = setTimeout(() => { n.style.display = "none"; }, ms || 4200);
    },

    /* ---------- standalone / pinned window (optional; graceful fallback) ---------- */
    popout() {
      // Preferred: Document Picture-in-Picture (always-on-top mini session clock)
      if (window.documentPictureInPicture && window.documentPictureInPicture.requestWindow) {
        window.documentPictureInPicture.requestWindow({ width: 430, height: 320 })
          .then(win => {
            const d = win.document;
            const st = d.createElement("style");
            st.textContent =
              "body{margin:0;background:#000;color:#D7D7D7;font:12px/1.45 'JetBrains Mono',monospace}" +
              ".h{background:#F28C00;color:#000;font-weight:800;padding:3px 8px;font-size:11px;display:flex;justify-content:space-between}" +
              ".clk{font-size:34px;font-weight:800;color:#F28C00;text-align:center;padding:6px 0 0;font-variant-numeric:tabular-nums}" +
              ".sub{text-align:center;color:#8A8A8A;font-size:10px;padding-bottom:6px;border-bottom:1px solid #292929}" +
              "table{width:100%;border-collapse:collapse;font-size:10px}td{padding:2px 8px;border-bottom:1px solid #292929;white-space:nowrap;font-variant-numeric:tabular-nums}" +
              ".O{color:#00C176}.C{color:#8A8A8A}.P,.L{color:#FFB454}.note{color:#5C5C5C;font-size:8px;padding:3px 8px}";
            d.head.appendChild(st);
            d.body.innerHTML =
              '<div class="h"><span>GMT://MINI · SESSION CLOCK</span><span>DEMO</span></div>' +
              '<div class="clk" id="pc">--:--:--</div><div class="sub" id="ps"></div>' +
              '<table id="pm"></table><div class="note">pinned mini window · states live · quotes DEMO · close to return</div>';
            const tick = () => {
              if (win.closed) return;
              const now = new Date(), tz = G.state.prefs.tz;
              d.getElementById("pc").textContent = U.fmtClock(now, tz, true);
              d.getElementById("ps").textContent = U.fmtDate(now, tz) + " · " + U.tzOffsetLabel(now, tz);
              const tb = d.getElementById("pm");
              tb.innerHTML = "";
              G.sessions.MARKETS.forEach(m => {
                const s = G.sessions.stateAt(m, now);
                const tr = d.createElement("tr");
                const cls = s.state === "OPEN" ? "O" : s.state === "CLOSED" ? "C" : (s.state === "PRE" || s.state === "LUNCH") ? "P" : "C";
                tr.innerHTML = "<td>" + m.id + "</td><td>" + U.fmtClock(now, m.tz, false) + "</td><td class='" + cls + "'>" + s.state + "</td><td>" + G.sessions.fmtCountdown(s.countdownMs) + "</td>";
                tb.appendChild(tr);
              });
              win.setTimeout(tick, 1000);
            };
            tick();
            win.addEventListener("pagehide", () => app.note("mini window closed — back to main canvas"));
            app.note("standalone mini clock pinned (document picture-in-picture)");
          })
          .catch(err => app.note("pinned window unavailable (" + (err && err.message || "denied") + ") — trying popup fallback", 3500) || app.popoutPopup());
        return;
      }
      app.popoutPopup();
    },
    popoutPopup() {
      if (window.name === "gmt-popout") { app.note("this IS the standalone window — pop-out disabled here"); return; }
      try {
        const url = location.href.split("?")[0].split("#")[0]; // strip query so the copy boots clean
        const w = window.open(url, "gmt-popout", "popup,width=1150,height=780");
        if (!w) app.note("pop-out blocked by browser — allow popups for this page to use the standalone window");
        else app.note("standalone window opened (shares this terminal, full layout)");
      } catch (e) {
        app.note("standalone window unsupported in this browser — the main canvas is unaffected");
      }
    },

    /* ---------- keyboard ---------- */
    bindKeys() {
      document.addEventListener("keydown", e => {
        const t = e.target;
        if (t && (t.tagName === "INPUT" || t.tagName === "SELECT" || t.tagName === "TEXTAREA")) {
          if (e.key === "Escape") t.blur();
          return;
        }
        if (e.ctrlKey || e.metaKey || e.altKey) return; // never hijack browser chords (Cmd+R etc.)
        const k = e.key.toLowerCase();
        if (e.key === "Escape") {
          if (G.inspector.isOpen()) { G.inspector.close(); e.preventDefault(); }
          else if (U.$("#addmenu").classList.contains("open")) { app.toggleAddMenu(false); e.preventDefault(); }
          else if (U.$("#dstatus").classList.contains("open")) { app.toggleDStatus(false); e.preventDefault(); }
          return;
        }
        if (k === "e") { app.toggleEdit(); }
        else if (k === "a") { app.toggleAddMenu(); }
        else if (k === "r") { G.layout.resetDefault(); app.syncPresetButtons(); }
        else if (k === "d") { app.toggleDStatus(); }
        else if (k === "t") {
          G.state.prefs.tapePaused = !G.state.prefs.tapePaused; app.savePrefs();
          const tp = U.$("#tape-pause");
          if (tp) { tp.textContent = G.state.prefs.tapePaused ? "▶" : "⏸"; tp.setAttribute("aria-pressed", G.state.prefs.tapePaused); }
        }
        else if (k === "f1" || e.key === "F1") { app.toggleDStatus(); e.preventDefault(); }
        else if (/^[1-9]$/.test(k)) {
          const order = G.layout.visibleItems();
          const it = order[+k - 1];
          if (it) {
            const n = G.layout.nodes[it.id];
            Object.keys(G.layout.nodes).forEach(x => G.layout.nodes[x].classList.remove("focused"));
            n.classList.add("focused");
            n.scrollIntoView({ block: "nearest" });
            n.querySelector(".w-title").setAttribute("tabindex", "-1");
            n.querySelector(".w-title").focus();
            setTimeout(() => n.classList.remove("focused"), 1800);
          }
        }
      });
      document.addEventListener("click", e => {
        if (!e.target.closest("#addmenu") && !e.target.closest("#btn-add")) app.toggleAddMenu(false);
      });
    },

    /* ---------- boot ---------- */
    boot() {
      const ds = ["tape", "stocks", "aapl60", "metals", "sectors", "news"];
      Promise.all(ds.map(d => G.data.Hub.get(d).then(r => { G.datasets[d] = r.data; G.prov[d] = r.prov; })))
        .then(() => {
          app.buildCmdBar();
          app.buildTape();
          const tp = U.$("#tape-pause");
          if (tp && G.state.prefs.tapePaused) { tp.textContent = "▶"; tp.setAttribute("aria-pressed", "true"); }
          G.layout.load();
          G.layout.mount();
          app.renderAll();
          app.syncAddMenu();
          app.bindKeys();
          app.refreshModeChip();
          U.$("#btn-dstatus-close").addEventListener("click", () => app.toggleDStatus(false));
          U.$("#ins-close").addEventListener("click", () => G.inspector.close());
          // mark read persistence hook
          setInterval(app.saveRead, 5000);
          window.addEventListener("resize", U.debounce(() => {
            const wasStacked = G.layout.stacked;
            G.layout.stacked = window.matchMedia("(max-width:1023px)").matches;
            G.layout.applyAll();
            if (wasStacked !== G.layout.stacked) app.renderAll();
          }, 150));
          const bs = U.$("#boot-status");
          bs.textContent = "READY · demo fixtures " + G.GMT_FIXTURES.meta.fixturesVersion;
          setTimeout(() => { bs.style.display = "none"; }, 4000);
          if (location.search.indexOf("selftest") >= 0 && G.selftest) {
            // let requestAnimationFrame chart/heatmap draws + RO re-render cycles settle before asserting
            setTimeout(() => G.selftest.run(), 1600);
          }
          if (location.search.indexOf("accept=1") >= 0 && G.accept) {
            // settle, then run the pre-launch acceptance table (accept.js instruments from load)
            setTimeout(() => G.accept.run(), 2600);
          }

        })
        .catch(err => {
          console.error(err);
          U.$("#boot-status").textContent = "BOOT ERROR: " + err.message;
        });
    }
  };

  G.app = app;
  document.addEventListener("DOMContentLoaded", app.boot);
})(window.GMT);
