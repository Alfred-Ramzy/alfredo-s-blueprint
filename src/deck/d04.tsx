import "./d04.css";
import { useState } from "react";
import { COVER, TIMELINE, NET, COMPARE, END, BRAND } from "./content";
import { Header, Footer, Char, LogoText, Motto, QR, Quiz, GlobeNet, StageIcon, PointIcon, ExitTicket, Server, Cpu, cx, type SlideDef } from "./shared";

const Cover = () => (
  <>
    <div className="d04-unit in-s">{COVER.unit}</div>
    <div className="d04-sticker in-s" style={{ ["--d" as string]: "100ms" }}><Char p="point_self" className="d04-cchar" /></div>
    <div className="d04-card d04-ctitle in" style={{ ["--d" as string]: "180ms" }}>
      <span className="d04-chip y">{COVER.lesson}</span>
      <h1>{COVER.titleA} <mark>{COVER.titleB}</mark> {COVER.titleC}</h1>
    </div>
    <div className="d04-crow in" style={{ ["--d" as string]: "300ms" }}>
      <span className="d04-chip n">{COVER.workbook}</span>
      <span className="d04-chip">{BRAND.program}</span>
      <span className="d04-chip">{BRAND.grade}</span>
    </div>
    <div className="d04-card d04-cbrand in" style={{ ["--d" as string]: "400ms" }}>
      <LogoText />
      <p>{BRAND.slogan}</p>
      <Motto />
    </div>
  </>
);

const Timeline = ({ step }: { step: number }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <Header no="02" title="Development of IT and Social Transformation" className="d04-hdr" />
      <div className="d04-title in"><h2>{TIMELINE.title}</h2><span className="d04-chip y">{TIMELINE.subtitle}</span></div>
      <div className="d04-stairs">
        {TIMELINE.stages.map((s, i) => (
          <button key={s.key} className={cx("d04-card d04-st in", open === i && "open")} style={{ ["--d" as string]: `${i * 80}ms`, ["--i" as string]: i }} onClick={() => setOpen(open === i ? null : i)}>
            <span className="d04-sn">{s.n}</span>
            <StageIcon k={s.key} size={50} />
            <h3>{s.name}</h3>
            <span className="d04-chip s">{s.era}</span>
            <p>{open === i ? s.detail : s.line}</p>
          </button>
        ))}
      </div>
      <p className="d04-hint">Tap a card to open it</p>
      <div className={cx("d04-card d04-pat rv", step >= 1 && "on")}>
        <b>Pattern</b> {TIMELINE.pattern.join(" → ")}
      </div>
      <Char p="calendar" className="d04-tchar in-l" />
      <Footer className="d04-ftr" />
    </>
  );
};

const Concept = () => {
  const [tab, setTab] = useState(0);
  const p = NET.points[tab]!;
  return (
    <>
      <Header no="03" title="Development of IT and Social Transformation" className="d04-hdr" />
      <div className="d04-title left in"><h2>{NET.title}</h2><span className="d04-chip y">{NET.subtitle}</span></div>
      <div className="d04-card d04-gbox in-s"><GlobeNet stroke="#0b1f4a" accent="#1f5fd6" size={380} /><span className="d04-chip y big">1990s</span></div>
      <div className="d04-tabs">
        {NET.points.map((q, i) => (
          <button key={q.key} className={cx("d04-chip tab", i === tab && "act")} onClick={() => setTab(i)}><PointIcon k={q.key} size={26} /> {q.head.replace(" of the Internet", "").replace(" of Information", "")}</button>
        ))}
      </div>
      <div key={tab} className="d04-card d04-panel in-s">
        <h3>{p.head}</h3>
        <p>{p.body}</p>
      </div>
      <div className="d04-card d04-key in"><b>1990s =</b> {NET.key.join(" + ")}</div>
      <Char p="bulb" className="d04-nchar in-r" />
      <Footer className="d04-ftr" />
    </>
  );
};

const Compare = () => {
  const [side, setSide] = useState<"cloud" | "edge">("cloud");
  return (
    <>
      <Header no="04" title="Development of IT and Social Transformation" className="d04-hdr" />
      <div className="d04-title left in"><h2>{COMPARE.title}</h2><span className="d04-chip y">{COMPARE.subtitle}</span></div>
      <div className="d04-toggle in">
        <button className={cx(side === "cloud" && "act")} onClick={() => setSide("cloud")}><Server size={30} /> Cloud</button>
        <button className={cx(side === "edge" && "act")} onClick={() => setSide("edge")}><Cpu size={30} /> Edge</button>
      </div>
      <div key={side} className={cx("d04-card d04-side in-s", side)}>
        {COMPARE.rows.map((r) => (
          <p key={r.label}><span className="d04-chip s">{r.label}</span>{side === "cloud" ? r.cloud : r.edge}</p>
        ))}
        <p className="d04-rule">{side === "cloud" ? COMPARE.ruleCloud : COMPARE.ruleEdge}</p>
      </div>
      <div className="d04-card d04-qz in" style={{ ["--d" as string]: "200ms" }}><span className="d04-chip n">Quick check</span><Quiz className="d04-quiz" /></div>
      <Char p="thinking" className="d04-qchar in-r" />
      <Footer className="d04-ftr" />
    </>
  );
};

const End = () => (
  <>
    <div className="d04-etitle in"><h2>{END.title}</h2><span className="d04-chip n big">{END.subtitle}</span></div>
    <div className="d04-qrs">{END.qrs.map((_, i) => <QR key={i} i={i} className="d04-card d04-qr in-s" />)}</div>
    <Char p="thumbs_wink" className="d04-echar in-l" />
    <div className="d04-card d04-exitc in"><ExitTicket /></div>
    <p className="d04-comm">{BRAND.community}</p>
    <Footer className="d04-ftr" />
  </>
);

export const D04: SlideDef[] = [
  { title: "Cover", steps: 0, C: Cover },
  { title: "The Big Story of IT", steps: 1, C: Timeline },
  { title: "1990s: Internet + Web", steps: 0, C: Concept },
  { title: "Cloud vs Edge", steps: 0, C: Compare },
  { title: "Official Accounts", steps: 0, C: End },
];
