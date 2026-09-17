---
title: "Kimi API 定价与计费说明 - Kimi 帮助中心"
source: https://www.kimi.com/help/kimi-api/api-pricing
lang: zh
fetched: 2026-09-16
html_sha256: d50c293d335a01f5896b7b7f57946f6819a9ea2af2ddb90f32ac400af01e8928
---

[帮助中心](/help) › [Kimi API与企业合作](/help/kimi-api) › [API 计费说明](/help/kimi-api/api-pricing)

# API 计费说明

Kimi API 按 token 消耗量计费，不同模型和功能的价格有所不同。

## 计费基础

- **按 token 计费**：每次 API 调用根据输入 token 和输出 token 分别计费。
- **token 单位**：1M = 1,000,000 tokens。
- **不同模型价格不同**：更高能力的模型单价更高，请根据业务需求选择合适的模型。

## 附加功能计费

- **联网搜索**：每次调用联网搜索功能额外收费 **¥0.03**，独立于 token 消耗。

## Context Caching

Context Caching 功能允许你缓存常用的上下文内容（如系统提示词、参考文档等），缓存命中部分的 token 将按优惠价格计费，有效降低重复上下文的使用成本。

详细的 Context Caching 定价请参考官方文档。

## Kimi K3 如何计费？

Kimi K3 上下文长度为 1M tokens，计费不按上下文长度分段：所有用量均按量付费，输入（区分缓存命中与未命中）与输出分别按统一单价计费。

详细的 Kimi K3 价格请参考 [Kimi K3 定价](https://platform.kimi.com/docs/pricing/chat-k3)。

## 计费详情

完整的模型价格表和计费规则，请访问：

[https://platform.kimi.com/docs/pricing/chat](https://platform.kimi.com/docs/pricing/chat)

## 费用优化建议

- 合理设置 `max_tokens` 参数，避免生成过长的无用内容。
- 使用 Context Caching 缓存重复的系统提示词和上下文。
- 根据任务复杂度选择合适的模型，简单任务使用轻量模型即可。
- 精简 prompt 设计，减少不必要的输入 token。
- 如果对成本敏感，可以选择使用 `kimi-k2.6` 模型。

本文是否对你有帮助



[ › 上一篇调用 API 报错（错误码说明）](/help/kimi-api/api-error-codes)[下一篇 › 余额消耗查询](/help/kimi-api/api-balance-and-usage)
