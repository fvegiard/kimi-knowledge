---
title: "What Is Kimi Agent? Features and Entry Points - Kimi Help Center"
source: https://www.kimi.com/en/help/agent/agent-overview
lang: en
fetched: 2026-09-16
html_sha256: 23ce321f66bd45a8a6223563fe412ba2f93e1065aae1a8916c241ffe9f6395b0
---

[Help Center](/en/help) › [Agent Mode](/en/help/agent) › [Kimi Agent Overview](/en/help/agent/agent-overview)

# Introducing Kimi Agent

## How Kimi Agent Has Evolved

On September 5, 2025, Moonshot AI released Kimi K2, an advanced mixture-of-experts model with 32 billion activated parameters and 1 trillion total parameters. For details, see the official website: [Kimi K2](/blog/kimi-k2). Kimi K2 delivers strong benchmark performance across three core capability areas—Agentic Coding, Tool Use, and Math & Reasoning—providing a solid foundation for building general-purpose Agent capabilities.

Guided by the principle of “**the model is the product**,” Kimi uses end-to-end reinforcement learning to train Kimi K2 as a native Agent, enabling it to work skillfully with more than 20 tools, including the file system, browser, terminal, code generation, image generation, and audio generation.

On September 26, 2025, Kimi released its first Agent product mode: “OK Computer.” Unlike traditional manually designed processes and preset task workflows, Kimi Agent mode autonomously builds an internal knowledge system for “how to complete a complex task.” It can also adjust in real time to different situations, automatically choosing the most suitable tools and strategies to execute complex tasks efficiently.

In Agent mode, Kimi autonomously plans and completes the entire process—from requirements research, product proposals, interaction design, and front-end development to final delivery—through multi-step reasoning and repeated tool calls. Kimi Agent helps users become full-stack knowledge workers and handle more complex tasks. Whether you are working on technical development, product design, or everyday office tasks, Kimi Agent provides efficient intelligent support.

On January 27, 2026, Moonshot AI officially released Kimi K2.5. Kimi K2.5 is the most powerful open-source model to date, further expanding the applications of Agent mode. Benchmark evaluations show that Kimi K2.5 significantly improves real-world output quality and tool-calling efficiency in office scenarios, especially in structured outputs such as Word documents, Excel spreadsheets, and slide design, where it demonstrates end-to-end processing capabilities. Kimi Agent has learned the core skills for using Office software and supports end-to-end file output:

- Intelligent Word layout, editing, and review;
- PDF visual design and mixed text-image layout;
- Excel data analysis and financial modeling;
- Automated PPT generation and visual storytelling.

On April 20, 2026, Moonshot AI released and open-sourced the Kimi K2.6 model, bringing state-of-the-art capabilities in coding, long-horizon task execution, and Agent Swarm.

Kimi K2.6 has been comprehensively upgraded across general Agent, coding, visual understanding, and other capabilities. It achieves industry-leading results on benchmarks such as the full doctorate-level Humanity's Last Exam, SWE-Bench Pro for evaluating real software engineering capabilities, and DeepSearchQA for assessing an Agent’s deep retrieval capabilities, matching or outperforming closed-source models such as GPT-5.4, Claude Opus 4.6, and Gemini 3.1 Pro.

Kimi K2.6 is our strongest coding model to date, with a significant leap in long-horizon coding capabilities. In testing, it can code continuously for 13 hours, write or modify more than 4,000 lines of code, and complete the development and optimization of complex systems. By deeply integrating coding and vision capabilities, K2.6 raises code-driven design to a new level and can deliver professional-grade Web applications with highly creative design.

Kimi K2.6 greatly strengthens autonomous Agent execution, helping us further expand what Agents can do. Powered by K2.6, the “Agent Swarm” architecture has received a major upgrade: it now supports 300 Subagent running in parallel to complete 4,000 collaborative steps, enabling larger-scale parallelization while delivering significantly higher task completion and output quality than K2.5. For proactive Agent frameworks such as OpenClaw and Hermes Agent, K2.6 demonstrates extremely strong automated task execution capabilities and supports up to 5 days of continuous autonomous operation. Unlike a traditional monolithic Agent, Agent Swarm can:

- Automatically generate and coordinate up to 300 sub-agents to work in parallel on complex tasks;
- Support more than 4,000 tool calls (Tool Use);
- Complete tasks about 4.5 times faster than a monolithic Agent through parallel execution strategies.

The core of this technology is not stacking larger models, but enabling models to understand task decomposition and collaboration, with an internal controller automatically creating and assigning sub-agents at runtime to handle different subtasks. In mid-February 2026, Moonshot AI released the public beta of Kimi Claw. It is an OpenClaw AI Agent platform designed to let users deploy and run an always-online AI agent (OpenClaw) in the browser with one click, without complex local environments such as servers, terminals, or Docker. Kimi Claw includes long-term memory, configurable personas, and a community skills library, such as 5,000+ ClawHub skills, enabling it to continuously execute automated tasks in the background and further enhancing the power and flexibility of Agent mode.

- Users can access and use it directly through a Web browser, without hosting on a local device or setting up a programming environment;
- It provides cloud storage, such as 40 GB, and always-online Agent capabilities, combining the model capabilities of Kimi K2.6 to execute a wide range of tasks and meet different user needs. With Kimi Claw, users can experience a more flexible, always-online Agent service, accelerating the adoption and application of intelligent automation.

On July 16, 2026, Moonshot AI released Kimi K3—Kimi's most powerful model and the world's first open 3T-class model. Kimi K3 has 2.8 trillion parameters and is built on Kimi Delta Attention (KDA) and Attention Residuals, featuring native vision and a 1-million-token context window. It is designed for frontier intelligence across long-horizon coding, knowledge work, and reasoning. K3 greatly strengthens Agentic Coding and long-horizon task execution, and can understand large codebases, orchestrate terminal tools, and continuously adjust its approach based on feedback; the K3-powered Agent Swarm further improves large-scale parallel search and batch processing. Kimi K3 is available through the Kimi App, kimi.com, the Kimi Work desktop app, Kimi Code, and the Kimi API, with full model weights becoming available on July 27, 2026.

Kimi Agent is designed to provide powerful intelligent support in real professional scenarios such as research, programming, and office work, improving efficiency and productivity while helping users automate and intelligently handle all kinds of complex tasks. Kimi already offers multiple AI product lines, including:

- Website generation (Websites): automatically generate and optimize responsive websites, and build and deploy high-quality online websites and app applications;
- Document processing (Docs): provide intelligent document editing, writing, and formatting, with output support for Word, PDF, Markdown, TxT, and other formats;
- Spreadsheet analysis (Sheets): help users analyze and process data, automatically generate reports, support output in Excel, CSV, and other formats, and provide pivot and complex data processing capabilities;
- PPT creation (Slides): automate PPT design, provide intelligent templates, and generate high-quality slides from structure to content in one stop;
- Deep Research: support in-depth market research and generate high-quality long-form research and visualization reports through complex search, multi-step reasoning, and AI programming;
- Agent Swarm: automatically generate and coordinate up to 300 sub-agents to work in parallel on complex tasks, support more than 4,000 tool calls (Tool Use), and suit massive search, long-form writing, and batch processing tasks;
- Kimi Claw: a zero-deployment cloud automation platform that starts an always-running AI agent in 30 seconds, without servers or Docker. It includes a 5,000+ skills library (ClawHub), supports chained composition calls and multi-step autonomous planning, and makes complex research and data analysis workflows easy to complete.

## How Does an Agent Work?

Kimi Agent uses an autonomous decision-making system trained with reinforcement learning, enabling it to dynamically handle complex tasks without preset workflows.

![Agent product entry point](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/agent-overview/overview-00.67c2d3b1d1af.png)

When you submit a request to the Agent, the general-purpose Agent goes through these steps:

- Task planning: after receiving the user instruction, it identifies key information, automatically breaks the task into subtasks, generates a clear execution plan, and displays progress dynamically in real time;
- Tool use: it includes more than 20 built-in tools covering code writing, terminal operations, web browsing, image generation, audio generation, professional financial data access, website deployment, and more, and flexibly calls them as needed;
- Autonomous execution: it starts AI collaboration roles as needed, including product manager, designer, data analyst, content planner, and front-end engineer, to autonomously complete research, planning, analysis, design, development, and deployment;
- Exception handling: if an error occurs during execution, the model proactively identifies the problem, adjusts the plan, and retries without user intervention;
- Deliverable handoff: after the task is completed, it produces high-quality deliverables, such as directly downloadable and editable Excel, Word, and PPT office files, deployed online web pages and interactive apps, or long-form reports that can be copied and saved as PDF/Word.

## Product Entry Points

![Agent product entry point](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/agent-overview/overview-01.1d1858c55708.png)

- Web: [https://www.kimi.com/agent](/en/agent)
- Phone/tablet: open the Kimi App and select the K3 or K3 Swarm model in the model switch button above the chat box

## Steps

1.  Clearly describe your task requirements to the Agent and send them. For example: “Help me create the website code for an online voting tool” or “Analyze the competitive landscape of the AI chip industry in 2025.” The system enters the automatic execution stage, where you can view task progress in real time.

![Agent user task input](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/agent-overview/overview-02.f25a220deb20.png)

2.  The system will automatically execute the task in the background. You can see in real time:
    - The reasoning and decision-making logic chain
    - The types of tools called and execution steps
    - The websites visited and information sources used
    - Intermediate steps in code generation or analysis

![Agent task process](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/agent-overview/overview-03.4569ad5d7efe.png)

3.  After the task is complete, receive professional-grade deliverables.
4.  Based on the task type, the Agent generates the corresponding output:

![Example Agent deliverables](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/agent-overview/overview-04.106906367c62.png)

- Code project: complete runnable website code, applications, and more, including HTML, CSS, and JavaScript
- Folder: all intermediate files generated during task execution
- Data analysis: charts, trend analysis, and tables of key metrics
- Office documents: Word documents, PDF documents, Markdown documents, PPT presentations, and more

5.  Preview, download, or share the output.

## Use Cases

![Agent use cases](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/agent-overview/overview-06.0159d4766b3c.png)

- Website development: even with no coding background, you can build a multifunctional website prototype. The general-purpose Agent deeply understands business requirements, plans structures and processes, progressively implements a Web app prototype, and supports direct cloud deployment with a shareable link.
- Content generation: it can write children’s stories with matching picture books and audio. The general-purpose Agent can automatically search for materials, organize content, follow visual guidelines, and produce editable outputs in multiple formats.
- Document processing: compare multiple contract versions by quickly identifying differences across 100 pages of contract clauses and accurately marking risk points; translate long documents by translating a 50-page English PDF and converting it into a Chinese or bilingual Chinese-English PDF.
- Data analysis: whether you need to consolidate and enter million-row multi-source Excel reports or fetch real-time data from professional platforms, the general-purpose Agent can automatically complete cleaning, analysis, and strategy backtesting, and generate interactive spreadsheets. It can support organizing 1,000 rows in Excel.
- PPT generation: create high-quality PPT with intelligent templates and content generation.
- Document conversion: fast PDF/Word to PPT conversion—extract the core arguments from a 30,000-character academic paper and generate a logically rigorous 20-page defense PPT.

[](/en/help/websites/websites-overview)


### Website Generation

Build a multifunctional website prototype and deploy it online, even with no coding background.

[](/en/help/ppt)


### PPT Creation

Generate high-quality PPT in one stop, from structure to content, with intelligent templates and content generation.

[](/en/help/docs-and-sheets)


### Documents and Sheets

Edit documents intelligently and analyze data, with support for Word, Excel, PDF, and other formats.

[](/en/help/deep-research)


### Deep Research

Generate high-quality long-form research reports through complex search and multi-step reasoning.

Was this article helpful?



[ › PreviousScheduled Tasks](/en/help/features/scheduled-tasks)[Next › Agent Swarm](/en/help/agent/agent-swarm)
