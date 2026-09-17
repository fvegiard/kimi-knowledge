---
title: "Kimi API Rate Limits - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-api/api-rate-limits
lang: en
fetched: 2026-09-16
html_sha256: 511a554b6db4e482757bb7368a924398a0c00e322775ec4cfb781882fb55773b
---

[Help Center](/en/help) › [Kimi API and Enterprise Partnerships](/en/help/kimi-api) › [Rate Limits and Higher Throughput](/en/help/kimi-api/api-rate-limits)

# Rate Limits and Higher Throughput

Kimi API applies rate limits to request frequency and concurrency to keep the platform stable and ensure fair use. Your rate limit tier is tied to the total top-up amount in your account.

## Rate Limit Tiers

API rate limits are tiered based on your account’s **total top-up amount**. The higher your total top-up amount, the higher the available rate limits. For detailed tier criteria and the corresponding RPM (requests per minute) and TPM (tokens per minute) limits, see the instructions in the [platform.kimi.com/](https://platform.kimi.com/) console.

## View Your Current Limits

- Log in to the API console to view the current rate limit tier for your account.
- API response headers also include rate limit information:
  - `X-RateLimit-Limit`: current rate limit ceiling
  - `X-RateLimit-Remaining`: remaining available requests
  - `X-RateLimit-Reset`: time when the limit resets

## Handling 429 Errors

When your request frequency exceeds the limit, the API returns a 429 status code. We recommend that you:

1.  **Use exponential backoff for retries**: wait 1 second before the first retry, then double the wait time each time (2s, 4s, 8s...).
2.  **Control concurrency**: use a request queue or semaphore to limit the number of requests sent at the same time.
3.  **Batch processing**: combine multiple small requests into fewer larger requests.

## Request Higher Rate Limits

If your business needs exceed your current rate limits:

- **Top up to increase throughput**: increase your total top-up amount, and the system will automatically upgrade your rate limit tier.
- **Contact support**: for special requirements, contact platform support or reach out to the sales team via [platform.kimi.com/](https://platform.kimi.com/) to request a customized rate quota.

Was this article helpful?



[ › PreviousBalance and Usage Lookup](/en/help/kimi-api/api-balance-and-usage)[Next › Model Selection and Performance Comparison](/en/help/kimi-api/api-model-selection)
