---
title: "Kimi API 模型能力详解 - Kimi 帮助中心"
source: https://www.kimi.com/help/kimi-api/api-model-capabilities
lang: zh
fetched: 2026-09-16
html_sha256: 102e04d2471a2cba20fad064388149fd8ff08c7e1d12f4c7d9414eec33b27ad7
---

[帮助中心](/help) › [Kimi API与企业合作](/help/kimi-api) › [模型能力](/help/kimi-api/api-model-capabilities)

# 模型能力

以下是关于 Kimi API 模型能力的常见问题。

## 支持 JSON Mode 吗？

支持。Kimi API 提供 JSON Mode，可以约束模型输出为合法的 JSON 格式。使用方法：

- 在请求参数中设置 `response_format` 为 `{"type": "json_object"}`。
- 同时在 prompt 中明确要求模型返回 JSON 格式，并描述期望的结构。
- JSON Mode 下模型将保证输出为可解析的 JSON 字符串。

## 支持模型微调（Fine-tuning）吗？

目前 Kimi API **暂不支持**用户自行微调模型。如有定制化模型需求，请通过 [platform.kimi.com/contact-sales](https://platform.kimi.com/contact-sales) 联系销售团队，了解企业级定制方案。

## 支持 OCR 功能吗？

Kimi API 的 Vision 模型具备图片理解能力，可以识别图片中的文字内容，实现 OCR 效果：

- 支持中英文及多种语言的文字识别。
- 可识别印刷体和部分手写体。
- 每张图片按固定 1024 tokens 计费。
- 除了纯文字识别，还能理解图片中的表格、图表等结构化内容。

## 支持 TTS（文本转语音）和 ASR（语音识别）吗？

目前 Kimi API **暂不支持** TTS 和 ASR 功能。如需语音相关能力，建议结合第三方语音服务与 Kimi API 配合使用。请关注平台公告获取后续功能更新。

本文是否对你有帮助



[ › 上一篇充值与开票](/help/kimi-api/api-billing-and-finance)[下一篇 › 商务合作与联系销售](/help/kimi-api/api-business-cooperation)
