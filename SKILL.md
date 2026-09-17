---
name: kimi-style-demo-pages
description: Build fast, self-contained, single-file demo pages (WebGL backgrounds, dark data dashboards, conceptual/method diagrams) in the visual style of Kimi Agent's showcase pages (GARGANTUA raytracer, GMT terminal dashboard). Use when Francis asks for that kind of flashy one-page demo, background effect, or figure — start from the repo's screenshot-verified templates instead of from scratch.
---

# Kimi-style demo pages — build fast, verify visually

Source repo: `github.com/fvegiard/kimi-knowledge` (public) — also served live as an MCP
at `https://kimi-docs-mcp.netlify.app/mcp` with tools `list_templates`, `read_template`,
`read_kimi_skill`, plus the Kimi help-center mirror tools (`list_kimi_docs`,
`read_kimi_doc`, `search_kimi_docs`).

## Why this exists

Francis's open Kimi tabs (2026-09-16) showed three "Agent Swarm" showcase pages —
GARGANTUA (black-hole raytracer), a 3D typewriter document editor, and a GMT market
dashboard — all badged "Kimi Agent" (regular agent, not Swarm; see
`corpus/examples/kimi-demo-pages.md` and `CAPABILITIES.md`). This skill packages
reusable starting points so Claude can build comparable pages quickly, without
reinventing the shader math or dashboard layout each time, and without needing
Agent Swarm — a single page like these is a single-agent job.

## Workflow

1. **Read this file's matching template first.** Don't write a WebGL raymarcher or a
   dark dashboard from a blank page — copy the closest template below and adapt it.
2. **Adapt content, not architecture.** Change colors, labels, data, camera framing —
   keep the render loop / DOM structure intact unless the request needs something the
   template doesn't do.
3. **Verify visually before delivery** (per Francis's standing preference): render the
   page headless and look at the screenshot yourself. See "Verification" below.
4. **Ship as a persisted artifact** when the page is something Francis will reopen or
   share (dashboards, demos) — see the host's own artifact-persistence rules — not as
   a bare file, unless he asked for the raw HTML.

## Templates in this repo

| Template | Path | What it gives you |
|---|---|---|
| Gravitational-lensing background | `templates/gravity-lens/index.html` | Dependency-free WebGL2 fullscreen shader: raymarched light-bending around a compact mass, procedural starfield, an accretion-disk band, drag-to-orbit + scroll-to-zoom. Swap `DISK_INNER/OUTER`, the hot-color mix, and the pull constant to restyle. This is the base for a GARGANTUA-style hero background. |
| Dark data-terminal dashboard | `templates/data-terminal/index.html` | Vanilla JS/CSS dashboard: seeded-PRNG heatmap grid, sortable ticker table, canvas sparkline, live clock. Deterministic demo data (`mulberry32` seed) so screenshots are reproducible. Swap `SYMS` and the seed for a different dataset; **always label demo data as demo data**, the way Kimi's own dashboard does ("ALL HEADLINES ARE ILLUSTRATIVE FIXTURES"). |

No template is shipped for the 3D mechanical typewriter — that needs real 3D
geometry/lighting (three.js + GLTF or similar), which is a bigger, bespoke job each
time rather than a reusable skeleton. Build it fresh with the `modern-web-guidance`
skill's Three.js guidance if asked, and verify it the same way (see below).

## Conceptual/method diagrams

For the "case preview" style academic-paper figures (evidence-credibility pipeline,
evaluation-framework diagram, TFM-Tokenizer diagram), the reusable asset is the
**prompt recipe**, not code — see `corpus/examples/diagram-prompts.md` for the three
captured prompts and the 5-point pattern extracted from them (aspect ratio + title up
front, full-caps box names in flow order, explicit shared-vs-stage-specific boxes,
explicit branches/loops, explicit connector style). Feed that recipe into the
`artifact-diagramming` skill (inline SVG) or the Whiteboard artifact type — both are
already available; no external diagram tool is needed.

## Verification (do this before calling it done)

```bash
# playwright is installed globally in the cloud sandbox
node -e "
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim()+'/playwright');
(async () => {
  const b = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox','--use-gl=swiftshader','--enable-webgl']
  });
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  const errs = []; p.on('pageerror', e => errs.push(String(e)));
  await p.goto('file://' + require('path').resolve('PAGE.html'));
  await p.waitForTimeout(1200);
  await p.screenshot({ path: 'out.png' });
  console.log('console errors:', errs);
  await b.close();
})();
"
```

Then actually **look at `out.png`** with the Read tool before telling Francis it's
done — a zero-console-errors run that renders a black rectangle is not "working."

## Updating this repo

This session cannot `git push` to GitHub directly (no repo access granted) and
Netlify redeploys don't auto-pull from GitHub (the two aren't linked). To update:
1. Redeploy Netlify: `netlify-deploy-services-updater` (`deploy-site`) → run the
   returned `@netlify/mcp` command from the repo directory.
2. Push new/changed files to GitHub via the web UI (`/upload/main/<path>` for new
   paths — it supports "replace this file" for existing ones), since scripted push is
   blocked. Small text edits can go through `/edit/main/<path>` instead.
3. Log the change in `CHECKPOINTS.md` and tag it (`git tag checkpoint-YYYYMMDD-N`) so
   it's easy to roll back — see `ROLLBACK.md`.
