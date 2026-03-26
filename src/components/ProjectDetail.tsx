import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MdClose, MdArrowOutward, MdOpenInNew } from "react-icons/md";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectDetail as ProjectDetailType } from "./projectData";
import "./styles/ProjectDetail.css";

interface Props {
  project: ProjectDetailType | null;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Open animation
  useEffect(() => {
    if (project) {
      setIsVisible(true);
      // Do NOT touch body.style.overflow — GSAP controls it via CSS
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    }
  }, [project]);

  // Store event handler refs so we can clean them up explicitly on close
  const wheelHandlerRef = useRef<((e: WheelEvent) => void) | null>(null);
  const touchHandlerRef = useRef<((e: TouchEvent) => void) | null>(null);

  const cleanupListeners = useCallback(() => {
    if (wheelHandlerRef.current) {
      window.removeEventListener("wheel", wheelHandlerRef.current, { capture: true } as EventListenerOptions);
      wheelHandlerRef.current = null;
    }
    if (touchHandlerRef.current) {
      window.removeEventListener("touchmove", touchHandlerRef.current, { capture: true } as EventListenerOptions);
      touchHandlerRef.current = null;
    }
  }, []);

  // Intercept wheel/touch at window capture phase to allow modal scrolling
  useEffect(() => {
    if (!isVisible) return;

    const handleWheel = (e: WheelEvent) => {
      const overlay = overlayRef.current;
      if (!overlay) return;
      if (overlay.contains(e.target as Node)) {
        e.stopImmediatePropagation();
        overlay.scrollTop += e.deltaY;
      }
    };

    const handleTouch = (e: TouchEvent) => {
      const overlay = overlayRef.current;
      if (!overlay) return;
      if (overlay.contains(e.target as Node)) {
        e.stopImmediatePropagation();
      }
    };

    wheelHandlerRef.current = handleWheel;
    touchHandlerRef.current = handleTouch;

    window.addEventListener("wheel", handleWheel, { capture: true, passive: false });
    window.addEventListener("touchmove", handleTouch, { capture: true, passive: false });

    return cleanupListeners;
  }, [isVisible, cleanupListeners]);

  // Close handler
  const handleClose = useCallback(() => {
    setIsAnimating(false);
    // Remove event listeners IMMEDIATELY so GSAP gets wheel events back right away
    cleanupListeners();
    setTimeout(() => {
      setIsVisible(false);
      onClose();
      // Tell GSAP to recalculate all ScrollTriggers after modal is gone
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, 300);
  }, [onClose, cleanupListeners]);

  // Escape key
  useEffect(() => {
    if (!project) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [project, handleClose]);

  if (!isVisible || !project) return null;

  // Use portal to render outside GSAP's transformed containers
  return createPortal(
    <div
      className={`project-overlay ${isAnimating ? "active" : ""}`}
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      data-cursor="disable"
    >
      <div className="project-detail">
        <button
          className="project-close"
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          aria-label="Close project details"
        >
          <MdClose />
        </button>

        {/* Hero */}
        <div className="project-hero">
          <img src={project.image} alt={project.name} />
          <div className="project-hero-overlay">
            <h1>{project.name}</h1>
            <p className="project-hero-category">{project.category}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="project-content">
          {/* Business Problem */}
          <section className="project-section">
            <div className="project-section-header">
              <span className="project-section-icon">🎯</span>
              <h2>Business Problem</h2>
            </div>
            <p>{project.businessProblem}</p>
          </section>

          {/* What I Did */}
          <section className="project-section">
            <div className="project-section-header">
              <span className="project-section-icon">🛠️</span>
              <h2>What I Did</h2>
            </div>
            <ul>
              {project.whatIDid.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Tools & Technologies */}
          <section className="project-section">
            <div className="project-section-header">
              <span className="project-section-icon">🧰</span>
              <h2>Tools & Technologies</h2>
            </div>
            <p className="project-tools-list">{project.toolsAndTech}</p>
          </section>

          {/* Key Insights */}
          <section className="project-section">
            <div className="project-section-header">
              <span className="project-section-icon">📊</span>
              <h2>Key Insights</h2>
            </div>
            <ul>
              {project.keyInsights.map((insight, i) => (
                <li key={i}>{insight}</li>
              ))}
            </ul>
          </section>

          {/* Outcome / Impact */}
          <section className="project-section">
            <div className="project-section-header">
              <span className="project-section-icon">💥</span>
              <h2>Outcome / Impact</h2>
            </div>
            <p>{project.outcome}</p>
          </section>

          {/* Links */}
          <section className="project-section project-links-section">
            <div className="project-section-header">
              <span className="project-section-icon">🔗</span>
              <h2>Links</h2>
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
                onClick={(e) => e.stopPropagation()}
              >
                <MdArrowOutward />
                GitHub Repository
              </a>
              {project.prototype && (
                <a
                  href={project.prototype}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn project-link-prototype"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MdOpenInNew />
                  Live Prototype
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectDetail;
