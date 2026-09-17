---
title: "How to Choose the Right Kimi API Model? - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-api/api-model-selection
lang: en
fetched: 2026-09-16
html_sha256: f9d19a8b511d5b07113c6f0fc83efaf7334cef8a893921eaa00820e9ec357063
---

[Help Center](/en/help) › [Kimi API and Enterprise Partnerships](/en/help/kimi-api) › [Model Selection and Performance Comparison](/en/help/kimi-api/api-model-selection)

# Model Selection and Performance Comparison

Kimi API offers multiple models for developers, each with different strengths in capability, speed, and pricing.

## Available Models

Visit [platform.kimi.com/docs/introduction](https://platform.kimi.com/docs/introduction) for the full model list and detailed parameters.

When choosing a model, we recommend evaluating the following factors:

- **Context length**: Different models support different maximum context windows. For long-document processing, choose a model with a larger context window.
- **Response speed**: Lightweight models respond faster and are better suited to latency-sensitive scenarios.
- **Generation quality**: Advanced models perform better on tasks such as complex reasoning and creative writing.
- **Pricing**: Choose the most cost-effective model based on your budget and expected call volume.

## Vision Models (Image Understanding)

Vision models support image input and can be used for image description, OCR, chart interpretation, and similar scenarios:

- Each image is billed at a fixed **1024 tokens**, regardless of image size or resolution.
- Common image formats are supported, including JPEG, PNG, and WebP.
- Images can be passed in via URL or Base64 encoding.

## Currently Unsupported Capabilities

- **Video multimodality**: Direct input and understanding of video files are not currently supported.
- **PPT generation API**: The PPT generation feature is not yet available via API.
- **Deep Research API**: The Deep Research feature is not yet available via API.

For these capabilities, please follow platform announcements for the latest updates.

Was this article helpful?



[ › PreviousRate Limits and Higher Throughput](/en/help/kimi-api/api-rate-limits)[Next › Free Trial Benefits](/en/help/kimi-api/api-free-trial)
