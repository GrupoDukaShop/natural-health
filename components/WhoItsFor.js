import { CheckIcon, XIcon } from "./Icons";

const yesItems = [
  "You want practical wellness habits that fit a real, busy life.",
  "You're curious about herbs and natural remedies but don't know where to start.",
  "You're tired of extreme diets and want something sustainable.",
  "You'd rather read one clear guide than fifty scattered blog posts.",
];

const noItems = [
  "You're managing a diagnosed medical condition and need clinical guidance (please see a doctor — this guide is educational, not medical advice).",
  "You're looking for a strict, done-for-you meal or workout plan.",
  "You want an overnight miracle fix rather than sustainable habits.",
];

export default function WhoItsFor() {
  return (
    <section className="who">
      <div className="wrap">
        <div className="who-card yes">
          <h3>This guide is for you if...</h3>
          <ul>
            {yesItems.map((item) => (
              <li key={item}>
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="who-card no">
          <h3>This might not be for you if...</h3>
          <ul>
            {noItems.map((item) => (
              <li key={item}>
                <XIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
