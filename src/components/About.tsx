import { useEffect, useRef, useState } from "react";
import "./styles/About.css";
import "./styles/StreamText.css";

const ABOUT_TEXT =
  "AI Engineer with 3+ years of experience building GenAI systems, LLM pipelines, agentic AI workflows, and full-stack AI integrations at enterprise scale. Deployed a 6-agent Microsoft Copilot Studio system (Magelli Scout) that autonomously scores consulting prospects and delivers weekly intelligence briefs via Power Automate. Built a GenAI advisory platform at Wolters Kluwer reducing turnaround by 25% across 500+ accounts, and a full-stack SAP automation system at Bosch processing 44,000+ customer records. MSBA from Gies, UIUC (GPA 3.96, STEM OPT). 2x competition winner. Open to AI Engineer, Generative AI Engineer, and AI Analyst roles across the US.";

const WORDS = ABOUT_TEXT.split(" ");

const About = () => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = paraRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || count >= WORDS.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), 26);
    return () => clearTimeout(id);
  }, [started, count]);

  const done = count >= WORDS.length;

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="stream-para" ref={paraRef}>
          <span className="stream-ghost" aria-hidden="true">
            {ABOUT_TEXT}
          </span>
          <span className="stream-live">
            {WORDS.slice(0, count).join(" ")}
            {started && !done && <span className="stream-cursor"></span>}
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
