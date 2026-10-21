
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Careers.css";

function Careers() {
  return (
    <>
      <Navbar />

      <main className="careers-page">
        <section className="careers-intro">
          <h1>
            Join us and help redefine trust, innovation, and impact in the
            financial markets.
          </h1>

          <p>
            At the heart of global finance, we’re building trust where it
            matters most. From asset management to equities and trading,
            our mission is to make security and performance work hand in hand.
          </p>

          <p>
            We’re growing fast — and we’re looking for driven minds ready to
            shape the future of investing.
          </p>
        </section>

        <section className="careers-columns">
          <div className="careers-column">
            <h2>Our Opportunity</h2>
            <p>
              Join a team that’s redefining financial services through
              innovation, technology, and client-first thinking. At Bitstek,
              your ideas matter and your growth is our priority.
            </p>
          </div>

          <div className="careers-column">
            <h2>Our Team</h2>
            <p>
              We’re a diverse group of professionals united by a shared
              passion for excellence. Collaboration, integrity, and
              continuous learning drive everything we do.
            </p>
          </div>

          <div className="careers-column">
            <h2>Our Culture</h2>
            <p>
              We foster a culture of trust, creativity, and accountability,
              where every voice is valued and every achievement is celebrated.
            </p>
          </div>
        </section>

        <section className="careers-gallery">
          <img src="/images/careers-office-1.jpg" alt="Office workspace" />
          <img src="/images/careers-office-2.jpg" alt="Team collaboration" />
          <img src="/images/careers-office-3.jpg" alt="Office interior" />
          <img src="/images/careers-office-4.jpg" alt="Employees working" />
          <img src="/images/careers-office-5.jpg" alt="Team workspace" />
          <img src="/images/careers-office-6.jpg" alt="Office environment" />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Careers;
