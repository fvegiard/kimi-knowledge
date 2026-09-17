---
title: "How do I view my Kimi API balance and usage? - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-api/api-balance-and-usage
lang: en
fetched: 2026-09-16
html_sha256: e9f296389f79f6b1dca5477759df41f6903ecb9cf7a03851a82802ab09a8bfde
---

[Help Center](/en/help) › [Kimi API and Enterprise Partnerships](/en/help/kimi-api) › [Balance and Usage Lookup](/en/help/kimi-api/api-balance-and-usage)

# Balance and Usage Lookup

Kimi API provides multiple ways to view your account balance and usage details, helping you stay on top of usage and costs.

## View in the console

Log in to [platform.kimi.com/](https://platform.kimi.com/). On the **fee-detail** (billing details) page in the console, you can view:

- Current account balance
- Daily usage details
- Usage and fees by model
- Historical spending trends

**Note**: Bills for the current day are updated at **7:00 the next day**. Real-time usage data may have some delay.

## Token Estimation API

Before sending a request, you can use the Token Estimation API to estimate how many tokens the call will consume, making it easier to control costs.

Bash


Pass messages in the request body in the same format as Chat Completion. The API returns the estimated token count.

## Balance query API

Query the current account balance directly through the API:

Bash


Include your API Key in the request header to get the currently available balance information.

## Usage monitoring recommendations

- Check the fee-detail page regularly to monitor usage trends.
- Integrate the balance query API into your code and set a low-balance alert threshold.
- Use the Token Estimation API to estimate costs before key calls.

Was this article helpful?



[ › PreviousAPI Billing Guide](/en/help/kimi-api/api-pricing)[Next › Rate Limits and Higher Throughput](/en/help/kimi-api/api-rate-limits)
