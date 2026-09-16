# Insurance Account Roster — v1

Built from Insurance_Whitespaces.xlsx (Combined Deals 25-26, 122 rows; CXO Play, 18 accounts).
No separate 45/49-org universe exercise done here yet (unlike A&D) — this roster is
built directly from what's in the deals and CXO data, not a pre-agreed target list.
Recommend a similar tiering exercise (Tier 1 clients / Tier 2 competitive context /
Tier 3 emerging) once priorities are confirmed, the same way A&D was structured.

## Accounts with CXO engagement data (18, from CXO Play tab)

| Account | CXO engagements | Meetings held | Relationship | Sentiment | 2026 deals | 2026 deal value (M€) | 2026 won (M€) |
|---|---|---|---|---|---|---|---|
| Dai-ichi Life Holdings | 8 | 8 | Existing | Engaged, Neutral | 1 | 0.5 | 0 |
| HSBC | 7 | 7 | Existing | Engaged, Excited | 0 | 0 | 0 |
| Zurich Insurance | 7 | 2 | New | Engaged, Neutral | 4 | 39.3 | 34.4 |
| USAA | 4 | 4 | New | Engaged, Neutral | 4 | 6.9 | 5.1 |
| AXA | 3 | 0 | New | — none held | 2 | 2.6 | 0 |
| Allianz | 2 | 2 | Existing | Engaged | 2 | 2.0 | 0 |
| American Family Mutual Insurance (AmFam) | 2 | 0 | New | — none held | 2 | 0.3 | 0 |
| Aviva Group Centre | 2 | 0 | New | — none held | 0 | 0 | 0 |
| BNP Paribas (BNPP) | 2 | 2 | New | Neutral | 0 | 0 | 0 |
| Farmers Insurance | 2 | 0 | New | — none held | 0 | 0 | 0 |
| Howden Group Holdings | 2 | 2 | New | Neutral | 0 | 0 | 0 |
| Liberty Mutual | 2 | 1 | New | Engaged | 2 | 286.4 | 184.2 |
| Munich Re | 2 | 0 | New | — none held | 0 | 0 | 0 |
| The Hartford | 2 | 2 | New | Neutral | 0 | 0 | 0 |
| Hollard Insurance Company | 2 | 2 | Existing | Excited | 1 | 109.8 | 0 |
| Travelers Property Casualty Corp | 2 | 2 | New | Excited | 1 | 14.5 | 14.5 |
| AIG | 1 | 1 | New | Engaged | 0 | 0 | 0 |
| Bupa | 1 | 1 | New | Engaged | 0 | 0 | 0 |

## Entity resolution applied (deals file had inconsistent naming)

| Canonical name | Aliases found in Combined Deals |
|---|---|
| AXA | Axa, AXA |
| Dai-ichi Life Holdings | Dai-ichi Life, Daichi Life |
| Generali | Generali, Generali Seguros y Reaseguros, S.A.U. |
| Protective Life | Protective, Protective Life |
| American Family (AmFam) | AmFam, American Family, AMERICAN FAMILY MUTUAL INSURANCE |
| Allianz | Allianz, Allianz - project Alpha |
| Hollard | Hollard, THE HOLLARD INSURANCE COMPANY PTY LTD |
| Farmers | Farmers, FARMERS INSURANCE |

## Additional accounts with deal activity but no CXO Play row (51, from Combined Deals only)

ART Life, Aflac, Allstate, Americo, Assurant, Axis Capital, Brown & Brown, Chubb,
CNSeg-Fenaprevi, Canada Life, CareSource, Cigna, Confidential (anonymized — cannot
resolve), FNWL, Federated Mutual, Generali, Genworth, Grange Mutual, Green Shield
Holdings, Guardian, HCSC, Hiscox, Horizon, Ilmarinen, Kemper, MCIS, MGIC, Markel,
Marsh & McLennan, MassMutual, Nationwide, New York Life, Northwestern Mutual, OP
Pahjola, Physicians Mutual, Principal Financial, Progressive, Protective Life,
Prudential Financial, Prudential Plc, QBE UK, RBC, RGA, Resolution Life, SURA,
Sentry, Sureify, TAL, Tower Insurance, TruStage, Unum, Viridium Holdings, WTW

These have deal history but no logged CXO engagement in this dataset — worth a
decision on which of these merit the same depth of whitespace research as the
18 CXO-engaged accounts, versus being treated as deal-data-only for now.

## Open items
- No tiering exercise done yet (A&D had a 45-account external-only universe agreed
  with you before research started; Insurance doesn't have this yet).
- "Confidential" client in the deals file cannot be resolved to a real name — excluded
  from any account-level whitespace record.
