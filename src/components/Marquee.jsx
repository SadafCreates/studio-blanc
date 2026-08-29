import './Marquee.css';

const ITEMS = ['Curated', 'Considered', 'One of a kind', 'No mass production', 'Made to last'];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
            <span className="marquee-dot">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
