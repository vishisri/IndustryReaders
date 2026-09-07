window.EU_DATA = {
  meta: {
    product_name: "Tech & Digital Intelligence",
    edition: "August 2026",
    publication_date: "2026-08-25",
    company_count: 38,
    brief_count: 38,
    editorial_readout: "The technology sector in Q2 2026 has been defined by the profound transition from experimental AI to 'Agentic AI' and the massive infrastructure build-out required to support it. Hyperscaler cloud capacity remains effectively sold out, with Google Cloud reporting an 82% YoY revenue surge, reflecting a broader trend where AI-related investments are the primary growth engine across the tech landscape. However, this growth is met with intense CapEx scrutiny and margin pressures as companies race to build power-intensive data centers and advanced cooling systems.\n\nOn the regulatory front, August 2026 marks a watershed moment with the main application phase of the EU AI Act taking effect, enforcing strict transparency rules for General Purpose AI (GPAI) and deepfakes. This contrasts sharply with the US 'light-touch' federal approach and tightening semiconductor export controls, including new Section 232 actions on polysilicon. Top-tier strategy firms (McKinsey, BCG, Bain) now estimate a $100 billion to $200 billion net new value creation opportunity driven by autonomous, multistep reasoning AI agents, fundamentally altering the software operating model and forcing enterprise IT budgets to pivot sharply toward data modernization and embedded AI."
  },
  // Capgemini nomenclature: this vertical is branded "Tech & Digital" and
  // uses the official four-segment taxonomy below (replacing the prior
  // ad-hoc Cloud & Infrastructure / Enterprise Software / Cybersecurity /
  // Semiconductors / AI & Data Platforms split). `priorities` carries a
  // second, cross-cutting filtering dimension since Capgemini did not
  // publish industry-specific 2026 priorities for this vertical.
  priorities: [
    { name: "AI-Native Software Engineering", icon: "🤖" },
    { name: "Cloud & Platform Modernization", icon: "☁️" },
    { name: "Trusted AI Governance & Security", icon: "🛡️" }
  ],
  industry_cards: [
    {
      id: "electronics-hardware-equipment",
      db_industry: "Electronics, Hardware and Equipment",
      name: "Electronics, Hardware and Equipment",
      icon: "💻",
      eyebrow: "AI PCs & Data Center Iron",
      top_trend: "Device makers and infrastructure hardware vendors are racing to ship AI-optimized servers, networking gear, and NPU-equipped PCs fast enough to keep pace with hyperscaler and enterprise AI build-outs.",
      readout: "Q2 2026 results show sustained demand for AI-optimized servers (Dell, HPE), AI PC refresh cycles (HP), high-speed data center networking (Cisco), and security appliances (Fortinet), even as Apple leans on custom silicon for on-device 'physical AI'. Component and power constraints, not demand, remain the binding limit on shipments.",
      monitored_count: 6,
      core_count: 5,
      context_count: 1,
      readout_as_of: "2026-08-25",
      freshness_status: "CURRENT",
      freshness_age_days: 0,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=electronics-hardware-equipment"
    },
    {
      id: "digital",
      db_industry: "Digital",
      name: "Digital",
      icon: "☁️",
      eyebrow: "AI Build-Out CapEx",
      top_trend: "Hyperscaler capacity constraints and power-intensive data center investments as highlighted by BCG and McKinsey.",
      readout: "Q2 2026 earnings show cloud capacity mostly sold out. Google Cloud surged 82% to $24.8B, while Amazon, Microsoft, and Meta continue massive AI infrastructure and custom-silicon investment; IBM leans into hybrid cloud and AI-implementation consulting. CapEx margins remain under severe scrutiny.",
      monitored_count: 5,
      core_count: 5,
      context_count: 0,
      readout_as_of: "2026-08-25",
      freshness_status: "CURRENT",
      freshness_age_days: 0,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=digital"
    },
    {
      id: "independent-software-vendor",
      db_industry: "Independent Software Vendor",
      name: "Independent Software Vendor",
      icon: "💼",
      eyebrow: "Agentic AI SaaS Pivot",
      top_trend: "Bain estimates a $100B US market opportunity for SaaS transitioning to 'Agentic' models capable of cross-system automation.",
      readout: "Valuations face a correction (Bain midyear 2026), but ISVs prioritizing embedded AI over 'tool sprawl' are winning. Salesforce, Oracle, SAP, ServiceNow, and Workday emphasize AI agents executing complex multi-step workflows, while data, security, and EDA software vendors race to embed AI natively into their platforms.",
      monitored_count: 19,
      core_count: 19,
      context_count: 0,
      readout_as_of: "2026-08-25",
      freshness_status: "CURRENT",
      freshness_age_days: 0,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=independent-software-vendor"
    },
    {
      id: "semiconductors",
      db_industry: "Semiconductors",
      name: "Semiconductors",
      icon: "🧩",
      eyebrow: "Export Controls & AI Demand",
      top_trend: "Intense demand for advanced compute clashed with new August 2026 US Section 232 tariffs on polysilicon.",
      readout: "NVIDIA, TSMC, Intel, AMD, Broadcom, Marvell, Arm, and Qualcomm earnings highlight an insatiable appetite for AI GPUs, custom ASICs, and edge-AI silicon. Geopolitics continues to dictate supply chain shifts, forcing localized fab expansions and diversified sourcing.",
      monitored_count: 8,
      core_count: 8,
      context_count: 0,
      readout_as_of: "2026-08-25",
      freshness_status: "CURRENT",
      freshness_age_days: 0,
      presentation_mode: "canonical_brief",
      href: "industry.html?id=semiconductors"
    }
  ],
  industry_pages: {
    "electronics-hardware-equipment": {
      id: "electronics-hardware-equipment",
      db_industry: "Electronics, Hardware and Equipment",
      name: "Electronics, Hardware and Equipment",
      eyebrow: "AI PCs & Data Center Iron",
      latest_brief: { brief_id: 1, title: "Hardware Q2 2026: The AI Refresh Cycle", brief_date: "2026-08-15", qc_score: 4.9 },
      summary: { top_trend: "AI-optimized servers, networking gear, and AI PCs in high demand.", readout: "Component and power constraints remain the binding limit on shipments." },
      counts: { industry: 6, monitored_count: 6, core_count: 5, context_count: 1 },
      presentation_mode: "canonical_brief"
    },
    "digital": {
      id: "digital",
      db_industry: "Digital",
      name: "Digital",
      eyebrow: "AI Build-Out CapEx",
      latest_brief: { brief_id: 2, title: "Digital Q2 2026: Capacity Constraints", brief_date: "2026-08-15", qc_score: 4.9 },
      summary: { top_trend: "Hyperscaler capacity constraints.", readout: "Q2 2026 earnings show cloud capacity mostly sold out." },
      counts: { industry: 5, monitored_count: 5, core_count: 5, context_count: 0 },
      presentation_mode: "canonical_brief"
    },
    "independent-software-vendor": {
      id: "independent-software-vendor",
      db_industry: "Independent Software Vendor",
      name: "Independent Software Vendor",
      eyebrow: "Agentic AI SaaS Pivot",
      latest_brief: { brief_id: 3, title: "ISV Q2 2026: Agentic AI Shift", brief_date: "2026-08-12", qc_score: 4.7 },
      summary: { top_trend: "Bain estimates $100B US market for Agentic SaaS.", readout: "Valuations face correction, ISVs embedding AI natively win." },
      counts: { industry: 19, monitored_count: 19, core_count: 19, context_count: 0 },
      presentation_mode: "canonical_brief"
    },
    "semiconductors": {
      id: "semiconductors",
      db_industry: "Semiconductors",
      name: "Semiconductors",
      eyebrow: "Export Controls & AI Demand",
      latest_brief: { brief_id: 4, title: "Semi Q2: Export Controls vs Demand", brief_date: "2026-08-14", qc_score: 4.9 },
      summary: { top_trend: "Demand for advanced compute clashed with tariffs.", readout: "Insatiable appetite for AI GPUs and custom silicon." },
      counts: { industry: 8, monitored_count: 8, core_count: 8, context_count: 0 },
      presentation_mode: "canonical_brief"
    }
  },
  pilot_industries: {
    "independent-software-vendor": {
      trends: [
        {
          trend_id: "isv-t1",
          display_order: 1,
          name: "Rise of Agentic Workflow Automation",
          tracked_since: "2026-01",
          monthly_change: "IMPROVING",
          momentum: "Accelerating",
          breadth: "Broad",
          evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
          current_readout: "SaaS vendors are aggressively moving beyond LLM 'chat' interfaces into agentic AI frameworks capable of multi-step, cross-application tasks (e.g., automated procure-to-pay). Bain's latest Q2 report sizing this at a $100B opportunity matches early revenue bumps from Salesforce and ServiceNow in their latest earnings.",
          what_changed: "In Q2, ISVs shifted from generative experiments to monetizing structured autonomous agents.",
          why_it_matters: "Buyers are suffering from 'tool sprawl' and will consolidate spend on vendors that offer holistic, autonomous productivity platforms.",
          confidence: "High",
          conversation_hypothesis: "Ask clients if their software vendor strategy is consolidating around Agentic platforms or if they are still buying fragmented point solutions.",
          priorities: ["AI-Native Software Engineering"]
        },
        {
          trend_id: "isv-t2",
          display_order: 2,
          name: "SaaS Valuation Re-rating & Margin Focus",
          tracked_since: "2025-08",
          monthly_change: "STABLE",
          momentum: "Persistent",
          breadth: "Sector-Wide",
          evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
          current_readout: "Following a mid-year valuation correction noted by Bain's PE tech report, independent software vendors are aggressively rationalizing operational costs. Q2 2026 earnings calls (e.g., SAP, Oracle) featured heavy emphasis on CapEx discipline and using AI internally to drive software engineering efficiency.",
          what_changed: "Investors are no longer rewarding 'growth at all costs', demanding clear ROI on AI infrastructure investments.",
          why_it_matters: "SaaS pricing power will be tested; vendors must prove AI add-ons generate immediate ROI for end-users to justify price hikes.",
          confidence: "High",
          conversation_hypothesis: "Explore how clients are negotiating renewals with SaaS vendors pushing mandatory AI tier upgrades.",
          priorities: ["Cloud & Platform Modernization", "AI-Native Software Engineering"]
        },
        {
          trend_id: "isv-t3",
          display_order: 3,
          name: "EU AI Act Compliance as a Feature",
          tracked_since: "2026-04",
          monthly_change: "WORSENING",
          momentum: "Accelerating",
          breadth: "Global",
          evidence_strength: "OBSERVED_IN_MARKET",
          current_readout: "With the August 2, 2026 enactment of Article 50 of the EU AI Act, independent software vendors (especially those providing GPAI and synthetic data tools) are baking compliance reporting directly into their SaaS dashboards. Failure to do so has become an immediate dealbreaker in European procurement cycles.",
          what_changed: "Regulatory deadlines have hit, turning compliance from a theoretical risk into a hard functional requirement for enterprise software.",
          why_it_matters: "Non-compliant vendors risk massive fines and immediate lock-out from EU enterprise budgets.",
          confidence: "Very High",
          conversation_hypothesis: "Discuss the client's readiness to audit their SaaS stack for EU AI Act Article 50 compliance, especially synthetic content labeling.",
          priorities: ["Trusted AI Governance & Security"]
        },
        {
          trend_id: "isv-t4",
          display_order: 4,
          name: "AI Coding Assistants: Productivity Gains Plateau Below Early Hype",
          tracked_since: "2025-09",
          monthly_change: "STABLE",
          momentum: "Steady",
          breadth: "Broad",
          evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
          current_readout: "Bain's Technology Report 2025-2026 finds that while roughly two-thirds of software firms have rolled out generative AI coding tools, most engineering teams are realizing only 10-15% productivity gains rather than the step-change improvements vendors and early adopters projected. McKinsey's parallel research on the AI revolution in software development still ranks engineering as one of the top functions for AI value capture, even as agent task complexity rises (median coding-agent session length grew from roughly 4 to 23 minutes between Q1 2025 and Q1 2026).",
          what_changed: "Enterprise rollout of Copilot-style and agentic coding tools has become near-universal, but measured software delivery lifecycle throughput gains are converging on a modest, single-digit-to-low-double-digit range rather than the 30%+ figures cited in early pilots.",
          why_it_matters: "ISVs and enterprise buyers need rigorous, DORA/SPACE-style measurement of AI coding ROI before committing further seat-based AI tooling spend; vendors able to prove sustained throughput gains, not just adoption, will win renewal cycles and justify premium AI-tier pricing.",
          confidence: "High",
          conversation_hypothesis: "Ask clients how they are measuring AI coding assistant ROI beyond adoption rate: are they seeing Bain's roughly 10-15% throughput gain, or a materially different number, and how is that tracked against DORA/SPACE metrics?",
          priorities: ["AI-Native Software Engineering"]
        }
      ],
      archetypes: [],
      gsi_hypotheses: [],
      watch_items: ["Salesforce Agentforce Adoption", "ServiceNow Q3 Guidance", "EU AI Act Sandbox Enrollments"],
      evidence: {
        "isv-t1": ["Bain Technology Report Q2 2026", "ServiceNow Q2 2026 Earnings Call Transcript"],
        "isv-t2": ["Bain Private Equity Midyear Report 2026", "SAP Q2 2026 Earnings"],
        "isv-t3": ["European Commission AI Office August 2026 Bulletins", "McKinsey Global Tech Agenda 2026"],
        "isv-t4": ["Bain & Company, \"Technology Report 2025-2026: Why AI Gains Are Stalling\"", "McKinsey, \"The AI Revolution in Software Development\" (2026)"]
      }
    },
    "digital": {
      trends: [
        {
          trend_id: "dig-t1",
          display_order: 1,
          name: "Hyperscaler AI Capex Supercycle Approaches $800 Billion",
          tracked_since: "2025-10",
          monthly_change: "IMPROVING",
          momentum: "Accelerating",
          breadth: "Sector-Wide",
          evidence_strength: "BROAD_WITH_FINANCIAL_CONFIRMATION",
          current_readout: "Q1-Q2 2026 earnings calls confirm the largest hyperscalers (Amazon, Alphabet, Microsoft, plus Meta and Oracle) are on pace for roughly $775-800B in combined 2026 capital expenditure, up about 64% over 2025, with McKinsey projecting up to $6.7 trillion in cumulative AI-related data center investment through 2030 to support an estimated 156 GW of new AI-optimized capacity.",
          what_changed: "Guidance raises from Amazon (toward $200B, up from $125B), Alphabet ($175-185B, up from $91B), and Microsoft ($110-120B, up from $90B) mark a step-change in capex intensity versus 2025, with roughly three-quarters of hyperscaler spend now directed specifically at AI infrastructure rather than general-purpose IT.",
          why_it_matters: "Capacity, power, and component constraints, not customer demand, are now the binding limit on cloud growth, creating a multi-year consulting wedge in data center modernization, power procurement strategy, and cloud cost/FinOps governance for enterprise cloud buyers.",
          confidence: "Very High",
          conversation_hypothesis: "Given McKinsey's $6.7 trillion data center investment outlook, how is the client's cloud sourcing strategy hedging against continued hyperscaler capacity rationing and price inflation?",
          priorities: ["Cloud & Platform Modernization"]
        }
      ],
      archetypes: [],
      gsi_hypotheses: [],
      watch_items: ["Amazon/Alphabet/Microsoft FY2026 CapEx Guidance Revisions", "Hyperscaler Power Procurement Deals"],
      evidence: {
        "dig-t1": ["McKinsey, \"AI Could Drive $6.7 Trillion Investment in Data Centers\" (2026)", "Q1/Q2 2026 Earnings Call Transcripts — Amazon, Alphabet, Microsoft"]
      }
    },
    "semiconductors": {
      trends: [
        {
          trend_id: "sc-t1",
          display_order: 1,
          name: "Section 232 Polysilicon Tariffs Reshape Chip Supply Chains",
          tracked_since: "2026-08",
          monthly_change: "WORSENING",
          momentum: "Accelerating",
          breadth: "Global",
          evidence_strength: "OBSERVED_IN_MARKET",
          current_readout: "On August 6, 2026, the US imposed a 15% Section 232 tariff plus minimum import prices (roughly $21/kg for polysilicon and $100/kg for ingots and wafers) on polysilicon and its derivatives, with the proclamation framed explicitly around eroding US semiconductor wafer fabrication capacity as much as solar supply security. The measures take effect December 4, 2026.",
          what_changed: "Trade policy has shifted from chip-specific export controls to upstream material tariffs and price floors, forcing fabs, equipment makers, and hardware OEMs to reassess wafer and polysilicon sourcing contracts and accelerate onshoring of value-added processing.",
          why_it_matters: "Semiconductor and hardware vendors need updated supply chain risk modeling and contract renegotiation support as new material cost floors and country-of-origin rules reshape fab economics ahead of the December 2026 effective date.",
          confidence: "High",
          conversation_hypothesis: "How exposed is the client's wafer and polysilicon supply chain to the new Section 232 minimum import price regime taking effect in December 2026, and has procurement re-run cost models against the new price floors?",
          priorities: ["Cloud & Platform Modernization"]
        }
      ],
      archetypes: [],
      gsi_hypotheses: [],
      watch_items: ["Section 232 Polysilicon MIP Implementation (Dec 2026)", "TSMC/Intel Fab Capacity Guidance"],
      evidence: {
        "sc-t1": ["Presidential Proclamation on Adjusting Imports of Polysilicon and Polysilicon Products Into the United States (August 6, 2026)", "US Department of Commerce, Section 232 Polysilicon Investigation Report (2026)"]
      }
    }
  },
  companies: [
    { company_id: 1, name: "NVIDIA", ticker: "NVDA", priority: "Cloud & Platform Modernization", industry: "Semiconductors", industry_role: "core", hq: "Santa Clara, USA", exchange: "NASDAQ", market_cap: "$5.45T", employees: "~36,000", founded: "1993", summary: "The dominant designer of GPUs and AI accelerator systems (H100/H200/Blackwell), NVIDIA is the primary supplier of compute infrastructure powering the global generative AI build-out.", latest_brief: { brief_id: 101, title: "Q2 2026: Unrelenting AI GPU Demand", brief_date: "2026-08-10", qc_score: 4.9, summary: "Demand for NVIDIA's Blackwell-generation GPUs continues to outstrip supply as hyperscalers race to expand agentic AI training and inference capacity. Data center revenue remains the overwhelming growth driver, with customers signing multi-year capacity commitments to secure allocation. Supply chain constraints at advanced packaging (CoWoS) remain the key bottleneck, while export-control rules continue to shape which markets NVIDIA can serve with its highest-end silicon." }, aliases: ["Nvidia Corp"] },
    { company_id: 2, name: "Microsoft", ticker: "MSFT", priority: "Cloud & Platform Modernization", industry: "Digital", industry_role: "core", hq: "Redmond, USA", exchange: "NASDAQ", market_cap: "$3.68T", employees: "~228,000", founded: "1975", summary: "A diversified technology leader spanning cloud infrastructure (Azure), productivity software (Microsoft 365), and enterprise AI through its OpenAI partnership and Copilot product line.", latest_brief: { brief_id: 102, title: "Q2 2026: Azure AI CapEx Growth", brief_date: "2026-07-28", qc_score: 4.8, summary: "Microsoft continues to pour record capital expenditure into Azure data center capacity to meet surging demand for AI training and Copilot-driven inference workloads. Azure growth remains driven disproportionately by AI services, with management signaling that capacity, not demand, is the binding constraint. The company is also expanding proprietary silicon and power procurement to reduce reliance on third-party GPU supply and rising energy costs." }, aliases: [] },
    { company_id: 3, name: "Alphabet", ticker: "GOOGL", priority: "Cloud & Platform Modernization", industry: "Digital", industry_role: "core", hq: "Mountain View, USA", exchange: "NASDAQ", market_cap: "$4.23T", employees: "~187,000", founded: "1998", summary: "Google's parent company, combining a dominant search and advertising business with Google Cloud and in-house Gemini AI models and TPU chip infrastructure.", latest_brief: { brief_id: 103, title: "Q2 2026: Google Cloud Surges 82%", brief_date: "2026-07-29", qc_score: 4.9, summary: "Google Cloud's 82% year-over-year revenue surge underscores accelerating enterprise adoption of Gemini-powered AI services and custom TPU-based infrastructure. Alphabet is leaning on its vertically integrated silicon stack to differentiate on price-performance against GPU-based rivals. Management continues to flag capacity constraints even as CapEx guidance is raised again to keep pace with backlog growth." }, aliases: ["Google"] },
    { company_id: 4, name: "Amazon", ticker: "AMZN", priority: "Cloud & Platform Modernization", industry: "Digital", industry_role: "core", hq: "Seattle, USA", exchange: "NASDAQ", market_cap: "$2.83T", employees: "~1,550,000", founded: "1994", summary: "The world's largest cloud infrastructure provider through AWS, alongside its core e-commerce and logistics business and growing Trainium/Inferentia custom AI chip program.", latest_brief: { brief_id: 104, title: "Q2 2026: AWS AI Workload Acceleration", brief_date: "2026-08-01", qc_score: 4.7, summary: "AWS is accelerating investment in Trainium AI chips and new data center regions to capture a larger share of enterprise AI training and inference spend. Bedrock and Amazon Q usage continues to scale as customers build agentic applications on AWS infrastructure. Management continues to cite power availability and chip supply, more than customer demand, as the primary constraint on near-term growth." }, aliases: ["AWS"] },
    { company_id: 5, name: "Apple", ticker: "AAPL", priority: "AI-Native Software Engineering", industry: "Electronics, Hardware and Equipment", industry_role: "context", hq: "Cupertino, USA", exchange: "NASDAQ", market_cap: "$4.46T", employees: "~164,000", founded: "1976", summary: "The world's largest consumer hardware company by revenue, maker of the iPhone, Mac, and wearables, now integrating on-device and cloud-based Apple Intelligence features across its ecosystem.", latest_brief: { brief_id: 105, title: "Q2 2026: Physical AI & Device Edge Compute", brief_date: "2026-08-05", qc_score: 4.5, summary: "Apple continues to prioritize on-device and edge inference for its Apple Intelligence features, balancing privacy commitments against the need for more capable cloud-assisted models. Silicon investment in the latest generation of Apple chips emphasizes dedicated neural engine capacity to support 'physical AI' features across iPhone, Mac, and wearables. The strategy contrasts with peers' cloud-first approach and remains central to Apple's differentiation pitch to enterprise and consumer buyers alike." }, aliases: [] },
    { company_id: 6, name: "Meta", ticker: "META", priority: "AI-Native Software Engineering", industry: "Digital", industry_role: "core", hq: "Menlo Park, USA", exchange: "NASDAQ", market_cap: "$1.5T", employees: "~78,000", founded: "2004", summary: "Operator of Facebook, Instagram, and WhatsApp, and a leading developer of open-weight AI models (Llama) that it monetizes through advertising and licensing.", latest_brief: { brief_id: 106, title: "Q2 2026: Open Source AI Monetization", brief_date: "2026-07-31", qc_score: 4.6, summary: "Meta continues to position its open-weight Llama model family as a strategic differentiator, driving developer adoption while monetizing AI investment through improved ad-targeting and engagement across its core apps. The company is scaling its own data center and custom silicon footprint aggressively to reduce dependence on external GPU supply. Management frames heavy AI CapEx as necessary infrastructure for the next generation of recommendation and agentic assistant products." }, aliases: ["Meta Platforms"] },
    { company_id: 7, name: "Salesforce", ticker: "CRM", priority: "AI-Native Software Engineering", industry: "Independent Software Vendor", industry_role: "core", hq: "San Francisco, USA", exchange: "NYSE", market_cap: "$188B", employees: "~76,000", founded: "1999", summary: "The pioneer of cloud-based customer relationship management (CRM) software, now pivoting its product suite around the Agentforce autonomous AI agent platform.", latest_brief: { brief_id: 107, title: "Q2 2026: Agentic Workflow Growth", brief_date: "2026-08-14", qc_score: 4.7, summary: "Salesforce's Agentforce platform continues to gain traction as enterprises look to automate multi-step CRM and service workflows with autonomous AI agents. Consumption-based pricing for agent actions is emerging as a meaningful new revenue stream alongside traditional seat-based licensing. Management is emphasizing customer ROI proof points to justify the shift away from pure per-seat SaaS pricing amid broader sector valuation scrutiny." }, aliases: [] },
    { company_id: 8, name: "Oracle", ticker: "ORCL", priority: "Cloud & Platform Modernization", industry: "Independent Software Vendor", industry_role: "core", hq: "Austin, USA", exchange: "NYSE", market_cap: "$434B", employees: "~159,000", founded: "1977", summary: "A legacy database and enterprise applications leader that has repositioned itself as a major cloud infrastructure (OCI) provider, winning large AI training contracts including with OpenAI.", latest_brief: { brief_id: 108, title: "Q2 2026: Cloud Infrastructure Expansion", brief_date: "2026-08-12", qc_score: 4.8, summary: "Oracle Cloud Infrastructure continues its rapid expansion, fueled by large multi-year AI training contracts and a growing remaining performance obligation (RPO) backlog. The company is aggressively building new data center capacity to fulfill signed commitments, pressuring near-term margins even as long-term revenue visibility improves. OCI's price-competitive positioning against AWS and Azure continues to win share among AI-native customers seeking large-scale GPU clusters." }, aliases: [] },
    { company_id: 9, name: "SAP", ticker: "SAP", priority: "AI-Native Software Engineering", industry: "Independent Software Vendor", industry_role: "core", hq: "Walldorf, Germany", exchange: "NYSE / XETRA", market_cap: "$241B", employees: "~110,000", founded: "1972", summary: "Europe's largest software company and the global leader in enterprise resource planning (ERP), now migrating its customer base to cloud-based S/4HANA with embedded generative AI (Joule).", latest_brief: { brief_id: 109, title: "Q2 2026: Cloud ERP & GenAI Integration", brief_date: "2026-07-25", qc_score: 4.6, summary: "SAP continues its multi-year migration of on-premise ERP customers to cloud-based S/4HANA, with its Joule AI copilot increasingly embedded across finance, supply chain, and HR modules. Cloud backlog growth remains the key metric management highlights to demonstrate the health of this transition. As the EU AI Act's transparency provisions take effect, SAP is emphasizing compliance tooling as a competitive advantage for European enterprise customers." }, aliases: [] },
    { company_id: 10, name: "ServiceNow", ticker: "NOW", priority: "AI-Native Software Engineering", industry: "Independent Software Vendor", industry_role: "core", hq: "Santa Clara, USA", exchange: "NYSE", market_cap: "$120B", employees: "~29,000", founded: "2004", summary: "A workflow automation platform originally focused on IT service management (ITSM) that has expanded into HR, customer service, and now enterprise-wide AI agent orchestration.", latest_brief: { brief_id: 110, title: "Q2 2026: ITSM AI Automation Adoption", brief_date: "2026-07-26", qc_score: 4.9, summary: "ServiceNow's AI Agent Orchestrator is seeing strong early adoption as enterprises automate IT ticket resolution and cross-departmental workflows beyond its traditional ITSM base. Net-new annual contract value tied to AI-specific SKUs is becoming a closely watched growth metric on earnings calls. The company continues to expand its platform into HR and customer service use cases, positioning itself as a horizontal 'control tower' for agentic automation." }, aliases: [] },
    { company_id: 11, name: "CrowdStrike", ticker: "CRWD", priority: "Trusted AI Governance & Security", industry: "Independent Software Vendor", industry_role: "core", hq: "Austin, USA", exchange: "NASDAQ", market_cap: "$215B", employees: "~10,700", founded: "2011", summary: "A cloud-native cybersecurity company best known for its Falcon endpoint detection and response (EDR) platform, which it has expanded into a broader AI-driven security operations suite.", latest_brief: { brief_id: 111, title: "Q2 2026: AI-Native Endpoint Security", brief_date: "2026-08-08", qc_score: 4.8, summary: "CrowdStrike is expanding its Falcon platform with AI-native threat detection designed to counter a rising wave of AI-generated malware and social engineering attacks. Net new annual recurring revenue growth continues to be driven by module attach-rate expansion across identity, cloud, and exposure management add-ons. The company continues rebuilding customer trust following its prior outage incident, with reliability engineering investment now a recurring theme in investor communications." }, aliases: [] },
    { company_id: 12, name: "TSMC", ticker: "TSM", priority: "Cloud & Platform Modernization", industry: "Semiconductors", industry_role: "core", hq: "Hsinchu, Taiwan", exchange: "NYSE (ADR) / TWSE", market_cap: "$2.21T", employees: "~83,000", founded: "1987", summary: "The world's largest dedicated semiconductor foundry, manufacturing advanced-node chips for NVIDIA, Apple, AMD, and most other major fabless chip designers.", latest_brief: { brief_id: 112, title: "Q2 2026: Advanced Node Capacity Sold Out", brief_date: "2026-07-16", qc_score: 4.9, summary: "TSMC's most advanced process nodes remain effectively sold out through the year as AI accelerator demand from NVIDIA, AMD, and hyperscaler custom-silicon programs outstrips available capacity. The company is accelerating capacity expansion both in Taiwan and at its Arizona fabs to diversify geographic risk amid ongoing geopolitical tension. CoWoS advanced packaging capacity remains the tightest bottleneck across the AI chip supply chain." }, aliases: ["Taiwan Semiconductor"] },
    { company_id: 13, name: "Intel", ticker: "INTC", priority: "Cloud & Platform Modernization", industry: "Semiconductors", industry_role: "core", hq: "Santa Clara, USA", exchange: "NASDAQ", market_cap: "$542B", employees: "~109,000", founded: "1968", summary: "A legacy chipmaker rebuilding its advanced foundry and data center GPU businesses under a turnaround plan, now backed by direct US government and industry equity stakes.", latest_brief: { brief_id: 113, title: "Q2 2026: Foundry Progress & Export Controls", brief_date: "2026-07-30", qc_score: 4.5, summary: "Intel continues its multi-year turnaround, reporting incremental yield progress on its 18A process node as it seeks external foundry customers to fill capacity. New Section 232 tariff actions on polysilicon and tightening export controls are reshaping Intel's domestic manufacturing strategy and supply chain sourcing decisions. Government and strategic industry equity backing continues to support the company's capital-intensive fab buildout even as data center GPU market share remains limited." }, aliases: [] },
    { company_id: 14, name: "IBM", ticker: "IBM", priority: "Trusted AI Governance & Security", industry: "Digital", industry_role: "core", hq: "Armonk, USA", exchange: "NYSE", market_cap: "$221B", employees: "~290,000", founded: "1911", summary: "A century-old technology conglomerate now focused on hybrid cloud (Red Hat) and enterprise AI (watsonx), alongside consulting and infrastructure services, following its 2025 acquisition of HashiCorp.", latest_brief: { brief_id: 114, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "IBM continues to integrate its 2025 HashiCorp acquisition into its hybrid cloud and infrastructure automation portfolio, pairing it with watsonx AI governance and Red Hat OpenShift. Consulting revenue is increasingly tied to generative AI implementation engagements as enterprise clients seek trusted partners for large-scale AI rollouts. Management continues to emphasize IBM's positioning around AI governance and compliance as differentiators against hyperscaler-led AI platforms." }, aliases: [] },
    { company_id: 15, name: "Cisco", ticker: "CSCO", priority: "Cloud & Platform Modernization", industry: "Electronics, Hardware and Equipment", industry_role: "core", hq: "San Jose, USA", exchange: "NASDAQ", market_cap: "$447B", employees: "~87,000", founded: "1984", summary: "The world's largest networking equipment maker, supplying switches, routers, and security products that underpin enterprise networks and AI data center fabric.", latest_brief: { brief_id: 115, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Cisco continues to benefit from surging demand for high-speed Ethernet switching and networking gear used to interconnect AI GPU clusters inside hyperscaler and enterprise data centers. AI-infrastructure order backlog remains a key metric highlighted by management as validation of the company's data center networking strategy. Security and observability software attach continues to grow alongside core hardware sales as Cisco pushes further into subscription-based revenue." }, aliases: [] },
    { company_id: 16, name: "Dell Technologies", ticker: "DELL", priority: "Cloud & Platform Modernization", industry: "Electronics, Hardware and Equipment", industry_role: "core", hq: "Round Rock, USA", exchange: "NYSE", market_cap: "$317B", employees: "~120,000", founded: "1984", summary: "A major server, storage, and PC manufacturer that has become a leading integrator of AI-optimized servers built around NVIDIA and AMD accelerators for enterprise and cloud customers.", latest_brief: { brief_id: 116, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Dell's AI-optimized server backlog continues to grow as enterprises and neocloud providers seek turnkey infrastructure built around the latest NVIDIA and AMD accelerators. Infrastructure Solutions Group revenue remains the primary growth driver, offsetting a more mature PC and traditional server business. Management continues to highlight supply chain execution and component allocation as key levers for converting backlog into recognized revenue." }, aliases: [] },
    { company_id: 17, name: "HP Inc", ticker: "HPQ", priority: "AI-Native Software Engineering", industry: "Electronics, Hardware and Equipment", industry_role: "core", hq: "Palo Alto, USA", exchange: "NYSE", market_cap: "$30B", employees: "~58,000", founded: "1939", summary: "A leading maker of personal computers and printers, now refreshing its PC lineup around 'AI PC' chips with on-device neural processing for Copilot-style assistants.", latest_brief: { brief_id: 117, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "HP is leaning on the ongoing AI PC refresh cycle to drive commercial and consumer laptop upgrades, positioning on-device NPUs as a differentiator for AI-assisted productivity. Print remains a stable cash-generating business even as unit volumes gradually decline industry-wide. Management continues to target cost restructuring to protect margins amid input cost pressure from memory and component pricing." }, aliases: [] },
    { company_id: 18, name: "HPE", ticker: "HPE", priority: "Cloud & Platform Modernization", industry: "Electronics, Hardware and Equipment", industry_role: "core", hq: "Spring, USA", exchange: "NYSE", market_cap: "$28B", employees: "~61,000", founded: "2015", summary: "An enterprise infrastructure company specializing in servers, storage, and networking, which completed its large acquisition of Juniper Networks to expand its AI-era networking portfolio.", latest_brief: { brief_id: 118, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "HPE continues to integrate Juniper Networks following its acquisition, aiming to bundle AI-optimized networking with its GreenLake hybrid cloud and server portfolio. AI server bookings remain a closely tracked growth metric as HPE competes with Dell for large enterprise and sovereign AI infrastructure deals. Management continues to emphasize liquid cooling and power efficiency capabilities as differentiators in high-density AI data center deployments." }, aliases: [] },
    { company_id: 19, name: "Workday", ticker: "WDAY", priority: "AI-Native Software Engineering", industry: "Independent Software Vendor", industry_role: "core", hq: "Pleasanton, USA", exchange: "NASDAQ", market_cap: "$60B", employees: "~19,000", founded: "2005", summary: "A cloud-based provider of human capital management (HCM) and financial management software, now embedding generative AI agents across HR and finance workflows.", latest_brief: { brief_id: 119, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Workday continues to embed AI agents across its HCM and financial management suite, targeting use cases like recruiting, expense processing, and workforce planning. Subscription revenue growth remains steady as the company expands its footprint among large enterprise customers and pushes further into mid-market segments. Management continues to highlight AI-driven productivity features as a key lever for defending pricing power against newer point-solution competitors." }, aliases: [] },
    { company_id: 20, name: "Adobe", ticker: "ADBE", priority: "AI-Native Software Engineering", industry: "Independent Software Vendor", industry_role: "core", hq: "San Jose, USA", exchange: "NASDAQ", market_cap: "$170B", employees: "~30,000", founded: "1982", summary: "The dominant provider of creative software (Photoshop, Premiere) and digital marketing tools, increasingly embedding its Firefly generative AI models across its Creative and Experience Clouds.", latest_brief: { brief_id: 120, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Adobe continues to expand Firefly-generated content credits and AI features across Creative Cloud, aiming to monetize generative AI without cannibalizing its core subscription business. Digital Experience revenue benefits from enterprise demand for AI-assisted marketing and content personalization tools. Management continues to navigate competitive pressure from standalone generative AI image and video tools while defending Creative Cloud's professional workflow moat." }, aliases: [] },
    { company_id: 21, name: "Snowflake", ticker: "SNOW", priority: "Trusted AI Governance & Security", industry: "Independent Software Vendor", industry_role: "core", hq: "Bozeman, USA", exchange: "NYSE", market_cap: "$60B", employees: "~7,700", founded: "2012", summary: "A cloud-based data warehousing and analytics platform that has expanded into AI/ML workloads (Cortex) to let enterprises build and run models directly on governed data.", latest_brief: { brief_id: 121, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Snowflake's Cortex AI offerings continue to gain adoption as enterprises look to run inference and agent workloads directly against governed data without moving it to a separate AI stack. Product revenue growth remains driven by consumption-based pricing tied to expanding data volumes and AI query workloads. Management continues to emphasize data governance and compliance capabilities as differentiators amid tightening regulatory scrutiny of AI data pipelines." }, aliases: [] },
    { company_id: 22, name: "Databricks", ticker: "PRIVATE", priority: "AI-Native Software Engineering", industry: "Independent Software Vendor", industry_role: "core", hq: "San Francisco, USA", exchange: "Private", market_cap: "$100B (valuation)", employees: "~7,000", founded: "2013", summary: "A privately held data and AI platform company built around Apache Spark and the 'lakehouse' architecture, now a leading provider of tools for building and deploying enterprise AI agents.", latest_brief: { brief_id: 122, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Databricks continues to scale its Mosaic AI and agent-building tools as enterprises consolidate data engineering and AI model development on its lakehouse platform. The company remains private but continues to raise capital at escalating valuations, reflecting investor appetite for AI infrastructure exposure. Management continues to position Databricks as a neutral, multi-cloud alternative to hyperscaler-native data and AI stacks." }, aliases: [] },
    { company_id: 23, name: "Palantir", ticker: "PLTR", priority: "AI-Native Software Engineering", industry: "Independent Software Vendor", industry_role: "core", hq: "Denver, USA", exchange: "NASDAQ", market_cap: "$350B", employees: "~4,000", founded: "2003", summary: "A data analytics and AI software company known for its government and defense contracts, which has expanded rapidly into commercial enterprise AI deployment via its AIP platform.", latest_brief: { brief_id: 123, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Palantir's commercial revenue continues to grow rapidly as its AI Platform (AIP) wins enterprise deployments beyond its traditional government and defense base. US government contract expansion remains a steady tailwind alongside accelerating commercial bookings growth. Management continues to emphasize rapid AIP deployment timelines as a competitive advantage over slower-moving enterprise software incumbents." }, aliases: [] },
    { company_id: 24, name: "Datadog", ticker: "DDOG", priority: "Trusted AI Governance & Security", industry: "Independent Software Vendor", industry_role: "core", hq: "New York, USA", exchange: "NASDAQ", market_cap: "$45B", employees: "~5,500", founded: "2010", summary: "A cloud monitoring and observability platform used by enterprises to track application performance, infrastructure health, and increasingly, AI/LLM usage and costs.", latest_brief: { brief_id: 124, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Datadog continues to expand its LLM observability tooling as enterprises seek visibility into the cost, latency, and reliability of production AI agent deployments. Platform consumption growth remains tied to broader cloud infrastructure expansion among its customer base. Management continues to highlight net revenue retention and product attach rates across its growing suite of observability and security modules." }, aliases: [] },
    { company_id: 25, name: "HashiCorp", ticker: "HCP", priority: "Cloud & Platform Modernization", industry: "Independent Software Vendor", industry_role: "core", hq: "San Francisco, USA", exchange: "Private (IBM subsidiary)", market_cap: "N/A (acquired by IBM, 2025)", employees: "~2,700", founded: "2012", summary: "An infrastructure automation software provider (Terraform, Vault) that was acquired by IBM in 2025 and now operates as part of IBM's hybrid cloud portfolio.", latest_brief: { brief_id: 125, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Following its 2025 acquisition by IBM, HashiCorp's Terraform and Vault products continue to be positioned as the automation and security backbone for hybrid and multi-cloud infrastructure. Integration with IBM's watsonx and Red Hat portfolios is a key theme as the combined business targets enterprise infrastructure-as-code adoption. Demand for infrastructure automation tooling remains elevated as enterprises scale out AI data center capacity." }, aliases: [] },
    { company_id: 26, name: "MongoDB", ticker: "MDB", priority: "AI-Native Software Engineering", industry: "Independent Software Vendor", industry_role: "core", hq: "New York, USA", exchange: "NASDAQ", market_cap: "$18B", employees: "~5,300", founded: "2007", summary: "The maker of the widely used MongoDB document database, now positioning its Atlas cloud platform and vector search capabilities as core infrastructure for AI application development.", latest_brief: { brief_id: 126, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "MongoDB continues to see growing adoption of its Atlas Vector Search capabilities as developers build retrieval-augmented generation (RAG) applications on top of its document database. Atlas cloud consumption revenue remains the primary growth driver, increasingly correlated with AI application development activity. Management continues to emphasize MongoDB's flexible document model as well-suited to unstructured data used in AI workloads." }, aliases: [] },
    { company_id: 27, name: "Elastic", ticker: "ESTC", priority: "AI-Native Software Engineering", industry: "Independent Software Vendor", industry_role: "core", hq: "Mountain View, USA", exchange: "NYSE", market_cap: "$10B", employees: "~3,400", founded: "2012", summary: "The company behind the Elastic Stack (Elasticsearch), providing search, observability, and security analytics tools now expanded with vector search and generative AI capabilities.", latest_brief: { brief_id: 127, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Elastic continues to expand vector database and RAG-enabling search capabilities within its core Elasticsearch platform, targeting developers building AI-powered search and chat applications. Cloud consumption revenue growth remains the key metric as customers migrate from self-managed deployments to Elastic Cloud. Security and observability use cases continue to broaden the platform's footprint beyond its original search-engine roots." }, aliases: [] },
    { company_id: 28, name: "Palo Alto Networks", ticker: "PANW", priority: "Trusted AI Governance & Security", industry: "Independent Software Vendor", industry_role: "core", hq: "Santa Clara, USA", exchange: "NASDAQ", market_cap: "$130B", employees: "~15,000", founded: "2005", summary: "A leading cybersecurity vendor offering network security, cloud security, and security operations products, pursuing an aggressive platform-consolidation strategy branded 'platformization.'", latest_brief: { brief_id: 128, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Palo Alto Networks continues to push its 'platformization' strategy, bundling network, cloud, and SOC security products to consolidate spend from customers managing sprawling point-solution stacks. AI-driven security operations, via its Cortex XSIAM platform, remains a key growth vector as enterprises seek to automate threat detection and response. Management continues to cite next-generation security ARR as the primary growth metric validating the platform strategy." }, aliases: [] },
    { company_id: 29, name: "Fortinet", ticker: "FTNT", priority: "Trusted AI Governance & Security", industry: "Electronics, Hardware and Equipment", industry_role: "core", hq: "Sunnyvale, USA", exchange: "NASDAQ", market_cap: "$65B", employees: "~14,000", founded: "2000", summary: "A cybersecurity vendor known for its purpose-built security appliances (FortiGate firewalls) and broad Security Fabric platform spanning network, endpoint, and cloud protection.", latest_brief: { brief_id: 129, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Fortinet continues to benefit from a firewall refresh cycle as customers upgrade to newer ASIC-accelerated appliances capable of handling AI-scale network traffic inspection. Security Fabric platform attach rates continue to grow as customers consolidate point products onto Fortinet's integrated stack. Management continues to highlight secure networking (SD-WAN and SASE) as a key growth segment alongside core firewall demand." }, aliases: [] },
    { company_id: 30, name: "SentinelOne", ticker: "S", priority: "Trusted AI Governance & Security", industry: "Independent Software Vendor", industry_role: "core", hq: "Mountain View, USA", exchange: "NYSE", market_cap: "$6B", employees: "~2,500", founded: "2013", summary: "An AI-driven endpoint and cloud security company built around its Singularity platform, positioning autonomous threat detection and response as a core differentiator against larger rivals.", latest_brief: { brief_id: 130, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "SentinelOne continues to emphasize the autonomous, AI-driven detection and response capabilities of its Singularity platform as it competes for share against larger incumbents like CrowdStrike. ARR growth remains driven by expansion into cloud security and identity protection modules beyond its original endpoint security base. Management continues to highlight improving operating margins as the company works toward sustained profitability." }, aliases: [] },
    { company_id: 31, name: "Zscaler", ticker: "ZS", priority: "Trusted AI Governance & Security", industry: "Independent Software Vendor", industry_role: "core", hq: "San Jose, USA", exchange: "NASDAQ", market_cap: "$35B", employees: "~7,000", founded: "2007", summary: "A pioneer of the cloud-delivered zero trust security model, providing secure access service edge (SASE) products that route enterprise traffic through its global security cloud.", latest_brief: { brief_id: 131, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Zscaler continues to see strong demand for its zero trust architecture as enterprises extend secure access policies to cover AI agent traffic and machine-to-machine communication. The company is expanding data protection and AI security modules to address growing concern over sensitive data exposure through generative AI tools. Management continues to cite large deal growth and platform expansion as evidence of Zscaler's success displacing legacy VPN and firewall architectures." }, aliases: [] },
    { company_id: 32, name: "Qualcomm", ticker: "QCOM", priority: "AI-Native Software Engineering", industry: "Semiconductors", industry_role: "core", hq: "San Diego, USA", exchange: "NASDAQ", market_cap: "$180B", employees: "~50,000", founded: "1985", summary: "A leading designer of mobile chipsets (Snapdragon) and wireless technology licensor, expanding into AI PC processors, automotive, and edge-AI compute to diversify beyond smartphones.", latest_brief: { brief_id: 132, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Qualcomm continues to diversify beyond its core smartphone chipset business into automotive, IoT, and AI PC processors as it seeks to reduce reliance on Apple and Android handset cycles. Snapdragon-based AI PC chips are gaining design wins as Windows OEMs push on-device AI features. Management continues to highlight licensing revenue stability alongside growth in edge-AI compute as key pillars of the diversification strategy." }, aliases: [] },
    { company_id: 33, name: "AMD", ticker: "AMD", priority: "Cloud & Platform Modernization", industry: "Semiconductors", industry_role: "core", hq: "Santa Clara, USA", exchange: "NASDAQ", market_cap: "$350B", employees: "~28,000", founded: "1969", summary: "A major designer of CPUs and GPUs, positioned as the primary alternative to NVIDIA in AI accelerators (Instinct MI-series) while also leading in server and PC processors.", latest_brief: { brief_id: 133, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "AMD's Instinct MI-series AI accelerators continue to gain traction with hyperscaler and enterprise customers seeking a credible alternative to NVIDIA's GPU dominance. Data center revenue growth remains driven by both EPYC server CPU share gains and expanding AI GPU shipments under multi-year supply agreements. Management continues to emphasize an aggressive annual roadmap cadence for AI silicon as key to closing the performance gap with NVIDIA." }, aliases: [] },
    { company_id: 34, name: "Broadcom", ticker: "AVGO", priority: "Cloud & Platform Modernization", industry: "Semiconductors", industry_role: "core", hq: "Palo Alto, USA", exchange: "NASDAQ", market_cap: "$1.5T", employees: "~37,000", founded: "1961", summary: "A diversified semiconductor and infrastructure software company, and a top supplier of custom AI accelerator (ASIC) chips and networking silicon to hyperscalers, alongside its VMware software business.", latest_brief: { brief_id: 134, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Broadcom continues to see robust demand for its custom AI ASIC accelerators, designed in partnership with hyperscale customers seeking alternatives to merchant GPU silicon. Networking chip revenue is also benefiting from the buildout of high-bandwidth AI data center fabric. VMware software integration continues to contribute steady, high-margin recurring revenue alongside the faster-growing AI semiconductor segment." }, aliases: [] },
    { company_id: 35, name: "Marvell Technology", ticker: "MRVL", priority: "Cloud & Platform Modernization", industry: "Semiconductors", industry_role: "core", hq: "Santa Clara, USA", exchange: "NASDAQ", market_cap: "$70B", employees: "~6,000", founded: "1995", summary: "A fabless semiconductor company specializing in data infrastructure chips, including custom AI silicon, optical interconnects, and networking products used inside hyperscaler data centers.", latest_brief: { brief_id: 135, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Marvell continues to expand its custom AI silicon and optical interconnect business as hyperscalers seek specialized chips for scaling out large AI training clusters. Data center revenue remains the company's dominant and fastest-growing segment, driven by design wins with major cloud providers. Management continues to highlight the multi-year nature of custom silicon program revenue as a source of growth visibility." }, aliases: [] },
    { company_id: 36, name: "Arm Holdings", ticker: "ARM", priority: "Cloud & Platform Modernization", industry: "Semiconductors", industry_role: "core", hq: "Cambridge, United Kingdom", exchange: "NASDAQ", market_cap: "$150B", employees: "~7,000", founded: "1990", summary: "The dominant licensor of CPU architecture used in the vast majority of the world's smartphones, and an increasingly important player in energy-efficient data center and AI chip designs.", latest_brief: { brief_id: 136, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Arm continues to gain share in data center CPUs as hyperscalers adopt Arm-based server designs for improved power efficiency in AI-dense facilities. Royalty revenue growth is increasingly tied to higher-value AI and premium smartphone chip designs rather than unit volume alone. Management continues to highlight expanding licensing relationships with custom silicon programs as a long-term growth driver beyond its traditional mobile royalty base." }, aliases: [] },
    { company_id: 37, name: "Synopsys", ticker: "SNPS", priority: "AI-Native Software Engineering", industry: "Independent Software Vendor", industry_role: "core", hq: "Sunnyvale, USA", exchange: "NASDAQ", market_cap: "$90B", employees: "~21,000", founded: "1986", summary: "The leading provider of electronic design automation (EDA) software used to design semiconductors, increasingly embedding AI-driven chip design tools to accelerate custom silicon development.", latest_brief: { brief_id: 137, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Synopsys continues to see strong demand for its AI-driven chip design tools (Synopsys.ai) as customers race to design custom AI silicon faster amid intensifying competition. EDA software revenue growth remains closely tied to overall semiconductor industry R&D spending and the proliferation of custom accelerator programs. Management continues to highlight design IP licensing as a complementary growth driver alongside core EDA tool sales." }, aliases: [] },
    { company_id: 38, name: "Cadence", ticker: "CDNS", priority: "AI-Native Software Engineering", industry: "Independent Software Vendor", industry_role: "core", hq: "San Jose, USA", exchange: "NASDAQ", market_cap: "$85B", employees: "~12,000", founded: "1988", summary: "A major electronic design automation (EDA) software provider, alongside Synopsys, supplying chip design and verification tools increasingly augmented with AI to speed custom silicon development.", latest_brief: { brief_id: 138, title: "Q2 2026 Update", brief_date: "2026-08-01", qc_score: 4.5, summary: "Cadence continues to expand its AI-driven design and verification tools as semiconductor customers seek to compress design cycles for increasingly complex AI accelerator chips. Systems design and analysis revenue is growing alongside core EDA licenses as customers adopt full-flow digital design platforms. Management continues to cite broadening demand from hyperscaler custom silicon teams as a structural growth driver for the EDA industry." }, aliases: [] }
  ]
};
