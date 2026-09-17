---
title: "Tailscale 导致 Kimi Claw 断连怎么修？ - Kimi 帮助中心"
source: https://www.kimi.com/help/kimi-claw/tailscale-issue
lang: zh
fetched: 2026-09-16
html_sha256: 6e140d32a6e01f9176c869aca73cb81727dcf75dabbd93b7745c7693b272ed4f
---

[帮助中心](/help) › [Kimi Claw](/help/kimi-claw) › [Tailscale 断开连接怎么办？](/help/kimi-claw/tailscale-issue)

# Tailscale 断开连接

如果配置了 Tailscale 之后 Kimi Claw 断开了连接，这是由于系统的 DNS 配置被 Tailscale 覆盖导致的。

## 修复步骤

1.  打开 [Tailscale DNS 配置页面](https://login.tailscale.com/admin/dns)。
2.  在 **NameServer** 的 **Global nameservers** 处，点击 **Add nameserver**。
3.  添加以下公共 DNS 服务器：
    - **Google Public DNS**（8.8.8.8 / 8.8.4.4）
    - **Cloudflare Public DNS**（1.1.1.1 / 1.0.0.1）
4.  点击打开右上角的 **Override DNS Servers** 按钮。
5.  等待约 **30 秒**，连接即可恢复。

## 预防建议

如果你正准备配置 Tailscale，建议**先执行以上 DNS 配置步骤**，再启用 Tailscale，可以避免连接中断的问题。

本文是否对你有帮助



[ › 上一篇如何卸载 Kimi 插件？](/help/kimi-claw/uninstall-plugin)[下一篇 › 升级注意事项](/help/kimi-claw/upgrade-notice)
