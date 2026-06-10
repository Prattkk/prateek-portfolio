import { useEffect, useState } from "react";
import "./styles/Loading.css";
import "./styles/BootTerminal.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const BOOT_LINES = [
  "$ boot prateek.ai --mode=portfolio",
  "> loading LLM pipeline ............. OK",
  "> spawning agents [6/6] ............ OK",
  "> indexing 10 projects ............. OK",
  "> calibrating GenAI stack .......... OK",
  "> deploying prateek.exe ............ DONE",
];

const BootTerminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    let line = 0;
    let char = 0;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      if (line >= BOOT_LINES.length) return;
      const target = BOOT_LINES[line];
      if (char <= target.length) {
        setCurrent(target.slice(0, char));
        char++;
        timer = setTimeout(type, 14);
      } else {
        setLines((prev) => [...prev, target]);
        setCurrent("");
        line++;
        char = 0;
        timer = setTimeout(type, 180);
      }
    };
    timer = setTimeout(type, 400);
    return () => clearTimeout(timer);
  }, []);

  const renderLine = (text: string, key: number | string) => (
    <div className="boot-line" key={key}>
      {text.startsWith("$") ? (
        <>
          <span className="boot-prompt">$</span>
          {text.slice(1)}
        </>
      ) : text.endsWith("OK") || text.endsWith("DONE") ? (
        <>
          {text.slice(0, text.endsWith("OK") ? -2 : -4)}
          <span className="boot-ok">{text.endsWith("OK") ? "OK" : "DONE"}</span>
        </>
      ) : (
        text
      )}
    </div>
  );

  return (
    <div className="boot-terminal">
      {lines.map((l, i) => renderLine(l, i))}
      {current && renderLine(current, "typing")}
      {lines.length < BOOT_LINES.length && <span className="boot-caret"></span>}
    </div>
  );
};

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  if (percent >= 100) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }, 600);
  }

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 900);
      }
    });
  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          PV
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <BootTerminal />
        <div className="loading-marquee">
          <Marquee>
            <span> AI Engineer</span> <span>GenAI</span> <span>LLM Pipelines</span> <span>Agentic AI</span>
            <span> AI Engineer</span> <span>GenAI</span> <span>LLM Pipelines</span> <span>Agentic AI</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
