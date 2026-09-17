---
title: "第三方 Coding Agent 中使用 Kimi - Kimi 帮助中心"
source: https://www.kimi.com/help/kimi-code/third-party-agents
lang: zh
fetched: 2026-09-16
html_sha256: 1c2279881239decfdaf1ef621c8424a62c4ffaa4b85d78a5969b32a76d182062
---

[帮助中心](/help) › [Kimi Code](/help/kimi-code) › [在第三方 Coding Agent 中使用](/help/kimi-code/third-party-agents)

# 在第三方 Coding Agent 中使用

Kimi Code 权益支持在主流 Coding Agent 中使用——例如 Claude Code、Roo Code、OpenCode 等；也可以配合 OpenClaw、Hermes 等通用 Agent 框架。让你在自己习惯的工具里自由调用 Kimi 的 AI 能力。

本文档将展示 Claude Code 与 Roo Code 的配置方法。

## 前提条件

- 已订阅 Kimi 会员并开通 Kimi Code 权益。
- 已获取 API Key（在 [Kimi Code 控制台](/code/console) 中创建）。

## 在 Claude Code 中使用

[Claude Code](https://code.claude.com/docs) 是 Anthropic 推出的命令行编程助手。安装方式请参考 [Claude Code 官方文档](https://code.claude.com/docs/en/getting-started)。

安装完成后，需要跳过 Anthropic 默认的登录流程。在终端中执行以下命令：

Bash


### 配置 Kimi Code 模型

设置环境变量后启动 Claude Code：

**macOS / Linux**

Bash


**Windows**

Powershell


启动后输入 `/status` 确认模型已生效。使用快捷键可开启 Thinking 模式：macOS 为 `Option+T`，Windows 和 Linux 为 `Alt+T`。

### 切换到高速版

高速版输出速度约为普通版的 5–6 倍、**额度消耗约为普通版的 3 倍**，需订阅 [Allegretto](/membership/pricing) 及以上档位会员。在 Claude Code 中有两种开启方式：

- **方式一：`/fast on` 命令**——启动 Claude Code 后输入 `/fast on`，出现 `⚡ Fast mode ON` 提示即为开启成功。
- **方式二：`/config` 命令**——输入 `/config` 打开配置面板，在 **Config** 标签下开启 **Fast mode**（以及 **Thinking mode**）即可。

## 在 Roo Code 中使用

[Roo Code](https://github.com/RooCodeInc/Roo-Code) 是一款 VS Code 中的 AI 编程插件。

### 安装 Roo Code

1.  在 VS Code 扩展市场搜索 **Roo Code** 并安装。
2.  安装完成后，活动栏会出现 Roo Code 图标；如未出现，可重启 VS Code。

### 配置 Kimi Code 模型

1.  打开 Roo Code 面板，进入**设置页**。

2.  在 **Providers** 区域选择 **OpenAI Compatible**，按照提示填写：

    | 配置项     | 值                                                                 |
    |------------|--------------------------------------------------------------------|
    | Entrypoint | `https://api.kimi.com/coding/v1`                                   |
    | API Key    | 你的 API Key                                                       |
    | Model      | `kimi-for-coding` / `kimi-for-coding-highspeed`（普通版 / 高速版） |

3.  保存配置后即可开始使用。

## 注意事项

- 使用时请保持工具的真实身份标识，篡改客户端标识（User-Agent）将被视为违规，可能导致会员权益暂停。
- 如有疑问，请参阅 [权益说明](/help/kimi-code/benefits) 或联系 Kimi 客服。

## 详细教程

- [在第三方 Coding Agent（Claude Code、Roo Code）中使用](https://www.kimi.com/code/docs/kimi-code/models.html#%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B7%A5%E5%85%B7)

本文是否对你有帮助



[ › 上一篇VS Code 核心操作](/help/kimi-code/vscode-core-operations)[下一篇 › Kimi Code 文档索引](/help/kimi-code/code-docs-index)
