---
title: "How to Connect Kimi Claw to Feishu: Setup Guide - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-claw/feishu-bot
lang: en
fetched: 2026-09-16
html_sha256: 4023c5ca02169394b46ded8f3690523724c6c6f691098d047da98ae1f07d2cc0
---

[Help Center](/en/help) › [Kimi Claw](/en/help/kimi-claw) › [Configure a Feishu Bot](/en/help/kimi-claw/feishu-bot)

# Configure a Feishu Bot

## Quick setup

1.  Click [https://www.kimi.com/bot](/bot)
2.  Open **Settings** in Kimi Claw.
3.  Go to **Chat channels**.
4.  Follow the on-page instructions to scan the Feishu QR code and complete the connection.

![Feishu setup flow](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/feishu-bot-01.761667f2ac8c.gif)

## Manually configure a Feishu bot

Kimi Claw has a built-in Skill that can help you configure a Feishu bot. You can simply tell it, “I want to configure a Feishu bot,” and it will give you a step-by-step plan. You can also follow the steps below to configure it manually.

## Detailed steps

1.  Go to the [Feishu Developer Platform](https://open.feishu.cn/), click **Create enterprise self-built app**, and set the App name and description.
2.  In the app, click **Add bot** to create the bot service.
3.  Go to **Permission settings** and add the required permissions via **Batch import/export permissions**.
4.  Go to **Credentials & Basic Info**, copy the **App ID** and **App Secret**, send them to Kimi Claw, and specify that they are the application credentials for the Feishu bot.
5.  After Kimi Claw finishes the configuration, restart it for the settings to take effect. You can let Kimi Claw restart itself, or manually click **Restart Kimi Claw** in Settings.
6.  After the restart, switch to **Events & Callbacks** in the Feishu Developer Platform, select **Long connection** to receive events, click Save, and then add the event `im.message.receive_v1`.
7.  Switch to **Version Management & Release** and publish the app. In Feishu, search for the bot name to start chatting.

## Diagnostic commands

If you run into issues when configuring the Feishu bot, use the following commands for diagnosis:

| Command          | Description                                              |
|------------------|----------------------------------------------------------|
| `/feishu start`  | Check whether the Feishu plugin is installed and running |
| `/feishu doctor` | Check whether the Feishu bot configuration is correct    |
| `/feishu auth`   | Grant Feishu bot permissions in batches                  |

## Fix commands

For further troubleshooting and fixes, run the following commands in your terminal:

| Command      | Description                                   |
|--------------|-----------------------------------------------|
| `npx doctor` | Diagnose the Feishu plugin runtime status     |
| `npx fix`    | Automatically fix common configuration issues |
| `npx info`   | View detailed Feishu plugin information       |

## Related docs

- [What should I do if the Feishu bot does not respond?](/en/help/kimi-claw/feishu-no-response)
- [Upgrade notes, including detailed Feishu plugin diagnostic commands](/en/help/kimi-claw/upgrade-notice)

Was this article helpful?



[ › PreviousConfigure WeChat in One Click](/en/help/kimi-claw/wechat-bot)[Next › Configure a WeCom Bot](/en/help/kimi-claw/wecom-bot)
