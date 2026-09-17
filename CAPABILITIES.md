# Kimi — What it can do (catalog from official help center, fetched 2026-09-16)

Source corpus: local, verbatim mirror of the English Kimi (Moonshot AI) help center at `corpus/en/help/**/*.md`. Every row below cites a relative file path, exact line number(s) verified with `grep -n`, and a short (≤20 word) verbatim quote from that file. No content is invented and no outside knowledge of Kimi is used — only what these files state. One row (Agentic Search, in **Features**) is sourced from the Chinese mirror (`corpus/zh/`) because the English page for that topic does not exist on disk, per the note in **Coverage**.

---

## 1. Agent (general-purpose Agent mode)

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| General Agent autonomously plans and executes multi-step tasks (research, design, dev, delivery) via reasoning + repeated tool calls | — | corpus/en/help/agent/agent-overview.md:L21 "Kimi autonomously plans and completes the entire process—from requirements research, product proposals, interaction design, and front-end development to final delivery" |
| Agent calls 20+ built-in tools: code writing, terminal, web browsing, image/audio generation, financial data, website deployment | — | corpus/en/help/agent/agent-overview.md:L68 "it includes more than 20 built-in tools covering code writing, terminal operations, web browsing, image generation, audio generation" |
| Agent product lines: Websites, Docs, Sheets, PPT (Slides), Deep Research, Agent Swarm, Kimi Claw | — | corpus/en/help/agent/agent-overview.md:L49-57 "Kimi already offers multiple AI product lines, including: - Website generation (Websites)... - Document processing (Docs)..." |
| Agent deliverables: runnable code projects, folders, data analysis/charts, Office documents (Word/PDF/Markdown/PPT) | — | corpus/en/help/agent/agent-overview.md:L99-102 "Code project: complete runnable website code, applications, and more...Office documents: Word documents, PDF documents, Markdown documents, PPT presentations" |
| Web/App entry points: kimi.com/agent (web); Kimi App model switch to K3 (mobile/tablet) | — | corpus/en/help/agent/agent-overview.md:L77-78 "Web: https://www.kimi.com/agent...Phone/tablet: open the Kimi App and select the K3 or K3 Swarm model" |
| Agent has a 128K-token context window (~80,000–100,000 Chinese characters); excess content is dropped, not processed | Context capped at 128K tokens | corpus/en/help/agent/agent-features-and-limits.md:L25 "Agent has a 128K-token context window, which can hold roughly 100,000 Chinese characters" |
| A single Agent task usually takes 5–20 minutes; do not click "Stop output" or the task is interrupted | Runs asynchronously in background | corpus/en/help/agent/agent-features-and-limits.md:L29 "in Agent mode, a single task usually takes 5–20 minutes to complete, and Agent Swarm may take longer" |
| General Agent typically outputs only one file per task; for multiple files (e.g. Word + PPT together) use Agent Swarm instead | Single-file output limit in general Agent mode | corpus/en/help/agent/agent-features-and-limits.md:L23 "in general Agent scenarios, only one file...can usually be output at a time. If you need multiple files...use Agent Swarm" |
| Full-stack website building (front-end + back-end DB + login) is supported directly in Agent, not only in Websites | — | corpus/en/help/agent/agent-features-and-limits.md:L47 "In April 2026, Agent and Websites were upgraded with full-stack capabilities...Agent already supports them" |
| Deliverables include a downloadable ZIP under `/mnt/okcomputer/output/` | — | corpus/en/help/agent/agent-features-and-limits.md:L69 "A downloadable ZIP package located in the `/mnt/okcomputer/output/` directory" |
| Agent billed from Kimi's unified/shared credit pool across all membership features, by actual token consumption | Credits refresh monthly | corpus/en/help/agent/agent-quota-and-billing.md:L13 "Agent mode is billed against Kimi's unified credit system...credits deducted based on actual token consumption" |
| Kimi Code has its own separate 5-hour/week usage cap on top of the shared pool; this cap applies only to Kimi Code | 5 hours/week, Kimi Code only | corpus/en/help/agent/agent-quota-and-billing.md:L17 "Kimi Code also has a separate usage limit of 5 hours per week; this applies only to Kimi Code" |
| No credits deducted for a failed Agent task; only successful tasks are billed | — | corpus/en/help/agent/agent-quota-and-billing.md:L55 "Credits are not deducted when a task fails" |
| Example credit cost: simple PPT ≈1–2% of Moderato-plan credits; one Deep Research task ≈5–10% | Moderato plan reference | corpus/en/help/agent/agent-quota-and-billing.md:L22 "generating a simple PPT may use about 1–2% of your credits, while running one Deep Research task may use about 5–10%" |
| K2.6, K3 and K3 Swarm models power Agent; K3 supports up to 300 Subagents and 4.5x speedup via Agent Swarm | — | corpus/en/help/agent/agent-overview.md:L36-40 "the 'Agent Swarm' architecture...supports 300 Subagent running in parallel to complete 4,000 collaborative steps...4.5 times faster" |

## 2. Agent Swarm (K3 Swarm / multi-agent parallel mode)

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Agent Swarm auto-coordinates up to 300 parallel Subagents without predefined roles/workflows | Up to 300 Subagents | corpus/en/help/agent/agent-swarm.md:L17 "Deploy up to 300 Subagent instances simultaneously" |
| Executes 4,000+ tool calls in a single task | 4,000+ tool calls/task | corpus/en/help/agent/agent-swarm.md:L18 "Execute more than 4,000 tool calls in a single task" |
| Runs 4.5x faster than a single sequential Agent | 4.5x speedup | corpus/en/help/agent/agent-swarm.md:L19 "Run 4.5× faster than sequential execution by a single Agent" |
| Currently powered by Kimi K3 (K3 Swarm), improving large-scale parallel search and batch processing | — | corpus/en/help/agent/agent-swarm.md:L21 "Agent Swarm is currently powered by Kimi K3 (K3 Swarm), further improving large-scale parallel search and batch processing" |
| Entry points: kimi.com/agent-swarm (web) or K3 Swarm model in Kimi App | — | corpus/en/help/agent/agent-swarm.md:L43-44 "Web: https://www.kimi.com/agent-swarm...Mobile/tablet: Open the Kimi App and select the K3 Swarm model" |
| Consumes "relatively high credit (roughly several times that of a regular Agent task)" | Available to Moderato, Allegretto, Allegro plans (not Andante) | corpus/en/help/agent/agent-swarm.md:L48 "Agent Swarm tasks consume relatively high credit...Available to Moderato, Allegretto, and Allegro members" |
| Outputs multiple files/deliverables per task (unlike single-file general Agent) | — | corpus/en/help/agent/agent-swarm.md:L67 "Depending on the task type, Kimi Agent Swarm generates the corresponding outputs, including multiple files" |
| BrowseComp benchmark: accuracy improved from 15.9% (single agent) to 33.3% with Agent Swarm | — | corpus/en/help/agent/agent-swarm.md:L181 "Accuracy improved significantly: from 15.9% with a single agent to 33.3%" |
| Six application scenarios: large-scale retrieval, batch downloads, broad reading (100+ docs), long-form writing (100K+ chars), complex programming (front-end dev/code review/multi-file refactor), office automation | — | corpus/en/help/agent/agent-swarm.md:L188-195 "Agent Swarm is especially suitable for the following complex tasks: 1. Large-scale information retrieval...5. Complex programming tasks: front-end development, code review, and multi-file refactoring" |
| Membership tiers show scaling subtask parallelism: Moderato 2 subtasks, Allegretto 4, Allegro 8 | Plan-dependent | corpus/en/help/membership/membership-overview.md:L117 "Agent Swarm concurrent subtasks — 2 subtasks \| 4 subtasks \| 8 subtasks" |

## 3. Kimi Work (local desktop Agent)

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Kimi Work is a general-purpose **local** Agent for knowledge workers, in "Work" mode of Kimi desktop (Mac/Windows) | Mac: Apple silicon, macOS 12+; Windows 10+ | corpus/en/help/kimi-work/overview.md:L13 "Kimi Work is a general-purpose local Agent for knowledge workers, available in the 'Work' mode of the Kimi desktop client (Mac / Windows)" |
| Powered by Kimi Code as kernel + Kimi K3 model; runs Skills and scheduled tasks locally | — | corpus/en/help/kimi-work/overview.md:L21 "Local Agent kernel: Powered by Kimi Code as its kernel and the Kimi K3 model" |
| Three permission levels: Default (auto for routine, ask for sensitive), Manual approval, Fully automatic | — | corpus/en/help/kimi-work/overview.md:L34-37 "Default: routine operations run automatically...Manual approval...Fully automatic: run directly without asking" |
| Built-in Kimi WebBridge for human-like browser automation | — | corpus/en/help/kimi-work/overview.md:L26 "Kimi WebBridge: A built-in browser-operation solution that uses a browser just like a person would" |
| Goal Mode: Agent works continuously toward one goal for up to 24 hours in an autonomous loop | Up to 24 hours | corpus/en/help/kimi-work/goal-mode.md:L13 "Goal mode lets an Agent work continuously toward a single goal (for up to 24 hours)" |
| Example: organizes 80 papers / 2,000 PDF pages / 1M words into an Obsidian knowledge base in a few hours (Goal Mode) | — | corpus/en/help/kimi-work/goal-mode.md:L32 "Kimi Work can spend a few hours automatically organizing 80 papers, 2,000 pages of PDFs, and 1 million words into an Obsidian knowledge base" |
| Dashboard: persistent container of widgets, up to 2 dashboards/user, up to 20 widgets/dashboard | 2 dashboards, 20 widgets/dashboard | corpus/en/help/kimi-work/dashboard.md:L19 "Each user can create up to 2 dashboards" and L27 "Each dashboard can hold up to 20 widgets" |
| Widgets: interactive pages the model generates inline in chat, can bind to live-updating tasks | — | corpus/en/help/kimi-work/widgets.md:L13 "A widget is an interactive page generated by the model and presented instantly in a chat" |
| Plugin Center: built-in professional databases (Wind, Hundsun Gildata, S&P Global, IMF, Tianyancha) + curated apps (Notion, Canva, GitHub, Cloudflare, Neon, Supabase) | — | corpus/en/help/kimi-work/plugin-center.md:L21 "Financial data: Wind Financial Data Service, Hundsun Gildata financial data, S&P Global Market Intelligence...IMF...Database" |
| Kimi Work scheduled tasks run **locally** and only while the app is open; missed triggers are not run retroactively | App must stay open | corpus/en/help/kimi-work/kimi-work-faq.md:L45 "On Kimi Work desktop, scheduled tasks run locally and only execute while the app is open...are not run retroactively" |
| Kimi Work differs from cloud tasks: "tasks created in Kimi run in the cloud and don't require the client to stay open" | — | corpus/en/help/kimi-work/kimi-work-faq.md:L45 "(By contrast, tasks created in Kimi run in the cloud and don't require the client to stay open.)" |
| Release notes show active feature cadence: built-in Agent browser (v3.2.0), remote control from phone (v3.2.5), website-deployment plugin (v3.2.7), Skill discovery/creation (v3.1.8) | — | corpus/en/help/kimi-work/release-notes.md:L181 "Added a built-in Agent browser: browser tabs are bound to conversations...the Agent can directly operate the browser" |

## 4. Websites (Kimi Websites — full-stack site/app builder)

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Kimi Websites is the full-stack website-building product **of Kimi Agent**, powered by Kimi K3 | — | corpus/en/help/websites/websites-overview.md:L15 "Kimi Websites is the full-stack website-building product of Kimi Agent, powered by Kimi K3, a multimodal visual agentic AI model" |
| Generates complete full-stack site from natural language, a design mockup, or a screen recording ("Vibe Coding") | — | corpus/en/help/websites/websites-overview.md:L15 "Its core capability is visual programming (Vibe Coding): you can generate a complete full-stack website from natural language, a design mockup, or a screen recording" |
| Front-end (HTML/CSS/JS), back-end (persistent DB, login/auth), and engineering (version mgmt, preview, deploy) all supported | — | corpus/en/help/websites/websites-overview.md:L19-21 "Frontend: HTML page structure, CSS layouts and styling...Backend: Persistent database storage, user login, and authentication" |
| Three access methods: dedicated Websites page, mobile app Websites mode, or **general Agent mode** selecting the K3 model | — | corpus/en/help/websites/websites-overview.md:L67-73 "Method 3: General Agent Mode...select the K3 model and enter task instructions related to building a website" |
| Custom subdomain (e.g. `abc.ok.kimi.link`), one-click publish, code export/download for self-hosting | — | corpus/en/help/websites/websites-overview.md:L37 "Custom URL — Customize the site subdomain, such as the `abc` in `abc.ok.kimi.link`" |
| Deliverables saved to `/mnt/agents/output/app/`; preview only works if project sits in this exact directory | Must be in `/mnt/agents/output/app` | corpus/en/help/websites/websites-why-not-working.md:L30 "A downloadable Zip package located in the `/mnt/agents/output/app/` directory"; corpus/en/help/websites/websites-faq.md:L21 "The website project must be located at `/mnt/agents/output/app`" |
| Current limitations: no third-party payment (WeChat Pay/Alipay), no third-party OAuth (WeChat/GitHub), no complex external SaaS API integration | Not yet supported | corpus/en/help/websites/websites-why-not-working.md:L49-51 "Third-party payment integration, such as WeChat Pay and Alipay...Third-party OAuth login...Complex server-side API integrations" |
| Suitable for: personal homepages, landing pages, product showcases, simple tool pages, small game prototypes, simple DB+user-system sites | — | corpus/en/help/websites/websites-faq.md:L121-123 "Personal homepages/portfolios, event landing pages, product showcase pages, simple tool pages, small game prototypes" |
| Not suitable for: complex payment systems, high-concurrency production hosting, long-term custom-domain business hosting | — | corpus/en/help/websites/websites-faq.md:L126-129 "Complex websites with payment systems...High-concurrency, high-availability formal production environments" |
| Generating/modifying a site consumes "a significant amount of tokens/credits" depending on page count, media, iterations | — | corpus/en/help/websites/websites-faq.md:L103 "Website generation is a complex task that usually consumes a significant amount of tokens/credits" |
| Publishing a site incurs an ongoing ≈0.08%/day "Agent Website - Cloud Service" credit charge while it stays online | ≈0.08% credits/day while published | corpus/en/help/membership/membership-pricing.md:L129 "This is the cloud service fee for a website you published with Agent...about 0.08% of your membership credits is deducted" |

## 5. Docs & Sheets

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Kimi Docs generates long-form professional documents (white papers, contracts, proposals) directly as Word | — | corpus/en/help/docs-and-sheets/docs-and-sheets-overview.md:L28 "Generating long-form professional documents from scratch, including white papers, research reports, contracts, proposals" |
| Inserts revision comments/suggested edits into existing Word docs while preserving original formatting | — | corpus/en/help/docs-and-sheets/docs-and-sheets-overview.md:L47 "Kimi can directly output ready-to-use Word documents and automatically insert revisions and comments in Word" |
| Generates publication-grade PDF brochures with cover, TOC, body, captions; compares multiple contract versions | — | corpus/en/help/docs-and-sheets/docs-and-sheets-overview.md:L35 "Generating professional report-style PDF files with rich visuals, including cover pages, tables of contents, body text, and captions" |
| Kimi Sheets: large-scale data entry, multi-source report consolidation, cell/multi-sheet linkage awareness, outputs .xlsx | — | corpus/en/help/docs-and-sheets/docs-and-sheets-overview.md:L79 "Large-scale data entry: Extract data from documents...organizing it into a 1,000-row Excel sales lead sheet" |
| Access via dedicated kimi.com/docs page, mobile Docs mode, or general Agent mode (K3 model) | — | corpus/en/help/docs-and-sheets/docs-and-sheets-overview.md:L51 "Kimi Docs dedicated page: https://www.kimi.com/docs (supports both Chinese and English interfaces)" |
| Downloads original-format .docx/.xlsx/.pdf for continued local editing | — | corpus/en/help/docs-and-sheets/docs-and-sheets-overview.md:L61 "download the original-format .docx / .xlsx / .pdf file and continue editing it locally" |
| Example use case: merge 12 monthly Excel files into an annual summary with month-over-month formulas across sheets | — | corpus/en/help/docs-and-sheets/docs-and-sheets-sheets-cases.md:L42 "Merge these 12 spreadsheets into an annual summary, calculate month-over-month growth for each month, and use formulas" |
| Example use case: translate a 50-page English PDF to Chinese, preserving formulas and code | — | corpus/en/help/docs-and-sheets/docs-and-sheets-docs-cases.md:L26 "Kimi can translate a 50-page English PDF into Chinese page by page, while preserving all formulas and code" |

## 6. PPT

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Kimi PPT: K3-powered smart presentation generator; one line/paste/upload → complete deck in minutes | — | corpus/en/help/ppt/ppt-overview.md:L15 "Powered by the K3 LLM, it automatically optimizes layouts and design to deliver more professional visuals...generate a complete presentation...within minutes" |
| Accepts multi-format input: PDF, Word, PPTX, Excel, TXT, images; supports image remix and custom-template creation | — | corpus/en/help/ppt/ppt-overview.md:L15 "Kimi PPT currently supports multi-format input, including PDF, Word, PPTX, Excel, TXT, and images" |
| AI deep-research + content generation: facts/data checked against real sources before writing | — | corpus/en/help/ppt/ppt-overview.md:L30-31 "automatically completes topic research, data integration, and content writing...Referenced text and data are checked against real information sources" |
| Two creation modes: Smart Layout (5–10 min, AI-designed layout) vs Classic Templates (3–5 min, template-filled) | — | corpus/en/help/ppt/ppt-creation-mode.md:L16-19 table "Smart Layout...Estimated time 5-10 minutes" / "Classic Templates...3-5 minutes" |
| Entry points: kimi.com/slides (web/app) or describe the need directly inside general Agent mode | — | corpus/en/help/ppt/ppt-troubleshooting.md:L17-19 "Web: Open kimi.com...Agent mode: In the general Agent mode, simply describe what you need for the PPT" |
| Free monthly credit allotment lets users try full PPT functionality before paying | — | corpus/en/help/ppt/ppt-overview.md:L42 "A certain amount of free credits is available each month, so you can experience the full functionality without paying" |
| Downloadable/editable .pptx output; must be opened with PowerPoint/WPS/Keynote (older office software may be incompatible) | — | corpus/en/help/ppt/ppt-troubleshooting.md:L59 "Make sure you are opening the file with software that supports the `.pptx` format, such as Microsoft PowerPoint, WPS, or Keynote" |

## 7. Deep Research

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Deep Research runs on Kimi-Researcher, an in-house Agent model trained with End-to-End Agentic RL | — | corpus/en/help/deep-research/deep-research-overview.md:L15 "powered by Kimi-Researcher, a model developed in-house by Moonshot AI...trained with End-to-End Agentic RL" |
| Per task: ~23 reasoning steps, plans ~74 keywords, finds 206 URLs, keeps top 3.2% highest-quality content | — | corpus/en/help/deep-research/deep-research-overview.md:L22-23 "performs an average of 23 reasoning steps per task...plans an average of 74 keywords and finds 206 URLs...selects the top 3.2% of content" |
| Delivers two outputs: a 10,000+ Chinese-character cited report (Markdown/PDF/Word) and an interactive shareable HTML visualization | — | corpus/en/help/deep-research/deep-research-overview.md:L36-38 "The report is more than 10,000 Chinese characters on average...cites about 26 high-quality, traceable sources" |
| Context length: 128K tokens (~60,000–100,000 Chinese characters); output limit ~8K–16K tokens, much smaller than context | 128K token context | corpus/en/help/deep-research/deep-research-faq.md:L39 "Kimi-Researcher has a context length of 128K tokens (about 60,000–100,000 Chinese characters)" |
| Not suitable for: creative writing (fiction/scripts/lyrics), entertainment (fortune-telling/naming/lottery), fixed templates/editable PPT | — | corpus/en/help/deep-research/deep-research-overview.md:L61-63 "Creative writing: online fiction, scripts, lyrics...Entertainment questions: Ba Zi chart reading, fortune analysis...Fixed templates...generating editable PPT files" |
| Execution time 10–25 minutes; asynchronous, runs in background with completion notification | — | corpus/en/help/deep-research/deep-research-overview.md:L123 "Execution time: Deep Research usually takes 10–25 minutes...task will run asynchronously in the background" |
| Credit cost ≈5–10% of monthly credits (Moderato plan reference); failed tasks are refunded | Moderato plan reference | corpus/en/help/deep-research/deep-research-overview.md:L124 "One Deep Research task consumes about 5–10% of monthly credits (based on the Moderato plan)" |
| Entry points: kimi.com/deep-research (web) or Kimi App Taskbar → Deep Research Agent mode | — | corpus/en/help/deep-research/deep-research-overview.md:L75-76 "Web: https://www.kimi.com/deep-research...Mobile/tablet: Open Kimi App → Taskbar → Switch to Deep Research Agent mode" |

## 8. Kimi Code

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Kimi Code CLI is a terminal AI Agent: reads/edits code, runs shell commands, searches/fetches web pages, self-plans | Requires Kimi membership or API key | corpus/en/help/kimi-code/cli-getting-started.md:L13 "It helps with software development tasks and terminal operations: reading and editing code, running Shell commands, searching and fetching web pages" |
| Kimi Code for VS Code: sidebar AI pair-programming extension with code completion, file editing, web search | — | corpus/en/help/kimi-code/membership-guide.md:L73 "Suitable for developers who prefer using the VS Code editor. Work with the AI from the editor sidebar, with support for code completion, file editing, web search" |
| Works with third-party Coding Agents via API Key: Claude Code, Roo Code, OpenCode, OpenClaw, Hermes | Requires API key, personal use only | corpus/en/help/kimi-code/membership-guide.md:L97 "Kimi Code benefits can be used in mainstream Coding Agents, such as Claude Code, Roo Code, and OpenCode...OpenClaw and Hermes" |
| Standard vs HighSpeed model tiers: HighSpeed is ~5–6x faster output at ~3x credit cost | HighSpeed requires Allegretto plan or above | corpus/en/help/kimi-code/membership-guide.md:L466 table "Output speed — Baseline \| ~5–6× faster than Standard"; L137 "Membership — Available to all Kimi Code members \| Requires an Allegretto plan or above" |
| Supports ~300–1,200 requests per 5 hours, max concurrency 30, output up to 100 tokens/s | 300–1,200 req/5h, concurrency 30 | corpus/en/help/kimi-code/membership-guide.md:L33 "High request volume and concurrency: Supports about 300–1,200 requests every 5 hours, with maximum concurrency of 30" |
| Credits refresh every 7 days (not monthly); unused credits do not carry over; separate 5-hour rolling rate-limit window | 7-day refresh cycle | corpus/en/help/kimi-code/benefits.md:L15 "Kimi Code credits are based on your subscription date and refresh automatically every 7 days. Unused credits do not carry over" |
| Extra Usage pack lets users pay-as-you-go past subscription limits, shared wallet with Kimi web | Min ¥25/top-up, ¥10,000 balance cap | corpus/en/help/kimi-code/benefits.md:L198 "Top-up limits: minimum ¥25 per top-up, up to 10 times and ¥3,000 per day, with a balance cap of ¥10,000" |
| Plan mode: read-only planning (Glob/Grep/ReadFile only) before AI writes/executes anything, requires approval | — | corpus/en/help/kimi-code/cli-work-modes.md:L15-17 "Plan mode is a read-only planning mode...the AI can only use read-only tools (Glob, Grep, ReadFile)...It cannot modify any files or run commands" |
| Goal mode: multi-turn autonomous work toward a defined outcome; stops as complete/blocked/paused | — | corpus/en/help/kimi-code/cli-goals.md:L13 "A goal lets Kimi Code keep working toward a clearly defined outcome across multiple turns" |
| YOLO mode: skip all confirmations and auto-perform all operations (use with caution) | — | corpus/en/help/kimi-code/cli-interaction.md:L72 "If you trust the AI's actions, you can use YOLO mode to skip all confirmations...AI will automatically perform all operations" |
| IDE integration via Agent Client Protocol (ACP): Zed, JetBrains IDEs, Paseo | — | corpus/en/help/kimi-code/cli-ides.md:L13 "Kimi Code CLI can be integrated into IDEs through Agent Client Protocol (ACP)" |
| Session export/import, `/compact` context compression, `/fork` branching, subagent + Plan-mode state persistence across resumes | — | corpus/en/help/kimi-code/cli-sessions.md:L47-56 "Kimi Code CLI automatically saves and restores the session's runtime state...Subagent instances: the state and context history of Subagent instances created...through the Agent tool" |

## 9. Kimi Claw (OpenClaw-based always-on cloud/local automation bot)

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Kimi Claw one-click deploys OpenClaw (a personality + long-term-memory AI assistant) to the cloud, no server/Docker/CLI setup | One-click deploy: Allegretto plan or higher | corpus/en/help/kimi-claw/overview.md:L19-21 "Kimi will deploy OpenClaw to the cloud for you in one click—no need to buy a server or configure anything...One-click deployment is available only on Allegretto and higher plans" |
| Auto-configures Kimi K2.6 model + membership credits + Kimi Web Search, no separate API setup | — | corpus/en/help/kimi-claw/overview.md:L22 "Kimi automatically configures the Kimi K2.6 model and links it to your Kimi membership benefit credits, with no separate API setup required" |
| Can switch to Kimi K3 model (1M-token context) via local OpenClaw config edit | — | corpus/en/help/kimi-claw/overview.md:L55 "verify that session_status shows model as kimi-coding/k3 and the context limit as 1.0m" |
| Deploys to chat channels: WeChat, Feishu, WeCom, DingTalk, Weibo, plus web and iOS/Android apps | — | corpus/en/help/kimi-claw/platform-support.md:L15-24 "Web: Access via kimi.com...Mobile: Kimi Claw is available in the iOS and Android apps...WeChat...Feishu...WeCom...DingTalk...Weibo" |
| Terminal commands manage scheduled tasks (`/cron`), Skills (`/skills`), memory (`/memory`), config, debugging | — | corpus/en/help/kimi-claw/concepts.md:L38-39 "`/cron` — View/manage scheduled tasks (create, read, update, delete)...`/cron add \"<schedule>\" <command>`" |
| Includes ClawHub skills library with 5,000+ community skills for chained/multi-step autonomous workflows | 5,000+ skills | corpus/en/help/agent/agent-overview.md:L57 "Kimi Claw: a zero-deployment cloud automation platform...It includes a 5,000+ skills library (ClawHub)" |
| Cloud sandbox billed continuously: ≈0.6% of membership credits deducted daily at 4 PM, even when idle | ≈0.6% credits/day | corpus/en/help/membership/membership-pricing.md:L124 "about 0.6% of your membership credits is deducted each day, settled at 4:00 PM" |
| Token-limit overrun handled via `/new`, `/compact`, or `/reset`; rate limits checked via Kimi Code console | — | corpus/en/help/kimi-claw/conversation-limits.md:L21-25 "Send the /new command to start a new conversation...Use /compact to compress the current context...Use /reset to reset Kimi Claw" |
| Desktop deployment: one-click local OpenClaw in the Kimi desktop client, with persona/memory migration from an existing OpenClaw | — | corpus/en/help/kimi-claw/desktop-deployment-guide.md:L21 "Kimi can also, with your authorization, remix the existing OpenClaw's persona, Memory Space, and capabilities for easy one-click migration" |

## 10. WebBridge (Kimi Browser Extension)

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Browser extension for AI agents: opens pages, clicks buttons, fills forms, extracts info like a human | macOS/Windows, Chrome or Edge | corpus/en/help/kimi-webbridge/kimi-webbridge-introduction.md:L13 "It can open pages, click buttons, fill out forms, and extract information, letting an agent handle tedious web tasks just like a person would" |
| Two modes: browser sidebar chat, or remote control by a local Agent (Kimi Work, Claude Code, etc.) | — | corpus/en/help/kimi-webbridge/kimi-webbridge-introduction.md:L17-20 "Browser sidebar...Remote control by a local Agent: Let AI agents like Kimi Work or Claude Code drive the extension remotely" |
| All execution is local — login states and page content never leave the device (security isolation) | — | corpus/en/help/kimi-webbridge/kimi-webbridge-how-it-works.md:L20 "Security Isolation: All execution happens locally—login states and web page content never leave your device" |
| Feature set: web navigation, element clicks, form filling, screenshots, structured content extraction, persistent login sessions | — | corpus/en/help/kimi-webbridge/kimi-webbridge-how-it-works.md:L32-39 table "Web navigation — Automatically open a specified URL...Persistent login sessions — Use login states already saved in the browser" |
| Supports recording a workflow into a reusable Skill, or turning a whole site into a Skill via reverse-engineered APIs | — | corpus/en/help/kimi-webbridge/kimi-webbridge-use-cases.md:L73-88 "Record actions as a skill...Turn a site into a skill...Kimi automatically analyzes how the site is structured...packages it as a ready-to-use skill" |
| Works with Claude Code, Codex, Cursor, Kimi Code, Hermes Claw and other Local Agents | — | corpus/en/help/kimi-webbridge/kimi-webbridge-faq.md:L86 "Kimi Browser Extension supports all Local Agents, including Claude Code, Codex, Cursor, Kimi Code, Hermes Claw" |
| Renamed from Kimi WebBridge to Kimi Browser Extension; local-Agent call path unchanged, new sidebar needs Kimi login | — | corpus/en/help/kimi-webbridge/kimi-webbridge-faq.md:L17 "Kimi WebBridge has been renamed to Kimi Browser Extension, with new features including a browser sidebar entry" |

## 11. Plugins & Skills

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Plugins connect external tools/apps (financial data, office software, design tools) so Kimi can call them mid-task | — | corpus/en/help/plugins-and-skills/overview.md:L13 "Once you install a plugin, Kimi can directly call the corresponding third-party capability while completing a task" |
| Plugin components can include Skills, MCP, Agents, Hooks, Commands, System Prompt (full set in Kimi Work/Kimi Code) | Web UI supports only MCP + Skills subset | corpus/en/help/plugins-and-skills/overview.md:L54-65 table "Skills — Provide the knowledge, steps, and usage guidance...MCP — Connect external software, services, databases, or APIs" |
| Usable only with K3/K3 Swarm models, and in Deep Research/Websites/PPT; not yet supported in Kimi Claw or Kimi Plus chat | Not available in Kimi Claw yet | corpus/en/help/plugins-and-skills/overview.md:L74-78 "You can use plugins when you switch the model to K3 or K3 Swarm, and in the Deep Research, Websites, and PPT scenarios...Plugins are not yet supported in Kimi Claw" |
| Skills = reusable knowledge packages (approach, best practices, optional scripts) loaded via progressive disclosure | — | corpus/en/help/plugins-and-skills/what-are-skills.md:L15-19 "Skills are reusable knowledge packages that extend what an Agent can do...Optional scripts, tools, and reference resources" |
| Official Skills (e.g. `docx`, `deep-research`) auto-invoked; Recommended Skills one-click add; Custom Skills user-authored | — | corpus/en/help/plugins-and-skills/what-are-skills.md:L56-61 "docx — Create and edit Word documents...deep-research — Uses a tool suite for Deep Research and long-form report generation" |
| Personal plugins created via Plugin Builder from one sentence, an imported repo, or by reverse-engineering a webpage | Requires Kimi Work desktop app | corpus/en/help/plugins-and-skills/create.md:L13 "you can use the built-in Plugin Builder skill to turn a one-sentence idea, an external plugin repository, or any webpage into a plugin" |
| Skill creation consumes tokens (gifted attempts first); up to 3 concurrent creation tasks; 10 office-doc-to-Skill creations/day | 3 concurrent, 10/day office-doc Skills | corpus/en/help/plugins-and-skills/create-custom-skills-faq.md:L36-37 "Concurrent task limit: You can have up to 3 tasks running at the same time...Daily limit: ...up to 10 times per day" |
| Publishing to the official marketplace requires a review-team application via feedback form | — | corpus/en/help/plugins-and-skills/publish.md:L13 "open the plugin details page, click the '✉️' button...select 'Apply for official marketplace publication'" |
| Skills usable in Agent mode, Kimi Claw (via download/sync from web), and Kimi Code (via `/skill:<name>` and Flow Skills) | Skill entry points unavailable in third-party OpenClaw/local/desktop Claw | corpus/en/help/plugins-and-skills/use-skills-in-claw.md:L51 "Skill entry points are currently unavailable in third-party OpenClaw, local Claw, and desktop Claw" |

## 12. API (Kimi Open Platform)

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Kimi API platform.kimi.com: text generation, multi-turn chat, file parsing, web search, OpenAI-compatible format | — | corpus/en/help/kimi-api/api-overview.md:L17 "Kimi API is built on Moonshot's in-house LLM and provides core capabilities such as text generation, multi-turn conversations, file parsing, and web search" |
| Billed per token (input/output separately); 1M = 1,000,000 tokens; web search add-on costs ¥0.03/call | ¥0.03 per web-search call | corpus/en/help/kimi-api/api-pricing.md:L17-23 "Billed by token: Each API call is charged separately based on input tokens and output tokens...Web search: Each call that uses web search is charged an additional ¥0.03" |
| Context Caching discounts repeated system-prompt/reference-doc tokens on cache hit | — | corpus/en/help/kimi-api/api-pricing.md:L27 "Context Caching lets you cache frequently used context...tokens served from a cache hit are billed at a discounted rate" |
| JSON Mode forces valid-JSON output via `response_format: {"type":"json_object"}` | — | corpus/en/help/kimi-api/api-model-capabilities.md:L19 "Set response_format in the request parameters to {\"type\": \"json_object\"}" |
| Vision models support OCR-like text recognition (Chinese/English/multi-language) and structured content (tables/charts); billed at fixed 1024 tokens/image | 1024 tokens/image flat rate | corpus/en/help/kimi-api/api-model-selection.md:L30 "Each image is billed at a fixed 1024 tokens, regardless of image size or resolution" |
| No model fine-tuning, no TTS/ASR support currently | Not supported | corpus/en/help/kimi-api/api-model-capabilities.md:L24 "Kimi API does not currently support user-initiated model fine-tuning"; L37 "does not currently support TTS or ASR" |
| No video-multimodal input, no PPT-generation API, no Deep Research API via the platform | Not available via API | corpus/en/help/kimi-api/api-model-selection.md:L36-38 "Video multimodality: ... not currently supported...PPT generation API: ...not yet available via API...Deep Research API: ...not yet available via API" |
| Free trial: ¥15 voucher for new mainland-China-mobile-number users, valid 3 months, deducted automatically before top-up balance | ¥15, 3-month validity | corpus/en/help/kimi-api/api-free-trial.md:L18-19 "Eligible users: New users who register with a mainland China mobile number...Voucher amount: An RMB 15 voucher is granted upon registration...Validity period: ...valid for 3 months" |
| Rate limit tiers scale with cumulative top-up amount; 429 responses should use exponential backoff | Tier tied to total top-up | corpus/en/help/kimi-api/api-rate-limits.md:L17 "API rate limits are tiered based on your account's total top-up amount. The higher your total top-up amount, the higher the available rate limits" |
| API data is never used for model training (unlike default web-chat data policy) | Different policy from web chat | corpus/en/help/kimi-api/api-data-security.md:L17 "No. User data submitted via the API, including input content and model outputs, will not be used to train or improve Kimi models" |
| No local/private deployment of the API is supported at this time | Not supported | corpus/en/help/kimi-api/api-troubleshooting.md:L73 "Kimi API currently provides cloud API services only and does not support local private deployment at this time" |
| Kimi Code (`kimi-for-coding`) and platform API are separate billing systems / Base URLs, not interchangeable | — | corpus/en/help/kimi-code/cli-getting-started.md:L185 "api.kimi.com and api.moonshot.cn are two completely separate account systems, and their API Keys are not interchangeable" |

## 13. Membership / Quotas / Pricing

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Four personal plans: Andante ¥49/mo, Moderato ¥99/mo, Allegretto ¥199/mo, Allegro ¥699/mo | — | corpus/en/help/membership/membership-pricing.md:L18-22 table "Andante — ...¥49/month...Moderato — ...¥99/month...Allegretto — ...¥199/month...Allegro — ...¥699/month" |
| All membership features (Agent, Deep Research, PPT, Docs, Sheets, Kimi Code, Kimi Work, Kimi Claw, K3, K3 Swarm) share one credit pool, deducted by actual token use | Shared pool across all features | corpus/en/help/membership/membership-pricing.md:L91 "Credit pool: All membership features, including website deployment, Deep Research, PPT, Kimi Code, Kimi Work, Kimi Claw, K3, and K3 Agent Swarm, share one credit pool" |
| Kimi Code carries its own separate 5-hour/week cap independent of the shared pool | 5h/week, Kimi Code only | corpus/en/help/membership/membership-pricing.md:L92 "Kimi Code limit: Kimi Code also has a separate limit of 5 hours per week, which applies only to Kimi Code" |
| Credits refresh monthly on the subscription anniversary, not calendar month; unused credits are cleared, do not roll over | No rollover | corpus/en/help/membership/membership-update-rules.md:L41-42 "Credits for both monthly and annual memberships refresh monthly...Unused credits in the current period are automatically cleared when they expire; they do not roll over" |
| Scheduled tasks & widget tasks active-task limits scale by plan: Andante 6/6, Moderato 10/10, Allegretto 15/15, Allegro 20/20 | Plan-dependent | corpus/en/help/membership/membership-pricing.md:L38 "Custom dashboard, including widget tasks (6 tasks) and scheduled tasks (6 tasks)" (Andante); L52 "10 scheduled tasks and 10 widget tasks" (Moderato); L66 (Allegretto 15/15); L81 (Allegro 20/20) |
| Agent Swarm gated by plan: unavailable on Andante; 25 uses/2 subtasks (Moderato), 50/4 (Allegretto), 120/8 (Allegro) | Andante excluded | corpus/en/help/membership/membership-pricing.md:L50 "25 Agent Swarm uses, with 2 subtasks running in parallel" (Moderato); L62 "50 Agent Swarm uses, with 4 subtasks" (Allegretto); L76 "120 Agent Swarm uses, with 8 subtasks" (Allegro) |
| Goal Mode and dedicated Kimi Claw only on Allegretto and Allegro, not Andante/Moderato | Allegretto+ only | corpus/en/help/membership/membership-pricing.md:L64 "Goal Mode, where the Agent drives a task to completion on its own" (Allegretto); absent from Andante/Moderato sections |
| Million-token-long conversations only on the Allegro (top) tier | Allegro only | corpus/en/help/membership/membership-overview.md:L96 "Support for million-token-long conversations — — \| — \| — \| ✅" (Allegro column only) |
| Extra Usage pack: pay-as-you-go once subscription credits run out, shared wallet across web/app/Kimi Code, min ¥25 top-up, ¥10,000 balance cap, no expiry | ¥25 min, ¥10,000 cap, no expiry | corpus/en/help/membership/membership-extra-usage.md:L34 "the minimum per top-up is RMB 25; up to 10 top-ups per day, with a daily total of RMB 3,000; the balance cap is RMB 10,000" |
| Upgrades take effect immediately with prorated refund; downgrades require canceling and waiting for cycle end, then resubscribing lower | Downgrade requires cycle-end | corpus/en/help/membership/membership-upgrade-downgrade.md:L34 "Downgrades cannot be performed directly. You need to cancel your current subscription first, wait until the current billing cycle ends" |
| Annual subscription saves up to ¥1,680 vs monthly | — | corpus/en/help/membership/membership-pricing.md:L24 "Choose an auto-renewing annual subscription for a larger discount and save up to ¥1,680" |
| Paid services are non-refundable once activated (per Paid Services Agreement) | Non-refundable | corpus/en/help/membership/membership-overview.md:L152 "Paid services are virtual services. Once successfully purchased and activated, they are deemed consumed...cannot be refunded or transferred" |

## 14. Business (Kimi Business enterprise)

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Kimi Business: annual-subscription enterprise plan, 2–150 seats, ¥4,200/seat/year (≈¥350/seat/month) | 2–150 seats, ¥4,200/seat/yr | corpus/en/help/kimi-business/kimi-business.md:L33-34 "Price — ¥4,200/seat/year (about ¥350/seat/month)...Minimum purchase — Starts from 2 seats, billed annually from ¥8,400; up to 150 seats per purchase" |
| Enterprise data is not used for model training by default; personal and enterprise workspaces are fully isolated | Data-privacy commitment | corpus/en/help/kimi-business/kimi-business.md:L42 "Your business data is not used for model training by default" |
| Unlocks all advanced features: Kimi Work / Swarm / Dashboard / Plugins, Kimi Code, up to 1M-token conversations | — | corpus/en/help/kimi-business/kimi-business.md:L43-45 "Ultra-long conversation capacity with up to 1M tokens...All advanced features unlocked: Kimi Work / Swarm / Dashboard / Plugins...Kimi Code available" |
| Admin/Member roles: admin purchases seats, invites/removes members; each user can join up to 10 orgs, one seat per org | Max 10 orgs/user | corpus/en/help/kimi-business/kimi-business.md:L69 "Each person can join up to 10 enterprise organizations. After joining, a member occupies 1 seat" |
| New member joining an unallocated seat gets full current-period credit immediately, not prorated | — | corpus/en/help/kimi-business/kimi-business.md:L103 "When a new member joins using an unallocated seat or newly added seat, they receive the full benefit credit for the current period; it is not prorated" |
| Mobile app does not support Kimi Business (personal membership only); desktop client supports workspace switching | Mobile not supported | corpus/en/help/kimi-business/kimi-business-faq.md:L79 "Kimi App currently does not support Kimi Business features and only supports personal membership. The desktop client already supports Kimi Business" |
| Billed annually only, no discounts; supports general and special VAT invoices, and corporate bank transfer | Annual billing only | corpus/en/help/kimi-business/kimi-business-faq.md:L45 "The enterprise plan is currently billed annually, with no discounts or promotional offers. Invoicing is supported...general VAT invoices and special VAT invoices" |
| Purchase paths differ by size: 1–20 buy Business plan online; 20+ separate online orders; large API token volume via Open Platform sales | — | corpus/en/help/kimi-business/kimi-business.md:L19-23 table "1–20 — Buy the Business plan — Buy online...20+ — Place separate online orders" |

## 15. Features (Memory, Projects, Scheduled Tasks, Search)

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| Memory Space: Kimi selectively remembers user preferences/habits across sessions, without needing repeated instructions | — | corpus/en/help/features/memory-space.md:L15 "Kimi no longer responds only to the current chat...it records important details—your preferences, habits, style, and more" |
| Memory will not save unauthorized private info (health, passwords, addresses) unless explicitly asked | Excludes sensitive data by default | corpus/en/help/features/memory-space.md:L26 "Kimi will not remember unauthorized private information, such as health details, passwords, or addresses, unless you explicitly ask it to" |
| Memory limits: up to 50 stored memories, 500 characters each (older ones grandfathered above the cap) | 50 memories, 500 chars each | corpus/en/help/features/memory-space.md:L80-81 "Up to 50 memories can be stored...Each memory can contain up to 500 characters" |
| Memory can be triggered, viewed, edited, deleted via natural conversation or Settings → Personalization → Memory Space | — | corpus/en/help/features/memory-space.md:L44 "Web/Mobile App: Settings → Personalization → Memory Space" |
| Projects: persistent workspace bundling files, chat history, and custom instructions, auto-injected into every chat in it | — | corpus/en/help/features/project.md:L13 "You can keep the reference files, chats, and project instructions for one long-running task together in a single project" |
| Project files read on demand (not preloaded every turn); up to 50 files, 100MB each | 50 files max, 100MB/file | corpus/en/help/features/project.md:L63 "Each file must be no larger than 100 MB, and you can upload up to 50 files" |
| Project count/storage scale by plan: Free 2/500MB, Go 20/20GB, Pro 20/20GB, Max 100/50GB, Ultra 100/50GB | Plan-dependent | corpus/en/help/features/project.md:L77-80 table "Projects — 2 \| 20 \| 20 \| 100 \| 100...Project storage — 500MB \| 20GB \| 20GB \| 50GB \| 50GB" |
| Scheduled Tasks: run a fixed prompt automatically on a set daily/weekly/monthly/one-time schedule, in Kimi and Kimi Work | Available in Kimi + Kimi Work | corpus/en/help/features/scheduled-tasks.md:L15 "Scheduled tasks are a general feature, available in Kimi and the Kimi Work desktop app" |
| Cloud-created scheduled tasks run without keeping a client open; Kimi Work local tasks require the app to stay open | Client-open requirement differs by product | corpus/en/help/features/scheduled-tasks.md:L105 "Scheduled tasks created in Kimi run in the cloud — you don't need to keep a client open. Tasks running locally in the Kimi Work desktop app require the app to be open" |
| Active scheduled-task limits scale by plan: Free 2, Go 6, Pro 15, Max 20, Ultra 25 | Plan-dependent | corpus/en/help/features/scheduled-tasks.md:L86-88 table "Scheduled tasks — 2 \| 6 \| 15 \| 20 \| 25" |
| Default task expirations: daily +7 days, weekly +1 month, monthly +3 months (to prevent stale tasks) | — | corpus/en/help/features/scheduled-tasks.md:L75-78 "Daily: +7 days; Weekly: +1 month; Monthly: +3 months" |
| Agentic Search: end-to-end agentic-RL search that autonomously decides when/how to search and which tools to call, not simple keyword matching | Sourced from zh mirror — see Coverage note | corpus/zh/help/features/search.md:L13 "Kimi 的 Agentic 搜索采用端到端自主强化学习（End-to-end Agentic RL）架构...让 AI 自主决定何时搜索、调用何种工具、如何修正策略" (machine-gloss: "Kimi's Agentic Search uses an end-to-end agentic RL architecture...letting the AI decide when to search, which tools to call, how to adjust strategy") |
| Agentic Search draws on 100+ verified sources plus vertical professional databases: global finance DB, Tonghuashun iFinD, Tianyancha, academic DB, World Bank economic DB | zh mirror, see Coverage note | corpus/zh/help/features/search.md:L26 "覆盖 100+ 经过验证的可信来源" and L53-58 "全球金融数据库...同花顺ifind金融数据库...天眼查企业数据库...学术数据库...世界银行经济数据库" (machine-gloss: "covers 100+ verified trustworthy sources" and lists Global Financial DB / Tonghuashun iFinD / Tianyancha / academic DB / World Bank economic DB) |

## 16. Others / Limits

| Capability | Limits / quotas / plan required | Evidence |
|---|---|---|
| K2.6 ≈128K-token single-turn context (~50,000–60,000 Chinese characters); K3 offers a 1M-token context (top-tier plan only) | K3 1M context needs top-tier plan | corpus/en/help/others/capability.md:L54 "K2.6 has a single-turn context of about 128K tokens...K3 provides a 1 million-token context (requires the highest membership tier)" |
| Kimi cannot operate the user's desktop in regular chat/Agent; Kimi Work can enable "Kimi Computer Use" for background clicks/typing/screenshots | Opt-in, Kimi Work only | corpus/en/help/others/capability.md:L19 "In regular chats and Agent tasks, Kimi does not have permission to operate your computer. In Kimi Work, you can choose to enable this yourself" |
| Image/video/audio generation via plugins: images up to 4K in JPG/PNG; video 4–12s in multiple aspect ratios; audio TTS 0.5–22s | — | corpus/en/help/others/capability.md:L32-34 "Image generation: ...Supports 1K/2K/4K resolutions...Video generation: ...durations of 4–12 seconds...Audio generation: ...durations of 0.5–22 seconds" |
| File upload cap: 100MB/file, up to 50 files at once, formats include PDF/Word/Excel/PPT/images/TXT/video | 100MB/file, 50 files max | corpus/en/help/others/capability.md:L42 "Each file must be no larger than 100 MB, and you can upload up to 50 files at a time" |
| Product comparison: Kimi (web/app) for everyday Agent tasks; Kimi Work for local-file/desktop automation; Kimi Code for developers; Kimi Claw for zero-deployment cloud bots | — | corpus/en/help/others/product-comparison.md:L17-22 table "Kimi (web / App) — ...Everyday Q&A, writing, search...Kimi Work — A local Agent...Kimi Code — A coding assistant suite for developers...Kimi Claw — A zero-deployment cloud automation platform" |
| Model/mode picker: K2.6 (fast Q&A), K3 (strongest, Agent tasks, editable .pptx/.docx/.xlsx/.pdf output), K3 Cluster/Swarm (large-scale/batch) | — | corpus/en/help/others/model-mode-selection.md:L19-23 table "K2.6 — Fast dialogue and Q&A...K3 — Conversations and Agent tasks, with the strongest overall capability...K3 Cluster — Large-scale search, batch processing" |
| Reasoning effort Standard/Advanced/Extreme trades speed/credits for reasoning depth; Extreme only on K3/K3 Cluster | Extreme requires K3/K3 Cluster | corpus/en/help/others/model-mode-selection.md:L35 "stronger reasoning for complex analysis or difficult problems → choose Advanced or Extreme (Extreme is supported by K3 / K3 Cluster)" |
| A chat over ~200,000 Chinese characters / 128K tokens (K2.6) hits the context wall; must summarize/start new chat or switch to K3's 1M context | 128K token wall on K2.6 | corpus/en/help/others/chat-issues.md:L22 "K2.6's single-turn context is about 128K tokens (roughly 50,000–60,000 Chinese characters). Once this limit is reached, the model can no longer read in new content" |
| Peak-hour rate limiting ("Kimi is a little tired") resolved by waiting or subscribing for priority compute channel | — | corpus/en/help/others/chat-issues.md:L40 "Too many users are online at the moment...This is peak-hour rate limiting...subscribing to a membership plan, which provides priority access to a dedicated computing channel" |
| Chat window itself cannot export PPT/Word/Excel; must use PPT Assistant (kimi.com/slides) or Agent for Word/Excel | — | corpus/en/help/others/chat-issues.md:L46 "To generate a PPT, go to PPT Assistant...To generate Word or Excel files, please use Agent" |
| Account deletion is irreversible; violations can lead to content blocking, freezing/closing account, or revoked paid entitlements | Irreversible | corpus/en/help/others/account-deletion.md:L17 "Deletion is irreversible: All information, data, and paid benefits in your account will be cleared and cannot be restored"; corpus/en/help/others/account-ban.md:L17-20 "Block the relevant content...Freeze, close, or transfer the account...Suspend or revoke some or all entitlements" |
| User conversation/instruction data may be used for de-identified model training unless the user opts out via support email | Opt-out available, 5–7 business days | corpus/en/help/others/data-usage.md:L15 "the platform may use users' input data, instructions, and generated responses for model training"; L19 "complete the opt-out registration within 5-7 working days" |
| Interface supports 13 languages (German, Russian, French, Traditional Chinese, Korean, Portuguese, Thai, Turkish, Spanish, Italian, Indonesian, English, Vietnamese) | — | corpus/en/help/others/capability.md:L50 "Currently supported languages include German, Russian, French, Traditional Chinese, Korean, Portuguese, Thai, Turkish, Spanish, Italian, Indonesian, English, and Vietnamese" |

---

## Relevant to building interactive web pages (like the Gargantua raytracer demo)

**Which mode builds a single interactive web app, and is Agent Swarm required?**

- **Regular (general) Agent — not Agent Swarm — is the documented path for a single interactive web app/page, via the Websites product.** `websites-overview.md` states Kimi Websites is "the full-stack website-building product **of Kimi Agent**, powered by Kimi K3" (corpus/en/help/websites/websites-overview.md:L15), and explicitly lists a third way to build a site as "**General Agent Mode**...select the K3 model and enter task instructions related to building a website" (corpus/en/help/websites/websites-overview.md:L67-73). `agent-overview.md` likewise lists "Website generation (Websites): automatically generate and optimize responsive websites" as a capability of the general Agent, not of Agent Swarm (corpus/en/help/agent/agent-overview.md:L51), and gives "Help me create the website code for an online voting tool" as a sample **Agent** (not Swarm) prompt (corpus/en/help/agent/agent-overview.md:L82).

- **The docs do not say Agent Swarm is required for a single web app — Swarm is explicitly positioned for large-scale/parallel/batch work instead.** `others/model-mode-selection.md` draws the line directly: "**General Agent**: Automatically plans and completes tasks, including website generation, PPT creation, Deep Research, and document and spreadsheet processing" versus "**Agent cluster**: Supports more than 4,000 parallel tool calls...suitable for large-scale tasks such as high-volume search, long-form writing, and batch processing" (corpus/en/help/others/model-mode-selection.md:L39-40), and its decision guide assigns "Complex conversations, writing documents / creating PPTs and spreadsheets / multi-step tasks → K3" while reserving K3 Cluster for "Large-scale search, batch processing, and ultra-long-form writing" (corpus/en/help/others/model-mode-selection.md:L95-97). `agent-features-and-limits.md` only recommends Agent Swarm when a task needs **multiple output files** or should be split into 2–3 stages, not for a single HTML/JS demo (corpus/en/help/agent/agent-features-and-limits.md:L21-23).

- **One caveat worth flagging**: Agent Swarm's own "Application Scenarios" list does include "Complex programming tasks: front-end development, code review, and multi-file refactoring" as one of six scenarios it is "especially suitable for" (corpus/en/help/agent/agent-swarm.md:L186-194), so the docs treat Swarm as usable for larger/parallelizable front-end work — but they never state it is required for a single self-contained interactive page like a raytracer demo; that case is squarely covered by regular Agent/Websites running on K3, which already supports "visual programming," full front-end/back-end generation, and one-click deployment (corpus/en/help/websites/websites-overview.md:L40, L42-65).

---

## Coverage

Task specification stated "141 files." The actual English corpus on disk at `corpus/en/help/**/*.md` contains **139 Markdown files** (confirmed via `find ... -name "*.md" | wc -l` = 139, cross-checked by summing every subdirectory's file count + 17 top-level category pages + the root `help.md` = 139). This discrepancy is reported as-is rather than papered over; all 139 files that exist were read in full via `cat`/`grep -n`, and their exact line counts (verified with `grep -n ""`, which numbers every line including blank ones) are listed below. Total corpus size: **11,189 lines** across 139 files.

**Known gap**: `corpus/en/help/features/search.md` (Agentic Search) does not exist in the English tree, despite being referenced by nav links across many other en pages (e.g. `features.md` lists it as the first of 5 articles, and `new-user-guide/overview.md` links to `/en/help/features/search`). Per the task's instruction to fall back to the Chinese mirror when an English page is empty, this was extended to the "missing entirely" case: `corpus/zh/help/features/search.md` (178 lines) was read and cited (with a translation gloss) in the **Features** section above, clearly marked as zh-sourced.

| File | Lines (incl. blank, via `grep -n ""`) |
|---|---|
| corpus/en/help.md | 181 |
| corpus/en/help/agent.md | 23 |
| corpus/en/help/agent/agent-features-and-limits.md | 85 |
| corpus/en/help/agent/agent-overview.md | 149 |
| corpus/en/help/agent/agent-quota-and-billing.md | 62 |
| corpus/en/help/agent/agent-swarm.md | 208 |
| corpus/en/help/deep-research.md | 23 |
| corpus/en/help/deep-research/deep-research-faq.md | 92 |
| corpus/en/help/deep-research/deep-research-overview.md | 142 |
| corpus/en/help/deep-research/deep-research-use-cases.md | 83 |
| corpus/en/help/docs-and-sheets.md | 19 |
| corpus/en/help/docs-and-sheets/docs-and-sheets-docs-cases.md | 58 |
| corpus/en/help/docs-and-sheets/docs-and-sheets-overview.md | 109 |
| corpus/en/help/docs-and-sheets/docs-and-sheets-sheets-cases.md | 51 |
| corpus/en/help/features.md | 25 |
| corpus/en/help/features/memory-space.md | 92 |
| corpus/en/help/features/memory-tips.md | 83 |
| corpus/en/help/features/project.md | 106 |
| corpus/en/help/features/scheduled-tasks.md | 119 |
| corpus/en/help/kimi-api.md | 65 |
| corpus/en/help/kimi-api/api-account-and-auth.md | 65 |
| corpus/en/help/kimi-api/api-balance-and-usage.md | 54 |
| corpus/en/help/kimi-api/api-billing-and-finance.md | 51 |
| corpus/en/help/kimi-api/api-business-cooperation.md | 61 |
| corpus/en/help/kimi-api/api-data-security.md | 55 |
| corpus/en/help/kimi-api/api-error-codes.md | 37 |
| corpus/en/help/kimi-api/api-free-trial.md | 45 |
| corpus/en/help/kimi-api/api-model-capabilities.md | 44 |
| corpus/en/help/kimi-api/api-model-selection.md | 46 |
| corpus/en/help/kimi-api/api-overview.md | 45 |
| corpus/en/help/kimi-api/api-pricing.md | 48 |
| corpus/en/help/kimi-api/api-rate-limits.md | 46 |
| corpus/en/help/kimi-api/api-troubleshooting.md | 83 |
| corpus/en/help/kimi-blackboard.md | 25 |
| corpus/en/help/kimi-blackboard/abc-kimi-credit-card-activity.md | 193 |
| corpus/en/help/kimi-blackboard/moon-companion-plan.md | 129 |
| corpus/en/help/kimi-blackboard/plan-adjustment-notice.md | 43 |
| corpus/en/help/kimi-business.md | 25 |
| corpus/en/help/kimi-business/kimi-business-faq.md | 100 |
| corpus/en/help/kimi-business/kimi-business-purchase.md | 37 |
| corpus/en/help/kimi-business/kimi-business.md | 115 |
| corpus/en/help/kimi-claw.md | 71 |
| corpus/en/help/kimi-claw/android-user-guide.md | 557 |
| corpus/en/help/kimi-claw/concepts.md | 92 |
| corpus/en/help/kimi-claw/conversation-limits.md | 43 |
| corpus/en/help/kimi-claw/desktop-deployment-guide.md | 85 |
| corpus/en/help/kimi-claw/dingtalk-bot.md | 54 |
| corpus/en/help/kimi-claw/feishu-bot.md | 65 |
| corpus/en/help/kimi-claw/feishu-no-response.md | 74 |
| corpus/en/help/kimi-claw/file-transfer.md | 47 |
| corpus/en/help/kimi-claw/kimiclaw-group-chat.md | 211 |
| corpus/en/help/kimi-claw/memory-loss.md | 44 |
| corpus/en/help/kimi-claw/overview.md | 63 |
| corpus/en/help/kimi-claw/platform-support.md | 32 |
| corpus/en/help/kimi-claw/slow-no-response.md | 62 |
| corpus/en/help/kimi-claw/tailscale-issue.md | 33 |
| corpus/en/help/kimi-claw/uninstall-plugin.md | 32 |
| corpus/en/help/kimi-claw/upgrade-notice.md | 92 |
| corpus/en/help/kimi-claw/usage-tips.md | 92 |
| corpus/en/help/kimi-claw/wechat-bot.md | 66 |
| corpus/en/help/kimi-claw/wecom-bot.md | 73 |
| corpus/en/help/kimi-claw/weibo-bot.md | 43 |
| corpus/en/help/kimi-code.md | 51 |
| corpus/en/help/kimi-code/benefits.md | 101 |
| corpus/en/help/kimi-code/cli-customization.md | 79 |
| corpus/en/help/kimi-code/cli-getting-started.md | 209 |
| corpus/en/help/kimi-code/cli-goals.md | 147 |
| corpus/en/help/kimi-code/cli-ides.md | 80 |
| corpus/en/help/kimi-code/cli-integrations.md | 46 |
| corpus/en/help/kimi-code/cli-interaction.md | 83 |
| corpus/en/help/kimi-code/cli-sessions.md | 116 |
| corpus/en/help/kimi-code/cli-use-cases.md | 78 |
| corpus/en/help/kimi-code/cli-work-modes.md | 68 |
| corpus/en/help/kimi-code/code-docs-index.md | 63 |
| corpus/en/help/kimi-code/contact-and-feedback.md | 60 |
| corpus/en/help/kimi-code/faq.md | 149 |
| corpus/en/help/kimi-code/membership-guide.md | 168 |
| corpus/en/help/kimi-code/preparation.md | 118 |
| corpus/en/help/kimi-code/third-party-agents.md | 90 |
| corpus/en/help/kimi-code/vscode-core-operations.md | 124 |
| corpus/en/help/kimi-code/vscode-getting-started.md | 77 |
| corpus/en/help/kimi-webbridge.md | 27 |
| corpus/en/help/kimi-webbridge/kimi-webbridge-faq.md | 112 |
| corpus/en/help/kimi-webbridge/kimi-webbridge-how-it-works.md | 52 |
| corpus/en/help/kimi-webbridge/kimi-webbridge-introduction.md | 95 |
| corpus/en/help/kimi-webbridge/kimi-webbridge-use-cases.md | 100 |
| corpus/en/help/kimi-work.md | 33 |
| corpus/en/help/kimi-work/dashboard.md | 49 |
| corpus/en/help/kimi-work/goal-mode.md | 38 |
| corpus/en/help/kimi-work/kimi-work-faq.md | 53 |
| corpus/en/help/kimi-work/overview.md | 54 |
| corpus/en/help/kimi-work/plugin-center.md | 54 |
| corpus/en/help/kimi-work/release-notes.md | 269 |
| corpus/en/help/kimi-work/use-cases.md | 35 |
| corpus/en/help/kimi-work/widgets.md | 44 |
| corpus/en/help/membership.md | 47 |
| corpus/en/help/membership/membership-account-query.md | 48 |
| corpus/en/help/membership/membership-cancel-subscription.md | 60 |
| corpus/en/help/membership/membership-contact.md | 54 |
| corpus/en/help/membership/membership-extra-usage.md | 88 |
| corpus/en/help/membership/membership-invoice.md | 53 |
| corpus/en/help/membership/membership-overview.md | 174 |
| corpus/en/help/membership/membership-payment-issues.md | 62 |
| corpus/en/help/membership/membership-pricing.md | 142 |
| corpus/en/help/membership/membership-update-rules.md | 62 |
| corpus/en/help/membership/membership-upgrade-downgrade.md | 55 |
| corpus/en/help/new-user-guide.md | 25 |
| corpus/en/help/new-user-guide/agentic-chat.md | 140 |
| corpus/en/help/new-user-guide/contact-feedback.md | 45 |
| corpus/en/help/new-user-guide/overview.md | 71 |
| corpus/en/help/new-user-guide/quick-phrases.md | 51 |
| corpus/en/help/new-user-guide/what-is-prompt.md | 140 |
| corpus/en/help/others.md | 49 |
| corpus/en/help/others/account-ban.md | 28 |
| corpus/en/help/others/account-deletion.md | 35 |
| corpus/en/help/others/capability.md | 60 |
| corpus/en/help/others/chat-issues.md | 71 |
| corpus/en/help/others/contact-support.md | 47 |
| corpus/en/help/others/data-usage.md | 43 |
| corpus/en/help/others/model-mode-selection.md | 71 |
| corpus/en/help/others/phone-profile.md | 47 |
| corpus/en/help/others/product-comparison.md | 43 |
| corpus/en/help/plugins-and-skills.md | 35 |
| corpus/en/help/plugins-and-skills/create-custom-skills-faq.md | 73 |
| corpus/en/help/plugins-and-skills/create.md | 101 |
| corpus/en/help/plugins-and-skills/overview.md | 95 |
| corpus/en/help/plugins-and-skills/publish.md | 25 |
| corpus/en/help/plugins-and-skills/use-skills-in-agent.md | 114 |
| corpus/en/help/plugins-and-skills/use-skills-in-claw.md | 106 |
| corpus/en/help/plugins-and-skills/use-skills-in-code.md | 97 |
| corpus/en/help/plugins-and-skills/what-are-skills.md | 97 |
| corpus/en/help/ppt.md | 21 |
| corpus/en/help/ppt/ppt-creation-mode.md | 48 |
| corpus/en/help/ppt/ppt-overview.md | 65 |
| corpus/en/help/ppt/ppt-troubleshooting.md | 92 |
| corpus/en/help/websites.md | 23 |
| corpus/en/help/websites/websites-faq.md | 146 |
| corpus/en/help/websites/websites-overview.md | 208 |
| corpus/en/help/websites/websites-why-not-working.md | 57 |
| corpus/zh/help/features/search.md (zh fallback — en page missing) | 178 |

**Total: 139 English files read, 11,189 lines, plus 1 Chinese fallback file (178 lines) for the missing `features/search.md` page.**
