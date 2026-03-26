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
                <h4>Data Analyst Intern</h4>
                <h5>WNS Global Services</h5>
              </div>
              <h3>May 2022 – Apr 2023</h3>
            </div>
            <p>
              Executed targeted marketing campaigns using IBM UNICA and
              SQL-based customer segmentation, ensuring 100% data accuracy
              before launches.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate → Senior Associate</h4>
                <h5>WNS Global Services</h5>
              </div>
              <h3>May 2023 – Oct 2024</h3>
            </div>
            <p>
              Promoted for high-impact analytics; translated business
              requirements into automated SQL queries and Tableau dashboards,
              reducing manual reporting by 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Data Analyst</h4>
                <h5>Upsleek Apparels</h5>
              </div>
              <h3>Oct 2024 – Jun 2025</h3>
            </div>
            <p>
              Built data pipelines using SQL and Python; created Tableau/Power
              BI dashboards with 30+ KPI measures. Automated reporting saving
              15+ hours/week.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Analyst</h4>
                <h5>Wolters Kluwer</h5>
              </div>
              <h3>Aug 2025 – Dec 2025</h3>
            </div>
            <p>
              Architected a Proactive AI Advisory System shifting tax/audit
              workflows from reactive Q&A to real-time strategic guidance;
              conducted competitive benchmarking to define technical requirements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Technology Consultant</h4>
                <h5>Bosch Power Tools</h5>
              </div>
              <h3>Jan 2026 – Present</h3>
            </div>
            <p>
              Building hybrid automation models with React, TypeScript, and
              FastAPI for identity verification against 44,000+ SAP customer
              records for Bosch's B2B portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
