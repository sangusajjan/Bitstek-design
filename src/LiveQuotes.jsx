
import { useEffect, useState } from 'react';
import './LiveQuotes.css';

const initialQuotes = [
  { pair: 'EURUSD', name: 'Euro / U.S. Dollar', price: 1.12218, change: 0.59, digits: 5, flags: '🇪🇺🇺🇸' },
  { pair: 'GBPUSD', name: 'British Pound / U.S. Dollar', price: 1.32587, change: 0.50, digits: 5, flags: '🇬🇧🇺🇸' },
  { pair: 'USDJPY', name: 'U.S. Dollar / Japanese Yen', price: 157.736, change: -0.36, digits: 3, flags: '🇺🇸🇯🇵' },
  { pair: 'USDCHF', name: 'U.S. Dollar / Swiss Franc', price: 0.82875, change: -0.74, digits: 5, flags: '🇺🇸🇨🇭' },
  { pair: 'USDCAD', name: 'U.S. Dollar / Canadian Dollar', price: 1.41997, change: -0.26, digits: 5, flags: '🇺🇸🇨🇦' },
];

function LiveQuotes() {
  const [quotes, setQuotes] = useState(initialQuotes);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuotes(current =>
        current.map(quote => {
          const movement = (Math.random() - 0.5) * 0.0004;
          return {
            ...quote,
            price: Math.max(0, quote.price + movement),
            change: quote.change + (Math.random() - 0.5) * 0.04,
          };
        })
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="live-quotes-section">
      <div className="live-quotes-main">
        <div className="quotes-panel">
          {quotes.map(quote => (
            <div className="quote-row" key={quote.pair}>
              <div className="quote-pair">
                <span className="quote-flags">{quote.flags}</span>
                <div>
                  <strong>{quote.pair}</strong>
                  <small>{quote.name}</small>
                </div>
              </div>

              <span className="quote-price">
                {quote.price.toFixed(quote.digits)}
              </span>

              <span className={quote.change >= 0 ? 'quote-change up' : 'quote-change down'}>
                {quote.change >= 0 ? '+' : ''}
                {quote.change.toFixed(2)}%
                <small>
                  {quote.change >= 0 ? '+' : ''}
                  {(quote.change / 100).toFixed(2)}
                </small>
              </span>
            </div>
          ))}
          <span className="demo-label">DEMO DATA</span>
        </div>

        <a className="instruments-link" href="/#markets">
          SEE ALL INSTRUMENTS
        </a>

        <div className="quotes-description">
          <h2>Live Fx &amp; Spot Metal Quotes</h2>
          <p>
            Access real-time foreign exchange and precious metal prices,
            providing accurate and up-to-date market data to help you make
            informed trading decisions.
          </p>

          <ul>
            <li>Ultra-competitive pricing</li>
            <li>Trading flexibility</li>
            <li>Award-winning platform</li>
          </ul>
        </div>
      </div>

      <div className="quote-stats">
        <div>
          <strong>&lt; 7.12 ms</strong>
          <span>AVERAGE ORDER EXECUTION<br />SPEED</span>
        </div>
        <div>
          <strong>30+</strong>
          <span>TRADING INSTRUMENTS</span>
        </div>
        <div>
          <strong>&gt; 15</strong>
          <span>ACTIVE BROKERS</span>
        </div>
        <div>
          <strong>$8M+</strong>
          <span>ASSETS UNDER MANAGEMENT<br />(AUM)</span>
        </div>
      </div>

      <div className="quotes-actions">
        <a href="/#signup" className="quotes-primary-button">
          Setup your trading account
        </a>
        <a href="/#markets" className="quotes-secondary-button">
          Discover our platform
        </a>
      </div>

      <p className="registration-note">
        Registration takes only 40 seconds!
      </p>
    </section>
  );
}

export default LiveQuotes;
