# Checkpoints

| Tag | Date (ET) | What | Proof |
|---|---|---|---|
| checkpoint-20260916-1 | 2026-09-16 22:44 | Corpus EN 139 + ZH 142, CAPABILITIES.md, MCP server | netlify dev: 8/8 curl tests OK (initialize, tools/list, list en/zh, read, capabilities, search, traversal blocked) |
| deploy 6aab5427e43d1d7c56d7f9e2 | 2026-09-16 22:46 | First production deploy https://kimi-docs-mcp.netlify.app/mcp | live: 8/8 curl tests OK |
| checkpoint-20260917-1 | 2026-09-16 23:16 | + templates/ (gravity-lens, data-terminal), SKILL.md, diagram-prompts.md; MCP gains list_templates/read_template/read_kimi_skill | local netlify dev 5/5 OK; live Netlify deploy 6aab5a92... 3/3 OK; GitHub byte-identical to local (300/300 files, MANIFEST verified) |
| checkpoint-20260917-2 | 2026-09-17 03:47 | + templates/real-captured/{gargantua-raytracer,gmt-terminal,impact-typewriter}: the REAL client-side source of Kimi's own three showcase demos, extracted via HTTP/DevTools inspection of the live pages (not hand-rolled) and verified pixel-close via Playwright/CDP screenshot; ATTRIBUTION.md + _verification/*.png added; SKILL.md and README.md updated to point at real-captured as primary | local diff: 0 bytes vs verified capture dirs (gmt-src/gargantua-src/impact-src); GitHub: 25 commits, byte-identical uploads (index.html/css/js/vendor/fonts confirmed per-directory after each upload); gargantuahttp.log: 3 full page loads, HTTP 200 on every HTML/CSS/JS/vendor file (only 2 harmless optional-audio 404s) |
