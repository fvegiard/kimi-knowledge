---
title: "How to Connect Kimi Claw to DingTalk? Setup Guide - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-claw/dingtalk-bot
lang: en
fetched: 2026-09-16
html_sha256: b1d0bee85fa1fe9bc26c05108ae7853c8cbe7e42baa18fef6f69bdffd85a06af
---

[Help Center](/en/help) › [Kimi Claw](/en/help/kimi-claw) › [Configure a DingTalk Bot](/en/help/kimi-claw/dingtalk-bot)

# Configure a DingTalk Bot

Kimi Claw can be deployed to DingTalk. Follow these 5 steps to complete the setup.

## Create a DingTalk Application

1.  Go to the [DingTalk Open Platform](https://open-dev.dingtalk.com/).
2.  Click to create an **Enterprise Internal Application**.
3.  Set the application name and description.
4.  After creation, obtain the **ClientID** and **ClientSecret** on the application information page and keep them for later use.

## Create a Bot

1.  On the application management page, click **Add Capability** and select **Bot**.
2.  Configure the bot’s basic information, such as its name and avatar.
3.  For message receiving mode, select **Stream mode** (long-lived connection).

## Publish the Application

1.  In permission management, add the following permissions:
    - `Card.Streaming.Write`
    - `Card.Instance.Write`
    - `qyapi_robot_sendmsg`
2.  Click **Create Version** and publish the application.
3.  Wait for administrator approval.

## Configure in Kimi Claw

Send the DingTalk application credentials to Kimi Claw:

Text


Kimi Claw will complete the configuration automatically. Restart is required for the configuration to take effect.

## Start Using

In a DingTalk group chat, **@mention the bot** to start a conversation. You can also chat with the bot directly in a one-to-one conversation.

Was this article helpful?



[ › PreviousConfigure Weibo Claw Assistant](/en/help/kimi-claw/weibo-bot)[Next › Memory Loss and Context Preservation](/en/help/kimi-claw/memory-loss)
