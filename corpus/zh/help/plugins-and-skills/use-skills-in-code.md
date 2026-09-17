---
title: "在 Kimi Code 中使用技能 - Kimi 帮助中心"
source: https://www.kimi.com/help/plugins-and-skills/use-skills-in-code
lang: zh
fetched: 2026-09-16
html_sha256: a235e3d54e17cfa74f63df7a70742aa70149a9cec144de5115e6136f4ebb598d
---

[帮助中心](/help) › [插件和技能](/help/plugins-and-skills) › [在 Kimi Code 中使用技能](/help/plugins-and-skills/use-skills-in-code)

# 在 Kimi Code 中使用技能（Skills）

Kimi Code 是专为开发者设计的 AI 编程助手，可以直接在终端或编辑器中运行，帮你写代码、修 Bug、生成文档。Kimi Code 支持通过 `SKILL.md` 提供知识性指导，AI 读取后遵循其中的规范。适合定义代码风格、工作流程、最佳实践。

![通过斜杠命令调用技能](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/plugins-and-skills/images/skills/code-skill-zh.94cccc08f996.png)

## 调用技能（Skills）

Kimi Code CLI 使用斜杠命令调用 Skills：

Bash


例如输入 `/skill:git-commits`，Kimi Code 会读取对应 `SKILL.md` 的内容，并将其作为指令发送给 Agent。

斜杠命令后面还可以附带额外描述，内容会追加在 Skills 指令之后：

Bash


如果只是普通对话，不需要手动调用——Agent 会根据上下文自动判断是否需要读取 Skills 内容。

## 创建你的第一个 Skills

创建 Skills 只需两步：在 Skills 目录下新建一个子目录，然后在里面创建 `SKILL.md` 文件。

推荐的存放位置（对所有项目生效）：

Text


`SKILL.md` 使用 YAML Frontmatter 定义元数据，下方是 Markdown 格式的规范内容：

Markdown


Frontmatter 中 `name` 和 `description` 均为可选字段，省略时默认使用目录名。

### 示例：用 Skills 固化 Git 提交规范

团队规定提交信息必须遵循 Conventional Commits 格式，但每次都要重新说明很麻烦。把规范写成 Skills，之后只需一条命令就能调用。

**第一步：创建 Skill 文件**

Markdown


**第二步：完成代码修改后，调用 Skills**

Bash


Kimi Code 会读取你的规范，结合任务描述，直接输出符合格式的提交信息，不需要你再重复说明任何格式要求。

## Flow Skills：定义多步骤工作流

普通 Skills 提供的是静态规范，**Flow Skills** 则可以定义一套自动执行的多步骤流程。

在 Frontmatter 中设置 `type: flow`，并在内容中嵌入 Mermaid 或 D2 格式的流程图，即可创建 Flow Skills。

Markdown


使用 `/flow:<name>` 命令执行，Agent 会从 `BEGIN` 节点开始，按流程图自动完成每个步骤，直到到达 `END`。

## Skills 加载机制

Kimi Code CLI 按以下优先级查找并加载 Skills（先加载的同名 Skills 优先）：

1.  **内置 Skills**：随软件包安装，提供基础能力
2.  **用户级 Skills**：存放在主目录中，对所有项目生效
3.  **项目级 Skills**：存放在项目目录中，仅在该项目下生效

你也可以通过 `--skills-dir` 参数手动指定额外的 Skills 目录：

Bash


Kimi Code CLI 内置了两个实用 Skill：`kimi-cli-help`（解答 CLI 使用问题）和 `skill-creator`（引导你创建新的 Skill）。输入 `/skill:skill-creator` 即可开始。

完整的配置选项和参数说明，请参阅 [Kimi Code CLI Skills 文档](https://www.kimi.com/code/docs/kimi-code-cli/customization/skills.html)。

本文是否对你有帮助



[ › 上一篇在 Kimi Claw 中使用技能](/help/plugins-and-skills/use-skills-in-claw)[下一篇 › 创建技能常见问题](/help/plugins-and-skills/create-custom-skills-faq)
