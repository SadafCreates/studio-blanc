import Reveal from './Reveal';
import { lookbook } from '../data/products';
import './Lookbook.css';

export default function Lookbook() {
  return (
    <section className="section lookbook">
      <Reveal>
        <p className="eyebrow">Lookbook</p>
        <h2 className="section-heading">Inside the studio</h2>
      </Reveal>
      <div className="lookbook-grid">
        {lookbook.map((item, i) => (
          <Reveal key={item.caption} className="lookbook-wrap">
            <div className="lookbook-tile" style={{ transitionDelay: `${i * 90}ms` }}>
              {item.image ? (
                <img src={item.image} alt={item.caption} />
              ) : (
                <span className="lookbook-placeholder">{item.caption}</span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
