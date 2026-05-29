import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>

      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI</h3>
              <h4>GenAI · LLM · Agentic Systems</h4>
              <p>
                Building production GenAI systems — multi-agent orchestration,
                RAG pipelines, LLM integrations, prompt engineering, and
                agentic workflows from prototype to enterprise deployment.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">GenAI</div>
                <div className="what-tags">LLM Integration</div>
                <div className="what-tags">RAG Pipelines</div>
                <div className="what-tags">Prompt Engineering</div>
                <div className="what-tags">Multi-Agent Orchestration</div>
                <div className="what-tags">Agentic AI</div>
                <div className="what-tags">Copilot Studio</div>
                <div className="what-tags">Power Automate</div>
                <div className="what-tags">LangChain</div>
                <div className="what-tags">OpenAI API</div>
                <div className="what-tags">NLP</div>
                <div className="what-tags">Sentiment Analysis</div>
                <div className="what-tags">Vector Search</div>
                <div className="what-tags">Embeddings</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BUILD</h3>
              <h4>Engineering · Cloud · Analytics</h4>
              <p>
                Full-stack engineering and cloud data infrastructure —
                Python, React, FastAPI, AWS pipelines, Azure SQL, ETL,
                Power BI, Tableau, and statistical modeling at scale.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python (FastAPI, Scikit-Learn)</div>
                <div className="what-tags">React + TypeScript</div>
                <div className="what-tags">SQL (PostgreSQL, Azure SQL)</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">ETL Pipelines</div>
                <div className="what-tags">AWS (Kinesis, Lambda, S3, Glue)</div>
                <div className="what-tags">Azure</div>
                <div className="what-tags">Power BI (DAX)</div>
                <div className="what-tags">Tableau</div>
                <div className="what-tags">A/B Testing</div>
                <div className="what-tags">Statistical Modeling</div>
                <div className="what-tags">Collibra</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
