# Attribution — real captured source

Everything under this directory (`gargantua-raytracer/`, `gmt-terminal/`,
`impact-typewriter/`) is **not original work by Claude or Francis**. It is the
actual client-side source code of three showcase demo pages served live by
Kimi/Moonshot AI at kimi.com, captured by fetching the real HTTP responses
(HTML, CSS, JS, WebGL shaders, three.js modules, fonts) the browser loads —
via DevTools/network inspection and `curl`, not rewritten or approximated
from a description.

Each directory is a verified, runnable mirror: served locally with
`python3 -m http.server` and screenshotted with Playwright/CDP to confirm a
pixel-close match against the live Kimi page before being committed here.
No hand-rolled substitute code is used anywhere in this directory — see
`CHECKPOINTS.md` for the correction history and `../gravity-lens/` /
`../data-terminal/` for the earlier (hand-authored, not-a-substitute)
templates this supersedes for these three demos.

| Directory | Source demo | Stack | Verification screenshot |
|---|---|---|---|
| `gargantua-raytracer/` | GARGANTUA black-hole raytracer | three.js ES modules (core + OrbitControls, EffectComposer/RenderPass/ShaderPass/UnrealBloomPass/Pass/MaskPass, CopyShader/LuminosityHighPassShader) + custom GLSL in `js/shaders.js`, `js/main.js` (893 lines) | `gargantua-real1.png` |
| `gmt-terminal/` | GMT market/terminal dashboard | Vanilla JS, multi-file (`data/fixtures`, `accept`, `util`, `adapters`, `sessions`, `charts`, `widgets`, `widgets2`, `layout`, `inspector`, `selftest`, `app`) + `css/terminal.css` | `gmt-real1.png` |
| `impact-typewriter/` | Impact 3D mechanical typewriter / document editor | Vite-bundled SPA (React + three.js), minified `assets/index-Bf7P26l7.js` (1.64MB), `assets/index-FT4UkMOK.css`, `fonts/CourierPrime-{Regular,Bold}.ttf` | `impact-real1.png` |

Rights to this code belong to Kimi/Moonshot AI. It is kept here as a
reference/rebuild starting point for Francis's own future pages in a similar
visual style, not redistributed as a product. If you plan to ship a page
built from one of these, swap in your own content/branding and don't present
it as an official Kimi page.

## Two harmless 404s (Gargantua only)
`audio/gargantua-intro.mp3` and `audio/gargantua-main.opus` are optional
background-audio assets referenced by the live page that were not required
to reproduce the visual/functional raytracer — confirmed via
`gargantuahttp.log` (three full page loads, HTTP 200 on every HTML/CSS/JS/
vendor file, 404 only on those two audio files).
