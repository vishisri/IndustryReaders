/* ─────────────────────────────────────────────────────────────────────────
   INDUSTRY INTELLIGENCE PORTAL · app.js (shared, byte-identical across every
   industry). Trends (Act 1) · Competitive Signal (Act 2) · Companies (Act 3)
   · Emerging Players where applicable. Content from data.js/adapter.js —
   this file is rendering only.
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

  /* ── Evidence-status legend (Section 4) — every status renders distinctly,
     never collapsed to a confirmed/not-confirmed binary. ── */
  const STATUS_META = {
    confirmed:                     { label: 'Confirmed',              cls: 'status-confirmed' },
    confirmed_but_dated:           { label: 'Confirmed · dated',       cls: 'status-confirmed-dated' },
    confirmed_but_weak:            { label: 'Confirmed · weak signal', cls: 'status-confirmed-weak' },
    confirmed_but_lost:            { label: 'Confirmed · lost',        cls: 'status-confirmed-lost' },
    no_evidence_found:             { label: 'No evidence found',       cls: 'status-no-evidence' },
    unverified_template_pattern:   { label: 'Not yet verified',        cls: 'status-unverified' },
    confirmed_weak_sourcing:       { label: 'Confirmed · weak sourcing',        cls: 'status-unverified' },
    confirmed_needs_reverification:{ label: 'Confirmed · needs re-verification', cls: 'status-unverified' }
  };
  function statusMeta(status) { return STATUS_META[status] || { label: esc(status || 'Unknown'), cls: 'status-no-evidence' }; }

  /* ── Persistent priority filter (shared across pages, saved to localStorage).
     Multi-select per Section 5 — never forces a single choice. ── */
  const FILTER_KEY = 'priority_filter_v2';
  function getActiveFilters() {
    try { const raw = JSON.parse(localStorage.getItem(FILTER_KEY) || '[]'); return Array.isArray(raw) ? raw : []; }
    catch (e) { return []; }
  }
  function setActiveFilters(arr) { try { localStorage.setItem(FILTER_KEY, JSON.stringify(arr)); } catch (e) {} }

  function renderFilterBar(mountEl, onChange) {
    const bar = el('div', 'priority-filter-bar');
    const inner = el('div', 'priority-filter-inner');
    inner.innerHTML = `<span class="priority-filter-label">Filter by priority (select any number):</span>`;
    const allChip = el('button', 'sector-chip active');
    allChip.innerHTML = `<span class="sector-label">All</span>`;
    inner.appendChild(allChip);
    const chips = {};
    D.priorityTags.forEach(tag => {
      const chip = el('button', 'sector-chip');
      chip.innerHTML = `<span class="sector-label">${esc(tag)}</span>`;
      chips[tag] = chip;
      inner.appendChild(chip);
    });
    bar.appendChild(inner);
    mountEl.appendChild(bar);

    let active = getActiveFilters().filter(t => chips[t]);

    function render() {
      allChip.classList.toggle('active', active.length === 0);
      Object.entries(chips).forEach(([tag, chip]) => chip.classList.toggle('active', active.includes(tag)));
      setActiveFilters(active);
      onChange(active);
    }
    allChip.addEventListener('click', () => { active = []; render(); });
    Object.entries(chips).forEach(([tag, chip]) => chip.addEventListener('click', () => {
      active = active.includes(tag) ? active.filter(t => t !== tag) : [...active, tag];
      render();
    }));
    render();
    return bar;
  }
  function matchesFilter(tags, active) {
    if (!active || !active.length) return true;
    return (tags || []).some(t => active.includes(t));
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
    const industryLabel = document.body.dataset.industry || 'Industry';

    if (D.trendRoster && D.trendRoster.length) {
      // Real per-company data exists (who's tagged to each priority, with a
      // justification), but it isn't evidence-graded the way Auto's t1-t5
      // are - no direction, no current-readout narrative, no financial
      // reality check. Rendered as its own honest panel type, not dressed
      // up as a trend card, so it never reads as equivalent depth.
      hero.innerHTML = `
        <div class="hero-badge">${esc(industryLabel)} Industry Intelligence</div>
        <h1 class="hero-heading">Trends</h1>
        <p class="hero-sub">Companies tagged to this priority in the underlying research, with the recorded justification. Not yet evidence-graded to the depth of a full trend narrative — that's a separate follow-on synthesis pass.</p>`;
      main.appendChild(hero);
      const section = el('div', 'section');
      D.trendRoster.forEach(t => section.appendChild(buildRosterPanel(t)));
      main.appendChild(section);
      const bridge = el('div', 'section'); bridge.style.paddingTop = '0';
      bridge.innerHTML = `<p style="margin-top:14px;"><a class="section-link" href="signal.html">See the Competitive Signal →</a></p>`;
      main.appendChild(bridge);
      return;
    }

    if (!D.trends || !D.trends.length) {
      // Only a macro trend-seed paragraph exists — not yet evidence-graded
      // per company. Show that honestly instead of fabricating trend cards.
      hero.innerHTML = `
        <div class="hero-badge">${esc(industryLabel)} Industry Intelligence</div>
        <h1 class="hero-heading">Trends</h1>
        <p class="hero-sub">${D.trendNarrative ? esc(D.trendNarrative.text) : 'Trend synthesis not yet available for this industry.'}</p>`;
      main.appendChild(hero);
      if (D.trendNarrative && D.trendNarrative.note) {
        const badge = el('div', 'trend-synthesis-pending', { text: `Synthesis pending — ${D.trendNarrative.note}` });
        main.appendChild(badge);
      }
      const bridge = el('div', 'section');
      bridge.innerHTML = `<p style="margin-top:14px;"><a class="section-link" href="signal.html">See the Competitive Signal →</a></p>`;
      main.appendChild(bridge);
      return;
    }

    hero.innerHTML = `
      <div class="hero-badge">${esc(industryLabel)} Industry Intelligence</div>
      <h1 class="hero-heading">Trends</h1>
      <p class="hero-sub">Trends evidenced against the current earnings cycle, full detail one click deeper.</p>`;
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

    function applyFilter(active) {
      $$('.trend-card', grid).forEach(card => card.classList.toggle('hidden', !matchesFilter(card.dataset.tags.split('|').filter(Boolean), active)));
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

  function buildRosterPanel(t) {
    const panel = el('div', 'company-roster-panel');
    const companies = (t.supporting_companies || []).map(sc => {
      const c = D.companyByName[sc.company];
      const nameHtml = c ? `<span class="trend-company-link" data-id="${esc(c.id)}">${esc(c.display_name)}</span>` : `<span>${esc(sc.company)}</span>`;
      const justification = sc.justification && !/^\(justification/.test(sc.justification) ? esc(sc.justification) : '';
      return `<div class="roster-row">${nameHtml}${justification ? `<span class="roster-justification">${justification}</span>` : ''}</div>`;
    }).join('');
    panel.innerHTML = `
      <div class="roster-panel-head">
        <h3 class="roster-panel-title">${esc(t.trend_name)}</h3>
        <span class="roster-panel-count">${t.company_count || (t.supporting_companies || []).length} companies</span>
      </div>
      <div class="roster-rows">${companies}</div>`;
    $$('.trend-company-link', panel).forEach(link => link.addEventListener('click', () => goToCompany(link.dataset.id, 'competitive-landscape')));
    return panel;
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
    $$('.trend-company-link', modal).forEach(link => link.addEventListener('click', () => goToCompany(link.dataset.id, 'competitive-landscape')));
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
      <p class="page-sub">What public sources show Accenture, IBM, and TCS doing across this book, by priority. Plain counts, not a ranking.</p>
    `}));
    const body = el('div', 'section'); body.style.paddingTop = '8px';
    body.appendChild(el('div', 'signal-caveat', { text: D.competitiveCaveat }));

    if (D.patternsNote && D.patternsNote.length) {
      const patterns = el('div', 'patterns-note');
      patterns.innerHTML = `<div class="patterns-note-title">Patterns to know</div>` +
        D.patternsNote.map(p => `<p>${esc(p)}</p>`).join('');
      body.appendChild(patterns);
    }

    if (D.signalHeatmap) {
      // A different depth of signal entirely - a company x priority heat
      // map plus a ranked whitespace table, not per-priority bar counts.
      // Rendered as its own table, not forced into the bar-chart cards.
      body.appendChild(buildHeatmapTable(D.signalHeatmap));
      main.appendChild(body);
      return;
    }

    const palette = ['var(--clr-p1)', 'var(--clr-p2)', 'var(--clr-p3)', 'var(--clr-p4)', 'var(--clr-p5)', 'var(--clr-p6)', 'var(--clr-p7)', 'var(--clr-p8)', 'var(--clr-p9)'];
    const colorByPriority = {};
    D.priorityTags.forEach((tag, i) => { colorByPriority[tag] = palette[i % palette.length]; });

    const cards = el('div', 'signal-cards');
    D.competitiveSummary.forEach(r => {
      const researched = r.companies_researched || r.companies_tagged || 0;
      const found = r.public_signal_found_for_at_least_one_competitor || 0;
      const none = r.no_public_signal_found_for_any || 0;
      const pct = researched ? Math.round((found / researched) * 100) : 0;
      const color = colorByPriority[r.priority] || 'var(--brand-primary)';
      const card = el('div', 'signal-card');
      card.style.setProperty('--signal-color', color);
      card.innerHTML = `
        <div class="signal-card-top">
          <span class="signal-card-name">${esc(r.priority)}</span>
          <span class="signal-card-stat">${researched ? `<b>${found}</b> of ${researched} researched` : 'not yet researched'}</span>
        </div>
        ${researched ? `<div class="signal-bar">
          <div class="signal-bar-found" style="width:${pct}%"></div>
          <div class="signal-bar-none" style="width:${100 - pct}%"></div>
        </div>
        <div class="signal-legend">
          <span><i style="background:${color}"></i>Public signal found</span>
          <span><i style="background:var(--border-hover)"></i>None found (${none})</span>
        </div>` : `<div class="signal-bar"><div class="signal-bar-none" style="width:100%"></div></div>
        <div class="signal-legend"><span>No companies tagged to this priority yet — flagged as a coverage gap, not researched as zero.</span></div>`}
        ${r.data_quality_note ? `<div class="signal-data-quality-note">${esc(r.data_quality_note)}</div>` : ''}
      `;
      cards.appendChild(card);
    });
    body.appendChild(cards);
    main.appendChild(body);
    main.appendChild(el('hr', 'divider'));

    const flagSection = el('div', 'section');
    flagSection.innerHTML = `<div class="section-header"><h2 class="section-title">Where no public signal was found for a named competitor</h2></div>
      <p class="page-sub">A real finding, not a gap in the research — the caveat above applies to every item here.</p>`;
    const flagList = el('div', 'signal-flags-list');
    D.noEvidenceFlags.forEach(f => {
      const c = D.companyByName[f.company];
      const competitors = Array.isArray(f.competitor_with_no_public_signal) ? f.competitor_with_no_public_signal.join(', ') : f.competitor_with_no_public_signal;
      const item = el('div', 'signal-flag-item');
      item.innerHTML = c ? `<span class="co-link">${esc(f.company)}</span> — no signal for ${esc(competitors)}` : `${esc(f.company)} — no signal for ${esc(competitors)}`;
      if (c) $('.co-link', item).addEventListener('click', () => goToCompany(c.id, 'competitive-landscape'));
      flagList.appendChild(item);
    });
    flagSection.appendChild(flagList);
    main.appendChild(flagSection);
  }

  function buildHeatmapTable(hm) {
    const wrap = el('div', 'heatmap-wrap');
    const priorityCols = hm.headers.slice(1);
    const theadCells = priorityCols.map(h => `<th>${esc(h)}</th>`).join('');
    const rows = hm.rows.map(row => {
      const cells = priorityCols.map(col => {
        const v = row[col];
        const open = v === 'OPEN';
        const na = v === 'N/A';
        return `<td class="${open ? 'heatmap-open' : na ? 'heatmap-na' : 'heatmap-vendor'}">${esc(v)}</td>`;
      }).join('');
      return `<tr><td class="heatmap-company">${esc(row.Company)}</td>${cells}</tr>`;
    }).join('');
    const rankingRows = (hm.ranking || []).map(r => `
      <tr>
        <td>${esc(r.Rank)}</td>
        <td class="heatmap-company">${esc(r.Company)}</td>
        <td>${esc(r['Competitors Absent (Out of 3)'])}</td>
        <td>${esc(r['Specific Absent Competitor Names'])}</td>
        <td style="white-space:pre-line;">${esc(r['Targeted Whitespace Priority Areas (Marked "OPEN")'])}</td>
      </tr>`).join('');
    wrap.innerHTML = `
      <div class="heatmap-legend"><span class="heatmap-vendor">Accenture / IBM / TCS</span> = public signal found &nbsp;·&nbsp; <span class="heatmap-open">OPEN</span> = no named competitor found &nbsp;·&nbsp; <span class="heatmap-na">N/A</span> = not applicable to this account</div>
      <div class="heatmap-scroll"><table class="heatmap-table"><thead><tr><th>Company</th>${theadCells}</tr></thead><tbody>${rows}</tbody></table></div>
      <h2 class="section-title" style="margin-top:32px;">Ranked by open whitespace</h2>
      <div class="heatmap-scroll"><table class="heatmap-table heatmap-ranking"><thead><tr><th>Rank</th><th>Company</th><th>Competitors absent</th><th>Which competitors</th><th>Open priority areas</th></tr></thead><tbody>${rankingRows}</tbody></table></div>`;
    return wrap;
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

    let activeTags = getActiveFilters(), activeQuery = '';
    renderFilterBar(body, applyFilters);
    body.appendChild(grid);
    main.appendChild(body);

    function applyFilters(active) { activeTags = active; runFilter(); }
    $('#co-search', searchWrap).addEventListener('input', e => { activeQuery = e.target.value.trim().toLowerCase(); runFilter(); });
    function runFilter() {
      $$('.company-card', grid).forEach(card => {
        const tags = card.dataset.tags.split('|').filter(Boolean);
        const matchesTag = matchesFilter(tags, activeTags);
        const matchesQuery = !activeQuery || card.dataset.name.includes(activeQuery);
        card.classList.toggle('hidden', !(matchesTag && matchesQuery));
      });
    }
  }

  function financialSummaryLine(c) {
    if (c.financial_snapshot && c.financial_snapshot.this_quarter) return { period: c.financial_snapshot.this_quarter.period, headline: c.financial_snapshot.this_quarter.margin || '' };
    const prose = (c.financial_snapshot && c.financial_snapshot.narrative) || c.financial_snapshot_text;
    return { period: 'Latest research pass', headline: truncate(prose || 'Not disclosed.', 140) };
  }

  function buildCompanyCard(c) {
    const color = orgColor(c.display_name);
    const card = el('div', 'company-card');
    card.dataset.tags = (c.priority_tags || []).join('|');
    card.dataset.name = c.display_name.toLowerCase();
    card.style.setProperty('--sector-color', color);
    const landscape = c.competitive_landscape || [];
    const confirmed = landscape.filter(x => x.status === 'confirmed').length;
    const fin = financialSummaryLine(c);
    card.innerHTML = `
      <div class="company-header">${logoHtml(c.display_name, 32)}<div class="company-header-text"><div class="company-name">${esc(c.display_name)}</div></div></div>
      <div class="company-meta"><span class="company-meta-item">${esc(fin.period)}</span></div>
      <p class="company-summary">${esc(fin.headline)}</p>
      <div class="company-tags">${(c.priority_tags || []).slice(0, 3).map(t => `<span class="company-tag">${esc(t)}</span>`).join('')}</div>
      <div class="company-latest-report">
        <div class="company-latest-label">Competitive exposure</div>
        <div class="company-latest-title">${landscape.length ? `${confirmed} of ${landscape.length} competitors confirmed` : 'Not yet researched'}</div>
      </div>`;
    card.addEventListener('click', () => goToCompany(c.id));
    return card;
  }

  function renderCompanyProfile(main, c) {
    const color = orgColor(c.display_name);
    const landscape = c.competitive_landscape || [];
    const confirmed = landscape.filter(x => x.status === 'confirmed').length;
    const topQuote = c.leadership_quotes && c.leadership_quotes[0];
    const topTrend = (c.trend_fit && c.trend_fit[0]) ? D.trendById[c.trend_fit[0].trend_id] : null;
    const fin = financialSummaryLine(c);

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
      <div class="exec-strip-item"><div class="exec-strip-label">${esc(fin.period)}</div><div class="exec-strip-value">${esc(fin.headline)}</div></div>
      <div class="exec-strip-item"><div class="exec-strip-label">Leadership is saying</div><div class="exec-strip-value">${topQuote ? '“' + esc(truncate(topQuote.statement, 110)) + '”' : 'No quotes recorded.'}</div></div>
      <div class="exec-strip-item"><div class="exec-strip-label">Competitive exposure</div><div class="exec-strip-value">${landscape.length ? `${confirmed} of ${landscape.length} competitors confirmed` : 'Not yet researched'}</div></div>
      <div class="exec-strip-item"><div class="exec-strip-label">Top trend connection</div><div class="exec-strip-value">${topTrend ? `<span class="trend-fit-link" id="strip-trend-link">${esc(topTrend.name)}</span>` : 'None recorded.'}</div></div>`;
    stripWrap.appendChild(strip);
    main.appendChild(stripWrap);
    if (topTrend) $('#strip-trend-link', strip).addEventListener('click', () => { window.location.href = 'index.html'; });

    const body = el('div', 'section'); body.style.paddingTop = '0';

    // Financial Snapshot
    body.appendChild(profileSectionHeader('financial-snapshot', 'Financial Snapshot'));
    if (c.financial_snapshot && c.financial_snapshot.this_quarter) {
      const fs = c.financial_snapshot;
      const snap = el('div', 'snapshot-grid');
      snap.innerHTML = `
        <div class="snapshot-card"><div class="snapshot-card-label">${esc(fs.this_quarter.period)}</div><div class="snapshot-card-body">${esc(fs.this_quarter.revenue)}<br>${esc(fs.this_quarter.margin)}</div></div>
        <div class="snapshot-card"><div class="snapshot-card-label">${esc(fs.last_quarter.period)}</div><div class="snapshot-card-body">${esc(fs.last_quarter.revenue)}<br>${esc(fs.last_quarter.margin)}</div></div>
        <div class="snapshot-card"><div class="snapshot-card-label">Guidance</div><div class="snapshot-card-body">${esc(fs.guidance)}</div></div>
        <div class="snapshot-card"><div class="snapshot-card-label">Vs. consensus</div><div class="snapshot-card-body">${esc(fs.vs_consensus)}</div></div>`;
      body.appendChild(snap);
    } else {
      body.appendChild(el('div', 'prose-card', { text: (c.financial_snapshot && c.financial_snapshot.narrative) || c.financial_snapshot_text || 'Not disclosed.' }));
    }
    body.appendChild(spacer());

    // Leadership Is Saying
    body.appendChild(profileSectionHeader('leadership', 'Leadership Is Saying'));
    (c.leadership_quotes || []).forEach(q => {
      const who = q.title_entity ? esc(q.title_entity) : (q.entity ? `${esc(q.title)} — ${esc(q.entity)}` : esc(q.title));
      const dateBit = q.date ? ` · ${esc(q.date)}` : '';
      body.appendChild(el('div', 'quote-card', { html: `<p class="quote-text">“${esc(q.statement)}”</p><div class="quote-attr">${esc(q.speaker)}, ${who}${dateBit} · ${esc(q.source)}</div>` }));
    });
    if (!c.leadership_quotes || !c.leadership_quotes.length) body.appendChild(el('div', 'prose-card', { text: 'No leadership quotes recorded.' }));
    body.appendChild(spacer());

    // Strategic Moves This Cycle
    body.appendChild(profileSectionHeader('strategic-move', 'Strategic Moves This Cycle'));
    if (c.strategic_move) {
      body.appendChild(el('div', 'move-card', { html: `<p><strong>${esc(c.strategic_move.announcement)}</strong></p><p class="move-grounding">${esc(c.strategic_move.financial_grounding)}</p>` }));
    } else if (c.strategic_move_text) {
      body.appendChild(el('div', 'prose-card', { text: c.strategic_move_text }));
    } else {
      body.appendChild(el('div', 'prose-card', { text: 'No strategic move recorded this cycle.' }));
    }
    body.appendChild(spacer());

    // Competitive Landscape
    body.appendChild(profileSectionHeader('competitive-landscape', 'Competitive Landscape'));
    if (c.needsVerificationBanner) {
      body.appendChild(el('div', 'verification-banner', { text: 'Not yet independently verified — most competitive findings below are unconfirmed research templates from an earlier pass, pending re-verification. Treat as directional only.' }));
    }
    const compRows = el('div', 'competitor-rows');
    landscape.forEach(cl => {
      const meta = statusMeta(cl.status);
      const noEv = cl.status === 'no_evidence_found';
      const detail = noEv
        ? 'No public signal found for this competitor at this account — a checked finding, not a missing field.'
        : esc(cl.engagement || cl._flag || '');
      compRows.appendChild(el('div', `competitor-row-item${noEv ? ' no-evidence' : ''}`, { html: `
        <span class="competitor-name-cell">${esc(cl.competitor)}</span>
        <span class="${meta.cls}">${esc(meta.label)}</span>
        <span class="competitor-detail-cell">${detail}${cl.date_source ? `<span class="src">${esc(cl.date_source)}</span>` : ''}</span>` }));
    });
    body.appendChild(compRows);
    body.appendChild(spacer());

    // Enterprise Core research finding (Auto only, gap-fill pass) — a
    // separate per-company field, not part of competitive_landscape, with
    // its own sourcing-confidence tier that must not read as confidently as
    // a fully confirmed finding when sourcing is weak or needs re-checking.
    if (c.enterprise_core) {
      const ec = c.enterprise_core;
      const ecMeta = statusMeta(ec.status);
      body.appendChild(profileSectionHeader('enterprise-core', 'Enterprise Core Research Finding'));
      body.appendChild(el('div', 'move-card', { html: `
        <p><span class="${ecMeta.cls}">${esc(ecMeta.label)}</span></p>
        <p style="margin-top:8px;">${esc(ec.details || '')}</p>
        ${ec.sourcing_note ? `<p class="move-grounding" style="margin-top:8px;">${esc(ec.sourcing_note)}</p>` : ''}` }));
      if (ec.leadership_quote) {
        body.appendChild(el('div', 'quote-card', { html: `<p class="quote-text">“${esc(ec.leadership_quote)}”</p>` }));
      }
      body.appendChild(spacer());
    }

    // Where This Fits
    body.appendChild(profileSectionHeader('trend-fit', 'Where This Fits'));
    if (c.trend_fit && c.trend_fit.length) {
      const fitRows = el('div', 'trend-fit-rows');
      c.trend_fit.forEach(tf => {
        const t = D.trendById[tf.trend_id];
        fitRows.appendChild(el('div', 'trend-fit-row', { html: `
          <span class="stance-tag stance-${tf.stance}">${esc(tf.stance)}</span>
          <span>${t ? `<span class="trend-fit-link" data-tid="${esc(tf.trend_id)}">${esc(t.name)}</span>` : esc(tf.trend_id)} — ${esc(tf.evidence)}</span>` }));
      });
      body.appendChild(fitRows);
      $$('.trend-fit-link[data-tid]', fitRows).forEach(l => l.addEventListener('click', () => { window.location.href = 'index.html'; }));
    } else if (c.trend_connection_text) {
      body.appendChild(el('div', 'prose-card', { text: c.trend_connection_text }));
    } else {
      body.appendChild(el('div', 'prose-card', { text: 'No trend connection recorded.' }));
    }
    body.appendChild(spacer());

    // Closing gap statement
    const gaps = landscape.filter(x => x.status === 'no_evidence_found');
    const unverified = landscape.filter(x => x.status === 'unverified_template_pattern');
    body.appendChild(profileSectionHeader('gaps', 'Competitive Gaps Found'));
    if (gaps.length) {
      body.appendChild(el('div', 'gap-statement has-gaps', { text: `No public evidence was found for ${gaps.map(g => g.competitor).join(' or ')} at ${c.display_name}, as of ${D.generated}. This reflects public-source visibility only — it does not confirm the absence of an actual engagement.` }));
    } else if (unverified.length) {
      body.appendChild(el('div', 'gap-statement has-gaps', { text: `No confirmed public-evidence gap was identified, but ${unverified.length} of ${landscape.length} competitor entries below are still unverified research templates, not independently confirmed — this account's Competitive Landscape should be treated as incomplete, not confirmed.` }));
    } else if (landscape.length) {
      body.appendChild(el('div', 'gap-statement', { text: `All ${landscape.length} tracked competitors have a confirmed public engagement at ${c.display_name}. No gap found in this research pass.` }));
    } else {
      body.appendChild(el('div', 'gap-statement', { text: 'No competitive landscape has been researched for this account yet.' }));
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
      <p class="page-sub">Companies reshaping this value chain from outside the traditional incumbent/SI structure. Each entry: core differentiation, traction, and exactly which part of the value chain it exposes.</p>
    `}));
    const body = el('div', 'section'); body.style.paddingTop = '8px';
    if (D.emergingSourceNote) body.appendChild(el('div', 'emerging-source-note', { text: D.emergingSourceNote }));

    const grid = el('div', 'emerging-grid');
    D.emergingPlayers.forEach(p => grid.appendChild(buildEmergingCard(p)));

    renderFilterBar(body, applyFilter);
    body.appendChild(grid);
    main.appendChild(body);

    function applyFilter(active) {
      $$('.emerging-card', grid).forEach(card => card.classList.toggle('hidden', !matchesFilter(card.dataset.tags.split('|').filter(Boolean), active)));
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
