---
title: "Kimi Code FAQ - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-code/faq
lang: en
fetched: 2026-09-16
html_sha256: 9c3c1f9d742ef9ee73b79f6401e662ad324f72d38cdacbab3bb272f30a9e2e07
---

[Help Center](/en/help) › [Kimi Code](/en/help/kimi-code) › [Kimi Code FAQ](/en/help/kimi-code/faq)

# FAQ

## Guide to migrating from legacy Kimi-Cli to the new version

Kimi Code CLI has received a major version upgrade. Its underlying runtime has moved from Python/uv to Node.js, bringing simpler installation, faster startup, and a redesigned terminal interface. The legacy version will gradually stop being maintained, so we recommend upgrading to the new version as soon as possible.

If you are migrating from the legacy version, follow the steps below. A single command can migrate your configuration, MCP server settings, and session history to the new version.

### What’s better in the new version

- **No Python / uv dependency**: Rewritten on Node.js, with no Python environment setup required and simpler installation
- **Native binary, ready to use**: Faster startup and a lighter runtime
- **Fully redesigned terminal interface**: Smoother interactions
- **Complete data migration**: Configuration, MCP settings, and session history can all be moved over in one step for a seamless transition

### How to migrate

There are two ways to migrate.

After installing kimi-code, the **first time you run `kimi`**, it will automatically check whether kimi-cli data exists under `~/.kimi/`. If data is found, you’ll see a migration prompt and can choose to migrate now, remind me later, or don’t show again.

You can also **run the migration manually at any time**:

Bash


You can choose whether to migrate chat sessions as well. If you do not need your history for now, choose **Config only**; otherwise, choose **Config + N sessions** to migrate them together. A results summary will be shown when the migration finishes.

### What happens during migration

**What will be migrated**: configuration (`config.toml`), MCP service configuration, input history, and the chat sessions you choose to migrate.

**What will not be migrated**: OAuth login credentials and MCP service authorizations will not be copied. After migration, you need to run `/login` again in kimi-code and reauthorize MCP services. kimi-cli plugins are also outside the migration scope.

Migration **will not modify or delete** any legacy data under `~/.kimi/`. kimi-cli can still be used as usual, and the two versions do not affect each other. Migration can also be run repeatedly; sessions that have already been migrated will not be imported again.

After migration, sessions imported from kimi-cli will be marked with `[imported]`, making them easy to distinguish from newly created sessions.

## Installation and authentication

### Empty model list during `/login`

If you see the error "No models available for the selected platform" when running the `/login` command, it may be due to one of the following reasons:

- **Invalid or expired API key**: Check whether the API key you entered is correct and still valid.
- **Network connection issue**: Confirm that you can access the API service address normally, such as `api.kimi.com` or `api.moonshot.cn`.

**Check the platform carefully**

Kimi Code membership benefits and the [Kimi Open Platform](https://platform.kimi.com/) use different Base URLs. When configuring, make sure the Base URL matches the API Key.

| Platform               | Base URL                                             | Billing                                          | Key creation entry                                             |
|------------------------|------------------------------------------------------|--------------------------------------------------|----------------------------------------------------------------|
| **Kimi Code**          | Anthropic-compatible: `https://api.kimi.com/coding/` | Kimi membership subscription (including credits) | [Kimi Code Console](/code/console)                             |
| **Kimi Open Platform** | `https://api.moonshot.cn/v1`                         | Pay-as-you-go                                    | [Kimi Open Platform official site](https://platform.kimi.com/) |

### Invalid API key

An API key may be invalid for the following reasons:

- **Incorrect key entered**: Check for extra spaces or missing characters.
- **Key expired or revoked**: Confirm the key status in the platform console.

### Membership expired or quota used up

If you use the Kimi Code platform, you can run the `/usage` command to view your current quota and membership status. If your quota has been used up or your membership has expired, renew or upgrade at [Kimi Code](/code/en).

## Subscription

### How to request an invoice or upgrade membership

Go to the [Kimi membership benefits page](/membership/pricing#pricing-faq) and follow the on-page instructions to request an invoice or upgrade your membership.

## Interaction issues

### Failed to paste an image

When pasting an image with `Ctrl-V`, if you see "Current model does not support image input", it means the current model does not support image input.

How to fix it:

- **Switch to a model that supports images**: Use a model with the `image_in` capability.
- **Check the clipboard content**: Make sure the clipboard actually contains image data, not the path to an image file.

## Updates and upgrades

### Slow first launch on macOS

macOS Gatekeeper checks new programs the first time they are run, which may slow down startup. To resolve this:

- **Wait for the check to finish**: Please wait patiently during the first launch. Subsequent launches will return to normal.
- **Add it to Developer Tools**: Add your terminal app under “System Settings → Privacy & Security → Developer Tools”.

### How to upgrade Kimi Code CLI

Run `kimi upgrade` in the CLI. It will automatically check for the latest version and guide you through the upgrade. You can also use a package manager directly:

Bash


## VS Code extension FAQ

Below are common questions about the Kimi Code VS Code extension (VS Code Extension).

### VS Code says no workspace is open

Open a folder in VS Code. The Kimi Code VS Code extension requires a workspace to work properly.

### VS Code says the CLI cannot be found

Install Kimi Code CLI manually and configure `kimi.executablePath` in VS Code settings, or make sure the built-in CLI exists.

### VS Code login failed

Try skipping login and using API key mode, check your network connection, or try again later from the VS Code extension action menu.

### No response after sending a message in VS Code

Confirm that Kimi Code CLI is available, the model is configured, and a workspace folder is open in VS Code. Use "Kimi Code: Show Logs" to view error logs.

### VS Code connection timeout

If there is no response within 30 seconds, the connection will time out. Check your network and try again.

### VS Code reports an error before sending a message

Some errors may prevent messages from being sent in VS Code, such as Kimi Code CLI not found, an outdated version, not logged in, or a busy session. The error will be shown as a toast, and your input will be kept so you can retry.

## Feedback and contact

### The documentation did not solve my issue

If the information above does not solve your issue, contact us by email at [\[email protected\]](/cdn-cgi/l/email-protection#2a49454e4f6a474545445942455e044b43). In your email, describe the issue you encountered, the steps you took, and any relevant logs. We’ll get back to you as soon as possible.

Was this article helpful?



[ › PreviousBenefits](/en/help/kimi-code/benefits)[Next › Contact & Feedback](/en/help/kimi-code/contact-and-feedback)
