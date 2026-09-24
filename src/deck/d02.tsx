import "./d02.css";
import { COVER, TIMELINE, NET, COMPARE, END, BRAND } from "./content";
import { Char, LogoText, Motto, Quiz, GlobeNet, Socials, cx, type SlideDef } from "./shared";

const Mast = ({ n, label }: { n: string; label: string }) => (
  <div className="d02-mast">
    <LogoText className="d02-lg" />
    <span>UNIT 1 · Lesson 1</span>
    <span className="d02-sp" />
    <span>{label}</span>
    <b>{n}</b>
  </div>
);
const Colophon = () => (
  <div className="d02-colo">
    <span>{BRAND.program} — {BRAND.slogan}</span>
    <span className="d02-sp" />
    <span>{BRAND.phone}</span><span>{BRAND.web}</span><Socials s={24} />
  </div>
);

const Cover = () => (
  <>
    <div className="d02-yblock in-f" />
    <h1 className="d02-giant in">UNIT<br />ONE</h1>
    <Char p="glasses" className="d02-cchar in-r" />
    <div className="d02-cmeta in" style={{ ["--d" as string]: "150ms" }}>
      <span className="d02-kick">{COVER.lesson} · {COVER.workbook}</span>
      <h2>{COVER.titleA} <em>{COVER.titleB}</em> {COVER.titleC}</h2>
      <p>{BRAND.program} · {BRAND.grade}</p>
    </div>
    <div className="d02-cfoot">
      <LogoText />
      <span className="d02-rule" />
      <span className="d02-slog">{BRAND.slogan}</span>
      <span className="d02-sp" />
      <Motto />
    </div>
  </>
);

const Timeline = ({ step }: { step: number }) => (
  <>
    <Mast n="02" label="The Story" />
    <div className="d02-tl-head in">
      <span className="d02-kick">{TIMELINE.subtitle}</span>
      <h2>The Big Story of <em>Information Technology</em></h2>
      <p className="d02-pat">{TIMELINE.pattern.join(" → ")} <span>{TIMELINE.patternTail}.</span></p>
    </div>
    <ol className="d02-rows">
      {TIMELINE.stages.map((s, i) => (
        <li key={s.key} className={cx("in", i === step && "act")} style={{ ["--d" as string]: `${i * 70}ms` }}>
          <b>0{s.n}</b>
          <div><h3>{s.name}</h3><span>{s.era}</span></div>
          <p>{i === step ? s.detail : s.line}</p>
        </li>
      ))}
    </ol>
    <Char p="walk" className="d02-tchar in-l" />
    <p className="d02-soc">{TIMELINE.society}</p>
    <Colophon />
  </>
);

const Concept = ({ step }: { step: number }) => (
  <>
    <div className="d02-lpage">
      <GlobeNet className="d02-gl" stroke="rgba(255,255,255,.55)" size={760} />
      <span className="d02-kick y">{NET.subtitle}</span>
      <h2 className="d02-90">1990s</h2>
      <p className="d02-sub">Internet + World Wide Web</p>
      <blockquote className="in" style={{ ["--d" as string]: "200ms" }}>“Information could travel across countries and continents very quickly.”</blockquote>
    </div>
    <div className="d02-rpage">
      <Mast n="03" label="The Connection" />
      <div className="d02-cols">
        {NET.points.slice(0, 3).map((p, i) => (
          <article key={p.key} className={cx("rv", step >= i && "on")}>
            <h3>{p.head}</h3><p>{p.body}</p>
          </article>
        ))}
      </div>
      <aside className={cx("d02-side rv", step >= 3 && "on")}>
        <span className="d02-kick">{NET.points[3]!.head}</span>
        <p>{NET.points[3]!.body}</p>
      </aside>
      <Char p="phone" className="d02-nchar in-r" />
    </div>
  </>
);

const Compare = () => (
  <>
    <Mast n="04" label="The Debate" />
    <div className="d02-vs">
      <section className="in-l">
        <h2>Cloud</h2>
        <span className="d02-kick">Remote</span>
        <dl>{COMPARE.rows.map((r) => <div key={r.label}><dt>{r.label}</dt><dd>{r.cloud}</dd></div>)}</dl>
      </section>
      <span className="d02-vrule"><i>vs</i></span>
      <section className="in-r">
        <h2>Edge</h2>
        <span className="d02-kick">Nearby</span>
        <dl>{COMPARE.rows.map((r) => <div key={r.label}><dt>{r.label}</dt><dd>{r.edge}</dd></div>)}</dl>
      </section>
    </div>
    <div className="d02-qbar in" style={{ ["--d" as string]: "250ms" }}>
      <span className="d02-kick y">The question</span>
      <Quiz className="d02-quiz" labels={["Cloud", "Edge"]} />
    </div>
    <Char p="think_cloud" className="d02-qchar in" />
  </>
);

const End = () => (
  <>
    <Mast n="05" label="Index" />
    <div className="d02-etitle in">
      <span className="d02-kick">{END.subtitle}</span>
      <h2>All Our <em>Official</em> Accounts</h2>
    </div>
    <ol className="d02-idx">
      {END.qrs.map((q, i) => (
        <li key={q.key} className="in" style={{ ["--d" as string]: `${100 + i * 80}ms` }}>
          <img src={q.src} alt={q.label + " QR code"} />
          <span><b>0{i + 1}</b> {q.label}</span>
        </li>
      ))}
    </ol>
    <Char p="trophy" className="d02-echar in-r" />
    <div className="d02-last">
      <span className="d02-kick">Last word — exit ticket</span>
      <p>{END.exit}</p>
    </div>
    <p className="d02-comm">{BRAND.community}</p>
    <Colophon />
  </>
);

export const D02: SlideDef[] = [
  { title: "Cover", steps: 0, C: Cover },
  { title: "The Big Story of IT", steps: 4, C: Timeline },
  { title: "1990s: Internet + Web", steps: 3, C: Concept },
  { title: "Cloud vs Edge", steps: 0, C: Compare },
  { title: "Official Accounts", steps: 0, C: End },
];
