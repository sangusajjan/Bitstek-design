
import { useState } from 'react';
import './InvestmentOptions.css';

const investments = [
  {
    name: 'Indian Equities',
    icon: '📈',
    description:
      "Indian equities represent shares of companies listed on Indian stock exchanges. They offer exposure to one of the fastest-growing major economies, with opportunities across diverse sectors. Investing in Indian equities provides potential for long-term growth, diversification, and participation in India's economic progress.",
  },
  {
    name: 'International Equities',
    icon: '🌍',
    description:
      'International equities provide exposure to companies and markets outside India. They offer opportunities to diversify investments across countries, industries, and global economies.',
  },
  {
    name: 'Gold',
    icon: '🪙',
    description:
      'Gold is a widely recognised precious metal that investors may use to diversify their portfolios. Its price can fluctuate with global demand, interest rates, currency movements, and market conditions.',
  },
  {
    name: 'REITs',
    icon: '🏢',
    description:
      'Real Estate Investment Trusts (REITs) provide access to income-generating real estate assets. They allow investors to participate in property-related investments without directly purchasing entire properties.',
  },
];

function InvestmentOptions() {
  const [activeInvestment, setActiveInvestment] = useState(0);

  return (
    <section className="investment-options">
      <div className="investment-title">
        <span></span>
        <h2>This is what you'll invest in</h2>
        <span></span>
      </div>

      <p className="investment-subtitle">
        Our investments are structured in accordance with the strictest
        financial principles and diversified across asset classes.
      </p>

      <div className="investment-tabs">
        {investments.map((investment, index) => (
          <button
            key={investment.name}
            className={`investment-tab ${
              activeInvestment === index ? 'active' : ''
            }`}
            onClick={() => setActiveInvestment(index)}
            type="button"
          >
            <span className="investment-icon" aria-hidden="true">
              {investment.icon}
            </span>
            <span>{investment.name}</span>
          </button>
        ))}
      </div>

      <div className="investment-description" aria-live="polite">
        <p>{investments[activeInvestment].description}</p>
      </div>
    </section>
  );
}

export default InvestmentOptions;
