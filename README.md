# kimi-knowledge

Verbatim mirror of the official **Kimi help center** (https://www.kimi.com/help and /en/help), fetched 2026-09-16, plus a cited capability catalog, served as an MCP server on Netlify.

- `corpus/en/` — 139 English pages · `corpus/zh/` — 142 Chinese pages (full text, frontmatter = source URL, fetch date, SHA256 of original HTML)
- `CAPABILITIES.md` — every Kimi capability with limits and `file:line` evidence
- `corpus/examples/` — notes on Kimi Agent demo pages + a captured diagram-prompt recipe
- `templates/` — screenshot-verified, working single-file HTML starting points (WebGL gravity-lens background, dark data-terminal dashboard) for rebuilding that kind of page fast
- `SKILL.md` — the workflow that ties it together: which template to start from, how to adapt it, how to verify it visually before shipping
- `MANIFEST.sha256` — integrity of every corpus file

Knowledge alone isn't the point — the goal is to *reproduce* this kind of page
quickly. `SKILL.md` + `templates/` are what make that fast; `corpus/` is the
evidence backing every claim in `CAPABILITIES.md`.

## How it was built (established tools only)
1. `wget -r` on `https://www.kimi.com/help` and `/en/help` (server-rendered pages)
2. `xmllint --xpath //article` → `pandoc -t gfm` (inline SVG icons removed)
3. MCP server = official template `netlify/examples/examples/mcp/serverless-mcp` (`@modelcontextprotocol/sdk` StreamableHTTP, stateless)

## Use
```json
{ "mcpServers": { "kimi-docs": { "type": "http", "url": "https://kimi-docs-mcp.netlify.app/mcp" } } }
```
Tools: `list_kimi_docs`, `read_kimi_doc`, `search_kimi_docs` (the help-center mirror) ·
`list_templates`, `read_template` (the page templates) · `read_kimi_skill` (this
workflow, machine-readable).

## Rollback
Every change is a git tag `checkpoint-*` and a Netlify deploy. See `ROLLBACK.md`.
