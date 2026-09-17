---
title: "Kimi Claw Conversation Limits - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-claw/conversation-limits
lang: en
fetched: 2026-09-16
html_sha256: e86ca281097d855aecd1667a472ee7fbd07c4131e2ff23ad5494cbe6fa6286a9
---

[Help Center](/en/help) › [Kimi Claw](/en/help/kimi-claw) › [Conversation Limits and API Rate Limits](/en/help/kimi-claw/conversation-limits)

# Conversation Limits and API Rate Limits

## What if the token limit is exceeded?

When the conversation context becomes too long and exceeds the model's token limit, Kimi Claw may not be able to respond properly.

![Send /new to start a new conversation](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/conversation-limits-01.eb02fabfe6ce.png)

**What to do**:

- Send the `/new` command to start a new conversation and clear the current context.
- If you still see a context limit warning after using `/new`, the model may have loaded too much Skill content by mistake. You can try the following:
  - Use `/skills` to view the currently loaded skills and unload any you do not need.
  - Use `/compact` to compress the current context.
  - Use `/reset` to reset Kimi Claw.

## API rate limit reached message

This message means you have triggered an API rate limit. Please try again later.

**Check your credit and request frequency**:

1.  Go to [kimi.com/code](/code/en).
2.  Open **Console**.
3.  Click **View Credit and Frequency** to see your current usage and limits.

If you often encounter rate limits, we recommend spacing out your tasks appropriately or upgrading your membership plan for a higher call credit.

Was this article helpful?



[ › PreviousMemory Loss and Context Preservation](/en/help/kimi-claw/memory-loss)[Next › Does Kimi Claw support all platforms?](/en/help/kimi-claw/platform-support)
