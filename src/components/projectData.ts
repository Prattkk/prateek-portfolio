export interface ProjectDetail {
  id: string;
  name: string;
  category: string;
  tools: string;
  image: string;
  github: string;
  prototype?: string;
  medium?: string;
  tags: string[];
  businessProblem: string;
  whatIDid: string[];
  toolsAndTech: string;
  keyInsights: string[];
  outcome: string;
}

const projectData: ProjectDetail[] = [
  {
    id: "magelli-scout",
    name: "Magelli Scout",
    category: "Agentic AI / GenAI",
    tools: "Microsoft Copilot Studio, Power BI, Power Automate, LLM, Prompt Engineering",
    image: `${import.meta.env.BASE_URL}images/projects/magelli-scout.svg`,
    github: "https://github.com/Prattkk/magelli-scout",
    tags: ["🏆 1st Place — Gies AI Buildathon 2026", "Multi-Agent AI", "GenAI", "Power BI", "Copilot Studio"],
    businessProblem:
      "Consultants waste hours manually screening job postings with no systematic way to evaluate fit against their capability profile. Existing tools match keywords, not capabilities.",
    whatIDid: [
      "Built a 4-agent AI system on Microsoft Copilot Studio using capability gap inversion methodology",
      "Agent 1 scrapes and parses job postings, Agent 2 scores capability gaps, Agent 3 updates Power BI dashboard, Agent 4 sends Power Automate weekly briefs",
      "Designed and deployed live Power BI dashboard surfacing top-fit opportunities automatically",
      "Won 1st Place in the Business Technology Track at Gies AI for Impact Challenge Buildathon 2026",
    ],
    toolsAndTech:
      "Microsoft Copilot Studio · Power BI · Power Automate · Generative AI · LLM · Prompt Engineering · Multi-Agent Orchestration",
    keyInsights: [
      "Capability gap inversion outperforms keyword matching for job-candidate fit scoring",
      "Multi-agent orchestration reduced manual screening time to near zero",
      "Power Automate weekly briefs drove consistent engagement without manual triggers",
    ],
    outcome:
      "🥇 1st Place — Business Technology Track, Gies AI for Impact Challenge Buildathon 2026. Built and deployed a production multi-agent AI hiring tool in 24 hours.",
  },
  {
    id: "project-nexus",
    name: "Project Nexus",
    category: "Business Strategy / Financial Modeling",
    tools: "Financial Modeling, Go-To-Market Strategy, Operations Planning, Market Research",
    image: `${import.meta.env.BASE_URL}images/projects/project-nexus.svg`,
    github: "https://github.com/Prattkk/project-nexus",
    tags: ["🏆 1st Place — Gies Case Competition 2026", "Go-To-Market", "Financial Modeling", "Drone Delivery", "Walmart"],
    businessProblem:
      "Walmart needed a viable smart commerce go-to-market strategy for drone delivery in suburban markets — balancing CapEx constraints, regulatory hurdles, and customer adoption curves.",
    whatIDid: [
      "Designed a full-scale drone delivery go-to-market strategy for Walmart featuring an 86-drone fleet",
      "Built a complete financial model: $13.7M Year 1 revenue, $5.28M CapEx (Path B, 5% household penetration)",
      "Led as CMO, CTO, COO, and CFO — covering market analysis, operations, finance, and risk",
      "Modeled 779 daily orders across suburban delivery zones with FAA Part 107 compliance framework",
      "Won 1st Place competing against interdisciplinary teams across Gies College of Business",
    ],
    toolsAndTech:
      "Financial Modeling · Revenue Modeling · CapEx Analysis · Go-To-Market Strategy · Operations Planning · Market Research · Risk Assessment · Executive Presentation",
    keyInsights: [
      "Path B (5% household penetration) delivers positive unit economics by Month 18",
      "FAA regulatory compliance is the critical path constraint, not technology readiness",
      "Digital-first customer acquisition outperforms traditional retail channel adoption",
    ],
    outcome:
      "🥇 1st Place — Gies Interdisciplinary Case Competition, April 25 2026. Delivered a board-ready go-to-market strategy with full financial model and operational roadmap.",
  },
  {
    id: "second-opinion",
    name: "Second Opinion",
    category: "Healthcare AI / Startup",
    tools: "LLM, OCR, NLP, Python, GenAI",
    image: `${import.meta.env.BASE_URL}images/projects/second-opinion.svg`,
    github: "https://github.com/Prattkk/second-opinion-healthcare-ai",
    tags: ["Top 8 — Big Ten Venture Competition", "Healthcare AI", "LLM", "OCR", "Startup"],
    businessProblem:
      "53 million Americans manage complex health administration across multiple providers. Fragmented medical records — scanned PDFs, discharge summaries, prescription photos — make it impossible for patients to walk into appointments prepared.",
    whatIDid: [
      "Co-founded Second Opinion with Suyash Sawant for the COZAD New Venture Competition 2026 at UIUC",
      "Built a patient-facing platform converting fragmented medical records into doctor-ready clinical timelines using OCR and LLM technology",
      "Conducted physician discovery interviews and competitive landscape research (Mere Medical, Citizen, Apple Health)",
      "Performed regulatory feasibility assessment (HIPAA, HITECH, 21st Century Cures Act, HTI-1)",
      "Placed Top 8 at a Big Ten venture competition",
    ],
    toolsAndTech:
      "Large Language Models (LLM) · OCR · Natural Language Processing · Python · Generative AI · Healthcare Analytics · Regulatory Compliance · Venture Strategy",
    keyInsights: [
      "Patients carrying paper records to appointments is the norm, not the exception",
      "FHIR-only solutions exclude non-digital records — our differentiator",
      "Physician workflow integration is the #1 adoption barrier",
    ],
    outcome:
      "Top 8 finish at Big Ten Venture Competition 2026. HIPAA, HITECH, and 21st Century Cures Act compliant architecture. Accepted into COZAD New Venture Competition at UIUC.",
  },
  {
    id: "short-alpha",
    name: "Short-Alpha Intelligence Pod",
    category: "Fintech / Multi-Agent AI",
    tools: "Python, NLP, VADER, NewsAPI, Multi-Agent AI, Statistical Modeling",
    image: `${import.meta.env.BASE_URL}images/projects/short-alpha.svg`,
    github: "https://github.com/Prattkk/short-alpha-intelligence-pod",
    tags: ["Multi-Agent AI", "Fintech", "NLP", "Short Squeeze Detection", "Python"],
    businessProblem:
      "Retail investors lack systematic tools to detect short squeeze setups before institutional momentum builds. Manual screening across news, sentiment, and short interest data is too slow and inconsistent.",
    whatIDid: [
      "Built a 4-agent AI system detecting short squeeze candidates across AFRM, SQ, PYPL, SHOP, and TSLA",
      "Agent 1: institutional news ingestion via NewsAPI, Agent 2: VADER retail sentiment scoring, Agent 3: short interest analytics, Agent 4: composite signal generation",
      "Validated composite Noise Score (0.4×News + 0.6×Retail) against 48-hour crowded score changes via Pearson correlation",
      "Generated a 1,095-day synthetic stress-test dataset achieving 77.9/100 Fidelity Score",
      "Found statistically significant predictive power for 3 of 5 tickers (AFRM p=0.002, PYPL p<0.001, TSLA p<0.001)",
    ],
    toolsAndTech:
      "Python · Multi-Agent AI · VADER Sentiment Analysis · NewsAPI · Statistical Modeling · Pearson Correlation · Quantitative Finance · Data Engineering",
    keyInsights: [
      "Retail sentiment (0.6 weight) outperforms institutional news (0.4) in short squeeze prediction",
      "77.9/100 Fidelity Score validated across 1,095-day synthetic dataset",
      "TSLA and PYPL showed strongest signal consistency across market regimes",
    ],
    outcome:
      "77.9/100 Fidelity Score. Statistically significant predictive power for 3 of 5 tickers. Production-ready 4-agent architecture for real-time short squeeze detection.",
  },
  {
    id: "urbanfleet",
    name: "UrbanFleet AWS Pipeline",
    category: "Data Engineering / Cloud",
    tools: "AWS Kinesis, Lambda, S3, Glue, Athena, Step Functions, Python",
    image: `${import.meta.env.BASE_URL}images/projects/urbanfleet.svg`,
    github: "https://github.com/Prattkk/urbanfleet-aws-pipeline",
    tags: ["AWS", "Real-Time Pipeline", "Data Engineering", "ETL", "Cloud Architecture"],
    businessProblem:
      "Urban logistics companies lack real-time visibility into fleet operations. Batch processing creates 15-30 minute data delays that make live route optimization impossible.",
    whatIDid: [
      "Designed and built a 4-phase real-time fleet tracking pipeline on AWS cloud-native services",
      "Phase 1: AWS Kinesis Data Streams for real-time event ingestion from fleet vehicles",
      "Phase 2: AWS Lambda for serverless event transformation and routing",
      "Phase 3: Amazon S3 data lake for scalable raw and processed event storage",
      "Phase 4: AWS Glue + Athena + Step Functions for ETL, SQL querying, and orchestration",
    ],
    toolsAndTech:
      "AWS Kinesis · AWS Lambda · Amazon S3 · AWS Glue · Amazon Athena · AWS Step Functions · Python · ETL · Real-Time Analytics · Cloud Architecture",
    keyInsights: [
      "Kinesis sharding enables horizontal scaling without pipeline redesign",
      "Lambda cold start latency is the primary SLA risk — mitigated via provisioned concurrency",
      "Athena partitioning by date and vehicle ID reduced query costs by estimated 60%",
    ],
    outcome:
      "Production-ready 4-phase real-time fleet tracking architecture. End-to-end cloud-native pipeline from event ingestion to SQL analytics on S3 data lake.",
  },
  {
    id: "spotify-barcelona",
    name: "Spotify × FC Barcelona Sentiment Analysis",
    category: "Marketing Analytics / NLP",
    tools: "Python, RoBERTa, HuggingFace, CRSP, Google Trends, Pandas, Seaborn",
    image: `${import.meta.env.BASE_URL}images/projects/spotify-barcelona.svg`,
    github: "https://github.com/Prattkk/spotify-barcelona-sentiment-analysis",
    medium: "https://medium.com/@vermaprateek1109/when-spotify-bought-a-football-clubs-soul-was-it-worth-it-31272e4820a4",
    tags: ["NLP", "RoBERTa", "Marketing Analytics", "Sentiment Analysis", "Published on Medium"],
    businessProblem:
      "Brand partnerships worth hundreds of millions are evaluated using surveys and media impressions. What does organic fan sentiment on Reddit actually tell us about the Spotify × FC Barcelona deal's effectiveness?",
    whatIDid: [
      "Analyzed 289 Reddit comments from 226 unique authors across r/Barca, r/soccer, r/football using RoBERTa transformer model trained on 58M tweets",
      "Ran event study using CRSP/WRDS stock data to measure Spotify's cumulative abnormal returns around the March 2022 announcement",
      "Tracked Spotify MAU and premium subscriber growth across 12 quarters pre and post deal",
      "Mapped global search interest using Google Trends with corrected post-announcement date range",
      "Published full findings on Medium — 7 min read, data-driven narrative",
    ],
    toolsAndTech:
      "Python · RoBERTa (cardiffnlp/twitter-roberta-base-sentiment) · VADER · HuggingFace Transformers · CRSP/WRDS · Google Trends · Arctic Shift Reddit API · Pandas · Matplotlib · Seaborn · Event Study Methodology",
    keyInsights: [
      "Stadium renaming net sentiment: −70.8% — fans rejected Camp Nou rename hard",
      "Deal announcement net sentiment: +1.4% — fans tolerated the partnership itself",
      "Spotify cumulative abnormal return: +4.15% vs S&P 500 post-announcement",
      "Spain ranked #1 globally for search interest — US scored just 5/100",
      "MAU quarterly growth accelerated from 4.36% to 5.27% post-deal",
    ],
    outcome:
      "Published on Medium. Delivered 5 actionable brand insights. Demonstrated RoBERTa outperforms VADER by ~18% on domain-specific sports/brand sentiment classification.",
  },
  {
    id: "yelp-analytics",
    name: "Yelp Restaurant Location Analytics",
    category: "Business Analytics / SQL",
    tools: "SQL, Azure SQL, Python, Marimo, Geospatial Analysis",
    image: `${import.meta.env.BASE_URL}images/projects/yelp-analytics.svg`,
    github: "https://github.com/Prattkk/yelp-azure-sql-restaurant-analytics",
    tags: ["SQL", "Azure SQL", "Python", "Geospatial Analysis", "Market Research"],
    businessProblem:
      "Restaurant entrepreneurs lack data-driven tools to identify optimal locations. Gut-feel site selection leads to high failure rates in competitive urban markets.",
    whatIDid: [
      "Built an end-to-end analytics pipeline transforming 150K+ Yelp JSON records into a normalized Azure SQL relational database",
      "Designed database schemas with primary and foreign keys to ensure data integrity and scalable querying",
      "Developed decision-driven SQL queries analyzing restaurant density, customer demand, and competitive saturation",
      "Built interactive Python-only Marimo app for visual exploration of location insights",
      "Identified high-demand, low-competition zones to support data-backed restaurant concept strategy",
    ],
    toolsAndTech:
      "SQL · Azure SQL Database · Python · Marimo · Geospatial Analysis · Market Research · Database Design · ETL · Data Modeling",
    keyInsights: [
      "High ratings alone don't predict success — location density and category saturation matter more",
      "Marimo enables Python-only interactive apps without JavaScript or frontend frameworks",
      "Azure SQL partitioning reduced query time on 150K+ records by over 40%",
    ],
    outcome:
      "End-to-end analytics pipeline processing 150K+ records. Identified top 5 high-opportunity restaurant location zones with supporting data framework.",
  },
  {
    id: "wolters-kluwer",
    name: "Wolters Kluwer AI Workflow",
    category: "GenAI / Legal Tech",
    tools: "NLP, RAG, LLM, Python, GenAI",
    image: `${import.meta.env.BASE_URL}images/projects/wolters-kluwer.svg`,
    github: "https://github.com/Prattkk/wolters-kluwer-answerconnect-ai",
    prototype: "https://peaceful-valkyrie-7f0fbb.netlify.app/",
    tags: ["GenAI", "RAG", "NLP", "Legal Tech", "LLM"],
    businessProblem:
      "Legal research professionals using Wolters Kluwer AnswerConnect spend excessive time manually retrieving and synthesizing case law. Keyword search returns too many irrelevant results.",
    whatIDid: [
      "Built an AI-powered research and drafting workflow prototype for Wolters Kluwer CCH AnswerConnect",
      "Implemented NLP and Retrieval-Augmented Generation (RAG) pipeline for intelligent legal document retrieval",
      "Designed LLM-powered summarization layer converting raw case law into structured research briefs",
      "Delivered client-facing recommendations combining technical depth with business strategy",
      "Completed as MSBA client practicum in collaboration with Wolters Kluwer (Aug–Dec 2025)",
    ],
    toolsAndTech:
      "Natural Language Processing · Retrieval-Augmented Generation (RAG) · Large Language Models · Python · GenAI · Legal Tech · Prompt Engineering",
    keyInsights: [
      "RAG dramatically outperforms keyword search for legal document relevance",
      "Structured output formatting is critical for attorney workflow integration",
      "Chunking strategy (paragraph vs sentence level) significantly impacts retrieval quality",
    ],
    outcome:
      "Delivered production-ready AI workflow prototype to Wolters Kluwer. Demonstrated measurable improvement in research retrieval relevance over baseline keyword search.",
  },
  {
    id: "football-transfer",
    name: "European Football Transfer BI",
    category: "Business Intelligence / ML",
    tools: "Tableau, DAX, Machine Learning, Python, Data Visualization",
    image: `${import.meta.env.BASE_URL}images/projects/football-transfer.svg`,
    github: "https://github.com/Prattkk/European-Football-Transfer-BI",
    tags: ["Tableau", "DAX", "Machine Learning", "Business Intelligence", "Sports Analytics"],
    businessProblem:
      "Football clubs and agents lack data-driven tools to assess fair market value for player transfers. Decisions worth tens of millions are made on intuition and incomplete market data.",
    whatIDid: [
      "Built an end-to-end BI solution analyzing European football transfer patterns across top leagues",
      "Applied machine learning to predict transfer fees based on player attributes, league dynamics, and historical market trends",
      "Built interactive Tableau dashboards for league-level spending analysis and player valuation modeling",
      "Combined statistical analysis with domain storytelling to make complex transfer economics accessible",
    ],
    toolsAndTech:
      "Tableau · DAX (Data Analysis Expressions) · Machine Learning · Python · Predictive Modeling · Data Visualization · Business Intelligence · Statistical Analysis · Sports Analytics",
    keyInsights: [
      "Age and league of origin are stronger transfer fee predictors than current season performance",
      "Premier League clubs pay a consistent 30-40% premium over Bundesliga for equivalent players",
      "Tableau story points outperform static dashboards for executive transfer market briefings",
    ],
    outcome:
      "End-to-end BI solution covering transfer market analytics across top 5 European leagues. ML model predicting transfer fees with interpretable feature importance.",
  },
];

export default projectData;
