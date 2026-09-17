---
title: "Extra Usage Pack: Purchasing Additional Usage - Kimi Help Center"
source: https://www.kimi.com/en/help/membership/membership-extra-usage
lang: en
fetched: 2026-09-16
html_sha256: c3b906ced2797ecf5d30429aae6f5fca1bbe1eda2e085e27868092ccc762524f
---

[Help Center](/en/help) › [Membership](/en/help/membership) › [Extra Usage Pack: Purchasing Additional Usage](/en/help/membership/membership-extra-usage)

# Extra Usage Pack: Purchasing Additional Usage

After your subscription credits run out, you can continue sending requests with your **Extra Usage Pack (Extra Usage)** balance, without waiting for your credits to refresh. This feature is available only to subscribers, and your balance is shared across the **web, browser extension, desktop and mobile apps, and Kimi Code**—top up once and use it everywhere. For the full terms, see the [Extra Usage Pack Top-up Agreement](/user/agreement/extra-usage-rules-cn).

## Top-up entry points

- **Top up from the main site**: Go to the Kimi [Subscription page](/membership/subscription?tab=quota), scroll to the “Extra Usage Credit Pack” section at the bottom → select a top-up amount → complete payment.
- **Top up from the Kimi Code console**: When **either your weekly credit or 5-hour credit usage exceeds 80%**, a “Buy Extra Usage Pack” button will appear on the progress bar card. Click it to go to the Kimi subscription page and complete your purchase.

## Enable and manage

- After you turn on “Extra Usage Credit Pack,” the system will automatically deduct from your Extra Usage Pack balance when your subscription credits run out.
- You can turn it off at any time: your balance stays in your account and the system pauses spending from it; turn it back on to resume. The toggle can currently only be managed on the web—desktop and mobile apps do not support it yet.
- Your Extra Usage Pack balance is for your personal account only and is not shared with team or enterprise accounts.
- Click “Settings” in the section to enable a **monthly spending cap** (off by default): the amount must be higher than the minimum single top-up (RMB 25). Once your monthly spending reaches the cap, the system pauses Extra Usage Pack spending for the rest of the month. The progress bar shows your consumption for the current month in real time, and you can go to [My Credits](/membership/subscription?tab=quota) to view your balance and usage details.

## Billing and rules

- **Billing**: Charges are based on actual usage—the more content read and generated, and the more complex the task, the higher the cost. Balances are shown in RMB, and rates are subject to the prices displayed on the platform. Extra Usage Pack pricing is similar to the official API pricing of the [Kimi Open Platform](https://platform.kimi.com/). If you use a large volume, upgrading your subscription is usually more cost-effective.
- **Deduction priority**: Time-limited credits, such as subscription credits, are deducted first, and the **Extra Usage Pack is deducted last** as a fallback. Once enabled, even if your subscription credits run out, your Extra Usage Pack balance can be used seamlessly, so tasks will not be interrupted or fail with an error.
- **Spending control**: You can enable “Monthly spending cap” in Settings to set the maximum amount that can be spent from your Extra Usage Pack this month. If you do not enable it, there is no cap.
- **Validity and stacking**: The balance does not expire and can be accumulated. After your subscription expires, the balance can still be used, but you cannot top up during the expired period. You need to renew your subscription before topping up again.

Billing examples (for scale only; actual charges are subject to the platform): a simple request, such as “recommend a rock song,” costs about **RMB 0.03**; a complex multi-step task, such as “plan a one-week self-driving itinerary from Chengdu to western Sichuan,” costs about **RMB 1.6**. Top-up limits: the minimum per top-up is RMB 25; up to 10 top-ups per day, with a daily total of RMB 3,000; the balance cap is RMB 10,000.

## Check usage

- **Kimi web / App**: Settings → Subscription and invoices → [My Credits](/membership/subscription?tab=quota).
- **Kimi Code console**: After enabling the Extra Usage Pack, log in to the [console](/code/console) to view your balance and usage.
- **Kimi Code CLI**: Enter `/usage` in the command line to check directly.

## Do Kimi on the web and Kimi Code use the same Extra Usage Pack wallet?

Yes. Both share the same Extra Usage Pack credits, so one top-up works for both.

## Which is deducted first: Extra Usage Pack, bonus credits, or membership credits?

The deduction order depends on the credit type and expiry time:

- **Same expiry time**: bonus uses \> bonus credits \> subscription/free credits \> Extra Usage Pack.
- **Different expiry times**: credits expiring sooner are deducted first:
  - Subscription credits expiring first: subscription credits \> bonus uses \> bonus credits \> Extra Usage Pack
  - Bonus uses expiring first: bonus uses \> bonus credits \> subscription credits \> Extra Usage Pack
  - Bonus credits expiring first: bonus credits \> bonus uses \> subscription credits \> Extra Usage Pack
- **The Extra Usage Pack never expires**, so it has the lowest deduction priority. However, when you are rate-limited, you can spend your Extra Usage Pack balance to bypass the rate limit (you will be guided to purchase it if it is not enabled).

**Example**: Suppose you received 10 bonus Agent uses from a Spring Festival event, 1 million bonus tokens from a World Cup event, have this month’s subscription credits, and also topped up RMB 50 of Extra Usage Pack. The deduction order would be:

- Same expiry time: Spring Festival bonus uses → World Cup bonus credits → monthly subscription credits → RMB 50 Extra Usage Pack.
- Monthly subscription credits expiring first: monthly subscription credits → Spring Festival bonus uses → World Cup bonus credits → RMB 50 Extra Usage Pack.
- Spring Festival bonus uses expiring first: Spring Festival bonus uses → World Cup bonus credits → monthly subscription credits → RMB 50 Extra Usage Pack.
- World Cup bonus credits expiring first: World Cup bonus credits → Spring Festival bonus uses → monthly subscription credits → RMB 50 Extra Usage Pack.

In every case, the RMB 50 Extra Usage Pack is deducted last because it never expires.

When multiple prompts are eligible at the same time, credit-related prompts (such as credit exhaustion or an Extra Usage Pack switch) take precedence over other prompts (such as large-task usage prompts).

## Can I continue using Kimi after reaching a credit limit or being rate-limited?

Yes. After you enable the Extra Usage Pack, subscription limits no longer apply. When any credit limit is reached, usage will switch seamlessly to your Extra Usage Pack balance, with no task interruption. Only the Extra Usage Pack balance will be deducted, and your membership credit refresh will not be affected.

## Can unused balance be carried over to next month?

Yes. The balance does not expire and can be accumulated. After your subscription expires, you can still use the balance, but you cannot top up during the expired period.

## Does the Extra Usage Pack support enterprise plans?

Not currently.

## Can I get an invoice for Extra Usage Pack top-ups?

Yes. Go to “Settings → Subscription and invoices → Bills and Invoices”, find the corresponding top-up order, and click “Request Invoice”. Invoices are issued per top-up order. For the detailed process, see [How to request an invoice yourself](/en/help/membership/membership-invoice).

Was this article helpful?



[ › PreviousPlan Upgrades and Downgrades](/en/help/membership/membership-upgrade-downgrade)[Next › Cancel Auto-Renewal](/en/help/membership/membership-cancel-subscription)
