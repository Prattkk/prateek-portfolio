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
                <h4>Business Technology Consultant</h4>
                <h5>Bosch Power Tools · Champaign, IL</h5>
              </div>
              <h3>Jan 2026 – May 2026</h3>
            </div>
            <p>
              Engineered a full-stack B2B automation system combining Python
              FastAPI and React + TypeScript, implementing 4-gate identity
              verification logic against 44,000+ SAP customer records and
              eliminating manual registration workflows. Orchestrated
              integration of 23,600+ SAP master data records into a
              browser-based validation engine using SheetJS with automated
              SMTP notifications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Analyst</h4>
                <h5>Wolters Kluwer · Champaign, IL</h5>
              </div>
              <h3>Aug 2025 – Dec 2025</h3>
            </div>
            <p>
              Architected a Proactive AI Advisory System using GenAI and LLM
              pipelines, reducing advisory turnaround by 25%. Spearheaded
              competitive benchmarking across Harvey AI, CoCounsel, and
              MindBridge; mapped tax audit lifecycles across 500+ client
              accounts to define explainability requirements.
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
              Automated data pipelines using SQL and Python; designed Tableau
              and Power BI dashboards with 30+ KPI measures, reducing reporting
              errors by 35%. Saved 15+ hours/week via scheduled jobs and
              improved marketing ROI by 18% through A/B testing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern → Associate → Senior Associate</h4>
                <h5>WNS Global Services · Bengaluru, India</h5>
              </div>
              <h3>May 2022 – Oct 2024</h3>
            </div>
            <p>
              Promoted twice in 2.5 years; translated stakeholder requirements
              into automated SQL queries and Tableau dashboards, reducing manual
              reporting by 30% across 10+ departments. Implemented enterprise
              data governance in Collibra on 1M+ records; executed IBM UNICA
              campaigns with 100% pre-launch data accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
