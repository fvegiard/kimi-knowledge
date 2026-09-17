---
title: "Kimi Code for VS Code 快速入门 - Kimi 帮助中心"
source: https://www.kimi.com/help/kimi-code/vscode-getting-started
lang: zh
fetched: 2026-09-16
html_sha256: c75cfd914ef9147f8e4084d1492395fab3a0d05d20d3a4f28479347764fe6847
---

[帮助中心](/help) › [Kimi Code](/help/kimi-code) › [Kimi Code for VS Code 快速开始](/help/kimi-code/vscode-getting-started)

# Kimi Code for VS Code 快速开始

**VS Code 插件适配中**

Kimi Code for VS Code 目前仅对旧版 Python CLI 用户开放新增安装。已安装插件的老用户升级新版 CLI 后仍可继续使用，其他 TS 版本 CLI 用户暂不支持安装。

![在 VS Code 中安装 Kimi Code 扩展插件](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/kimi-code/images/vscode-getting-started/kimi-code-showcase.f1443e796581.jpeg)

Kimi Code for VS Code 是集成于 Visual Studio Code 的扩展插件。安装后，你可以在编辑器内直接发起提问、审查代码 diff 并快速提交变更。插件能够读取你引用的文件内容，理解项目上下文，提供更精准的编程辅助。

## 安装

1.  打开 VS Code。
2.  进入扩展市场（快捷键 `Ctrl+Shift+X` / `Cmd+Shift+X`）。
3.  搜索 **Kimi Code**。
4.  点击 **安装**。

如果扩展未出现，尝试重启 VS Code 或在命令面板中执行 `Developer: Reload Window`。

## 登录配置

安装完成后，需要登录你的 Kimi 账号：

1.  打开 Kimi Code 聊天面板。
2.  输入 `/login` 命令。
3.  按提示完成授权，系统会自动绑定你的账号。

## 基本使用

### 聊天面板

Kimi Code 在 VS Code 侧边栏提供了原生的聊天面板，你可以：

- **提问和对话**：直接输入问题，AI 会结合项目上下文进行回答。
- **引用文件**：使用 `@` 符号引用文件或文件夹，AI 会读取其内容作为上下文。
- **斜杠命令**：使用 `/` 命令执行项目扫描、上下文管理等操作。

### 代码变更

AI 生成的代码变更会以 diff 视图展示，你可以：

- **审查变更**：逐行查看 AI 建议的修改内容。
- **接受或拒绝**：选择性地应用部分或全部变更。
- **回退操作**：对已应用的变更进行回退。

### 集成 MCP

VS Code 扩展同样支持 MCP 集成，你可以在项目中配置 MCP 服务器来扩展 AI 的能力。

## 与 CLI 的区别

| 特性       | VS Code 扩展        | CLI                     |
|------------|---------------------|-------------------------|
| 使用环境   | VS Code 编辑器内    | 终端                    |
| 交互方式   | 图形化聊天面板      | 命令行对话              |
| 代码变更   | diff 视图，支持回退 | 直接修改文件            |
| 文件引用   | @ 引用，图形化选择  | @ 引用，路径补全        |
| Shell 命令 | AI 代为执行         | 支持 Shell 模式直接执行 |
| 会话管理   | 面板内管理          | /sessions 命令管理      |

两种方式可以按需使用，互不冲突。CLI 更适合终端重度用户和自动化场景，VS Code 扩展更适合习惯图形化操作的开发者。

本文是否对你有帮助



[ › 上一篇定制化和更多参考](/help/kimi-code/cli-customization)[下一篇 › VS Code 核心操作](/help/kimi-code/vscode-core-operations)
