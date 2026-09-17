---
title: "Kimi 浏览器扩展产品介绍 - Kimi Help Center"
source: https://www.kimi.com/help/kimi-webbridge/kimi-webbridge-faq
lang: zh
fetched: 2026-09-16
html_sha256: 6e6b808766a5957adac6cca9814dcc41ec45f77e7dcea06d5e7863a8ae7509f2
---

[帮助中心](/help) › [Kimi 浏览器扩展](/help/kimi-webbridge) › [常见问题（FAQ）](/help/kimi-webbridge/kimi-webbridge-faq)

# 常见问题（FAQ）

## 产品版本

### Kimi WebBridge 和 Kimi 浏览器扩展是什么关系？

Kimi WebBridge 更名为 Kimi 浏览器扩展，并新增了浏览器侧边栏入口、录制网页操作、拆解网页生成指令等功能。通过本地 Agent 调用扩展的方式保持不变，可继续使用；新增的侧边栏入口需登录 Kimi 账号后使用。

## 安装与配置

### 安装扩展时提示"无法从该网站添加应用"？

请确保从官方应用商店（Chrome Web Store 或 Edge Add-ons）安装。如无法访问应用商店，可使用官网提供的手动安装方式。

### 运行连接指令后没有反应？

请检查网络连接是否正常。如仍有问题，尝试重启 Kimi Claw Desktop 后再次运行指令。

### 可以在多台电脑上使用吗？

可以，每台电脑需要单独安装和配置 Kimi 浏览器扩展。

### 找不到 Kimi Claw Desktop？

Kimi Claw Desktop 是部署在你本地电脑上的 Kimi Claw。打开 Kimi 桌面版，在左侧边栏找到 Kimi Claw，新建一个 Claw，选择部署到"我的电脑"。

## 连接与使用

### 插件状态显示未连接？

请确认已成功安装 Kimi 浏览器扩展，然后根据你的使用方式操作：

- **Kimi 桌面版**：重启 Kimi 桌面版后重试
- **其他 Local Agent**：在 Agent 中重新发送以下指令，运行后重启 Agent：

Bash


### 在Windows中安装Kimi 浏览器扩展，报错：安装失败

Kimi 浏览器扩展支持Windows操作系统，可以在Linux环境中运行安装命令：

Bash


### 已经完成安装步骤，但使用时提示和 Chrome 不兼容，这是怎么回事？

如果 Kimi 浏览器扩展能正常打开网页，但 `snapshot`、`evaluate`、`screenshot`、`click` 这类操作一直失败，更常见的原因是**浏览器里的其他插件发生了冲突**。

尤其是爬虫类、网站助手类、录屏类、AI 辅助类插件，更容易影响 Kimi 浏览器扩展的正常使用。

建议你这样排查：

1.  打开浏览器扩展管理页
2.  先临时关闭其他插件
3.  只保留 Kimi 浏览器扩展
4.  重启浏览器后再试一次
5.  如果恢复正常，再把其他插件一个个打开，定位冲突插件

### Kimi 浏览器扩展会泄露我的登录信息吗？

不会。所有执行都在你本地完成，登录态和网页内容不会离开你的设备。Agent 只能获取你授权的操作结果。

### 为什么有时候操作会失败？

网页结构复杂或动态加载可能导致操作失败。可以尝试简化指令，或让 Agent 先截图确认页面状态后再执行操作。

### 支持哪些浏览器？

目前支持 Chrome 和 Edge 浏览器，建议使用最新版本以获得最佳体验。

## 与其他 Agent 配合

### 除了 Kimi，还支持哪些 Agent？

Kimi 浏览器扩展支持所有 Local Agent，包括 Claude Code、Codex、Cursor、Kimi Code、Hermes Claw 等。

### 不同 Agent 的配置方式一样吗？

配置指令相同，都是运行一条 curl 命令完成安装。具体可参考各 Agent 的 Skill 配置方式。

## 反馈与帮助

如果你在使用过程中遇到问题或有建议，欢迎提供反馈。

反馈时信息越完整，我们越能快速定位和解决问题。

![Kimi 浏览器扩展用户群](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/kimi-webbridge/images/FAQ/%E7%94%A8%E6%88%B7%E7%BE%A4.9c7cdd841632.png)

反馈时请提供：

- **浏览器版本**：例如 Chrome 124.0.6367.82
- **Kimi 浏览器扩展版本**：可在浏览器扩展管理页面查看
- **你使用的 AI Agent**：例如 Kimi Desktop、Claude Code、Cursor 等
- **问题描述和截图**：请尽量描述复现步骤
- **相关日志（如有）**：可在插件界面或浏览器控制台获取

本文是否对你有帮助



[ › 上一篇Kimi 浏览器扩展 使用案例演示](/help/kimi-webbridge/kimi-webbridge-use-cases)[下一篇 › Kimi Docs & Kimi Sheets 文档和表格](/help/docs-and-sheets/docs-and-sheets-overview)
