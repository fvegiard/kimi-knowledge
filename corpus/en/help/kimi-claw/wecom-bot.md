---
title: "How to Connect Kimi Claw to WeCom: Configuration Guide - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-claw/wecom-bot
lang: en
fetched: 2026-09-16
html_sha256: 772508c02873c233b7d8b2b8cb27038ec3416a19e03ef6bd825a6f01d328b340
---

[Help Center](/en/help) › [Kimi Claw](/en/help/kimi-claw) › [Configure a WeCom Bot](/en/help/kimi-claw/wecom-bot)

# Configure a WeCom Bot

Kimi Claw can be deployed to WeCom. Currently, both WeCom enterprise administrators and members can create Smart Bots. Smart Bots can proactively push messages to users in one-on-one chats and internal group chats. Follow the steps below to configure a WeCom bot based on Kimi Claw, or refer to the official documentation [Connect to OpenClaw over a Long Connection](https://open.work.weixin.qq.com/help2/pc/cat?doc_id=21658).

Please install the **latest desktop client** of [WeCom](https://work.weixin.qq.com/). Smart Bots cannot be created from the mobile app for now.

## Step 1: Create a WeCom Bot

1.  In the desktop client, go to “Workbench”, then click “Smart Bot” → “Create Bot” → “Create Manually”
2.  Scroll to the bottom of the page and select **API mode** to create it

![Workbench entry](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/wecom-bot-01.3b49d34df498.png)

![Create bot](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/wecom-bot-02.121a5b333596.png)

![API mode](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/wecom-bot-03.bd97384abc7a.png)

3.  Choose to create it via “Long Connection”, then obtain the **Bot ID** and **Secret**
4.  After copying the Bot ID and Secret, save the Smart Bot

![Long Connection method](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/wecom-bot-04.2dcfa614ef8c.png)

## Step 2: Install the WeCom Plugin

Kimi Claw instances created after March 9, 2025 have the WeCom plugin installed by default, so you can skip directly to Step 3. For Kimi Claw instances created earlier, install the plugin first:

1.  Send the following to Kimi Claw in the chat:

> "Help me run `openclaw plugins install @wecom/wecom-openclaw-plugin` to install the WeCom plugin"

2.  After it runs successfully, click “Settings” → “Restart Kimi Claw” to complete the plugin installation

## Step 3: Configure the Bot in Kimi Claw

Open Kimi Claw and tell it the bot’s Bot ID and Secret. Kimi Claw will complete the configuration for you. For command-line configuration, see the official documentation [Connect to OpenClaw over a Long Connection](https://open.work.weixin.qq.com/help2/pc/cat?doc_id=21658).

Text


![Configure the bot](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/wecom-bot-07.9e177fb923cb.png)

## Step 4: Complete Pairing

1.  Go to WeCom, open the bot, and start a conversation with it
2.  The first time, it will send you a **pairing message**. Send this message to Kimi Claw
3.  Kimi Claw will complete the pairing for you. Once done, you can chat normally with the bot in WeCom DMs or groups

![Pairing message](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/wecom-bot-08.daf41e2d5bdb.png)

![Send pairing message](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/wecom-bot-09.19ee6fbdd23d.png)

![Group chat example](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/wecom-bot-11.b2e1d60728fc.png)

## Limitations

- WeCom’s “WeChat plugin” currently does not support Smart Bots, so Smart Bot information cannot be viewed in WeChat for now
- Kimi Claw does not yet support configuring smart replies in the form of a “self-built mini program”. If this changes in a future update, the documentation will be updated accordingly

Was this article helpful?



[ › PreviousConfigure a Feishu Bot](/en/help/kimi-claw/feishu-bot)[Next › Configure Weibo Claw Assistant](/en/help/kimi-claw/weibo-bot)
