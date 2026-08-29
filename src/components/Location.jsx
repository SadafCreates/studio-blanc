import Reveal from './Reveal';
import './Location.css';

export default function Location() {
  return (
    <section className="section location" id="visit">
      <div className="location-grid">
        <Reveal>
          <p className="eyebrow">Visit</p>
          <h2 className="section-heading">Multan, Punjab</h2>
          <p className="location-text">
            By appointment and Saturday walk-ins.<br />
            Details on request.
          </p>
          <a href="#" className="btn btn-outline location-btn" onClick={(e) => e.preventDefault()}>
            Get in touch
          </a>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Hours</p>
          <ul className="hours-list">
            <li><span>Tue – Fri</span><span>12:00 – 8:00</span></li>
            <li><span>Saturday</span><span>11:00 – 9:00</span></li>
            <li><span>Sun – Mon</span><span>Closed</span></li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
