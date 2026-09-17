---
title: "Kimi Work FAQ - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-work/kimi-work-faq
lang: en
fetched: 2026-09-16
html_sha256: a6af75b897f216ec4dbf693324c474fc78b642f04aea97d66d7f6ee0e967241b
---

[Help Center](/en/help) › [Kimi Work](/en/help/kimi-work) › [FAQ](/en/help/kimi-work/kimi-work-faq)

# Kimi Work FAQ

## What's the difference between Kimi Work and the web version?

While the Kimi web app is perfect for quick chat and queries, Kimi Work is a local Agent designed for deep workflows. It reads and handles your local folders, navigates the web autonomously via WebBridge, runs Python code in the background, and executes scheduled tasks. It's a system-level digital employee.

## How does Kimi Work protect my privacy when accessing local files?

You have absolute control over your files. Kimi Work provides three levels of permission control, and you choose how to authorize:

- **Default**: routine operations run automatically — Kimi prompts you for explicit authorization before sensitive operations such as modifying, overwriting, or running code on your local files;
- **Manual approval**: ask for authorization before acting;
- **Fully automatic**: run directly without asking for authorization.

When you choose "Manual approval", nothing happens without your consent.

With the "Fully automatic" permission enabled, the AI will directly read and write files, execute code, and modify system configurations, and will automatically handle steps that would otherwise require your decision. This may result in:

- Files being overwritten, deleted by mistake, or corrupted;
- System configurations being changed, causing software malfunctions;
- Disk encryption, partition, or firmware changes, resulting in a restricted or unbootable device.

Some operations are irreversible, and data may be permanently lost and unrecoverable. Please be aware of the risks of this mode, use it with caution, and back up your data.

Enabling the "Fully automatic" permission is deemed as your acknowledgment and acceptance of the above risks, and your authorization for the AI to perform related operations autonomously. You shall bear the results of operations performed based on your authorization.

## What exactly can WebBridge (browser automation) do for me?

WebBridge gives Kimi the ability to use a browser like a human. You can tell it to check the latest news on a website and summarize it, or scrape historical stock data to your local Excel. It clicks, scrolls, and extracts data autonomously, saving you hours of manual work.

## What can I do with scheduled tasks? Do they run if my computer is asleep?

Scheduled tasks let Kimi automatically run a fixed task at a set time — on a daily, weekly, monthly, or one-time (never repeat) schedule — ideal for daily briefings, weekly monitoring, and periodic clean-ups.

On Kimi Work desktop, scheduled tasks run **locally** and only execute while the **app is open**. Triggers missed while your computer is asleep or shut down, or while the app is closed, are **not run retroactively** the next time it opens. So if you need a task to run overnight, keep your computer and the Kimi Work app running. (By contrast, tasks created in Kimi run in the cloud and don't require the client to stay open.)

See [Scheduled Tasks](/en/help/features/scheduled-tasks) for details.

Was this article helpful?



[ › PreviousUse Cases](/en/help/kimi-work/use-cases)[Next › Release Notes](/en/help/kimi-work/release-notes)
