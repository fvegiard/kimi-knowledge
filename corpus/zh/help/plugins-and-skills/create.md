---
title: "如何创建个人插件 - Kimi 帮助中心"
source: https://www.kimi.com/help/plugins-and-skills/create
lang: zh
fetched: 2026-09-16
html_sha256: ada94587e67c78ba46f35af88d5496296353019707fe6a2bb1e0ff0876344807
---

[帮助中心](/help) › [插件和技能](/help/plugins-and-skills) › [如何创建个人插件](/help/plugins-and-skills/create)

# 如何创建个人插件

在 Kimi Work 中，你可以通过内置的 **Plugin Builder** 技能，把一句话想法、外部插件仓库或任意网页，变成属于自己的插件。无论用哪种方式，插件都会经过同一条路径到你手中：**创建 / 转换 → 登记进个人插件市场（「个人」页签）→ 点 ＋ 安装 → 会话中使用**，安装后当前会话立即可用，无需重启。

开始之前，请确认你已安装最新版 [Kimi Work](https://www.kimi.ai/products/kimi-work) 桌面端。Plugin Builder 为内置技能，无需额外安装：在会话中输入「/」唤起，或在插件市场点击「自定义插件」进入主会话创建。

![插件市场中的「自定义插件」入口](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/plugins-and-skills/images/create/plugin-market-entry.d4a451d5a737.png)

## 如何一键创建新的插件

适合「我有一个想法，但没有现成代码」的场景。你只需描述想要的能力，Plugin Builder 会自动完成脚手架搭建、字段填写、本地校验和登记，全程无需手写任何文件。

1.  **描述需求。**在会话中唤起 Plugin Builder，用一句话说明插件要做什么，例如「帮我做一个能查公司工商信息的插件」。名称、简介、分类等能自动推断的字段都会自动填好，只有 MCP 服务地址、图标这类无法推断的信息才会向你确认。

2.  **等待创建完成。**Plugin Builder 会在本地生成插件文件，自动通过结构与规范校验，随后登记进你的个人插件市场。

3.  **安装使用。**打开「插件」→「个人」页签，找到刚创建的插件，点击 ＋ 安装。安装后当前会话立即可用，也可以通过「/」随时唤起。

**一段话 Prompt：**

Text


## 如何从插件市场导入

把插件仓库链接丢给 Plugin Builder，它会自动识别、转换格式并安装到你的「个人插件」页签。导入的插件与官方市场互不影响，可以随时卸载。

1.  **支持哪些插件：**Plugin Builder 能识别以下来源的插件清单（manifest），并统一转换为 Kimi 原生格式 `kimi.plugin.json`：

| 格式                      | 说明                                                                                                                |
|---------------------------|---------------------------------------------------------------------------------------------------------------------|
| `kimi.plugin.json`        | Kimi 原生格式：校正必需字段                                                                                         |
| 其他 Agent 平台的插件清单 | 如 `.codex-plugin/plugin.json`、`.claude-plugin/plugin.json` 等目录形式的 plugin.json，以及各平台自带的市场索引文件 |
| `server.json`             | MCP 官方 registry 格式：转换为仅含 MCP 服务的插件                                                                   |
| 通用 `plugin.json`        | 位于插件根目录的通用清单格式                                                                                        |

2.  **如何导入插件：**把仓库链接发给 Plugin Builder，会自动识别以下几种仓库形态：

- **单插件仓库**：整个仓库转换为一个插件；
- **多插件仓库（monorepo）**：每个子目录各转换为一个插件；
- **插件市场 / 索引仓库**（带 plugins.json 或 marketplace.json 索引的仓库）：按索引逐条展开、批量转换；
- **纯技能仓库**：没有插件清单、只有技能文件的仓库，整体打包为技能型插件。

3.  **去个人插件页安装：**处理完后，Plugin Builder 会告诉你哪些可用，进入「插件 → 个人」页，点击对应卡片的「安装」，即可在会话中使用。

![导入插件完成](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/plugins-and-skills/images/create/import-plugin-done.9147546051b1.png)

**一段话 Prompt：**

导入单个仓库：

Text


批量导入插件市场：

Text


只转指定子目录：

Text


**导入后的管理：**

- **更新插件**：源仓库有更新，或想改名、改简介，直接告诉 Plugin Builder，它会重新转换或修改后重新登记。
- **卸载 / 移除**：在「个人」页签卸载即可停用；卸载后条目仍保留在页签内，想彻底移除可以删除条目。
- **源目录**：转换产物保留在本地工作区的 plugins/ 目录，是插件的「源文件」，Plugin Builder 后续更新都基于它，请不要手动删除。

## 如何把网页转换成插件

适合「常用网站没有公开 API，但想让 Kimi 直接帮你查数、操作」的场景。把网址发给 Plugin Builder 并说明需求，例如「把 XX 网站做成插件，我要能搜 XX」。分析和运行插件用的浏览器有两种选择：

| 方式                   | 适合场景                                                | 需要准备                                           |
|------------------------|---------------------------------------------------------|----------------------------------------------------|
| **内置浏览器（默认）** | 大多数网站；用 Kimi Work 自带的浏览器分析网站、运行插件 | 无需安装任何东西；需要登录时在内置浏览器里登录一次 |
| **WebBridge（wb）**    | 想直接复用你 Chrome 里已登录的账号                      | 先安装 WebBridge 插件，通过它操作你的 Chrome       |

1.  **分析网站。**Plugin Builder 会用你选的浏览器打开该网址。如果页面需要登录，会请你在浏览器里登录一次——全程不会向你索要密码、Cookie 或任何凭证。
2.  **反推接口并生成插件。**它会在页面上实际操作一遍核心功能、抓取网络请求，分析出网站内部的数据接口，然后生成一个自带查询脚本的技能型插件。
3.  **校验、登记、安装。**与前两种方式相同：插件通过校验后登记进「个人」页签，点 ＋ 安装即可使用。

之后你只要说「帮我查一下 XX」，Kimi 就会通过该插件在浏览器里直接取数并整理好结果。如果网站接口变动导致插件失效，可以让 Plugin Builder 重新分析并更新插件。

**一段话 Prompt：**

Text


![把网页转换成插件的构建过程](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/plugins-and-skills/images/create/webpage-plugin-build.4f76a4f51ac1.png)

![网页插件提交前的信息确认](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/plugins-and-skills/images/create/webpage-plugin-review.cfeed89fb147.png)

![网页插件登记成功](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/plugins-and-skills/images/create/webpage-plugin-registered.e39fa20fe79e.png)

内置浏览器方式依赖 Kimi Work 的内置浏览器能力，如果提示需要升级，请将客户端更新到最新版本；WebBridge 方式需要先在电脑上和 Chrome 中装好 WebBridge。

本文是否对你有帮助



[ › 上一篇插件是什么](/help/plugins-and-skills/overview)[下一篇 › 如何把插件发布到公开市场](/help/plugins-and-skills/publish)
