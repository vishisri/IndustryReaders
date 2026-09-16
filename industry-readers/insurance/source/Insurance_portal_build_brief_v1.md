# Insurance Industry Intelligence & Whitespace Portal — Build Brief

## Read this first, every session
All research for this pass is done. Do not run web searches, do not re-derive
whitespace findings, do not invent data. The two source files are:
- `Insurance_account_roster_v1.md` — 18 CXO-engaged accounts + 51 deal-only accounts
- `Insurance_whitespace_data_v1.json` — 9 single-client whitespace records + 6 cross-cutting patterns

This dataset was built from an already-rigorous source (Insurance_Whitespaces.xlsx,
with its own documented reconciliation across four source files and openly-flagged
corrections). Preserve that rigor in the UI — don't let a redesign pass smooth over
the honesty this data already has.

## Priority taxonomy — 7 categories, not 8
Insurance uses 7 official priorities: Core Transformation, Distribution Experiences,
Intelligent Operations, Payment Modernization, Service Solutions, Underwriting
Outcomes, and Other. This is a different taxonomy from A&D's 8 — don't merge them
or assume a 1:1 mapping between industries in the UI. Each industry gets its own
priority filter set.

**Important nuance for this industry**: priority tags are the deal's actual recorded
category, which doesn't always match what the deal is conceptually about — e.g.
Allianz's eFNOL (claims) deal is tagged "Service Solutions," and USAA's Claims 2030
deal is tagged "Core Transformation." Don't let the UI imply the taxonomy is a clean
claims/underwriting/payments breakdown — it isn't, and forcing that impression would
misrepresent the data.

## What "Other" hides — don't let this get lost
The "Other" category contains Aflac's Data, Shared Engineering Excellence & Core IT
RFP at EUR72.4M lost — the second-largest lost deal in the whole 2026 book. Surface
this specifically rather than letting "Other" read as a low-priority catch-all bucket
in the UI.

## Site structure — same shape as A&D, adapted
1. **Trends** — macro view from client_signal fields.
2. **Whitespace** — one card per record in `whitespaces`. Priority-first browsing as
   the default, same as A&D. Six accounts here (INS-04, INS-05, INS-07, INS-08) don't
   map cleanly to a single priority category because the actual gap is a type of work
   Capgemini hasn't bid on at all yet — render this as "unresolved / no category" not
   as a data error.
3. **Patterns** — the `cross_cutting_patterns` array, rendered as its own section like
   A&D's. These are structural findings across many clients, not single-account leads
   — don't fold them into individual whitespace cards.
3b. **`middle_tier_fast_pass` accounts** — render these distinctly from the 19 full
   whitespace records. No verdict, no technology gap, no competitor — just the deal
   facts. Don't let the UI imply these have been assessed the same way; a "not yet
   researched" label is more honest than folding them into the Whitespace section
   as if they'd gone through the same process.
4. **Account Explorer** — browse all 69 accounts (18 CXO-engaged + 51 deal-only), with
   the entity-resolution table from the roster surfaced (Axa/AXA, Dai-ichi Life/Daichi
   Life, etc.) so double-counting doesn't creep back in.
5. **Open Items** — surface `coverage_gaps_flagged` (Distribution Experiences has
   almost no data; the Other/Aflac issue; Underwriting Outcomes and Payment
   Modernization both look like pipeline problems, not client-specific gaps) plus the
   51 deal-only accounts with no CXO data, flagged as a decision point rather than
   silently treated as lower priority.

## Content rules (same as A&D, apply identically)
- No scoring, no ranking numbers, no stars.
- No commentary on account relationship health beyond what's factually stated (e.g.
  "zero meetings held against three named contacts" is a fact to state; don't add
  speculation about why).
- Exact asset names only from the Insurance Offers & Assets data (ClaimsIQ, AI-powered
  Underwriting Workbench, Smart Sales Enhancer, etc.) — never paraphrased.
- No marketing language.
- `not_a_whitespace_context_dependent` (Dai-ichi Life, INS-09) needs its own distinct
  visual treatment from a plain `not_a_whitespace` — the point of this record is that
  a churn-looking pattern has a documented, benign explanation. Losing that nuance in
  the UI would misrepresent exactly the account this record exists to get right.

## Status as of this handoff (second pass)
- 19 single-client whitespace records total (9 CXO-engaged accounts + 10 additional
  accounts researched from the deal-only list, prioritized by deal value)
- 19 more accounts (roughly EUR1M-EUR12M each) sit in `middle_tier_fast_pass` with
  internal deal data only, no external research — explicitly not whitespace findings,
  a worklist for a future pass
- Accounts under EUR1M were skipped entirely per your instruction and aren't in the
  data at all
- 7 cross-cutting patterns, including a new one (PATTERN-G): DXC Technology confirmed
  as a named incumbent at two separate accounts (Guardian Life, MassMutual) in this
  batch alone — treat this as a competitor worth tracking across the wider book, not
  a coincidence
- Priority taxonomy confirmed as the 7 real categories from the deals file (corrected
  from an earlier mistaken attempt to use the 9 Offers & Assets product names instead)
- No formal Tier 1/2/3 universe exercise done yet for Insurance (unlike A&D's 49-org
  roster) — worth doing before this dataset is considered final
