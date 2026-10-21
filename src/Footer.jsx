import { Link } from "react-router-dom";
import './App.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="reference-footer">
      <div className="reference-footer-content">
        <div className="reference-footer-column">
          <h3>Overview</h3>
          <a href="/#markets">Stock indices</a>
          <a href="/#markets">Commodities</a>
          <a href="/#markets">Financial Market</a>
        </div>

        <div className="reference-footer-column">
          <h3>Company</h3>
         <Link to="/about">About</Link>
          <a href="/#packages">Packages</a>
          <Link to="/careers">Careers</Link>
        </div>

        <div className="reference-footer-column">
          <h3>Legal</h3>
          <a href="/#terms">Terms &amp; Conditions</a>
          <a href="/#privacy">Privacy &amp; Policy</a>
          <a href="/#contact">Contact</a>
        </div>

        <div className="reference-footer-column">
          <h3>Support</h3>
          <a href="/#documentation">Documentation</a>
        </div>

        <div className="reference-footer-column contact-column">
          <h3>Contact</h3>
          <a href="mailto:enquiry@bitstekadvisory.com">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z" fill="currentColor" />
              <path d="m4 6 8 6 8-6" fill="none" stroke="#424242" strokeWidth="1.5" />
            </svg>
            enquiry@bitstekadvisory.com
          </a>
        </div>
      </div>

      <div className="risk-warning">
        <span className="risk-warning-title">RISK WARNING</span>
        <p>
          Trading derivatives and leveraged products carries a high level of
          risk, including the risk of losing substantially more than your
          initial investment. It is not suitable for everyone. Before you
          make any decision in relation to a financial product you should
          obtain and consider our Product Disclosure Statement (PDS) and
          Financial Services Guide (FSG) available on our website and seek
          independent advice if necessary
        </p>
      </div>

      <div className="reference-footer-bottom">
        <p>© Bitstek Advisory 2025. All rights reserved.</p>

        <div className="reference-footer-socials">
          <a href="https://www.instagram.com/" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor" />
            </svg>
          </a>

          <a href="https://www.whatsapp.com/" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7a8.5 8.5 0 1 1 16.1-4z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M9 7.7c.3-.5.6-.5.9-.5h.5c.2 0 .4.1.5.5l.8 1.8c.1.3.1.5-.1.7l-.7.8c-.2.2-.2.4 0 .7.6 1 1.5 1.8 2.5 2.3.3.2.5.2.7-.1l.9-1.1c.2-.3.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .4-.2 1.3-.8 1.8-.6.6-1.5.9-2.5.7-1-.2-2.3-.7-3.8-2-1.3-1.1-2.2-2.5-2.5-3.4-.4-1-.1-2 .2-2.4z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>

      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 14 6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
