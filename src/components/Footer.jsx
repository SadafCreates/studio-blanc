import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-title">STUDIO BLANC</p>
          <p className="footer-tagline">A curated edit. Nothing extra.</p>
        </div>
        <div className="footer-links">
          <a href="#" onClick={(e) => e.preventDefault()}>Instagram</a>
          <a href="#" onClick={(e) => e.preventDefault()}>WhatsApp</a>
        </div>
      </div>
      <p className="footer-credit">
        Design &amp; build by{' '}
        <a href="https://github.com/SadafCreates" target="_blank" rel="noopener">
          Sadaf
        </a>{' '}
        — a portfolio case study, 2026
      </p>
    </footer>
  );
}
