
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contacts.css";

function Contacts() {
  return (
    <>
      <Navbar />

      <main className="contacts-page">
        <section className="contacts-map">
          <iframe
            title="Bitstek Advisory office location"
            src="https://maps.google.com/maps?q=Cyber%20Gateway%2C%20HITEC%20City%2C%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        <section className="contacts-info">
          <div className="contact-item">
            <h3>Address</h3>
            <p>C Block Cyber Gateway</p>
            <p>Hitec City Hyderabad</p>
          </div>

          <div className="contact-item">
            <h3>Email</h3>
            <p>
              <a href="mailto:enquiry@bitstekadvisory.com">
                enquiry@bitstekadvisory.com
              </a>
            </p>
            <span>FOR PUBLIC INQUIRIES</span>
          </div>

          <div className="contact-item">
            <h3>Call</h3>
            <p>
              <a href="tel:+919059980243">+91 90599 80243</a>
            </p>
          </div>
        </section>

        <section className="contacts-form-section">
          <p className="contacts-eyebrow">Have questions?</p>
          <h1>
            Let's <span>get in touch</span>
          </h1>

          <form
            className="contacts-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message form is ready to connect to a backend.");
            }}
          >
            <div className="contacts-form-row">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                aria-label="Full name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                aria-label="Email address"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              aria-label="Subject"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              aria-label="Message"
              rows="6"
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contacts;
