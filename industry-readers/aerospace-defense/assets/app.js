/* ─────────────────────────────────────────────────────────────────────────
   A&D INDUSTRY INTELLIGENCE & WHITESPACE PORTAL · app.js (v2)
   Trends, Whitespace (priority-first + account-first), Watch List, Accounts,
   Open Items, Patterns. Content from data.js — this file is rendering only.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';

(function () {
  const D = window.AD_DATA;
  if (!D) { document.getElementById('main-content').textContent = 'Data failed to load.'; return; }

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const el = (tag, cls, attrs = {}) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    Object.entries(attrs).forEach(([k, v]) => { if (k === 'html') e.innerHTML = v; else if (k === 'text') e.textContent = v; else e.setAttribute(k, v); });
    return e;
  };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  const fmtDate = s => { try { const d = new Date(s + 'T00:00:00'); return isNaN(d) ? s : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return s; } };
  const initials = name => {
    const words = String(name).replace(/\(.*?\)/g, '').trim().split(/\s+/).filter(Boolean);
    if (!words.length) return '?';
    return words.length === 1 ? words[0].slice(0, 2).toUpperCase() : (words[0][0] + words[1][0]).toUpperCase();
  };
  const orgColor = name => {
    const palette = ['#7c2d4a', '#6b3fa0', '#b8336a', '#9c4f96', '#4a2545', '#a8557a', '#5c3566', '#8e2954'];
    let h = 0; for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return palette[h % palette.length];
  };
  // Real company logo via a public logo lookup, keyed by domain from the
  // roster — falls back to a same-size colored-initials tile if the domain
  // is unknown or the image fails to load, so a bad logo never leaves a gap.
  function logoHtml(name, size = 30) {
    const domain = (D.tier1ByName[name] && D.tier1ByName[name].domain) ||
      (D.roster.tier3.find(o => o.name === name) || {}).domain;
    const color = orgColor(name);
    const fbFont = Math.round(size * 0.36);
    const fallback = `this.outerHTML='<span class=\\'logo-fallback\\' style=\\'width:${size}px;height:${size}px;line-height:${size}px;background:${color};font-size:${fbFont}px\\'>${esc(initials(name))}</span>'`;
    if (!domain) return `<span class="logo-fallback" style="width:${size}px;height:${size}px;line-height:${size}px;background:${color};font-size:${fbFont}px">${esc(initials(name))}</span>`;
    return `<img class="logo-img" src="https://logo.clearbit.com/${domain}?size=128" alt="" width="${size}" height="${size}" loading="lazy" onerror="${fallback}">`;
  }

  const page = document.body.dataset.page || 'trends';
  if (page === 'trends') renderTrends();
  if (page === 'whitespace') renderWhitespace();
  if (page === 'watchlist') renderWatchlist();
  if (page === 'accounts') renderAccounts();
  if (page === 'open-items') renderOpenItems();
  if (page === 'patterns') renderPatterns();

  /* ════════════════════════════════════════════════════════════════════════ TRENDS */
  function renderTrends() {
    const main = $('#main-content');
    const confirmedCount = D.whitespaces.filter(w => (D.verdictMeta[w.verdict] || {}).kind === 'positive' || (D.verdictMeta[w.verdict] || {}).kind === 'caveat' || (D.verdictMeta[w.verdict] || {}).kind === 'unclaimed').length;

    const hero = el('section', 'hero');
    hero.innerHTML = `
      <div class="hero-badge">A&D Industry Intelligence</div>
      <h1 class="hero-heading">Trends</h1>
      <p class="hero-sub">What's changing across the industry, and what specific clients are telling us they're funding right now. A fast skim — for the full account-by-account analysis, see Whitespace.</p>
      <div class="hero-meta">
        <span class="hero-meta-item">${D.industryTrends.length} industry trends</span>
        <span class="hero-meta-sep">·</span>
        <span class="hero-meta-item">${D.whitespaces.length} client signals</span>
        <span class="hero-meta-sep">·</span>
        <span class="hero-meta-item">Updated ${fmtDate(D.meta.generated)}</span>
      </div>`;
    main.appendChild(hero);

    const stats = el('div', 'stats-strip');
    stats.innerHTML = `<div class="stats-inner">${[
      { v: D.roster.tier1.length, l: 'Tier 1 accounts' },
      { v: confirmedCount, l: 'Confirmed whitespaces' },
      { v: D.watchlist.length, l: 'Emerging players tracked' },
      { v: D.roster.total, l: 'Organizations in scope' },
    ].map(s => `<div class="stat-item"><span class="stat-value">${s.v}</span><span class="stat-label">${s.l}</span></div>`).join('')}</div>`;
    main.appendChild(stats);

    // Cross-cutting callout — surfaced here per the brief, not buried on Patterns alone
    const callout = el('div', 'section'); callout.style.padding = '0 24px 8px';
    callout.innerHTML = `
      <div class="callout-card">
        <div class="callout-label">Cross-cutting signal</div>
        <p>${esc(D.crossCuttingObservations[0])}</p>
        <a class="section-link" href="patterns.html">All patterns →</a>
      </div>`;
    main.appendChild(callout);
    main.appendChild(el('hr', 'divider'));

    const indSection = el('div', 'section');
    indSection.innerHTML = `<div class="section-header"><h2 class="section-title">Industry trends</h2></div><div class="trend-source-label">MBB · Big 4 · regulatory filings · earnings calls</div>`;
    const indFeed = el('div', 'intel-feed');
    D.industryTrends.forEach(t => {
      const card = el('div', 'intel-card');
      card.innerHTML = `
        <div class="intel-card-meta"><span class="intel-type">Trend</span><span class="intel-date">${fmtDate(t.date)}</span></div>
        <button class="intel-expand-btn" aria-label="Expand">+ Sources</button>
        <h3 class="intel-title">${esc(t.name)}</h3>
        <p class="intel-summary">${esc(t.summary)}</p>
        <div class="intel-key-facts"><div class="intel-facts-title">Sources</div><ul class="intel-facts-list">${t.sources.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>`;
      const btn = card.querySelector('.intel-expand-btn');
      card.addEventListener('click', e => { if (e.target === btn || btn.contains(e.target)) { const open = card.classList.toggle('expanded'); btn.textContent = open ? '− Collapse' : '+ Sources'; } });
      indFeed.appendChild(card);
    });
    indSection.appendChild(indFeed);
    main.appendChild(indSection);
    main.appendChild(el('hr', 'divider'));

    const sigSection = el('div', 'section');
    sigSection.innerHTML = `<div class="section-header"><h2 class="section-title">What clients are telling us</h2></div><div class="trend-source-label">Client evidence from the A&D whitespace research — full analysis in Whitespace</div>`;
    const sigList = el('div', 'client-signal-list');
    D.whitespaces.forEach(w => {
      const card = el('div', 'client-signal-card');
      card.innerHTML = `
        <div class="client-signal-head">${logoHtml(w.account, 22)}<span class="client-signal-account">${esc(w.account)}</span><span class="client-signal-theme">${esc(w.priority_category)}</span></div>
        <p class="client-signal-evidence">${esc(w.client_signal)}</p>
        ${w.client_signal_source ? `<div class="client-signal-source">${esc(w.client_signal_source)}</div>` : ''}`;
      card.addEventListener('click', () => { window.location.href = `whitespace.html?rec=${w.id}#${w.id}`; });
      sigList.appendChild(card);
    });
    sigSection.appendChild(sigList);
    main.appendChild(sigSection);
  }

  /* ════════════════════════════════════════════════════════════════════════ WHITESPACE */
  function renderWhitespace() {
    const main = $('#main-content');
    main.appendChild(el('div', 'page-header', { html: `
      <div class="page-eyebrow">Core deliverable</div>
      <h1 class="page-title">Whitespace</h1>
      <p class="page-sub">${D.whitespaces.length} Tier 1 account records. Every card follows the same method: client signal, Capgemini's current position, the named technology gap, competitor position, verdict, and the recommended plug — pulled verbatim from the portfolio, or "none confirmed" where that's the honest answer.</p>
    `}));

    const body = el('div', 'section'); body.style.paddingTop = '8px';

    const viewToggle = el('div', 'view-toggle');
    viewToggle.innerHTML = `
      <button class="view-toggle-btn active" data-view="priority">By priority</button>
      <button class="view-toggle-btn" data-view="account">By account</button>`;
    body.appendChild(viewToggle);

    const priorityView = el('div', 'priority-view');
    const accountView = el('div', 'account-view hidden');
    body.appendChild(priorityView);
    body.appendChild(accountView);
    main.appendChild(body);

    buildPriorityView(priorityView);
    buildAccountView(accountView);

    viewToggle.addEventListener('click', e => {
      const btn = e.target.closest('.view-toggle-btn'); if (!btn) return;
      $$('.view-toggle-btn', viewToggle).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const isPriority = btn.dataset.view === 'priority';
      priorityView.classList.toggle('hidden', !isPriority);
      accountView.classList.toggle('hidden', isPriority);
    });

    // Deep link from Trends / search
    const params = new URLSearchParams(location.search);
    const targetId = params.get('rec') || location.hash.slice(1);
    if (targetId) {
      // Deep links land on the account-first view since that's a flat list.
      viewToggle.querySelector('[data-view="account"]').click();
      setTimeout(() => { const t = $(`#${targetId}`, accountView); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 50);
    }
  }

  function buildPriorityView(container) {
    const allCats = [...D.priorityCategories, D.otherCategoryLabel];
    allCats.forEach(cat => {
      const bucket = D.priorityIndex[cat];
      if (!bucket || !bucket.records.length) {
        // Still show zero-coverage categories (e.g. Net Zero) — the gap is the point.
        if (D.priorityCategories.includes(cat)) container.appendChild(buildPriorityGroup(cat, { records: [], counts: { confirmed: 0, notWhitespace: 0, unverified: 0, other: 0 } }));
        return;
      }
      container.appendChild(buildPriorityGroup(cat, bucket));
    });
  }

  function buildPriorityGroup(cat, bucket) {
    const gapText = D.coverageGapsFlagged.find(g => g.startsWith(cat) || g.includes(`"${cat}"`) || g.includes(cat));
    const group = el('div', 'priority-group');
    group.innerHTML = `
      <button class="priority-group-head" type="button">
        <span class="priority-group-name">${esc(cat)}</span>
        <span class="priority-group-counts">
          ${bucket.counts.confirmed ? `<span class="pg-count pg-confirmed">${bucket.counts.confirmed} confirmed</span>` : ''}
          ${bucket.counts.notWhitespace ? `<span class="pg-count pg-not">${bucket.counts.notWhitespace} not a whitespace</span>` : ''}
          ${bucket.counts.unverified ? `<span class="pg-count pg-unverified">${bucket.counts.unverified} unverified</span>` : ''}
          ${!bucket.records.length ? `<span class="pg-count pg-gap">Coverage gap</span>` : ''}
        </span>
        <span class="priority-group-chevron">▾</span>
      </button>
      <div class="priority-group-body ${bucket.records.length ? '' : 'hidden'}">
        ${gapText ? `<div class="coverage-gap-note">${esc(gapText)}</div>` : (!bucket.records.length ? `<div class="coverage-gap-note">No accounts researched in this priority category this pass.</div>` : '')}
        <div class="whitespace-list" id="pg-list"></div>
      </div>`;
    const listEl = group.querySelector('#pg-list');
    listEl.removeAttribute('id');
    bucket.records.forEach(w => listEl.appendChild(buildWhitespaceCard(w, true)));
    const head = group.querySelector('.priority-group-head');
    const bodyEl = group.querySelector('.priority-group-body');
    head.addEventListener('click', () => {
      bodyEl.classList.toggle('hidden');
      group.querySelector('.priority-group-chevron').textContent = bodyEl.classList.contains('hidden') ? '▾' : '▴';
    });
    if (!bucket.records.length) group.classList.add('priority-group-empty');
    return group;
  }

  function buildAccountView(container) {
    const filterBar = el('div', 'whitespace-filter-bar');
    const accountOptions = [...new Set(D.whitespaces.map(w => w.account))].sort();
    const verdictOptions = Object.entries(D.verdictMeta);
    filterBar.innerHTML = `
      <div class="whitespace-filter-group">
        <span class="whitespace-filter-group-label">Account</span>
        <select class="filter-btn" id="ws-filter-account"><option value="">All accounts</option>${accountOptions.map(a => `<option value="${esc(a)}">${esc(a)}</option>`).join('')}</select>
      </div>
      <div class="whitespace-filter-group">
        <span class="whitespace-filter-group-label">Verdict</span>
        <div class="companies-filter-bar" id="ws-filter-verdict" style="margin:0;">
          <button class="filter-btn active" data-verdict="">All verdicts</button>
          ${verdictOptions.map(([k, m]) => `<button class="filter-btn" data-verdict="${k}">${esc(m.label)}</button>`).join('')}
        </div>
      </div>`;
    container.appendChild(filterBar);
    const list = el('div', 'whitespace-list');
    D.whitespaces.forEach(w => list.appendChild(buildWhitespaceCard(w)));
    container.appendChild(list);

    let activeAccount = '', activeVerdict = '';
    function applyFilters() {
      $$('.whitespace-card', list).forEach(card => {
        const matchAcct = !activeAccount || card.dataset.account === activeAccount;
        const matchVerdict = !activeVerdict || card.dataset.verdict === activeVerdict;
        card.classList.toggle('hidden', !(matchAcct && matchVerdict));
      });
    }
    $('#ws-filter-account', filterBar).addEventListener('change', e => { activeAccount = e.target.value; applyFilters(); });
    $('#ws-filter-verdict', filterBar).addEventListener('click', e => {
      const btn = e.target.closest('button'); if (!btn) return;
      $$('button', $('#ws-filter-verdict', filterBar)).forEach(b => b.classList.remove('active'));
      btn.classList.add('active'); activeVerdict = btn.dataset.verdict; applyFilters();
    });
  }

  function verdictBadgeHtml(verdict) {
    const m = D.verdictMeta[verdict]; if (!m) return '';
    const kindClass = { positive: 'v-positive', caveat: 'v-caveat', unclaimed: 'v-unclaimed', 'cross-industry': 'v-cross-industry', active: 'v-active', 'not-whitespace': 'v-not-whitespace', unverified: 'v-unverified', flag: 'v-flag' }[m.kind] || '';
    return `<span class="verdict-badge ${kindClass}">${esc(m.label)}</span>`;
  }

  function buildWhitespaceCard(w, compact) {
    const m = D.verdictMeta[w.verdict] || {};
    const card = el('div', `whitespace-card${m.kind === 'flag' ? ' wc-flag' : ''}${m.kind === 'not-whitespace' ? ' wc-not-whitespace' : ''}${compact ? ' wc-compact' : ''}`);
    card.dataset.account = w.account; card.dataset.verdict = w.verdict; card.dataset.id = w.id; card.id = w.id;

    const plugHtml = w.recommended_plug ? `<span class="whitespace-asset-name">${esc(w.recommended_plug)}</span>` : `<span class="whitespace-asset-none">None confirmed</span>`;
    const extraTags = [];
    if (m.kind === 'caveat') extraTags.push(`<span class="tag-inline tag-insourcing">Insourcing risk</span>`);
    if (m.kind === 'unverified') extraTags.push(`<span class="tag-inline tag-unverified">Unverified</span>`);
    if (m.kind === 'cross-industry') extraTags.push(`<span class="tag-inline tag-crossindustry">Route to Energy & Utilities</span>`);

    card.innerHTML = `
      <div class="whitespace-card-head">
        ${logoHtml(w.account, 30)}
        <span class="whitespace-id">${esc(w.id)}</span>
        <span class="whitespace-account">${esc(w.account)}</span>
        ${verdictBadgeHtml(w.verdict)}
        ${extraTags.join('')}
      </div>
      <p class="whitespace-theme">${esc(w.priority_category)}</p>
      <div class="whitespace-fields">
        <div class="whitespace-field"><span class="whitespace-field-label">Client signal</span><div class="whitespace-field-body">${esc(w.client_signal)}</div>${w.client_signal_source ? `<div class="whitespace-field-source">${esc(w.client_signal_source)}</div>` : ''}</div>
        <div class="whitespace-field"><span class="whitespace-field-label">Capgemini position</span><div class="whitespace-field-body">${esc(w.capgemini_position)}</div></div>
        <div class="whitespace-field whitespace-field-gap"><span class="whitespace-field-label">Technology gap</span><div class="whitespace-field-body">${esc(w.technology_gap)}</div></div>
        <div class="whitespace-field"><span class="whitespace-field-label">Competitor position</span><div class="whitespace-field-body">${esc(w.competitor_position || 'Not researched.')}</div>${w.competitor_source ? `<div class="whitespace-field-source">${esc(w.competitor_source)}</div>` : ''}</div>
        <div class="whitespace-field"><span class="whitespace-field-label">Verdict</span><div class="whitespace-field-body">${verdictBadgeHtml(w.verdict)}</div></div>
        <div class="whitespace-field"><span class="whitespace-field-label">Recommended plug</span><div class="whitespace-field-body">${plugHtml}</div></div>
      </div>
      ${w.notes ? `<div class="whitespace-note">${esc(w.notes)}</div>` : ''}
      ${m.kind === 'flag' ? `<div class="whitespace-warning-box">Workbook shows no relationship, but an external source reports one already exists. Confirm with the account team before treating this as a whitespace.</div>` : ''}
      ${m.kind === 'unverified' ? `<div class="whitespace-cta">No internal check has been run for this account. Next step: confirm relationship status with the account team — not a verdict yet.</div>` : ''}`;
    return card;
  }

  /* ════════════════════════════════════════════════════════════════════════ WATCH LIST */
  function renderWatchlist() {
    const main = $('#main-content');
    main.appendChild(el('div', 'page-header', { html: `
      <div class="page-eyebrow">Tier 3 · signal tracking, not whitespace</div>
      <h1 class="page-title">Watch List</h1>
      <p class="page-sub">Emerging companies reshaping A&D from outside the traditional prime/SI structure. Each entry is a capability signal, not a client relationship — no verdict, no Capgemini position. Where relevant, linked to the Tier 1 account it could affect.</p>
    `}));
    const body = el('div', 'section'); body.style.paddingTop = '8px';
    const grid = el('div', 'watch-grid');
    D.watchlist.forEach(item => {
      const card = el('div', 'watch-card');
      const wsIds = item.affects ? (D.whitespaceIdsByAccount[item.affects] || []) : [];
      card.innerHTML = `
        <div class="watch-org">${logoHtml(item.org, 26)} ${esc(item.org)}</div>
        <p class="watch-signal">${esc(item.signal)}</p>
        <div class="watch-affects">
          <span class="watch-affects-label">Could affect</span>
          ${item.affects ? (wsIds.length ? `<span class="watch-affects-link" data-account="${esc(item.affects)}">${esc(item.affects)}</span>` : `<span>${esc(item.affects)}</span>`) : `<span class="watch-affects-none">No direct Tier 1 overlap identified</span>`}
        </div>
        ${item.affectsNote ? `<div class="watch-affects-note">${esc(item.affectsNote)}</div>` : ''}`;
      const link = card.querySelector('.watch-affects-link');
      if (link) link.addEventListener('click', () => { window.location.href = `whitespace.html?rec=${D.whitespaceIdsByAccount[item.affects][0]}`; });
      grid.appendChild(card);
    });
    body.appendChild(grid);
    main.appendChild(body);
  }

  /* ════════════════════════════════════════════════════════════════════════ ACCOUNTS */
  function renderAccounts() {
    const main = $('#main-content');
    main.appendChild(el('div', 'page-header', { html: `
      <div class="page-eyebrow">${D.roster.total} organizations · 3 tiers</div>
      <h1 class="page-title">Account Explorer</h1>
      <p class="page-sub">Tier 1 accounts have full whitespace analysis and link through to their record(s). Tier 2 is competitive/market context only — not standalone subjects. Tier 3 is tracked in the Watch List.</p>
    `}));
    const body = el('div', 'section'); body.style.paddingTop = '8px';

    const t1 = el('div', 'tier-section');
    t1.innerHTML = `<div class="tier-section-title">Tier 1 — Full whitespace analysis</div><div class="tier-section-sub">${D.roster.tier1.length} accounts. Click a card with whitespace records to jump to Whitespace.</div>`;
    const t1Grid = el('div', 'account-grid');
    D.roster.tier1.filter(o => !o.parent).forEach(o => t1Grid.appendChild(buildAccountCard(o)));
    t1.appendChild(t1Grid); body.appendChild(t1);

    const t2 = el('div', 'tier-section');
    t2.innerHTML = `<div class="tier-section-title">Tier 2 — Competitive / market context</div><div class="tier-section-sub">Named only as context inside Tier 1 whitespace records — not whitespace subjects themselves.</div>`;
    D.roster.tier2.forEach(g => {
      const group = el('div', 'tier2-group');
      group.innerHTML = `<div class="tier2-group-title">${esc(g.group)}</div><div class="tier2-org-chips">${g.orgs.map(o => `<span class="tier2-org-chip">${esc(o)}</span>`).join('')}</div>`;
      t2.appendChild(group);
    });
    body.appendChild(t2);

    const t3 = el('div', 'tier-section');
    t3.innerHTML = `<div class="tier-section-title">Tier 3 — Emerging / market shapers</div><div class="tier-section-sub">${D.roster.tier3.length} companies. Full signal detail lives in the <a class="section-link" href="watchlist.html">Watch List →</a></div>`;
    const t3Chips = el('div', 'tier2-org-chips');
    D.roster.tier3.forEach(o => { t3Chips.innerHTML += `<span class="tier2-org-chip">${logoHtml(o.name, 16)} ${esc(o.name)}</span>`; });
    t3.appendChild(t3Chips); body.appendChild(t3);
    main.appendChild(body);
  }

  function buildAccountCard(o) {
    const wsIds = D.whitespaceIdsByAccount[o.name] || [];
    const card = el('div', `account-card${wsIds.length ? ' has-link' : ''}`);
    const subEntities = (o.subEntities || []).map(n => D.tier1ByName[n]).filter(Boolean);
    card.innerHTML = `
      <div class="account-name">${logoHtml(o.name, 26)} ${esc(o.name)}</div>
      ${o.alias && o.alias !== o.name ? `<div class="account-alias">Workbook alias: ${esc(o.alias)}</div>` : ''}
      <div class="account-status">${esc(o.dataStatus)}</div>
      ${o.notes ? `<div class="account-notes">${esc(o.notes)}</div>` : ''}
      ${subEntities.length ? `<div class="account-sub-list">${subEntities.map(s => `<div class="account-sub-item">${logoHtml(s.name, 18)} ${esc(s.name)} <span class="account-parent-tag">(sub-entity)</span></div>`).join('')}</div>` : ''}
      ${wsIds.length ? `<div class="account-ws-count">${wsIds.length} whitespace record${wsIds.length > 1 ? 's' : ''} →</div>` : `<div class="account-ws-count" style="color:var(--text-muted);font-weight:500;">No whitespace record</div>`}`;
    if (wsIds.length) card.addEventListener('click', () => { window.location.href = `whitespace.html?rec=${wsIds[0]}`; });
    return card;
  }

  /* ════════════════════════════════════════════════════════════════════════ OPEN ITEMS */
  function renderOpenItems() {
    const main = $('#main-content');
    const external = D.whitespaces.filter(w => w.verdict === 'external_signal_only_no_internal_check');
    const flagged = D.whitespaces.filter(w => w.verdict === 'not_a_whitespace_relationship_may_already_exist');

    main.appendChild(el('div', 'page-header', { html: `
      <div class="page-eyebrow">Honest to-do list</div>
      <h1 class="page-title">Open Items</h1>
      <p class="page-sub">${external.length + flagged.length} accounts that aren't finished, on purpose — surfaced here so they stay visible instead of quietly disappearing in the next redesign.</p>
    `}));
    const body = el('div', 'section'); body.style.paddingTop = '8px';

    if (flagged.length) {
      body.appendChild(el('div', 'section-header', { html: `<h2 class="section-title">Data-integrity flag</h2>` }));
      const flagList = el('div', 'open-items-list');
      flagged.forEach(w => flagList.appendChild(el('div', 'open-item-card oi-flag', { html: `
        <div class="open-item-head">${logoHtml(w.account, 22)}<span class="open-item-account">${esc(w.account)} — ${esc(w.id)}</span>${verdictBadgeHtml(w.verdict)}</div>
        <div class="open-item-theme"><strong>What we found:</strong> ${esc(w.capgemini_position)}</div>
        <div class="open-item-action oi-flag-action">Action: confirm with the account team before using this as a whitespace, either way.</div>` })));
      body.appendChild(flagList);
      body.appendChild(el('hr', 'divider'));
    }

    body.appendChild(el('div', 'section-header', { html: `<h2 class="section-title">External signal only — no internal check yet</h2>` }));
    body.appendChild(el('p', 'page-sub', { text: `${external.length} accounts where a real external signal exists but no Capgemini deal/CXO data was available to check it against. These are incomplete, not confirmed gaps.` }));
    const extList = el('div', 'open-items-list');
    external.forEach(w => extList.appendChild(el('div', 'open-item-card', { html: `
      <div class="open-item-head">${logoHtml(w.account, 22)}<span class="open-item-account">${esc(w.account)} — ${esc(w.id)}</span>${verdictBadgeHtml(w.verdict)}</div>
      <div class="open-item-theme"><strong>External signal:</strong> ${esc(w.client_signal)}</div>
      <div class="open-item-action">Action: confirm relationship status with the account team.</div>` })));
    body.appendChild(extList);
    main.appendChild(body);
  }

  /* ════════════════════════════════════════════════════════════════════════ PATTERNS */
  function renderPatterns() {
    const main = $('#main-content');
    main.appendChild(el('div', 'page-header', { html: `
      <div class="page-eyebrow">Observations about the dataset, not whitespace findings</div>
      <h1 class="page-title">Patterns</h1>
      <p class="page-sub">Cross-cutting observations across all 24 Tier 1 accounts. These describe what the dataset shows in aggregate — not another whitespace record.</p>
    `}));
    const body = el('div', 'section'); body.style.paddingTop = '8px';
    const list = el('div', 'pattern-list');
    D.crossCuttingObservations.forEach((text, i) => {
      const card = el('div', `pattern-card${i === 0 ? ' pattern-lead' : ''}`);
      card.innerHTML = `<div class="pattern-index">Observation ${i + 1}</div><p class="pattern-text">${esc(text)}</p>`;
      list.appendChild(card);
    });
    body.appendChild(list);
    main.appendChild(body);
    main.appendChild(el('hr', 'divider'));

    // About this data — corrections log + coverage gaps, surfaced as a credibility signal
    const about = el('div', 'section');
    about.innerHTML = `<div class="section-header"><h2 class="section-title">About this data</h2></div>`;
    const aboutBody = el('div', 'trust-block');
    aboutBody.innerHTML = `
      <h3 class="trust-sub-title">Corrections from v1</h3>
      <ul class="modal-list">${D.correctionsLog.map(c => `<li>${esc(c)}</li>`).join('')}</ul>
      <h3 class="trust-sub-title" style="margin-top:20px;">Coverage gaps flagged</h3>
      <ul class="modal-list">${D.coverageGapsFlagged.map(c => `<li>${esc(c)}</li>`).join('')}</ul>`;
    about.appendChild(aboutBody);
    main.appendChild(about);
  }

  /* ════════════════════════════════════════════════════════════════════════ SEARCH */
  const searchPanel = $('#search-panel');
  function openSearch() {
    if (!searchPanel) return;
    searchPanel.removeAttribute('hidden');
    if (!searchPanel.dataset.built) { buildSearchPanel(); searchPanel.dataset.built = '1'; }
    const inp = $('#search-panel-input'); if (inp) { inp.value = ''; renderSearchResults(''); inp.focus(); }
  }
  function closeSearch() { searchPanel?.setAttribute('hidden', ''); }
  function buildSearchPanel() {
    searchPanel.innerHTML = `<div class="search-panel-inner"><div class="search-panel-input-wrap"><span class="search-panel-icon" aria-hidden="true"></span><input class="search-panel-input" id="search-panel-input" type="search" placeholder="Search account, priority, or verdict…" autocomplete="off" aria-label="Search"><span class="search-panel-esc">Esc</span></div><div class="search-results" id="search-results-list"></div></div>`;
    searchPanel.addEventListener('click', e => { if (e.target === searchPanel) closeSearch(); });
    $('#search-panel-input').addEventListener('input', e => renderSearchResults(e.target.value));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });
    renderSearchResults('');
  }
  function renderSearchResults(query) {
    const list = $('#search-results-list'); if (!list) return;
    const q = query.trim().toLowerCase();
    if (!q) { list.innerHTML = `<div class="search-results-empty">Start typing to search accounts, priorities, or verdicts…</div>`; return; }
    const matched = D.whitespaces.filter(w => w.account.toLowerCase().includes(q) || w.priority_category.toLowerCase().includes(q) || w.verdict.toLowerCase().includes(q));
    if (!matched.length) { list.innerHTML = `<div class="search-results-empty">No results for "<strong>${esc(query)}</strong>"</div>`; return; }
    list.innerHTML = `<div class="search-result-group-label">Whitespace records</div>` + matched.slice(0, 10).map(w => `
      <div class="search-result-item" data-id="${esc(w.id)}"><span class="search-result-icon">${logoHtml(w.account, 24)}</span><div><div class="search-result-name">${esc(w.account)}</div><div class="search-result-sub">${esc(w.priority_category)}</div></div></div>`).join('');
    $$('.search-result-item', list).forEach(item => item.addEventListener('click', () => { closeSearch(); window.location.href = `whitespace.html?rec=${item.dataset.id}`; }));
  }
  document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); if (searchPanel?.hasAttribute('hidden')) openSearch(); else closeSearch(); } });
  const headerSearch = $('#global-search');
  if (headerSearch) { headerSearch.addEventListener('focus', e => { e.preventDefault(); e.target.blur(); openSearch(); }); headerSearch.parentElement.addEventListener('click', () => openSearch()); }
})();
