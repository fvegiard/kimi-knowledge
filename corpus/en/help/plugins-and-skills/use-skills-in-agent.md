---
title: "Use Skills in Agent Mode - Kimi Help Center"
source: https://www.kimi.com/en/help/plugins-and-skills/use-skills-in-agent
lang: en
fetched: 2026-09-16
html_sha256: e16422b511a1a859de28a7d6cf17940712a23ccfe6f351181de37339507a539b
---

[Help Center](/en/help) › [Plugins & Skills](/en/help/plugins-and-skills) › [Use Skills in Agent Mode](/en/help/plugins-and-skills/use-skills-in-agent)

# Use Skills in Agent Mode

## How to Invoke Skills

In the input box of Kimi Agent mode, you can invoke Skills in three ways:

**Method 1: Enter the `/` command**

Type `/` in the input box to open the Skills list, then click the Skill you want to insert it automatically. You can also keep typing keywords after `/` to filter Skills.

![Invoke a Skill with the slash command](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/plugins-and-skills/images/skills/%E6%96%9C%E6%9D%A0%E5%91%BD%E4%BB%A4-zh.794158e6e17e.gif)

**Method 2: ➕ menu**

Click the **➕** button next to the input box and select a Skill from the menu. The Skill name will be inserted into the input box as text.

![Invoke a Skill from the plus menu](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/plugins-and-skills/images/skills/%E5%8A%A0%E5%8F%B7-zh.63b3cc59c3d8.png)

**Method 3: Let Kimi Agent decide automatically**

Simply describe what you need—no manual Skill selection required. Kimi will identify your task and invoke the most suitable Skill automatically.

### Example: Quickly Generate an SEO Analysis Report with a Skill

Suppose you work in content operations and want to analyze your website’s SEO performance:

1.  Type `/` in the input box, then find and select the `seo-analyzer` Skill.
2.  Continue by entering: `Please analyze https://help.com/zh-cn/help's SEO performance, list the main issues and optimization suggestions.`

![SEO analysis](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/plugins-and-skills/images/skills/SEO.a586ec6255c3.png)

3.  After you send it, Kimi will follow the workflow of the **SEO Analysis** Skill to search, organize, and produce a structured report automatically.

You do not need to tell Kimi how to perform the analysis—the steps are already defined in the Skill.

## Discover and Manage Skills

### Kimi Recommended Skills

Kimi provides a set of ready-to-use recommended Skills. Click any of them to add it:

![Recommended Skills](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/plugins-and-skills/images/skills/%E6%8E%A8%E8%8D%90%E6%8A%80%E8%83%BD.5f1c49ccf8ef.png)

## Custom Skills

If Kimi’s recommended Skills do not meet your needs, you can create Skills tailored to your own workflows.

**When should you create a custom Skill?**

- You have a fixed task you need to repeat regularly, such as a weekly competitor report
- You want Kimi to output content in your company’s specific format
- You have a work method you have refined yourself and want Kimi to follow directly

A good Skill does one thing, and does it well. Do not try to pack every requirement into a single Skill.

### Method 1: Convert Office Documents into a Skill

If you already have work templates, specification documents, or example files, you can upload them directly and let Kimi learn from them to generate the corresponding Skill.

1.  In the **Skills** panel, select **Convert Office Documents into a Skill**.
2.  Click or drag files into the upload area. Supported formats: `docx`, `xlsx`, `pdf`, `pptx`, and document screenshots. You can upload up to 3 files at a time, each no larger than 100 MB.

![Upload documents to generate a Skill](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/plugins-and-skills/images/skills/%E4%BA%A7%E7%89%A92skill.5df9fe9e1703.png)

3.  Fill in the Skill description and tell Kimi what this Skill should do, for example: "Organize weekly sales data for me in the style and format of this template."
4.  Click **Create Skill**.

### Method 2: Create a Skill Through Conversation

If you do not have existing documents, you can describe what you need in a conversation, and Kimi will guide you step by step to create the Skill.

Enter `/skill-creator` in the input box, then describe what you want the Skill to do. Kimi will help turn your requirements into a complete Skill.

![Create a Skill through conversation](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/plugins-and-skills/images/skills/%E5%AF%B9%E8%AF%9D%E6%8A%80%E8%83%BD.f2aff62481bb.png)

### Manage Skills

In the **Skills** panel, switch to the **Custom Skills** tab to edit created Skills, update documents, or delete them.

![Manage custom Skills](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/plugins-and-skills/images/skills/%E7%AE%A1%E7%90%86%E6%8A%80%E8%83%BD.7c4d75598344.png)

Skills can be used in Agent mode and Kimi Claw. Skills with the `swarm` suffix are available only in Swarm (Agent cluster) scenarios and will not appear in other scenarios.

## How to Write Skill Descriptions

Kimi uses the Skill description to decide "when this Skill should be used". The clearer the description, the more accurately the Skill will be triggered.

A complete Skill description should include:

- The Skill’s core function
- The scenarios where it should be used
- Possible trigger words


Help users search for and discover Skills.


Help users search for and discover Skills. Use this when the user clearly wants to find a certain type of Skill, or describes a problem and wants Skill recommendations. Trigger words include “find Skills”, “search Skills”, “is there a Skill that can do X”, and similar phrases.

Was this article helpful?



[ › PreviousWhat Are Skills](/en/help/plugins-and-skills/what-are-skills)[Next › Use Skills in Kimi Claw](/en/help/plugins-and-skills/use-skills-in-claw)
