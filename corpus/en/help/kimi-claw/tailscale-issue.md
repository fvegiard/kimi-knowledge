---
title: "How to fix Kimi Claw disconnections caused by Tailscale? - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-claw/tailscale-issue
lang: en
fetched: 2026-09-16
html_sha256: d8e364806c912af5f2427395ce492bde05fc0e3048f5858275dc87aa6a4ade00
---

[Help Center](/en/help) › [Kimi Claw](/en/help/kimi-claw) › [What should I do if Tailscale disconnects?](/en/help/kimi-claw/tailscale-issue)

# Tailscale Disconnection

If Kimi Claw disconnects after you configure Tailscale, it is because Tailscale has overridden the system DNS configuration.

## How to fix it

1.  Open the [Tailscale DNS configuration page](https://login.tailscale.com/admin/dns).
2.  Under **NameServer** \> **Global nameservers**, click **Add nameserver**.
3.  Add the following public DNS servers:
    - **Google Public DNS** (8.8.8.8 / 8.8.4.4)
    - **Cloudflare Public DNS** (1.1.1.1 / 1.0.0.1)
4.  Turn on **Override DNS Servers** in the upper-right corner.
5.  Wait about **30 seconds**, and the connection should be restored.

## Prevention tip

If you are about to configure Tailscale, we recommend completing the DNS configuration steps above **before** enabling Tailscale to avoid connection interruptions.

Was this article helpful?



[ › PreviousHow do I uninstall the Kimi plugin?](/en/help/kimi-claw/uninstall-plugin)[Next › Upgrade Precautions](/en/help/kimi-claw/upgrade-notice)
