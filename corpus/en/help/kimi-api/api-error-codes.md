---
title: "Kimi API Error Code Reference - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-api/api-error-codes
lang: en
fetched: 2026-09-16
html_sha256: bc013d0f6b99380e4623721a96358cf5038cedc896c14ff0e108c834caa9fb0d
---

[Help Center](/en/help) › [Kimi API and Enterprise Partnerships](/en/help/kimi-api) › [API Errors (Error Code Reference)](/en/help/kimi-api/api-error-codes)

# API Error Codes

You may encounter the following error codes when calling the Kimi API. Use the code and description to troubleshoot the issue.

## Error Code Reference

| Error code | Meaning                                                   | What to do                                                                                                                                                                                                                                         |
|------------|-----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 400        | Invalid request parameters (Bad Request)                  | Check whether the request body is correctly formatted and whether parameter names and types meet the documentation requirements. Common causes include malformed JSON, missing required parameters, or parameter values outside the allowed range. |
| 401        | Authentication failed (Unauthorized)                      | Check whether your API Key is correct, expired, or disabled. Make sure the request header uses the correct format: `Authorization: Bearer <your-api-key>`.                                                                                         |
| 403        | Insufficient permissions/Insufficient Balance (Forbidden) | Your account balance may have been used up. Please top up in the console. Your account may also be restricted; contact support for help.                                                                                                           |
| 404        | Resource not found (Not Found)                            | Check whether the requested URL path and model name are correct. Make sure the endpoint is `https://api.moonshot.cn/v1/...`.                                                                                                                       |
| 429        | Rate limit exceeded (Too Many Requests)                   | You have exceeded the current rate limit. Reduce your request frequency, implement exponential backoff retries, or contact support to request a higher rate limit.                                                                                 |
| 500        | Internal Server Error (Internal Server Error)             | A temporary server-side error occurred. Please try again later. If the issue persists, contact [\[email protected\]](/cdn-cgi/l/email-protection#e1809188cc92849397888284a18c8e8e8f92898e95cf8088) and include the request_id.                     |

## General Troubleshooting Tips

1.  **Check the full error message**: The JSON response returned by the API usually includes the `error.message` field with a more detailed error description.
2.  **Check the request_id**: The `request_id` returned for each request can help support quickly locate the issue.
3.  **Refer to the official documentation**: Make sure your integration matches the documentation at [platform.kimi.com](https://platform.kimi.com/docs/guide/start-using-kimi-api).
4.  **Use a retry mechanism**: For 429 and 500 errors, we recommend implementing automatic retries with an exponential backoff strategy.

Was this article helpful?



[ › PreviousKimi API Introduction](/en/help/kimi-api/api-overview)[Next › API Billing Guide](/en/help/kimi-api/api-pricing)
