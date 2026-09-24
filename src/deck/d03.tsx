import "./d03.css";
import { COVER, TIMELINE, NET, COMPARE, END, BRAND } from "./content";
import { Char, Logo, Motto, QR, Quiz, GlobeNet, StageIcon, PointIcon, Socials, ExitTicket, Server, Cpu, cx, type SlideDef } from "./shared";

const Bar = ({ n, t }: { n: string; t: string }) => (
  <div className="d03-bar"><b>{n}</b><span>UNIT 1 · Lesson 1</span><i /> <span className="t">{t}</span><span className="d03-sp" /><Motto /></div>
);
const Base = () => (
  <div className="d03-base"><Logo h={38} /><span>{BRAND.program} · {BRAND.slogan}</span><span className="d03-sp" /><span>{BRAND.phone}</span><span>{BRAND.web}</span><Socials s={22} /></div>
);

const Cover = () => (
  <>
    <div className="d03-spot" />
    <div className="d03-ring in-f" />
    <Char p="laptop_up" className="d03-cchar in" />
    <div className="d03-ctext">
      <span className="d03-unit in">{COVER.unit}</span>
      <span className="d03-les in" style={{ ["--d" as string]: "120ms" }}>{COVER.lesson}</span>
      <h1 className="in" style={{ ["--d" as string]: "220ms" }}>{COVER.titleA}<br /><em>{COVER.titleB}</em><br />{COVER.titleC}</h1>
      <p className="in" style={{ ["--d" as string]: "340ms" }}>{COVER.workbook} <i /> {BRAND.program} <i /> {BRAND.grade}</p>
    </div>
    <div className="d03-cbase"><Logo h={64} /><span className="d03-slog">{BRAND.slogan}</span><span className="d03-sp" /><Motto /></div>
  </>
);

const Timeline = ({ step }: { step: number }) => {
  const s = TIMELINE.stages[step]!;
  return (
    <>
      <Bar n="02" t={TIMELINE.subtitle} />
      <h2 className="d03-h in">{TIMELINE.title}</h2>
      <div className="d03-rail">
        {TIMELINE.stages.map((st, i) => (
          <div key={st.key} className={cx("d03-node", i <= step && "lit", i === step && "cur")}>
            <span><StageIcon k={st.key} size={46} /></span>
            <b>{st.name}</b><small>{st.era}</small>
          </div>
        ))}
      </div>
      <div key={step} className="d03-focus in-s">
        <span className="d03-era">{s.era}</span>
        <h3>{s.line}</h3>
        <p>{s.detail}</p>
      </div>
      <p className="d03-pat">{TIMELINE.pattern.join("  ›  ")}</p>
      <Char p="desk" className="d03-tchar in-r" />
      <Base />
    </>
  );
};

const Concept = ({ step }: { step: number }) => (
  <>
    <Bar n="03" t={NET.subtitle} />
    <div className="d03-gwrap in-f"><GlobeNet stroke="rgba(120,170,255,.8)" size={860} /></div>
    <div className="d03-ntext">
      <h2 className="d03-h in">1990s<br /><em>Internet + World Wide Web</em></h2>
      {NET.points.map((p, i) => (
        <div key={p.key} className={cx("d03-np rv", step >= i && "on")}>
          <PointIcon k={p.key} size={34} />
          <div><h3>{p.head}</h3><p>{p.body}</p></div>
        </div>
      ))}
    </div>
    <Char p="headset" className="d03-nchar in-r" />
    <Base />
  </>
);

const Compare = () => (
  <>
    <Bar n="04" t={COMPARE.subtitle} />
    <h2 className="d03-h center in">Cloud Computing <em>vs</em> Edge Computing</h2>
    <div className="d03-split">
      <section className="d03-cl in-l">
        <header><Server size={40} /> Cloud <small>remote</small></header>
        {COMPARE.rows.map((r) => <p key={r.label}><b>{r.label}</b>{r.cloud}</p>)}
      </section>
      <section className="d03-ed in-r">
        <header><Cpu size={40} /> Edge <small>nearby</small></header>
        {COMPARE.rows.map((r) => <p key={r.label}><b>{r.label}</b>{r.edge}</p>)}
      </section>
    </div>
    <div className="d03-q in" style={{ ["--d" as string]: "250ms" }}><Quiz className="d03-quiz" /></div>
    <Char p="stop" className="d03-qchar in" />
    <Base />
  </>
);

const End = () => (
  <>
    <div className="d03-spot e" />
    <Char p="cheer" className="d03-echar in" />
    <div className="d03-etext">
      <h2 className="d03-h in">{END.title}</h2>
      <span className="d03-sub in">{END.subtitle}</span>
      <div className="d03-qrs">{END.qrs.map((_, i) => <QR key={i} i={i} className="d03-qr in" />)}</div>
      <p className="d03-comm">{BRAND.community}</p>
      <ExitTicket className="d03-exit" />
    </div>
    <Base />
  </>
);

export const D03: SlideDef[] = [
  { title: "Cover", steps: 0, C: Cover },
  { title: "The Big Story of IT", steps: 4, C: Timeline },
  { title: "1990s: Internet + Web", steps: 3, C: Concept },
  { title: "Cloud vs Edge", steps: 0, C: Compare },
  { title: "Official Accounts", steps: 0, C: End },
];
