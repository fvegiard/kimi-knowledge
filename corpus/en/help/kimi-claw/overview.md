---
title: "What Is Kimi Claw? Product Introduction to the AI Agent Assistant - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-claw/overview
lang: en
fetched: 2026-09-16
html_sha256: 14e39d64d319252570dbf6e56c872428cfda966811188ba30e5969bf8453b24a
---

[Help Center](/en/help) › [Kimi Claw](/en/help/kimi-claw) › [Kimi Claw Product Introduction](/en/help/kimi-claw/overview)

# Deploy OpenClaw in the cloud

OpenClaw is an AI assistant with a distinct personality and long-term memory. In Kimi, you can start a conversation with OpenClaw through Kimi Claw.

## One-click OpenClaw deployment

![One-click OpenClaw deployment](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/overview-01.24ae056fac0c.png)

If you don’t have your own OpenClaw yet, go to [kimi.com/bot](/bot) to create a dedicated OpenClaw. Kimi will deploy OpenClaw to the cloud for you in one click—no need to buy a server or configure anything from the command line.

- One-click deployment is available only on **Allegretto and higher** plans. For details, see [Kimi membership plans](/membership/pricing).
- Kimi automatically configures the **Kimi K2.6 model** and links it to your **Kimi membership benefit credits**, with no separate API setup required. It also automatically configures the Kimi Web Search service, giving your AI web search capabilities.
- Kimi Claw can be deployed directly to Feishu, WeCom, Weibo, and other platforms.

## Creation flow

![Creation completed](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/overview-02.5c6277fe5ea4.png)

1.  Log in to [kimi.com/bot](/bot).
2.  Click **Create** Kimi Claw.
3.  Wait for the system to complete the configuration automatically. This usually takes a few minutes.

![Chat channel configuration](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/overview-03.3089c7293a52.gif)

4.  Change your Kimi Claw nickname and set a personalized name.
5.  Under **Settings → Chat channels**, configure the chat platforms you need, such as WeChat, Feishu, and WeCom.

## Link an existing OpenClaw

If you have already deployed your own OpenClaw, you can also chat with OpenClaw in Kimi by installing the Kimi plugin:

1.  Go to the [Kimi Claw page](/bot) and select **Link existing OpenClaw**.
2.  Follow the instructions to install the plugin on the device running OpenClaw.
3.  Once installation is complete, you can talk to your OpenClaw in Kimi.

![Chat channel configuration](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimi-claw/overview-05.62768daa79a2.png)

## Switch to the Kimi K3 model

Kimi Claw uses the Kimi K2.6 model by default. If you want to use Kimi K3, run the following commands to automatically update your local OpenClaw configuration.

Bash


After running the commands, verify that `session_status` shows `model` as `kimi-coding/k3` and the `context` limit as `1.0m`.

The configuration file path may vary depending on how OpenClaw was installed. Replace `/root/.openclaw/openclaw.json` with the actual path on your system. Be sure to back up the file before making changes.

Was this article helpful?



[ › PreviousFAQ](/en/help/kimi-business/kimi-business-faq)[Next › Kimi Claw Group Chat](/en/help/kimi-claw/kimiclaw-group-chat)
