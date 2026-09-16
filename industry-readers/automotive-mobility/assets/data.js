window.AUTO_TRENDS =
{
  "industry": "Automotive",
  "schema_version": "1.0",
  "generated": "2026-09-16",
  "note": "Trend set (t1, t2, t4, t5) as operationalized in the Gemini research pass - no t3 appeared anywhere in the source data, so it is omitted rather than invented.",
  "trends": [
    {
      "id": "t1",
      "name": "The Hybrid Profitability Bridge",
      "one_line_so_what": "Hybrids, not pure EVs, are where OEM profit is actually coming from right now.",
      "direction": "accelerating",
      "current_readout": "Toyota and Ford are the clearest validation points: Toyota's multi-pathway strategy drove a 20% YoY surge in hybrid deliveries, an 11.0% operating margin, and a maintained JPY 4.3 trillion full-year profit outlook. Ford explicitly reallocated capital away from pure-EV spend toward hybrid and combustion lines, with Ford Pro (commercial) and Ford Blue (hybrid/ICE) carrying 100% of the company's net profit while Model e remains loss-making. BMW and Aptiv also support the trend but show it can cut the other way when execution slips - BMW's automotive EBIT margin fell to 2.3% even while defending hybrid/EV flexibility.",
      "supporting_companies": ["Toyota", "Ford Motor Company", "BMW", "Aptiv"],
      "complicating_companies": [],
      "contradicting_companies": [],
      "financial_reality_check": "Clear split: Toyota (11.0% operating margin, JPY 1.3 trillion quarterly profit) and Ford (Q2 beat, Ford Pro EBIT >15%) show real financial strength backing this trend. BMW (automotive EBIT down to 2.3%, guidance cut to 1-3%) and Aptiv (guidance cut $300M) show that hybrid positioning alone doesn't protect margin without execution.",
      "priority_tags": ["Supply Chain & Mfg", "NEV and Circular Economy"]
    },
    {
      "id": "t2",
      "name": "Margin Squeeze & Scale Discipline",
      "one_line_so_what": "Most of the industry is being squeezed on margin at once - tariffs, price wars, and raw material costs - and the ones protecting margin are doing it through discipline, not growth.",
      "direction": "accelerating",
      "current_readout": "The dominant trend across the portfolio: 12 of 23 researched companies show direct margin compression (Stellantis 14.4%->10.0%, Subaru operating profit down 44.3%, BMW down to 2.3%, Maruti Suzuki 8.8%->5.1%, Volkswagen Q1 miss). A smaller group is bypassing the squeeze through regional or product-mix agility rather than being immune to the pressure (Isuzu beat consensus via Middle East demand, Daimler Trucks raised ROS guidance via US local-content approval, Magna and Bosch India beat via operational excellence/localization). Only Ferrari and Toyota genuinely contradict the trend outright.",
      "supporting_companies": ["Aptiv", "BMW", "CNH Industrial", "Ford Motor Company", "Geely-Volvo Cars", "Maruti Suzuki", "Mercedes-Benz", "Renault", "Stellantis", "Subaru", "Valeo", "Volkswagen"],
      "complicating_companies": ["Bosch", "Daimler Trucks", "Isuzu Motors", "Magna International", "Michelin", "Volvo Group"],
      "contradicting_companies": ["Ferrari", "Toyota"],
      "financial_reality_check": "Three clear tiers: the squeezed base shows explicit margin degradation (Stellantis, Subaru, BMW, Maruti Suzuki all missed or guided down); the agility exemptions used regional/mix levers to beat consensus despite the same macro pressure (Isuzu beat JPY 74.8B vs JPY 65.0B expected, Magna beat EPS $1.86 vs $1.44); the fortress leaders (Ferrari >29% EBIT margin, Toyota 11.0% operating margin) are structurally insulated by pricing power or product mix.",
      "priority_tags": ["Supply Chain & Mfg", "Core Engineering Transformation"]
    },
    {
      "id": "t4",
      "name": "Digital-First, Trust-Driven Retail",
      "one_line_so_what": "Where OEMs and dealers have gone digital-first, it's converting into real revenue growth, not just customer experience polish.",
      "direction": "steady",
      "current_readout": "Three companies validate this cleanly: OPENLANE (KAR Auction Services) grew revenue 15% to $555M and marketplace GMV 41% to $10.5B entirely through digital platform consolidation; Penske grew consolidated revenue 6% to $8.51B via omni-channel retail expansion; Ferrari sustains a fully sold-out 2027 order book through exclusive, trust-driven customer networks rather than digital scale per se, but the trust-driven retail principle holds at the luxury end too.",
      "supporting_companies": ["Ferrari", "KAR Auction Services (OPENLANE)", "Penske Automotive"],
      "complicating_companies": [],
      "contradicting_companies": [],
      "financial_reality_check": "All three supporting companies beat consensus or delivered guidance raises in the same period - OPENLANE beat revenue/EPS and raised full-year EBITDA guidance to $385-400M, Penske beat EPS by 7.1%, Ferrari sustained a >29% EBIT margin. No company in this dataset complicated or contradicted this trend.",
      "priority_tags": ["Customer XP", "Software"]
    },
    {
      "id": "t5",
      "name": "Software-Defined Vehicle Architecture Consolidation",
      "one_line_so_what": "OEMs are racing to consolidate software architecture to capture licensing-style margins, but the transition itself is causing near-term delivery pain for several of them.",
      "direction": "accelerating",
      "current_readout": "A genuine double-edged trend. Supporters (BMW, Bosch, Burelle, Mercedes-Benz, Valeo, Volkswagen) are investing to capture asset-light software margin, but Aptiv explicitly complicates it - a $50M enterprise software validation delay hit near-term operating momentum even as the company otherwise fits the trend. Volkswagen's own Cariad software unit restructuring and new Rivian platform partnership is the clearest large-scale example of the transition's cost: a Q1 operating margin miss (3.3% vs consensus) tied directly to software validation delays, before recovering in Q2.",
      "supporting_companies": ["BMW", "Bosch", "Burelle", "Mercedes-Benz", "Valeo", "Volkswagen"],
      "complicating_companies": ["Aptiv"],
      "contradicting_companies": [],
      "financial_reality_check": "Near-term pain is real and visible: Aptiv missed guidance by $300M citing software timing delays, Volkswagen missed Q1 FactSet expectations (EUR2.5B vs EUR2.93B expected) before recovering in Q2. Longer-term insulation is also visible: Valeo stabilized at a 12.0% EBITDA margin on EUR4.0B in new ADAS order intake, and Mercedes-Benz held a defensive 10.2% Cars ROS through the same structural efficiencies this trend calls for.",
      "priority_tags": ["Software", "Core Engineering Transformation"]
    }
  ]
}
;

window.AUTO_COMPETITIVE =
{
  "industry": "Automotive",
  "schema_version": "1.0",
  "generated": "2026-09-16",
  "caveat_required_display": "Reflects public-source visibility only, as of September 2026 - not confirmed presence or absence of an actual client engagement. Absence of a named competitor means no public evidence was found, not that no engagement exists.",
  "note": "Light-touch by design per the storyboard decision - plain per-priority counts, no interactive matrix, no ranking. Companies with a false in a competitor field mean explicit 'no evidence found,' which is itself a real finding, not a gap.",
  "per_priority_summary": [
    {"priority": "Software", "companies_researched": 18, "public_signal_found_for_at_least_one_competitor": 18, "no_public_signal_found_for_any": 0},
    {"priority": "Supply Chain & Mfg", "companies_researched": 21, "public_signal_found_for_at_least_one_competitor": 21, "no_public_signal_found_for_any": 0},
    {"priority": "Core Engineering Transformation", "companies_researched": 19, "public_signal_found_for_at_least_one_competitor": 18, "no_public_signal_found_for_any": 1},
    {"priority": "Customer XP", "companies_researched": 13, "public_signal_found_for_at_least_one_competitor": 13, "no_public_signal_found_for_any": 0},
    {"priority": "NEV and Circular Economy", "companies_researched": 12, "public_signal_found_for_at_least_one_competitor": 10, "no_public_signal_found_for_any": 2}
  ],
  "per_company_no_evidence_flags": [
    {"company": "Bosch", "competitor_with_no_public_signal": "Accenture"},
    {"company": "Burelle", "competitor_with_no_public_signal": ["IBM", "TCS"]},
    {"company": "CNH Industrial", "competitor_with_no_public_signal": "TCS"},
    {"company": "Daimler Trucks", "competitor_with_no_public_signal": "Accenture"},
    {"company": "Ferrari", "competitor_with_no_public_signal": "TCS"},
    {"company": "Geely - Volvo Cars", "competitor_with_no_public_signal": "TCS"},
    {"company": "Isuzu Motors", "competitor_with_no_public_signal": "IBM"},
    {"company": "KAR Auction Services (OPENLANE)", "competitor_with_no_public_signal": "IBM"},
    {"company": "Magna International", "competitor_with_no_public_signal": "IBM"},
    {"company": "Maruti Suzuki", "competitor_with_no_public_signal": "IBM"},
    {"company": "Michelin", "competitor_with_no_public_signal": "TCS"},
    {"company": "Penske Automotive", "competitor_with_no_public_signal": "IBM"},
    {"company": "Subaru", "competitor_with_no_public_signal": "IBM"},
    {"company": "Valeo", "competitor_with_no_public_signal": "IBM"},
    {"company": "Volvo Group", "competitor_with_no_public_signal": "TCS"}
  ]
}
;

window.AUTO_EMERGING =
{
  "industry": "Automotive",
  "schema_version": "1.0",
  "generated": "2026-09-16",
  "source_quality_note": "Sourcing for this section was inconsistent in the raw research - some citations trace to legitimate outlets (PwC, Arm, Yahoo Finance) and others to low-quality aggregator/SEO sites. Verify each funding/traction claim independently before using externally. This is flagged, not silently cleaned up.",
  "emerging_players": [
    {
      "name": "Applied Intuition",
      "core_differentiation": "Universal Vehicle OS & Autonomy Validation Stack - hardware-agnostic simulation, orchestration, and continuous deployment validation suite that virtualizes SDV testing.",
      "traction": "$15 billion valuation following a Series F round (June 2025). Shipped Axion and Acuity tools with production software deployment partnerships at Porsche, Audi, Toyota, Traton, and Stellantis.",
      "value_chain_impact": {
        "exposed_entities": ["Traditional Tier 1 embedded software providers (e.g., KPIT Technologies, Tata Elxsi)", "Legacy validation labs"],
        "mechanism": "Strips away the custom-built regression testing and engineering verification margins legacy Tier 1 suppliers traditionally controlled, by providing a unified validation layer directly to OEMs."
      },
      "priority_tags": ["Software", "Core Engineering Transformation"]
    },
    {
      "name": "Wayve",
      "core_differentiation": "End-to-end 'Embodied AI' foundation model - mapless, hardware-agnostic deep learning that navigates dynamic environments via real-time camera inference rather than HD-mapped rule bases.",
      "traction": "$1.2 billion Series D (February 2026, co-led by SoftBank Vision Fund 2, Eclipse, Balderton Capital), valuing the company at $8.6 billion. Active development partnerships with Mercedes-Benz, Nissan, and Stellantis.",
      "value_chain_impact": {
        "exposed_entities": ["Legacy hardware-sensor integrators (e.g., Mobileye, Continental)"],
        "mechanism": "Shifts the intelligence asset to the cloud/vehicle compute layer, isolating Tier 1 sensor suppliers into basic commodity hardware manufacturers."
      },
      "priority_tags": ["NEV and Circular Economy", "Core Engineering Transformation"]
    },
    {
      "name": "Modular",
      "core_differentiation": "'Switzerland Strategy' AI hypervisor (Mojo & MAX) - a neutral, vendor-agnostic programming layer and inference engine letting automakers port AI networks across multi-vendor silicon (NVIDIA, Intel, AMD) without code changes.",
      "traction": "$250 million raised in a round led by the U.S. Innovative Technology Fund, valuing the company at $1.6 billion. Tools actively shipping for OTA on-device edge inference in resource-constrained vehicle gateways.",
      "value_chain_impact": {
        "exposed_entities": ["Proprietary AI chipmakers", "Tier 1 compute architecture integrators (e.g., Bosch)"],
        "mechanism": "Destroys software-stack lock-in of specific hardware vendors, letting OEMs commoditize the silicon layer while preserving software platform ownership."
      },
      "priority_tags": ["Software", "Supply Chain & Mfg"]
    },
    {
      "name": "Ekho",
      "core_differentiation": "Decentralized multi-jurisdiction auto commerce engine - an automated transaction layer unifying remote checkout, nationwide financing, tax calculation, and e-registration into a single API.",
      "traction": "Backed by Y Combinator. Platform live, enabling digital auto startups and premium D2C EV brands to execute frictionless vehicle sales across U.S. markets.",
      "value_chain_impact": {
        "exposed_entities": ["Traditional brick-and-mortar dealer networks", "Legacy dealership software providers (e.g., Penske Automotive Group, OPENLANE)"],
        "mechanism": "Bypasses the geographic protection barrier held by physical retailers, enabling direct cross-border digital transactions on the manufacturer's own site."
      },
      "priority_tags": ["Customer XP"]
    },
    {
      "name": "Vehicle Software (Rust-based infotainment platform)",
      "core_differentiation": "Rust-based, low-latency modular cockpit platform - a lightweight in-vehicle infotainment layer built for security and low-latency feature personalization, versus heavier legacy IVI stacks.",
      "traction": "Founded 2020. Recently secured field adoption and pilot partnerships with agile EV makers.",
      "value_chain_impact": {
        "exposed_entities": ["Traditional infotainment integrators (e.g., Harman International, Visteon, Luxoft)"],
        "mechanism": "Shortens digital development cycles by up to 50%, directly threatening the multi-year, multi-million dollar software maintenance fees legacy infotainment suppliers rely on for recurring revenue."
      },
      "priority_tags": ["Software", "Customer XP"]
    }
  ]
}
;

window.AUTO_COMPANIES =
{
  "industry": "Automotive",
  "schema_version": "1.0",
  "generated": "2026-09-16",
  "companies": [
    {
      "name": "Aptiv PLC",
      "display_name": "Aptiv Services US",
      "financial_snapshot": {
        "this_quarter": {"period": "Q2 2026", "revenue": "$3.30 billion (+2% YoY, excludes spun-off EDS segment)", "margin": "18.4% Adjusted EBITDA margin (+10bps YoY)"},
        "last_quarter": {"period": "Q1 2026", "revenue": "$5.10 billion (+5% YoY)", "margin": "11.0% adjusted operating margin / 14.8% Adjusted EBITDA margin"},
        "guidance": "Lowered full-year revenue guidance by $300M to $12.6-$12.8B, citing $150M China production cuts and $100M launch delays.",
        "vs_consensus": "Q2 adjusted EPS of $1.63 beat consensus; Q3 outlook missed expectations."
      },
      "leadership_quotes": [
        {"speaker": "Kevin Clark", "title": "Chairman and CEO", "entity": "Parent Company", "date": "2026-07-30", "source": "Q2 2026 Earnings Call Transcript", "statement": "The narrative across global OEMs has pivoted rapidly to scale discipline. While pure-play EV demand growth cools, we are leveraging our diversified architecture holdings to support customer switches to hybrid platforms.", "topic_tags": ["Supply Chain & Mfg", "Core Engineering Transformation"]},
        {"speaker": "Joseph Massaro", "title": "Vice President and CFO", "entity": "Global Finance Unit", "date": "2026-07-30", "source": "Q2 2026 Earnings Call Transcript", "statement": "We adjusted our full-year outlook downward by $300 million to reflect enterprise software timing delays and slower software validation phases with select European clients.", "topic_tags": ["Software"]},
        {"speaker": "Simon Yang", "title": "President, Aptiv Asia Pacific", "entity": "Named Geography Unit (APAC)", "date": "2026-07-30", "source": "Q2 2026 Regional Performance Review", "statement": "Localized production scheduling impacts and temporary manufacturing resets in China created a $150 million headwind, requiring more conservative launch timelines for the remainder of 2026.", "topic_tags": ["Supply Chain & Mfg"]}
      ],
      "strategic_move": {
        "announcement": "Divestiture and spin-off of the Electrical Distribution Systems (EDS) segment, effective April 1, 2026.",
        "financial_grounding": "Explains the revenue drop from $5.10B (Q1) to $3.30B (Q2, excludes EDS) and the 10bps adjusted EBITDA margin expansion to 18.4% despite lower raw volumes.",
        "priority_tags": ["Supply Chain & Mfg", "Core Engineering Transformation"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Running global cloud migration and PLM harmonization program, standardizing engineering toolchains post-EDS divestiture.", "date_source": "March 2026, Corporate Case Study", "priority_tags": ["Core Engineering Transformation", "Supply Chain & Mfg"]},
        {"competitor": "IBM", "status": "confirmed", "engagement": "IBM Concert and watsonx tools deployed to automate software validation loops.", "date_source": "November 2025, IBM Tech Briefings", "priority_tags": ["Software"]},
        {"competitor": "TCS", "status": "confirmed", "engagement": "Baseline legacy application management for global operations facilities.", "date_source": "February 2026, TCS Client Testimonial Portal", "priority_tags": ["Supply Chain & Mfg"]}
      ],
      "trend_fit": [
        {"trend_id": "t1", "stance": "supports", "evidence": "Leveraging diversified architecture holdings to support customer switches to hybrid platforms."},
        {"trend_id": "t2", "stance": "supports", "evidence": "Lowered full-year guidance by $300M due to China cutbacks and launch delays."},
        {"trend_id": "t5", "stance": "complicates", "evidence": "$50M commercial timing delay in enterprise software validation loops with European clients."}
      ],
      "priority_tags": ["Software", "Supply Chain & Mfg", "Core Engineering Transformation"]
    },
    {
      "name": "Bayerische Motoren Werke AG",
      "display_name": "BMW",
      "financial_snapshot": {
        "this_quarter": {"period": "Q2 2026", "revenue": "EUR31.26 billion (down 7.9% YoY)", "margin": "2.3% Automotive EBIT margin; 5.4% Group EBT margin"},
        "last_quarter": {"period": "Q1 2026", "revenue": "EUR31.01 billion (down 8.1% YoY)", "margin": "5.0% Automotive EBIT margin; 7.6% Group EBT margin"},
        "guidance": "Cut full-year automotive EBIT margin guidance from 4-6% to 1-3%, citing broader market weakness.",
        "vs_consensus": "Q2 automotive profitability slightly beat lowered analyst expectations due to cost cuts."
      },
      "leadership_quotes": [
        {"speaker": "Oliver Zipse", "title": "Chairman of the Board of Management (CEO)", "entity": "Parent Company", "date": "2026-08-04", "source": "Q2 2026 Half-Year Financial Report", "statement": "The automotive landscape is navigating volatile cycles, but we remain fully committed to our strategic technology path. Our architecture flexibility allows us to scale hybrid and electric offerings rapidly.", "topic_tags": ["NEV and Circular Economy", "Supply Chain & Mfg"]},
        {"speaker": "Walter Mertl", "title": "Board Member, Finance (CFO)", "entity": "Global Finance Division", "date": "2026-08-04", "source": "Q2 2026 Earnings Call Transcript", "statement": "The sharp compression of our Automotive EBIT margin to 2.3% this quarter reflects intense pricing pressures and raw material headwinds, accelerating our internal structural cost reduction loops.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Jochen Goller", "title": "Board Member, Customer, Brands, Sales", "entity": "Global Sales and Customer Experience Unit", "date": "2026-05-07", "source": "Q1 2026 Earnings Briefing", "statement": "Our European sales momentum was highly insulated by electric vehicles. Delivering over 33% more BEVs in a contracting market underscores that premium customers lean on our unified retail experience.", "topic_tags": ["NEV and Circular Economy", "Customer XP"]},
        {"speaker": "Frank Weber", "title": "Board Member, Development (CTO)", "entity": "Global R&D and Engineering Unit", "date": "2026-03-18", "source": "Annual Conference Press Transcript", "statement": "With the Neue Klasse technology validation phases hitting full stride, we are finalizing a highly efficient electric drive cluster that maximizes circular design and thermal productivity.", "topic_tags": ["NEV and Circular Economy", "Core Engineering Transformation"]}
      ],
      "strategic_move": {
        "announcement": "Plant structural tooling preparation for the upcoming Neue Klasse EV platform.",
        "financial_grounding": "A multi-billion Euro multi-year investment currently weighing on operations - directly accounts for the Automotive EBIT margin compression to 2.3% due to front-loaded factory transformation costs before revenue generation begins.",
        "priority_tags": ["NEV and Circular Economy", "Supply Chain & Mfg", "Core Engineering Transformation"]
      },
      "competitive_landscape": [
        {"competitor": "TCS", "status": "confirmed", "engagement": "Long-term managed services contract optimizing HPC environments for crash testing and aerodynamic simulations.", "date_source": "January 2026, TCS Automotive Client Disclosures", "priority_tags": ["Core Engineering Transformation"]},
        {"competitor": "IBM", "status": "confirmed", "engagement": "IBM Quantum Network collaboration optimizing factory materials routing and battery chemistry modeling for Neue Klasse.", "date_source": "2026, IBM disclosures", "priority_tags": ["Core Engineering Transformation", "NEV and Circular Economy"]},
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Accenture Interactive building the unified digital retail orchestration engine for Neue Klasse's direct-to-consumer model.", "date_source": "2026, Accenture disclosures", "priority_tags": ["Customer XP"]}
      ],
      "trend_fit": [
        {"trend_id": "t1", "stance": "supports", "evidence": "Architecture design flexibility allows factories to rapidly alter manufacturing volumes between hybrid and electric lines."},
        {"trend_id": "t2", "stance": "supports", "evidence": "Automotive EBIT margin compressed sharply to 2.3% under pricing and raw material headwinds."},
        {"trend_id": "t5", "stance": "supports", "evidence": "Heavy engineering validation workflows advancing for upcoming software-defined premium entries."}
      ],
      "priority_tags": ["NEV and Circular Economy", "Supply Chain & Mfg", "Core Engineering Transformation", "Customer XP", "Software"]
    },
    {
      "name": "Bosch Limited / Robert Bosch GmbH",
      "display_name": "Bosch",
      "financial_snapshot": {
        "this_quarter": {"period": "Q1 FY2027", "revenue": "INR 58.42 billion (+22% YoY)", "margin": "14.0% EBITDA margin (INR 8.18 billion)"},
        "last_quarter": {"period": "Q4 FY2026", "revenue": "INR 55.64 billion (standalone)", "margin": "Group-level full-year EBIT margin ~4-5%"},
        "guidance": "Management affirmed the 14% EBITDA margin as sustainable, driven by localization.",
        "vs_consensus": "Q1 revenue beat consensus by 8.25%."
      },
      "leadership_quotes": [
        {"speaker": "Stefan Hartung", "title": "Chairman of the Board of Management (CEO)", "entity": "Parent Group", "date": "2026-04-22", "source": "2026 Annual Press Conference Transcript", "statement": "We are shifting faster to software-defined mobility compute architectures. Centralized vehicle computers are bypassing traditional hardware margins to capture asset-light licensing software revenue pools.", "topic_tags": ["Software"]},
        {"speaker": "Guruprasad Mudlapur", "title": "Managing Director", "entity": "Bosch Limited (India)", "date": "2026-08-11", "source": "Q1 FY2027 Regulatory Filing / Earnings Statement", "statement": "Our 22% top-line expansion to INR 58.42 billion demonstrates the strength of our localized engineering setups. Expanding our Two-Wheeler Powersports division by 41% highlights our capability to meet evolving consumer configurations.", "topic_tags": ["Core Engineering Transformation"]},
        {"speaker": "Sandeep N", "title": "Joint Managing Director", "entity": "Bosch Limited (India)", "date": "2026-05-26", "source": "Q4 FY2026 Investor Presentation", "statement": "Sustaining a 14% EBITDA margin floor requires intense production localization. We are optimizing our Power Solutions footprint to buffer against global logistics risks.", "topic_tags": ["Supply Chain & Mfg"]}
      ],
      "strategic_move": {
        "announcement": "Operational expansion and localization ramp of Power Solutions and Two-Wheeler Powersports manufacturing lines in India.",
        "financial_grounding": "Directly drove the 22% top-line surge to INR 58.42 billion and secured the sustainable 14.0% EBITDA margin.",
        "priority_tags": ["Supply Chain & Mfg"]
      },
      "competitive_landscape": [
        {"competitor": "TCS", "status": "confirmed", "engagement": "Running end-to-end deployment of a localized SAP S/4HANA core platform for Bosch Limited India.", "date_source": "2026, TCS disclosures", "priority_tags": ["Supply Chain & Mfg"]},
        {"competitor": "IBM", "status": "confirmed", "engagement": "Co-developing cloud enterprise middleware supporting asset-light compute licensing platforms.", "date_source": "2026, IBM disclosures", "priority_tags": ["Software"]},
        {"competitor": "Accenture", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "complicates", "evidence": "Localized Indian entities successfully insulated operations to outperform broader global group-level margin pressures."},
        {"trend_id": "t5", "stance": "supports", "evidence": "Aggressively shifting resources into centralized compute platforms to capture high-margin software licensing revenue."}
      ],
      "priority_tags": ["Supply Chain & Mfg", "Software", "Core Engineering Transformation"]
    },
    {
      "name": "Burelle SA",
      "display_name": "Burelle",
      "financial_snapshot": {
        "this_quarter": {"period": "Recent Quarter", "revenue": "Declined 2.5% YoY", "margin": "Quarterly earnings growth +18.2% YoY"},
        "last_quarter": {"period": "Rolling 12-Month (Mid-2026)", "revenue": "EUR10.23 billion", "margin": "1.30% net profit margin"},
        "guidance": "Prioritizing deleveraging and integrating the OPmobilities hydrogen portfolio.",
        "vs_consensus": "N/A - low analyst coverage volume."
      },
      "leadership_quotes": [
        {"speaker": "Laurent Burelle", "title": "Chairman and CEO", "entity": "Parent Company", "date": "2026-06-04", "source": "2026 Annual General Meeting Statement", "statement": "Our rolling twelve-month revenue base of EUR10.23 billion validates the stability of our multi-tier supplier structure during a phase of intense global macroeconomic restructuring.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Laurent Favre", "title": "CEO of OPmobilities (Plastic Omnium)", "entity": "Core Named Subsidiary", "date": "2026-07-23", "source": "OPmobilities H1 2026 Interim Results", "statement": "The structural transition of our product line toward clean energy solutions remains fully funded. Integrating our hydrogen storage portfolio is a critical component of our engineering transformation loops.", "topic_tags": ["NEV and Circular Economy", "Core Engineering Transformation"]},
        {"speaker": "Stephane Noel", "title": "CEO of Intelligent Exterior Systems", "entity": "Named Subsidiary Division (OPmobilities Exterior)", "date": "2026-03-11", "source": "Division Innovation Day Briefing", "statement": "Complex body modules must now seamlessly embed ADAS lighting components. We are evolving from a pure plastic molder into an integrated tech provider for premium OEMs.", "topic_tags": ["Core Engineering Transformation", "Customer XP"]}
      ],
      "strategic_move": {
        "announcement": "Integration and scaling of the OPmobilities hydrogen storage portfolio.",
        "financial_grounding": "Rolling 12-month net margins remain compressed at 1.30% due to legacy segment retooling, but the shift helped support the 18.2% quarterly earnings expansion via high-value module configurations.",
        "priority_tags": ["NEV and Circular Economy", "Core Engineering Transformation"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Implementing an integrated digital MES at OPmobilities to streamline high-value vehicle module assembly lines.", "date_source": "March 2026, Accenture Industrial Practice Disclosures", "priority_tags": ["Supply Chain & Mfg"]},
        {"competitor": "IBM", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []},
        {"competitor": "TCS", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "supports", "evidence": "Trailing twelve-month net profit margin remained compressed at 1.30% under legacy asset restructuring."},
        {"trend_id": "t5", "stance": "supports", "evidence": "Expanding engineering transformation budgets to integrate complex exterior modules with advanced electronics and ADAS lighting."}
      ],
      "priority_tags": ["Core Engineering Transformation", "Supply Chain & Mfg", "Customer XP", "NEV and Circular Economy"]
    },
    {
      "name": "CNH Industrial N.V.",
      "display_name": "CNH Industrial",
      "financial_snapshot": {
        "this_quarter": {"period": "Q2 2026", "revenue": "$4.80 billion (+2% YoY)", "margin": "5.2% Agriculture EBIT margin (down from 8.1%); 1.7% Construction EBIT margin"},
        "last_quarter": {"period": "Prior period", "revenue": "Not available in provided research", "margin": "8.1% Agriculture EBIT margin"},
        "guidance": "Narrowed full-year guidance to the high end of previous ranges, citing retail pricing stability.",
        "vs_consensus": "In-line with lowered sector expectations."
      },
      "leadership_quotes": [
        {"speaker": "Gerrit Marx", "title": "CEO", "entity": "Parent Company", "date": "2026-07-28", "source": "Q2 2026 Earnings Call Transcript", "statement": "Our structural agriculture margins are resetting down to 5.2% due to intense cyclical demand compression, making it necessary to implement quick manufacturing adjustments and strict inventory control programs.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Oddone Incisa", "title": "CFO", "entity": "Global Financial Operations", "date": "2026-07-28", "source": "Q2 2026 Earnings Call Transcript", "statement": "By narrowing our full-year outlook toward the higher end of prior ranges, we are reflecting the stabilization of retail pricing vectors even as construction activity buffers the agricultural decline.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Humair Mandavia", "title": "CTO", "entity": "Global Technology & Precision Engineering Unit", "date": "2026-02-10", "source": "Q1 2026 Product Strategy Deck", "statement": "Our core engineering transformation focuses on expanding automated guidance and precision software stacks directly onto the factory assembly floor.", "topic_tags": ["Software", "Core Engineering Transformation"]},
        {"speaker": "Stefano Pampalone", "title": "President, Construction", "entity": "Named Business Segment", "date": "2026-07-28", "source": "H1 2026 Operations Readout", "statement": "A 12% revenue surge in construction machinery successfully countered softer agricultural runs, helping us maintain a portfolio worth $28 billion across our financing frameworks.", "topic_tags": ["Supply Chain & Mfg"]}
      ],
      "strategic_move": {
        "announcement": "Global manufacturing alignment and strict agricultural inventory correction program.",
        "financial_grounding": "The heavy down-time and reduced factory utilization caused the Agriculture EBIT margin to drop to 5.2% (from 8.1%) and Construction margin to 1.7%.",
        "priority_tags": ["Supply Chain & Mfg"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Running multi-year systems integration of digital agriculture and automated guidance platform, connecting dealer portals with factory tools.", "date_source": "January 2026, Accenture Client Showcase", "priority_tags": ["Software", "Core Engineering Transformation"]},
        {"competitor": "IBM", "status": "confirmed", "engagement": "Deployed AI-driven inventory tracking matrix for dealer inventory corrections and tariff impact modeling.", "date_source": "June 2026, IBM Supply Chain Solutions Case Registry", "priority_tags": ["Supply Chain & Mfg"]},
        {"competitor": "TCS", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "supports", "evidence": "Extreme cyclical demand compression and global tariff policies caused Agriculture EBIT margin to collapse to 5.2%."}
      ],
      "priority_tags": ["Supply Chain & Mfg", "Software", "Core Engineering Transformation"]
    },
    {
      "name": "Daimler Truck Holding AG",
      "display_name": "Daimler Trucks",
      "financial_snapshot": {
        "this_quarter": {"period": "Q2 2026", "revenue": "EUR12.30 billion (+5% YoY); Industrial Business EUR11.40 billion", "margin": "6.8% Industrial Return on Sales; Adjusted Group EBIT EUR838 million"},
        "last_quarter": {"period": "Prior period", "revenue": "Not available in provided research", "margin": "Not available in provided research"},
        "guidance": "Raised full-year ROS guidance to 7-9% (from 6-8%); North America ROS forecast raised to 9-11%.",
        "vs_consensus": "Guidance raise was positively received relative to sector peers."
      },
      "leadership_quotes": [
        {"speaker": "Martin Daum", "title": "Chairman of the Board of Management (CEO)", "entity": "Parent Group", "date": "2026-08-06", "source": "Q2 2026 Financial Release", "statement": "While macro adjustments continue to strain certain global transport networks, raising our full-year Return on Sales expectations to 7%-9% highlights our excellent execution capacity.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Eva Scherer", "title": "CFO", "entity": "Global Finance Directorate", "date": "2026-08-06", "source": "Q2 2026 Earnings Call Transcript", "statement": "Our Industrial Business generated an adjusted EBIT of EUR838 million. Profitability lines remain secure because we proactively managed structural product content definitions in core jurisdictions.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "John O'Leary", "title": "President and CEO, Daimler Truck North America", "entity": "Named Geography Unit (DTNA)", "date": "2026-08-06", "source": "Regional Investor Update Presentation", "statement": "The upward revision of our North American ROS projection to 9%-11% was unlocked directly by the U.S. Department of Commerce approving our specialized local content applications.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Till Oberworder", "title": "CEO of Daimler Buses", "entity": "Named Subsidiary Division", "date": "2026-05-12", "source": "Q1 2026 Segment Performance Review", "statement": "Persistent Latin American volume shocks meant we had to adjust our annual bus production models down to 20,000-25,000 units to avoid inventory blockages.", "topic_tags": ["Supply Chain & Mfg"]}
      ],
      "strategic_move": {
        "announcement": "Regulatory approval and launch of specialized local content configurations for Trucks North America.",
        "financial_grounding": "Directly drove the raised full-year Industrial ROS guidance (7-9%) and the North American regional ROS projection (9-11%).",
        "priority_tags": ["Supply Chain & Mfg"]
      },
      "competitive_landscape": [
        {"competitor": "TCS", "status": "confirmed", "engagement": "Primary managed services provider for DTNA's connected fleet backend, supporting real-time telematics ingestion.", "date_source": "May 2026, TCS Commercial Vehicle Practice Disclosures", "priority_tags": ["Software", "Customer XP"]},
        {"competitor": "IBM", "status": "confirmed", "engagement": "Providing high-performance cloud compute and simulation tooling to validate zero-emission commercial truck chassis configurations.", "date_source": "March 2026, IBM Engineering Case Studies", "priority_tags": ["Core Engineering Transformation", "NEV and Circular Economy"]},
        {"competitor": "Accenture", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "complicates", "evidence": "Successfully resisted macro compression by raising full-year Industrial ROS guidance to 7-9%."}
      ],
      "priority_tags": ["Supply Chain & Mfg", "Software", "Customer XP", "Core Engineering Transformation", "NEV and Circular Economy"]
    },
    {
      "name": "Ferrari N.V.",
      "display_name": "Ferrari",
      "financial_snapshot": {
        "this_quarter": {"period": "Q2 2026", "revenue": "Continued double-digit growth (exact figure withheld in source)", "margin": ">29% EBIT margin (record levels)"},
        "last_quarter": {"period": "Prior period", "revenue": "Not available in provided research", "margin": "Not available in provided research"},
        "guidance": "Confirmed confidence in full-year targets; order book covers the entirety of 2027 production.",
        "vs_consensus": "Consistently beats on margin mix."
      },
      "leadership_quotes": [
        {"speaker": "Benedetto Vigna", "title": "CEO", "entity": "Parent Company", "date": "2026-08-03", "source": "Q2 2026 Earnings Call Transcript", "statement": "Exclusivity and value creation, not total industry volume parameters, drive our historic financial targets. Our production model remains insulated from global competitive actions.", "topic_tags": ["Customer XP", "Supply Chain & Mfg"]},
        {"speaker": "Antonio Picca Piccon", "title": "CFO", "entity": "Global Finance Office", "date": "2026-08-03", "source": "Q2 2026 Press Release Document", "statement": "Securing an operating EBIT margin above 29% demonstrates the incredible leverage of our high-end personalization programs, giving us visibility through the entirety of 2027.", "topic_tags": ["Customer XP"]},
        {"speaker": "Enrico Galliera", "title": "Chief Marketing and Commercial Officer", "entity": "Global Sales and Commercialization Unit", "date": "2026-05-05", "source": "Q1 2026 Performance Presentation", "statement": "The balanced distribution of our order backlog across EMEA, the Americas, and APAC confirms that ultra-high-net-worth customer retention is detached from local market downturns.", "topic_tags": ["Customer XP"]}
      ],
      "strategic_move": {
        "announcement": "Strategic scaling of exclusive vehicle personalization programs.",
        "financial_grounding": "Drove the record-breaking EBIT margin above 29%, fully insulated from mass-market pricing actions.",
        "priority_tags": ["Customer XP"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Accenture Song running the global digital personalization configuration engine for client vehicle customization.", "date_source": "February 2026, Accenture Song Case Registry", "priority_tags": ["Customer XP", "Software"]},
        {"competitor": "IBM", "status": "confirmed", "engagement": "Premium Scuderia Ferrari partner, deploying data analytics to process telemetry and track factory R&D iterations.", "date_source": "November 2025, IBM Sports & Entertainment Disclosures", "priority_tags": ["Core Engineering Transformation"]},
        {"competitor": "TCS", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "contradicts", "evidence": "Remains entirely detached from mass-market volume slowdown and price erosion, preserving a >29% EBIT margin."},
        {"trend_id": "t4", "stance": "supports", "evidence": "Exclusive, trust-driven customer networks keep the entire 2027 production runway sold out."}
      ],
      "priority_tags": ["Customer XP", "Supply Chain & Mfg", "Software", "NEV and Circular Economy", "Core Engineering Transformation"]
    },
    {
      "name": "Ford Motor Company",
      "display_name": "Ford",
      "financial_snapshot": {
        "this_quarter": {"period": "Q2 2026", "revenue": "$47.8 billion (estimate based on beat context)", "margin": "Ford Pro EBIT margin >15%; Model e (EV) remained loss-making"},
        "last_quarter": {"period": "Prior period", "revenue": "Not available in provided research", "margin": "Not available in provided research"},
        "guidance": "Signaled a pivot to cut pure-EV CAPEX and lean into hybrids.",
        "vs_consensus": "Beat Q2 expectations on strong commercial fleet pricing."
      },
      "leadership_quotes": [
        {"speaker": "Jim Farley", "title": "President and CEO", "entity": "Parent Company", "date": "2026-07-29", "source": "Q2 2026 Earnings Call Transcript", "statement": "The industry-wide move toward margin discipline reinforces our decision to treat hybrid systems as a long-term profitability bridge while pure electric vehicle development scales slowly.", "topic_tags": ["Supply Chain & Mfg", "NEV and Circular Economy"]},
        {"speaker": "John Lawler", "title": "Vice Chair and CFO", "entity": "Corporate Finance and Strategy Unit", "date": "2026-07-29", "source": "Q2 2026 Earnings Call Transcript", "statement": "Our solid Q2 earnings surprise was driven completely by the pricing power of our traditional commercial fleet offerings, allowing us to actively reduce pure-EV capital expenditure paces.", "topic_tags": ["Supply Chain & Mfg", "NEV and Circular Economy"]},
        {"speaker": "Ted Cannis", "title": "CEO, Ford Pro", "entity": "Named Commercial Subsidiary Division", "date": "2026-07-29", "source": "H1 2026 Global Segment Report", "statement": "Achieving an EBIT return margin exceeding 15% within Ford Pro confirms that embedded fleet connectivity and uptime software solutions create a highly recurring corporate profit stream.", "topic_tags": ["Software", "Customer XP"]},
        {"speaker": "Kumar Galhotra", "title": "COO, Ford Blue", "entity": "Named ICE/Hybrid Vehicle Business Unit", "date": "2026-04-28", "source": "Q1 2026 Operations Presentation", "statement": "Ford Blue is maximizing internal factory efficiencies to support our high-margin combustion and hybrid truck lineups, which currently carry 100% of the company's net profitability.", "topic_tags": ["Supply Chain & Mfg"]}
      ],
      "strategic_move": {
        "announcement": "Strategic capital expenditure reallocation reducing pure-EV investment in favor of Hybrids.",
        "financial_grounding": "Mirrors the stark performance divide: Model e (EV) remained loss-making while Ford Pro (EBIT margin >15%) and Ford Blue carried 100% of current corporate profits.",
        "priority_tags": ["Supply Chain & Mfg", "NEV and Circular Economy"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Lead delivery partner architecting cloud scale integration for Ford Pro's commercial data assets, running predictive uptime software models.", "date_source": "July 2026, Accenture Technology Briefings", "priority_tags": ["Software", "Customer XP"]},
        {"competitor": "IBM", "status": "confirmed", "engagement": "Executing legacy applications modernization roadmap across Ford Blue manufacturing facilities.", "date_source": "May 2026, IBM Client Success Registry", "priority_tags": ["Supply Chain & Mfg", "NEV and Circular Economy"]},
        {"competitor": "TCS", "status": "confirmed", "engagement": "Application development and maintenance (ADM) services across Ford's product development groups globally.", "date_source": "March 2026, TCS Press Archive", "priority_tags": ["Core Engineering Transformation"]}
      ],
      "trend_fit": [
        {"trend_id": "t1", "stance": "supports", "evidence": "Primary validation point - leadership explicitly confirmed hybrid architectures as a long-term profitability bridge."},
        {"trend_id": "t2", "stance": "supports", "evidence": "Massive capital investments and price wars left Model e heavily loss-making."}
      ],
      "priority_tags": ["Supply Chain & Mfg", "NEV and Circular Economy", "Software", "Customer XP", "Core Engineering Transformation"]
    },
    {
      "name": "Geely Automobile Holdings (incl. Volvo Cars)",
      "display_name": "Geely - Volvo Cars",
      "financial_snapshot": {
        "this_quarter": {"period": "H1 2026", "revenue": "~CNY 107.00 billion (consolidated)", "margin": "~15.0% gross margin (stable despite price wars)"},
        "last_quarter": {"period": "Prior period", "revenue": "Not available in provided research", "margin": "Not available in provided research"},
        "guidance": "Focused on synergies between Zeekr, Volvo, and Geely brands to cut costs.",
        "vs_consensus": "Not found in available tier-1 sources."
      },
      "leadership_quotes": [
        {"speaker": "Li Shufu", "title": "Founder and Chairman", "entity": "Parent Holding Group", "date": "2026-08-19", "source": "H1 2026 Interim Results Presentation", "statement": "We are building deep engineering alliances between Zeekr, Volvo, and Geely Auto to optimize our multi-brand structures against aggressive regional price wars.", "topic_tags": ["Supply Chain & Mfg", "Core Engineering Transformation"]},
        {"speaker": "Daniel Li", "title": "CEO of Geely Auto", "entity": "Named Core Automotive Unit", "date": "2026-08-19", "source": "H1 2026 Earnings Call Transcript", "statement": "Maintaining our structural gross margins around 15% confirms that our platform consolidation programs are diluting core vehicle engineering costs across international markets.", "topic_tags": ["Supply Chain & Mfg", "Core Engineering Transformation"]},
        {"speaker": "Jim Rowan", "title": "CEO of Volvo Cars", "entity": "Named Subsidiary Company", "date": "2026-07-16", "source": "Volvo Cars Q2 2026 Financial Report", "statement": "Our strategic technology alignment within the broader Geely ecosystem ensures we can scale software-defined premium platforms while shielding our supply chain from localized tariff risks.", "topic_tags": ["Software", "Supply Chain & Mfg"]},
        {"speaker": "Andy An", "title": "CEO of Zeekr Intelligent Technology", "entity": "Named Premium EV Subsidiary", "date": "2026-06-10", "source": "Q1 2026 Financial Update Transcript", "statement": "A 40% expansion in first-half electric vehicle volumes proves that our advanced digital architecture is capturing high-growth premium segments ahead of traditional premium entries.", "topic_tags": ["NEV and Circular Economy", "Software"]}
      ],
      "strategic_move": {
        "announcement": "Global platform consolidation and technology-sharing framework across sub-brands.",
        "financial_grounding": "Kept consolidated H1 gross margins stable at ~15% and unlocked a >40% surge in NEV sales volume by lowering the unit cost base.",
        "priority_tags": ["Supply Chain & Mfg", "Core Engineering Transformation"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Implementing a unified cloud product development platform to optimize engineering synergies across Zeekr, Volvo, Geely Auto.", "date_source": "August 2026, Accenture Global Automotive Practice Disclosures", "priority_tags": ["Supply Chain & Mfg", "Core Engineering Transformation"]},
        {"competitor": "IBM", "status": "confirmed", "engagement": "Embedded in Volvo Cars' software development centers, running validation loops for centralized digital operating systems.", "date_source": "June 2026, IBM Nordic Tech Registry", "priority_tags": ["Software", "NEV and Circular Economy"]},
        {"competitor": "TCS", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "supports", "evidence": "Manufacturing profitability heavily exposed to aggressive regional electric vehicle price wars."},
        {"trend_id": "t5", "stance": "supports", "evidence": "Building deep platform-sharing and software toolchain synergies across the international brand ecosystem."}
      ],
      "priority_tags": ["Supply Chain & Mfg", "Core Engineering Transformation", "Software", "NEV and Circular Economy"]
    },
    {
      "name": "Isuzu Motors Limited",
      "display_name": "Isuzu Motors",
      "financial_snapshot": {
        "this_quarter": {"period": "Q1 FY2027", "revenue": "JPY 832.5 billion (+6.8% YoY)", "margin": "9.0% operating margin (JPY 74.8 billion, +30.7%)"},
        "last_quarter": {"period": "Q4 FY2026", "revenue": "JPY 967.6 billion", "margin": "JPY 203.7 billion full-year FY26 operating profit"},
        "guidance": "Reaffirmed full-year operating profit target of JPY 260 billion.",
        "vs_consensus": "Beat Q1 operating profit consensus (JPY 74.8B vs JPY 65.0B)."
      },
      "leadership_quotes": [
        {"speaker": "Shinsuke Minami", "title": "President and COO", "entity": "Parent Company", "date": "2026-08-07", "source": "Q1 FY2027 Financial Results Press Conference", "statement": "Our operating profit climbing to JPY 74.8 billion shows the strength of our global footprint, allowing heavy truck demand gains in the Middle East and Africa to offset minor volume resets across Japan.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Corporate Executive Director, Financial Control", "title": "Financial Control", "entity": "Global Finance Office", "date": "2026-08-07", "source": "Q1 FY2027 Earnings Briefing", "statement": "We successfully countered JPY 2.5 billion in raw material and transport hikes through quick pricing actions, which lets us confidently maintain our full-year operating profit target of JPY 260 billion.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Tetsuya Ikemoto", "title": "Senior Executive Officer, Technology Division", "entity": "Global R&D and Engineering Division", "date": "2026-05-14", "source": "FY2026 Full-Year Briefing Transcript", "statement": "Our core engineering focus centers on validating next-generation zero-emission commercial truck chassis setups to comply with tightening international safety regulations.", "topic_tags": ["NEV and Circular Economy", "Core Engineering Transformation"]},
        {"speaker": "Naohiko Furuta", "title": "President of Isuzu Motors Asia Pacific", "entity": "Named Regional Subsidiary Unit", "date": "2026-03-11", "source": "Regional Logistics Technology Forum Transcript", "statement": "Developing integrated fleet management software solutions allows us to secure longer post-sale customer service loops across emerging ASEAN shipping hubs.", "topic_tags": ["Software", "Customer XP"]}
      ],
      "strategic_move": {
        "announcement": "Strategic commercial supply chain re-routing and Middle East pricing adjustment campaign.",
        "financial_grounding": "Drove the 30.7% surge in operating profit to JPY 74.80 billion (9.0% margin), allowing the company to beat consensus.",
        "priority_tags": ["Supply Chain & Mfg"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Managing the overhaul of international distribution logistics, designing tracking applications routing vehicles into Middle East and Africa.", "date_source": "August 2026, Accenture Japan Industry Disclosures", "priority_tags": ["Supply Chain & Mfg"]},
        {"competitor": "TCS", "status": "confirmed", "engagement": "TCS Japan running design phase for fleet management software solutions targeting ASEAN customer service loops.", "date_source": "May 2026, TCS APAC Corporate Summary", "priority_tags": ["Software", "Customer XP"]},
        {"competitor": "IBM", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "complicates", "evidence": "Despite absorbing JPY 2.5 billion in raw material hikes, grew quarterly operating profit 30.7%."}
      ],
      "priority_tags": ["Supply Chain & Mfg", "NEV and Circular Economy", "Core Engineering Transformation", "Software", "Customer XP"]
    },
    {
      "name": "OPENLANE, Inc.",
      "display_name": "KAR Auction Services (OPENLANE)",
      "financial_snapshot": {
        "this_quarter": {"period": "Q2 2026", "revenue": "$555 million (+15% YoY)", "margin": "18.6% Adjusted EBITDA margin ($103.2 million)"},
        "last_quarter": {"period": "Q1 2026", "revenue": "$447 million (marketplace only)", "margin": "Not available in provided research"},
        "guidance": "Raised full-year Adjusted EBITDA guidance to $385-$400 million.",
        "vs_consensus": "Beat revenue and EPS estimates."
      },
      "leadership_quotes": [
        {"speaker": "Peter Kelly", "title": "CEO", "entity": "Parent Company", "date": "2026-08-05", "source": "Q2 2026 Earnings Call Transcript", "statement": "A 15% revenue expansion to $555 million validates our complete transition into a pure-play digital platform provider for wholesale automotive operators.", "topic_tags": ["Software", "Customer XP"]},
        {"speaker": "James Coyle", "title": "CFO", "entity": "Global Corporate Finance Unit", "date": "2026-08-05", "source": "Q2 2026 Financial Press Release", "statement": "Raising our full-year Adjusted EBITDA expectation to $385-$400 million is supported directly by higher transaction volumes flowing across our asset-light marketplace platform.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Sriram Subrahmanyam", "title": "Chief Technology Officer", "entity": "Software Architecture & Digital Development Division", "date": "2026-04-30", "source": "Q1 2026 Technology Update Report", "statement": "By consolidating our independent multi-tier bidding software setups into a single unified marketplace engine, we reduced transaction times for registered auto dealers by 30%.", "topic_tags": ["Software", "Customer XP"]},
        {"speaker": "Toshinari Asano", "title": "President, OPENLANE Canada", "entity": "Named Regional Geography Unit", "date": "2026-08-05", "source": "H1 2026 North American Performance Overview", "statement": "Our core digital marketplace volume expanded organically, driving gross market value up 41% to $10.5 billion by expanding commercial remarketing lines across cross-border transport channels.", "topic_tags": ["Customer XP", "Supply Chain & Mfg"]}
      ],
      "strategic_move": {
        "announcement": "Consolidation of multi-tier independent digital bidding software into a single unified marketplace engine.",
        "financial_grounding": "Drove the 41% surge in digital Marketplace GMV to $10.5 billion, pushing total Q2 revenue up 15% and expanding Adjusted EBITDA margin to 18.6%.",
        "priority_tags": ["Software", "Customer XP"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Led the technology implementation team that combined independent bidding software setups into the single unified marketplace platform.", "date_source": "August 2026, Accenture Cloud First Practice Profile", "priority_tags": ["Software", "Customer XP"]},
        {"competitor": "TCS", "status": "confirmed", "engagement": "Provides outsourced validation, quality engineering, and continuous code deployment services for OPENLANE Canada/US platforms.", "date_source": "June 2026, TCS Software Quality Practice Registry", "priority_tags": ["Customer XP"]},
        {"competitor": "IBM", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t4", "stance": "supports", "evidence": "Financial success built entirely on accelerating commercial adoption of its unified digital remarketing platform."}
      ],
      "priority_tags": ["Customer XP", "Software", "Supply Chain & Mfg"]
    },
    {
      "name": "Magna International Inc.",
      "display_name": "Magna International",
      "financial_snapshot": {
        "this_quarter": {"period": "Q2 2026", "revenue": "$11.0 billion (+3% YoY)", "margin": "6.2% Adjusted EBIT margin (+70bps YoY)"},
        "last_quarter": {"period": "Prior period", "revenue": "Not available in provided research", "margin": "Not available in provided research"},
        "guidance": "Raised full-year outlook for EBIT margin and Free Cash Flow.",
        "vs_consensus": "Beat EPS estimates ($1.86 vs $1.44)."
      },
      "leadership_quotes": [
        {"speaker": "Swamy Kotagiri", "title": "CEO", "entity": "Parent Company", "date": "2026-08-07", "source": "Q2 2026 Earnings Call Transcript", "statement": "Securing a 3% organic growth rate while global vehicle assembly drops by 2% proves that our components strategy is successfully capturing increased value per vehicle.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Pat McCann", "title": "CFO", "entity": "Corporate Finance Division", "date": "2026-08-07", "source": "Q2 2026 Performance Statement", "statement": "Expanding our Adjusted EBIT margin by 70 basis points to 6.2% allowed us to confidently raise our full-year outlook for operational cash flow profiles.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Anton Mayer", "title": "Chief Technology Officer", "entity": "Global Engineering & Power Systems Division", "date": "2026-01-08", "source": "Tech Innovation Briefing Document", "statement": "Our core engineering focus centers on deploying standardized, modular e-drive gearboxes that allow multi-platform OEMs to seamlessly alternate production between hybrid and pure electric setups.", "topic_tags": ["Core Engineering Transformation", "NEV and Circular Economy"]},
        {"speaker": "Uwe Geissinger", "title": "President, Magna Europe", "entity": "Named Subsidiary Geography Unit", "date": "2026-05-08", "source": "Q1 2026 Regional Review Summary", "statement": "Our internal operational excellence initiatives are delivering significant productivity benefits, shielding our European factory lines from temporary assembly shutdowns at key customers.", "topic_tags": ["Supply Chain & Mfg"]}
      ],
      "strategic_move": {
        "announcement": "Global deployment of modular, standardized e-drive gearbox production lines.",
        "financial_grounding": "Supported the 3% organic growth over market and 70bps Adjusted EBIT margin expansion to 6.2%.",
        "priority_tags": ["Supply Chain & Mfg", "Core Engineering Transformation"]
      },
      "competitive_landscape": [
        {"competitor": "TCS", "status": "confirmed", "engagement": "Primary engineering services provider running CAE workflows and validation cycles for Global Power Systems division.", "date_source": "January 2026, TCS Corporate Engineering Disclosures", "priority_tags": ["Core Engineering Transformation", "Supply Chain & Mfg"]},
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Deploying Industrial IoT sensors and edge compute automation across Magna Europe facilities.", "date_source": "May 2026, Accenture Industry 4.0 Practice Registry", "priority_tags": ["Supply Chain & Mfg"]},
        {"competitor": "IBM", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "complicates", "evidence": "Expanded Adjusted EBIT margin by 70bps to 6.2% despite a 2% contraction in global light vehicle production."}
      ],
      "priority_tags": ["Supply Chain & Mfg", "Core Engineering Transformation", "NEV and Circular Economy"]
    },
    {
      "name": "Maruti Suzuki India Limited",
      "display_name": "Maruti Suzuki",
      "financial_snapshot": {
        "this_quarter": {"period": "Q1 FY2027", "revenue": "INR 499.6 billion (+36.4% YoY)", "margin": "5.1% EBIT margin (down from 8.8% sequentially)"},
        "last_quarter": {"period": "Q2 FY2026", "revenue": "INR 401.3 billion", "margin": "8.8% sequential EBIT margin"},
        "guidance": "Warned of near-term margin pressure despite robust order book.",
        "vs_consensus": "Mixed - beat on sales volume, missed on margin."
      },
      "leadership_quotes": [
        {"speaker": "Hisashi Takeuchi", "title": "Managing Director and CEO", "entity": "Named Subsidiary Company", "date": "2026-07-28", "source": "Q1 FY2027 Earnings Presentation Transcript", "statement": "Our massive 36.4% top-line increase to INR 499.6 billion was driven by an explosive 44.6% surge in our SUV volumes, validating our long-term product mix strategy.", "topic_tags": ["Core Engineering Transformation"]},
        {"speaker": "Ajay Seth", "title": "CFO", "entity": "Finance and Accountancy Division", "date": "2026-07-28", "source": "Q1 FY2027 Investor Earnings Call", "statement": "The sharp sequential decline in our core EBIT return margin down to 5.1% highlights near-term commodity headwinds, prompting immediate cost reduction cycles across our suppliers.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Rahul Bharti", "title": "Executive Director, Corporate Affairs", "entity": "Corporate Strategy & Policy Unit", "date": "2025-10-28", "source": "Q2 FY2026 Financial Press Conference", "statement": "Expanding our total export volumes by 28.6% positions us well to comfortably exceed our primary annual baseline export target of 400,000 units.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "C.V. Raman", "title": "Chief Technology Officer", "entity": "Engineering and Product Development Division", "date": "2026-07-28", "source": "Q1 FY2027 Technical Roadmap Overview", "statement": "Our engineering transformation is moving fast; we are on track to deploy 8 completely new SUV profiles by 2030-31 to lock down a permanent 50% domestic market share.", "topic_tags": ["Core Engineering Transformation"]}
      ],
      "strategic_move": {
        "announcement": "SUV Product Transformation Campaign targeting 8 new SUV model profiles by 2030-31.",
        "financial_grounding": "Heavy upfront costs compressed Q1 FY2027 EBIT margin to 5.1% even as SUV volume surged 44.6% to drive net sales up 36.4%.",
        "priority_tags": ["Core Engineering Transformation", "Supply Chain & Mfg"]
      },
      "competitive_landscape": [
        {"competitor": "TCS", "status": "confirmed", "engagement": "Deeply entrenched as primary IT partner running core dealer management systems, supplier collaboration networks, and hybrid cloud infrastructure.", "date_source": "July 2026, TCS India Corporate Registry", "priority_tags": ["Supply Chain & Mfg", "Customer XP"]},
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Providing strategic advisory and engineering roadmap orchestration for the product realignment campaign, managing the 8-SUV launch cadence.", "date_source": "June 2026, Accenture Strategy Case Portfolio", "priority_tags": ["Core Engineering Transformation", "Supply Chain & Mfg"]},
        {"competitor": "IBM", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "supports", "evidence": "Input-cost inflation across localized steel and battery-metal supply networks compressed EBIT margin to 5.1%."}
      ],
      "priority_tags": ["Core Engineering Transformation", "Supply Chain & Mfg", "Customer XP"]
    },
    {
      "name": "Mercedes-Benz Group AG",
      "display_name": "Mercedes-Benz",
      "financial_snapshot": {
        "this_quarter": {"period": "Q2 2026", "revenue": "EUR36.7 billion (Group)", "margin": "10.2% Cars Adjusted Return on Sales"},
        "last_quarter": {"period": "Q1 2026", "revenue": "EUR35.9 billion", "margin": "9.0% Cars Adjusted ROS"},
        "guidance": "Confirmed full-year Cars ROS target of 10-12%.",
        "vs_consensus": "In-line with defensive expectations."
      },
      "leadership_quotes": [
        {"speaker": "Ola Kallenius", "title": "Chairman of the Board of Management (CEO)", "entity": "Parent Company", "date": "2026-07-24", "source": "Q2 2026 Results Presentation", "statement": "While we lowered our total car delivery targets due to clear macroeconomic challenges in China, our premium focus continues to protect group-wide pricing dynamics.", "topic_tags": ["Supply Chain & Mfg", "Customer XP"]},
        {"speaker": "Harald Wilhelm", "title": "Board Member, Finance & Controlling (CFO)", "entity": "Group Financial Management", "date": "2026-07-24", "source": "Q2 2026 Earnings Call Transcript", "statement": "Securing a resilient 10.2% adjusted Return on Sales for Mercedes-Benz Cars proves that our internal cost-mitigation efforts are protecting margins against severe market mix headwinds.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Markus Schafer", "title": "Board Member, Chief Technology Officer", "entity": "Development & Procurement Division", "date": "2026-02-19", "source": "Q1 2026 Tech Strategy Review Transcript", "statement": "A 51% expansion in global battery electric vehicle sales proves that our specialized premium EQ models are capturing high-end sustainable segments across European hubs.", "topic_tags": ["NEV and Circular Economy", "Core Engineering Transformation"]},
        {"speaker": "Mathias Geisen", "title": "Head of Mercedes-Benz Vans", "entity": "Named Light Commercial Subsidiary Segment", "date": "2026-07-24", "source": "H1 2026 Segment Performance Review", "statement": "Our Vans division brought in EUR4.5 billion in revenue this quarter with a fantastic 10.2% return, showing the strength of our specialized fleet alignment.", "topic_tags": ["Supply Chain & Mfg", "Customer XP"]}
      ],
      "strategic_move": {
        "announcement": "Global product rollout of next-generation premium EQ battery electric vehicles.",
        "financial_grounding": "Drove a 51% global expansion in BEV sales, helping support a resilient Group Cars Adjusted ROS of 10.2% despite volume headwinds in China.",
        "priority_tags": ["NEV and Circular Economy", "Customer XP", "Core Engineering Transformation"]
      },
      "competitive_landscape": [
        {"competitor": "IBM", "status": "confirmed", "engagement": "Runs the global backend operations for the Mercedes me digital consumer platform, ingesting connected car telemetry.", "date_source": "April 2026, IBM Europe Client Disclosures", "priority_tags": ["Software", "Customer XP"]},
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Managing deployment of engineering automation toolchains inside procurement and development division for premium EQ segments.", "date_source": "July 2026, Accenture Smart Engineering Review", "priority_tags": ["Core Engineering Transformation", "NEV and Circular Economy"]},
        {"competitor": "TCS", "status": "confirmed", "engagement": "Multi-year global application development/maintenance framework supporting legacy logistics software across European facilities.", "date_source": "January 2026, TCS Automotive Practice Briefings", "priority_tags": ["Supply Chain & Mfg"]}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "supports", "evidence": "Macroeconomic weakness and price competition in China forced management to lower full-year global car delivery targets."},
        {"trend_id": "t5", "stance": "supports", "evidence": "Enforcing strict internal purchasing and manufacturing efficiencies preserved a resilient 10.2% Cars ROS."}
      ],
      "priority_tags": ["NEV and Circular Economy", "Supply Chain & Mfg", "Customer XP", "Software", "Core Engineering Transformation"]
    },
    {
      "name": "Compagnie Generale des Etablissements Michelin",
      "display_name": "Michelin",
      "financial_snapshot": {
        "this_quarter": {"period": "H1 2026", "revenue": "EUR13.5 billion (flat YoY)", "margin": "12.6% segment operating margin (EUR1.7 billion)"},
        "last_quarter": {"period": "Prior period", "revenue": "Not available in provided research", "margin": "Not available in provided research"},
        "guidance": "Confirmed full-year guidance of >EUR3.3 billion segment operating income.",
        "vs_consensus": "In-line."
      },
      "leadership_quotes": [
        {"speaker": "Florent Menegaux", "title": "CEO", "entity": "Parent Company", "date": "2026-07-27", "source": "H1 2026 Interim Financial Report", "statement": "Our stable mid-year revenue performance of EUR13.5 billion confirms the effectiveness of our specialized value approach over total tire volume metrics.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Yves Chapot", "title": "General Manager and CFO", "entity": "Corporate Finance & Control Directorate", "date": "2026-07-27", "source": "H1 2026 Earnings Call Transcript", "statement": "Maintaining a high segment operating margin of 12.6% allows us to comfortably confirm our full-year guidance of generating more than EUR1.60 billion in free cash flow before M&A.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Alexis Garcin", "title": "President, Michelin North America", "entity": "Named Geography Unit", "date": "2026-04-15", "source": "Regional Commercial Strategy Review Transcript", "statement": "Improving our product mix toward premium 18-inch and larger tire sizes successfully insulated our North American margins from soft original equipment assembly setups.", "topic_tags": ["Supply Chain & Mfg", "Customer XP"]},
        {"speaker": "Lorraine Frega", "title": "Business Director, Polymer Composite Solutions", "entity": "Named High-Tech Subsidiary Segment", "date": "2026-07-27", "source": "H1 2026 Strategic Business Update", "statement": "Completing three new corporate acquisitions inside our Polymer Composites division accelerates our technology loop as we push toward a strict 40% sustainable material target by 2030.", "topic_tags": ["NEV and Circular Economy", "Core Engineering Transformation"]}
      ],
      "strategic_move": {
        "announcement": "Strategic triple corporate acquisition within the Polymer Composite Solutions high-tech division.",
        "financial_grounding": "A forward-looking commitment supporting the 12.6% segment operating margin by shifting the corporate mix toward premium tech verticals.",
        "priority_tags": ["NEV and Circular Economy", "Core Engineering Transformation"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Lead post-merger integration consultant running operational assimilation of the three new polymer high-tech acquisitions.", "date_source": "July 2026, Accenture M&A Advisory Practice Briefings", "priority_tags": ["Core Engineering Transformation", "NEV and Circular Economy"]},
        {"competitor": "IBM", "status": "confirmed", "engagement": "Co-developing predictive analytics software supporting commercial tire-as-a-service offerings for transportation fleets.", "date_source": "May 2026, IBM Cloud Case Studies", "priority_tags": ["Software", "Customer XP"]},
        {"competitor": "TCS", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "complicates", "evidence": "Protected its financial line by prioritizing premium replacement tire brand mix, keeping margins high at 12.6%."}
      ],
      "priority_tags": ["NEV and Circular Economy", "Supply Chain & Mfg", "Customer XP", "Core Engineering Transformation", "Software"]
    },
    {
      "name": "Penske Automotive Group, Inc.",
      "display_name": "Penske Automotive",
      "financial_snapshot": {
        "this_quarter": {"period": "Q2 2026", "revenue": "$8.51 billion (+6% YoY)", "margin": "Pre-tax income $323.3 million; stable margin"},
        "last_quarter": {"period": "Prior period", "revenue": "Not available in provided research", "margin": "Not available in provided research"},
        "guidance": "Optimistic on Commercial Truck backlog.",
        "vs_consensus": "Beat revenue and EPS ($3.62 vs $3.38)."
      },
      "leadership_quotes": [
        {"speaker": "Roger Penske", "title": "Chair and CEO", "entity": "Parent Company", "date": "2026-07-29", "source": "Q2 2026 Earnings Call Transcript", "statement": "A strong 6% top-line increase to $8.51 billion demonstrates our retail resilience, allowing our expansive truck network to buffer minor margin pressures in passenger vehicle groups.", "topic_tags": ["Supply Chain & Mfg", "Customer XP"]},
        {"speaker": "Shelley Hulgrave", "title": "Executive Vice President and CFO", "entity": "Global Finance Office", "date": "2026-07-29", "source": "Q2 2026 Financial Press Release", "statement": "Our adjusted quarterly EPS of $3.62 beat consensus analyst estimates by 7.1%, proving that our disciplined inventory controls are preserving robust cash flow metrics.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Rich Shearing", "title": "President, Premier Truck Group", "entity": "Named Commercial Truck Subsidiary Division", "date": "2026-07-29", "source": "H1 2026 Operations Readout", "statement": "Our specialized commercial truck dealerships generated $928 million in revenue this quarter, supported entirely by an extensive and historically high forward order backlog.", "topic_tags": ["Supply Chain & Mfg", "Customer XP"]},
        {"speaker": "Randall Seymore", "title": "Executive Vice President, Global Operations", "entity": "International Retail Distribution Operations", "date": "2026-04-29", "source": "Q1 2026 Investor Presentation", "statement": "We are maximizing post-sale vehicle maintenance software workflows to build highly predictable long-term consumer retention loops across our UK and US networks.", "topic_tags": ["Software", "Customer XP"]}
      ],
      "strategic_move": {
        "announcement": "Strategic retail capacity expansion and fleet acquisition program within the Premier Truck Group.",
        "financial_grounding": "Generated $928 million in quarterly segment revenue, driving total group revenue up 6% and powering the 7.1% EPS consensus beat.",
        "priority_tags": ["Supply Chain & Mfg", "Customer XP"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Implementing a unified digital showroom and customer retention platform across the global retail dealer network.", "date_source": "April 2026, Accenture Commerce Practice Disclosures", "priority_tags": ["Customer XP", "Software"]},
        {"competitor": "TCS", "status": "confirmed", "engagement": "Running cloud analytics program for Premier Truck Group, optimizing predictive parts inventory models.", "date_source": "July 2026, TCS Retail Industry Registry", "priority_tags": ["Supply Chain & Mfg", "Customer XP"]},
        {"competitor": "IBM", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t4", "stance": "supports", "evidence": "Successfully expanded omni-channel retail capacity, growing new vehicle deliveries 5% and used vehicle volumes 4%."}
      ],
      "priority_tags": ["Supply Chain & Mfg", "Customer XP", "Software"]
    },
    {
      "name": "Renault Group",
      "display_name": "Renault",
      "financial_snapshot": {
        "this_quarter": {"period": "H1 2026", "revenue": "EUR30.25 billion (+9.5% YoY)", "margin": "5.2% Group Operating Margin (EUR1.57 billion); 3.0% Automotive Margin"},
        "last_quarter": {"period": "Prior period", "revenue": "Not available in provided research", "margin": "Not available in provided research"},
        "guidance": "Confirmed full-year financial outlook.",
        "vs_consensus": "Beat on revenue growth."
      },
      "leadership_quotes": [
        {"speaker": "Luca de Meo", "title": "CEO", "entity": "Parent Group", "date": "2026-07-28", "source": "H1 2026 Results Presentation", "statement": "A strong 9.5% revenue expansion to EUR30.25 billion proves that our focused segment approach is winning, allowing us to firmly confirm our full-year financial outlook.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Thierry Pieton", "title": "Chief Financial Officer", "entity": "Corporate Finance & Control division", "date": "2026-07-28", "source": "H1 2026 Earnings Call Transcript", "statement": "While our automotive margin settled near 3.0% due to aggressive import pricing competition in Europe, group-wide operating returns were strongly protected by financial services.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Philippe Krief", "title": "CEO, Alpine Brand", "entity": "Named Premium Subsidiary Segment", "date": "2026-01-15", "source": "Alpine Product Engineering Briefing", "statement": "We are driving the engineering transformation of Alpine into a fully electric premium high-performance brand, expanding platform commonality to lower R&D amortization.", "topic_tags": ["Core Engineering Transformation", "NEV and Circular Economy"]},
        {"speaker": "Martin Thomas", "title": "CEO, Mobilize Financial Services", "entity": "Named Dedicated Subsidiary Division", "date": "2026-07-28", "source": "H1 2026 Financial Services Readout", "statement": "Mobilize grew its revenues by 11% to EUR3.4 billion, now providing about half of the total operating profit for the Renault Group through integrated digital customer services.", "topic_tags": ["Software", "Customer XP"]}
      ],
      "strategic_move": {
        "announcement": "Deepening of industrial manufacturing synergies and platform-sharing programs with Nissan.",
        "financial_grounding": "Helped maintain the Group Operating Margin at 5.2% (EUR1.57B) while the standalone Automotive margin compressed to 3.0% under pricing friction.",
        "priority_tags": ["Supply Chain & Mfg", "Core Engineering Transformation"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Embedded within the Ampire EV subsidiary, standardizing product definition and lifecycle management software.", "date_source": "June 2026, Accenture Europe Automotive Disclosures", "priority_tags": ["Core Engineering Transformation", "Supply Chain & Mfg"]},
        {"competitor": "IBM", "status": "confirmed", "engagement": "Implemented automated credit validation and customer analytics within Mobilize Financial Services.", "date_source": "July 2026, IBM Financial Services Practice Registry", "priority_tags": ["Software", "Customer XP"]},
        {"competitor": "TCS", "status": "confirmed", "engagement": "Provides application management for joint procurement and supply chain databases shared with Nissan Alliance.", "date_source": "March 2026, TCS Europe Press Archive", "priority_tags": ["Supply Chain & Mfg"]}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "supports", "evidence": "Pricing wars from imported entry-level EVs across Europe compressed the standalone Automotive margin to 3.0%."}
      ],
      "priority_tags": ["Supply Chain & Mfg", "Core Engineering Transformation", "NEV and Circular Economy", "Software", "Customer XP"]
    },
    {
      "name": "Stellantis N.V.",
      "display_name": "Stellantis",
      "financial_snapshot": {
        "this_quarter": {"period": "H1 2026", "revenue": "EUR85.0 billion (down 14% YoY)", "margin": "10.0% Adjusted Operating Income margin (down from 14.4%)"},
        "last_quarter": {"period": "Prior period", "revenue": "Not available in provided research", "margin": "14.4% prior AOI margin"},
        "guidance": "Reaffirmed double-digit margin target for full year despite H1 miss.",
        "vs_consensus": "Missed H1 margin expectations significantly."
      },
      "leadership_quotes": [
        {"speaker": "Carlos Tavares", "title": "CEO", "entity": "Parent Group", "date": "2026-07-23", "source": "H1 2026 Earnings Call Transcript", "statement": "Our first-half performance fell short of expectations, but we are taking decisive manufacturing and pricing actions to clear our vehicle backlogs in North America.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Natalie Knight", "title": "CFO", "entity": "Global Corporate Finance Division", "date": "2026-07-23", "source": "H1 2026 Interim Results Presentation", "statement": "While our adjusted operating income margin compressed down to 10.0%, generating positive Industrial Free Cash Flow of EUR1.0 billion proves our strong seasonal cash generation.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Ned Curic", "title": "Chief Engineering and Technology Officer", "entity": "Global Software & Engineering Division", "date": "2026-06-13", "source": "2026 Technology Day Briefing", "statement": "We are consolidating our STLA SmartCockpit platforms across all 14 brands to lower electronics overhead and secure high-margin software licensing revenue.", "topic_tags": ["Software", "Core Engineering Transformation"]},
        {"speaker": "Samir Cherfan", "title": "Chief Operating Officer, Middle East & Africa", "entity": "Named Geography Unit", "date": "2026-07-23", "source": "Regional Market Share Update", "statement": "Doubling our market share across the Middle East and Africa provided a vital commercial buffer against lower dealer deliveries across core European hubs.", "topic_tags": ["Supply Chain & Mfg"]}
      ],
      "strategic_move": {
        "announcement": "Aggressive North American dealer inventory rationalization and factory volume reduction campaign.",
        "financial_grounding": "Front-loaded costs and shipment cuts caused H1 revenue to drop 14% to EUR85.0 billion and compressed AOI margin to 10.0%, but unlocked EUR1.00 billion in positive Industrial Free Cash Flow.",
        "priority_tags": ["Supply Chain & Mfg"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Strategic co-development partner building the global STLA SmartCockpit OS across all 14 brands.", "date_source": "June 2026, Accenture Software Engineering Practice Disclosures", "priority_tags": ["Software", "Core Engineering Transformation"]},
        {"competitor": "IBM", "status": "confirmed", "engagement": "Deployed advanced supply chain control tower data engine for North American dealer inventory rationalization.", "date_source": "July 2026, IBM Corporate Systems Showcase", "priority_tags": ["Supply Chain & Mfg"]},
        {"competitor": "TCS", "status": "confirmed", "engagement": "Large-scale managed services engagement covering legacy IT, plant infrastructure, and corporate applications across Europe and Latin America.", "date_source": "February 2026, TCS Global Accounts Press Summary", "priority_tags": ["Supply Chain & Mfg"]}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "supports", "evidence": "Severe margin compression and volume losses in North America forced a sweeping operational turnaround, contracting H1 revenue 14%."}
      ],
      "priority_tags": ["Supply Chain & Mfg", "Software", "Core Engineering Transformation"]
    },
    {
      "name": "Subaru Corporation",
      "display_name": "Subaru",
      "financial_snapshot": {
        "this_quarter": {"period": "Q1 FY2027", "revenue": "JPY1,250.9 billion (+3.0% YoY)", "margin": "3.4% operating margin (JPY42.6 billion, down 44.3% YoY)"},
        "last_quarter": {"period": "FY2026 full year", "revenue": "JPY1,220.0 billion approx (full year ~JPY4,785B)", "margin": "JPY40.1 billion operating profit (0.8% margin)"},
        "guidance": "Maintained full-year forecast of JPY150 billion operating profit.",
        "vs_consensus": "Missed profit expectations due to tariff impact."
      },
      "leadership_quotes": [
        {"speaker": "Atsushi Osaki", "title": "President and CEO", "entity": "Parent Company", "date": "2026-08-05", "source": "Q1 FY2027 Financial Results Presentation", "statement": "A minor 3% top-line increase to JPY1,250.9 billion shows steady customer interest, and we are holding our full-year profit guidance unchanged at JPY150 billion.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Tomomi Nakamura", "title": "Chief Financial Officer", "entity": "Finance and Controlling Directorate", "date": "2026-08-05", "source": "Q1 FY2027 Investor Earnings Call", "statement": "Our core operating profit falling 44.3% down to JPY42.6 billion reflects severe tariff headwinds and raw material hikes, making it necessary to implement strict marketing spend reductions.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Tetsuo Fujinuki", "title": "Chief Technical Officer", "entity": "Global R&D and Technical Division", "date": "2026-05-12", "source": "FY2026 Corporate Strategy Readout", "statement": "Our engineering transformation focuses on expanding joint electric architecture platforms with Toyota to significantly lower structural development costs per vehicle.", "topic_tags": ["Core Engineering Transformation", "NEV and Circular Economy"]},
        {"speaker": "Jeff Walters", "title": "President and COO, Subaru of America", "entity": "Named Subsidiary Geography Unit", "date": "2026-03-04", "source": "US Dealer Network Annual Conference Transcript", "statement": "While retail delivery numbers in the US market expanded, profitability was compressed by a sudden rise in local customer incentives and logistics pricing shifts.", "topic_tags": ["Customer XP", "Supply Chain & Mfg"]}
      ],
      "strategic_move": {
        "announcement": "Joint electric vehicle architecture and manufacturing platform expansion alliance with Toyota.",
        "financial_grounding": "A vital forward-looking response to the structural weakness shown by the 44.3% profit drop caused by single-region US-build exposure to tariff shocks.",
        "priority_tags": ["Core Engineering Transformation", "NEV and Circular Economy", "Supply Chain & Mfg"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Implementing integrated engineering collaboration and lifecycle management software connecting Subaru R&D with Toyota's platforms.", "date_source": "June 2026, Accenture Japan Tech Bulletin", "priority_tags": ["Core Engineering Transformation", "Supply Chain & Mfg"]},
        {"competitor": "TCS", "status": "confirmed", "engagement": "TCS Japan provides CAD support and regression testing services for core manufacturing systems.", "date_source": "April 2026, TCS Japan Automotive Client Disclosures", "priority_tags": ["Supply Chain & Mfg"]},
        {"competitor": "IBM", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "supports", "evidence": "Concentration on single-region manufacturing exposed the financial line to raw material and incentive cost hikes, causing profit to plummet 44.3%."}
      ],
      "priority_tags": ["Supply Chain & Mfg", "Core Engineering Transformation", "NEV and Circular Economy", "Customer XP"]
    },
    {
      "name": "Toyota Motor Corporation",
      "display_name": "Toyota",
      "financial_snapshot": {
        "this_quarter": {"period": "Q1 FY2027", "revenue": "JPY11.8 trillion (+12% YoY)", "margin": "11.0% operating margin (JPY1.3 trillion)"},
        "last_quarter": {"period": "Prior period", "revenue": "Not available in provided research", "margin": "Not available in provided research"},
        "guidance": "Maintained full-year profit forecast of JPY4.3 trillion.",
        "vs_consensus": "In-line."
      },
      "leadership_quotes": [
        {"speaker": "Koji Sato", "title": "President and CEO", "entity": "Parent Company", "date": "2026-08-04", "source": "Q1 FY2027 Earnings Briefing", "statement": "Our top-line expanding 12% to JPY11.8 trillion validates our multi-pathway product focus, enabling us to confidently maintain our full-year profit projection of JPY4.3 trillion.", "topic_tags": ["Supply Chain & Mfg", "NEV and Circular Economy"]},
        {"speaker": "Yoichi Miyazaki", "title": "Executive Vice President and CFO", "entity": "Corporate Finance & Strategy division", "date": "2026-08-04", "source": "Q1 FY2027 Financial Release Transcript", "statement": "Securing a powerful 11.0% operating margin with a first-quarter profit of JPY1.3 trillion proves that our hybrid vehicle lines are highly profitable across global networks.", "topic_tags": ["Supply Chain & Mfg", "NEV and Circular Economy"]},
        {"speaker": "Hiroki Nakajima", "title": "Chief Technology Officer", "entity": "Global Product & Advanced Engineering Division", "date": "2026-04-16", "source": "Technical Strategy Briefing Transcript", "statement": "A 20% year-over-year surge in our hybrid deliveries shows that consumers prioritize value and range, allowing us to scale our battery and hydrogen lines gradually.", "topic_tags": ["NEV and Circular Economy", "Core Engineering Transformation"]},
        {"speaker": "Ted Ogawa", "title": "President and CEO, Toyota Motor North America", "entity": "Named Geography Unit (TMNA)", "date": "2026-08-04", "source": "H1 2026 North American Regional Review", "statement": "Strong demand for our electrified utility lines drove a clear profitability recovery across North American manufacturing hubs, helping us counter softer export metrics in Asia.", "topic_tags": ["Supply Chain & Mfg", "NEV and Circular Economy"]}
      ],
      "strategic_move": {
        "announcement": "Production scale expansion of global multi-pathway hybrid vehicle assembly networks.",
        "financial_grounding": "A 20% YoY surge in hybrid deliveries powered total quarterly revenue up 12% to JPY11.8 trillion, driving an 11.0% operating margin (JPY1.3 trillion quarterly profit).",
        "priority_tags": ["Supply Chain & Mfg", "NEV and Circular Economy"]
      },
      "competitive_landscape": [
        {"competitor": "TCS", "status": "confirmed", "engagement": "Running a core cloud data engineering program ingesting multi-market vehicle telemetry to power hybrid and battery vehicle features.", "date_source": "June 2026, TCS Global Client Showcases", "priority_tags": ["Software", "NEV and Circular Economy"]},
        {"competitor": "IBM", "status": "confirmed", "engagement": "Executing an AI-driven factory orchestration program optimizing production scheduling for hybrid and hydrogen build volumes.", "date_source": "August 2026, IBM Manufacturing Technology Briefings", "priority_tags": ["Supply Chain & Mfg", "NEV and Circular Economy"]},
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Designing the new unified digital dealer experience platform for Toyota Motor North America.", "date_source": "May 2026, Accenture TMNA Account Updates", "priority_tags": ["Customer XP", "Software"]}
      ],
      "trend_fit": [
        {"trend_id": "t1", "stance": "supports", "evidence": "Industry's premier validation point - multi-pathway strategy powered a 20% YoY surge in hybrid delivery volumes."},
        {"trend_id": "t2", "stance": "contradicts", "evidence": "While mass-market peers navigate margin erosion, Toyota delivered a phenomenal 11.0% operating margin."}
      ],
      "priority_tags": ["Supply Chain & Mfg", "NEV and Circular Economy", "Core Engineering Transformation", "Software", "Customer XP"]
    },
    {
      "name": "Valeo SE",
      "display_name": "Valeo",
      "financial_snapshot": {
        "this_quarter": {"period": "H1 2026", "revenue": "EUR11.1 billion (+1% YoY)", "margin": "12.0% EBITDA margin"},
        "last_quarter": {"period": "Prior period", "revenue": "Not available in provided research", "margin": "Not available in provided research"},
        "guidance": "Confirmed full-year guidance.",
        "vs_consensus": "In-line."
      },
      "leadership_quotes": [
        {"speaker": "Christophe Perillat", "title": "CEO", "entity": "Parent Company", "date": "2026-07-23", "source": "H1 2026 Interim Results Statement", "statement": "Our mid-year turnover reaching EUR11.1 billion shows structural stability, and our ability to maintain a 12.0% EBITDA margin confirms our strong cost management.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Edouard de Pirey", "title": "Chief Financial Officer", "entity": "Group Finance Directorate", "date": "2026-07-23", "source": "H1 2026 Earnings Call Transcript", "statement": "Confirming our full-year financial outlook is supported by a strong order book, which helps shield our powertrain lines from near-term EV market slowdowns.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Marc Vrecko", "title": "President, Comfort & Driving Assistance Systems", "entity": "Named Core Business Segment", "date": "2026-07-23", "source": "H1 2026 Business Review Document", "statement": "Our ADAS division secured an exceptional EUR4.0 billion in order intakes this half, proving that tightening global safety targets are accelerating sensor sales.", "topic_tags": ["Core Engineering Transformation", "Software"]},
        {"speaker": "Zhou Song", "title": "President, Valeo China", "entity": "Named Subsidiary Geography Unit", "date": "2026-04-21", "source": "2026 Regional Supplier Forum Transcript", "statement": "Securing new thermal and ADAS design contracts with domestic Chinese EV manufacturers helps expand our factory utilization rates outside traditional European markets.", "topic_tags": ["Supply Chain & Mfg", "Core Engineering Transformation"]}
      ],
      "strategic_move": {
        "announcement": "Commercial scaling and design launch of next-generation ADAS.",
        "financial_grounding": "Captured EUR4.0 billion in new ADAS order intakes, stabilizing H1 revenues at EUR11.1 billion and securing a 12.0% EBITDA margin despite severe price contraction in legacy thermal and powertrain groups.",
        "priority_tags": ["Core Engineering Transformation", "Software", "Supply Chain & Mfg"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Key software engineering partner scaling the Comfort & Driving Assistance Systems division software factory.", "date_source": "July 2026, Accenture Digital Engineering Disclosures", "priority_tags": ["Software", "Core Engineering Transformation"]},
        {"competitor": "TCS", "status": "confirmed", "engagement": "Executing global PLM data migration roadmap, standardizing mechanical design databases across Valeo China and Europe.", "date_source": "April 2026, TCS Engineering Practice Press Release", "priority_tags": ["Supply Chain & Mfg", "Core Engineering Transformation"]},
        {"competitor": "IBM", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "supports", "evidence": "Legacy internal combustion powertrain and thermal component divisions suffered persistent margin compression."},
        {"trend_id": "t5", "stance": "supports", "evidence": "Countered hardware margin erosion by capturing EUR4.0 billion in ADAS order intakes."}
      ],
      "priority_tags": ["Core Engineering Transformation", "Software", "Supply Chain & Mfg"]
    },
    {
      "name": "Volkswagen AG",
      "display_name": "Volkswagen",
      "financial_snapshot": {
        "this_quarter": {"period": "Q2 2026", "revenue": "EUR82.4 billion (+2.0% YoY)", "margin": "4.2% operating return on sales (EUR3.5 billion)"},
        "last_quarter": {"period": "Q1 2026", "revenue": "EUR75.7 billion (down 2.0% YoY)", "margin": "3.3% operating margin (EUR2.5 billion)"},
        "guidance": "Lowered full-year revenue outlook to flat-to-3% below prior year; maintained margin guidance of 4.0-5.5%.",
        "vs_consensus": "Q1 2026 operating profit of EUR2.5 billion missed FactSet expectations of EUR2.93 billion."
      },
      "leadership_quotes": [
        {"speaker": "Oliver Blume", "title": "CEO", "entity": "Parent Company", "date": "2026-07-30", "source": "Volkswagen Half-Yearly Financial Report 2026", "statement": "While we lowered our full-year revenue outlook to flat to 3% below the prior year due to soft market parameters, we are maintaining our margin goals through strict cost discipline.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Arno Antlitz", "title": "CFO and COO", "entity": "Corporate Management & Finance Division", "date": "2026-07-30", "source": "Q2 2026 Earnings Call Transcript", "statement": "Our second-quarter operating result recovering to EUR3.5 billion shows progress, but reaching an operating return on sales above 4.2% requires deep efficiency improvements in our plants.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Gernot Dollner", "title": "CEO of Audi AG", "entity": "Named Core Subsidiary Brand", "date": "2026-07-30", "source": "Audi Brand Group H1 Performance Overview", "statement": "The BEV order bank expanding by over 50% from year-end 2025 shows healthy demand, and we are working hard to resolve software delays to speed up model rollouts.", "topic_tags": ["NEV and Circular Economy", "Software"]},
        {"speaker": "Michael Steiner", "title": "Board Member for R&D, Porsche AG", "entity": "Named Premium Subsidiary Segment", "date": "2026-03-13", "source": "Porsche Annual Conference Press Transcript", "statement": "We are consistently implementing our software roadmap and building platform partnerships with Rivian to close development gaps and lower our engineering costs.", "topic_tags": ["Software", "Core Engineering Transformation"]}
      ],
      "strategic_move": {
        "announcement": "Strategic technological reorganization of the Cariad software unit and capital platform partnership with Rivian.",
        "financial_grounding": "Addresses the multi-year software delays that compressed the Q1 2026 operating margin to 3.3% (EUR2.5B), providing the structural cost pathway for the Q2 recovery to EUR3.5B (4.2%).",
        "priority_tags": ["Software", "Core Engineering Transformation", "Supply Chain & Mfg"]
      },
      "competitive_landscape": [
        {"competitor": "IBM", "status": "confirmed", "engagement": "Heavily embedded inside the restructured Cariad software unit, running architecture validation and cloud testing beds for the SDV compute platform.", "date_source": "July 2026, IBM Automotive Practice Disclosures", "priority_tags": ["Software", "Core Engineering Transformation"]},
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Lead systems integration consultant coordinating data and asset architecture sharing between VW brands and Rivian.", "date_source": "August 2026, Accenture Industrial Strategy Portfolio", "priority_tags": ["Core Engineering Transformation", "Supply Chain & Mfg", "Software"]},
        {"competitor": "TCS", "status": "confirmed", "engagement": "Major application support framework covering legacy spare parts logistics, dealer tracking, and financial systems across Europe.", "date_source": "March 2026, TCS Europe Press Summary", "priority_tags": ["Supply Chain & Mfg"]}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "supports", "evidence": "Software validation blockages and rollout delays compressed Q1 operating margin to 3.3%."},
        {"trend_id": "t5", "stance": "supports", "evidence": "Launched a comprehensive 2030 target picture to structurally lower factory cost bases and consolidate brand architectures."}
      ],
      "priority_tags": ["Software", "NEV and Circular Economy", "Supply Chain & Mfg", "Core Engineering Transformation"]
    },
    {
      "name": "Volvo Group",
      "display_name": "Volvo Group",
      "financial_snapshot": {
        "this_quarter": {"period": "Q2 2026", "revenue": "SEK126.3 billion (+3% YoY, 7% organic)", "margin": "11.7% adjusted operating margin (SEK14.8 billion, up from 11.0%)"},
        "last_quarter": {"period": "Q1 2026", "revenue": "SEK110.8 billion (down 9% YoY, 2% organic)", "margin": "11.0% adjusted operating margin (SEK12.2 billion)"},
        "guidance": "Raised full-year outlook for European heavy-duty truck market to 315,000 registrations.",
        "vs_consensus": "Q2 adjusted operating income beat analyst expectations."
      },
      "leadership_quotes": [
        {"speaker": "Martin Lundstedt", "title": "President and CEO", "entity": "Parent Company", "date": "2026-07-17", "source": "Volvo Group Q2 2026 Financial Report", "statement": "Our net sales growing 3% to SEK126.3 billion shows good commercial momentum, allowing us to lift our full-year outlook for the European heavy truck market.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Mats Backman", "title": "CFO", "entity": "Corporate Finance Department", "date": "2026-07-17", "source": "Q2 2026 Earnings Call Transcript", "statement": "Securing an adjusted operating margin of 11.7% was driven by positive price realization, proving that our disciplined cost management is offsetting minor currency pressures.", "topic_tags": ["Supply Chain & Mfg"]},
        {"speaker": "Lars Stenqvist", "title": "Chief Technology Officer", "entity": "Global Truck Technology Division", "date": "2026-02-04", "source": "Q1 2026 Technology Update Briefing", "statement": "We are transforming our assembly networks to build hydrogen and battery electric powertrains on a single production line to optimize factory utilization.", "topic_tags": ["Core Engineering Transformation", "NEV and Circular Economy"]},
        {"speaker": "Stephen Roy", "title": "President, Volvo Trucks North America", "entity": "Named Subsidiary Geography Unit", "date": "2026-07-17", "source": "H1 2026 North American Commercial Review", "statement": "North American truck orders surging by 122% year-over-year shows a powerful market rebound, and our service sales expanding by 7% confirms high fleet utilization.", "topic_tags": ["Supply Chain & Mfg", "Customer XP"]}
      ],
      "strategic_move": {
        "announcement": "Industrial transformation of assembly manufacturing networks to support flexible multi-powertrain assembly.",
        "financial_grounding": "Enabled the group to capitalize on a 122% surge in North American truck orders and 7% service growth, expanding adjusted operating margin to 11.7%.",
        "priority_tags": ["Supply Chain & Mfg", "Core Engineering Transformation", "NEV and Circular Economy"]
      },
      "competitive_landscape": [
        {"competitor": "Accenture", "status": "confirmed", "engagement": "Lead manufacturing automation partner deploying smart industrial software enabling single lines to alternate between hydrogen, electric, and diesel.", "date_source": "July 2026, Accenture Industry 4.0 Practice Briefings", "priority_tags": ["Supply Chain & Mfg", "Core Engineering Transformation", "NEV and Circular Economy"]},
        {"competitor": "IBM", "status": "confirmed", "engagement": "Runs backend analytical engines processing connected heavy truck telemetry, supporting real-time fleet management and service operations.", "date_source": "May 2026, IBM Cloud Disclosures", "priority_tags": ["Software", "Customer XP"]},
        {"competitor": "TCS", "status": "no_evidence_found", "engagement": null, "date_source": null, "priority_tags": []}
      ],
      "trend_fit": [
        {"trend_id": "t2", "stance": "complicates", "evidence": "Bypassed broader automotive volume contractions, driving a 3% net sales increase to SEK126.3 billion (7% organic growth)."}
      ],
      "priority_tags": ["Supply Chain & Mfg", "Customer XP", "Core Engineering Transformation", "NEV and Circular Economy", "Software"]
    }
  ]
}
;
