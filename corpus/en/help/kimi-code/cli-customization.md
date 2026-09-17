---
title: "Kimi Code CLI Customization Guide - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-code/cli-customization
lang: en
fetched: 2026-09-16
html_sha256: 54576f45ff35f5266c0365ec2b28d9b0c4dac7074aad082b2ffd76f03242053a
---

[Help Center](/en/help) › [Kimi Code](/en/help/kimi-code) › [Customization and More References](/en/help/kimi-code/cli-customization)

# Customization and References

Kimi Code CLI offers a wide range of customization options, allowing you to adjust how the AI behaves and works to fit your needs.

## Configuration file

Kimi Code CLI uses `~/.kimi/config.toml` as the global configuration file and supports both TOML and JSON formats. In the configuration file, you can set:

- **API providers and models**: Configure different model providers, API endpoints, and keys.
- **Default model**: Specify the model used by default.
- **Runtime parameters**: Adjust runtime settings such as timeout, concurrency, and output format.

Use the `/config` command to quickly open the configuration file for editing.

## AGENTS.md project configuration

Place an `AGENTS.md` file in the project root to provide the AI with project-level context:

- **Project background**: Describe the project's features, architecture, and tech stack.
- **Build steps**: Explain how to install dependencies, build the project, and run tests.
- **Code conventions**: Define naming rules, directory-structure conventions, and code-style preferences.
- **Notes**: Highlight important security constraints, performance requirements, and other considerations.

Use the `/init` command to let the AI scan the project and generate an initial `AGENTS.md` automatically. You can also edit the file manually to add more project-specific information. `AGENTS.md` can be placed in any subdirectory of the project, and the AI will automatically load the relevant configuration.

## Custom System Prompt

You can customize the AI's system prompt in the following ways:

- **Global system prompt**: Write it in `~/.kimi/AGENTS.md`; it applies to all projects.
- **Project-level system prompt**: Write it in the `AGENTS.md` file in the project root; it applies only to the current project.
- **Startup parameter**: Specify it at launch with the `--system-prompt` parameter.

Project-level configuration overrides global configuration, and startup parameters have the highest priority.

## MCP integration

Kimi Code CLI supports Model Context Protocol (MCP), letting it connect to external tools and data sources to extend the AI's capabilities:

- **MCP server configuration**: Add MCP server addresses to the configuration file so the AI can call external tools.
- **Built-in MCP support**: Some commonly used MCP tools are built in and require no additional configuration.
- **Custom MCP servers**: You can develop your own MCP server to provide domain-specific capabilities for the AI.

MCP configuration can be written in `~/.kimi/config.toml` or in a project-level configuration file.

## Environment variables

Kimi Code CLI can also be configured through environment variables, which is useful for CI/CD or scripts:

| Environment variable | Description                     |
|----------------------|---------------------------------|
| `KIMI_API_KEY`       | API key                         |
| `KIMI_BASE_URL`      | Custom API endpoint             |
| `KIMI_MODEL`         | Default model name              |
| `KIMI_MAX_TOKENS`    | Maximum number of output tokens |

Environment variables take precedence over settings in the configuration file.

## More references

- **Slash command reference**: Use `/help` to view all available commands.
- **CLI parameter reference**: Run `kimi --help` to view all startup parameters.
- **Official documentation**: Visit the [Kimi Code Docs](https://www.kimi.com/code/docs/) for the latest complete documentation.

Was this article helpful?



[ › PreviousWork Modes](/en/help/kimi-code/cli-work-modes)[Next › Tool integrations](/en/help/kimi-code/cli-integrations)
