---
title: "Kimi Code CLI Interaction and Command Reference - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-code/cli-interaction
lang: en
fetched: 2026-09-16
html_sha256: 2ad4acb2adb80feb30c9af97afed584c70ad250810c372b9c194d9f33bebc202
---

[Help Center](/en/help) › [Kimi Code](/en/help/kimi-code) › [Interaction and Input](/en/help/kimi-code/cli-interaction)

# Interaction and Input

Kimi Code CLI provides several ways to interact with AI, helping you collaborate more efficiently.

## Thinking mode

Thinking mode lets AI reason more deeply before responding, making it suitable for complex tasks.

- Use the `/model` command to switch models and Thinking mode.
- You can also enable Thinking mode at startup with the `--thinking` parameter.

## Multiline input

Press **Ctrl-J** to insert a line break for multiline input. This is useful for longer prompts or pasting multi-line code snippets.

## Clipboard paste

Press **Ctrl-V** to paste content from the clipboard. Text and images are supported. When you paste an image, AI can directly understand its content, such as screenshots, design drafts, and error screenshots.

## Slash commands

Commands starting with `/` are used to manage sessions, configuration, and debugging. Common commands include:

| Command     | Description                     |
|-------------|---------------------------------|
| `/help`     | Show help information           |
| `/login`    | Log in and authorize            |
| `/model`    | Switch models and Thinking mode |
| `/sessions` | List and switch sessions        |
| `/clear`    | Clear the current context       |
| `/compact`  | Compact the context             |
| `/init`     | Generate AGENTS.md              |
| `/exit`     | Exit the CLI                    |

After you type `/` in the input box, the list of available commands appears automatically.

## @ path completion

Use the `@` symbol in your input to reference a file or directory path. The system will complete the path automatically:

Text


AI will then automatically read the referenced file content as context.

## Structured Q&A

In some scenarios, AI may ask for your input in the form of structured options. Use the **arrow keys** to select an option, then press **Enter** to confirm.

## Approval prompts

When AI needs to modify files, run Shell commands, or perform similar actions, it will ask for your confirmation. You can choose:

| Option                     | Description                                                              |
|----------------------------|--------------------------------------------------------------------------|
| **Allow**                  | Allow this operation                                                     |
| **Allow for this session** | Allow similar operations during the current session without asking again |
| **Deny**                   | Deny this operation                                                      |

### YOLO mode

If you trust the AI’s actions, you can use YOLO mode to skip all confirmations:

Bash


In YOLO mode, AI will automatically perform all operations. Use it with caution. We recommend using it only in a controlled development environment.

Was this article helpful?



[ › PreviousGetting Started](/en/help/kimi-code/cli-getting-started)[Next › Context Management](/en/help/kimi-code/cli-sessions)
