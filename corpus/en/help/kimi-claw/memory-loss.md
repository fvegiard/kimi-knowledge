---
title: "What if Kimi Claw loses its memory? - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-claw/memory-loss
lang: en
fetched: 2026-09-16
html_sha256: c55470f4bb96998a03b41a85f951964ead7f0cf2b71bf889fc47e56482a30b0e
---

[Help Center](/en/help) › [Kimi Claw](/en/help/kimi-claw) › [Memory Loss and Context Preservation](/en/help/kimi-claw/memory-loss)

# Memory Loss and Context Preservation

## Why is yesterday’s conversation gone?

By default, OpenClaw **automatically resets conversations at 4:00 a.m. every day**. This clears overly long context and helps prevent AI hallucinations or lower-quality replies caused by excessive context length.

If you want to change the reset time or behavior, update the relevant settings in `config.yaml`.

**Tip**: For important preferences and information, proactively tell Kimi Claw, “**Please remember my preferences**.” It will save them to long-term memory (Memory), so they won’t be lost when the conversation resets.

## What if Kimi Claw forgets things?

The 4:00 a.m. refresh clears the current session context. If something you discussed earlier **was not saved to MEMORY**, it will be lost.

**What to do**:

- During a conversation, say “**Remember XXX in Memory**”, and Kimi Claw will write the information to long-term memory.
- You can view stored memories under **Workspace → AGENTS.md → \#MEMORY**.
- Use the `/memory` command at any time to view and manage memory.

## How long is memory retained if I don’t renew?

Memory files are stored in your workspace, and you can view or download them at any time.

- After your membership expires, the cloud host will be **retained for 7 days**.
- If you renew within 7 days, all data, including memories, configurations, and skills, will be restored.
- After 7 days, data may be cleared.
- The team is developing a memory backup feature, which will make it easier to export and restore memory data.

Was this article helpful?



[ › PreviousConfigure a DingTalk Bot](/en/help/kimi-claw/dingtalk-bot)[Next › Conversation Limits and API Rate Limits](/en/help/kimi-claw/conversation-limits)
