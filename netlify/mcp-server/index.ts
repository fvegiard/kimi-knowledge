import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

// Corpus, templates and SKILL.md are bundled via netlify.toml `included_files`.
const ROOT = path.resolve(process.cwd(), "corpus");
const TEMPLATES_ROOT = path.resolve(process.cwd(), "templates");
const SKILL_PATH = path.resolve(process.cwd(), "SKILL.md");
const LANGS = ["en", "zh"] as const;

async function walk(dir: string, filter: (name: string) => boolean = () => true): Promise<string[]> {
  const out: string[] = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, filter)));
    else if (filter(e.name)) out.push(p);
  }
  return out;
}

function safeUnder(root: string, rel: string): string {
  const abs = path.resolve(root, rel);
  if (!abs.startsWith(root + path.sep)) throw new Error("Path outside allowed root");
  return abs;
}
const safe = (rel: string) => safeUnder(ROOT, rel);

const text = (t: string) => ({ content: [{ type: "text" as const, text: t }] });

export const setupMCPServer = (): McpServer => {
  const server = new McpServer({ name: "kimi-docs-mcp", version: "1.0.0" }, { capabilities: { logging: {} } });

  server.tool(
    "list_kimi_docs",
    "List every page of the official Kimi help center mirror (verbatim, fetched 2026-09-16).",
    { lang: z.enum(LANGS).default("en") },
    async ({ lang }) => {
      const files = (await walk(path.join(ROOT, lang))).map((f) => path.relative(ROOT, f)).sort();
      return text(`${files.length} files\n` + files.join("\n"));
    }
  );

  server.tool(
    "read_kimi_doc",
    "Read the full verbatim text of one page (path from list_kimi_docs, e.g. en/help/agent/agent-swarm.md). Also accepts CAPABILITIES.md.",
    { path: z.string() },
    async ({ path: rel }) => {
      if (rel === "CAPABILITIES.md") return text(await readFile(path.join(ROOT, "CAPABILITIES.md"), "utf8"));
      return text(await readFile(safe(rel), "utf8"));
    }
  );

  server.tool(
    "search_kimi_docs",
    "Case-insensitive search across the mirror. Returns file:line matches.",
    { query: z.string().min(2), lang: z.enum(LANGS).default("en"), limit: z.number().int().min(1).max(200).default(50) },
    async ({ query, lang, limit }) => {
      const q = query.toLowerCase();
      const hits: string[] = [];
      for (const f of await walk(path.join(ROOT, lang))) {
        const lines = (await readFile(f, "utf8")).split("\n");
        lines.forEach((l, i) => {
          if (hits.length < limit && l.toLowerCase().includes(q)) hits.push(`${path.relative(ROOT, f)}:${i + 1}: ${l.trim().slice(0, 240)}`);
        });
        if (hits.length >= limit) break;
      }
      return text(hits.length ? hits.join("\n") : "No match");
    }
  );

  server.tool(
    "read_kimi_skill",
    "Read SKILL.md: the workflow for building Kimi-style demo pages fast, using the ready-made templates and the diagram-prompt recipe.",
    {},
    async () => text(await readFile(SKILL_PATH, "utf8"))
  );

  server.tool(
    "list_templates",
    "List every ready-made, screenshot-verified page template in this repo (WebGL backgrounds, dashboards, etc.). Each is a working single-file HTML starting point.",
    {},
    async () => {
      const files = (await walk(TEMPLATES_ROOT)).map((f) => path.relative(TEMPLATES_ROOT, f)).sort();
      return text(`${files.length} files\n` + files.join("\n"));
    }
  );

  server.tool(
    "read_template",
    "Read the full source of one template file (path from list_templates, e.g. gravity-lens/index.html).",
    { path: z.string() },
    async ({ path: rel }) => text(await readFile(safeUnder(TEMPLATES_ROOT, rel), "utf8"))
  );

  return server;
};
