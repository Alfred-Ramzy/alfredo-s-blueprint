import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DIRECTIONS } from "@/deck/directions";
import "@/deck/deck.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALFREDO · Unit 1 Lesson 1 — Development of IT and Social Transformation" },
      { name: "description", content: "ALFREDO Programming web presentation lab: 10 design directions × 5 real slides for Egyptian Baccalaureate Grade 11, Lesson 1." },
      { property: "og:title", content: "ALFREDO · Unit 1 Lesson 1 Web Presentation" },
      { property: "og:description", content: "10 art-directed ALFREDO presentation systems for Development of Information Technology and Social Transformation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Deck,
});

const FLAT = DIRECTIONS.flatMap((d, di) => d.slides.map((s, si) => ({ ...s, dir: d, di, si })));
const PRELOAD = [
  "arms_crossed", "backpack", "bulb", "chart", "cheer", "desk", "glasses", "headset", "laptop", "laptop_up",
  "ok", "phone", "point_board", "point_self", "pocket", "read_paper", "robot_hug", "robot_present", "sit_write",
  "stop", "tablet_code", "think_cloud", "thinking", "thumbs", "thumbs_wink", "trophy", "two_thumbs", "usb", "walk", "wave", "welcome", "calendar", "heart",
];

function Deck() {
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0);
  const [reset, setReset] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [idle, setIdle] = useState(false);
  const [scale, setScale] = useState(0.5);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const n = Number(new URLSearchParams(window.location.search).get("s"));
    if (n >= 1 && n <= FLAT.length) setIdx(n - 1);
    PRELOAD.forEach((p) => { const i = new Image(); i.src = `/alfredo/${p}.webp`; });
    ["qr_fb", "qr_yt", "qr_wa", "qr_web"].forEach((p) => { const i = new Image(); i.src = `/alfredo/${p}.png`; });
  }, []);

  const cur = FLAT[idx]!;

  useEffect(() => {
    const u = new URL(window.location.href);
    u.searchParams.set("s", String(idx + 1));
    window.history.replaceState(null, "", u);
    document.title = `${cur.dir.id} · ${cur.si + 1}/5 — ${cur.title}`;
  }, [idx, cur]);

  useLayoutEffect(() => {
    const fit = () => {
      const el = stageRef.current;
      if (!el) return;
      setScale(Math.min(el.clientWidth / 1920, el.clientHeight / 1080));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  const go = useCallback((i: number) => {
    const n = Math.max(0, Math.min(FLAT.length - 1, i));
    setIdx(n);
    setStep(0);
  }, []);

  const next = useCallback(() => {
    if (step < cur.steps) setStep(step + 1);
    else if (idx < FLAT.length - 1) go(idx + 1);
  }, [step, cur, idx, go]);
  const prev = useCallback(() => {
    if (step > 0) setStep(step - 1);
    else if (idx > 0) { const p = FLAT[idx - 1]!; setIdx(idx - 1); setStep(p.steps); }
  }, [step, idx]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const k = e.key;
      if (k === "ArrowRight" || k === " " || k === "PageDown") { e.preventDefault(); next(); }
      else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); prev(); }
      else if (k === "Home") go(0);
      else if (k === "End") go(FLAT.length - 1);
      else if (k === "f" || k === "F") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.().catch(() => {});
      } else if (k === "h" || k === "H") setHidden((h) => !h);
      else if (k === "r" || k === "R") { setStep(0); setReset((r) => r + 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go]);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const wake = () => { setIdle(false); clearTimeout(t); t = setTimeout(() => setIdle(true), 2200); };
    wake();
    window.addEventListener("mousemove", wake);
    return () => { window.removeEventListener("mousemove", wake); clearTimeout(t); };
  }, []);

  const S = cur.C;
  return (
    <main className="deck-stage" ref={stageRef}>
      <div className="deck-slide" style={{ transform: `scale(${scale})` }}>
        <div key={`${idx}-${reset}`} className={`slide ${cur.dir.cls}`} data-step={step}>
          <S step={step} />
        </div>
      </div>
      {!hidden && (
        <>
          <span className="deck-label">{cur.dir.id} · {cur.si + 1}/5</span>
          <div className={"deck-ctrl" + (idle ? " idle" : "")}>
            <button aria-label="Previous slide" onClick={prev}><ChevronLeft size={22} /></button>
            <span className="deck-prog"><i style={{ width: `${((idx + 1) / FLAT.length) * 100}%` }} /></span>
            <button aria-label="Next slide" onClick={next}><ChevronRight size={22} /></button>
          </div>
        </>
      )}
    </main>
  );
}
