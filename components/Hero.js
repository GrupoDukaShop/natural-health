import { CheckIcon } from "./Icons";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div>
          <div className="eyebrow">A 55-Page Digital Guide</div>
          <h1>
            Feel better, <em>naturally</em> — without the overwhelm.
          </h1>
          <p className="lead">
            A no-fluff guide to real food, herbal remedies, and everyday
            rituals that actually fit your life — not someone else&apos;s
            Pinterest board. Practical, gentle, and grounded in how your body
            actually works.
          </p>
          <div className="cta-row">
            <a href="#pricing" className="btn btn-primary">
              Get Instant Access — $19
            </a>
          </div>
          <div className="trust-row">
            <span>
              <CheckIcon />
              Instant PDF download
            </span>
            <span>
              <CheckIcon />
              55 pages, 10 chapters
            </span>
            <span>
              <CheckIcon />
              Read on any device
            </span>
          </div>
        </div>
        <div className="book-stage">
          <div className="book-mock">
            <div className="book-spine-shadow" />
            <img src="/cover.jpg" alt="The Natural Health Guide ebook cover" />
            <div className="book-pages" />
            <div className="badge-float">
              55
              <br />
              PAGES
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
