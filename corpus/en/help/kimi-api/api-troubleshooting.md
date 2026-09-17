---
title: "Kimi API FAQs and Troubleshooting - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-api/api-troubleshooting
lang: en
fetched: 2026-09-16
html_sha256: 27e4ea2422c66bfb70122bf26755839ca31f1bdce631fc2d6b985bd4e0c504c4
---

[Help Center](/en/help) › [Kimi API and Enterprise Partnerships](/en/help/kimi-api) › [API Call FAQs](/en/help/kimi-api/api-troubleshooting)

# API Call FAQs

Below are the issues developers most often encounter when using Kimi API, along with recommended solutions.

## What should I do if I receive a 429 rate limit error?

A 429 error means your request frequency has exceeded the rate limit for the current account. You can try the following:

- Implement an exponential backoff retry strategy, such as retrying after 1s, 2s, 4s, and so on.
- Control the number of concurrent requests and use a queue mechanism.
- Increase your cumulative top-up amount to raise your rate limit tier.
- If you need a higher quota, contact the sales team.

## What should I do if I receive a 401 authentication failure error?

A 401 error means API Key authentication failed. Please check:

- Whether the API Key was copied correctly, including any leading or trailing spaces.
- Whether the request header is in the format `Authorization: Bearer <your-api-key>`.
- Whether the API Key has been deleted or disabled. You can confirm this in the console.
- Whether you are using a Key from another platform. Kimi API Keys start with `sk-`.

## Is file upload billed?

Uploading a file does not incur a fee by itself. However, when you reference an uploaded file in a conversation, the file content is parsed into tokens and counted as input token billing. The larger the file, the more tokens will be generated during parsing.

## What should I do if I receive a 403 Insufficient Balance error?

A 403 error usually means your account balance is insufficient. Please top up in the console. You can continue using the service immediately after the top-up is completed. You can also confirm your current balance through the balance query API.

## What should I do if the returned content is truncated?

If the content returned by the API is incomplete or truncated:

- Check whether the `max_tokens` parameter is set too low, and increase it as needed.
- Check the `finish_reason` field in the response: `length` means the output was truncated due to the token limit, while `stop` means the generation ended normally.
- For long-form text generation, consider splitting the task into multiple requests.

## Can the file API upload images?

Yes. The file upload API supports image uploads, and uploaded images can be referenced in conversations. If you use a Vision model, you can also pass images directly in messages via URL or Base64.

## What are the sources for Web Search?

The Web Search capability of Kimi API retrieves publicly available information from the internet in real time. Search results come from web pages indexed by mainstream search engines. Each Web Search incurs an additional charge of ¥0.03.

## Is an Allegretto membership related to API concurrency?

Kimi memberships, such as Allegretto, and API use separate billing systems. The Agent parallelism included in membership plans applies only to Kimi products and is unrelated to API rate limits. API concurrency limits depend on the account’s cumulative top-up tier.

## What is the difference between API and the web version of Kimi?

- **Kimi on the web**: A conversation product for general users, used directly in a browser.
- **Kimi API**: An API service for developers, used to integrate AI capabilities into your own products.
- They use separate billing systems. The same account can be used, but credits are not shared between them.

## Are there APIs for PPT generation and Deep Research?

APIs for PPT generation and Deep Research are **not available yet**. These features are currently available only in Kimi products. Please follow platform announcements for the latest updates.

## Is local deployment supported?

Kimi API currently provides cloud API services only and **does not support local private deployment at this time**. If you need private deployment, please contact the sales team via [platform.kimi.com/contact-sales](https://platform.kimi.com/contact-sales) for consultation.

## Can Kimi API be called from outside the Chinese mainland?

Kimi API is primarily intended for users in the Chinese mainland. Access from overseas regions may be affected by network conditions, and stability cannot be fully guaranteed. If you need to use it overseas, we recommend contacting the sales team to discuss feasible options.

Was this article helpful?



[ › PreviousFree Trial Benefits](/en/help/kimi-api/api-free-trial)[Next › Account and Verification](/en/help/kimi-api/api-account-and-auth)
