---
title: "What Are Kimi Plugins? How to Install and Use Them - Kimi Help Center"
source: https://www.kimi.com/en/help/plugins-and-skills/overview
lang: en
fetched: 2026-09-16
html_sha256: 835ccafbc7e2ae356f08105f8bbe46719d39369c604926f28557dfe3027700e5
---

[Help Center](/en/help) › [Plugins & Skills](/en/help/plugins-and-skills) › [What Are Kimi Plugins?](/en/help/plugins-and-skills/overview)

# What Are Kimi Plugins?

Plugins connect external tools to Kimi so it can use apps and services to complete tasks. Once you install a plugin, Kimi can directly call the corresponding third-party capability while completing a task — for example, querying financial data, operating office software, or using design tools. You can explicitly ask to use a specific plugin, and Kimi will also call one automatically when appropriate.

## What is a Kimi plugin?

Kimi Plugin follows the [Kimi Code plugin definition](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html#plugin-manifest) and can include one or more of the following components:

| Component     | Purpose                                                                   |
|---------------|---------------------------------------------------------------------------|
| Skills        | Provide the knowledge, steps, and usage guidance needed to complete tasks |
| MCP           | Connect external software, services, databases, or APIs                   |
| Agents        | Delegate complex tasks to specialized sub-agents                          |
| Hooks         | Automatically run predefined actions when specific events occur           |
| Commands      | Provide clear, reusable command-based entry points                        |
| System Prompt | Add system instructions to the main Agent while the plugin is enabled     |

The Kimi web experience currently supports MCP and Skills in plugins. Kimi Work and Kimi Code follow the full plugin definition above and support more complete combinations of plugin components.

**Examples:**

- **Notion Plugin** = Notion MCP + usage guidance Skill
- **Financial research Plugin** = multiple financial MCPs + multiple analysis Skills + a custom Agent

## Where you can use plugins

You can use plugins when you switch the model to **K3** or **K3 Swarm**, and in the **Deep Research, Websites, and PPT** scenarios.

You can also use plugins in the **Kimi Work desktop app**; for the built-in plugin list on desktop, see the [Kimi Work Plugin Center](/en/help/kimi-work/plugin-center).

Plugins are not yet supported in Kimi Claw or Kimi Plus conversations.

## Installing plugins

- **Entry points**: use the **+** in the input box or type "/"; on mobile, use the **+** in the input box or "/".
- Search or browse in the plugin marketplace, open a plugin's details, and click install.
- Some plugins require **OAuth authorization** (you are taken to the third-party sign-in; once authorized, you can use it); some plugins are **pre-installed** and need no manual installation.
- **Enterprise-only plugins**: non-enterprise users can see them, but the "Install" button is greyed out.
- You can't install or use plugins while signed out.

## Using plugins

- After installing, type "/" in the input box or click **+** → Plugins, then select the plugin to invoke it; you can **invoke multiple plugins at once**.
- You can also just describe what you need (for example, "look up this company on Tianyancha"), and Kimi will pick the right plugin automatically.
- When Kimi calls a plugin's tools, it shows "Using the xx plugin" in its reply.

## Plugin categories and list

The plugin marketplace is organized into the categories below. The plugins you actually see vary by **region (domestic / overseas)** and **surface**, and some plugins appear in more than one category.

- **Finance**: Financial Investment Analysis, Investment Banking & Private Equity, Corporate Finance & Accounting, Wind Financial Data, S&P Global Market Intelligence, Hundsun Gildata, Tonghuashun iFinD, SEC, Global Financial Database, World Bank Open Data, IMF (International Monetary Fund) Database, Stripe, Tianyancha
- **Productivity**: Notion, Baidu Netdisk
- **Development**: GitHub, Supabase, Neon, Cloudflare
- **Creative**: Inspiration Pool, Image Generation, Video Generation, Audio Generation, Canva
- **General**: Vivify

## Data and permissions

- When you select or explicitly ask to use a plugin, Kimi prioritizes the tools that plugin provides and generates its answer based on the results those tools return; after connecting a plugin, Kimi accesses relevant content within the scope you authorize.
- If a plugin is provided by a third party, its data-processing rules are set independently by that company, and the data is subject to its terms of service and privacy policy — we recommend reviewing them before authorizing.
- You can **uninstall a plugin or revoke authorization at any time**. After uninstalling, the related OAuth authorization is revoked; to use the plugin again, you'll need to reinstall and re-authorize.

## FAQ

### Do plugins consume my membership credits?

Some do. When Kimi calls a plugin's tools or services to complete a task, credits are consumed based on actual usage; plugins with no call cost don't incur extra charges.

### Can I use multiple plugins at once?

Yes. You can invoke multiple plugins at once via "/" or **+**.

### Why can't I see a certain plugin?

The available plugins vary by region (domestic / overseas) and surface; in addition, some plugins are available only to personal or enterprise users.

### Can I use plugins from ChatGPT, Claude, or other platforms?

Yes. See [How to Create a Personal Plugin](/en/help/plugins-and-skills/create): provide the existing plugin files or project link from another platform to Plugin Builder, and follow the instructions to convert it into a Kimi plugin.

Was this article helpful?



[ › PreviousRelease Notes](/en/help/kimi-work/release-notes)[Next › How to Create a Personal Plugin](/en/help/plugins-and-skills/create)
