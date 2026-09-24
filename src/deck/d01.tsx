import "./d01.css";
import { BookOpen } from "lucide-react";
import { COVER, TIMELINE, NET, COMPARE, END, BRAND } from "./content";
import { Header, Footer, Char, Logo, Motto, QR, Quiz, ExitTicket, GlobeNet, StageIcon, PointIcon, Socials, cx, type SlideDef } from "./shared";

const Cover = () => (
  <>
    <div className="d01-wave" />
    <div className="d01-brush" />
    <Char p="bulb" className="d01-cchar in-l" />
    <Motto className="d01-cmotto" />
    <div className="d01-cbody">
      <span className="d01-unit in-s">{COVER.unit}</span>
      <div className="d01-tcard in" style={{ ["--d" as string]: "120ms" }}>
        <div className="d01-lno"><small>Lesson</small><b>{COVER.lessonNo}</b></div>
        <h1>
          {COVER.titleA}<br />
          <mark>{COVER.titleB}</mark><br />
          {COVER.titleC}
        </h1>
      </div>
      <div className="d01-wb in" style={{ ["--d" as string]: "240ms" }}><BookOpen size={44} /> {COVER.workbook}</div>
      <div className="d01-chips in" style={{ ["--d" as string]: "340ms" }}>
        <span>{BRAND.program}</span><span>{BRAND.grade}</span>
      </div>
    </div>
    <div className="d01-cfoot">
      <Logo h={70} />
      <span className="ftr-sep" />
      <span>{BRAND.slogan}<small>{BRAND.author}</small></span>
    </div>
  </>
);

const Timeline = ({ step }: { step: number }) => (
  <>
    <Header no="02" title="Development of IT and Social Transformation" />
    <div className="d01-title">
      <h2><mark>{TIMELINE.title}</mark></h2>
      <span className="d01-pill">{TIMELINE.subtitle}</span>
    </div>
    <ol className="d01-tl">
      {TIMELINE.stages.map((s, i) => (
        <li key={s.key} className="in" style={{ ["--d" as string]: `${i * 90}ms` }}>
          <span className="d01-node"><StageIcon k={s.key} size={54} /><i>{s.n}</i></span>
          <h3>{s.name}</h3>
          <span className="d01-era">{s.era}</span>
          <p className={cx("rv", step >= 1 && "on")}>{s.detail}</p>
        </li>
      ))}
    </ol>
    <div className={cx("d01-pattern rv", step >= 2 && "on")}>
      <b>Development pattern</b>
      {TIMELINE.pattern.map((p, i) => <span key={p}>{p}{i < 4 ? " →" : ""}</span>)}
    </div>
    <Char p="laptop" className="d01-tchar in-l" />
    <Footer />
  </>
);

const Concept = ({ step }: { step: number }) => (
  <>
    <Header no="03" title="Development of IT and Social Transformation" />
    <div className="d01-title left">
      <h2><mark>{NET.title}</mark></h2>
      <span className="d01-pill">{NET.subtitle}</span>
    </div>
    <Char p="point_board" className="d01-nchar in-l" />
    <div className="d01-globe in-s"><GlobeNet stroke="#ffffff" size={470} /></div>
    <div className="d01-points">
      {NET.points.map((p, i) => (
        <div key={p.key} className={cx("d01-pt rv", step >= i && "on")}>
          <span className="d01-pti"><PointIcon k={p.key} /></span>
          <div><h3>{p.head}</h3><p>{p.body}</p></div>
        </div>
      )).slice(0, 4)}
    </div>
    <div className={cx("d01-key rv", step >= 4 && "on")}>1990s = {NET.key.join(" + ")}</div>
    <Footer />
  </>
);

const Compare = () => (
  <>
    <Header no="04" title="Development of IT and Social Transformation" />
    <div className="d01-title left">
      <h2><mark>{COMPARE.title}</mark></h2>
      <span className="d01-pill">{COMPARE.subtitle}</span>
    </div>
    <table className="d01-table in">
      <thead><tr><th /><th className="c">Cloud Computing</th><th className="e">Edge Computing</th></tr></thead>
      <tbody>
        {COMPARE.rows.map((r) => (
          <tr key={r.label}><th>{r.label}</th><td>{r.cloud}</td><td>{r.edge}</td></tr>
        ))}
      </tbody>
    </table>
    <div className="d01-qwrap in" style={{ ["--d" as string]: "200ms" }}>
      <span className="d01-qk">Your decision</span>
      <Quiz className="d01-quiz" />
    </div>
    <Char p="thinking" className="d01-qchar in-r" />
    <Footer />
  </>
);

const End = () => (
  <>
    <div className="d01-endbg" />
    <Char p="two_thumbs" className="d01-echar in-l" />
    <div className="d01-epanel in-s">
      <h2><mark>{END.title}</mark></h2>
      <span className="d01-pill big">{END.subtitle}</span>
      <div className="d01-qrs">{END.qrs.map((_, i) => <QR key={i} i={i} className="d01-qr" />)}</div>
      <p className="d01-comm">{BRAND.community}</p>
      <ExitTicket className="d01-exit" />
    </div>
    <div className="d01-efoot">
      <Logo h={58} />
      <span className="ftr-sep" />
      <span>{BRAND.slogan}</span>
      <span className="hdr-sp" />
      <span>{BRAND.phone}</span><span className="ftr-sep" /><span>{BRAND.web}</span><span className="ftr-sep" />
      <Socials s={28} />
      <span className="ftr-sep" />
      <Motto />
    </div>
  </>
);

export const D01: SlideDef[] = [
  { title: "Cover", steps: 0, C: Cover },
  { title: "The Big Story of IT", steps: 2, C: Timeline },
  { title: "1990s: Internet + Web", steps: 4, C: Concept },
  { title: "Cloud vs Edge", steps: 0, C: Compare },
  { title: "Official Accounts", steps: 0, C: End },
];
