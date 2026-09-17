---
title: "Kimi Code CLI Session Management and Context - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-code/cli-sessions
lang: en
fetched: 2026-09-16
html_sha256: 6282d8fec1cee225cebe82740a527b970af9b831321f9857acbc0f351e1a8790
---

[Help Center](/en/help) › [Kimi Code](/en/help/kimi-code) › [Context Management](/en/help/kimi-code/cli-sessions)

# Session and Context Management

## Resuming sessions

Kimi Code CLI automatically saves your conversation history, so you can pick up previous work at any time.

Each time you start Kimi Code CLI, a new session is created. While it is running, you can also enter the `/new` command to create and switch to a new session at any time without exiting the program.

If you want to continue a previous conversation, you have several options:

### Continue the most recent session

- **Continue the most recent session**: use the `--continue` (or `-c`) option to continue your last conversation:

Bash


- **Specify a session ID**: use the `--session` option to restore a specific session:

Bash


- **Switch from the list**: enter `/sessions` (or `/resume`) in the CLI to view the session list and choose the session you want to restore.
- The list shows each session’s title and last update time, helping you find the conversation you want to continue. Press `Ctrl-A` to switch the scope between “current directory only” and “all directories”, which makes it easier to find sessions across projects. Use `/title <text>` to set a custom title for a session, making it easier to find later.

### Resume prompt on exit

When a session exits, including normal exits, `Ctrl-C` interruptions, `/undo`, `/fork`, switching with `/sessions`, and similar scenarios, Kimi Code CLI automatically prints a resume command prompt:

Bash


### Replay on startup

When you continue an existing session, Kimi Code CLI replays the previous conversation history so you can quickly understand the context. During replay, previous messages and AI replies are displayed.

### Session state persistence

In addition to conversation history, Kimi Code CLI automatically saves and restores the session’s runtime state. When you restore a session, the following states are restored automatically:

- Approval decisions: the YOLO mode on/off state, and operation types approved with “Allow for this session”
- Plan mode: the Plan mode on/off state
- Subagent instances: the state and context history of Subagent instances created in the session through the Agent tool
- Additional directories: workspace directories added through `--add-dir` or `/add-dir`

This means you do not need to configure these settings again every time you restore a session. For example, if you approved automatic execution for a certain type of Shell command in your previous session, those approvals remain valid after you restore the session.

### Export and import

Kimi Code CLI supports exporting session context to a file, and importing context from external files or other sessions.

#### Export a session

Enter `/export` to export the full conversation history of the current session as a Markdown file:

Text


The exported file includes session metadata, a conversation overview, and the complete conversation record organized by turn. You can also specify an output path:

Text


#### Import context

Enter `/import` to import context from a file or another session. Imported content is attached to the current session as reference information:

Text


Common text-based file formats are supported, including Markdown, code, and configuration files. You can also provide a session ID to import the full conversation history from that session.

> Tip: Exported files may contain sensitive information, such as code snippets and file paths. Please review them carefully before sharing.

### Clear and compress

Kimi Code CLI automatically compresses context when needed to keep the conversation going. You can also use slash commands to manage context manually:

#### Clear context

Enter `/clear` (or `/reset`) to clear all context in the current session and start the conversation over:

Text


#### Compress context

Enter `/compact` to compress the context, preserving key information while reducing token usage:

Text


You can also include instructions when compressing, telling the AI which information should be prioritized for retention:

Text


#### Context status

The status bar at the bottom of the CLI displays the current context usage in real time, helping you understand how much context has been consumed. When usage is high, we recommend using `/compact` to compress the context and avoid losing important information.

Was this article helpful?



[ › PreviousInteraction and Input](/en/help/kimi-code/cli-interaction)[Next › Use goal mode](/en/help/kimi-code/cli-goals)
