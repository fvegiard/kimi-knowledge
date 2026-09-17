---
title: "Kimi Claw 对话限制说明 - Kimi 帮助中心"
source: https://www.kimi.com/help/kimi-claw/conversation-limits
lang: zh
fetched: 2026-09-16
html_sha256: aed1a981c62e8012f0136346b4e3e7542f22b20afb81c60f41f2edc60518e014
---

[帮助中心](/help) › [Kimi Claw](/help/kimi-claw) › [对话限制与 API 限频](/help/kimi-claw/conversation-limits)

# 对话限制与 API 限频

## Token 超过最大限制怎么办？

当对话上下文过长，超过模型的 token 限制时，Kimi Claw 可能无法正常回复。

![发送 /new 新建对话](https://statics.kimi.ai/kimi-helpcenter-doc/zh-CN/kimi-claw/images/kimi-claw/conversation-limits-01.eb02fabfe6ce.png)

**解决办法**：

- 发送 `/new` 命令新建对话，清空当前上下文。
- 如果 `/new` 之后仍然提示超过 context 限制，可能是模型误加载了过多的 Skill 内容。此时可以尝试：
  - 使用 `/skills` 查看当前加载的技能，卸载不需要的技能。
  - 使用 `/compact` 压缩当前上下文。
  - 使用 `/reset` 重置 Kimi Claw。

## 提示 API rate limit reached

出现此提示说明你已触发 API 限流，请稍后重试。

**查看额度与频次**：

1.  前往 [kimi.com/code](/code)。
2.  进入 **控制台**。
3.  点击 **查看额度与频次**，了解当前的使用情况和限制。

如果经常遇到限流，建议合理安排任务频率，或升级会员计划以获取更高的调用额度。

本文是否对你有帮助



[ › 上一篇记忆丢失与上下文保存](/help/kimi-claw/memory-loss)[下一篇 › 所有平台支持 Kimi Claw 么？](/help/kimi-claw/platform-support)
