---
title: "What if Kimi Claw does not reply in Feishu? - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-claw/feishu-no-response
lang: en
fetched: 2026-09-16
html_sha256: 6b6eb59f1569b8967dbbf660dc5a08e664d46a6a8409cd18f49453324aaa0054
---

[Help Center](/en/help) › [Kimi Claw](/en/help/kimi-claw) › [No response when @mentioning the bot in a Feishu group?](/en/help/kimi-claw/feishu-no-response)

# Feishu Bot FAQ

## What should I do if the bot does not respond when @mentioned in a Feishu group?

By default, the Feishu bot does not respond to group conversations; it only responds to direct messages. If the bot does not react when you @mention it in a Feishu group, this is the normal default behavior.

### Option 1: One-sentence fix

In your Kimi Claw conversation, simply say:

> Set Feishu's group chat policy to open

Then restart Kimi Claw. After that, you can @mention the bot and chat with it in the group.

### Option 2: Full configuration

If you need more granular control, send the following to the bot:

> Please add these configurations for me: dmPolicy: pairing (direct messages require pairing) groupPolicy: open (respond in all groups) requireMention: true (respond in groups only when @mentioned)

After sending it, **restart Kimi Claw** for the configuration to take effect.

#### Configuration reference

| Configuration    | Value     | Description                                                                                          |
|------------------|-----------|------------------------------------------------------------------------------------------------------|
| `dmPolicy`       | `pairing` | Direct message policy; pairing mode                                                                  |
| `groupPolicy`    | `open`    | Group chat policy; openly responds to messages in groups                                             |
| `requireMention` | `true`    | In group chats, the bot responds only when @mentioned, avoiding interference from unrelated messages |

Once the configuration takes effect, @mention the bot in a Feishu group chat to start a normal conversation.

## How do I hide the Reasoning section shown in Feishu/WeCom/Weibo?

Send `/reasoning off` in the conversation to hide the reasoning process.

This **does not turn off thinking**. The model will still think internally; it simply stops showing the thinking content to users.

| Command             | Effect                                                     |
|---------------------|------------------------------------------------------------|
| `/reasoning off`    | Hides the reasoning process and shows only the final reply |
| `/reasoning on`     | Shows the full reasoning process again                     |
| `/reasoning stream` | Shows the reasoning process in real time as a stream       |

## Why can't I see one-click QR-code linking for WeChat/Feishu?

The WeChat/WeCom plugins depend on the new version of OpenClaw. If your Kimi Claw was created **before March 22, 2025**, these plugins may not be built in yet.

**Solutions:**

1.  **Upgrade while keeping files**: Go to “Settings → Restore initial version”. Your workspace and memory will be retained, but you will need to reconfigure your chat apps. After the restore is complete, you can configure WeChat/Feishu
2.  **Delete and recreate**: If you do not have files that need to be kept, delete the current Kimi Claw and create a new one. Newly created Claws come with the latest plugins built in

If you want a lossless upgrade, you can wait for the next version update. At that time, OpenClaw in older Kimi Claw instances will be automatically updated to a version that supports the latest WeChat/Feishu plugins. Please watch for upgrade prompts on the Kimi Claw page.

## Can't connect Feishu integration?

See the [Configure a Feishu bot](/en/help/kimi-claw/feishu-bot) documentation and reconfigure it step by step. If it still cannot connect, use the Feishu diagnostic command in [Upgrade Notes](/en/help/kimi-claw/upgrade-notice) for troubleshooting.

Was this article helpful?



[ › PreviousCan Kimi Claw send and receive files?](/en/help/kimi-claw/file-transfer)[Next › How do I uninstall the Kimi plugin?](/en/help/kimi-claw/uninstall-plugin)
