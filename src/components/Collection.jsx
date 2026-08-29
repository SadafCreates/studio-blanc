import Reveal from './Reveal';
import { collection } from '../data/products';
import './Collection.css';

export default function Collection() {
  return (
    <section className="section collection" id="collection">
      <Reveal>
        <p className="eyebrow">The Edit</p>
        <h2 className="section-heading">Currently in the studio</h2>
      </Reveal>

      <div className="collection-grid">
        {collection.map((item, i) => (
          <Reveal key={item.num} className="product-wrap">
            <div className="product-card" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="product-photo">
                {item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : (
                  <span className="product-placeholder">{item.num}</span>
                )}
              </div>
              <div className="product-info">
                <span className="product-category">{item.category}</span>
                <h3 className="product-name">{item.name}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
