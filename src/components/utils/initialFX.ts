import gsap from "gsap";
import { smoother } from "../Navbar";

// Custom split text into char spans
function splitChars(selector: string): HTMLSpanElement[] {
  const elements = document.querySelectorAll(selector);
  const allChars: HTMLSpanElement[] = [];
  elements.forEach((el) => {
    const text = el.textContent || "";
    el.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.className = "split-line";
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.textContent = char === " " ? "\u00A0" : char;
      wrapper.appendChild(span);
      allChars.push(span);
    });
    el.appendChild(wrapper);
  });
  return allChars;
}

function splitCharsForLoop(selector: string): HTMLSpanElement[] {
  const elements = document.querySelectorAll(selector);
  const allChars: HTMLSpanElement[] = [];
  elements.forEach((el) => {
    const text = el.textContent || "";
    el.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.className = "split-h2";
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.textContent = char === " " ? "\u00A0" : char;
      wrapper.appendChild(span);
      allChars.push(span);
    });
    el.appendChild(wrapper);
  });
  return allChars;
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingChars = splitChars(
    ".landing-info h3, .landing-intro h2, .landing-intro h1"
  );
  gsap.fromTo(
    landingChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const landingText2 = splitCharsForLoop(".landing-h2-info");
  gsap.fromTo(
    landingText2,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const landingText3 = splitCharsForLoop(".landing-h2-info-1");
  const landingText4 = splitCharsForLoop(".landing-h2-1");
  const landingText5 = splitCharsForLoop(".landing-h2-2");

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function LoopText(Text1: HTMLSpanElement[], Text2: HTMLSpanElement[]) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
