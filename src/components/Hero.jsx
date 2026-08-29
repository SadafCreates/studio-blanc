import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="eyebrow hero-eyebrow">Est. 2026 — Multan</p>
        <h1 className="hero-title">
          <span className="hero-word hero-word-left">STUDIO</span>
          <br />
          <span className="hero-word hero-word-right">BLANC</span>
        </h1>
        <div className="hero-rule">
          <span className="hero-rule-line hero-rule-line-left" />
          <span className="hero-rule-dot" />
          <span className="hero-rule-line hero-rule-line-right" />
        </div>
        <p className="hero-tagline">A curated edit. Nothing extra.</p>
        <div className="hero-actions">
          <a href="#collection" className="btn btn-black">View the edit</a>
          <a href="#visit" className="btn btn-outline">Visit us</a>
        </div>
      </div>
    </section>
  );
}
