---
title: "Kimi Code Benefits and Billing - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-code/benefits
lang: en
fetched: 2026-09-16
html_sha256: 4a3c8e99ac87808bcfc08060b2cc878a8a350378b45947278f14eed360d2fa6a
---

[Help Center](/en/help) › [Kimi Code](/en/help/kimi-code) › [Benefits](/en/help/kimi-code/benefits)

# Kimi Code Benefits

Kimi Code is a service included with Kimi membership. It provides programming-related support and features to help members complete coding tasks more efficiently during personal development.

Kimi Code credits are based on your subscription date and **refresh automatically every 7 days**. Unused credits do not carry over. In addition to the weekly credit limit, there is also a **5-hour rolling rate-limit window**. Even if you still have enough total credits, too many requests in a short period may trigger rate limiting; access will recover automatically once the window rolls forward.

All signed-in devices and API Key share the same quota: whether requests are made from CLI, VS Code, or a third-party tool, they all consume credits from the same account. Devices inactive for more than 30 days will be automatically unlinked; run `/login` again to restore access.

Log in to the [Kimi Code Console](/code/console) at any time to check your remaining credits and rate-limit status, and to manage API Key and signed-in devices.

![Console credits overview](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-code/images/benefits/benefits-01.057a9c2b52fe.png)

> Kimi Code shares the same credits as your Kimi membership plan — requests from the CLI, VS Code, and third-party tools all count toward them. If your Kimi membership's monthly total is reached, Kimi Code credits are frozen until the monthly credits reset or you upgrade; monthly usage can be viewed on the [Subscription](/membership/subscription) page.

**A new membership system is coming soon.** Kimi membership benefits and Kimi Code benefits will be split so you can purchase each separately, as needed — more flexible. **Current subscribers are unaffected.** If you'd like to keep using the merged benefits, purchase your current plan before the new system launches.

![Console credit details](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-code/images/benefits/benefits-02.7a3b0d0b678f.png)

After you sign in to the relevant device with your Kimi account, it will share the credits included in your plan. If you are inactive for more than 30 days, we will automatically sign you out. You can log in to the [Kimi Code Console](/code/console) at any time to view signed-in devices and usage records (only 100 detail entries are shown).

## Credit refresh

Credits refresh on a **7-day** cycle:

- Starting from the subscription date D1, credits refresh once every 7 days.
- The refresh cycles are: D1–D7, D8–D14, D15–D21, D22–D28.
- Unused credits **do not** carry over to the next cycle.

Plan your weekly usage reasonably to make full use of your credits.

## Supported tools

Kimi Code benefits apply to the following tools:

| Tool              | Description                      |
|-------------------|----------------------------------|
| **Kimi Code CLI** | Kimi official CLI AI Agent       |
| **Claude Code**   | Anthropic's CLI coding assistant |
| **Roo Code**      | AI coding plugin for VS Code     |

In addition to the tools above, subscribers can also use an API Key to connect Kimi Code to more third-party developer tools (such as OpenCode). See [Use in third-party Coding Agents](/en/help/kimi-code/third-party-agents) for details. When using third-party tools, please keep the tool's genuine identity; tampering with the client identifier (User-Agent) will be treated as a violation and may result in suspension of your membership benefits.

Please note that this benefit is for personal development only, not for enterprise development scenarios. For enterprise needs, please follow [Kimi Open Platform](https://platform.kimi.com/).

## Billing

- Kimi Code usage is **included in your subscription fee** with no extra payment required.
- Each call consumes Kimi Code dedicated credits, and the amount of credits included varies by plan.
- The system uses gifted credits first, then subscription credits.

## Extra Usage

When your subscription credits run out, you can keep making requests using your **Extra Usage** balance without waiting for a refresh. Only subscribed members can enable it, and **Kimi on the web and Kimi Code share the same Extra Usage balance** (top up once, use it in both). See the full terms in the [Extra Usage Agreement](/user/agreement/extra-usage-rules-cn).

### Top-up entry points

- **From the main site**: go to the Kimi [Subscription page](/membership/subscription?tab=quota), scroll to the "Extra Usage" module at the bottom, choose an amount, and complete payment.
- **From the Kimi Code Console**: once your weekly or 5-hour usage exceeds **80%**, the progress card shows a **Buy Extra Usage** button that takes you to the subscription page to purchase.

### Enabling and managing

Turn on the "Extra Usage" toggle, and when your subscription credits run out, the system automatically deducts from your Extra Usage balance. Click **Settings** in the module to enable a **monthly spending cap** and set the maximum you can spend this month; the progress bar shows this month's Extra Usage consumption in real time.

### Billing and rules

- **Billing**: charged by actual usage — the more content read and generated, and the more complex the task, the higher the cost. The balance is shown in RMB, with rates as displayed on the platform. Extra Usage pricing is close to the official API pricing of the [Kimi Open Platform](https://platform.kimi.com/); for heavy usage, upgrading your subscription is usually more cost-effective.
- **Deduction priority**: time-limited credits such as your subscription are deducted first; **Extra Usage is deducted last** as a fallback. Once enabled, even if your subscription credits are maxed out, Extra Usage is consumed seamlessly and tasks don't stop or error out.
- **Spending cap**: enable a "monthly spending cap" in settings to limit how much Extra Usage can be spent this month; without it, there is no cap.
- **Validity and stacking**: the balance does not expire and stacks across top-ups; it remains usable after your subscription lapses, but you can't top up during the lapse — re-subscribe first to top up again.

Billing example (for a rough sense of scale; actual rates per the platform): a simple request (e.g. "recommend a rock song") costs about **¥0.03**; a complex multi-step task (e.g. "plan a week-long road trip from Chengdu to western Sichuan") costs about **¥1.6**. Top-up limits: minimum ¥25 per top-up, up to 10 times and ¥3,000 per day, with a balance cap of ¥10,000.

### Checking your usage

- **Kimi web / app**: Settings → Subscription & Invoices → [My Quota](/membership/subscription?tab=quota).
- **Kimi Code Console**: once Extra Usage is enabled, log in to the [Console](/code/console) to view your balance and usage.
- **Kimi Code CLI**: type `/usage` on the command line to check directly.

### Extra Usage FAQ

- **Do Kimi on the web and Kimi Code use the same Extra Usage wallet?** Yes — the balance is shared between both; top up once and use it in either.
- **Which is deducted first, Extra Usage or subscription credits?** Time-limited credits such as your subscription are deducted first; Extra Usage is only used as a fallback once all time-limited credits are exhausted.
- **When I hit a limit or get rate-limited, can I keep going?** Yes. Once Extra Usage is enabled you're not affected by subscription limits — it seamlessly switches to the Extra Usage balance, so tasks don't stop, and only Extra Usage is deducted without affecting your membership credit refresh.
- **Can unused balance roll over and stack?** Yes — it doesn't expire and stacks; it stays usable after the subscription lapses, but you can't top up during the lapse.
- **Is Extra Usage available for Enterprise?** Not yet supported.

Was this article helpful?



[ › PreviousCommon Use Cases](/en/help/kimi-code/cli-use-cases)[Next › Kimi Code FAQ](/en/help/kimi-code/faq)
