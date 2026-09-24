import { useState, type ReactNode, type CSSProperties } from "react";
import { Cpu, Monitor, Globe, Smartphone, Cloud, Phone, Mail, Users, Info, Server, Car, Check, X } from "lucide-react";
import { BRAND, COMPARE, END, ASSETS, pose, type Stage } from "./content";

export type SlideProps = { step: number };
export type SlideDef = { title: string; steps: number; C: (p: SlideProps) => ReactNode };

export const StageIcon = ({ k, size = 40 }: { k: Stage["key"]; size?: number }) => {
  const I = { computer: Cpu, pc: Monitor, internet: Globe, phone: Smartphone, cloud: Cloud }[k];
  return <I size={size} strokeWidth={1.8} />;
};
export const PointIcon = ({ k, size = 36 }: { k: string; size?: number }) => {
  const I = ({ commercial: Globe, email: Mail, impact: Users, distinction: Info } as Record<string, typeof Globe>)[k] ?? Globe;
  return <I size={size} strokeWidth={1.8} />;
};
export { Server, Car, Check, X, Cloud, Cpu };

/* Brand social glyphs (inline SVG, no emojis) */
export const Yt = ({ s = 30 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-label="YouTube"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15.1V8.9l5.4 3.1-5.4 3.1Z" /></svg>
);
export const Fb = ({ s = 30 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-label="Facebook"><path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V22h3.4Z" /></svg>
);
export const Ig = ({ s = 30 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Instagram"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
);
export const Socials = ({ s = 30 }: { s?: number }) => (
  <span className="socials"><Yt s={s} /><Fb s={s} /><Ig s={s} /></span>
);

export const Logo = ({ h = 56, style }: { h?: number; style?: CSSProperties }) => (
  <img src={ASSETS.logo} alt="ALFREDO Programming" style={{ height: h, width: "auto", ...style }} draggable={false} />
);

/* Text logo for light backgrounds (same wordmark rebuilt in type) */
export const LogoText = ({ className = "" }: { className?: string }) => (
  <span className={"logotext " + className}>
    <b>ALFREDO</b>
    <i><s />PROGRAMMING<s /></i>
  </span>
);

export const Char = ({ p, className = "", style, flip }: { p: string; className?: string; style?: CSSProperties; flip?: boolean }) => (
  <img
    src={pose(p)}
    alt="ALFREDO character"
    className={"char " + className}
    style={{ ...(flip ? { transform: "scaleX(-1)" } : {}), ...style }}
    draggable={false}
  />
);

export const Motto = ({ className = "" }: { className?: string }) => (
  <span className={"motto " + className}>
    {BRAND.motto.map((m, i) => (
      <span key={m} className={i === 3 ? "last" : ""}>{m}</span>
    ))}
  </span>
);

/** Compact web-native header (≈80px) */
export const Header = ({ no, title, className = "" }: { no: string; title: string; className?: string }) => (
  <header className={"hdr " + className}>
    <span className="hdr-no">{no}</span>
    <span className="hdr-unit">UNIT 1</span>
    <span className="hdr-sep" />
    <span className="hdr-lesson">Lesson 1: <em>{title}</em></span>
    <span className="hdr-sp" />
    <Motto className="hdr-motto" />
  </header>
);

/** Compact footer (≈64px) */
export const Footer = ({ className = "", logo = true }: { className?: string; logo?: boolean }) => (
  <footer className={"ftr " + className}>
    {logo && <Logo h={40} />}
    <span className="ftr-sep" />
    <span className="ftr-tag"><b>{BRAND.program}</b> {BRAND.slogan}</span>
    <span className="hdr-sp" />
    <span className="ftr-c"><Phone size={22} /> {BRAND.phone}</span>
    <span className="ftr-sep" />
    <span className="ftr-c"><Globe size={22} /> {BRAND.web}</span>
    <span className="ftr-sep" />
    <Socials s={26} />
  </footer>
);

export const QR = ({ i, className = "" }: { i: number; className?: string }) => {
  const q = END.qrs[i];
  return (
    <figure className={"qr " + className}>
      <img src={q.src} alt={q.label + " QR code"} draggable={false} />
      <figcaption>{q.label}</figcaption>
    </figure>
  );
};

export const ExitTicket = ({ className = "" }: { className?: string }) => (
  <div className={"exit " + className}>
    <span className="exit-k">Exit ticket</span>
    <span className="exit-q">{END.exit}</span>
  </div>
);

/* Cloud vs Edge quiz — identical logic in every direction */
export function useQuiz() {
  const [pick, setPick] = useState<null | "cloud" | "edge">(null);
  const right = pick === COMPARE.correct;
  return { pick, setPick, right, answered: pick !== null, explain: pick ? (right ? COMPARE.explainRight : COMPARE.explainWrong) : "" };
}

export function Quiz({ className = "", labels = ["Cloud", "Edge"] }: { className?: string; labels?: [string, string] | string[] }) {
  const q = useQuiz();
  return (
    <div className={"quiz " + className} data-state={q.answered ? (q.right ? "right" : "wrong") : "idle"}>
      <p className="quiz-q"><Car size={34} /> {COMPARE.scenario}</p>
      <div className="quiz-opts">
        {(["cloud", "edge"] as const).map((k, i) => (
          <button
            key={k}
            className={"quiz-btn " + (q.pick === k ? (q.right ? "ok" : "no") : "") + (q.answered && k === "edge" ? " is-answer" : "")}
            onClick={(e) => { e.stopPropagation(); q.setPick(k); }}
          >
            {k === "cloud" ? <Server size={30} /> : <Cpu size={30} />} {labels[i]}
          </button>
        ))}
      </div>
      <p className="quiz-fb" aria-live="polite">
        {q.answered && (q.right ? <Check size={30} /> : <X size={30} />)} {q.explain}
      </p>
    </div>
  );
}

/* Connected globe (inline SVG) */
export function GlobeNet({ className = "", stroke = "currentColor", accent = "#FFD400", size = 520 }: { className?: string; stroke?: string; accent?: string; size?: number }) {
  const nodes = [[120, 170], [390, 150], [460, 300], [330, 440], [140, 380], [260, 90], [250, 270]];
  const links = [[0, 5], [5, 1], [1, 2], [2, 3], [3, 4], [4, 0], [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [0, 2], [5, 3]];
  return (
    <svg className={"globe " + className} viewBox="0 0 520 520" width={size} height={size} fill="none" stroke={stroke}>
      <circle cx="260" cy="260" r="220" strokeWidth="3" />
      <ellipse cx="260" cy="260" rx="95" ry="220" strokeWidth="2" opacity=".6" />
      <ellipse cx="260" cy="260" rx="170" ry="220" strokeWidth="2" opacity=".35" />
      <path d="M40 260h440M70 160h380M70 360h380" strokeWidth="2" opacity=".45" />
      {links.map(([a, b], i) => (
        <path key={i} className="gl-link" d={`M${nodes[a][0]} ${nodes[a][1]} Q260 260 ${nodes[b][0]} ${nodes[b][1]}`} stroke={accent} strokeWidth="3" style={{ animationDelay: `${i * 60}ms` }} />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 6 ? 14 : 10} fill={accent} stroke="none" />
      ))}
    </svg>
  );
}

export const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");
