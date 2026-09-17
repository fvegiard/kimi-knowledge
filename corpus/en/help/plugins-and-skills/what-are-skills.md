---
title: "What Are Skills - Kimi Help Center"
source: https://www.kimi.com/en/help/plugins-and-skills/what-are-skills
lang: en
fetched: 2026-09-16
html_sha256: 74feebfef8cf24428b1604af9939c9181ada04cfd0002c56794c6a4e2bc51be4
---

[Help Center](/en/help) › [Plugins & Skills](/en/help/plugins-and-skills) › [What Are Skills](/en/help/plugins-and-skills/what-are-skills)

# What Are Skills

![What is a Skill](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/plugins-and-skills/images/skills/%E4%BB%80%E4%B9%88%E6%98%AFskill.e9876739b78c.png)

Skills are reusable knowledge packages that extend what an Agent can do. Each Skill contains:

- **Approaches and operating instructions** — Methods tailored to specific task types
- **Best practices and conventions** — Industry standards and internal guidelines to follow
- **Optional scripts, tools, and reference resources** — Practical utilities and materials that support execution

## How to Use Skills

From discovering Skills to creating your own, the full workflow is:

1.  **Discover Skills** — Browse official and recommended Skills in the Skills panel to find one that fits your scenario.
2.  **Install a Skill** — Click ➕ to add it in one step.
3.  **Invoke a Skill** — Type `/` in the chat input box and select Skills, or let Kimi Agent trigger the right Skill automatically based on your question.
4.  **Create your own Skill** — If existing Skills do not meet your needs, upload a document or describe what you want in a conversation to generate a dedicated Skill. You can also create a custom Skill through a `/skill-creator` conversation.

## How Do Skills Work?

At its core, a Skill is a folder with a fixed structure. It clearly describes the standard operating procedure (SOP), methodology, and reference templates needed to complete a task.

To keep conversations efficient, the Agent does not load the entire Skill all at once. Instead, it uses a “progressive disclosure” mechanism: during the conversation, it determines which Skills are relevant to the current task and loads only the information needed to complete it, avoiding context window overload.

**Basic SKILL.md template:**

Markdown


## Skills vs. Asking Directly

Take writing a weekly report as an example. If you ask Kimi Agent directly, it will write in the format it understands. After you install a weekly report Skill, it will output the report every time using the structure, tone, and length you set, without needing repeated instructions.

|                                        | Asking directly            | Using Skills                         |
|----------------------------------------|----------------------------|--------------------------------------|
| Need to explain requirements each time | Yes                        | No, applied automatically            |
| Consistent output format               | Not guaranteed             | Consistent with the Skill definition |
| Best for                               | One-off or temporary tasks | Fixed workflows performed repeatedly |
| Setup required in advance              | No                         | Yes, create or install a Skill       |

## Types of Skills

### (1) Official & Recommended Skills

**Official Skills**: Created and maintained by Moonshot AI, available to all users, and automatically invoked by Kimi in relevant scenarios.

Common official Skills include:

- `docx` — Create and edit Word documents. Suitable for any .docx task, including document creation, editing, comments, revisions, footnotes, tables of contents, and Markdown-to-Word conversion.
- `deep-research` — Uses a tool suite for Deep Research and long-form report generation. It requires at least 10 iterative search cycles, recursive reflection, mandatory IPython visualizations, and specific paragraph logic.

**Recommended Skills**: Curated scenario-based Skills that can be added in one click, covering common use cases such as investment research and document formatting.

Common recommended Skills include:

- `sop-writer` — Turns business processes into complete standard operating procedure (SOP) documents, including flowcharts, RACI responsibility matrices, detailed operating steps, and exception handling.
- `event-etf-study` — Starting from a concept or event, identifies related stocks, builds a market-cap-weighted ETF index, analyzes market capitalization changes during the event window, and generates an interactive HTML dashboard. Use it when users ask about concept stocks, concept ETFs, event-driven analysis, or event studies.

**Office Documents to Skills**: Upload a document to generate a Skill and easily remix its theme style.

### (2) Community Skills

Download or install suitable Skills from the open-source community, and use them with Local Agents such as Kimi Code or cloud Agents such as Kimi Claw.

**Common AI Skill Hub Platforms**

| Platform       | URL                                                      | Description                                                                                                                       |
|----------------|----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| SkillsMP       | [https://skillsmp.com](https://skillsmp.com)             | An AI Agent Skill marketplace that collects SKILL.md Skill packages from GitHub, compatible with Claude Code and OpenAI Codex CLI |
| SkillsLLM      | [https://skillsllm.com](https://skillsllm.com)           | An open-source AI Agent Skill marketplace with 1,600+ security-reviewed Skills, supporting Claude Code, Codex CLI, and ChatGPT    |
| LobeHub Skills | [https://lobehub.com/skills](https://lobehub.com/skills) | Browse and distribute SKILL.md Skill packages compatible with Claude Code, Codex CLI, and ChatGPT                                 |

### (3) Custom Skills

To create a custom Skill, simply describe in text how you want Kimi to work. You create it yourself for personal workflows and domain-specific tasks, such as:

- Applying specific style guidelines to documents or presentations
- Generating emails or communication content from a fixed template
- Organizing meeting minutes in a specific format
- Running a specific data analysis workflow

Was this article helpful?



[ › PreviousHow to Publish a Plugin to the Official Marketplace](/en/help/plugins-and-skills/publish)[Next › Use Skills in Agent Mode](/en/help/plugins-and-skills/use-skills-in-agent)
