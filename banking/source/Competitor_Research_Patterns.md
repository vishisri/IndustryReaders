# Cross-Cutting Patterns — Competitor Re-Verification Pass
### Findings that matter beyond the individual company record they came from.

## PATTERN 1: Top-tier US/UK institutions increasingly go direct to hyperscalers/fintechs, bypassing the three mandatory SIs
Barclays, Goldman Sachs, and Morgan Stanley all show genuine (verified, not under-researched)
absence of TCS/IBM/Accenture in their named public technology partnerships. Instead:
- **Barclays**: names AWS, Microsoft, GitLab, and Databricks explicitly in its own 2025 Form 20-F
  as its technology partners.
- **Goldman Sachs**: named partnerships are with AWS, Volante Technologies, STOXX, Derivative Path,
  Marqeta, Modern Treasury - fintech/hyperscaler-specific, not traditional SI relationships.
- **Morgan Stanley**: similar pattern - long-standing "technology innovator" partnerships, not
  publicly tied to the three mandatory SIs.

**Why this matters**: this isn't a research gap - it's the same "insourcing/direct-to-hyperscaler"
pattern seen in A&D (Boeing, Dassault) and Auto, now showing up in Banking's most sophisticated,
best-resourced institutions. The largest, most technologically advanced banks may be the hardest
market to win via traditional SI relationships - they have the scale and capital to go direct.
Worth flagging to whoever reviews this: the "whitespace," if any, at these institutions is
probably not "beat TCS/IBM/Accenture," it's "displace AWS/Databricks as the primary technology
partner," which is a different and harder pitch entirely.

## PATTERN 2 (from earlier in this project, restated for continuity): entrenched incumbents show up repeatedly
DXC Technology appeared as a named, confirmed incumbent at two separate A&D accounts (Guardian
Life, MassMutual) - see AD2 dataset PATTERN-G. Watching for whether a similar repeat-incumbent
signal emerges in Banking/Insurance/Telecom as this pass continues.

## PATTERN 3: real competitive displacement events exist and are worth surfacing distinctly
RBC Canada: TCS lost a 20-year IT services engagement to Accenture in 2026, with 150 employees
rebadged. This is a different kind of finding than "confirmed" or "no evidence found" - it's a
recent, dated competitive win/loss. Worth a distinct status tag (e.g., `competitive_displacement`)
in the final schema rather than folding it into a plain "confirmed" status for the winning firm.

## PATTERN 4: Sponsorship/brand partnerships are not technology engagements - don't conflate them
AIG's only surfaced Accenture connection is Accenture being named "Official Business and
Technology Consulting Partner" of the AIG Women's Open golf tournament - a sponsorship/brand
deal, not evidence of an actual delivery engagement. Tagged `confirmed_but_weak` rather than
`confirmed` for this reason. Worth a standing rule: a named sponsorship or event partnership
should never be presented with the same confidence as a technology delivery contract, even
though both technically involve the company name appearing next to a competitor's.

## PATTERN 5: B3i blockchain consortium ties Allianz, AXA, and Zurich to TCS simultaneously
All three top European insurers show the same TCS connection - shareholder/participant status
in the B3i blockchain insurance consortium, which TCS partnered with. This is a real but dated
(~2016-era) and shared/diffuse relationship - TCS's connection is to the consortium, not a
bespoke engagement with any single insurer. Tagged `confirmed_but_dated` for all three rather
than treated as three independent findings.

## PATTERN 6: Asia-focused insurers partner with regional tech giants, not Western SIs
Prudential plc names Alibaba Cloud as a tech partner; Manulife works with Ant Health. Neither
names TCS/IBM/Accenture. Consistent with a broader signal: in Asia specifically, the competitive
set for winning insurance tech work may be Alibaba/Ant/Tencent-class players, not the three
mandatory Western SIs - worth knowing before treating "no evidence found" at Asia-focused
carriers as equivalent to a US/Europe carrier's "no evidence found."

---
*This file will be updated as the Insurance and Telecom passes surface their own patterns.*
