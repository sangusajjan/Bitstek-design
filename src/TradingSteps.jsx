
import './TradingSteps.css';

function TradingSteps() {
  return (
    <section className="trading-info">
      <div className="trading-stats">
        <h2>Supporting Traders from over 10+ Countries</h2>

        <div className="stats-grid">
          <div className="stat-item">
            <strong>$8+</strong>
            <div>
              <h3>Million</h3>
              <p>TRADING VOLUME PER MONTH</p>
            </div>
          </div>

          <div className="stat-item">
            <strong>100+</strong>
            <div>
              <h3>Investors</h3>
              <p>REGISTERED TRADING<br />ACCOUNTS</p>
            </div>
          </div>

          <div className="stat-item">
            <strong>48+</strong>
            <div>
              <h3>Million</h3>
              <p>TRADES EXECUTED PER YEARS*</p>
            </div>
          </div>
        </div>

        <p className="stats-note">
          *Data based on year-to-date Bitstek activity
          <span> (last update end of Q2 2025)</span>
        </p>
      </div>

      <div className="account-steps">
        <p className="steps-subtitle">
          Start Investment and Trading with Bitstek.
        </p>

        <h2>Fast account opening in 3 simple steps</h2>

        <div className="steps-grid">
          <article className="step-item">
            <div className="step-number">1</div>
            <h3>Register</h3>
            <p>
              Choose an account type and submit your application
            </p>
          </article>

          <article className="step-item">
            <div className="step-number">2</div>
            <h3>Fund</h3>
            <p>
              Fund your account using a wide range of funding methods.
            </p>
          </article>

          <article className="step-item">
            <div className="step-number">3</div>
            <h3>Fund Management</h3>
            <p>
              Access 180+ instruments across all asset classes
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default TradingSteps;
