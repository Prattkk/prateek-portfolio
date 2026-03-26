import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom SplitText replacement
function splitIntoWords(el: HTMLElement): HTMLSpanElement[] {
  const text = el.textContent || "";
  el.innerHTML = "";
  const spans: HTMLSpanElement[] = [];
  const words = text.split(/\s+/).filter(Boolean);

  words.forEach((word, i) => {
    // Each word gets an inline-block wrapper for overflow:hidden (the "line" clip)
    // and an inner span for animation
    const clipWrapper = document.createElement("span");
    clipWrapper.className = "split-line";
    clipWrapper.style.display = "inline-block";
    clipWrapper.style.overflow = "hidden";
    clipWrapper.style.verticalAlign = "top";

    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.textContent = word;
    clipWrapper.appendChild(span);
    el.appendChild(clipWrapper);

    if (i < words.length - 1) {
      el.appendChild(document.createTextNode(" "));
    }
    spans.push(span);
  });

  return spans;
}

function splitIntoChars(el: HTMLElement): HTMLSpanElement[] {
  const text = el.textContent || "";
  el.innerHTML = "";
  const spans: HTMLSpanElement[] = [];

  const lineWrapper = document.createElement("div");
  lineWrapper.className = "split-line";

  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.textContent = char === " " ? "\u00A0" : char;
    lineWrapper.appendChild(span);
    spans.push(span);
  });

  el.appendChild(lineWrapper);
  return spans;
}

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  originalHTML?: string;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      if (para.originalHTML) para.innerHTML = para.originalHTML;
    }
    para.originalHTML = para.originalHTML || para.innerHTML;

    const words = splitIntoWords(para);

    para.anim = gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      if (title.originalHTML) title.innerHTML = title.originalHTML;
    }
    title.originalHTML = title.originalHTML || title.innerHTML;

    const chars = splitIntoChars(title);

    title.anim = gsap.fromTo(
      chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });
}
