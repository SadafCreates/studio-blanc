import Reveal from './Reveal';
import './Philosophy.css';

export default function Philosophy() {
  return (
    <section className="section philosophy">
      <div className="philosophy-grid">
        <Reveal>
          <p className="eyebrow">The Idea</p>
          <h2 className="section-heading">Less, chosen well.</h2>
        </Reveal>
        <Reveal className="philosophy-copy-wrap">
          <p className="philosophy-copy">
            Studio Blanc doesn't stock everything — it stocks the right
            things. Every piece is chosen for how it's made, not how fast
            it can be replaced. No seasonal clutter, no filler. Just an
            edit worth returning to.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
