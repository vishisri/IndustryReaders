/* ─────────────────────────────────────────────────────────────────────────
   A&D WHITESPACE PORTAL — adapter.js (v2)
   Entity resolution (whitespace.account -> roster canonical org) and derived
   indices only. No content decisions — see data.js / source/*.
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const W = window.AD_WHITESPACE;
  const R = window.AD_ROSTER;
  if (!W || !R) return;

  const tier1ByName = Object.fromEntries(R.tier1.map(o => [o.name, o]));

  // Whitespace `account` strings don't always match a roster name 1:1 — some
  // are aliases (Dassault -> Dassault Group), abbreviations (CNES), or
  // multi-entity labels (RTX / Pratt & Whitney). Explicit, auditable table —
  // no fuzzy matching, so a new record needing a new entry here is obvious.
  const ACCOUNT_RESOLUTION = {
    "Boeing": ["Boeing"], "GE Aerospace": ["GE Aerospace"], "Honeywell": ["Honeywell"],
    "Thales": ["Thales"], "RTX / Pratt & Whitney": ["RTX", "Pratt & Whitney"],
    "MTU Aero Engines": ["MTU Aero Engines"], "Collins Aerospace": ["Collins Aerospace"],
    "L3Harris": ["L3Harris Technologies"], "Leonardo": ["Leonardo"], "Naval Group": ["Naval Group"],
    "Embraer": ["Embraer"], "Dassault": ["Dassault Group"], "BAE Systems": ["BAE Systems"],
    "RUAG International": ["RUAG International"], "Huntington Ingalls Industries": ["Huntington Ingalls Industries"],
    "HENSOLDT": ["HENSOLDT"], "Airbus": ["Airbus"], "AWE plc": ["AWE plc"], "DGAC": ["DGAC"],
    "European Space Agency": ["European Space Agency"],
    "Centre National d'Etudes Spatiales (CNES)": ["Centre National d'Études Spatiales"],
    "Safran": ["Safran"], "Rolls-Royce": ["Rolls-Royce"]
  };

  const whitespaces = W.whitespaces.map(ws => ({ ...ws, resolvedAccounts: ACCOUNT_RESOLUTION[ws.account] || [] }));

  const whitespaceIdsByAccount = {};
  whitespaces.forEach(ws => ws.resolvedAccounts.forEach(name => {
    (whitespaceIdsByAccount[name] = whitespaceIdsByAccount[name] || []).push(ws.id);
  }));

  const VERDICT_META = {
    confirmed_whitespace: { label: "Confirmed whitespace", kind: "positive" },
    confirmed_whitespace_with_caveat: { label: "Confirmed whitespace — insourcing risk", kind: "caveat" },
    confirmed_whitespace_unclaimed: { label: "Confirmed whitespace — unclaimed", kind: "unclaimed" },
    confirmed_whitespace_cross_industry: { label: "Confirmed whitespace — wrong industry", kind: "cross-industry" },
    active_unresolved: { label: "Active, unresolved pursuit", kind: "active" },
    not_a_whitespace: { label: "Not a whitespace", kind: "not-whitespace" },
    not_a_whitespace_at_flagship_level: { label: "Not a whitespace at flagship level", kind: "not-whitespace" },
    external_signal_only_no_internal_check: { label: "Unverified — external signal only", kind: "unverified" },
    not_a_whitespace_relationship_may_already_exist: { label: "Data-integrity flag", kind: "flag" }
  };

  // Priority-first index: category -> { accounts: [...whitespace ids grouped], counts }
  const priorityIndex = {};
  W.priority_categories.forEach(cat => { priorityIndex[cat] = { records: [], counts: { confirmed: 0, notWhitespace: 0, unverified: 0, other: 0 } }; });
  const OTHER_CAT = "Other / uncategorized";
  priorityIndex[OTHER_CAT] = { records: [], counts: { confirmed: 0, notWhitespace: 0, unverified: 0, other: 0 } };

  whitespaces.forEach(ws => {
    const cat = W.priority_categories.includes(ws.priority_category) ? ws.priority_category : OTHER_CAT;
    const bucket = priorityIndex[cat];
    bucket.records.push(ws);
    const m = VERDICT_META[ws.verdict];
    if (!m) { bucket.counts.other++; }
    else if (m.kind === 'positive' || m.kind === 'caveat' || m.kind === 'unclaimed' || m.kind === 'cross-industry') bucket.counts.confirmed++;
    else if (m.kind === 'not-whitespace') bucket.counts.notWhitespace++;
    else if (m.kind === 'unverified' || m.kind === 'flag') bucket.counts.unverified++;
    else bucket.counts.other++;
  });

  window.AD_DATA = {
    meta: { industry: W.industry, generated: W.generated, methodologyNote: W.methodology_note },
    whitespaces,
    whitespaceById: Object.fromEntries(whitespaces.map(w => [w.id, w])),
    whitespaceIdsByAccount,
    verdictMeta: VERDICT_META,
    priorityCategories: W.priority_categories,
    priorityCoverageSummary: W.priority_coverage_summary,
    coverageGapsFlagged: W.coverage_gaps_flagged,
    correctionsLog: W.corrections_log,
    priorityIndex,
    otherCategoryLabel: OTHER_CAT,
    crossCuttingObservations: W.cross_cutting_observations,
    roster: R,
    tier1ByName,
    watchlist: window.AD_WATCHLIST || [],
    industryTrends: window.AD_INDUSTRY_TRENDS || []
  };
})();
