/* ─────────────────────────────────────────────────────────────────────────
   AUTOMOTIVE INTELLIGENCE PORTAL · app.js
   Trends (Act 1) · Competitive Signal (Act 2) · Companies (Act 3) · Emerging
   Players. Content from data.js/adapter.js — this file is rendering only.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';

(function () {
  const D = window.AUTO_DATA;
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
    const palette = ['#7c2d4a', '#6b3fa0', '#b8336a', '#9c4f96', '#4a2545', '#a8557a', '#5c3566', '#8e2954'];
    let h = 0; for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return palette[h % palette.length];
  };
  function logoHtml(name, size = 30) {
    const c = D.companyByName[name];
    const domain = c && c.domain;
    const color = orgColor(name);
    const fbFont = Math.round(size * 0.36);
    const fallback = `this.outerHTML='<span class=\\'logo-fallback\\' style=\\'width:${size}px;height:${size}px;line-height:${size}px;background:${color};font-size:${fbFont}px\\'>${esc(initials(name))}</span>'`;
    if (!domain) return `<span class="logo-fallback" style="width:${size}px;height:${size}px;line-height:${size}px;background:${color};font-size:${fbFont}px">${esc(initials(name))}</span>`;
    return `<img class="logo-img" src="https://logo.clearbit.com/${domain}?size=128" alt="" width="${size}" height="${size}" loading="lazy" onerror="${fallback}">`;
  }
  function goToCompany(id, section) {
    window.location.href = `companies.html?co=${encodeURIComponent(id)}${section ? '#' + section : ''}`;
  }

  /* ── Persistent priority filter (shared across pages, saved to localStorage) ── */
  const FILTER_KEY = 'auto_priority_filter';
  function getActiveFilter() { try { return localStorage.getItem(FILTER_KEY) || ''; } catch (e) { return ''; } }
  function setActiveFilter(v) { try { localStorage.setItem(FILTER_KEY, v); } catch (e) {} }

  function renderFilterBar(mountEl, onChange) {
    const bar = el('div', 'priority-filter-bar');
    const inner = el('div', 'priority-filter-inner');
    inner.innerHTML = `<span class="priority-filter-label">Filter by priority:</span>`;
    const allChip = el('button', 'sector-chip active');
    allChip.innerHTML = `<span class="sector-label">All</span>`;
    inner.appendChild(allChip);
    const chips = { '': allChip };
    D.priorityTags.forEach(tag => {
      const chip = el('button', 'sector-chip');
      chip.innerHTML = `<span class="sector-label">${esc(tag)}</span>`;
      chips[tag] = chip;
      inner.appendChild(chip);
    });
    bar.appendChild(inner);
    mountEl.appendChild(bar);

    function setActive(tag) {
      Object.values(chips).forEach(c => c.classList.remove('active'));
      chips[tag].classList.add('active');
      setActiveFilter(tag);
      onChange(tag);
    }
    Object.entries(chips).forEach(([tag, chip]) => chip.addEventListener('click', () => setActive(tag)));
    setActive(getActiveFilter() && chips[getActiveFilter()] ? getActiveFilter() : '');
    return bar;
  }

  const updatedEl = $('#last-updated');
  if (updatedEl) updatedEl.textContent = D.generated;

  const page = document.body.dataset.page || 'trends';
  if (page === 'trends') renderTrends();
  if (page === 'signal') renderSignal();
  if (page === 'companies') renderCompanies();
  if (page === 'emerging') renderEmerging();

  /* ════════════════════════════════════════════════════════════════════════ ACT 1 · TRENDS */
  function renderTrends() {
    const main = $('#main-content');
    const hero = el('section', 'hero');
    hero.innerHTML = `
      <div class="hero-badge">Automotive Industry Intelligence</div>
      <h1 class="hero-heading">Trends</h1>
      <p class="hero-sub">Hybrids are funding the transition, margin is being squeezed industry-wide, digital-first retail is converting, and software architecture consolidation is causing near-term pain even as it builds long-term margin. Four trends, evidenced against the current earnings cycle.</p>`;
    main.appendChild(hero);

    const section = el('div', 'section');
    const grid = el('div', 'trend-grid');
    D.trends.forEach(t => grid.appendChild(buildTrendCard(t)));
    section.appendChild(grid);

    renderFilterBar(main, applyFilter);
    main.appendChild(section);

    const bridge = el('div', 'section'); bridge.style.paddingTop = '0';
    bridge.innerHTML = `<p class="trend-bridge">These trends explain what's changing. What Capgemini's competitors are visibly doing about it, account by account, is a lighter, honest picture — not a scorecard.</p>
      <p style="margin-top:14px;"><a class="section-link" href="signal.html">See the Competitive Signal →</a></p>`;
    main.appendChild(bridge);

    function applyFilter(tag) {
      $$('.trend-card', grid).forEach(card => card.classList.toggle('hidden', !!tag && !card.dataset.tags.split('|').includes(tag)));
    }
  }

  function buildTrendCard(t) {
    const card = el('div', `trend-card dir-${t.direction}`);
    card.dataset.tags = (t.priority_tags || []).join('|');
    const arrow = t.direction === 'accelerating' ? '↗' : '→';
    card.innerHTML = `
      <div>
        <span class="trend-direction"><span class="dir-arrow">${arrow}</span>${esc(t.direction)}</span>
        <h3 class="trend-name">${esc(t.name)}</h3>
        <p class="trend-so-what">${esc(t.one_line_so_what)}</p>
      </div>
      <div class="trend-more">+ Full evidence</div>`;
    card.addEventListener('click', () => openTrendModal(t));
    return card;
  }

  /* Full evidence opens as a popup over the page, not an inline expansion —
     keeps the card grid compact regardless of how long the evidence is. */
  let modalOverlay = null;
  function openTrendModal(t) {
    closeModal();
    const overlay = el('div', 'modal-overlay');
    const modal = el('div', 'modal');
    modal.innerHTML = `
      <button class="modal-close" aria-label="Close" id="modal-close">&times;</button>
      <div class="trend-direction" style="color:var(--brand-primary);background:var(--bg-chip);">
        <span class="dir-arrow">${t.direction === 'accelerating' ? '↗' : '→'}</span>${esc(t.direction)}
      </div>
      <h2 class="modal-co-name" style="margin-top:14px;">${esc(t.name)}</h2>
      <p class="modal-summary">${esc(t.one_line_so_what)}</p>
      <div class="trend-detail-block"><span class="trend-detail-label modal-label">Current readout</span><p>${esc(t.current_readout)}</p></div>
      <div class="trend-detail-block"><span class="trend-detail-label modal-label">Financial reality check</span><p>${esc(t.financial_reality_check)}</p></div>
      <div class="trend-detail-block">
        <span class="trend-detail-label modal-label">Companies</span>
        <div class="trend-company-cols">
          ${buildTrendCompanyCol('Supporting', t.supporting_companies, t.id)}
          ${buildTrendCompanyCol('Complicating', t.complicating_companies, t.id)}
          ${buildTrendCompanyCol('Contradicting', t.contradicting_companies, t.id)}
        </div>
      </div>`;
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    modalOverlay = overlay;
    requestAnimationFrame(() => overlay.classList.add('open'));
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    $('#modal-close', modal).addEventListener('click', closeModal);
    document.addEventListener('keydown', onEscKey);
    $$('.trend-company-link', modal).forEach(link => link.addEventListener('click', () => goToCompany(link.dataset.id, 'trend-fit')));
  }
  function closeModal() {
    if (!modalOverlay) return;
    const ov = modalOverlay;
    ov.classList.remove('open');
    setTimeout(() => { ov.remove(); if (modalOverlay === ov) modalOverlay = null; }, 300);
    document.removeEventListener('keydown', onEscKey);
  }
  function onEscKey(e) { if (e.key === 'Escape') closeModal(); }
  function buildTrendCompanyCol(label, list, trendId) {
    if (!list || !list.length) return '';
    return `<div><div class="trend-company-col-label">${label}</div>${list.map(name => {
      const c = D.companyByName[name];
      return c ? `<span class="trend-company-link" data-id="${esc(c.id)}">${esc(c.display_name)}</span>` : `<span class="trend-company-link" style="cursor:default;opacity:.6;">${esc(name)}</span>`;
    }).join('')}</div>`;
  }

  /* ════════════════════════════════════════════════════════════════════════ ACT 2 · COMPETITIVE SIGNAL */
  function renderSignal() {
    const main = $('#main-content');
    main.appendChild(el('div', 'page-header', { html: `
      <div class="page-eyebrow">Act 2 · light by design</div>
      <h1 class="page-title">Competitive Signal</h1>
      <p class="page-sub">What public sources show Accenture, IBM, and TCS doing across the Automotive book, by priority. Plain counts, not a ranking.</p>
    `}));
    const body = el('div', 'section'); body.style.paddingTop = '8px';
    body.appendChild(el('div', 'signal-caveat', { text: D.competitiveCaveat }));

    const rows = el('div', 'signal-rows');
    D.competitiveSummary.forEach(r => {
      rows.appendChild(el('div', 'signal-row', { html: `
        <span class="signal-row-name">${esc(r.priority)}</span>
        <span class="signal-row-count">${r.companies_researched} researched · signal found for ${r.public_signal_found_for_at_least_one_competitor} · none found for ${r.no_public_signal_found_for_any}</span>` }));
    });
    body.appendChild(rows);
    main.appendChild(body);
    main.appendChild(el('hr', 'divider'));

    const flagSection = el('div', 'section');
    flagSection.innerHTML = `<div class="section-header"><h2 class="section-title">Where no public signal was found for a named competitor</h2></div>
      <p class="page-sub">A real finding, not a gap in the research — the caveat above applies to every line here.</p>`;
    const flagList = el('div', 'signal-flags-list');
    D.noEvidenceFlags.forEach(f => {
      const c = D.companyByName[f.company];
      const competitors = Array.isArray(f.competitor_with_no_public_signal) ? f.competitor_with_no_public_signal.join(', ') : f.competitor_with_no_public_signal;
      const item = el('div', 'signal-flag-item');
      item.innerHTML = c ? `<span class="co-link">${esc(f.company)}</span> — no public signal found for ${esc(competitors)}` : `${esc(f.company)} — no public signal found for ${esc(competitors)}`;
      if (c) $('.co-link', item).addEventListener('click', () => goToCompany(c.id, 'competitive-landscape'));
      flagList.appendChild(item);
    });
    flagSection.appendChild(flagList);
    main.appendChild(flagSection);
  }

  /* ════════════════════════════════════════════════════════════════════════ ACT 3 · COMPANIES */
  function renderCompanies() {
    const main = $('#main-content');
    const params = new URLSearchParams(location.search);
    const coId = params.get('co');
    if (coId && D.companyById[coId]) { renderCompanyProfile(main, D.companyById[coId]); return; }
    renderCompanyDirectory(main);
  }

  function renderCompanyDirectory(main) {
    main.appendChild(el('div', 'page-header', { html: `
      <div class="page-eyebrow">Act 3 · core deliverable</div>
      <h1 class="page-title">Companies</h1>
      <p class="page-sub">${D.companies.length} companies tracked this cycle. Search or filter by priority — every profile carries the same executive summary strip and full depth below.</p>
    `}));
    const body = el('div', 'section'); body.style.paddingTop = '8px';
    const searchWrap = el('div', 'companies-filter-bar');
    searchWrap.innerHTML = `<input class="filter-btn" id="co-search" type="search" placeholder="Search companies…" style="min-width:240px;">`;
    body.appendChild(searchWrap);

    const grid = el('div', 'companies-grid');
    D.companies.forEach(c => grid.appendChild(buildCompanyCard(c)));

    let activeTag = getActiveFilter(), activeQuery = '';
    renderFilterBar(body, applyFilters);
    body.appendChild(grid);
    main.appendChild(body);

    function applyFilters(tag) { activeTag = tag; runFilter(); }
    $('#co-search', searchWrap).addEventListener('input', e => { activeQuery = e.target.value.trim().toLowerCase(); runFilter(); });
    function runFilter() {
      $$('.company-card', grid).forEach(card => {
        const matchesTag = !activeTag || card.dataset.tags.split('|').includes(activeTag);
        const matchesQuery = !activeQuery || card.dataset.name.includes(activeQuery);
        card.classList.toggle('hidden', !(matchesTag && matchesQuery));
      });
    }
  }

  function buildCompanyCard(c) {
    const color = orgColor(c.display_name);
    const card = el('div', 'company-card');
    card.dataset.tags = (c.priority_tags || []).join('|');
    card.dataset.name = c.display_name.toLowerCase();
    card.style.setProperty('--sector-color', color);
    const confirmed = (c.competitive_landscape || []).filter(x => x.status === 'confirmed').length;
    card.innerHTML = `
      <div class="company-header">${logoHtml(c.display_name, 32)}<div class="company-header-text"><div class="company-name">${esc(c.display_name)}</div></div></div>
      <div class="company-meta"><span class="company-meta-item">${esc(c.financial_snapshot.this_quarter.period)}</span></div>
      <p class="company-summary">${esc(c.financial_snapshot.this_quarter.margin || '')}</p>
      <div class="company-tags">${(c.priority_tags || []).slice(0, 3).map(t => `<span class="company-tag">${esc(t)}</span>`).join('')}</div>
      <div class="company-latest-report"><div class="company-latest-label">Competitive exposure</div><div class="company-latest-title">${confirmed} of 3 mandatory competitors confirmed</div></div>`;
    card.addEventListener('click', () => goToCompany(c.id));
    return card;
  }

  function renderCompanyProfile(main, c) {
    const color = orgColor(c.display_name);
    const confirmed = (c.competitive_landscape || []).filter(x => x.status === 'confirmed').length;
    const topQuote = c.leadership_quotes && c.leadership_quotes[0];
    const topTrend = (c.trend_fit && c.trend_fit[0]) ? D.trendById[c.trend_fit[0].trend_id] : null;

    const back = el('div', 'section'); back.style.padding = '24px 24px 0';
    back.innerHTML = `<a class="section-link" href="companies.html">← All companies</a>`;
    main.appendChild(back);

    const header = el('div', 'page-header');
    header.innerHTML = `
      <div class="profile-header">${logoHtml(c.display_name, 56)}<div><div class="profile-name">${esc(c.display_name)}</div>${c.name !== c.display_name ? `<div class="profile-legal">${esc(c.name)}</div>` : ''}</div></div>`;
    main.appendChild(header);

    const stripWrap = el('div', 'section'); stripWrap.style.paddingTop = '0';
    const strip = el('div', 'exec-strip');
    strip.innerHTML = `
      <div class="exec-strip-item"><div class="exec-strip-label">${esc(c.financial_snapshot.this_quarter.period)}</div><div class="exec-strip-value">${esc(c.financial_snapshot.this_quarter.margin)}</div></div>
      <div class="exec-strip-item"><div class="exec-strip-label">Leadership is saying</div><div class="exec-strip-value">${topQuote ? '“' + esc(truncate(topQuote.statement, 110)) + '”' : 'No quotes recorded.'}</div></div>
      <div class="exec-strip-item"><div class="exec-strip-label">Competitive exposure</div><div class="exec-strip-value">${confirmed} of 3 mandatory competitors confirmed</div></div>
      <div class="exec-strip-item"><div class="exec-strip-label">Top trend connection</div><div class="exec-strip-value">${topTrend ? `<span class="trend-fit-link" id="strip-trend-link">${esc(topTrend.name)}</span>` : 'None recorded.'}</div></div>`;
    stripWrap.appendChild(strip);
    main.appendChild(stripWrap);
    if (topTrend) $('#strip-trend-link', strip).addEventListener('click', () => { window.location.href = 'index.html'; });

    const body = el('div', 'section'); body.style.paddingTop = '0';

    // Financial Snapshot
    body.appendChild(profileSectionHeader('financial-snapshot', 'Financial Snapshot'));
    const snap = el('div', 'snapshot-grid');
    const fs = c.financial_snapshot;
    snap.innerHTML = `
      <div class="snapshot-card"><div class="snapshot-card-label">${esc(fs.this_quarter.period)}</div><div class="snapshot-card-body">${esc(fs.this_quarter.revenue)}<br>${esc(fs.this_quarter.margin)}</div></div>
      <div class="snapshot-card"><div class="snapshot-card-label">${esc(fs.last_quarter.period)}</div><div class="snapshot-card-body">${esc(fs.last_quarter.revenue)}<br>${esc(fs.last_quarter.margin)}</div></div>
      <div class="snapshot-card"><div class="snapshot-card-label">Guidance</div><div class="snapshot-card-body">${esc(fs.guidance)}</div></div>
      <div class="snapshot-card"><div class="snapshot-card-label">Vs. consensus</div><div class="snapshot-card-body">${esc(fs.vs_consensus)}</div></div>`;
    body.appendChild(snap);
    body.appendChild(spacer());

    // Leadership Is Saying
    body.appendChild(profileSectionHeader('leadership', 'Leadership Is Saying'));
    (c.leadership_quotes || []).forEach(q => {
      body.appendChild(el('div', 'quote-card', { html: `<p class="quote-text">“${esc(q.statement)}”</p><div class="quote-attr">${esc(q.speaker)}, ${esc(q.title)} — ${esc(q.entity)} · ${esc(q.date)} · ${esc(q.source)}</div>` }));
    });
    body.appendChild(spacer());

    // Strategic Moves This Cycle
    body.appendChild(profileSectionHeader('strategic-move', 'Strategic Moves This Cycle'));
    if (c.strategic_move) {
      body.appendChild(el('div', 'move-card', { html: `<p><strong>${esc(c.strategic_move.announcement)}</strong></p><p class="move-grounding">${esc(c.strategic_move.financial_grounding)}</p>` }));
    }
    body.appendChild(spacer());

    // Competitive Landscape
    body.appendChild(profileSectionHeader('competitive-landscape', 'Competitive Landscape'));
    const compRows = el('div', 'competitor-rows');
    (c.competitive_landscape || []).forEach(cl => {
      const noEv = cl.status === 'no_evidence_found';
      compRows.appendChild(el('div', `competitor-row-item${noEv ? ' no-evidence' : ''}`, { html: `
        <span class="competitor-name-cell">${esc(cl.competitor)}</span>
        <span class="${noEv ? 'status-no-evidence' : 'status-confirmed'}">${noEv ? 'No evidence found' : 'Confirmed'}</span>
        <span class="competitor-detail-cell">${noEv ? 'No public signal found for this competitor at this account — a checked finding, not a missing field.' : esc(cl.engagement)}${cl.date_source ? `<span class="src">${esc(cl.date_source)}</span>` : ''}</span>` }));
    });
    body.appendChild(compRows);
    body.appendChild(spacer());

    // Where This Fits
    body.appendChild(profileSectionHeader('trend-fit', 'Where This Fits'));
    const fitRows = el('div', 'trend-fit-rows');
    (c.trend_fit || []).forEach(tf => {
      const t = D.trendById[tf.trend_id];
      fitRows.appendChild(el('div', 'trend-fit-row', { html: `
        <span class="stance-tag stance-${tf.stance}">${esc(tf.stance)}</span>
        <span>${t ? `<span class="trend-fit-link" data-tid="${esc(tf.trend_id)}">${esc(t.name)}</span>` : esc(tf.trend_id)} — ${esc(tf.evidence)}</span>` }));
    });
    body.appendChild(fitRows);
    $$('.trend-fit-link[data-tid]', fitRows).forEach(l => l.addEventListener('click', () => { window.location.href = 'index.html'; }));
    body.appendChild(spacer());

    // Closing gap statement
    const gaps = (c.competitive_landscape || []).filter(x => x.status === 'no_evidence_found');
    body.appendChild(profileSectionHeader('gaps', 'Competitive Gaps Found'));
    if (gaps.length) {
      body.appendChild(el('div', 'gap-statement has-gaps', { text: `No public evidence was found for ${gaps.map(g => g.competitor).join(' or ')} at ${c.display_name}, as of ${D.generated}. This reflects public-source visibility only — it does not confirm the absence of an actual engagement.` }));
    } else {
      body.appendChild(el('div', 'gap-statement', { text: `All three mandatory competitors (Accenture, IBM, TCS) have a confirmed public engagement at ${c.display_name}. No gap found in this research pass.` }));
    }

    main.appendChild(body);

    // Scroll to a specific section if arrived contextually
    if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(() => t.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50); }
  }
  function profileSectionHeader(id, title) {
    const s = el('div', 'profile-section'); s.id = id;
    s.appendChild(el('h2', 'profile-section-title', { text: title }));
    return s;
  }
  function spacer() { return el('div'); }
  function truncate(s, n) { return s.length > n ? s.slice(0, n - 1) + '…' : s; }

  /* ════════════════════════════════════════════════════════════════════════ EMERGING PLAYERS */
  function renderEmerging() {
    const main = $('#main-content');
    main.appendChild(el('div', 'page-header', { html: `
      <div class="page-eyebrow">Not part of the trend arc — signal tracking</div>
      <h1 class="page-title">Emerging Players</h1>
      <p class="page-sub">Companies reshaping the automotive value chain from outside the traditional OEM/Tier-1/SI structure. Each entry: core differentiation, traction, and exactly which part of the value chain it exposes.</p>
    `}));
    const body = el('div', 'section'); body.style.paddingTop = '8px';
    body.appendChild(el('div', 'emerging-source-note', { text: D.emergingSourceNote }));

    const grid = el('div', 'emerging-grid');
    D.emergingPlayers.forEach(p => grid.appendChild(buildEmergingCard(p)));

    renderFilterBar(body, applyFilter);
    body.appendChild(grid);
    main.appendChild(body);

    function applyFilter(tag) {
      $$('.emerging-card', grid).forEach(card => card.classList.toggle('hidden', !!tag && !card.dataset.tags.split('|').includes(tag)));
    }
  }
  function buildEmergingCard(p) {
    const card = el('div', 'emerging-card');
    card.dataset.tags = (p.priority_tags || []).join('|');
    const vc = p.value_chain_impact || {};
    card.innerHTML = `
      <div class="emerging-name">${esc(p.name)}</div>
      <p class="emerging-diff">${esc(p.core_differentiation)}</p>
      <div class="emerging-field"><div class="emerging-field-label">Traction</div><p>${esc(p.traction)}</p></div>
      <div class="emerging-field"><div class="emerging-field-label">Exposed in the value chain</div>${(vc.exposed_entities || []).map(e => `<span class="exposed-chip">${esc(e)}</span>`).join('')}</div>
      <div class="emerging-field"><div class="emerging-field-label">Mechanism</div><p>${esc(vc.mechanism || '')}</p></div>`;
    return card;
  }

  /* ════════════════════════════════════════════════════════════════════════ SEARCH (Ctrl/Cmd+K) */
  const searchPanel = $('#search-panel');
  function openSearch() {
    if (!searchPanel) return;
    searchPanel.removeAttribute('hidden');
    if (!searchPanel.dataset.built) { buildSearchPanel(); searchPanel.dataset.built = '1'; }
    const inp = $('#search-panel-input'); if (inp) { inp.value = ''; renderSearchResults(''); inp.focus(); }
  }
  function closeSearch() { searchPanel?.setAttribute('hidden', ''); }
  function buildSearchPanel() {
    searchPanel.innerHTML = `<div class="search-panel-inner"><div class="search-panel-input-wrap"><span class="search-panel-icon" aria-hidden="true"></span><input class="search-panel-input" id="search-panel-input" type="search" placeholder="Search companies…" autocomplete="off" aria-label="Search"><span class="search-panel-esc">Esc</span></div><div class="search-results" id="search-results-list"></div></div>`;
    searchPanel.addEventListener('click', e => { if (e.target === searchPanel) closeSearch(); });
    $('#search-panel-input').addEventListener('input', e => renderSearchResults(e.target.value));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });
    renderSearchResults('');
  }
  function renderSearchResults(query) {
    const list = $('#search-results-list'); if (!list) return;
    const q = query.trim().toLowerCase();
    if (!q) { list.innerHTML = `<div class="search-results-empty">Start typing to search companies…</div>`; return; }
    const matched = D.companies.filter(c => c.display_name.toLowerCase().includes(q));
    if (!matched.length) { list.innerHTML = `<div class="search-results-empty">No results for "<strong>${esc(query)}</strong>"</div>`; return; }
    list.innerHTML = matched.slice(0, 10).map(c => `<div class="search-result-item" data-id="${esc(c.id)}"><span class="search-result-icon">${logoHtml(c.display_name, 24)}</span><div><div class="search-result-name">${esc(c.display_name)}</div></div></div>`).join('');
    $$('.search-result-item', list).forEach(item => item.addEventListener('click', () => { closeSearch(); goToCompany(item.dataset.id); }));
  }
  document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); if (searchPanel?.hasAttribute('hidden')) openSearch(); else closeSearch(); } });
  const headerSearch = $('#global-search');
  if (headerSearch) { headerSearch.addEventListener('focus', e => { e.preventDefault(); e.target.blur(); openSearch(); }); headerSearch.parentElement.addEventListener('click', () => openSearch()); }
})();
