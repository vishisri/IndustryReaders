# Auto Portal — Design Guidelines for Claude Code
### Consolidated from the full design conversation. Read this alongside the
### four data files: auto_trends.json, auto_companies.json,
### auto_competitive_signal.json, auto_emerging_players.json.

## What this is
An external-facing, JPMC-analyst-depth account intelligence portal for the
Automotive industry, for EVP/VP/Senior Director audience at Capgemini. Two
uses: quick account lookup before a client meeting, and proactive outreach
triggers (an EVP forwarding a specific finding to an account head).

## Architecture
Static site: plain HTML/CSS/JS reading local JSON files. No backend, no
framework build step, no live data-fetching. This matches the actual update
cadence (periodic research refresh, not real-time).

## Aesthetic direction
- **Premium, must "scream premium at the get go."** This is not a generic
  SaaS dashboard - treat it like a boutique equity-research product.
- **Gradients throughout**, used deliberately, not as decoration on every
  card. Build on the jewel-tone palette already established in the prior
  platform iteration (deep wine/plum/burgundy for primary structure, lighter
  rose/mauve/orchid for the priority-tag dimension) - evolve it, don't
  abandon it, for continuity with what leadership has already seen.
- **Tag-based filtering by priority is required** - every trend, company,
  and emerging player carries `priority_tags`; the UI needs a persistent
  filter mechanism (chips/tags) that narrows the view across all sections,
  not just within one page.
- Avoid generic AI-generated design tells: no tracked-out ALL-CAPS eyebrows
  on every heading, no identical rounded cards with the same soft grey
  shadow, no decorative gradient washes with no structural meaning. Every
  gradient and structural device here should encode something (e.g., a
  gradient intensity or hue shift tied to trend direction or priority,
  not just applied uniformly).

## Information architecture — 3 acts, Act 2 deliberately light
Situation -> Complication -> Resolution narrative arc (Pyramid Principle
applied throughout: headline first, full detail one click away, never
forced).

**Act 1 - Trends (`auto_trends.json`) - TOP QUALITY, high investment**
- Headline layer: one-sentence industry framing + 3-5 trend cards max (this
  dataset has exactly 4: t1, t2, t4, t5 - show all 4, that's within the
  rule-of-5 cap), each with name, one-line so-what, and direction indicator.
- On demand: full evidence (current_readout, financial_reality_check,
  supporting/complicating/contradicting company lists, each linking to that
  company's Act 3 profile).
- End with a bridging line into Act 2.

**Act 2 - Public Competitive Signal (`auto_competitive_signal.json`) - LIGHT, minimal build**
- A simple static per-priority summary (5 rows, from `per_priority_summary`)
  - plain counts, not a grid, not a ranking.
- The caveat text in `caveat_required_display` must be shown prominently,
  once, at the top of this section - not buried, not repeated per row.
- The `per_company_no_evidence_flags` list can render as a simple list
  linking to the relevant company profiles - this is the cheap, honest way
  to make the section feel substantive without building a full matrix.
- No interactivity beyond links through to Act 3. No color-coded grid
  implying a score.

**Act 3 - Account Directory (`auto_companies.json`) - TOP QUALITY, high investment**
- Two equal entry paths: direct search/browse (filterable by priority tag)
  and contextual arrival (clicking through from Act 1 or Act 2 lands
  scrolled to the relevant section of that company's profile).
- Executive summary strip at the top of every profile (always visible):
  latest quarter performance direction, the single most substantive
  leadership quote, competitive exposure status (X of 3 mandatory
  competitors confirmed), and top trend connection.
- Full depth below, organized in this order: Financial Snapshot, Leadership
  Is Saying (all quotes, not just the headline one), Strategic Moves This
  Cycle (financial lens kept explicit), Competitive Landscape (including
  explicit "no evidence found" entries - render these plainly, not as
  failures), Where This Fits (trend connections).
- Closing section: a plain, evidenced statement of any competitive gaps
  found (from the `competitive_landscape` entries with
  `status: "no_evidence_found"`) - factual, no marketing language, no
  pitch. This is what an EVP forwards to an account head.

**Emerging Players (`auto_emerging_players.json`) - separate nav item**
- Not part of the Situation-Complication-Resolution arc - own top-nav
  section. Each entry: core differentiation, traction, and value chain
  impact (exposed entities + specific mechanism, not "could be disrupted").
- Surface the `source_quality_note` here too - sourcing for this section
  was inconsistent in the underlying research and should be flagged, not
  hidden.

## Content rules (carried over from the whole project, still apply)
- No scoring, no ranking, no "top opportunities" list anywhere.
- No commentary on account relationship health.
- Exact figures and quotes as given in the JSON - don't paraphrase numbers.
- No marketing language anywhere, including in the closing "gap" statements.
- Priority tags are multi-value everywhere - a company, trend, or emerging
  player can and should carry more than one tag.
- Distinguish "no_evidence_found" (checked, nothing there - a real finding)
  from missing/null fields (not researched) - never conflate the two in
  the UI.

## What's explicitly out of scope for this build
Sales pitch decks, competitive displacement templates, positioning briefs,
scoring/ranking of any kind - these were evaluated and deliberately not
built into the product (see prior conversation for the full list of
rejected "ideas" from the raw research output).
