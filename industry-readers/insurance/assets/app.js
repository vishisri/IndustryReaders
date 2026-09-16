/* ─────────────────────────────────────────────────────────────────────────
   INSURANCE INDUSTRY INTELLIGENCE & WHITESPACE PORTAL · app.js
   Trends, Whitespace (priority-first + account-first + fast-pass worklist),
   Accounts, Open Items, Patterns. Content from data.js — rendering only.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';

(function () {
  const D = window.INS_DATA;
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
  const initials = name => {
    const words = String(name).replace(/\(.*?\)/g, '').trim().split(/\s+/).filter(Boolean);
    if (!words.length) return '?';
    return words.length === 1 ? words[0].slice(0, 2).toUpperCase() : (words[0][0] + words[1][0]).toUpperCase();
  };
  const orgColor = name => {
    const palette = ['#0f4c5c', '#14708a', '#0d9488', '#0e7490', '#155e75', '#1d4e60', '#0b6e63', '#2d6a4f'];
    let h = 0; for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return palette[h % palette.length];
  };
  function logoHtml(name, size = 30) {
    const domain = D.domainFor(name);
    const color = orgColor(name);
    const fbFont = Math.round(size * 0.36);
    const fallback = `this.outerHTML='<span class=\\'logo-fallback\\' style=\\'width:${size}px;height:${size}px;line-height:${size}px;background:${color};font-size:${fbFont}px\\'>${esc(initials(name))}</span>'`;
    if (!domain) return `<span class="logo-fallback" style="width:${size}px;height:${size}px;line-height:${size}px;background:${color};font-size:${fbFont}px">${esc(initials(name))}</span>`;
    return `<img class="logo-img" src="https://logo.clearbit.com/${domain}?size=128" alt="" width="${size}" height="${size}" loading="lazy" onerror="${fallback}">`;
  }

  const page = document.body.dataset.page || 'trends';
  if (page === 'trends') renderTrends();
  if (page === 'whitespace') renderWhitespace();
  if (page === 'accounts') renderAccounts();
  if (page === 'open-items') renderOpenItems();
  if (page === 'patterns') renderPatterns();

  /* ════════════════════════════════════════════════════════════════════════ TRENDS */
  function renderTrends() {
    const main = $('#main-content');
    const confirmedCount = D.whitespaces.filter(w => ['positive', 'caveat'].includes((D.verdictMeta[w.verdict] || {}).kind)).length;

    const hero = el('section', 'hero');
    hero.innerHTML = `
      <div class="hero-badge">Insurance Industry Intelligence</div>
      <h1 class="hero-heading">Trends</h1>
      <p class="hero-sub">What carriers are actually funding right now — and where Capgemini's own book confirms or rules out a gap. A fast skim — for the full account-by-account analysis, see Whitespace.</p>
      <div class="hero-meta">
        <span class="hero-meta-item">${D.whitespaces.length} researched accounts</span>
        <span class="hero-meta-sep">·</span>
        <span class="hero-meta-item">${D.middleTierFastPass.accounts.length} fast-pass accounts</span>
        <span class="hero-meta-sep">·</span>
        <span class="hero-meta-item">Updated 14 Sept 2026</span>
      </div>`;
    main.appendChild(hero);

    const stats = el('div', 'stats-strip');
    stats.innerHTML = `<div class="stats-inner">${[
      { v: D.roster.cxoEngaged.length, l: 'CXO-engaged accounts' },
      { v: confirmedCount, l: 'Confirmed whitespaces' },
      { v: D.crossCuttingPatterns.length, l: 'Cross-cutting patterns' },
      { v: D.roster.cxoEngaged.length + D.roster.dealOnlyAccounts.length, l: 'Organizations in scope' },
    ].map(s => `<div class="stat-item"><span class="stat-value">${s.v}</span><span class="stat-label">${s.l}</span></div>`).join('')}</div>`;
    main.appendChild(stats);

    const callout = el('div', 'section'); callout.style.padding = '0 24px 8px';
    callout.innerHTML = `
      <div class="callout-card">
        <div class="callout-label">Cross-cutting signal</div>
        <p><strong>${esc(D.crossCuttingPatterns[0].title)}.</strong> ${esc(D.crossCuttingPatterns[0].detail)}</p>
        <a class="section-link" href="patterns.html">All patterns →</a>
      </div>`;
    main.appendChild(callout);
    main.appendChild(el('hr', 'divider'));

    const sigSection = el('div', 'section');
    sigSection.innerHTML = `<div class="section-header"><h2 class="section-title">What carriers are telling us</h2></div><div class="trend-source-label">Client evidence from the Insurance whitespace research — full analysis in Whitespace</div>`;
    const sigList = el('div', 'client-signal-list');
    D.whitespaces.forEach(w => {
      const card = el('div', 'client-signal-card');
      card.innerHTML = `
        <div class="client-signal-head">${logoHtml(w.account, 22)}<span class="client-signal-account">${esc(w.account)}</span><span class="client-signal-theme">${esc(w.priority_category)}</span></div>
        <p class="client-signal-evidence">${esc(w.client_signal)}</p>
        ${w.client_signal_source ? `<div class="client-signal-source">${esc(w.client_signal_source)}</div>` : ''}`;
      card.addEventListener('click', () => { window.location.href = `whitespace.html?rec=${w.id}`; });
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
      <p class="page-sub">${D.whitespaces.length} researched accounts (9 CXO-engaged + 10 deal-only, prioritized by value). Every card follows the same method: client signal, Capgemini's current position, the named technology gap, competitor position, verdict, and the recommended plug — or "none confirmed" where that's the honest answer.</p>
    `}));
    const body = el('div', 'section'); body.style.paddingTop = '8px';

    const viewToggle = el('div', 'view-toggle');
    viewToggle.innerHTML = `
      <button class="view-toggle-btn active" data-view="priority">By priority</button>
      <button class="view-toggle-btn" data-view="account">By account</button>
      <button class="view-toggle-btn" data-view="fastpass">Fast-pass (not yet researched)</button>`;
    body.appendChild(viewToggle);

    const priorityView = el('div', 'priority-view');
    const accountView = el('div', 'account-view hidden');
    const fastpassView = el('div', 'fastpass-view hidden');
    body.appendChild(priorityView); body.appendChild(accountView); body.appendChild(fastpassView);
    main.appendChild(body);

    buildPriorityView(priorityView);
    buildAccountView(accountView);
    buildFastPassView(fastpassView);

    viewToggle.addEventListener('click', e => {
      const btn = e.target.closest('.view-toggle-btn'); if (!btn) return;
      $$('.view-toggle-btn', viewToggle).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const v = btn.dataset.view;
      priorityView.classList.toggle('hidden', v !== 'priority');
      accountView.classList.toggle('hidden', v !== 'account');
      fastpassView.classList.toggle('hidden', v !== 'fastpass');
    });

    const params = new URLSearchParams(location.search);
    const targetId = params.get('rec');
    if (targetId) {
      viewToggle.querySelector('[data-view="account"]').click();
      setTimeout(() => { const t = $(`#${targetId}`, accountView); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 50);
    }
  }

  function buildPriorityView(container) {
    const allCats = [...D.priorityCategories, D.otherCategoryLabel];
    allCats.forEach(cat => {
      const bucket = D.priorityIndex[cat];
      if (!bucket || !bucket.records.length) {
        if (D.priorityCategories.includes(cat)) container.appendChild(buildPriorityGroup(cat, { records: [], counts: { confirmed: 0, notWhitespace: 0, unverified: 0, other: 0 } }));
        return;
      }
      container.appendChild(buildPriorityGroup(cat, bucket));
    });
  }

  function buildPriorityGroup(cat, bucket) {
    const gapText = D.coverageGapsFlagged.find(g => g.includes(cat) || (cat === "Other" && g.includes("'Other'")));
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
    const listEl = group.querySelector('#pg-list'); listEl.removeAttribute('id');
    bucket.records.forEach(w => listEl.appendChild(buildWhitespaceCard(w, true)));
    const head = group.querySelector('.priority-group-head'), bodyEl = group.querySelector('.priority-group-body');
    head.addEventListener('click', () => { bodyEl.classList.toggle('hidden'); group.querySelector('.priority-group-chevron').textContent = bodyEl.classList.contains('hidden') ? '▾' : '▴'; });
    if (!bucket.records.length) group.classList.add('priority-group-empty');
    return group;
  }

  function buildAccountView(container) {
    const filterBar = el('div', 'whitespace-filter-bar');
    const accountOptions = [...new Set(D.whitespaces.map(w => w.account))].sort();
    const verdictOptions = Object.entries(D.verdictMeta);
    filterBar.innerHTML = `
      <div class="whitespace-filter-group"><span class="whitespace-filter-group-label">Account</span>
        <select class="filter-btn" id="ws-filter-account"><option value="">All accounts</option>${accountOptions.map(a => `<option value="${esc(a)}">${esc(a)}</option>`).join('')}</select>
      </div>
      <div class="whitespace-filter-group"><span class="whitespace-filter-group-label">Verdict</span>
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
        card.classList.toggle('hidden', !((!activeAccount || card.dataset.account === activeAccount) && (!activeVerdict || card.dataset.verdict === activeVerdict)));
      });
    }
    $('#ws-filter-account', filterBar).addEventListener('change', e => { activeAccount = e.target.value; applyFilters(); });
    $('#ws-filter-verdict', filterBar).addEventListener('click', e => {
      const btn = e.target.closest('button'); if (!btn) return;
      $$('button', $('#ws-filter-verdict', filterBar)).forEach(b => b.classList.remove('active'));
      btn.classList.add('active'); activeVerdict = btn.dataset.verdict; applyFilters();
    });
  }

  function buildFastPassView(container) {
    const note = el('div', 'coverage-gap-note');
    note.style.marginTop = '0';
    note.textContent = D.middleTierFastPass.note;
    container.appendChild(note);
    const grid = el('div', 'fastpass-grid');
    D.middleTierFastPass.accounts.forEach(a => {
      const card = el('div', 'fastpass-card');
      card.innerHTML = `
        <div class="fastpass-head">${logoHtml(a.account, 24)}<span class="fastpass-account">${esc(a.account)}</span><span class="tag-inline tag-unverified">Not yet researched</span></div>
        <div class="fastpass-meta"><span>${esc(a.priority_category)}</span><span>€${a.tcv_eur_m}M</span><span>${esc(a.status)}</span></div>
        ${a.note ? `<div class="fastpass-note">${esc(a.note)}</div>` : ''}`;
      grid.appendChild(card);
    });
    container.appendChild(grid);
  }

  function verdictBadgeHtml(verdict) {
    const m = D.verdictMeta[verdict]; if (!m) return '';
    const kindClass = { positive: 'v-positive', caveat: 'v-caveat', 'not-whitespace': 'v-not-whitespace', context: 'v-context', unverified: 'v-unverified' }[m.kind] || '';
    return `<span class="verdict-badge ${kindClass}">${esc(m.label)}</span>`;
  }

  function buildWhitespaceCard(w, compact) {
    const m = D.verdictMeta[w.verdict] || {};
    const card = el('div', `whitespace-card${m.kind === 'not-whitespace' ? ' wc-not-whitespace' : ''}${compact ? ' wc-compact' : ''}`);
    card.dataset.account = w.account; card.dataset.verdict = w.verdict; card.dataset.id = w.id; card.id = w.id;
    const plugHtml = w.recommended_plug ? `<span class="whitespace-asset-name">${esc(w.recommended_plug)}</span>` : `<span class="whitespace-asset-none">None confirmed</span>`;
    const extraTags = [];
    if (m.kind === 'caveat') extraTags.push(`<span class="tag-inline tag-insourcing">Watch</span>`);
    if (m.kind === 'context') extraTags.push(`<span class="tag-inline tag-context">Context, not churn</span>`);
    if (m.kind === 'unverified') extraTags.push(`<span class="tag-inline tag-unverified">Unverified</span>`);

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
        <div class="whitespace-field"><span class="whitespace-field-label">Competitor position</span><div class="whitespace-field-body">${esc(w.competitor_position || 'Not researched.')}</div></div>
        <div class="whitespace-field"><span class="whitespace-field-label">Verdict</span><div class="whitespace-field-body">${verdictBadgeHtml(w.verdict)}</div></div>
        <div class="whitespace-field"><span class="whitespace-field-label">Recommended plug</span><div class="whitespace-field-body">${plugHtml}</div></div>
      </div>
      ${w.notes ? `<div class="whitespace-note">${esc(w.notes)}</div>` : ''}
      ${m.kind === 'context' ? `<div class="whitespace-warning-box wc-context-box">This looks like churn on the surface, but has a documented, benign explanation — see the note above. Don't force a churn story onto a contract structure that already explains itself.</div>` : ''}
      ${m.kind === 'unverified' ? `<div class="whitespace-cta">No external research was completed for this account this pass. Not a confirmed gap — a worklist item.</div>` : ''}`;
    return card;
  }

  /* ════════════════════════════════════════════════════════════════════════ ACCOUNTS */
  function renderAccounts() {
    const main = $('#main-content');
    const total = D.roster.cxoEngaged.length + D.roster.dealOnlyAccounts.length;
    main.appendChild(el('div', 'page-header', { html: `
      <div class="page-eyebrow">${total} organizations</div>
      <h1 class="page-title">Account Explorer</h1>
      <p class="page-sub">No formal tiering exercise has been done for Insurance yet (unlike A&D's 49-org roster) — this is what's in the deal and CXO data today. CXO-engaged accounts link through to their whitespace record(s) where researched.</p>
    `}));
    const body = el('div', 'section'); body.style.paddingTop = '8px';

    const t1 = el('div', 'tier-section');
    t1.innerHTML = `<div class="tier-section-title">CXO-engaged accounts</div><div class="tier-section-sub">${D.roster.cxoEngaged.length} accounts with logged CXO Play data. Click a card with whitespace records to jump to Whitespace.</div>`;
    const t1Grid = el('div', 'account-grid');
    D.roster.cxoEngaged.forEach(o => t1Grid.appendChild(buildAccountCard(o)));
    t1.appendChild(t1Grid); body.appendChild(t1);

    const t2 = el('div', 'tier-section');
    t2.innerHTML = `<div class="tier-section-title">Deal-only accounts</div><div class="tier-section-sub">${D.roster.dealOnlyAccounts.length} accounts with deal history but no logged CXO engagement. ${D.whitespaces.filter(w => !cxoNamed(w.account)).length} of these were researched anyway (see chips below); the rest sit in the fast-pass worklist on the Whitespace page.</div>`;
    const t2Chips = el('div', 'tier2-org-chips');
    D.roster.dealOnlyAccounts.forEach(name => {
      const wsIds = D.whitespaceIdsByAccount[name] || [];
      const chip = el('span', `tier2-org-chip${wsIds.length ? ' has-link' : ''}`);
      chip.innerHTML = `${logoHtml(name, 16)} ${esc(name)}`;
      if (wsIds.length) chip.addEventListener('click', () => { window.location.href = `whitespace.html?rec=${wsIds[0]}`; });
      t2Chips.appendChild(chip);
    });
    t2.appendChild(t2Chips); body.appendChild(t2);

    const t3 = el('div', 'tier-section');
    t3.innerHTML = `<div class="tier-section-title">Entity resolution</div><div class="tier-section-sub">Naming was inconsistent in the source deals file — canonical names used throughout this portal.</div>`;
    const resTable = el('div', 'open-items-list');
    D.roster.entityResolution.forEach(r => {
      resTable.appendChild(el('div', 'open-item-card', { html: `<div class="open-item-account">${esc(r.canonical)}</div><div class="open-item-theme">Aliases in source data: ${r.aliases.map(esc).join(', ')}</div>` }));
    });
    t3.appendChild(resTable); body.appendChild(t3);
    main.appendChild(body);

    function cxoNamed(name) { return !!cxoByNameLookup()[name]; }
    function cxoByNameLookup() { return Object.fromEntries(D.roster.cxoEngaged.map(o => [o.name, o])); }
  }

  function buildAccountCard(o) {
    const wsIds = D.whitespaceIdsByAccount[o.name] || [];
    const card = el('div', `account-card${wsIds.length ? ' has-link' : ''}`);
    card.innerHTML = `
      <div class="account-name">${logoHtml(o.name, 26)} ${esc(o.name)}</div>
      <div class="account-status">${o.engagements} CXO engagements · ${o.meetings} meetings held · ${esc(o.relationship)} · ${esc(o.sentiment)}</div>
      <div class="account-notes">2026: ${o.deals2026} deals, €${o.value2026}M, €${o.won2026}M won</div>
      ${wsIds.length ? `<div class="account-ws-count">${wsIds.length} whitespace record${wsIds.length > 1 ? 's' : ''} →</div>` : `<div class="account-ws-count" style="color:var(--text-muted);font-weight:500;">No whitespace record</div>`}`;
    if (wsIds.length) card.addEventListener('click', () => { window.location.href = `whitespace.html?rec=${wsIds[0]}`; });
    return card;
  }

  /* ════════════════════════════════════════════════════════════════════════ OPEN ITEMS */
  function renderOpenItems() {
    const main = $('#main-content');
    main.appendChild(el('div', 'page-header', { html: `
      <div class="page-eyebrow">Honest to-do list</div>
      <h1 class="page-title">Open Items</h1>
      <p class="page-sub">Coverage gaps and unresolved decisions — surfaced here so they stay visible instead of quietly disappearing in the next redesign.</p>
    `}));
    const body = el('div', 'section'); body.style.paddingTop = '8px';

    body.appendChild(el('div', 'section-header', { html: `<h2 class="section-title">Coverage gaps flagged</h2>` }));
    const gapList = el('div', 'open-items-list');
    D.coverageGapsFlagged.forEach(g => gapList.appendChild(el('div', 'open-item-card', { html: `<div class="open-item-theme">${esc(g)}</div>` })));
    body.appendChild(gapList);
    body.appendChild(el('hr', 'divider'));

    body.appendChild(el('div', 'section-header', { html: `<h2 class="section-title">51 deal-only accounts — no CXO data</h2>` }));
    body.appendChild(el('p', 'page-sub', { text: `A decision point, not a low-priority default: worth deciding which of these merit the same research depth as the CXO-engaged accounts.` }));
    const chipWrap = el('div', 'tier2-org-chips');
    D.roster.dealOnlyAccounts.forEach(name => chipWrap.appendChild(el('span', 'tier2-org-chip', { text: name })));
    body.appendChild(chipWrap);
    main.appendChild(body);
  }

  /* ════════════════════════════════════════════════════════════════════════ PATTERNS */
  function renderPatterns() {
    const main = $('#main-content');
    main.appendChild(el('div', 'page-header', { html: `
      <div class="page-eyebrow">Structural findings across many clients, not single-account leads</div>
      <h1 class="page-title">Patterns</h1>
      <p class="page-sub">${D.crossCuttingPatterns.length} cross-cutting patterns across the Insurance book. These describe what the dataset shows in aggregate.</p>
    `}));
    const body = el('div', 'section'); body.style.paddingTop = '8px';
    const list = el('div', 'pattern-list');
    D.crossCuttingPatterns.forEach((p, i) => {
      const card = el('div', `pattern-card${i === 0 ? ' pattern-lead' : ''}`);
      card.innerHTML = `<div class="pattern-index">${esc(p.id)}</div><h3 class="pattern-title">${esc(p.title)}</h3><p class="pattern-text">${esc(p.detail)}</p><div class="pattern-source">${esc(p.source)}</div>`;
      list.appendChild(card);
    });
    body.appendChild(list);
    main.appendChild(body);
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
