---
title: "How to Create a Personal Plugin - Kimi Help Center"
source: https://www.kimi.com/en/help/plugins-and-skills/create
lang: en
fetched: 2026-09-16
html_sha256: 99b6f6ac570431ef52e9512d68dadeb66ca4060e9fdd5dfb5886a28be86b2830
---

[Help Center](/en/help) › [Plugins & Skills](/en/help/plugins-and-skills) › [How to Create a Personal Plugin](/en/help/plugins-and-skills/create)

# How to Create a Personal Plugin

In Kimi Work, you can use the built-in **Plugin Builder** skill to turn a one-sentence idea, an external plugin repository, or any webpage into a plugin of your own. Whichever method you choose, the plugin reaches you through the same path: **create / convert → register in your personal plugin marketplace (the "Personal" tab) → click + to install → use it in a conversation**. Once installed, it is available in the current conversation right away — no restart needed.

Before you start, make sure you have the latest [Kimi Work](https://www.kimi.ai/products/kimi-work) desktop app installed. Plugin Builder is a built-in skill and needs no extra installation: type "/" in a conversation to invoke it, or click "Custom plugin" in the plugin marketplace to start creating in the main conversation.

## Create a New Plugin with One Sentence

Ideal for the "I have an idea but no existing code" case. You only need to describe the capability you want; Plugin Builder automatically takes care of scaffolding, field filling, local validation, and registration — you never write a single file by hand.

1.  **Describe what you need.** Invoke Plugin Builder in a conversation and explain in one sentence what the plugin should do — for example, "make me a plugin that looks up company registration info." Fields that can be inferred, such as the name, description, and category, are filled in automatically; only the information that can't be inferred, like an MCP server URL or an icon, will be confirmed with you.
2.  **Wait for the build to finish.** Plugin Builder generates the plugin files locally, automatically passes structure and specification validation, and then registers the plugin in your personal plugin marketplace.
3.  **Install and use.** Open **Plugins → Personal**, find the plugin you just created, and click + to install. Once installed, it is immediately available in the current conversation, and you can invoke it anytime with "/".

**One-paragraph prompt:**

Text


## Import Plugins from a Marketplace or Repository

Drop a plugin repository link to Plugin Builder, and it will automatically recognize it, convert the format, and install it to your "Personal" tab. Imported plugins don't interfere with the official marketplace and can be uninstalled at any time.

1.  **Supported plugin formats:** Plugin Builder recognizes plugin manifests from the following sources and converts them all into Kimi's native `kimi.plugin.json` format:

| Format                                      | Notes                                                                                                                                                                          |
|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `kimi.plugin.json`                          | Kimi's native format: required fields are corrected                                                                                                                            |
| Plugin manifests from other agent platforms | Such as `plugin.json` files in directories like `.codex-plugin/plugin.json` or `.claude-plugin/plugin.json`, as well as the marketplace index files shipped by those platforms |
| `server.json`                               | The MCP official registry format: converted into a plugin containing only an MCP service                                                                                       |
| Generic `plugin.json`                       | A generic manifest located in the plugin root directory                                                                                                                        |

2.  **How to import:** send the repository link to Plugin Builder. It automatically recognizes the following repository shapes:

- **Single-plugin repository**: the whole repository is converted into one plugin;
- **Multi-plugin repository (monorepo)**: each subdirectory is converted into its own plugin;
- **Plugin marketplace / index repository** (a repository with a plugins.json or marketplace.json index): every entry in the index is expanded and converted in bulk;
- **Skills-only repository**: a repository with no plugin manifest, only skill files, is packaged as a skill-type plugin.

3.  **Install from the Personal tab:** when processing is done, Plugin Builder tells you which plugins are usable. Go to **Plugins → Personal** and click "Install" on the corresponding card to start using it in conversations.

**One-paragraph prompts:**

Import a single repository:

Text


Batch-import a plugin marketplace:

Text


Convert only a specific subdirectory:

Text


**Managing imported plugins:**

- **Update a plugin**: if the source repository gets updates, or you want to change the name or description, just tell Plugin Builder — it will re-convert or modify it and register it again.
- **Uninstall / remove**: uninstall from the "Personal" tab to disable a plugin; the entry stays in the tab after uninstalling — delete the entry if you want it removed completely.
- **Source directory**: the converted output is kept in the plugins/ directory of your local workspace. It is the plugin's "source files", and Plugin Builder bases future updates on it — please don't delete it manually.

## Turn a Webpage into a Plugin

Ideal for the "a site I use often has no public API, but I want Kimi to fetch data and operate it for me" case. Send the URL to Plugin Builder and describe what you need — for example, "turn the XX website into a plugin; I want to search XX." There are two browser options for analyzing the site and running the plugin:

| Method                         | Best for                                                                                | What you need                                                                   |
|--------------------------------|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| **Built-in browser (default)** | Most websites; uses Kimi Work's built-in browser to analyze the site and run the plugin | Nothing to install; when login is required, log in once in the built-in browser |
| **WebBridge (wb)**             | Reusing accounts you are already logged into in Chrome                                  | Install WebBridge first and use it to drive your Chrome                         |

1.  **Analyze the site.** Plugin Builder opens the URL in your chosen browser. If the page requires login, it will ask you to log in once in the browser — it never asks for your password, cookies, or any credentials.
2.  **Reverse-engineer the APIs and generate the plugin.** It actually operates the core features on the page, captures the network requests, works out the site's internal data APIs, and then generates a skill-type plugin with built-in query scripts.
3.  **Validate, register, install.** Same as the previous methods: once the plugin passes validation, it is registered in the "Personal" tab; click + to install and start using it.

From then on, just say "look up XX for me", and Kimi uses the plugin to fetch the data directly in the browser and organize the results. If the site's APIs change and the plugin stops working, ask Plugin Builder to re-analyze the site and update the plugin.

**One-paragraph prompt:**

Text


The built-in browser method relies on Kimi Work's built-in browser capability — if you are prompted to upgrade, update the desktop app to the latest version. The WebBridge method requires WebBridge to be installed on your computer and in Chrome first.

Was this article helpful?



[ › PreviousWhat Are Kimi Plugins?](/en/help/plugins-and-skills/overview)[Next › How to Publish a Plugin to the Official Marketplace](/en/help/plugins-and-skills/publish)
