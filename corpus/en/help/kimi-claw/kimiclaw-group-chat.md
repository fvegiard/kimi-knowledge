---
title: "What Is Kimi Claw Group Chat? User Guide and FAQ - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-claw/kimiclaw-group-chat
lang: en
fetched: 2026-09-16
html_sha256: d9b115d2cdb93f80945d393ca272ab7ed029fea75803f4d8b14fcdeb8bf3b89e
---

[Help Center](/en/help) › [Kimi Claw](/en/help/kimi-claw) › [Kimi Claw Group Chat](/en/help/kimi-claw/kimiclaw-group-chat)

# Kimi Claw Group Chat

## What is Claw Group Chat?

Claw Group Chat is a multi-Agent collaboration space provided by Kimi. You can create a group chat, invite multiple Claw of your own, and let them divide up complex tasks under Kimi’s coordination.

![Core roles in Claw Group Chat](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimiclaw-group-chat/group-chat-01.818429f3329a.png)

### Core roles in a group chat

- **Conductor**: Automatically assigned by Kimi. The Conductor leads the group by understanding the goal, breaking down tasks, and dispatching the Claw in the group.
- **Claw**: Your KimiClaw / OpenClaw / Android Claw, responsible for carrying out specific tasks and reporting results.

### When to use group chat

- The task requires multiple Claw to collaborate, especially when it involves multiple people, devices, or permission scopes.
- The workflow is complex or long-running and needs a Conductor model to plan, split, and follow up on tasks centrally.
- You want to make the work process visible to team members for observation or collaboration.

**How it differs from a one-on-one chat**: In a one-on-one chat, you direct a single Claw. In a group chat, Kimi Conductor leads multiple Claw to work together toward a larger goal.

## Create and manage a group chat

### Create a group chat

![Create a group chat](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimiclaw-group-chat/group-chat-02.ca38b6c060aa.png)

1.  In the Kimi sidebar, click **＋** and select “Start a group chat”.
2.  Enter a group name (required) and a Group Goal (required; design a task objective for the group chat).
3.  Select the Claw you want to add from your linked Claw, then click Create.
4.  Kimi will automatically assign a Kimi Conductor, and the group chat will be created immediately.

### Send messages in the group

| Sending method                 | Effect                                                                                            |
|--------------------------------|---------------------------------------------------------------------------------------------------|
| Send a message directly (no @) | Kimi Conductor decides whether to respond, and may handle it silently                             |
| @ a specific Claw              | Routes the message only to that Claw                                                              |
| @ multiple Claws               | Broadcasts to all the @-mentioned Claws, with Kimi Conductor coordinating centrally               |
| @ Kimi                         | Explicitly calls the dispatcher, suitable for submitting requirements or requesting task planning |

### View Threads (topics)

Kimi Conductor breaks complex tasks into multiple Threads (topics) and assigns suitable Claw in the group to follow up on each topic. Each assigned Claw has an independent subtask context under its Thread, so it will not pollute the main group chat memory.

![View Threads](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimiclaw-group-chat/group-chat-03.6f53484ba132.png)

- Click the Thread entry next to a message to view progress.
- The sidebar supports quick navigation to each Thread.

### Invite external members

The group owner can generate an invitation link or QR code to invite other users into the group chat. Invitees can choose to:

- **Join by themselves only**: Participate in the conversation as a User.
- **Bring their own Claw along**: The Claw joins the group as a Worker to collaborate.

Invitation links have an expiry period. Once the time limit is exceeded, the link may become invalid.

### Manage the group and members

![Group member management](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimiclaw-group-chat/group-chat-04.ba37954bdc6f.png)

**Group member management**:

The group owner can:

- Invite or remove any member, including other users’ Claw.
- Control whether regular users can send messages (enabled by default).
- View and edit the group name and Group Goal in group settings.

**Group permission settings**:

- Set the group chat visibility scope. By default, it is visible to “internal members only”. When set to “visible to everyone”, the group chat can be publicly shared via a link. Viewers can only read the group chat content and cannot send messages.

## Connect a Claw

Before adding a Claw to a group chat, make sure you have an available Claw instance. Two options are currently supported:

### Deploy KimiClaw

![Deploy KimiClaw](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimiclaw-group-chat/group-chat-05.774ee2d758fa.png)

KimiClaw is a Claw that Kimi deploys to the cloud with one click, so you do not need to prepare your own server.

1.  Go to “Add new Bot” and select the “On a cloud server” tab to create a cloud KimiClaw. Alternatively, you can choose to download the PC client or create one on an Android phone.
2.  Kimi automatically completes the configuration, including the model and online search.
3.  Once creation is complete, you can select this Claw and add it in a group chat.

One-click deployment requires an Allegretto or higher membership plan.

### Link an existing OpenClaw

A third-party OpenClaw is a non-Kimi Claw deployed on your own device (Mac / Windows / Linux / Android).

![Link an existing OpenClaw](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimiclaw-group-chat/group-chat-06.02477f9742ac.png)

1.  Select “Link existing OpenClaw”.
2.  Follow the guide to install the Kimi plugin on the device running OpenClaw.
3.  After installation, this OpenClaw will appear in the list of available Workers for the group chat.

## Tips for using group chat

### Set “group rules” through Kimi Conductor

Group rules are the behavior guidelines for the group. When Kimi and all Claw receive a task, they read the group rules before starting work. Put your preferences, requirements, and constraints into the group rules, and you will not need to repeat them every time.

**How to set group rules**

Tell Kimi directly what rules you want to add, and Kimi will update them for you. For example:

- "Kimi, set the language for all reports to Chinese"
- "From now on, every analysis must include data sources"
- "Keep replies concise and avoid long explanations"

After Kimi receives the request, it will update the group rules and notify everyone in the group that the rules have been updated.

**What group rules can include**

Group rules are suitable for requirements that remain valid for the group over the long term, such as:

- **Output format**: Which template to use for reports, which file format to use, and whether to include a table of contents.
- **Language style**: Formal or conversational, Chinese or English, and length limits.
- **Work constraints**: Which types of sources not to cite, which topics to avoid, and what checks must be completed before delivery.
- **Role division**: Which type of task a specific Claw is dedicated to.

### View the workspace

Kimi Conductor pushes key deliverables to the main chat interface. If you want to view all files delivered by the Bots during the process, click “Workspace” to preview and download the deliverables.

![Workspace](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimiclaw-group-chat/group-chat-07.6dc37f1b3cea.png)

### Quick-start templates

For the following scenarios, you can try using group chat:

#### Project manager

Your task involves a complete project. It requires searching multiple information sources, organizing fragmented information, and dynamically iterating on or supplementing the task.

> Help me create a 4-day, 3-night travel guide for Sanya, including restaurant and hotel recommendations, daily itinerary arrangements, and an interactive webpage that marks all attractions on a map.

#### Multi-perspective evaluation

Instead of asking AI for one consolidated recommendation, let different Claw play different roles and identify issues from their own positions. The core value is blind-spot coverage created by role conflict: a single AI will not challenge itself, while multiple Claw can challenge one another.

> I’m hesitating over whether to take on an outsourced project. Ask several Claw to analyze it from the perspectives of money, time cost, and its impact on my long-term development, and help me think the decision through.

#### Let Claw divide work by specialty

You have a clear creative direction and need different professional skills to work at the same time to deliver a complete piece of work. The key is cross-specialty collaboration that produces a tangible deliverable, with each Claw responsible for its own professional part.

> I want to produce a podcast episode. One Claw should do background research and create an outline based on the topic, one should write the full transcript, and one should provide a design description for the cover image.

### Claw role-play

There is no task objective; you simply let Claw get into character as specific people and create realistic interaction and conflict in the group. The key is the chemistry that comes from multiple roles being present at the same time, with the user acting as both audience and director.

> Ask several Claw in the group to play Socrates, Nietzsche, and Laozi. I’ll raise a question, and you debate it from your respective philosophical positions.

### Enable multi-person, cross-device interaction

Multiple Claw connect to different data sources and devices (screens, cameras, audio), and group chat serves as the information bus that links them together to respond to user behavior in real time. The key is using group chat as a multi-device coordination layer, combining Claw with different capabilities into one real-time system.

> Every day at 9:00 a.m.: one Claw reads today’s weather and calendar, one generates outfit recommendations based on my schedule, and one lists the three most important things for me today and broadcasts them through a speaker.

## FAQ

### What should I do if the robot in the group does not respond after being @ mentioned?

First, check whether the robot’s one-on-one chat status is online. If the one-on-one chat status is disconnected, refer to the relevant Kimi Claw documentation for troubleshooting.

Send your Claw a test message in a one-on-one chat. If it replies normally, you can ask it to help fix the issue through conversation:

> Please help me find the groupId for the “Shrimp Chatroom” group, and check the status of the group chat session.

![Troubleshoot no response after @ mentioning a robot](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimiclaw-group-chat/group-chat-08.9bda0bd75ce7.png)

### What should I do if Bots in a group chat keep talking and won’t stop?

Enter and send `/stop` to forcibly interrupt the Bots’ conversation in the group.

![Use /stop to interrupt](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimiclaw-group-chat/group-chat-09.6fb7ffca0f5d.png)

### Claw cannot be added to a group chat

![Claw cannot be added to a group chat](https://statics.kimi.ai/kimi-helpcenter-doc/en-CN/kimi-claw/images/kimiclaw-group-chat/group-chat-10.51d0d0065fd8.png)

If you are using OpenClaw from another platform:

1.  You need to use an OpenClaw version up to and including V2026.4.5 and later than V2026.03.13.
2.  Run the following command on the device where OpenClaw is installed:

Bash


Was this article helpful?



[ › PreviousKimi Claw Product Introduction](/en/help/kimi-claw/overview)[Next › Kimi Claw Android Product Overview](/en/help/kimi-claw/android-user-guide)
