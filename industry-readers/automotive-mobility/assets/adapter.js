/* ─────────────────────────────────────────────────────────────────────────
   AUTOMOTIVE INTELLIGENCE PORTAL — adapter.js
   Derived indices only. No content decisions — see data.js / source/*.
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const T = window.AUTO_TRENDS, C = window.AUTO_COMPETITIVE, E = window.AUTO_EMERGING, CO = window.AUTO_COMPANIES;
  if (!T || !C || !E || !CO) return;

  const slugify = s => String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  // A handful of official domains for real logos — not present in the source
  // data, added here only (well-known public companies, low risk). Falls
  // back to colored initials if a domain is missing or the logo 404s.
  const DOMAINS = {
    "Aptiv Services US": "aptiv.com", "BMW": "bmw.com", "Bosch": "bosch.com", "Burelle": "burelle.com",
    "CNH Industrial": "cnh.com", "Daimler Trucks": "daimlertruck.com", "Ferrari": "ferrari.com",
    "Ford": "ford.com", "Geely - Volvo Cars": "geelyauto.com.hk", "Isuzu Motors": "isuzu.com",
    "KAR Auction Services (OPENLANE)": "openlane.com", "Magna International": "magna.com",
    "Maruti Suzuki": "marutisuzuki.com", "Mercedes-Benz": "mercedes-benz.com", "Michelin": "michelin.com",
    "Penske Automotive": "penskeautomotive.com", "Renault": "renaultgroup.com", "Stellantis": "stellantis.com",
    "Subaru": "subaru.com", "Toyota": "toyota.com", "Valeo": "valeo.com", "Volkswagen": "volkswagen.com",
    "Volvo Group": "volvogroup.com",
    "Applied Intuition": "appliedintuition.com", "Wayve": "wayve.ai", "Modular": "modular.com",
    "Ekho": "ekho.com"
  };

  const companies = CO.companies.map(c => ({ ...c, id: slugify(c.display_name), domain: DOMAINS[c.display_name] || null }));
  const companyByName = {};
  companies.forEach(c => { companyByName[c.name] = c; companyByName[c.display_name] = c; });
  const companyById = Object.fromEntries(companies.map(c => [c.id, c]));

  // Every distinct priority tag across trends, companies, emerging players —
  // the single filter vocabulary used everywhere.
  const tagSet = new Set();
  T.trends.forEach(t => (t.priority_tags || []).forEach(x => tagSet.add(x)));
  companies.forEach(c => (c.priority_tags || []).forEach(x => tagSet.add(x)));
  E.emerging_players.forEach(p => (p.priority_tags || []).forEach(x => tagSet.add(x)));
  const priorityTags = [...tagSet].sort();

  const noEvidenceByCompany = {};
  C.per_company_no_evidence_flags.forEach(f => {
    const arr = Array.isArray(f.competitor_with_no_public_signal) ? f.competitor_with_no_public_signal : [f.competitor_with_no_public_signal];
    noEvidenceByCompany[f.company] = arr;
  });

  window.AUTO_DATA = {
    trends: T.trends,
    trendById: Object.fromEntries(T.trends.map(t => [t.id, t])),
    competitiveSummary: C.per_priority_summary,
    competitiveCaveat: C.caveat_required_display,
    noEvidenceFlags: C.per_company_no_evidence_flags,
    noEvidenceByCompany,
    emergingPlayers: E.emerging_players,
    emergingSourceNote: E.source_quality_note,
    companies,
    companyByName,
    companyById,
    priorityTags,
    generated: CO.generated
  };
})();
