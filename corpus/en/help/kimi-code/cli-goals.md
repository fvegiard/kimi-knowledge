---
title: "Use goal mode - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-code/cli-goals
lang: en
fetched: 2026-09-16
html_sha256: b7e8792f8b6fa0342f7a6ad06447dd7d252cd76cd85160d8b435dfed1e27c6ee
---

[Help Center](/en/help) › [Kimi Code](/en/help/kimi-code) › [Use goal mode](/en/help/kimi-code/cli-goals)

# Use goal mode

A goal lets Kimi Code keep working toward a clearly defined outcome across multiple turns. Unlike a normal prompt, which tells it “what to do next,” a goal describes “what final state to reach.” Use `/goal` when the task has a clear endpoint but the next step depends on what the Agent discovers along the way—for example, fixing a batch of failing tests or tracing and resolving the root cause of a build failure.

## Start a goal

Write the goal after the `/goal` command:

Text


Kimi Code saves the goal, sends it as the next user message, and enters goal mode. At the end of each turn, it checks whether the goal is `complete`, `blocked`, `paused`, or still `active`.

A good goal clearly states the conditions for completion:

Text


Avoid broad, vague directions:

Text


This goal does not say what counts as success, what should be checked, or what other stop conditions apply. The Agent may immediately become `blocked` on some issue, or it may keep working much longer than expected.

### When to use goal mode

Use goal mode for work with a clear endpoint and verifiable evidence.

Text


Kimi Code can inspect test output, modify files, rerun checks, and decide when the goal can be marked `complete`.

Use goal mode for tasks that may require multiple turns of investigation and fixes.

Text


Because the goal describes the outcome, the Agent can change direction if the first lead is not the root cause.

Use goal mode for work that should proceed step by step without further prompting.

Text


This style is useful when you already know which checks or deliverables must exist before the work is done.

### When not to use goal mode

Do not use goal mode for broad topics or open-ended discussions.

**Counterexample:**

Text


If the content does not constitute a goal, the Agent will immediately mark the goal as `complete`.

Do not use goal mode for tasks that are known to be impossible or unsolvable.

**Counterexample:**

Text


If a goal appears impossible or unsolvable, the Agent will mark it as `blocked`.

Do not use vague or overly complex goals.

**Counterexample:**

Text


The Agent may complete this goal, but it may also produce unexpected results after a long wait.

## Manage the lifecycle

Use the following commands to view or control the current goal:

| Command                     | Description                                |
|-----------------------------|--------------------------------------------|
| `/goal` or `/goal status`   | Show the current goal and its progress     |
| `/goal pause`               | Pause the current goal without deleting it |
| `/goal resume`              | Resume a paused or blocked goal            |
| `/goal cancel`              | Remove the current goal                    |
| `/goal replace <objective>` | Replace the current goal with a new one    |

A goal can stop in three ways:

- **`complete`**: The goal is complete. Kimi Code clears the goal, and the Agent summarizes how it completed the work.
- **`paused`**: You paused it, interrupted the current turn, restored a session that originally had a goal, or encountered a model, provider, or runtime error.
- **`blocked`**: Kimi Code needs input, cannot complete the goal as currently written, or has reached the budget limit. When the Agent marks a goal as blocked, it writes a short message explaining why.

Stop conditions must be written into the goal itself. `/goal` has no separate syntax for specifying stop limits.

## Queue follow-up goals

The Agent may sometimes finish a goal quickly. If only one goal can be queued at a time, users can be left waiting. Many people already know which follow-up goals they want to complete next, but previously they had to wait for the current goal to finish, open the TUI, and manually submit the next goal.

If you have more work ready but do not want to interrupt the current goal, use `/goal next`:

Text


Queued follow-up goals are not visible to the Agent while the current goal is running. After the current goal completes, Kimi Code starts the first follow-up goal with the same effect as `/goal <objective>`.

If there is no current goal, `/goal next <objective>` starts that goal immediately. It has the same effect as `/goal <objective>` and shows a status message before the goal starts.

Manage follow-up goals interactively:

Text


In the manager, use ↑ / ↓ to browse, Space to select a goal for moving, then ↑ / ↓ to reorder it after selection. Use E to edit, D to delete, and Esc to cancel. While editing, use Shift-Enter or Ctrl-J to add a new line, and Enter to save.

If the current goal is paused, canceled, or blocked, Kimi Code will not start the next follow-up goal. When a goal becomes `blocked` and follow-up goals exist, the TUI reminds you that those follow-up goals will wait until the current goal is complete.

## Use goal mode with care

Goal mode works best for tasks that can be verified through files, tests, command output, generated artifacts, or a clear report. For one-off changes or questions that only need a single answer, a normal prompt is usually more appropriate.

In `manual` permission mode, goal work may stop to wait for tool-call approval. For unattended work, choose a permission mode that matches the risk level of the codebase and the commands that may be run.

In non-interactive prompt mode, only goal creation is supported:

Bash


Prompt mode exits with code `0` when the goal completes, `3` when the goal is blocked, and `6` when the goal is paused. `/goal next` and the other management commands are TUI control commands.

Was this article helpful?



[ › PreviousContext Management](/en/help/kimi-code/cli-sessions)[Next › Use in IDEs](/en/help/kimi-code/cli-ides)
