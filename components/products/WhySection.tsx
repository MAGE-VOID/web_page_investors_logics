import type { CSSProperties } from "react";

const publicContents = [
  ["Compiled .ex5", "MT5"],
  ["Installation guide", "Public"],
  ["License conditions", "Confirm"],
  ["Risk information", "Public"],
  ["Support enquiry", "Email"],
];

const enquiryStages = [1, .72, .48, .26];

export default function WhySection() {
  return (
    <section className="pw-why pw-wrap" id="why" aria-labelledby="why-title" data-section="why">
      <h2 className="pw-h2" id="why-title">Blue Boost, with clear boundaries.</h2>
      <div className="pw-why-grid">
        <article className="pw-why-card" data-pw-why="files" data-reveal>
          <div className="pw-why-vis" aria-hidden="true">
            <div className="pw-files">
              {publicContents.map(([label, detail], index) => (
                <div key={label} style={{ transitionDelay: (index * .12).toFixed(2) + "s" }}>{label}<b>{detail}</b></div>
              ))}
              <div className="tot" style={{ transitionDelay: ".70s" }}>Strategy &amp; source<b>Private</b></div>
            </div>
          </div>
          <h3>Compiled software.</h3>
          <p>Compiled .ex5 access. Strategy and source stay private.</p>
        </article>
        <article className="pw-why-card" data-pw-why="months" data-reveal>
          <div className="pw-why-vis" aria-hidden="true">
            <div className="pw-months"><div><span className="m">Proposed rental</span><div className="paid">90<small>days of access</small></div></div></div>
            <div className="pw-cal">{Array.from({ length: 12 }, (_, index) => <i key={index} className={index < 3 ? "on" : undefined} />)}</div>
          </div>
          <h3>Access, at your pace.</h3>
          <p>Choose a rental period. Confirm the terms.</p>
        </article>
        <article className="pw-why-card" data-pw-why="funnel" data-reveal>
          <div className="pw-why-vis" aria-hidden="true">
            <div className="pw-fun">
              {enquiryStages.map((width, index) => <div key={index}><span style={{ "--w": width } as CSSProperties} /><b>0{index + 1}</b></div>)}
              <small>Understand the product → review your setup → choose access → enquire. No live orders or payment is processed here.</small>
            </div>
          </div>
          <h3>Clarity before commitment.</h3>
          <p>Read the guide. Start in a demo account.</p>
        </article>
      </div>
    </section>
  );
}
