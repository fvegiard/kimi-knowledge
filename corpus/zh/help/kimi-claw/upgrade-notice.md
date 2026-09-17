---
title: "Kimi Claw 升级注意事项 - Kimi 帮助中心"
source: https://www.kimi.com/help/kimi-claw/upgrade-notice
lang: zh
fetched: 2026-09-16
html_sha256: f201974c6ed5b845adf4f0a0f10469b30fae5158aa708b2a951491cc719334a3
---

[帮助中心](/help) › [Kimi Claw](/help/kimi-claw) › [升级注意事项](/help/kimi-claw/upgrade-notice)

# 升级注意事项

## 不要手动升级 OpenClaw 版本

OpenClaw 目前不支持更新到 3.22 日期之后的版本。如果手动升级或开启了自动更新，会导致 Kimi 插件失效，其他已安装的插件（微信、飞书、企微、微博等）也可能不可用。

**请勿手动升级或开启自动更新**，等待官方升级推送即可。

**误升级后的恢复方法：**

如果已经误升级导致插件失效，可以在设置中选择「恢复初始设置」恢复到可用版本。

- 工作空间和记忆会保留
- 需要重新配置聊天机器人（微信、飞书、企微等）

官方会在适配完成后统一推送升级，届时会在 Kimi Claw 页面内提示。

## 不要手动升级飞书插件

飞书插件升级时会同时升级 OpenClaw 版本，这会导致与当前环境不兼容。

**不建议手动升级飞书插件。** 目前新安装的 Kimi Claw 已经安装了适配的最新版本插件。

升级飞书插件后，最新版本的插件可能与当前 OpenClaw 版本不兼容，导致飞书机器人无法正常使用。

## 常见飞书诊断命令与问题修复

### 方法一：通过对话命令诊断

在与 AI 的对话中发送以下命令：

| 命令             | 说明                     |
|------------------|--------------------------|
| `/feishu start`  | 确认飞书插件是否安装成功 |
| `/feishu doctor` | 检查配置是否正常         |
| `/feishu auth`   | 批量完成用户授权         |

插件中内置了常见问题的解决方案，遇到问题可以先问问小龙虾。

### 方法二：通过 npx 命令诊断与修复

如果对话命令无法解决问题，可在终端中运行以下诊断命令：

**查看问题：**

Bash


![飞书诊断结果](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/kimi-claw/images/kimi-claw/upgrade-notice-01.59a28a0b0da4.png)

**尝试自动修复：**

Bash


![飞书自动修复](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/kimi-claw/images/kimi-claw/upgrade-notice-02.9cd30a9788bc.png)

### 方法三：反馈问题

如果仍然无法修复，可在反馈群里反馈信息。运行以下命令查看版本信息，反馈问题时请带上以辅助排查：

**查看版本信息：**

Bash


![版本信息](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/kimi-claw/images/kimi-claw/upgrade-notice-03.dd1bbe742b22.png)

**查看详细配置信息：**

Bash


反馈群可以飞书扫码加入

![KimiClaw飞书群](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/kimi-claw/images/kimi-claw/upgrade-notice-04.883d7acf9a50.png)

本文是否对你有帮助



[ › 上一篇Tailscale 断开连接怎么办？](/help/kimi-claw/tailscale-issue)[下一篇 › 关于会员订阅套餐调整的说明 - 2026年7月20日](/help/kimi-blackboard/plan-adjustment-notice)
