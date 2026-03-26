export interface ProjectDetail {
  id: string;
  name: string;
  category: string;
  tools: string;
  image: string;
  github: string;
  prototype?: string;
  tags: string[];
  businessProblem: string;
  whatIDid: string[];
  toolsAndTech: string;
  keyInsights: string[];
  outcome: string;
}

const projectData: ProjectDetail[] = [
  {
    id: "second-opinion",
    name: "Second Opinion",
    category: "AI Healthcare Platform",
    tools: "GenAI, NLP, Python, Clinical Data",
    image: "/images/projects/second-opinion.svg",
    github: "https://github.com/Prattkk/second-opinion-healthcare-ai",
    tags: ["GenAI", "NLP", "Python", "Healthcare", "OCR"],
    businessProblem:
      "Patients with chronic or complex conditions navigate years of fragmented medical history — scattered across hospital portals, PDFs, discharge papers, and prescription printouts. Research spanning 2,100+ studies revealed that medical interoperability remains healthcare's persistent failure, affecting 53 million Americans managing multiple providers. There is no simple, patient-controlled tool that consolidates all medical documents into a single, doctor-ready summary.",
    whatIDid: [
      "Co-founded an AI tool for the COZAD New Venture Competition 2026 at UIUC that converts fragmented medical documents into structured clinical summaries",
      "Designed a 4-step workflow: patients upload documents (PDFs, scans, photos) → OCR extracts text → AI structures data chronologically → produces a clean one-page summary",
      "Conducted 10+ physician interviews to validate the clinical need and refine the output format",
      "Performed competitive analysis against MyChart, Mere Medical, and Ciitizen — identified key gaps in speed, cost, and accessibility",
      "Assessed regulatory positioning under HIPAA, 21st Century Cures Act, and HTI-5 guidelines",
      "Reduced chart review time by 40% compared to manual consolidation methods",
    ],
    toolsAndTech:
      "Tesseract / Cloud Vision API · GPT-4 / Claude · Python · React / Next.js (planned) · OCR Pipeline · Clinical NLP",
    keyInsights: [
      "Existing solutions require hospital portal access or FHIR connections — Second Opinion works with paper documents instantly",
      "53 million Americans manage care across multiple providers with no unified record",
      "Patient-controlled software operates outside HIPAA coverage requirements, reducing regulatory barriers",
      "Physicians spend significant time reconstructing patient history that could be automated",
    ],
    outcome:
      "Built a working prototype that transforms raw medical documents into actionable clinical summaries, reducing chart review time by 40%. Selected for the COZAD New Venture Competition at UIUC, demonstrating market viability for a patient-controlled health data solution.",
  },
  {
    id: "short-alpha",
    name: "Short-Alpha Intelligence Pod",
    category: "Multi-Agent Trading System",
    tools: "Python, NewsAPI, NLP, Multi-Agent Architecture",
    image: "/images/projects/short-alpha.svg",
    github: "https://github.com/Prattkk/short-alpha-intelligence-pod",
    tags: ["Python", "NLP", "NewsAPI", "Multi-Agent", "Finance"],
    businessProblem:
      "Identifying short squeeze opportunities in real-time requires synthesizing multiple data streams — news sentiment, short interest metrics, and price momentum — that are typically siloed. Manual monitoring of these signals across multiple tickers is time-consuming and prone to cognitive bias. Traders need an automated, multi-signal intelligence system that can rank squeeze candidates objectively.",
    whatIDid: [
      "Engineered a 4-agent intelligence architecture: News Scraper → Sentiment Analyst → Short Interest Agent → Signal Aggregator",
      "Built real-time news ingestion pipeline with keyword filtering via NewsAPI across 5 equities (AFRM, SQ, PYPL, SHOP, TSLA)",
      "Implemented a dual-model NLP sentiment pipeline combining VADER (rule-based) and TextBlob (lexicon-based) for composite scoring",
      "Integrated short interest data including short float percentage and days-to-cover metrics via yfinance",
      "Created a configurable signal weighting system with squeeze score leaderboard and alert thresholds",
      "Built visualization dashboards using Matplotlib and Plotly for signal monitoring",
    ],
    toolsAndTech:
      "Python 3.10 · NewsAPI · Pandas · NumPy · VADER · TextBlob · yfinance · Matplotlib · Plotly · python-dotenv",
    keyInsights: [
      "Multi-agent architecture enables independent testing and modular signal refinement",
      "Combining rule-based (VADER) and lexicon-based (TextBlob) NLP provides more robust sentiment scoring",
      "Signal fusion across news, short interest, and momentum outperforms any single indicator",
      "Data freshness is critical — stale signals in volatile markets produce misleading scores",
    ],
    outcome:
      "Delivered a fully functional multi-agent system that autonomously monitors, analyzes, and ranks short squeeze candidates across 5 tickers. The modular design allows independent agent testing and configurable signal weights, providing a foundation for real-time trading intelligence.",
  },
  {
    id: "yelp-analytics",
    name: "Yelp Restaurant Analytics",
    category: "Data Engineering & Azure SQL",
    tools: "Azure SQL, Python, Marimo, JSON Pipelines",
    image: "/images/projects/yelp-analytics.svg",
    github: "https://github.com/Prattkk/yelp-azure-sql-restaurant-analytics",
    tags: ["Azure SQL", "Python", "Marimo", "Data Modeling", "Geospatial"],
    businessProblem:
      "Choosing the right restaurant location and concept is a high-risk business decision. Entrepreneurs often lack consolidated insights on customer demand, competition, pricing, and ratings across locations. This project uses the Yelp Open Dataset to answer: Where should a restaurant be opened? What type of cuisine has strong demand but low competition? What pricing strategy aligns with customer expectations?",
    whatIDid: [
      "Ingested and explored semi-structured Yelp JSON data covering businesses, reviews, users, check-ins, and tips",
      "Designed and implemented a relational schema in Azure SQL with primary keys, foreign keys, and constraints for data integrity",
      "Wrote 10+ decision-driven SQL queries analyzing restaurant density by location, cuisine performance across price tiers, rating correlations, and competitive saturation",
      "Built an interactive Marimo app for dynamic filtering by city and cuisine category with real-time insight recalculation",
      "Used Python for data validation, transformation, and supporting analysis",
    ],
    toolsAndTech:
      "SQL (Azure SQL) · Python · Azure · Data Modeling · KNIME · Jupyter Notebook · Marimo · JSON Processing",
    keyInsights: [
      "Identified high-demand, low-competition areas suitable for new restaurant launches",
      "Found cuisine categories with strong customer ratings but limited supply — prime market entry opportunities",
      "Highlighted pricing ranges that correlate with higher customer satisfaction",
      "Revealed locations where competition was saturated despite high review volumes",
    ],
    outcome:
      "Delivered an end-to-end analytics workflow that transforms raw Yelp data into actionable recommendations for restaurant location and concept strategy, enabling more informed and lower-risk business decisions.",
  },
  {
    id: "wolters-kluwer",
    name: "Wolters Kluwer AI Workflow",
    category: "AI Research & Drafting",
    tools: "GenAI, Audit Workflows, Competitive Analysis",
    image: "/images/projects/wolters-kluwer.svg",
    github: "https://github.com/Prattkk/wolters-kluwer-answerconnect-ai",
    prototype: "https://peaceful-valkyrie-7f0fbb.netlify.app/",
    tags: ["GenAI Strategy", "Product Design", "Workflow Automation"],
    businessProblem:
      "Legal, tax, and audit professionals rely heavily on research tools, but existing systems are largely reactive — responding only after users ask questions. This leads to inefficiencies, missed insights, and increased compliance risk. Wolters Kluwer sought a way to transform research workflows into a proactive, AI-assisted experience that could deliver timely, context-aware guidance while maintaining accuracy, explainability, and trust.",
    whatIDid: [
      "Collaborated with Wolters Kluwer as part of the UIUC MSBA Business Practicum",
      "Conducted competitive analysis of AI research tools: Thomson Reuters CoCounsel, Intuit Assist, Harvey AI, MindBridge, Luminance",
      "Mapped tax, audit, and legal workflows to identify high-value intervention points for AI",
      "Designed a Proactive AI Advisory System concept shifting workflows from reactive Q&A to continuous guidance",
      "Defined core system components: Workflow recognition, Context tracking, Regulatory knowledge retrieval, Explainability and audit trails",
      "Supported product requirements around: Uncertainty scoring, Compliance and reliability, Trust and transparency in AI outputs",
      "Built a working prototype demonstrating AI-powered document creation, authority recommendations, and citation tracking",
    ],
    toolsAndTech:
      "Product Analysis · AI Workflow Design · Prompt Engineering · Research & Benchmarking · Google AI Studio · Netlify",
    keyInsights: [
      "Identified gaps in existing AI tools around proactive guidance and context awareness",
      "Highlighted the importance of explainability and auditability for AI adoption in regulated industries",
      "Demonstrated how AI can function as an 'AI colleague' rather than a passive assistant",
      "Showed opportunities to reduce research time while improving compliance confidence",
    ],
    outcome:
      "Delivered a research-backed AI workflow proposal with a live prototype demonstrating how generative AI can proactively support legal and tax professionals, improving efficiency, accuracy, and decision confidence in high-stakes, regulated environments.",
  },
  {
    id: "football-transfer",
    name: "European Football Transfer BI",
    category: "Sports Analytics & BI",
    tools: "Tableau, Predictive Modeling, Data Visualization",
    image: "/images/projects/football-transfer.svg",
    github: "https://github.com/Prattkk/European-Football-Transfer-BI",
    tags: ["Tableau", "Data Visualization", "Predictive Modeling", "Sports Analytics"],
    businessProblem:
      "Football clubs face substantial financial risks when acquiring players, with unsuccessful transfers resulting in monetary losses and athletic underperformance. Scouting and investment decisions are often based on intuition rather than data-driven analysis. This project tackles predicting transfer success by examining historical patterns, player characteristics, and market conditions to enhance decision-making.",
    whatIDid: [
      "Collected and cleaned transfer data from Transfermarkt covering multiple European leagues — player age, position, market value, league membership, and performance metrics",
      "Conducted exploratory analysis of league and market dynamics to identify key transfer patterns",
      "Built a binary classification model for predicting transfer outcomes using logistic regression",
      "Achieved 87% model accuracy with detailed confusion matrix analysis for true/false positives and negatives",
      "Created comprehensive Tableau dashboards visualizing transfer trends, league comparisons, and predictive insights",
    ],
    toolsAndTech:
      "Tableau · Python / R · Logistic Regression · Classification Modeling · Transfermarkt Data · Performance Evaluation Metrics",
    keyInsights: [
      "Player age and market value at time of transfer are the strongest predictors of success",
      "Cross-league transfers carry higher risk profiles than within-league moves",
      "Certain positions (e.g., midfielders) show more predictable transfer outcomes than others",
      "The 87% accuracy model significantly outperforms subjective scouting assessments",
    ],
    outcome:
      "Delivered a predictive analytics model achieving 87% accuracy in classifying transfer outcomes, complemented by interactive Tableau dashboards. The tool provides clubs with a data-driven framework for evaluating transfer decisions and reducing financial risk.",
  },
  {
    id: "stablecoin",
    name: "Stablecoin Analytics (PYUSD)",
    category: "Blockchain & Financial Modeling",
    tools: "Python, KNIME, MongoDB, Dune Analytics",
    image: "/images/projects/stablecoin.svg",
    github: "https://github.com/Prattkk/stablecoin-ecosystem-pyusd",
    tags: ["Python", "KNIME", "Financial Modeling", "Blockchain", "Dune Analytics"],
    businessProblem:
      "As enterprises explore stablecoins for treasury and payment operations, evaluating whether a stablecoin like PayPal USD (PYUSD) is reliable enough for real business use requires rigorous analysis. Treasury analysts need to assess daily volume, user adoption, price stability, transaction costs, and settlement reliability before recommending pilot programs.",
    whatIDid: [
      "Analyzed PYUSD stablecoin ecosystem from a Treasury Analyst perspective using Dune Analytics",
      "Built a data pipeline using KNIME + MongoDB + Dune to analyze PYUSD transaction trends in 2024",
      "Investigated 5 core research questions: daily/weekly volume, user engagement, price stability vs $1 peg, on-chain transaction costs, and Ethereum settlement reliability",
      "Created interactive Dune dashboards for stakeholder access to detailed metrics",
      "Documented comprehensive methodology covering constraints, findings, and strategic recommendations",
    ],
    toolsAndTech:
      "Python · KNIME · MongoDB · Dune Analytics · SQL · Ethereum Blockchain Data · Dashboard Visualization",
    keyInsights: [
      "PYUSD demonstrates steady daily transfer volume with periodic high-value institutional movements",
      "Price maintains a tight peg near $1.00, confirming stability for treasury use cases",
      "Transaction success rates consistently near 100%, indicating reliable settlement",
      "Fee variations during network congestion require monitoring for cost-sensitive treasury operations",
    ],
    outcome:
      "Delivered a comprehensive stablecoin assessment recommending PYUSD for pilot treasury programs where velocity and transparency provide advantages, with clear guidance on monitoring Ethereum congestion patterns and liquidity distribution.",
  },
];

export default projectData;
