(function() {
    if (!window.EU_DATA) return;
    const d = window.EU_DATA;

    const sectors = (d.industry_cards || []).map((c, i) => {
        // Deep wine/plum/burgundy jewel tones for segments, distinct from the
        // lighter rose/mauve family used for priorities below.
        const colors = ['#7c2d4a', '#6b3fa0', '#b8336a', '#9c4f96', '#4a2545', '#a8557a', '#5c3566', '#c2185b', '#7a4069', '#8e2954'];
        return {
            id: c.id,
            label: c.name || c.db_industry,
            dbIndustry: c.db_industry || c.name,
            color: colors[i % colors.length]
        };
    });

    // Companies carry the canonical `industry` string (matches industry_cards'
    // db_industry, not the shorter display `name`) — match on that first so a
    // card's display label can differ from the raw industry value without
    // silently misfiling every one of its companies into sectors[0].
    const getSectorId = (industry) => {
        const s = sectors.find(sec => sec.dbIndustry === industry) || sectors.find(sec => sec.label === industry);
        if (s) return s.id;
        return null;
    };

    const slugify = s => String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    // Priorities are Capgemini's strategic offering themes for this industry
    // (independent of segment) — a separate filter dimension from `sectors`
    // above, sourced from `d.priorities` and matched onto companies by name
    // via `priority` the same way `industry` is matched onto sectors.
    const priorities = (d.priorities || []).map((p, i) => {
        // Lighter rose/mauve/orchid family — visually related to the segment
        // palette above but distinguishable at a glance as the second dimension.
        const colors = ['#b8336a', '#8e5b9e', '#c2185b', '#a0527a', '#7c4a8f', '#d1477a'];
        return {
            id: slugify(p.name),
            label: p.name,
            color: colors[i % colors.length]
        };
    });
    const getPriorityId = (priority) => {
        const p = priorities.find(pr => pr.label === priority);
        return p ? p.id : null;
    };

    const companies = (d.companies || []).map(c => {
        const rep = c.latest_brief ? [{
            date: c.latest_brief.brief_date || d.meta.publication_date || "2026-08-25",
            type: 'Brief',
            title: c.latest_brief.title || "Quarterly Update",
            summary: c.latest_brief.summary || "",
            sentiment: c.latest_brief.qc_score > 4.5 ? 'POSITIVE' : 'NEUTRAL'
        }] : [];

        return {
            id: String(c.company_id || c.ticker || Math.random()),
            name: c.name,
            ticker: c.ticker || "N/A",
            exchange: c.exchange || null,
            sector: getSectorId(c.industry),
            priority: getPriorityId(c.priority),
            hq: c.hq || null,
            marketCap: c.market_cap || null,
            employees: c.employees || null,
            founded: c.founded || null,
            summary: c.summary || ('Tracked participant in ' + c.industry + '.'),
            tags: c.aliases || [],
            reports: rep
        };
    });

    // Build one macro-intelligence feed covering EVERY segment, not just
    // whichever one happens to have hand-authored pilot_industries trends.
    // Previously the readout fallback only ran when intel.length === 0 —
    // i.e. only when *no* segment anywhere had trends — so as soon as one
    // segment had trends, every other segment silently got zero macro
    // intelligence items instead of falling back to its own readout.
    const intel = [];
    const sectorsWithTrends = new Set();
    if (d.pilot_industries) {
        Object.keys(d.pilot_industries).forEach(sectorId => {
            const pi = d.pilot_industries[sectorId];
            if (pi.trends && pi.trends.length) {
                sectorsWithTrends.add(sectorId);
                pi.trends.forEach((t) => {
                    intel.push({
                        id: t.trend_id || ('t' + Math.random()),
                        type: 'Macro Trend',
                        date: d.meta.publication_date || "2026-08-25",
                        sectors: [sectorId],
                        // Trends are tagged with the Capgemini priority theme(s) they
                        // support, matched by name onto the `priorities` array — this
                        // is what lets the priority chips highlight macro trends, not
                        // just companies.
                        priorities: (t.priorities || []).map(getPriorityId).filter(Boolean),
                        title: t.name || t.top_trend || 'Industry Trend',
                        summary: t.current_readout || t.what_changed || t.why_it_matters || "",
                        companies: [],
                        // Research provenance — McKinsey/BCG/Bain/Big 4/regulatory/
                        // earnings-call sources cited for this trend, from `evidence`.
                        sources: (pi.evidence && pi.evidence[t.trend_id]) || [],
                        keyFacts: [
                            t.what_changed ? "What changed: " + t.what_changed : null,
                            t.why_it_matters ? "Why it matters: " + t.why_it_matters : null,
                            t.conversation_hypothesis ? "Hypothesis: " + t.conversation_hypothesis : null
                        ].filter(Boolean)
                    });
                });
            }
        });
    }

    (d.industry_cards || []).forEach((c, i) => {
        if (sectorsWithTrends.has(c.id)) return;
        intel.push({
            id: 'intel-' + c.id + '-' + i,
            type: 'Sector Readout',
            date: c.readout_as_of || d.meta.publication_date || "2026-08-25",
            sectors: [c.id],
            priorities: [],
            title: c.eyebrow || c.top_trend || 'Sector Update',
            summary: c.readout || c.top_trend || "",
            companies: [],
            sources: [],
            keyFacts: []
        });
    });

    window.EI_DATA = {
        meta: {
            edition: d.meta.edition || "August 2026",
            description: d.meta.editorial_readout || d.meta.product_name || "Industry Intelligence Report",
            productName: d.meta.product_name || "Industry",
            updated: d.meta.publication_date || "2026-08-25",
        },
        sectors: sectors,
        priorities: priorities,
        intelligence: intel,
        companies: companies,
        sentimentLabels: {
            POSITIVE: { label: 'Positive', color: '#16a34a' },
            NEUTRAL: { label: 'Neutral', color: '#94a3b8' },
            NEGATIVE: { label: 'Negative', color: '#dc2626' }
        }
    };
})();
