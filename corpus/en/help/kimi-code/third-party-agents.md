---
title: "Use Kimi in third-party Coding Agents - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-code/third-party-agents
lang: en
fetched: 2026-09-16
html_sha256: 5555691c58187b9f7588cf958abb45a7d55070890c3a4352c97460a239c780e8
---

[Help Center](/en/help) › [Kimi Code](/en/help/kimi-code) › [Use in third-party Coding Agents](/en/help/kimi-code/third-party-agents)

# Use in third-party Coding Agents

Kimi Code benefits support use in mainstream Coding Agents, such as Claude Code, Roo Code, and OpenCode. You can also use them with general Agent frameworks such as OpenClaw and Hermes, so you can freely call Kimi’s AI capabilities from the tools you already use.

This guide shows how to configure Claude Code and Roo Code.

## Prerequisites

- You have subscribed to Kimi membership and activated Kimi Code benefits.
- You have obtained an API Key, created in the [Kimi Code console](/code/console).

## Use in Claude Code

[Claude Code](https://code.claude.com/docs) is a command-line coding assistant from Anthropic. For installation instructions, see the [official Claude Code documentation](https://code.claude.com/docs/en/getting-started).

After installation, skip Anthropic’s default login flow. Run the following command in your terminal:

Bash


### Configure the Kimi Code model

Set the environment variables, then start Claude Code:

**macOS / Linux**

Bash


**Windows**

Powershell


After startup, enter `/status` to confirm that the model is active. You can use keyboard shortcuts to enable Thinking mode: on macOS, use `Option+T`; on Windows and Linux, use `Alt+T`.

### Switching to HighSpeed

HighSpeed delivers roughly 5–6× the output speed of Standard at about **3× the credit usage**, and requires an [Allegretto](/membership/pricing) plan or above. There are two ways to enable it in Claude Code:

- **Option 1: the `/fast on` command** — after starting Claude Code, type `/fast on`; the `⚡ Fast mode ON` output confirms it's enabled.
- **Option 2: the `/config` command** — type `/config` to open the config panel, then enable **Fast mode** (and **Thinking mode**) under the **Config** tab.

## Use in Roo Code

[Roo Code](https://github.com/RooCodeInc/Roo-Code) is an AI coding extension for VS Code.

### Install Roo Code

1.  Search for **Roo Code** in the VS Code Extensions Marketplace and install it.
2.  After installation, the Roo Code icon appears in the Activity Bar. If it does not appear, restart VS Code.

### Configure the Kimi Code model

1.  Open the Roo Code panel and go to the **Settings page**.

2.  In the **Providers** section, select **OpenAI Compatible** and fill in the following as prompted:

    | Configuration item | Value                                                                  |
    |--------------------|------------------------------------------------------------------------|
    | Entrypoint         | `https://api.kimi.com/coding/v1`                                       |
    | API Key            | Your API Key                                                           |
    | Model              | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3.  Save the configuration to start using it.

## Notes

- When using third-party tools, please keep the tool's genuine identity; tampering with the client identifier (User-Agent) will be treated as a violation and may result in suspension of your membership benefits.
- If you have questions, see the [Benefits overview](/en/help/kimi-code/benefits) or contact Kimi Support.

## Detailed tutorial

- [Use in third-party Coding Agents (Claude Code, Roo Code)](https://www.kimi.com/code/docs/kimi-code/models.html#%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B7%A5%E5%85%B7)

Was this article helpful?



[ › PreviousVS Code Core Operations](/en/help/kimi-code/vscode-core-operations)[Next › Kimi Code Documentation Index](/en/help/kimi-code/code-docs-index)
