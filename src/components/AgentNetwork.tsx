import { useEffect, useRef } from "react";
import "./styles/AgentNetwork.css";

const AGENTS = [
  "Job Scraper",
  "Signal Parser",
  "Gap Scorer",
  "Prospect Ranker",
  "BI Publisher",
  "Brief Sender",
];

const ACCENT = "#c481ff";

const AgentNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let running = false;
    let W = 0;
    let H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Packet = { from: number; t: number; speed: number; outbound: boolean };
    type Pulse = { x: number; y: number; r: number; alpha: number };
    const packets: Packet[] = [];
    const pulses: Pulse[] = [];
    let nodes: { x: number; y: number; label: string }[] = [];
    let hub = { x: 0, y: 0 };
    let lastSpawn = 0;
    let lastTime = 0;

    const layout = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      W = rect.width;
      H = Math.min(480, Math.max(340, W * 0.52));
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      hub = { x: W / 2, y: H / 2 };
      const rx = Math.min(W * 0.38, 320);
      const ry = H * 0.34;
      nodes = AGENTS.map((label, i) => {
        const a = (Math.PI * 2 * i) / AGENTS.length - Math.PI / 2;
        return {
          x: hub.x + Math.cos(a) * rx,
          y: hub.y + Math.sin(a) * ry,
          label,
        };
      });
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = (time: number) => {
      if (!running) return;
      const dt = lastTime ? Math.min(50, time - lastTime) : 16;
      lastTime = time;
      ctx.clearRect(0, 0, W, H);

      // edges
      ctx.strokeStyle = "rgba(196, 129, 255, 0.13)";
      ctx.lineWidth = 1;
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.moveTo(hub.x, hub.y);
        ctx.lineTo(n.x, n.y);
        ctx.stroke();
      });

      // spawn packets
      if (time - lastSpawn > 550 && packets.length < 7) {
        lastSpawn = time;
        packets.push({
          from: Math.floor(Math.random() * nodes.length),
          t: 0,
          speed: 0.00065 + Math.random() * 0.0005,
          outbound: Math.random() > 0.5,
        });
      }

      // packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.t += p.speed * dt;
        const n = nodes[p.from];
        const sx = p.outbound ? hub.x : n.x;
        const sy = p.outbound ? hub.y : n.y;
        const ex = p.outbound ? n.x : hub.x;
        const ey = p.outbound ? n.y : hub.y;
        const x = lerp(sx, ex, p.t);
        const y = lerp(sy, ey, p.t);

        // trail
        for (let k = 1; k <= 3; k++) {
          const tt = Math.max(0, p.t - k * 0.045);
          ctx.beginPath();
          ctx.arc(lerp(sx, ex, tt), lerp(sy, ey, tt), 3 - k * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(196, 129, 255, ${0.3 - k * 0.08})`;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(x, y, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = ACCENT;
        ctx.shadowColor = ACCENT;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (p.t >= 1) {
          pulses.push({ x: ex, y: ey, r: 8, alpha: 0.55 });
          packets.splice(i, 1);
        }
      }

      // pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pl = pulses[i];
        pl.r += 0.04 * dt;
        pl.alpha -= 0.0011 * dt;
        if (pl.alpha <= 0) {
          pulses.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(pl.x, pl.y, pl.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(196, 129, 255, ${pl.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // agent nodes
      const small = W < 640;
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, small ? 9 : 12, 0, Math.PI * 2);
        ctx.fillStyle = "#16101c";
        ctx.fill();
        ctx.strokeStyle = "rgba(196, 129, 255, 0.8)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(n.x, n.y, small ? 3 : 4, 0, Math.PI * 2);
        ctx.fillStyle = ACCENT;
        ctx.fill();

        ctx.font = `${small ? 9 : 11}px Geist, system-ui, sans-serif`;
        ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
        ctx.textAlign = "center";
        const below = n.y >= hub.y;
        ctx.fillText(n.label, n.x, n.y + (below ? (small ? 22 : 28) : -(small ? 16 : 20)));
      });

      // hub
      const breathe = 1 + Math.sin(time * 0.002) * 0.08;
      const hubR = (small ? 18 : 24) * breathe;
      const grad = ctx.createRadialGradient(hub.x, hub.y, 2, hub.x, hub.y, hubR * 2);
      grad.addColorStop(0, "rgba(196, 129, 255, 0.35)");
      grad.addColorStop(1, "rgba(196, 129, 255, 0)");
      ctx.beginPath();
      ctx.arc(hub.x, hub.y, hubR * 2, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(hub.x, hub.y, hubR, 0, Math.PI * 2);
      ctx.fillStyle = "#1c1226";
      ctx.fill();
      ctx.strokeStyle = ACCENT;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.font = `600 ${small ? 8 : 10}px Geist, system-ui, sans-serif`;
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText("LLM", hub.x, hub.y - 1);
      ctx.fillText("CORE", hub.x, hub.y + (small ? 8 : 10));

      raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTime = 0;
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    layout();
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.15 }
    );
    observer.observe(canvas);

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="agents-section section-container">
      <div className="agents-container">
        <h2>
          Agents <span>at work</span>
        </h2>
        <p className="agents-sub">
          Live simulation of my Magelli Scout multi-agent pipeline — packets
          are messages flowing between agents and the LLM core.
        </p>
        <div className="agents-canvas-wrap">
          <canvas ref={canvasRef} />
        </div>
      </div>
    </div>
  );
};

export default AgentNetwork;
