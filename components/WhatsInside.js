import { StarIcon } from "./Icons";

const chapters = [
  {
    num: "01",
    title: "The Foundations of Natural Health",
    text: "The mindset shift that makes everything else easier — and why perfection was never the goal.",
  },
  {
    num: "02",
    title: "Nourishing From Within",
    text: "Simple, sustainable nutrition principles — no meal plans, no calorie counting.",
  },
  {
    num: "03",
    title: "The Healing Garden",
    text: "A beginner's guide to herbalism: 8 common herbs, what they're for, and how to use them safely.",
  },
  {
    num: "04",
    title: "Aromatherapy & Essential Oils",
    text: "Safe, simple blends for sleep, focus, and easy breathing — plus dilution guidelines.",
  },
  {
    num: "05",
    title: "Remedies for Everyday Ailments",
    text: "Gentle, traditional approaches to headaches, colds, stress, and poor sleep.",
  },
  {
    num: "06",
    title: "Gentle Detox & Cleansing",
    text: "What your body already does for you — and how to actually support it (no juice fasts).",
  },
  {
    num: "07",
    title: "Mind-Body Balance",
    text: "Breathwork, beginner meditation, and gentle yoga poses you can do at home today.",
  },
  {
    num: "08",
    title: "Natural Beauty & Skincare",
    text: "DIY masks, natural ingredient swaps, and what to actually look for on a label.",
  },
  {
    num: "09",
    title: "Creating a Non-Toxic Home",
    text: "Easy, affordable swaps for cleaner air, water, and everyday products.",
  },
  {
    num: "10",
    title: "Preventive Wellness for Life",
    text: "The non-negotiable habits that matter more than any supplement — made sustainable.",
  },
];

export default function WhatsInside() {
  return (
    <section className="inside" id="inside">
      <div className="wrap">
        <div className="inside-head">
          <div className="eyebrow">Table of Contents</div>
          <h2>Ten chapters. One calmer, healthier life.</h2>
          <p>
            Read start to finish, or jump straight to the chapter you need
            tonight.
          </p>
        </div>
        <div className="chapter-list">
          {chapters.map((c) => (
            <div className="chapter-item" key={c.num}>
              <div className="chapter-num">{c.num}</div>
              <div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </div>
          ))}

          <div className="bonus-row">
            <StarIcon />
            <div>
              <h3>Bonus: The 30-Day Natural Health Challenge</h3>
              <p>
                A week-by-week plan that turns every chapter into an actual
                daily habit — plus a quick-reference herb &amp; remedy chart
                you&apos;ll keep coming back to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
