import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          Education
        </h2>
        <div className="education-grid">
          <div className="education-card">
            <div className="education-header">
              <div className="education-degree">
                <h3>M.S. in Business Analytics</h3>
                <h4>Gies College of Business</h4>
                <h5>University of Illinois Urbana-Champaign</h5>
              </div>
              <div className="education-year">
                <span>2025 – 2026 · STEM</span>
                <p className="education-gpa">GPA: 3.96 / 4.0</p>
              </div>
            </div>
            <div className="education-tags">
              <span>Data Engineering (AWS)</span>
              <span>Supply Chain Analytics</span>
              <span>Marketing Analytics</span>
              <span>Business Strategy</span>
            </div>
          </div>
          <div className="education-card">
            <div className="education-header">
              <div className="education-degree">
                <h3>B.E. in Computer Science Engineering</h3>
                <h4>Chitkara University</h4>
                <h5>India</h5>
              </div>
              <div className="education-year">
                <span>2019 – 2023</span>
                <p className="education-gpa">CGPA: 9.91 / 10.0</p>
              </div>
            </div>
            <div className="education-tags">
              <span>Data Structures & Algorithms</span>
              <span>Database Management</span>
              <span>Object-Oriented Programming</span>
              <span>Software Engineering</span>
              <span>Machine Learning</span>
              <span>Computer Networks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
