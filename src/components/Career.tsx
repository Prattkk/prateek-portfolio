import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer (Client Practicum)</h4>
                <h5>Bosch Power Tools · Champaign, IL</h5>
              </div>
              <h3>Jan 2026 – May 2026</h3>
            </div>
            <p>
              Engineered an AI-enabled B2B identity validation system using
              Python FastAPI, React, TypeScript, and SAP master data to
              automate approval workflows across 44,000+ customer records.
              Built a 4-gate deterministic verification engine for customer
              identity, account eligibility, SAP record matching, and
              duplicate-risk signal detection. Integrated 23,600+ SAP records
              into a browser-based validation engine using SheetJS with
              human-in-the-loop review and SMTP notifications via Nodemailer.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer (Client Practicum)</h4>
                <h5>Wolters Kluwer · Champaign, IL</h5>
              </div>
              <h3>Aug 2025 – Dec 2025</h3>
            </div>
            <p>
              Architected a Proactive AI Advisory System using GenAI, LLM
              pipelines, and prompt orchestration to shift tax/audit workflows
              from reactive Q&A to real-time strategic guidance. Designed AI
              advisory workflows mapping user intents, document triggers, and
              risk signals across 500+ client accounts, reducing advisory
              turnaround by 25%. Benchmarked Harvey AI, CoCounsel, and
              MindBridge to define explainability requirements and responsible
              AI adoption standards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Data Analyst</h4>
                <h5>Upsleek Apparels Pvt Ltd · Noida, India</h5>
              </div>
              <h3>Oct 2024 – Jun 2025</h3>
            </div>
            <p>
              Developed K-Means customer segmentation models in Python
              (Scikit-Learn) on 50,000+ records, improving marketing ROI by
              18%. Engineered automated ETL pipelines using SQL and Python;
              built Power BI and Tableau dashboards with 30+ KPI measures
              reducing reporting errors by 35%. Saved 15+ hours/week through
              automated reporting and applied A/B testing to drive data-backed
              sales strategies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst → Senior Associate</h4>
                <h5>WNS Global Services · Bengaluru, India</h5>
              </div>
              <h3>May 2022 – Oct 2024</h3>
            </div>
            <p>
              Promoted twice in 2.5 years; engineered Python and SQL predictive
              pipelines to identify data quality issues, SLA exceptions, and
              exception patterns. Applied statistical anomaly detection and
              root-cause analysis, reducing manual reporting workload by 30%
              across 10+ departments. Implemented enterprise data governance in
              Collibra across 1M+ records ensuring regulatory compliance and
              audit-readiness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
