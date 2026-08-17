const facts = [
  { label: "Chapters", value: "10", big: true },
  { label: "Pages", value: "55" },
  { label: "Reading time", value: "~2 hours" },
  { label: "Herbal remedies covered", value: "12+" },
  { label: "DIY recipes & rituals", value: "20+" },
  { label: "30-day action challenge", value: "1" },
];

export default function GuideFacts() {
  return (
    <section className="facts-section">
      <div className="wrap">
        <div className="facts-copy">
          <div className="eyebrow">What&apos;s Actually Inside</div>
          <h2>Everything labeled. Nothing hidden.</h2>
          <p>
            No upsells buried in chapter 3. No &quot;the real secret is in my
            $500 course.&quot; Just a complete, practical guide you read once
            and use for the rest of your life.
          </p>
          <p>
            Here&apos;s exactly what you&apos;re getting — read like a label,
            because we think wellness content should be as transparent as the
            food on your plate.
          </p>
        </div>
        <div className="facts-label">
          <div className="flt">Guide Facts</div>
          <div className="fsub">1 lifestyle change, self-paced</div>

          {facts.map((f, i) => (
            <div className={`facts-row ${f.big ? "big" : ""}`} key={f.label}>
              <span>{f.label}</span>
              <span className="val">{f.value}</span>
            </div>
          ))}

          <div className="facts-thick" />
          <div className="facts-row">
            <span>Fluff</span>
            <span className="val">0%</span>
          </div>
          <div className="facts-row">
            <span>Actionable steps</span>
            <span className="val">100%</span>
          </div>
          <div className="facts-note">
            Format: Instant-download PDF. Compatible with phone, tablet,
            computer, and e-reader. Contains no affiliate-stuffed product
            roundups.
          </div>
        </div>
      </div>
    </section>
  );
}
