---
title: "Kimi API Model Capabilities Explained - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-api/api-model-capabilities
lang: en
fetched: 2026-09-16
html_sha256: f8e8df945c206e17c3794d59f92f57839abff7f1d09325a198db9d7cedb1d225
---

[Help Center](/en/help) › [Kimi API and Enterprise Partnerships](/en/help/kimi-api) › [Model Capabilities](/en/help/kimi-api/api-model-capabilities)

# Model Capabilities

Here are some frequently asked questions about Kimi API model capabilities.

## Does it support JSON Mode?

Yes. Kimi API provides JSON Mode, which constrains model output to valid JSON. To use it:

- Set `response_format` in the request parameters to `{"type": "json_object"}`.
- In the prompt, clearly ask the model to return JSON and describe the expected structure.
- In JSON Mode, the model will ensure the output is a parseable JSON string.

## Does it support model fine-tuning?

Kimi API **does not currently support** user-initiated model fine-tuning. If you need a customized model, please contact our sales team via [platform.kimi.com/contact-sales](https://platform.kimi.com/contact-sales) to learn about enterprise customization options.

## Does it support OCR?

Kimi API's Vision models can understand images and recognize text in images, enabling OCR-like results:

- Supports text recognition in Chinese, English, and multiple other languages.
- Can recognize printed text and some handwriting.
- Each image is billed at a fixed rate of 1024 tokens.
- Beyond plain text recognition, it can also understand structured content such as tables and charts in images.

## Does it support TTS (text-to-speech) and ASR (speech recognition)?

Kimi API **does not currently support** TTS or ASR. If you need speech-related capabilities, we recommend using Kimi API together with a third-party speech service. Please follow platform announcements for future updates.

Was this article helpful?



[ › PreviousTop-ups and Invoicing](/en/help/kimi-api/api-billing-and-finance)[Next › Business Cooperation and Sales Contact](/en/help/kimi-api/api-business-cooperation)
