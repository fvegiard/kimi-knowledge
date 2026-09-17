---
title: "什么是技能（Skills） - Kimi Help Center"
source: https://www.kimi.com/help/plugins-and-skills/what-are-skills
lang: zh
fetched: 2026-09-16
html_sha256: 6b7ac76c791068eb8b89e96b94b38292bd8d1c140ba72ad2de16de2593c38bc1
---

[帮助中心](/help) › [插件和技能](/help/plugins-and-skills) › [什么是技能（Skills）](/help/plugins-and-skills/what-are-skills)

# 什么是技能（Skills）

![什么是skill](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/plugins-and-skills/images/skills/%E4%BB%80%E4%B9%88%E6%98%AFskill.e9876739b78c.png)

技能是可复用的知识包，用于扩展 Agent（智能体）的能力边界了，每个技能包含：

- **处理思路与操作指引** — 针对特定任务类型的方法论
- **最佳实践与规范约定** — 应遵循的行业标准与内部规范
- **可选的脚本工具与参考资源** — 辅助执行的实用工具与素材

## 使用路径

从发现技能到创建自己的技能，完整路径如下：

1.  **发现技能** — 在技能面板浏览官方技能和推荐技能，找到适合你场景的技能。
2.  **安装技能** — 点击➕一键添加
3.  **调用技能** — 在对话输入框输入 `/` 选择技能（Skills），或让 Kimi Agent根据你的问题自动触发。
4.  **创建自己的技能** — 如果现有技能不满足需求，上传文档或通过对话描述需求，生成专属技能，或通过 `/skill-creator` 对话创建自定义技能。

## 技能（Skills）如何工作？

从本质上讲，技能（Skills）是一个结构固定的文件夹，它统一清晰地描述了执行任务所需的标准作业流程（SOP）、方法论和参考模板。

为保证对话效率，Agent 并不会一次性加载技能的全部内容，而是通过“渐进式披露”机制，在对话中判断哪些技能与当前任务相关，然后仅加载完成任务所需的信息，从而避免上下文窗口过载。

**SKILL.md基础模版：**

Markdown


## 技能（Skills）和直接提问有什么区别？

以写周报为例：直接问 Kimi Agent ，它会按自己理解的格式写；装了周报技能之后，每次都按你设定的结构、语气、长度来输出，不需要重复说明。

|                      | 直接问           | 使用技能（Skills） |
|----------------------|------------------|--------------------|
| 每次是否需要说明要求 | 是               | 否，自动应用       |
| 输出格式是否稳定     | 不固定           | 按技能定义一致     |
| 适合场景             | 一次性、临时任务 | 反复执行的固定流程 |
| 是否需要提前设置     | 不需要           | 需要创建或安装技能 |

## 技能（Skills）类型

### （1）官方技能&推荐技能

**官方技能**：由 Moonshot AI 创建和维护，对所有用户开放，Kimi 在相关场景中自动调用。

常见官方技能包括：

- `docx` — 创建和编辑 Word 文档，适用于任何 .docx 任务，包括文档创建、编辑、批注、修订、脚注、目录以及 Markdown 到 Word 的转换
- `deep-research` — 利用工具套件实现深度研究与长篇报告构建，要求至少10轮迭代搜索周期、递归反思，且须包含强制性的IPython可视化与特定段落逻辑。

**推荐技能**：精选场景化技能，可一键添加，涵盖投资研究、文档排版等常用场景。

常见推荐技能包括：

- `sop-writer` — 将业务流程梳理成完整的标准操作流程文档（SOP），包括流程图、RACI分工矩阵、详细操作步骤以及异常情况处理。
- `event-etf-study` — 从概念或事件出发，识别相关股票，构建市值加权ETF指数，分析事件窗口期间的市值变化，并生成交互式HTML仪表盘。当用户询问概念股、概念ETF、事件驱动分析或事件研究时使用。

**Office 文档转技能**：上传文档生成技能，轻松复刻主题风格

### （2）社区 Skills

在开源社区下载或安装适合的 Skills，搭配 Local Agent（如Kimi Code等）、云端 Agent（如Kimi Claw）使用

**常见 AI Skill Hub 平台**

| 平台名称       | 网址                                                     | 简介                                                                                          |
|----------------|----------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| SkillsMP       | [https://skillsmp.com](https://skillsmp.com)             | AI Agent Skill 市场，收录来自 GitHub 的 SKILL.md 技能包，兼容 Claude Code 与 OpenAI Codex CLI |
| SkillsLLM      | [https://skillsllm.com](https://skillsllm.com)           | 开源 AI Agent Skill 市场，收录 1600+ 经安全审查的技能，支持 Claude Code、Codex CLI 和 ChatGPT |
| LobeHub Skills | [https://lobehub.com/skills](https://lobehub.com/skills) | 浏览与分发兼容 Claude Code、Codex CLI 及 ChatGPT 的 SKILL.md 技能包                           |

### （3）自定义 Skills

自定义技能（Skills）只需要用文字写清楚你希望 Kimi 怎么做，由你自己创建，用于个人工作流和特定领域任务，例如：

- 将特定风格规范应用于文档或演示文稿
- 按固定模板生成邮件或沟通内容
- 使用特定格式整理会议纪要
- 执行特定的数据分析工作流

本文是否对你有帮助



[ › 上一篇如何把插件发布到公开市场](/help/plugins-and-skills/publish)[下一篇 › 在 Agent 模式中使用技能](/help/plugins-and-skills/use-skills-in-agent)
