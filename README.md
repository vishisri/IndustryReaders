# Industry Intelligence Hub

**Created by:** Vishist Srivastava  
**Last Updated:** September 21, 2026  
**Purpose:** Enterprise sales enablement — macro trend analysis across 9 global industries

## Overview

A static HTML intelligence platform built for IT consulting sales teams. Each industry sub-site delivers:
- Macro trend readouts from Q2 2026 earnings calls
- Analyst insights from McKinsey, BCG, and Bain
- Regulatory updates and sector news
- 25+ company profiles per industry

## Industries Covered

Each reader is broken out by Capgemini's official client **segments** and strategic **priorities** for that industry, in addition to the company directory.

| Folder | Industry | Badge | Segments |
|:---|:---|:---|:---|
| `energy-utilities/` | Energy & Utilities | E·U | Agriculture, Mining & Quarrying, Oil & Gas, Renewable Energy, Utilities, Water/Waste & Environment |
| `aerospace-defense/` | Aerospace & Defense | A·D | Aerospace & Defense (single segment; priority-led) |
| `automotive-mobility/` | Automotive | AUTO | Automotive OEM, Auto Suppliers and Others |
| `banking/` | Banking | B·K | Capital Markets, Commercial Banking, Retail Banking, Wealth Management & Private Banking |
| `healthcare-lifesciences/` | Life Sciences | L·S | Pharma, Bio & Medical, Crop Sciences |
| `insurance/` | Insurance | I·N | General Insurance/P&C, Health Payer, Life & Annuities |
| `public-sector/` | Public Sector | PS | Government, Education & Research, Healthcare, Public Admin, Public Security & Police, Tax & Welfare — Europe/APAC focus, non-defense |
| `technology-software/` | Tech & Digital | T·D | Electronics/Hardware & Equipment, Digital, Independent Software Vendor, Semiconductors |
| `telecom/` | Telecoms | T·C | Communication Service Provider (CSP), Network Equipment Provider (NEP), Other Telecoms |

Consumer Products & Retail is part of Capgemini's industry taxonomy but does not yet have a reader in this hub.

## Deployment

### Deploy to Vercel (Recommended)

Each industry folder is an independent static site with its own `vercel.json`.

**Option A — Deploy the entire hub as one Vercel project:**
```bash
cd industry-readers
vercel --prod
```

**Option B — Deploy each industry as a separate Vercel project:**
```bash
cd industry-readers/banking
vercel --prod
```

### Deploy to GitHub Pages

Push the entire `industry-readers/` folder to a GitHub repo and enable Pages from the `main` branch root.

## Local Development

Open any `index.html` directly in your browser — no build step required.

```bash
# macOS / Linux
open energy-utilities/index.html

# Windows
start energy-utilities/index.html
```

## File Structure

```
industry-readers/
├── index.html              ← Hub landing page (links all 9)
├── vercel.json
├── .gitignore
├── README.md
│
├── energy-utilities/        (rebuilt 2026-09-21 — Trends/Signal/Companies)
│   ├── index.html           (Trends)
│   ├── signal.html          (Public Competitive Signal)
│   ├── companies.html       (Account Directory + profile)
│   ├── vercel.json
│   ├── source/              ← raw research JSON, provenance only
│   └── assets/
│       ├── data.js          (raw content, per-industry)
│       ├── adapter.js       (shared, normalizes data.js into one shape)
│       ├── app.js           (shared, rendering only)
│       └── styles.css       (shared tokens + this industry's own palette)
│
├── banking/                 ← same rebuilt structure as above
├── insurance/                 ← same, migrated off the old whitespace/CRM pages
├── telecom/                 ← same
├── public-sector/           ← same (source data: GPS)
├── healthcare-lifesciences/ ← same (Life Sciences)
├── automotive-mobility/     ← same, plus emerging.html (Emerging Players)
│
├── aerospace-defense/        (untouched — blocked pending methodology rebuild)
└── technology-software/      (untouched — no new research data yet)
```

## Data Sources

- Q2 2026 earnings call transcripts
- McKinsey Global Institute reports
- BCG industry perspectives (2026)
- Bain & Company macro reports
- Regulatory filings (FDA, FCC, FAA, DoD, Basel Committee, EU AI Act)
