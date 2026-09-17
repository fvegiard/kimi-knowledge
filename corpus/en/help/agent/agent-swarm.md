---
title: "Kimi Agent Swarm Multi-Agent Collaboration Mode - Kimi Help Center"
source: https://www.kimi.com/en/help/agent/agent-swarm
lang: en
fetched: 2026-09-16
html_sha256: fd34d801be0b45b20bdf39f806e95bd9fd5c4a64f360a86bfd2be50e46662689
---

[Help Center](/en/help) › [Agent Mode](/en/help/agent) › [Agent Swarm](/en/help/agent/agent-swarm)

# Agent Swarm Capabilities

On January 27, 2026, Moonshot AI officially released Kimi K2.5 and introduced Agent Swarm. Agent Swarm is a “scale-out” architecture. It is more than simple multi-agent collaboration: without predefined roles or manually designed workflows, it can automatically coordinate large-scale AI Subagent collaboration.

On April 20, 2026, Moonshot AI released and open-sourced Kimi K2.6. Powered by the K2.6 model, the Agent Swarm architecture received a major upgrade:

- Deploy up to 300 Subagent instances simultaneously
- Execute more than 4,000 tool calls in a single task
- Run 4.5× faster than sequential execution by a single Agent

Agent Swarm is currently powered by Kimi K3 (K3 Swarm), further improving large-scale parallel search and batch processing.

## The Story Behind It

In AI in 2025, the mainstream narrative long centered on Scaling Up—larger models, more parameters, and longer context windows. But this approach has a structural ceiling: it is still constrained by the bottleneck of single-threaded sequential execution. “It is like a carpenter having only two hands and only 24 hours in a day.”

Agent Swarm was born from a real scenario: In June 2025, a team member tried to have Kimi automatically collect daily stock information—checking macro trend news, querying historical limit-up data, and conducting deeper analysis after matching conditions. When she reached the 100th line of if-else code, she suddenly realized: “I am hand-writing a multi-agent system.” If models can use tools and handle long-horizon tasks, why can’t they architect themselves—deciding when to parallelize, whom to hire, and how to delegate?

Agent Swarm is a self-designed organizational structure—with a boss, employees, and division of labor. But this organization is not designed by humans; it is designed by AI itself. The main Agent (primary agent) learns to autonomously direct a group of up to 300 Subagent instances and execute parallel workflows of up to 4,000 steps, while the main Agent (primary agent) oversees 15 steps.

![image](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/swarm/swarm-01.9f26f463aaf3.png)

Through the PARL (Parallel-Agent Reinforcement Learning) training method, Kimi Agent Swarm extends Kimi K2.6 from single-task execution to collaborative multi-agent work. Compared with a single-Agent approach, Agent Swarm reduces the minimum number of critical steps needed to reach a goal by 3× to 4.5× in large-scale search scenarios, which translates into up to a 4.5× reduction in actual execution time.

Here is a practical example of how Agent Swarm works: When you submit a complex request—for example, analyzing 100 different YouTube niches to identify top creators—the system does not process it sequentially. Instead, it creates 100 independent search specialists, each responsible for one niche, and consolidates their results after they finish. Work that used to take days of manual research or hours of sequential AI processing can now be completed in minutes.

## How to Use

**Kimi Agent Swarm product entry point**

![image](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/swarm/swarm-02.277ab84c390c.png)

- Web: [https://www.kimi.com/agent-swarm](/en/agent-swarm)
- Mobile/tablet: Open the Kimi App and select the K3 Swarm model in the model switch button above the chat box

About the \[Beta\] tag: \[Beta\] indicates a trial marker for a product that is initially open to only a small number of users for small-scale validation and refinement; as the feature matures, the tag is gradually removed and the product is rolled out to everyone.

Note: Agent Swarm tasks consume relatively high credit (roughly several times that of a regular Agent task), depending on task complexity and the number of Subagent instances. Available to Moderato, Allegretto, and Allegro members.

### Steps

1.  Clearly describe your task requirements to Kimi Agent Swarm and send them. For example: “Collect 200+ Paul Graham essays” or “Identify the Top 3 creators in 100 niches.” The system will enter the automatic execution stage, where you can view task progress in real time.

![image](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/swarm/swarm-03-01.487802b8c338.png)

2.  The system will run the task automatically in the background. You can see in real time:
    - Task lists being created and Subagent instances being created to execute tasks in parallel
    - The logical chain of reasoning and decision-making
    - The types of tools called and the execution steps
    - Websites visited and information sources used
    - Intermediate processes for code generation or analysis
    - The progress and results of each agent in Agent Swarm

![image](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/swarm/swarm-04.1f89e14ba528.png)

3.  After the task is completed, obtain professional-grade deliverables.
4.  Depending on the task type, Kimi Agent Swarm generates the corresponding outputs, including multiple files:
    - Code projects: complete runnable website code, applications, and more (including HTML, CSS, and JavaScript)
    - Folders: all intermediate files generated during task execution
    - Data analysis: charts, trend analysis, and tables of key metrics
    - Office documents: Word documents, PDF documents, Markdown documents, PPT presentations, and more
5.  Preview, download, or share the outputs.
6.  For subsequent rounds, Kimi automatically schedules between chat and Agent based on the task—no manual switching required.

## Use Cases

### Exploration at Scale

Case 1: Identifying the Top 3 creators in 100 niches The task asks the system to find the Top 3 creators in each of 100 YouTube niches. Agent Swarm first researches and defines each niche, then autonomously creates 300 Subagent instances to search in parallel. It ultimately generates a structured table and visual charts containing channel names, subscriber counts, and descriptions.

![image](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/swarm/swarm-04.1f89e14ba528.png)

Task result: 100 Subagent instances are searching for creators.

[View result](/share/19c40eea-b272-8ef2-8000-0000af5e0baa?hide_sidebar=1&disable_auto_preview=1)

Case 2: Collecting 200+ Paul Graham essays Paul Graham’s essays are scattered across his personal website, old blogs, and transcribed talks. Agent Swarm assigns dedicated Subagent instances to search, download, classify, and summarize them, ultimately organizing more than 200 original essays into topic folders and generating a comprehensive summary report.

![image](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/swarm/swarm-05.d91606802fd4.png)

Task result: Collected 200+ Paul Graham essays

[View result](/share/19cc436e-73c2-89bd-8000-000078b7d71e?hide_sidebar=1&disable_auto_preview=1)

### Output at Scale

Case: Generating a 100-page literature review from 40 PDFs Agent Swarm breaks the task down across the document set and deploys multiple writing-focused Subagent instances, each responsible for specific sections. The final output is a 100-page, two-column academic document with fully formatted citations and references, along with visual content such as a method distribution pie chart and citation network analysis diagram.

![image](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/swarm/swarm-06.69dd6865a464.png)

Task result: Generate 100-Page Literature Review from 40 PDFs

[View result](/share/19c4106b-89b2-8361-8000-0000d07b8235?hide_sidebar=1&disable_auto_preview=1)

### Multi-Perspective Analysis

Agent Swarm can structurally avoid groupthink by creating conditions for independent agents to reach different conclusions, then forcing reconciliation. Case: Expert review of a product launch strategy The user asks for a review of the launch strategy for an office product. Agent Swarm deploys a team of expert Subagent instances that provide different perspectives from different roles.

- Senior product manager: concerned about technical debt
- Skeptical investor: questions the unit economics
- Head of customer success: defends edge cases

![image](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/swarm/swarm-07.df818b764ab9.png)

Task result: Get your product plan reviewed by a team of experts

[View result](/share/19c40bc9-31a2-8533-8000-0000bad59b7a?hide_sidebar=1&disable_auto_preview=1)

Case: Continuing The Three-Body Problem in 20 literary styles Agent Swarm creates 20 “writer” Subagent instances with different literary styles—from Virginia Woolf–style interior monologue, to Borges-like labyrinths of thought, to Kafkaesque absurd worlds. Each “writer” creates independently, ultimately presenting multiple narrative possibilities around the same story core.

![image](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/agent/images/swarm/swarm-08.fe530d44ba8e.png)

Task result: Let 20 writers create alternative endings for The Three-Body Problem

[View result](/share/19c409c8-8692-821a-8000-0000070ad369?hide_sidebar=1&disable_auto_preview=1)

## Technical Breakdown

### AI Can Work as a Team

Core architecture: commander + specialists. Think of Agent Swarm as a football team:

- Orchestrator = coach/commander: sees the whole field, sets the strategy, and assigns tasks
- Sub-agents = players on the field: each focuses on a specific task, such as forward, defender, or goalkeeper Key design: the players are “frozen”; only the coach is trained. During training, all “players” (Subagent instances) keep their original capabilities unchanged. Only the “coach” (orchestrator) becomes smarter through RL. This has two benefits:

1.  Avoiding unclear credit assignment: when a project succeeds or fails, it is hard to determine exactly which part caused the outcome. After freezing the Subagent instances, all credit and responsibility clearly belong to the orchestrator’s scheduling decisions.
2.  More stable training: if all players change tactics at the same time, the team falls into chaos. Adjusting only the commander ensures the collaboration system improves steadily.

### Parallel Thinking

Traditional AI is like one person working alone, finishing one step before moving to the next. Agent Swarm is like having multiple experts start at the same time. It prevents two kinds of “shortcut” behavior:

- Serial collapse: the commander avoids coordination and hands everything to a single Subagent to do slowly, degenerating into solo work.
- Fake parallelism: to inflate “parallelism metrics,” the commander blindly splits out a large number of meaningless subtasks that do not actually improve efficiency. Solution: a three-dimensional reward mechanism The system evaluates the commander’s performance from three angles:

1.  Whether the final result is good (task completion quality)
2.  Whether true parallelism is achieved (avoiding one person doing all the work)
3.  Subtask completion rate (avoiding empty headcount)

In early training, the latter two metrics carry some weight to force the habit of parallel collaboration. Later, their weight is gradually reduced so the AI can focus on making the final result as good as possible.

### Improving Efficiency with Critical Steps

How do we tell whether parallelism is actually faster? Agent Swarm introduces a simple concept: critical steps. Imagine renovating a house:

- Serial approach: wait for the tiler to finish laying tiles, then wait for the carpenter to build cabinets, and finally bring in the painter—every stage waits in line.
- Parallel approach: the tiler, carpenter, electrician, and plumber start at the same time, and overall progress depends on the slowest trade. Agent Swarm calculates the time taken by the slowest Subagent in each “stage” and adds these together as the total number of critical steps. This pushes the commander to learn how to truly optimize the overall process instead of blindly splitting tasks.

### AI Learns to Collaborate by Itself

Researchers did not directly tell the AI, “Please process this in parallel.” Instead, they guided it through task design:

- Broad search tasks: requiring simultaneous checks across multiple independent information sources (for example, searching the weather in Beijing, Shanghai, and Guangzhou at the same time)
- Deep search tasks: requiring multiple reasoning lines to proceed simultaneously before conclusions are consolidated While solving these problems, AI naturally discovers that “splitting up” is faster than “sending one person on all the errands,” and thereby learns parallel collaboration on its own.

### Smarter Memory Management

In long conversations, AI often struggles with “not remembering enough” or “remembering too much.” Common approaches include:

- Hiding tool results: not looking at intermediate processes
- Summarization: compressing information, but possibly losing details
- Dropping everything: clearing it directly and losing all memory Agent Swarm takes a smarter approach: context sharding It is like splitting a large project into several independent smaller projects:
- Each Subagent focuses only on its own “notebook” and records relevant details
- They think independently without interfering with one another, avoiding information confusion
- They report only key conclusions to the commander instead of dumping everything This preserves the complete reasoning process without drowning the commander in massive amounts of information, effectively using architectural design to break through memory length limits.

## Real-World Results

On the BrowseComp benchmark, which tests AI’s ability to retrieve deep information:

- Accuracy improved significantly: from 15.9% with a single agent to 33.3%
- Efficiency improved: compared with the baseline context management solution, the number of critical steps needed to complete the same task was reduced by about 40% Compared with the crude memory management approach of “dropping everything,” Agent Swarm is both faster and more accurate.

In short: Agent Swarm turns AI from “one person doing all the work” into “a well-coordinated team.” Through smart command and scheduling, genuine parallel collaboration, and efficient memory management, it achieves results greater than the sum of its parts.

## Application Scenarios

Agent Swarm is especially suitable for the following complex tasks:

1.  Large-scale information retrieval: collecting large volumes of internet information
2.  Batch downloads: collecting various files and materials at scale
3.  Broad reading: processing large volumes of text across 100+ documents
4.  Long-form writing: creating structured long-form content of more than 100,000 Chinese characters
5.  Complex programming tasks: front-end development, code review, and multi-file refactoring
6.  Office automation: generating professional-grade documents, spreadsheets, and presentations

## Related Reading

1.  Kimi official blog - “Kimi Agent Swarm: 100 Sub-Agents at Scale” ([https://www.kimi.com/blog/agent-swarm](/blog/agent-swarm))
2.  Kimi K2.5 technical blog - “Kimi K2.5: Visual Agentic Intelligence” ([https://www.kimi.com/blog/kimi-k2-5](/blog/kimi-k2-5))
3.  Kimi K2.6 technical blog - “Kimi K2.6: Advancing Open-Source Coding” ([https://www.kimi.com/blog/kimi-k2-6](/blog/kimi-k2-6))
4.  Kimi K3 technical blog - “Kimi K3” ([https://www.kimi.com/blog/kimi-k3](/blog/kimi-k3))

Was this article helpful?



[ › PreviousKimi Agent Overview](/en/help/agent/agent-overview)[Next › Agent Features and Limits](/en/help/agent/agent-features-and-limits)
