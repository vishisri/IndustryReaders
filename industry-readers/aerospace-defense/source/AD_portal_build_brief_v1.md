# A&D Industry Intelligence & Whitespace Portal — Build Brief for Claude Code

## Read this first, every session
All research is done. **Do not run web searches, do not re-derive whitespace findings, do not invent data.**
Your job is UI, interaction, and data rendering only. The two source files are:
- `AD_account_roster_v1.md` — the 49-organization universe, in three tiers
- `AD_whitespace_data_v1.json` — the 10 researched whitespace records

If a redesign pass makes you want to "improve" or "enrich" a data point, don't — flag it back to the user instead. Every credit spent re-researching is a credit not spent on the interface.

## What the portal is
Three sections, mapped directly to the three account tiers. Not five sections, not a single flat feed.

1. **Trends** — macro view, pulled from Tier 1 client evidence fields across the dataset. This is where "what clients are saying and spending on" lives at a glance.
2. **Whitespace** — the core deliverable. One record per JSON entry, Tier 1 accounts only. Six fields per record, rendered plainly:
   - Theme
   - Client evidence (with source)
   - Capgemini position
   - Competitor position
   - Verdict
   - Matching offer or asset (verbatim from the offers/assets master — never paraphrased or renamed)
3. **Watch List** — Tier 3 (emerging companies) only. Answers one question per entry: what capability/architecture is emerging, and which Tier 1 client could be affected. Not a whitespace format — this is signal-tracking, no verdict field.

Tier 2 organizations do not get their own section. They appear only as named context inside Tier 1 whitespace records (the "competitor position" field) — never as standalone profiles.

## Non-negotiable content rules (already enforced in the data, preserve in the UI)
- **No scoring, no ranking numbers, no stars.** A whitespace either has a verdict (`confirmed_whitespace`, `active_unresolved`, `not_a_whitespace`, `pending_competitor_check`, `confirmed_whitespace_with_caveat`, `confirmed_whitespace_unclaimed`) or it doesn't. Don't add a numeric score on top.
- **No account-relationship commentary.** Never render language about whether an account is "converting," "business-heavy," or under-sponsored. That's not in the data on purpose — don't let a redesign pass reintroduce it.
- **Exact offer/asset names only.** Pull `matching_asset` / `matching_offer` fields verbatim. Never rename, categorize, or "productize" the name for display.
- **No marketing language.** No "unlocking," "leveraging synergies," "game-changing." This is for CXOs and EVPs — plain, declarative sentences only. If a redesign pass generates copy, hold it to this bar.
- **`not_a_whitespace` and `pending_competitor_check` records must render distinctly** from confirmed ones — visually and in wording. AD-05 (Airbus) and AD-09 (L3Harris) exist specifically to prove the method rules things out, not just in. Don't hide them or make them look like failed confirmations.

## Data contract
Every whitespace record has this shape (see JSON for full examples):
```
id, account, theme, client_evidence, client_evidence_source,
capgemini_position, competitor_position, competitor_source,
verdict, matching_asset, notes
```
Some records lack `competitor_source` or have `matching_asset: null` — render these as absent, not as errors. `null` means "none in current portfolio," which is itself a meaningful, displayable fact.

## Roster integration
Every Tier 1 whitespace record's `account` field should be linkable back to its roster entry (alias, sub-entity relationships — e.g., Collins Aerospace and Pratt & Whitney roll up under RTX). Use `AD_account_roster_v1.md` for the canonical name/alias/tier mapping. Do not build a second roster inside the app — read from this file.

## What "redesign" should mean here
When the user asks for a redesign pass, treat it as: change layout, visual hierarchy, navigation, interaction, responsiveness. Not: change what a whitespace says, add new accounts, or run new research. If the user does want new research or new accounts covered, that's a separate ask that goes back through the research process (Claude in chat, not Claude Code) before it becomes new JSON data.

## v2 update — read this before touching anything
The data model changed. Use `AD_whitespace_data_v2.json`, not v1. Key differences:
- Every record is single-client — no more cross-account bundles.
- Every record is tagged to exactly one of 8 official priority categories (`priority_categories` array at the top of the JSON). The portal should be **browsable priority-first**, not just account-first: a GIL or IPL thinks in terms of "where are we on Digital Core / ERP Transformation across all our accounts," not just "what's Boeing's status."
- Each record has a `technology_gap` field — the actual named capability missing, not a generic label. Render this prominently; it's the difference between a sellable lead and an observation.
- `competitor_position` now names specific products/platforms where known (HCLTech Base90, Anduril Lattice, Palantir Gotham/AIP) instead of vague "publishes content" language. Preserve this specificity in the UI — don't summarize a named competitor product down to "a competitor."
- `priority_coverage_summary` and `coverage_gaps_flagged` are new top-level fields — surface both. The gaps (Net Zero & Circular Aviation has zero coverage; Supply Chain Transformation has one) are honest findings, not something to hide because they make the dataset look incomplete.
- `corrections_log` documents two caveats that were wrong in v1 and removed in v2 (Dassault, Embraer). Consider surfacing this in an "About this data" or changelog view — it's a credibility signal, not something to bury.

## Priority-first browsing structure
Add a way to view Whitespace by priority category first, accounts nested under each. The 8 categories should each show: how many accounts have a confirmed whitespace, how many are not-a-whitespace, how many are external-only/unverified, and whether the category has a coverage gap (per `coverage_gaps_flagged`). This is a new primary lens alongside the existing account-first Whitespace view — both should exist, priority-first should be the default landing view within the Whitespace section.

Several records carry `confirmed_whitespace_with_caveat` specifically because the client is building the capability in-house or via a boutique partner rather than buying it from any SI. Render this distinctly from a normal confirmed whitespace — e.g. a visible tag or note reading "insourcing risk" — because the sales motion for these is different (make the case against building it internally, not displace a competitor). Records with this pattern: AD-04 (Boeing), AD-08 (Dassault), AD-09 (L3Harris), AD-13 (Embraer), AD-18 (Huntington Ingalls, external-only), AD-21 (DGAC, external-only). This is called out explicitly in `cross_cutting_observations` — surface that section prominently in the Trends view, not buried at the bottom of a JSON file.

## New verdict types added in this pass
- `external_signal_only_no_internal_check` — accounts with no workbook data (MTU, RUAG, HII, ESA, HENSOLDT, DGAC). Render these clearly as incomplete, not as confirmed gaps. A "confirm relationship status" call-to-action is more honest than a verdict badge here.
- `not_a_whitespace_relationship_may_already_exist` — CNES only, for now. This is a data-integrity flag, not a sales lead. Render with a distinct warning treatment ("workbook shows no relationship, but external sources report one — verify before using") rather than folding it into either the whitespace or non-whitespace buckets.

## Status as of this handoff
- **v2 dataset**: 25 whitespace records across 24 Tier 1 accounts (Thales has two, under different priorities), every record single-client and priority-tagged
- 2 caveats corrected from v1 after re-verification (see corrections_log in the JSON)
- 2 priority-category coverage gaps flagged honestly rather than papered over
- 49-account roster finalized across 3 tiers (see `AD_account_roster_v1.md`)
- Insurance industry: not started — will follow the same v2-depth process, separate data file, once A&D portal is built and reviewed
