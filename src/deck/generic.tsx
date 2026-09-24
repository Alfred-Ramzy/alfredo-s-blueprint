import { COVER, TIMELINE, NET, COMPARE, END, BRAND } from "./content";
import { Char, Logo, Motto, QR, Quiz, GlobeNet, StageIcon, PointIcon, Socials, ExitTicket, Server, Cpu, cx, type SlideDef } from "./shared";

type Poses = { cover: string; time: string; net: string; cmp: string; end: string };

/** Shared semantic structure; each direction restyles it fully via its own CSS prefix. */
export function buildDeck(p: string, poses: Poses): SlideDef[] {
  const Top = ({ n }: { n: string }) => (
    <div className={`${p}-top`}><b>{n}</b><span>UNIT 1 · Lesson 1</span><span className={`${p}-sp`} /><Motto /></div>
  );
  const Bot = () => (
    <div className={`${p}-bot`}><Logo h={36} /><span>{BRAND.program} · {BRAND.slogan}</span><span className={`${p}-sp`} /><span>{BRAND.phone}</span><span>{BRAND.web}</span><Socials s={22} /></div>
  );

  const Cover = () => (
    <>
      <i className={`${p}-deco a`} /><i className={`${p}-deco b`} />
      <div className={`${p}-cbox in`}>
        <div className={`${p}-cun`}><span>{COVER.unit}</span><span>{COVER.lesson}</span></div>
        <h1>{COVER.titleA} <em>{COVER.titleB}</em> {COVER.titleC}</h1>
        <span className={`${p}-wb`}>{COVER.workbook}</span>
        <span className={`${p}-gr`}>{BRAND.program} · {BRAND.grade}</span>
      </div>
      <Char p={poses.cover} className={`${p}-cchar in-r`} />
      <div className={`${p}-cbrand`}><Logo h={64} /><span>{BRAND.slogan}</span></div>
    </>
  );

  const Timeline = ({ step }: { step: number }) => {
    const s = TIMELINE.stages[step]!;
    return (
      <>
        <Top n="02" />
        <h2 className={`${p}-h in`}>{TIMELINE.title}<small>{TIMELINE.subtitle}</small></h2>
        <div className={`${p}-track`}>
          {TIMELINE.stages.map((st, i) => (
            <div key={st.key} className={cx(`${p}-st in`, i === step && "act", i < step && "past")} style={{ ["--d" as string]: `${i * 80}ms` }}>
              <span className={`${p}-n`}>{st.n}</span>
              <StageIcon k={st.key} size={46} /><b>{st.name}</b><small>{st.era}</small>
            </div>
          ))}
        </div>
        <div key={step} className={`${p}-det in`}>
          <span>{s.era}</span><h3>{s.line}</h3><p>{s.detail}</p>
        </div>
        <div className={`${p}-pat`}>{TIMELINE.pattern.map((x) => <span key={x}>{x}</span>)}<em>{TIMELINE.patternTail}</em></div>
        <Char p={poses.time} className={`${p}-tchar in-l`} />
        <Bot />
      </>
    );
  };

  const Concept = ({ step }: { step: number }) => (
    <>
      <Top n="03" />
      <h2 className={`${p}-h in`}>{NET.title}<small>{NET.subtitle}</small></h2>
      <div className={`${p}-gl in-s`}><GlobeNet size={380} /></div>
      <div className={`${p}-pts`}>
        {NET.points.map((pt, i) => (
          <div key={pt.key} className={cx(`${p}-pc rv`, step >= i && "on")}>
            <span><PointIcon k={pt.key} size={30} /></span>
            <div><h3>{pt.head}</h3><p>{pt.body}</p></div>
          </div>
        ))}
      </div>
      <div className={`${p}-keys`}>{NET.key.map((k) => <span key={k}>{k}</span>)}</div>
      <Char p={poses.net} className={`${p}-nchar in-r`} />
      <Bot />
    </>
  );

  const Compare = () => (
    <>
      <Top n="04" />
      <h2 className={`${p}-h in`}>{COMPARE.title}<small>{COMPARE.subtitle}</small></h2>
      <table className={`${p}-tbl in`}>
        <thead><tr><th /><th><Server size={30} /> Cloud</th><th><Cpu size={30} /> Edge</th></tr></thead>
        <tbody>{COMPARE.rows.map((r) => <tr key={r.label}><th>{r.label}</th><td>{r.cloud}</td><td>{r.edge}</td></tr>)}</tbody>
      </table>
      <div className={`${p}-qz in`} style={{ ["--d" as string]: "200ms" }}><Quiz className={`${p}-quiz`} /></div>
      <Char p={poses.cmp} className={`${p}-qchar in-r`} />
      <Bot />
    </>
  );

  const End = () => (
    <>
      <i className={`${p}-deco a`} />
      <h2 className={`${p}-eh in`}>{END.title}<small>{END.subtitle}</small></h2>
      <div className={`${p}-qrs`}>{END.qrs.map((_, i) => <QR key={i} i={i} className={`${p}-qr in`} />)}</div>
      <p className={`${p}-comm`}>{BRAND.community}</p>
      <ExitTicket className={`${p}-exit`} />
      <Char p={poses.end} className={`${p}-echar in-r`} />
      <Bot />
    </>
  );

  return [
    { title: "Cover", steps: 0, C: Cover },
    { title: "The Big Story of IT", steps: 4, C: Timeline },
    { title: "1990s: Internet + Web", steps: 3, C: Concept },
    { title: "Cloud vs Edge", steps: 0, C: Compare },
    { title: "Official Accounts", steps: 0, C: End },
  ];
}
