/* ─────────────────────────────────────────────────────────────────────────
   INDUSTRY INTELLIGENCE PORTAL — adapter.js (shared, byte-identical across
   every industry). Reads window.RAW_TRENDS / RAW_COMPETITIVE / RAW_COMPANIES
   / RAW_EMERGING (as produced by that industry's data.js) and normalizes
   them into window.AUTO_DATA, the single shape app.js renders. No content
   decisions are made here beyond mechanical derivation — see data.js /
   source/* for the actual research content.
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const T = window.RAW_TRENDS, C = window.RAW_COMPETITIVE, CO = window.RAW_COMPANIES, E = window.RAW_EMERGING;
  if (!C || !CO) return;

  const slugify = s => String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const DOMAINS = window.RAW_LOGO_DOMAINS || {};

  const companies = CO.companies.map(c => {
    const displayName = c.display_name || c.name;
    // Some sources include a filler 4th landscape entry ("no additional
    // named firm found beyond the three mandatory competitors") with
    // competitor:null - real information already implied by the other
    // three entries, not a competitor row itself. Dropped so it doesn't
    // skew the "N of M competitors confirmed" count or render a blank name.
    const landscape = (c.competitive_landscape || []).filter(x => x.competitor);
    const unverifiedCount = landscape.filter(x => x.status === 'unverified_template_pattern').length;
    const out = {
      ...c,
      competitive_landscape: landscape,
      id: slugify(displayName),
      display_name: displayName,
      domain: DOMAINS[displayName] || DOMAINS[c.name] || null,
      needsVerificationBanner: landscape.length > 0 && (unverifiedCount / landscape.length) > 0.5
    };
    // A&D's source shape carries strategic_move and trend_fit as plain
    // prose (a string, and an array of sentence strings respectively)
    // rather than Auto's structured objects. Normalize to the prose
    // fallback fields app.js already renders honestly, rather than letting
    // them render blank against fields that don't exist on a string.
    if (typeof out.strategic_move === 'string') {
      out.strategic_move_text = out.strategic_move;
      out.strategic_move = null;
    }
    if (Array.isArray(out.trend_fit) && out.trend_fit.length && typeof out.trend_fit[0] === 'string') {
      out.trend_connection_text = out.trend_fit.join(' ');
      out.trend_fit = null;
    }
    return out;
  });
  const companyByName = {};
  companies.forEach(c => { companyByName[c.name] = c; companyByName[c.display_name] = c; });
  const companyById = Object.fromEntries(companies.map(c => [c.id, c]));

  // Priority taxonomy: use the industry's own declared official list when
  // present (Banking/Insurance/Telecom/Energy/GPS/Life Sciences all declare
  // one on RAW_COMPANIES.priority_taxonomy); otherwise derive it the way the
  // original Auto build did, by unioning every priority_tags[] found.
  let priorityTags = CO.priority_taxonomy;
  if (!priorityTags || !priorityTags.length) {
    const tagSet = new Set();
    (T && T.trends || []).forEach(t => (t.priority_tags || []).forEach(x => tagSet.add(x)));
    companies.forEach(c => (c.priority_tags || []).forEach(x => tagSet.add(x)));
    (E && E.emerging_players || []).forEach(p => (p.priority_tags || []).forEach(x => tagSet.add(x)));
    priorityTags = [...tagSet].sort();
  }

  // Per-company "no public signal found" flags: use the declared list when
  // the industry's competitive_signal.json provides one (Auto), otherwise
  // derive it from each company's own competitive_landscape — every
  // industry's company records carry this, so this always works.
  let noEvidenceFlags = C.per_company_no_evidence_flags;
  if (!noEvidenceFlags || !noEvidenceFlags.length) {
    noEvidenceFlags = [];
    companies.forEach(c => {
      (c.competitive_landscape || []).forEach(cl => {
        if (cl.status === 'no_evidence_found') {
          noEvidenceFlags.push({ company: c.display_name, competitor_with_no_public_signal: cl.competitor });
        }
      });
    });
  }
  const noEvidenceByCompany = {};
  noEvidenceFlags.forEach(f => {
    const arr = Array.isArray(f.competitor_with_no_public_signal) ? f.competitor_with_no_public_signal : [f.competitor_with_no_public_signal];
    noEvidenceByCompany[f.company] = arr;
  });

  // Trends: three honest depths, not one shape forced onto all of them.
  // 1) Auto/A&D-depth evidence-graded trend cards (id, one_line_so_what,
  //    direction, current_readout, financial_reality_check).
  // 2) A "company roster per priority" synthesis (trend_name/trend_id +
  //    supporting_companies:[{company,justification}]) - real per-company
  //    data, but not evidence-graded the way (1) is, so it renders as a
  //    roster panel, never dressed up as a trend card.
  // 3) A single macro paragraph (macro_trend_seed) when neither exists yet.
  const rawTrends = (T && T.trends) || null;
  const isRoster = !!(rawTrends && rawTrends.length && rawTrends[0].trend_name && !rawTrends[0].one_line_so_what);
  const trends = isRoster ? null : rawTrends;
  // Two roster dialects: Banking-family gives supporting_companies as
  // {company,justification} objects; A&D's gives supports as full sentences
  // ("Company Name: prose evidence..."). Normalize the latter to the former
  // by splitting on the first ": " so both render through one panel.
  const trendRoster = isRoster ? rawTrends.map(t => {
    if (t.supporting_companies) return t;
    const supports = t.supports || [];
    return {
      ...t,
      supporting_companies: supports.map(s => {
        const idx = s.indexOf(': ');
        return idx === -1 ? { company: s, justification: '' } : { company: s.slice(0, idx), justification: s.slice(idx + 2) };
      })
    };
  }) : null;

  // Competitive signal: Auto/Banking-family depth is a per_priority_summary
  // bar-chart dataset. A&D's is a company x priority heatmap + a ranked
  // whitespace table - structurally different, rendered as a table, never
  // forced into the bar-chart shape.
  const signalHeatmap = C.heatmap ? {
    headers: C.heatmap_headers, rows: C.heatmap,
    rankingHeaders: C.ranking_headers, ranking: C.ranking
  } : null;

  // Emerging players: three dialects seen so far. Auto nests
  // exposed_entities[]/mechanism under a value_chain_impact object; A&D
  // puts capability/exposed_entities(a single string)/mechanism flat on the
  // player object; Life Sciences puts the whole thing as one prose string
  // directly on value_chain_impact. Normalize all three into Auto's shape
  // so app.js only ever renders one form.
  const emergingPlayers = ((E && E.emerging_players) || []).map(p => {
    if (p.value_chain_impact && typeof p.value_chain_impact === 'object') return p;
    const core_differentiation = p.core_differentiation || p.capability;
    if (typeof p.value_chain_impact === 'string') {
      return { ...p, core_differentiation, value_chain_impact: { exposed_entities: [], mechanism: p.value_chain_impact } };
    }
    return {
      ...p,
      core_differentiation,
      value_chain_impact: {
        exposed_entities: Array.isArray(p.exposed_entities) ? p.exposed_entities : (p.exposed_entities ? [p.exposed_entities] : []),
        mechanism: p.mechanism || ''
      }
    };
  });

  window.AUTO_DATA = {
    trends,
    trendRoster,
    trendById: Object.fromEntries((trends || []).map(t => [t.id, t])),
    trendNarrative: (T && T.macro_trend_seed) ? { text: T.macro_trend_seed, note: T.note } : null,
    competitiveSummary: C.per_priority_summary || null,
    signalHeatmap,
    competitiveCaveat: C.caveat_required_display || 'Reflects public-source visibility only - not confirmed presence or absence of an actual client engagement.',
    patternsNote: C.patterns_note || null,
    noEvidenceFlags,
    noEvidenceByCompany,
    emergingPlayers,
    emergingSourceNote: (E && (E.source_quality_note || E.source_note)) || '',
    companies,
    companyByName,
    companyById,
    priorityTags,
    generated: CO.generated
  };
})();
