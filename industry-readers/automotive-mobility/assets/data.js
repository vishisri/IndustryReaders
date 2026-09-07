window.EU_DATA = {
  meta: {
    product_name: "Automotive Intelligence",
    edition: "August 2026",
    publication_date: "2026-08-25",
    company_count: 25,
    brief_count: 25,
    editorial_readout: "In Q2 2026, the automotive industry shifted decisively from crisis management to profound structural transformation. Automakers faced severe margin pressures from high commodity costs and intense competition, particularly in the EV sector. The narrative has pivoted from 'growth at all costs' to scale discipline and vertical integration. Meanwhile, hybrid vehicles are serving as a critical profitability bridge amid volatile pure-play EV demand. Top consulting firms emphasize the shift toward AI-driven operational efficiency and the rise of Software-Defined Vehicles (SDVs), while a changing regulatory landscape sets strict Euro 7 emission targets and mandates advanced safety systems (ADAS) globally."
  },
  // Capgemini nomenclature: Automotive is split into two canonical segments —
  // Automotive OEM and Auto Suppliers and Others — retiring the prior ad-hoc
  // EV/SDV/Regulatory sub-verticals. The meaningful cross-cutting filtering
  // dimension is now carried by `priorities` below.
  priorities: [
    { name: "Resilient Supply Chain & Smart Mfg", icon: "\u{1F3ED}" },
    { name: "AI Augmented Engineering", icon: "\u{1F9E0}" },
    { name: "Software Driven Mobility", icon: "\u{1F4BB}" },
    { name: "Retail Excellence & Customer Journey/Experience", icon: "\u{1F6CD}️" }
  ],
  industry_cards: [
    {
      id: "automotive-oem",
      db_industry: "Automotive OEM",
      name: "Automotive OEM",
      icon: "\u{1F697}",
      eyebrow: "Scale Discipline Over Growth at Any Cost",
      top_trend: "OEMs are pivoting from volume-at-all-costs toward margin discipline, leaning on hybrids as a profitability bridge while EV demand growth cools and Chinese entrants intensify global price competition.",
      readout: "Q2 2026 earnings across mass-market, premium, and Chinese OEMs show stabilizing EV volumes but persistent commodity-cost and pricing pressure. Legacy players (Toyota, Ford, Honda) are validated by hybrid-led profitability, while EV-native and Chinese makers pursue platform consolidation and vertical integration to defend margin.",
      monitored_count: 18,
      core_count: 14,
      context_count: 4,
      readout_as_of: "2026-08-25",
      freshness_status: "CURRENT",
      freshness_age_days: 1,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=automotive-oem"
    },
    {
      id: "auto-suppliers-others",
      db_industry: "Auto Suppliers and Others",
      name: "Auto Suppliers and Others",
      icon: "\u{1F529}",
      eyebrow: "Software, Sensors, and Supply Resilience",
      top_trend: "Tier 1 suppliers and automotive tech providers are the structural beneficiaries of two durable trends: mandatory ADAS/safety content growth and the OEM shift toward software-defined vehicle compute platforms.",
      readout: "Suppliers spanning ADAS sensors (Valeo, Continental), driveline and safety systems (ZF), and vehicle compute/software (Bosch, ECARX) report more resilient demand than OEMs, insulated by regulatory-driven content growth and asset-light software licensing even as the broader supplier base manages cost cuts and restructuring.",
      monitored_count: 7,
      core_count: 5,
      context_count: 2,
      readout_as_of: "2026-08-25",
      freshness_status: "CURRENT",
      freshness_age_days: 1,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=auto-suppliers-others"
    }
  ],
  industry_pages: {
    "automotive-oem": {
      id: "automotive-oem",
      db_industry: "Automotive OEM",
      name: "Automotive OEM",
      eyebrow: "Scale Discipline Over Growth at Any Cost",
      latest_brief: { brief_id: 101, title: "Q2 2026 OEM Margins & Strategy Pivot", brief_date: "2026-08-15", qc_score: 4.8 },
      summary: {
        top_trend: "OEMs are pivoting from volume-at-all-costs toward margin discipline, leaning on hybrids as a profitability bridge while EV demand growth cools and Chinese entrants intensify global price competition.",
        readout: "Q2 2026 earnings across mass-market, premium, and Chinese OEMs show stabilizing EV volumes but persistent commodity-cost and pricing pressure. Legacy players are validated by hybrid-led profitability, while EV-native and Chinese makers pursue platform consolidation and vertical integration to defend margin."
      },
      counts: { industry: 18, monitored_count: 18, core_count: 14, context_count: 4 },
      presentation_mode: "canonical_brief"
    },
    "auto-suppliers-others": {
      id: "auto-suppliers-others",
      db_industry: "Auto Suppliers and Others",
      name: "Auto Suppliers and Others",
      eyebrow: "Software, Sensors, and Supply Resilience",
      latest_brief: { brief_id: 102, title: "Q2 2026 Supplier Resilience Update", brief_date: "2026-08-14", qc_score: 4.7 },
      summary: {
        top_trend: "Tier 1 suppliers and automotive tech providers are the structural beneficiaries of two durable trends: mandatory ADAS/safety content growth and the OEM shift toward software-defined vehicle compute platforms.",
        readout: "Suppliers spanning ADAS sensors, driveline and safety systems, and vehicle compute/software report more resilient demand than OEMs, insulated by regulatory-driven content growth and asset-light software licensing even as the broader supplier base manages cost cuts and restructuring."
      },
      counts: { industry: 7, monitored_count: 7, core_count: 5, context_count: 2 },
      presentation_mode: "canonical_brief"
    }
  },
  pilot_industries: {
    "automotive-oem": {
      trends: [
        {
          trend_id: "t1",
          display_order: 1,
          name: "The Hybrid Profitability Bridge",
          tracked_since: "2025-09",
          monthly_change: "IMPROVING",
          momentum: "Accelerating",
          breadth: "Broad",
          evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
          current_readout: "Automakers are increasingly leaning into hybrid vehicles as a profitability bridge amid pure-play EV margin squeezes. Hybrid sales have outperformed the broader auto market due to cost-conscious consumers seeking fuel efficiency.",
          what_changed: "In Q2 2026, companies reported stabilizing EV demand but significant margin impacts from commodity pricing, accelerating the strategic shift to hybrids.",
          why_it_matters: "Maintains volume and operational cash flow while bridging the gap until EVs achieve better cost parity.",
          confidence: "High",
          conversation_hypothesis: "Advise OEMs to optimize their product mix to include strong hybrid options while strictly controlling pure-EV capital expenditure.",
          priorities: ["Resilient Supply Chain & Smart Mfg"]
        },
        {
          trend_id: "t2",
          display_order: 2,
          name: "Margin Squeeze & Scale Discipline",
          tracked_since: "2026-01",
          monthly_change: "WORSENING",
          momentum: "Persistent",
          breadth: "Global",
          evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
          current_readout: "Many automakers faced severe headwinds from rising commodity prices (steel, aluminum, electronics) and geopolitical tensions, squeezing margins. Tesla reported a decline in operating margin to 1.4% in Q2 due to heavy CAPEX.",
          what_changed: "The narrative has fundamentally shifted from 'growth at all costs' to 'scale discipline' and cost rationalization.",
          why_it_matters: "Profitability is taking precedence over volume. Manufacturers must streamline manufacturing and drive down battery costs per kWh.",
          confidence: "High",
          conversation_hypothesis: "Discuss supply chain resilience, multilocal sourcing, and vertical integration strategies with clients.",
          priorities: ["Resilient Supply Chain & Smart Mfg"]
        },
        {
          trend_id: "t3",
          display_order: 3,
          name: "Generative AI Compresses Automotive R&D and Engineering Cycles",
          tracked_since: "2025-11",
          monthly_change: "IMPROVING",
          momentum: "Accelerating",
          breadth: "Broad",
          evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
          current_readout: "Automakers and Tier 1 suppliers are moving generative AI beyond chatbots into core R&D workflows — computer-aided engineering, generative design, and reverse/black-box engineering — to compress vehicle development timelines and engineering cost bases.",
          what_changed: "McKinsey's 2025 automotive R&D research and its 2025 R&D Leaders Forum found engineering leaders now estimate generative-design use cases can improve R&D processes by 10-20%, and reverse/black-box engineering use cases by 5-10%, with over 40% of automotive and manufacturing executives investing up to $6M (and over 10% investing more than $23M) in gen AI R&D.",
          why_it_matters: "AI-augmented engineering toolchains — from generative design to automated validation and shop-floor defect prediction — are becoming the primary lever OEMs and suppliers use to protect engineering budgets while still compressing time-to-market.",
          confidence: "Medium",
          conversation_hypothesis: "Where in your CAE and validation toolchain have you piloted generative design or reverse-engineering AI, and what R&D cycle-time reduction have you actually captured versus McKinsey's 10-20% benchmark?",
          priorities: ["AI Augmented Engineering"]
        },
        {
          trend_id: "t4",
          display_order: 4,
          name: "Digital-First, Trust-Driven Retail Reshapes the Auto Buying Journey",
          tracked_since: "2025-10",
          monthly_change: "IMPROVING",
          momentum: "Steady",
          breadth: "Broad",
          evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
          current_readout: "Consumers are consolidating trust and repeat-purchase intent around dealers who deliver seamless digital-to-physical journeys and transparent pricing, rather than around brand loyalty alone, pushing OEMs and dealer networks to invest in unified retail and service-journey platforms.",
          what_changed: "Deloitte's 2026 Global Automotive Consumer Study (28,500+ consumers surveyed across 27 markets, fielded October-November 2025) found US consumers place their highest trust in the dealership where they service their vehicle (25%) and the dealership where they bought it (21%), with buyers increasingly prioritizing fairness, transparency, and connected-feature value over brand alone.",
          why_it_matters: "Winning the post-purchase servicing relationship — not just the initial sale — is now the primary lever for retention and lifetime value, elevating demand for unified CRM, connected-vehicle data platforms, and omnichannel retail/service journey orchestration.",
          confidence: "High",
          conversation_hypothesis: "How unified is your customer data across the sales and service journey today, and are you capturing the retention value Deloitte's research shows dealer-service trust now drives?",
          priorities: ["Retail Excellence & Customer Journey/Experience"]
        }
      ],
      archetypes: [],
      gsi_hypotheses: [],
      watch_items: ["Commodity cost fluctuations", "Chinese market pricing wars", "Battery cost per kWh trends"],
      evidence: {
        "t1": ["McKinsey, \"Making Electric Vehicles Profitable\" (2025)", "Q2 2026 Earnings Call Transcripts — Toyota, Ford, Honda hybrid volume commentary"],
        "t2": ["BCG, \"Tariffs and the Outlook for US Automotive Demand\" (2025)", "McKinsey Supply Chain Risk Pulse 2025: Tariffs Reshuffle Global Trade Priorities", "Q2 2026 Earnings Call Transcript — Tesla"],
        "t3": ["McKinsey, \"Automotive R&D Transformation: Optimizing Gen AI's Potential Value\" (2025)", "McKinsey State of AI in 2025 — R&D Leaders Forum recap"],
        "t4": ["Deloitte 2026 Global Automotive Consumer Study", "BCG CES 2026 Automotive Perspectives — Generative AI and the Car-Buying Journey"]
      }
    },
    "auto-suppliers-others": {
      trends: [
        {
          trend_id: "t5",
          display_order: 1,
          name: "Software-Defined Vehicle Architecture Consolidation Creates New Supplier Value Pools",
          tracked_since: "2025-08",
          monthly_change: "IMPROVING",
          momentum: "Accelerating",
          breadth: "Global",
          evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
          current_readout: "The shift from distributed ECUs to centralized, zone-based and zonal-compute E/E architectures is consolidating automotive software and electronics into a distinct, faster-growing value pool that increasingly bypasses traditional hardware-centric supplier margins in favor of platform and licensing revenue.",
          what_changed: "McKinsey's Center for Future Mobility projects the global automotive software and electronics market will grow at roughly 4.5% CAGR to $519 billion by 2035, with fourth-generation domain-based and fifth-generation zonal-compute architectures expected to account for over 75% of production by 2035; BCG's 2026 Global Automotive Supplier Study and CES 2026 sessions with ZF, BorgWarner, and Cooper Standard highlighted deeper OEM-supplier software collaboration as the key path to capturing this shift.",
          why_it_matters: "Suppliers that pivot from component manufacturing to software platforms and compute licensing (as ECARX and Bosch are already demonstrating) are structurally insulated from OEM volume swings, creating a durable, asset-light consulting wedge around SDV platform strategy, software monetization, and OEM-supplier software co-development models.",
          confidence: "High",
          conversation_hypothesis: "Is your product roadmap positioned to capture platform/licensing economics from zonal compute consolidation, or still priced on legacy hardware-attach margins?",
          priorities: ["Software Driven Mobility"]
        }
      ],
      archetypes: [],
      gsi_hypotheses: [],
      watch_items: ["Zonal E/E architecture adoption pace", "OEM-supplier software co-development deals", "Compute platform licensing margins"],
      evidence: {
        "t5": ["McKinsey Center for Future Mobility, \"Mapping the Automotive Software and Electronics Landscape\" (2025)", "BCG, \"The 2026 Global Automotive Supplier Study\" (2026)"]
      }
    }
  },
  companies: [
    {
      company_id: 1,
      name: "Tesla, Inc.",
      ticker: "TSLA",
      priority: "AI Augmented Engineering",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Austin, Texas, USA",
      exchange: "NASDAQ",
      market_cap: "$1.35T",
      employees: "~125,000",
      founded: "2003",
      summary: "Tesla designs, manufactures, and sells electric vehicles, battery energy storage, and solar products, and remains the highest-valued automaker in the world despite intensifying EV price competition from Chinese rivals.",
      latest_brief: {
        brief_id: 201,
        title: "Q2 2026 Earnings: CAPEX vs Margin",
        brief_date: "2026-07-25",
        qc_score: 4.8,
        summary: "Tesla's Q2 2026 results underscore the industry-wide tension between growth investment and profitability: heavy capital expenditure on AI compute, robotics, and next-generation manufacturing continues to weigh on operating margin even as vehicle deliveries stabilize. Management is signaling patience with near-term margin compression in exchange for longer-term bets on autonomy and energy storage. Investors are increasingly parsing the CAPEX-to-margin tradeoff as the key swing factor in the stock's valuation, especially as Chinese EV makers undercut on price."
      },
      aliases: ["Tesla Motors"]
    },
    {
      company_id: 2,
      name: "Ford Motor Company",
      ticker: "F",
      priority: "Resilient Supply Chain & Smart Mfg",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Dearborn, Michigan, USA",
      exchange: "NYSE",
      market_cap: "$55B",
      employees: "~171,000",
      founded: "1903",
      summary: "Ford is a legacy American automaker producing trucks, SUVs, and passenger vehicles, and has been recalibrating its EV ambitions toward a hybrid-led, cost-disciplined product strategy.",
      latest_brief: {
        brief_id: 202,
        title: "Q2 2026 Positive Earnings Surprise",
        brief_date: "2026-07-27",
        qc_score: 4.5,
        summary: "Ford beat Street expectations in Q2 2026, driven largely by strength in its combustion and hybrid truck and SUV lineup rather than its EV segment, which continues to lose money. The result reinforces the broader industry narrative of hybrids acting as a profitability bridge while pure-EV volumes remain choppy. Management pointed to cost discipline, reduced EV capital spending pace, and pricing actions on high-margin trucks as the primary drivers of the upside surprise."
      },
      aliases: ["Ford"]
    },
    {
      company_id: 3,
      name: "Tata Motors Limited",
      ticker: "TTM",
      priority: "Resilient Supply Chain & Smart Mfg",
      industry: "Automotive OEM",
      industry_role: "context",
      hq: "Mumbai, India",
      exchange: "NSE/BSE (India); OTC (US)",
      market_cap: "$17B",
      employees: "~58,000",
      founded: "1945",
      summary: "Tata Motors is India's largest automaker by revenue, spanning passenger vehicles, commercial trucks, and premium global brands through its Jaguar Land Rover subsidiary.",
      latest_brief: {
        brief_id: 203,
        title: "Margin Warnings amid Commodity Squeeze",
        brief_date: "2026-08-01",
        qc_score: 4.2,
        summary: "Tata Motors flagged margin pressure in Q2 2026 stemming from elevated steel and battery-metal input costs, compounded by softness in Jaguar Land Rover's premium export markets. The commentary echoes the sector-wide shift away from volume-at-all-costs toward cost discipline. Management signaled selective price increases and supply-chain localization as near-term levers, while continuing to invest cautiously in its domestic EV rollout."
      },
      aliases: ["Tata"]
    },
    {
      company_id: 4,
      name: "Mahindra & Mahindra",
      ticker: "M&M",
      priority: "Retail Excellence & Customer Journey/Experience",
      industry: "Automotive OEM",
      industry_role: "context",
      hq: "Mumbai, India",
      exchange: "NSE/BSE (India)",
      market_cap: "$49B",
      employees: "~260,000",
      founded: "1945",
      summary: "Mahindra & Mahindra is a diversified Indian conglomerate and the country's largest utility-vehicle and farm-equipment maker, with a fast-growing SUV and EV portfolio.",
      latest_brief: {
        brief_id: 204,
        title: "Mitigating Inflation via Pricing Actions",
        brief_date: "2026-08-05",
        qc_score: 4.3,
        summary: "Mahindra is leaning on selective price increases across its SUV and EV lineup to offset persistent input-cost inflation in steel, aluminum, and battery materials. The company's strong domestic SUV franchise gives it more pricing power than export-dependent peers, cushioning the margin impact. Management reiterated confidence in its EV ramp (Born Electric platform) while emphasizing that near-term profitability protection takes priority over aggressive volume targets."
      },
      aliases: ["Mahindra"]
    },
    {
      company_id: 5,
      name: "ECARX Holdings Inc.",
      ticker: "ECX",
      priority: "Software Driven Mobility",
      industry: "Auto Suppliers and Others",
      industry_role: "core",
      hq: "Ningbo, China",
      exchange: "NASDAQ",
      market_cap: "$675M",
      employees: "~1,600",
      founded: "2017",
      summary: "ECARX is a Geely-affiliated automotive technology company that supplies computing platforms, infotainment systems, and software for software-defined vehicles to global automakers.",
      latest_brief: {
        brief_id: 205,
        title: "Strong Margin Improvement to 19.8%",
        brief_date: "2026-08-10",
        qc_score: 4.6,
        summary: "ECARX reported a marked gross-margin improvement to 19.8% in Q2 2026, driven by scaling of its automotive compute and cockpit software business beyond its anchor customer Geely into other global OEM partnerships. The result stands out against a backdrop of margin compression elsewhere in the industry, reflecting the relatively higher-margin, asset-light nature of SDV software and platform licensing versus vehicle manufacturing. Management pointed to expanding partnerships (including with chipmakers) as the basis for continued margin expansion."
      },
      aliases: ["ECARX"]
    },
    {
      company_id: 6,
      name: "Hyundai Motor Company",
      ticker: "HYMTF",
      priority: "Resilient Supply Chain & Smart Mfg",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Seoul, South Korea",
      exchange: "KRX (OTC: HYMTF in US)",
      market_cap: "$68B",
      employees: "~120,000",
      founded: "1967",
      summary: "Hyundai is South Korea's largest automaker, producing mass-market and premium vehicles globally with an expanding EV, hybrid, and hydrogen fuel-cell portfolio.",
      latest_brief: {
        brief_id: 206,
        title: "EV Strategy Updates",
        brief_date: "2026-08-01",
        qc_score: 4.5,
        summary: "Hyundai updated investors on its EV roadmap, rebalancing near-term production toward hybrids in key markets like the US while maintaining longer-term EV platform (E-GMP) investment. The shift reflects softer-than-expected pure-EV demand growth and tariff-related cost pressure on its US manufacturing footprint. Management also highlighted progress on battery cost reduction and continued expansion of its Georgia EV plant as central to its 2026-2027 strategy."
      },
      aliases: ["Hyundai"]
    },
    {
      company_id: 7,
      name: "Kia Corporation",
      ticker: "KIMTF",
      priority: "Retail Excellence & Customer Journey/Experience",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Seoul, South Korea",
      exchange: "KRX (OTC: KIMTF in US)",
      market_cap: "$35B",
      employees: "~52,000",
      founded: "1944",
      summary: "Kia is a South Korean automaker under the Hyundai Motor Group, known for value-oriented and design-forward vehicles with rapid growth in hybrid and EV models.",
      latest_brief: {
        brief_id: 207,
        title: "Sales Growth and Hybrid Expansion",
        brief_date: "2026-08-02",
        qc_score: 4.4,
        summary: "Kia posted solid sales growth in Q2 2026, with hybrid variants of its core SUV lineup (Sportage, Sorento) outperforming both pure-EV and pure-ICE trims. The company is widening its hybrid offering across more nameplates as a hedge against uneven EV demand, mirroring the broader industry pivot. Kia also cited resilient demand in North America and emerging markets as offsetting softer conditions in parts of Europe."
      },
      aliases: ["Kia"]
    },
    {
      company_id: 8,
      name: "Nissan Motor Co.",
      ticker: "NSANY",
      priority: "AI Augmented Engineering",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Yokohama, Japan",
      exchange: "Tokyo Stock Exchange (OTC: NSANY in US)",
      market_cap: "$8B",
      employees: "~134,000",
      founded: "1933",
      summary: "Nissan is a major Japanese automaker undergoing significant financial restructuring, pursuing new technology partnerships and cost cuts to restore competitiveness in EVs and core segments.",
      latest_brief: {
        brief_id: 208,
        title: "Solid State Battery Push",
        brief_date: "2026-08-03",
        qc_score: 4.3,
        summary: "Nissan reaffirmed its push into solid-state battery technology, framing it as a potential differentiator once its financial turnaround stabilizes. The company is betting that solid-state cells' higher energy density and faster charging could help it leapfrog competitors on EV cost and range economics later in the decade. The announcement comes amid an ongoing restructuring effort, including plant consolidation and deeper alliance ties, aimed at freeing up capital for R&D priorities like this one."
      },
      aliases: ["Nissan"]
    },
    {
      company_id: 9,
      name: "Honda Motor Co.",
      ticker: "HMC",
      priority: "Software Driven Mobility",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Tokyo, Japan",
      exchange: "NYSE (ADR); Tokyo Stock Exchange (primary)",
      market_cap: "$34B",
      employees: "~195,000",
      founded: "1948",
      summary: "Honda is a major Japanese automaker and engine manufacturer with a long-standing hybrid technology lead, now expanding its EV lineup while pursuing a strategic technology alliance with Nissan.",
      latest_brief: {
        brief_id: 209,
        title: "EV Lineup Expansion",
        brief_date: "2026-08-04",
        qc_score: 4.5,
        summary: "Honda outlined further additions to its EV lineup, including new models built on its dedicated EV architecture, while continuing to lean on its hybrid systems as the primary volume and profit driver. The expansion is paced deliberately, reflecting Honda's preference for measured capital deployment over the aggressive EV-only bets some rivals made. Executives also referenced deepening collaboration with Nissan on shared EV and software platforms as a way to spread development costs."
      },
      aliases: ["Honda"]
    },
    {
      company_id: 10,
      name: "Renault Group",
      ticker: "RNLSY",
      priority: "Resilient Supply Chain & Smart Mfg",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Boulogne-Billancourt, France",
      exchange: "Euronext Paris (OTC: RNLSY in US)",
      market_cap: "$11B",
      employees: "~100,000",
      founded: "1899",
      summary: "Renault is a French automaker with a strong European market presence, pursuing its EV strategy through the Ampere subsidiary while defending core combustion and hybrid model lines.",
      latest_brief: {
        brief_id: 210,
        title: "European Market Share Adjustments",
        brief_date: "2026-08-05",
        qc_score: 4.2,
        summary: "Renault reported share shifts across its core European markets as Chinese entrants and premium German rivals compete more aggressively on price and EV technology. The company is responding by prioritizing its most profitable segments and accelerating cost synergies within the Ampere EV unit rather than chasing volume across every category. Management flagged pricing discipline and platform-sharing with alliance partner Nissan as key levers for stabilizing share without sacrificing margin."
      },
      aliases: ["Renault"]
    },
    {
      company_id: 11,
      name: "SAIC Motor",
      ticker: "600104",
      priority: "Retail Excellence & Customer Journey/Experience",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Shanghai, China",
      exchange: "Shanghai Stock Exchange",
      market_cap: "$18B",
      employees: "~180,000",
      founded: "1955",
      summary: "SAIC Motor is China's largest state-owned automaker by volume, operating joint ventures with Volkswagen and GM alongside its own MG and IM brands, and is a leader in China's competitive EV market.",
      latest_brief: {
        brief_id: 211,
        title: "China EV Sales Dominance",
        brief_date: "2026-08-06",
        qc_score: 4.6,
        summary: "SAIC reported continued dominance in China's domestic EV volumes, powered by its own-brand MG and IM Motors lines alongside its joint-venture output. The scale advantage lets SAIC absorb the intense domestic price war better than smaller rivals, though margins remain thin. Management highlighted export growth, particularly of MG-branded EVs into Europe and emerging markets, as an increasingly important offset to domestic pricing pressure."
      },
      aliases: ["SAIC"]
    },
    {
      company_id: 12,
      name: "Geely Automobile Holdings",
      ticker: "GELYY",
      priority: "Resilient Supply Chain & Smart Mfg",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Hangzhou, China (listed in Hong Kong)",
      exchange: "Hong Kong Stock Exchange (OTC: GELYY in US)",
      market_cap: "$26B",
      employees: "~70,000",
      founded: "1986",
      summary: "Geely Automobile Holdings is a major Chinese automaker and parent of Volvo Cars, Polestar, and Zeekr, running a broad multi-brand portfolio spanning EVs and combustion vehicles.",
      latest_brief: {
        brief_id: 212,
        title: "Global Brand Integrations",
        brief_date: "2026-08-07",
        qc_score: 4.7,
        summary: "Geely advanced further integration across its multi-brand portfolio, consolidating platforms, sourcing, and software development shared between Geely-branded vehicles, Zeekr, Volvo, and Polestar. The move is aimed at extracting scale economics that offset margin pressure from China's EV price war. Management framed the integration as central to Geely's ambition to compete more directly with global premium EV players while keeping unit costs down."
      },
      aliases: ["Geely"]
    },
    {
      company_id: 13,
      name: "Porsche AG",
      ticker: "POAHY",
      priority: "Retail Excellence & Customer Journey/Experience",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Stuttgart, Germany",
      exchange: "Frankfurt Stock Exchange (OTC: POAHY in US)",
      market_cap: "$46B",
      employees: "~42,600",
      founded: "1931",
      summary: "Porsche AG is a German luxury sports car maker, majority-owned by Volkswagen Group, known for maintaining premium pricing power even as broader industry EV demand fluctuates.",
      latest_brief: {
        brief_id: 213,
        title: "Luxury EV Margins Hold Steady",
        brief_date: "2026-08-08",
        qc_score: 4.8,
        summary: "Porsche reported that its luxury positioning has kept margins comparatively resilient even as its Taycan and Macan EV variants face slower-than-hoped adoption in some markets. The brand's pricing power and wealthy customer base insulate it somewhat from the commodity-driven margin squeeze hitting mass-market EV makers. Management reiterated a flexible platform strategy that allows it to adjust the EV-to-combustion mix by model and market based on real-time demand signals."
      },
      aliases: ["Porsche"]
    },
    {
      company_id: 14,
      name: "Ferrari N.V.",
      ticker: "RACE",
      priority: "Retail Excellence & Customer Journey/Experience",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Maranello, Italy",
      exchange: "NYSE / Euronext Milan",
      market_cap: "$78B",
      employees: "~5,700",
      founded: "1947",
      summary: "Ferrari is an ultra-luxury Italian sports car manufacturer known for exceptional margins driven by production exclusivity and low volumes, now pursuing a gradual, brand-protective electrification strategy.",
      latest_brief: {
        brief_id: 214,
        title: "Exclusivity and Electrification",
        brief_date: "2026-08-09",
        qc_score: 4.9,
        summary: "Ferrari continues to prove that exclusivity, not volume, drives its record margins, with waitlists and limited production runs preserving pricing power that most automakers cannot match. The company is electrifying deliberately, introducing hybrid and fully electric models without diluting the brand's performance identity or scarcity value. Management reiterated that any EV push will remain subordinate to maintaining Ferrari's premium positioning and order backlog discipline."
      },
      aliases: ["Ferrari"]
    },
    {
      company_id: 15,
      name: "Lucid Group, Inc.",
      ticker: "LCID",
      priority: "Resilient Supply Chain & Smart Mfg",
      industry: "Automotive OEM",
      industry_role: "context",
      hq: "Newark, California, USA",
      exchange: "NASDAQ",
      market_cap: "$2.5B",
      employees: "~9,000",
      founded: "2007",
      summary: "Lucid Group is a US luxury EV maker known for long-range battery technology, reliant on continued capital raises led by Saudi Arabia's Public Investment Fund to fund its production ramp.",
      latest_brief: {
        brief_id: 215,
        title: "Capital Raising and Production Ramp",
        brief_date: "2026-08-10",
        qc_score: 4.1,
        summary: "Lucid continues to depend on external capital, primarily from its majority backer the Saudi Public Investment Fund, to bridge the gap between its current production scale and profitability. The Q2 2026 update highlighted incremental progress ramping Gravity SUV output alongside the Air sedan, though volumes remain far below the scale needed for positive unit economics. Management pointed to cost-reduction initiatives and new capital commitments as evidence the company can sustain its runway through the ramp."
      },
      aliases: ["Lucid Motors", "Lucid"]
    },
    {
      company_id: 16,
      name: "NIO Inc.",
      ticker: "NIO",
      priority: "Software Driven Mobility",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Shanghai, China",
      exchange: "NYSE / Hong Kong / Singapore",
      market_cap: "$13B",
      employees: "~35,000",
      founded: "2014",
      summary: "NIO is a Chinese premium EV maker distinguished by its battery-swapping network and subscription-based battery-as-a-service model, competing intensely in China's price-sensitive EV market.",
      latest_brief: {
        brief_id: 216,
        title: "Battery Swapping Network Expansion",
        brief_date: "2026-08-11",
        qc_score: 4.5,
        summary: "NIO continued expanding its proprietary battery-swap station network, a key differentiator that decouples vehicle purchase price from battery cost via its subscription model. The expansion supports NIO's push into lower-priced sub-brands aimed at broadening its addressable market beyond premium buyers. Management framed the network as both a customer-retention tool and a long-term cost advantage once station utilization scales, even as the company continues to manage cash burn closely."
      },
      aliases: ["NIO"]
    },
    {
      company_id: 17,
      name: "Ola Electric",
      ticker: "OLA",
      priority: "Resilient Supply Chain & Smart Mfg",
      industry: "Automotive OEM",
      industry_role: "context",
      hq: "Bengaluru, India",
      exchange: "NSE (India)",
      market_cap: "$1.4B",
      employees: "~5,000",
      founded: "2017",
      summary: "Ola Electric is an Indian electric two-wheeler manufacturer and one of the country's largest EV scooter makers, expanding into electric motorcycles and in-house battery cell manufacturing.",
      latest_brief: {
        brief_id: 217,
        title: "Two-Wheeler EV Market Penetration",
        brief_date: "2026-08-12",
        qc_score: 4.4,
        summary: "Ola Electric reported further penetration gains in India's fast-growing electric two-wheeler segment, though competition from established incumbents like Bajaj and TVS continues to pressure market share. The company is leaning on its vertically integrated battery cell strategy (via its Gigafactory) to differentiate on cost as subsidies phase down. Management pointed to new motorcycle launches and expanding service network density as key levers for sustaining growth into the next fiscal year."
      },
      aliases: ["Ola"]
    },
    {
      company_id: 18,
      name: "Valeo SE",
      ticker: "VLEEY",
      priority: "AI Augmented Engineering",
      industry: "Auto Suppliers and Others",
      industry_role: "core",
      hq: "Paris, France",
      exchange: "Euronext Paris (OTC: VLEEY in US)",
      market_cap: "$3.8B",
      employees: "~87,000",
      founded: "1923",
      summary: "Valeo is a French automotive supplier specializing in ADAS sensors, driving-assistance systems, and electrification components, positioning itself as a key enabler of global vehicle safety compliance.",
      latest_brief: {
        brief_id: 218,
        title: "ADAS Technology Adoption",
        brief_date: "2026-08-13",
        qc_score: 4.6,
        summary: "Valeo reported accelerating adoption of its ADAS sensor and camera systems as automakers race to meet tightening global safety mandates, including expanded driver-monitoring and collision-avoidance requirements. The regulatory tailwind is providing a relatively stable growth pocket even as Valeo's broader powertrain and thermal businesses face the same margin pressures affecting the wider supplier base. Management highlighted new design wins with both legacy OEMs and Chinese EV makers as evidence of broadening ADAS demand."
      },
      aliases: ["Valeo"]
    },
    {
      company_id: 19,
      name: "Continental AG",
      ticker: "CTTAY",
      priority: "AI Augmented Engineering",
      industry: "Auto Suppliers and Others",
      industry_role: "core",
      hq: "Hanover, Germany",
      exchange: "Frankfurt Stock Exchange (OTC: CTTAY in US)",
      market_cap: "$14B",
      employees: "~54,000",
      founded: "1871",
      summary: "Continental AG is a German industrial group providing tires and rubber technology, having spun off its automotive electronics and safety-systems business as the separately listed Aumovio SE in 2025.",
      latest_brief: {
        brief_id: 219,
        title: "Safety Systems and Sensor Innovations",
        brief_date: "2026-08-14",
        qc_score: 4.5,
        summary: "Continental's automotive safety and sensor innovation pipeline, now largely housed within the spun-off Aumovio unit, continues to advance ADAS and radar/lidar sensor technology aimed at meeting tightening global regulatory requirements. The 2025 separation of the automotive electronics business from the core tire and rubber operations was designed to let each unit pursue distinct capital allocation and growth priorities. Management across both entities pointed to regulatory-driven demand for advanced sensing as a structurally growing market regardless of near-term EV volume swings."
      },
      aliases: ["Continental"]
    },
    {
      company_id: 20,
      name: "ZF Friedrichshafen AG",
      ticker: "ZF",
      priority: "Resilient Supply Chain & Smart Mfg",
      industry: "Auto Suppliers and Others",
      industry_role: "core",
      hq: "Friedrichshafen, Germany",
      exchange: "Private",
      market_cap: "N/A (privately held; €38.8B FY2025 revenue) (valuation)",
      employees: "~153,000",
      founded: "1915",
      summary: "ZF Friedrichshafen is a privately held German automotive supplier majority-owned by the Zeppelin Foundation, specializing in driveline, chassis, and braking and safety technology.",
      latest_brief: {
        brief_id: 220,
        title: "Next-Gen Braking Systems",
        brief_date: "2026-08-15",
        qc_score: 4.4,
        summary: "ZF detailed progress on next-generation brake-by-wire and integrated chassis-control systems designed to support both stricter global safety mandates and the higher-torque demands of electric powertrains. As a privately held supplier without public market pressure, ZF has been able to invest steadily through the industry downturn, though it has also pursued cost cuts and workforce reductions to protect margins amid soft OEM order volumes. Management framed braking and safety systems as a core growth pillar alongside its electrified driveline business."
      },
      aliases: ["ZF"]
    },
    {
      company_id: 21,
      name: "Bosch Automotive",
      ticker: "BOSCH",
      priority: "Software Driven Mobility",
      industry: "Auto Suppliers and Others",
      industry_role: "core",
      hq: "Gerlingen, Germany",
      exchange: "Private",
      market_cap: "N/A (privately held; ~€90B group revenue) (valuation)",
      employees: "~418,000",
      founded: "1886",
      summary: "Bosch is a diversified German engineering and technology conglomerate, majority-owned by the Robert Bosch Stiftung foundation, and is the world's largest automotive supplier, investing heavily in AI-enabled vehicle compute and software-defined vehicle architecture.",
      latest_brief: {
        brief_id: 221,
        title: "AI and Vehicle Compute Platforms",
        brief_date: "2026-08-15",
        qc_score: 4.8,
        summary: "Bosch outlined further investment in centralized vehicle compute platforms and embedded AI, positioning itself as a foundational technology layer for automakers building software-defined vehicles. The strategy leverages Bosch's scale and cross-industry AI expertise (spanning industrial and consumer sectors) to offer OEMs an alternative to building compute stacks in-house. As a private company insulated from quarterly market pressure, Bosch is able to commit to multi-year platform R&D even as many public OEM customers pull back capital spending."
      },
      aliases: ["Bosch"]
    },
    {
      company_id: 22,
      name: "Delphi Technologies",
      ticker: "DLPH",
      priority: "Resilient Supply Chain & Smart Mfg",
      industry: "Auto Suppliers and Others",
      industry_role: "context",
      hq: "London, United Kingdom",
      exchange: "Delisted (acquired by BorgWarner, 2020)",
      market_cap: "~$2.4B (2020 acquisition value) (valuation)",
      employees: "~20,000",
      founded: "2017 (spun off from Delphi Automotive)",
      summary: "Delphi Technologies was a propulsion systems and powertrain technology supplier that was acquired by BorgWarner in 2020 and now operates as part of BorgWarner's propulsion systems segment rather than as a standalone public company.",
      latest_brief: {
        brief_id: 222,
        title: "Propulsion Systems Evolution",
        brief_date: "2026-08-15",
        qc_score: 4.2,
        summary: "Coverage of the former Delphi Technologies business, now integrated within BorgWarner, tracks how its combustion and hybrid propulsion technology (fuel injection, electrification components) is being repositioned toward electrified powertrains and software-managed propulsion systems. The unit's legacy engineering expertise in fuel systems is being redirected toward hybrid and range-extender applications as automakers lean on hybrids as a margin bridge. Analysts continue to watch it as a bellwether for how traditional propulsion suppliers adapt post-acquisition."
      },
      aliases: ["Delphi"]
    },
    {
      company_id: 23,
      name: "Modular Intelligence",
      ticker: "MI",
      priority: "Software Driven Mobility",
      industry: "Auto Suppliers and Others",
      industry_role: "context",
      hq: "Not publicly disclosed",
      exchange: "Private",
      market_cap: "N/A (valuation not publicly disclosed) (valuation)",
      employees: "Not publicly disclosed",
      founded: "Not publicly disclosed",
      summary: "Modular Intelligence is an early-stage automotive software company reportedly focused on modular AI integration for software-defined vehicle platforms; detailed public company information (headquarters, financials, headcount) could not be independently verified via public sources.",
      latest_brief: {
        brief_id: 223,
        title: "Modular AI Integration for SDVs",
        brief_date: "2026-08-15",
        qc_score: 4.5,
        summary: "Coverage centers on the company's modular approach to integrating AI models into software-defined vehicle architectures, allowing automakers to swap or upgrade AI capabilities without re-architecting the underlying compute platform. This modularity pitch aligns with the broader industry push to decouple software development cycles from hardware production timelines. As a smaller, less-established player, the company's traction and financial position remain harder to verify than those of its larger, publicly listed peers."
      },
      aliases: ["Modular"]
    },
    {
      company_id: 24,
      name: "Toyota Motor Corporation",
      ticker: "TM",
      priority: "Retail Excellence & Customer Journey/Experience",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Toyota City, Japan",
      exchange: "Tokyo Stock Exchange (NYSE ADR: TM)",
      market_cap: "$236B",
      employees: "~391,000",
      founded: "1937",
      summary: "Toyota is the world's largest automaker by sales volume, pursuing a multi-pathway strategy spanning hybrids, battery EVs, and hydrogen fuel-cell technology.",
      latest_brief: {
        brief_id: 224,
        title: "Hybrid Strategy Validation",
        brief_date: "2026-08-15",
        qc_score: 4.8,
        summary: "Toyota's Q2 2026 results further validate its long-held contrarian bet on hybrids as the pragmatic bridge technology, with hybrid sales continuing to outperform pure-EV demand across most global markets. The company's refusal to pursue an EV-only strategy, once criticized by some analysts, now looks prescient given the industry-wide volume slowdown in pure-EVs. Management reiterated that Toyota will keep expanding battery-EV and hydrogen offerings incrementally while letting hybrids carry the bulk of near-term volume and profit."
      },
      aliases: ["Toyota"]
    },
    {
      company_id: 25,
      name: "Volkswagen AG",
      ticker: "VWAGY",
      priority: "Software Driven Mobility",
      industry: "Automotive OEM",
      industry_role: "core",
      hq: "Wolfsburg, Germany",
      exchange: "Frankfurt Stock Exchange (OTC: VWAGY in US)",
      market_cap: "$43B",
      employees: "~594,000",
      founded: "1937",
      summary: "Volkswagen AG is one of the world's largest automakers by volume, encompassing brands from VW and Audi to Porsche and Bentley, and is currently undergoing a major software reorganization and EV platform consolidation.",
      latest_brief: {
        brief_id: 225,
        title: "Software Reorganization and EV Platform",
        brief_date: "2026-08-15",
        qc_score: 4.6,
        summary: "Volkswagen continues restructuring its troubled in-house software unit (Cariad) while consolidating its group-wide EV platform strategy to cut development costs and speed up model launches. The reorganization follows years of software delays that hampered new model rollouts across VW, Audi, and Porsche. Management is emphasizing tighter platform sharing across brands and new software partnerships (including with Rivian) as the path to closing the software-development gap with faster-moving Chinese and US competitors."
      },
      aliases: ["Volkswagen", "VW"]
    }
  ]
};
