import "./styles/Metrics.css";

const metrics = [
  { value: "30%", label: "Reporting Reduction", detail: "WNS Global Services" },
  { value: "15+", label: "Hours Saved / Week", detail: "Automated Pipelines" },
  { value: "44K+", label: "SAP Records Processed", detail: "Bosch Power Tools" },
  { value: "1M+", label: "Records Governed", detail: "Data Quality & Compliance" },
  { value: "30+", label: "KPI Dashboards", detail: "Power BI & Tableau" },
  { value: "40%", label: "Review Time Reduced", detail: "AI Healthcare Platform" },
];

const Metrics = () => {
  return (
    <div className="metrics-section section-container" id="metrics">
      <div className="metrics-container">
        <h2 className="title">Impact</h2>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div className="metric-card" key={index}>
              <h3>{metric.value}</h3>
              <h4>{metric.label}</h4>
              <p>{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
