---
title: "Prompt patterns for conceptual/method diagrams (captured from Francis's Kimi case-preview screenshots)"
fetched: 2026-09-17
note: "These are prompts Francis had open in a Kimi 'case preview' panel (a figure/diagram generator, distinct from Agent/Agent Swarm). Captured verbatim from the screenshots he shared; NOT from the official help center. Two of the three are truncated where the panel itself cut off the text — marked below."
---

## Pattern: two-stage academic-paper method figure

> Create a 16:9 wide horizontal paper method overview diagram showing how the system learns evidence credibility and locally repairs citations when answering.
>
> Theme: "EVIDENCE CREDIBILITY LEARNING / ANSWERING WITH EVIDENCE CHECKS".
>
> The first stage contains RETRIEVAL TRACE SUMMARY and CROSS-TRACE COMPARISON, showing SPLIT, RETRIEVE, RERANK, CITE, ANSWER as well as SOURCE, TABLE, CAPTION, FOOTNOTE, and summarizing TRUST SIGNALS and MIS-CITATION PATTERNS; the shared area contains EVIDENCE MANAGER, EVIDENCE LIBRARY, MIS-CITATION MANAGER; the second stage must be split into two paths — "Credible → Final Answer" and "Unreliable → Re-Recall → Citation Rewrite → Evidence Check" — with only unreliable fragments entering [cut off in source panel]

## Pattern: single-page four-zone evaluation framework

> Create a single-page landscape evaluation framework diagram at about 16:7, styled as a two-column academic-paper figure. Let it flow from Question Bank through Execution and Scoring to Aggregation.
>
> Question Bank contains question sources, type categories, difficulty tiers, and metadata for every question. Execution contains the evaluated model API, concurrent scheduling, retries, timeouts, and raw-output retention. Scoring has parallel rule-based and model-based paths feeding a consistency-check box; inconsistent samples go to human arbitration by dashed connector. Aggregation covers results by dimension, difficulty tier, and the final leaderboard.

## Pattern: conceptual pipeline diagram with a named title

> Create a 16:9 landscape conceptual method diagram of TFM-Tokenizer, illustrating how single-channel EEG is converted into time–frequency discrete tokens and fed into a Transformer.
>
> Title: "TFM-Tokenizer: EEG Time–Frequency Discretization | Conceptual Example".
>
> The EEG waveform passes sequentially through STFT and overlapping Patching; time-masked input goes into the Temporal Encoder, frequency-band-masked input goes into the Localized Spectral Window Encoder, and the two branches merge into Gated Patchwise Aggregation; this is followed by Quantization to form the Token Vocabulary and EEG-Tokens, with Masked Reconstruction restoring the [cut off in source panel]

## What's common to all three (reusable recipe)

1. State the aspect ratio and page style up front ("16:9 landscape", "single-page ... at about 16:7, styled as a two-column academic-paper figure").
2. Give the diagram a title/theme in quotes.
3. Name every box/stage in full caps or Title Case, in the order they should appear left-to-right or top-to-bottom.
4. Say explicitly which boxes are shared/reused between stages vs. stage-specific.
5. Call out any branching ("split into two paths"), loops ("only unreliable fragments re-enter"), and connector styles ("by dashed connector").

This recipe reproduces directly in the `artifact-diagramming` skill (inline SVG) or the Whiteboard artifact type — no external diagram tool needed. See `../../SKILL.md` for the workflow.
