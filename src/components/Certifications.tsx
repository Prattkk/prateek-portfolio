import "./styles/Certifications.css";
import { MdArrowOutward } from "react-icons/md";

const certs = [
  { name: "Prompt Engineering with the OpenAI API", issuer: "DataCamp" },
  { name: "Working with the OpenAI API", issuer: "DataCamp" },
  { name: "Project Management Foundations", issuer: "LinkedIn Learning" },
  {
    name: "Exploring & Producing Data for Business Decision Making",
    issuer: "Coursera",
  },
  {
    name: "Inferential & Predictive Statistics for Business",
    issuer: "Coursera",
  },
];

const Certifications = () => {
  return (
    <div className="certs-section section-container">
      <div className="certs-container">
        <h2>Certifications</h2>
        <div className="certs-list">
          {certs.map((cert, index) => (
            <div className="cert-item" key={index}>
              <div className="cert-info">
                <h4>{cert.name}</h4>
                <span>{cert.issuer}</span>
              </div>
              <div className="cert-icon">
                <MdArrowOutward />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
