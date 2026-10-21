
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./Education.css";

function Education() {
  return (
    <>
      <Navbar />

      <main className="education-page">
        <section className="education-hero">
          <div className="education-intro">
            <h1>
              <span>Knowledge</span> is a wise investment.
            </h1>

            <p>
              By combining easy-to-understand information with actionable
              insights, our company helps make the market seem less
              daunting—and more approachable.
            </p>

            <div className="education-steps">
              <span>LEARN</span>
              <b>➜</b>
              <span>UNDERSTAND</span>
              <b>➜</b>
              <span>TRADE</span>
            </div>
          </div>

          <div className="trader-academy">
            <div>
              <h2>Trader Academy</h2>
              <p>
                Join our comprehensive trading academy to learn market
                analysis, strategies, and risk management from expert
                instructors.
              </p>

              <a href="/contacts" className="academy-button">
                Contact us
              </a>
            </div>

            <div className="academy-icon" aria-hidden="true">
              <span>🎓</span>
            </div>
          </div>
        </section>

        <section className="education-courses">
          <div className="education-course">
            <div className="course-title">
              <div className="course-icon">👥</div>
              <h2>Beginner Course</h2>
            </div>
            <p>
              Learn the basic concepts of Financial Market trading, what
              this market is all about, and why you should be a part of it.
            </p>
          </div>

          <div className="education-course">
            <div className="course-title">
              <div className="course-icon">🛠</div>
              <h2>Trading Tools</h2>
            </div>
            <p>
              Familiarize yourself with advanced strategies and trading
              tools. Take your trading to the next level.
            </p>
          </div>

          <div className="education-course">
            <div className="course-title">
              <div className="course-icon">📊</div>
              <h2>Stocks and CFDs</h2>
            </div>
            <p>
              Discover the world of CFD trading: the ins and outs of the
              CFD market, relevant information and market dynamics.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Education;
