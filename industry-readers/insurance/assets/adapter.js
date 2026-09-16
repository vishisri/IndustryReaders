/* ─────────────────────────────────────────────────────────────────────────
   INSURANCE WHITESPACE PORTAL — adapter.js
   Domain lookup + derived indices only. No content decisions — see data.js.
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const W = window.INS_WHITESPACE;
  const R = window.INS_ROSTER;
  if (!W || !R) return;

  const cxoByName = Object.fromEntries(R.cxoEngaged.map(o => [o.name, o]));

  // A few whitespace/account labels don't exactly match a roster key (the
  // deal-only list uses shorter names than the whitespace record's account
  // field) — explicit overrides, same auditable pattern as A&D's adapter.
  const DOMAIN_OVERRIDES = {
    "Guardian Life": "guardianlife.com",
    "Horizon (Blue Cross Blue Shield of New Jersey)": "horizonblue.com",
    "Dai-ichi Life Holdings": "dai-ichi-life.com"
  };
  function domainFor(account) {
    if (DOMAIN_OVERRIDES[account]) return DOMAIN_OVERRIDES[account];
    if (cxoByName[account]) return cxoByName[account].domain;
    if (R.dealOnlyDomains[account]) return R.dealOnlyDomains[account];
    return null;
  }

  const VERDICT_META = {
    confirmed_whitespace: { label: "Confirmed whitespace", kind: "positive" },
    confirmed_whitespace_with_caveat: { label: "Confirmed whitespace — insourcing risk", kind: "caveat" },
    not_a_whitespace: { label: "Not a whitespace", kind: "not-whitespace" },
    not_a_whitespace_context_dependent: { label: "Not a whitespace — context explains it", kind: "context" },
    external_signal_only_no_internal_check: { label: "Unverified — external signal only", kind: "unverified" }
  };

  const whitespaces = W.whitespaces.map(w => ({ ...w, domain: domainFor(w.account) }));
  const whitespaceIdsByAccount = {};
  whitespaces.forEach(w => (whitespaceIdsByAccount[w.account] = whitespaceIdsByAccount[w.account] || []).push(w.id));

  const OTHER_CAT = "Unresolved / no category";
  const priorityIndex = {};
  W.priority_categories.forEach(cat => { priorityIndex[cat] = { records: [], counts: { confirmed: 0, notWhitespace: 0, unverified: 0, other: 0 } }; });
  priorityIndex[OTHER_CAT] = { records: [], counts: { confirmed: 0, notWhitespace: 0, unverified: 0, other: 0 } };

  whitespaces.forEach(w => {
    const cat = W.priority_categories.includes(w.priority_category) ? w.priority_category : OTHER_CAT;
    const bucket = priorityIndex[cat];
    bucket.records.push(w);
    const m = VERDICT_META[w.verdict];
    if (!m) bucket.counts.other++;
    else if (m.kind === 'positive' || m.kind === 'caveat') bucket.counts.confirmed++;
    else if (m.kind === 'not-whitespace' || m.kind === 'context') bucket.counts.notWhitespace++;
    else if (m.kind === 'unverified') bucket.counts.unverified++;
    else bucket.counts.other++;
  });

  window.INS_DATA = {
    meta: { industry: W.industry, generated: W.generated, methodologyNote: W.methodology_note },
    whitespaces,
    whitespaceById: Object.fromEntries(whitespaces.map(w => [w.id, w])),
    whitespaceIdsByAccount,
    verdictMeta: VERDICT_META,
    priorityCategories: W.priority_categories,
    priorityCoverageSummary: W.priority_coverage_summary,
    coverageGapsFlagged: W.coverage_gaps_flagged,
    priorityIndex,
    otherCategoryLabel: OTHER_CAT,
    crossCuttingPatterns: W.cross_cutting_patterns,
    middleTierFastPass: W.middle_tier_fast_pass,
    roster: R,
    domainFor
  };
})();
