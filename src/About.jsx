
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./About.css";

const teamMembers = [
  {
    role: "CHIEF EXECUTIVE OFFICER",
    name: "Rajendra Prasad",
    image: "/images/rajendra-prasad.jpg",
    description:
      "Rajendra Prasad is a seasoned investor, trader, and portfolio manager with over 22 years of hands-on experience in financial markets. An NSE Certified Market Professional (Level 4), he has successfully navigated multiple market cycles and developed a deep understanding of global asset classes. His extensive experience spans equities, derivatives, commodities, and international markets, making him a well-rounded and insightful market participant.",
  },
  {
    role: "CHIEF TECHNOLOGY OFFICER",
    name: "Shaik Adil Zama",
    image: "/images/shaik-adil-zama.jpg",
    description:
      "Shaik Adil Zama is a technology leader who blends software engineering, data science, and algorithmic trading to build robust trading platforms and automation tools. With over a decade of experience in low-latency systems, cloud infrastructure, APIs and machine learning, he develops quantitative strategies, risk-management modules, and scalable integrations that help translate market insights into reliable execution. His work ensures our trading products are secure, performant, and aligned with practical trading workflows.",
  },
  {
    role: "ADVISOR",
    name: "Amit Kumar Gupta",
    image: "/images/amit-kumar-gupta.jpg",
    description:
      "Mr. Amit Kumar is a highly accomplished and multi-certified professional with over 11 years of experience spanning both corporate industry roles and private practice. He is a qualified Chartered Accountant, Company Secretary, Cost Accountant, and US CISA certified. His academic background includes a degree in science, and he is also NET qualified. He specializes in Listed Space(Equities), Income Tax & Foreign Exchange Management Act (FEMA).",
  },
];

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-intro">
          <h1><span>About Us</span></h1>

          <p className="about-description">
            Bitstek is a Global Investment advisory. At Bitstek
            we design a basket of uncorrelated income streams for
            the Investor/Trader, which helps us in creating a
            diversified portfolio with favorable risk-reward ratio.
          </p>

          <div className="about-values">
            <article className="value-item">
              <div className="value-icon">◉</div>
              <div>
                <h2>Our Vision</h2>
                <p>
                  To empower investors and traders globally by
                  providing transparent, data-driven, and innovative
                  financial advisory solutions for sustainable success.
                </p>
              </div>
            </article>

            <article className="value-item">
              <div className="value-icon">◎</div>
              <div>
                <h2>Our Mission</h2>
                <p>
                  To deliver expert investment and trading advisory
                  that bridges technology and human insight, enabling
                  clients to achieve their financial goals with confidence.
                </p>
              </div>
            </article>

            <article className="value-item">
              <div className="value-icon">⌁</div>
              <div>
                <h2>Our Goal</h2>
                <p>
                  To become a trusted global partner in financial
                  growth by fostering innovation, consistency, and
                  measurable results in every client relationship.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="team-section">
          <h2>Trust the Professionals</h2>

          <p className="team-subtitle">
            We are a group of passionate, independent thinkers who
            never stop exploring new ways to improve investment and
            trading experience.
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.name}>
                <img
                  className="team-photo"
                  src={member.image}
                  alt={member.name}
                />

                <p className="team-role">{member.role}</p>
                <h3>{member.name}</h3>
                <p className="team-description">
                  {member.description}
                </p>

                <div className="team-socials">
  <a href="#" aria-label="Facebook">f</a>
  <a href="#" aria-label="Twitter">♥</a>
  <a href="#" aria-label="LinkedIn">in</a>
</div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
