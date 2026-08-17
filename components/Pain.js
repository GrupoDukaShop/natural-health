import { TriangleIcon, ClockIcon, StarIcon } from "./Icons";

const painPoints = [
  {
    icon: TriangleIcon,
    title: "Too much conflicting advice",
    text: "One expert says cut carbs, the next says eat more. You're left guessing what's actually true for your body.",
  },
  {
    icon: ClockIcon,
    title: "No time for complicated routines",
    text: "10-step morning rituals and hour-long meal preps aren't realistic. You need things that fit an actual life.",
  },
  {
    icon: StarIcon,
    title: "Products that cost a fortune",
    text: "Trendy supplements and $12 smoothies add up fast — and most of them aren't doing what the label promises.",
  },
];

export default function Pain() {
  return (
    <section className="pain">
      <div className="wrap">
        <div className="eyebrow" style={{ color: "var(--gold-light)" }}>
          Sound familiar?
        </div>
        <h2>
          You&apos;ve tried to &quot;get healthy&quot; before.
          <br />
          It just didn&apos;t stick.
        </h2>
        <p className="sub">
          Between conflicting advice, expensive supplements, and wellness
          trends that change every six months, it&apos;s no wonder natural
          health feels complicated. It doesn&apos;t have to be.
        </p>
        <div className="pain-grid">
          {painPoints.map(({ icon: Icon, title, text }) => (
            <div className="pain-card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="pain-arrow">↓ There&apos;s a simpler way ↓</div>
      </div>
    </section>
  );
}
