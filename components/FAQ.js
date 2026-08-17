const faqs = [
  {
    q: "What format is the guide in?",
    a: "It's an instant-download PDF (55 pages). You'll get a download link right after checkout, and it works on your phone, tablet, e-reader, or computer — no app required.",
    open: true,
  },
  {
    q: "Is this a substitute for medical advice?",
    a: "No. This guide is educational and meant to support everyday wellness and prevention. It's not a substitute for professional medical care, and we always recommend checking with your doctor before starting any new remedy — especially if you're pregnant, nursing, or managing a health condition.",
  },
  {
    q: "I'm brand new to natural health. Is this too advanced?",
    a: "Not at all — it's written for beginners, with zero jargon and no assumed knowledge. Each chapter builds gradually, and you can also skip straight to whatever topic you need most.",
  },
  {
    q: "How is this different from free blog posts?",
    a: "Blogs are scattered, often contradictory, and cluttered with ads. This guide organizes everything into one clear, sequenced resource you can actually finish — with a 30-day plan to put it into practice.",
  },
  {
    q: "What if I'm not happy with it?",
    a: "You're covered by a 30-day money-back guarantee. If it's not useful to you, just email us for a full refund — no forms, no hassle.",
  },
];

export default function FAQ() {
  return (
    <section className="faq">
      <div className="wrap">
        <h2>Questions, answered</h2>
        {faqs.map((item) => (
          <details key={item.q} open={item.open}>
            <summary>
              {item.q} <span className="plus">+</span>
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
