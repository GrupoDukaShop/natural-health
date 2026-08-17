import { CheckIcon, ShieldIcon } from "./Icons";

const features = [
  "Full 55-page PDF guide (10 chapters)",
  "Bonus 30-Day Natural Health Challenge",
  "Quick-reference herb & remedy chart",
  "Instant download, lifetime access",
  "Works on phone, tablet, computer & e-reader",
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="eyebrow">Get Started Today</div>
        <h2>One guide. One simple price. Yours for life.</h2>
        <p>
          No subscriptions, no upsells, no &quot;unlock chapter 6 for $9
          more.&quot; Just the complete guide, delivered instantly.
        </p>
        <div className="price-card">
          <div className="top-row">
            <div className="title">The Natural Health Guide</div>
            <div className="price-tag">
              <div className="amt">$19</div>
              <div className="per">one-time payment</div>
            </div>
          </div>
          <ul>
            {features.map((f) => (
              <li key={f}>
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>
          {/* TODO: point this at your real checkout (Stripe / Gumroad / Lemon Squeezy) */}
          <a href="#" className="btn btn-gold">
            Get Instant Access — $19
          </a>
          <div className="guarantee">
            <ShieldIcon />
            <p>
              <strong>30-Day Money-Back Guarantee</strong>
              Not the right fit? Email us within 30 days for a full,
              no-questions-asked refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
