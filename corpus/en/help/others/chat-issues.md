---
title: "Kimi Chat FAQ and Troubleshooting - Kimi Help Center"
source: https://www.kimi.com/en/help/others/chat-issues
lang: en
fetched: 2026-09-16
html_sha256: e6c538e03318326b6cb99b26b33e37213531ba77f2053217e9d9a362d4e3dd4e
---

[Help Center](/en/help) › [FAQ](/en/help/others) › [Kimi Chat FAQ](/en/help/others/chat-issues)

# Chat FAQ

## Messages won’t send / a red circle appears?

This may be caused by one of the following:

- **Frequency limit triggered**: Kimi has a conversation limit within a given period. Sending messages too frequently in a short time may prevent you from continuing. We recommend trying again after 2–3 hours and keeping your message frequency under control.
- **Poor network conditions**: If your mobile signal is weak or the network is unstable, messages may fail to send. Try switching to another network and sending again.

## What if a chat exceeds 200,000 Chinese characters?

K2.6's single-turn context is about 128K tokens (roughly 50,000–60,000 Chinese characters). Once this limit is reached, the model can no longer read in new content. What to do depends on why you hit the limit:

- **A single file you sent is too large and hits the limit on the first turn**: split the file into smaller parts and send them in batches.
- **A multi-turn chat gradually builds up to the limit**: first summarize the key conclusions so far (you can also ask Kimi to "summarize and generate a handoff document"), then paste that into a new chat as the initial context to continue.

**Tips**:

- More fundamentally, using [Memory](/en/help/features/memory-space) and [Projects](/en/help/features/project) helps you avoid hitting the limit — Memory automatically retains key information, and a Project keeps your reference files, instructions, and memory together so every new chat carries the context.
- Deleting earlier messages in the same chat does not free up the context window — just start a new chat instead.
- Thinking consumes tokens; to save credits, set **Thinking strength** to **Standard**.
- For very long documents, K3 offers a 1M-token context (available with the top-tier membership); when composing, select **Conversation length: Extra long**.

## Seeing the “Let’s switch topics” prompt?

This prompt means the current content has triggered the safety policy, so the current topic cannot continue. Simply enter a new topic to restart the conversation; no waiting is needed. If you believe the content does not violate any rules, click “👎” to send feedback and help us improve the safety policy.

## Getting the reply “Kimi is a little tired”?

Too many users are online at the moment, and computing resources are under pressure. This is peak-hour rate limiting. Please wait 1–2 minutes and try again. To reduce waiting, you may consider subscribing to a membership plan, which provides priority access to a dedicated computing channel.

## Why can’t I download PPT/Word/Excel files from a chat?

The Kimi chat window itself does not generate downloadable Office files:

- To generate a PPT, go to [PPT Assistant](/en/slides), where online generation and download are supported.
- To generate Word or Excel files, please use **Agent**.

## How do I delete a single conversation?

In the Kimi app or on the web, find the conversation and tap delete. Once deleted, it will no longer appear on your device, and the related data will enter the processing workflow in accordance with Section 5 of the [Kimi Privacy Policy](/user/agreement/userPrivacy?version=v2).

## After I delete a conversation, is the share link still accessible?

No. A share link's accessibility is tied directly to its conversation: once the conversation is deleted, any external share links generated from it become invalid at the same time, others can no longer access the content through them, and the platform retains no accessible copy of the link.

## What should I do if I uploaded sensitive information by mistake?

Delete the conversation in the app immediately. If it involves highly sensitive information such as an ID card, bank card, or legal document, contact customer support at [\[email protected\]](/cdn-cgi/l/email-protection#5e2d2b2e2e312c2a1e333131302d36312a703d30) after deleting it, and note the type of sensitive information (e.g. “ID card”, “bank card”, “legal document”) in the email subject line so we can prioritize your request.

## Is any data retained after deletion?

As required by the Cybersecurity Law and other applicable laws and regulations, the platform must retain certain network logs (such as operation timestamps and account identifiers) for a specified period. These logs are used solely for security compliance and regulatory audits, and will not be used for any other purpose without your consent.

If you need to cancel your account and delete all associated data, see [Account and Data Deletion](/en/help/others/account-deletion).

Was this article helpful?



[ › PreviousWhat can Kimi do?](/en/help/others/capability)[Next › What are the differences between Kimi, Kimi Work, Kimi Code, and Kimi Claw? Which one should I use?](/en/help/others/product-comparison)
