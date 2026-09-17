---
title: "如何将 Kimi Claw 接入钉钉？配置教程 - Kimi 帮助中心"
source: https://www.kimi.com/help/kimi-claw/dingtalk-bot
lang: zh
fetched: 2026-09-16
html_sha256: 29841aa209fd837945783faa8f1bcb06f28ab2938e1e993c13a65756fa4a198b
---

[帮助中心](/help) › [Kimi Claw](/help/kimi-claw) › [配置钉钉机器人](/help/kimi-claw/dingtalk-bot)

# 配置钉钉机器人

Kimi Claw 支持部署到钉钉。按照以下 5 个步骤完成配置。

## 创建钉钉应用

1.  前往 [钉钉开放平台](https://open-dev.dingtalk.com/)。
2.  点击创建 **企业内部应用**。
3.  设置应用名称和描述。
4.  创建完成后，在应用信息页获取 **ClientID** 和 **ClientSecret**，记录下来。

## 创建机器人

1.  在应用管理页面，点击 **添加能力**，选择 **机器人**。
2.  配置机器人的基本信息（名称、头像等）。
3.  消息接收模式选择 **Stream 模式**（长连接方式）。

## 发布应用

1.  在权限管理中添加以下权限：
    - `Card.Streaming.Write`
    - `Card.Instance.Write`
    - `qyapi_robot_sendmsg`
2.  点击 **创建版本** 并发布应用。
3.  等待管理员审批通过。

## 在 Kimi Claw 中配置

将钉钉应用的凭证发送给 Kimi Claw：

Text


Kimi Claw 会自动完成配置，配置完成后需要重启生效。

## 开始使用

在钉钉群聊中 **@机器人** 即可开始对话。也可以在单聊中直接与机器人交流。

本文是否对你有帮助



[ › 上一篇配置微博龙虾助手](/help/kimi-claw/weibo-bot)[下一篇 › 记忆丢失与上下文保存](/help/kimi-claw/memory-loss)
