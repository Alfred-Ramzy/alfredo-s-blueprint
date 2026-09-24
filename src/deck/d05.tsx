import "./d05.css";
import { COVER, TIMELINE, NET, COMPARE, END, BRAND } from "./content";
import { Char, Logo, Motto, QR, Quiz, GlobeNet, StageIcon, PointIcon, Socials, ExitTicket, Server, Cpu, cx, type SlideDef } from "./shared";

const Top = ({ n }: { n: string }) => (
  <div className="d05-top g"><b>{n}</b><span>UNIT 1</span><span className="d05-dot" />Lesson 1 · Development of IT and Social Transformation<span className="d05-sp" /><Motto /></div>
);
const Bot = () => (
  <div className="d05-bot g"><Logo h={36} /><span>{BRAND.program} · {BRAND.slogan}</span><span className="d05-sp" /><span>{BRAND.phone}</span><span>{BRAND.web}</span><Socials s={22} /></div>
);
const Bg = () => (<><i className="d05-blob a" /><i className="d05-blob b" /><i className="d05-blob c" /></>);

const Cover = () => (
  <>
    <Bg />
    <div className="d05-ccard g in-s">
      <div className="d05-cun"><span>{COVER.unit}</span><span className="d05-les">{COVER.lesson}</span></div>
      <h1>{COVER.titleA} <em>{COVER.titleB}</em> {COVER.titleC}</h1>
      <div className="d05-crow"><span className="g pill">{COVER.workbook}</span><span className="g pill">{BRAND.program}</span><span className="g pill">{BRAND.grade}</span></div>
    </div>
    <Char p="welcome" className="d05-cchar in-r" />
    <div className="d05-cbrand"><Logo h={72} /><span>{BRAND.slogan}</span><Motto /></div>
  </>
);

const ORB = [[140, 560], [470, 380], [860, 320], [1250, 380], [1580, 560]] as const;
const Timeline = ({ step }: { step: number }) => {
  const s = TIMELINE.stages[step]!;
  return (
    <>
      <Bg /><Top n="02" />
      <h2 className="d05-h in">{TIMELINE.title}<small>{TIMELINE.subtitle}</small></h2>
      <svg className="d05-arc" viewBox="0 0 1920 1080"><path d="M200 640 Q960 180 1720 640" /></svg>
      {TIMELINE.stages.map((st, i) => (
        <div key={st.key} className={cx("d05-orb g in-s", i === step && "act", i < step && "past")} style={{ left: ORB[i]![0], top: ORB[i]![1], ["--d" as string]: `${i * 80}ms` }}>
          <StageIcon k={st.key} size={44} /><b>{st.name}</b><small>{st.era}</small>
        </div>
      ))}
      <div key={step} className="d05-det g in">
        <span className="d05-era">{s.era}</span><h3>{s.line}</h3><p>{s.detail}</p>
      </div>
      <Char p="tablet_code" className="d05-tchar in-l" />
      <Bot />
    </>
  );
};

const Concept = ({ step }: { step: number }) => (
  <>
    <Bg /><Top n="03" />
    <h2 className="d05-h in">{NET.title}<small>{NET.subtitle}</small></h2>
    <div className="d05-gl g in-s"><GlobeNet stroke="rgba(255,255,255,.85)" size={400} /></div>
    {NET.points.map((p, i) => (
      <div key={p.key} className={cx("d05-pc g rv", "p" + i, step >= i && "on")}>
        <span><PointIcon k={p.key} size={30} /></span>
        <h3>{p.head}</h3><p>{p.body}</p>
      </div>
    ))}
    <Char p="robot_present" className="d05-nchar in-r" />
    <Bot />
  </>
);

const Compare = () => (
  <>
    <Bg /><Top n="04" />
    <h2 className="d05-h in">{COMPARE.title}<small>{COMPARE.subtitle}</small></h2>
    <div className="d05-panes">
      {(["cloud", "edge"] as const).map((k, j) => (
        <section key={k} className={cx("g in", k)} style={{ ["--d" as string]: `${j * 120}ms` }}>
          <header>{k === "cloud" ? <Server size={38} /> : <Cpu size={38} />} {k === "cloud" ? "Cloud Computing" : "Edge Computing"}</header>
          {COMPARE.rows.map((r) => <p key={r.label}><small>{r.label}</small>{k === "cloud" ? r.cloud : r.edge}</p>)}
        </section>
      ))}
    </div>
    <div className="d05-qz g in" style={{ ["--d" as string]: "260ms" }}><Quiz className="d05-quiz" /></div>
    <Char p="read_paper" className="d05-qchar in-r" />
    <Bot />
  </>
);

const End = () => (
  <>
    <Bg />
    <div className="d05-epanel g in-s">
      <h2>{END.title}</h2>
      <span className="d05-sub">{END.subtitle}</span>
      <div className="d05-qrs">{END.qrs.map((_, i) => <QR key={i} i={i} className="d05-qr g" />)}</div>
      <p className="d05-comm">{BRAND.community}</p>
      <ExitTicket className="d05-exit" />
    </div>
    <Char p="heart" className="d05-echar in-r" />
    <Bot />
  </>
);

export const D05: SlideDef[] = [
  { title: "Cover", steps: 0, C: Cover },
  { title: "The Big Story of IT", steps: 4, C: Timeline },
  { title: "1990s: Internet + Web", steps: 3, C: Concept },
  { title: "Cloud vs Edge", steps: 0, C: Compare },
  { title: "Official Accounts", steps: 0, C: End },
];
