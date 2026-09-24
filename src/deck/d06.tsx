import "./d06.css";
import { COVER, TIMELINE, NET, COMPARE, END, BRAND } from "./content";
import { Char, Logo, Motto, Quiz, StageIcon, Socials, Car, Server, Cpu, Cloud, cx, type SlideDef } from "./shared";
import { Globe, Mail, Monitor, Laptop } from "lucide-react";

const Frame = ({ n, t }: { n: string; t: string }) => (
  <>
    <i className="d06-reg tl" /><i className="d06-reg tr" /><i className="d06-reg bl" /><i className="d06-reg br" />
    <div className="d06-hd"><span>SHEET {n}/05</span><span>UNIT 1 · LESSON 1</span><b>{t}</b><span className="d06-sp" /><Motto /></div>
    <div className="d06-ft"><Logo h={34} /><span>{BRAND.program} · {BRAND.slogan}</span><span className="d06-sp" /><span>TEL {BRAND.phone}</span><span>WEB {BRAND.web}</span><Socials s={22} /></div>
  </>
);

const Cover = () => (
  <>
    <Frame n="01" t="TITLE SHEET" />
    <div className="d06-cframe in-f">
      <span className="d06-dim h"><i>FIG. A — ALFREDO</i></span>
      <Char p="chart" className="d06-cchar in" />
    </div>
    <h1 className="d06-ctitle in">{COVER.titleA}<br /><em>{COVER.titleB}</em><br />{COVER.titleC}</h1>
    <table className="d06-block in" style={{ ["--d" as string]: "200ms" }}>
      <tbody>
        <tr><th>UNIT</th><td className="big">1</td><th>LESSON</th><td className="big">1</td></tr>
        <tr><th>DOC</th><td colSpan={3}>{COVER.workbook}</td></tr>
        <tr><th>PROGRAM</th><td colSpan={3}>{BRAND.program} — {BRAND.grade}</td></tr>
        <tr><th>ISSUED BY</th><td colSpan={3}>ALFREDO Programming · {BRAND.slogan}</td></tr>
      </tbody>
    </table>
  </>
);

const YEARS = [1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];
const SPANS = [[1940, 1970], [1970, 1990], [1990, 2000], [2000, 2010], [2010, 2025]] as const;
const X = (y: number) => 120 + ((y - 1940) / 85) * 1680;
const Timeline = ({ step }: { step: number }) => (
  <>
    <Frame n="02" t={TIMELINE.subtitle.toUpperCase()} />
    <h2 className="d06-h in">{TIMELINE.title}</h2>
    <div className="d06-axis">
      {YEARS.map((y) => <span key={y} className="d06-tick" style={{ left: X(y) - 120 }}>{y}</span>)}
    </div>
    {TIMELINE.stages.map((s, i) => {
      const [a, b] = SPANS[i]!;
      return (
        <div key={s.key} className={cx("d06-span in", i % 2 ? "lo" : "hi")} style={{ left: X(a), width: X(b) - X(a), ["--d" as string]: `${i * 90}ms` }}>
          <span className="d06-brk" />
          <div className="d06-lab">
            <span className="d06-ic"><StageIcon k={s.key} size={34} /></span>
            <div><b>{String(s.n).padStart(2, "0")} {s.name}</b><small>{s.era}</small>
              <p className={cx("rv", step >= 1 && "on")}>{s.detail}</p></div>
          </div>
        </div>
      );
    })}
    <div className={cx("d06-vec rv", step >= 2 && "on")}>
      <span>VECTOR OF CHANGE</span>
      <svg viewBox="0 0 1000 20"><path d="M0 10H985" /><path d="M970 2L990 10 970 18" /></svg>
      <p>{TIMELINE.pattern.join(" · ")}</p>
    </div>
    <Char p="sit_write" className="d06-tchar in-l" />
  </>
);

const NODES = [
  { k: "commercial", x: 330, y: 250, I: Monitor },
  { k: "email", x: 330, y: 610, I: Mail },
  { k: "impact", x: 1060, y: 250, I: Laptop },
  { k: "distinction", x: 1060, y: 610, I: Server },
];
const Concept = ({ step }: { step: number }) => (
  <>
    <Frame n="03" t={NET.subtitle.toUpperCase()} />
    <h2 className="d06-h in">{NET.title}</h2>
    <svg className="d06-net" viewBox="0 0 1400 800">
      {NODES.map((n, i) => <path key={i} className={cx("d06-wire", step >= i && "on")} d={`M700 430 L${n.x} ${n.y}`} />)}
      <circle cx="700" cy="430" r="110" className="d06-hub" />
    </svg>
    <div className="d06-hubl"><Globe size={64} /><b>WWW</b></div>
    {NODES.map((n, i) => {
      const p = NET.points[i]!;
      return (
        <div key={n.k} className={cx("d06-nd", i < 2 ? "l" : "r", step >= i && "on")} style={{ left: n.x + 260, top: n.y + 170 }}>
          <span className="d06-ic big"><n.I size={40} /></span>
          <div className="d06-ann"><b>{String.fromCharCode(65 + i)}. {p.head}</b><p>{p.body}</p></div>
        </div>
      );
    })}
    <p className={cx("d06-eq rv", step >= 4 && "on")}>1990s = {NET.key.join(" + ")}</p>
    <Char p="point_board" className="d06-nchar in-r" />
  </>
);

const Compare = () => (
  <>
    <Frame n="04" t={COMPARE.subtitle.toUpperCase()} />
    <h2 className="d06-h in">{COMPARE.title}</h2>
    <div className="d06-diag in-f">
      <span className="d06-car"><Car size={70} /><small>DATA SOURCE</small></span>
      <span className="d06-edge"><Cpu size={50} /><small>EDGE</small></span>
      <span className="d06-cloud"><Cloud size={80} /><small>CLOUD DATA CENTER</small></span>
      <i className="d06-d1"><em>SHORT — LOCAL</em></i>
      <i className="d06-d2"><em>LONG — NETWORK DELAY</em></i>
    </div>
    <table className="d06-spec in">
      <thead><tr><th>SPEC</th><th><Server size={24} /> CLOUD</th><th><Cpu size={24} /> EDGE</th></tr></thead>
      <tbody>{COMPARE.rows.map((r) => <tr key={r.label}><th>{r.label}</th><td>{r.cloud}</td><td>{r.edge}</td></tr>)}</tbody>
    </table>
    <div className="d06-qz in" style={{ ["--d" as string]: "200ms" }}><span className="d06-tag">TEST CASE</span><Quiz className="d06-quiz" /></div>
    <Char p="stop" className="d06-qchar in-r" />
  </>
);

const End = () => (
  <>
    <Frame n="05" t="CHANNEL SCHEDULE" />
    <h2 className="d06-h in">{END.title}<small>{END.subtitle}</small></h2>
    <div className="d06-parts">
      {END.qrs.map((q, i) => (
        <figure key={q.key} className="in" style={{ ["--d" as string]: `${i * 90}ms` }}>
          <span className="d06-pn">P-0{i + 1}</span>
          <img src={q.src} alt={q.label + " QR code"} />
          <figcaption>{q.label}</figcaption>
        </figure>
      ))}
    </div>
    <div className="d06-note in"><b>NOTE — EXIT TICKET</b><p>{END.exit}</p></div>
    <p className="d06-comm">{BRAND.community}</p>
    <Char p="ok" className="d06-echar in-r" />
  </>
);

export const D06: SlideDef[] = [
  { title: "Cover", steps: 0, C: Cover },
  { title: "The Big Story of IT", steps: 2, C: Timeline },
  { title: "1990s: Internet + Web", steps: 4, C: Concept },
  { title: "Cloud vs Edge", steps: 0, C: Compare },
  { title: "Official Accounts", steps: 0, C: End },
];
