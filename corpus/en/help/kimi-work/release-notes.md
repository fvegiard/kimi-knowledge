---
title: "Kimi Work Release Notes - Kimi Help Center"
source: https://www.kimi.com/en/help/kimi-work/release-notes
lang: en
fetched: 2026-09-16
html_sha256: 7bf27ddad69346484df9bded1a1d068803426e251d7edeb2dda3eef1dadce2b0
---

[Help Center](/en/help) › [Kimi Work](/en/help/kimi-work) › [Release Notes](/en/help/kimi-work/release-notes)

# Release Notes

This page tracks Kimi Work version updates, including new features, changes, and fixes, and is updated regularly. Download the latest version: [kimi.com/products/kimi-work](/products/kimi-work)

## 3.2.9 (2026-09-14)

**New**

- Sharing and opening files with Kimi is now supported for select file formats:
  - Share to Kimi: send files and content directly to Kimi from the share menu of apps like WeChat
  - Open with Kimi: right-click supported files and choose to open them with Kimi
- Desktop pet upgrade: a fully refreshed UI with quick replies right in the conversation bubble — keep chatting without opening the main window
- PDF viewer updated with a new index panel, including table of contents and page-number jump
- New power mode option “Keep Awake After Screen Off”: the screen can turn off while the system keeps running, so remote control and background tasks are not interrupted

**Changed**

- Uploaded files and files linked via “@” in the input box can now be clicked to open a preview in the right workbench
- Image preview now supports copy / save actions

**Fixed**

- Fixed several race conditions, including queue edit recovery and navigation unlock after browser crashes
- Fixed dark mode color issues for app features
- Fixed several bugs and improved some interactions and stability

## 3.2.8 (2026-09-12)

**Changed**

- Anti-sleep setting now offers three options: keep running when the screen is off, keep the screen on, and off

**Fixed**

- Fixed an issue where the Settings window went blank after being restored
- Optimized long-screenshot thumbnails to reduce preview memory usage
- Fixed a login refresh race condition, preventing stale requests from mistakenly clearing the login state or overwriting new credentials
- Fixed several bugs and improved some interactions and stability

## 3.2.7 (2026-09-11)

**New**

- Screenshot upgrade: scrolling long screenshots in Launcher; one-click OCR text extraction in the screenshot editor; pin screenshots to the desktop as always-on-top windows
- Conversation settings injection: new Work conversations automatically carry your conversation settings
- Drag files anywhere onto the window to add attachments, including folders
- Added a website deployment plugin: once installed, deploy local website projects to the cloud in one step

**Changed**

- Windows auto-start now only stays in the system tray, no longer popping up the main window
- Markdown tables redesigned, with horizontal scrolling for wide tables
- Notification center now supports marking all as read with one click
- Remote control messages now display in segments, with sub-agent cards and deliverable cards aligned with the desktop

**Fixed**

- Voice input is now automatically disabled on devices without a microphone, and dictation stops when the microphone is unplugged
- Fixed an issue where the plugin upload feature was missing
- Mail and phone links now show a clear message when they cannot be opened, no longer failing silently
- Fixed an issue where the scheduled tasks page froze when credits ran out
- Desktop pet performance and drag-and-drop fixes
- Fixed several bugs and improved some interactions and stability

## 3.2.6 (2026-09-07)

**New**

- Added stream plugin recommendation and installation: automatically recommends plugins suitable for your task and ask you to install them
- Added support for installing plugins via GitHub links, making it easier to bring in shared plugins

**Changed**

- The plugin detail page now shows MCP connection status and supports connection management
- Users will now be asked to confirm any still-running scheduled tasks before quitting the app

**Fixed**

- Fixed an issue where clicking “Back” was unresponsive after entering certain pages in Settings
- Fixed an issue where reinstalling over an existing installation was mistakenly blocked on macOS, and CAD files were mistakenly opened with Notepad on Windows
- Fixed issues with some page colors in dark mode, duplicate Launcher messages, and DOCX preview width adaptation
- Fixed several bugs and improved some interactions and stability

## 3.2.5 (2026-09-04)

**New**

- Added remote control: control Kimi Work on your desktop from your phone
- Added the Apps feature, improving the Agent's web operation capability and visibility of results
- Added in-conversation search: quickly find records within a conversation

**Changed**

- Plugin and skill marketplace updated: improved display logic, with plugin and skill search support
- Settings Center revamped, now compatible across Chat and Work modes

**Fixed**

- Fixed an issue where some users saw abnormal login status display
- Fixed several bugs and improved some interactions and stability

## 3.2.4 (2026-08-31)

**Changed**

- Optimized how sources such as web search and local files are cited in message replies
- Optimized font size and line spacing in message replies

**Fixed**

- Fixed several experience issues in dark mode
- Optimized process guarding on Windows
- Fixed several bugs and improved some interactions and stability

## 3.2.3 (2026-08-28)

**New**

- Added a “Create plugin” entry to the plugin marketplace: create plugins directly in the marketplace

**Fixed**

- Desktop pet polish: improved window behavior, with language now following app switches in real time
- Fixed a conversation state consistency issue when editing and resending a message after an error
- Optimized the energy consumption of always-on features
- Fixed several bugs and improved some interactions and stability

## 3.2.2 (2026-08-26)

**New**

- Added a desktop pet: Kimi accompanies and interacts with you as a desktop pet
- Added Slash shortcuts: the input box now supports the compact, fork, and goal commands
- Added a “Default” option for run permissions: three permission levels are now available globally — “Default”, “Manual approval”, and “Fully automatic”

**Changed**

- Agent control of the built-in browser is now on by default
- Chat conversations no longer share a root directory: each conversation now gets its own working directory

**Fixed**

- Fixed an issue where the first message briefly flashed an empty state after sending
- Fixed several bugs and improved some interactions and stability

## 3.2.1 (2026-08-21)

**New**

- Added a global Launcher: summon a floating capsule input box on the desktop anytime, anywhere with a global hotkey
  - When summoned, it automatically brings in the files currently selected in Finder / File Explorer, and supports pasting images, adding attachments, and dragging in screenshots
  - Type “/” to open the plugin and skill menu (pinyin search supported) and choose a workspace
  - Hold the hotkey to dictate; after submitting, it collapses into a mini capsule, and you can jump back to the main app with one click to view the answer
- Added message queueing: while the Agent is responding, you can keep sending messages; new messages are queued automatically, with support for drag-to-reorder, edit, delete, and detail preview
- Voice dictation in the Work input box: click the microphone or hold the hotkey to start dictating, with mixed Chinese-English recognition

**Changed**

- Message notification logic updated: you can switch message notification rules in Settings

**Fixed**

- Optimized standby power consumption, reducing background resource usage while the app is idle
- Fixed an issue where the Dock icon disappeared on macOS
- Fixed several bugs and improved some interactions and stability

## 3.2.0 (2026-08-19)

**New**

- Added a built-in Agent browser: browser tabs are bound to conversations and live in the preview pane, and the Agent can directly operate the browser — clicking, typing, and more; on Mac, you can also import cookies from your local Chrome browser to reuse your existing login sessions (off by default and can be enabled in Settings)
- Localization in 16 languages: the client now supports 16 languages, up from just Chinese and English

**Changed**

- Kimi WebBridge is now a plugin: real-browser control has been moved into a plugin, which is off by default and can be enabled in Settings
- The dashboard list page has been removed; dashboards are now switched via the top tab bar
- Dashboard is now a preview-pane type: dashboards can be opened in the chat preview pane, and multiple dashboards can be open in parallel

**Fixed**

- Streaming message rendering upgraded: long responses now render more smoothly
- Fixed several bugs and improved some interactions and stability

## 3.1.10 (2026-08-16)

**Fixed**

- Fixed an issue where the app crashed during upgrade for some Windows users

## 3.1.9 (2026-08-15)

**New**

- Personal plugin marketplace is live: the plugin marketplace now has a "Personal Plugins" section where you can browse and install plugins from individual developers

**Fixed**

- Fixed an issue where streaming Markdown content occasionally failed to refresh
- Fixed several bugs and improved some interactions and stability

## 3.1.8 (2026-08-11)

**New**

- Message history navigation: a new message navigation bar on the right side of long chats lets you quickly jump back to earlier messages
- Conversation branching: start a new branch from any turn to keep exploring, carrying over the original conversation's chat history
- Edit and rewind: edit your last message and regenerate the response
- Project folders: move conversations in or out of projects, and pin projects to the pinned area of the sidebar
- Transparent file editing: after the Agent modifies a file, a diff summary card is generated — review changes line by line and roll back with one click; workspace files auto-refresh as they change on disk
- Skill discovery and creation: discover and create custom skills in Work, with skill search supported
- Dashboard components pinned to the desktop now have an always-on-top toggle

**Changed**

- New standalone conversation windows now support Chat
- Overly long user messages in the input box are now collapsed

**Fixed**

- Fixed PDF file link preview on Windows; Work Settings no longer flashes white in dark mode; pasting from the Word clipboard now restores text instead of an image attachment
- Fixed several bugs and improved some interactions and stability

## 3.1.7 (2026-08-05)

**New**

- Message-level feedback is now supported: you can like or dislike individual messages in the assistant's replies

**Changed**

- Dashboard components using Pin To Desktop are no longer forced to stay on top

**Fixed**

- Fixed several bugs and improved some interactions

## 3.1.6 (2026-07-29)

**New**

- PPT slide editor is live: open and edit slides right in the workspace — changes take effect immediately
- Screenshot annotation is now supported for files in the preview area and in the browser; finished annotations can be sent directly to the Agent for revision
- Storage drive migration is now supported on Windows: Work data can be moved to another drive
- The Windows installer now supports choosing a custom install location

**Changed**

- Improved some token efficiency issues

**Fixed**

- Fixed several bugs and improved some interactions

Was this article helpful?



[ › PreviousFAQ](/en/help/kimi-work/kimi-work-faq)[Next › What Are Kimi Plugins?](/en/help/plugins-and-skills/overview)
