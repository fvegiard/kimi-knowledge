---
title: "Kimi API Pricing and Billing Guide - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-api/api-pricing
lang: en
fetched: 2026-09-16
html_sha256: 5045aa51ffb5d6904c5b341eb89ef8c1378dd9eafa28820f9816b1abd31e4104
---

[Help Center](/en/help) › [Kimi API and Enterprise Partnerships](/en/help/kimi-api) › [API Billing Guide](/en/help/kimi-api/api-pricing)

# API Billing Guide

Kimi API is billed based on token usage. Prices vary by model and feature.

## Billing Basics

- **Billed by token**: Each API call is charged separately based on input tokens and output tokens.
- **token unit**: 1M = 1,000,000 tokens.
- **Prices vary by model**: More capable models have higher unit prices. Choose the right model for your business needs.

## Add-on Feature Billing

- **Web search**: Each call that uses web search is charged an additional **¥0.03**, separate from token usage.

## Context Caching

Context Caching lets you cache frequently used context, such as system prompts and reference documents. tokens served from a cache hit are billed at a discounted rate, helping reduce the cost of repeated context.

For detailed Context Caching pricing, see the official documentation.

## Billing Details

For the complete model pricing table and billing rules, visit:

[https://platform.kimi.com/docs/pricing/chat](https://platform.kimi.com/docs/pricing/chat)

## Cost Optimization Tips

- Set the `max_tokens` parameter appropriately to avoid generating overly long, unnecessary content.
- Use Context Caching to cache repeated system prompts and context.
- Choose a model that matches the task complexity; lightweight models are sufficient for simple tasks.
- Streamline your prompt design to reduce unnecessary input tokens.

Was this article helpful?



[ › PreviousAPI Errors (Error Code Reference)](/en/help/kimi-api/api-error-codes)[Next › Balance and Usage Lookup](/en/help/kimi-api/api-balance-and-usage)
