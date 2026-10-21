
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({});
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.fullName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const phone = form.phone.value.trim();

    const newErrors = {};

    if (name.length < 3) {
      newErrors.fullName = "Name must be at least 3 characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
      newErrors.password =
        "Use 8+ characters with uppercase, lowercase and a number.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setUserDetails({
        fullName: name,
        email: email,
        phone: phone,
        countryCode: form.countryCode.value,
      });

      setStep(2);
    }
  }

  return (
    <div className="login-layout signup-layout">
      <header className="login-header">
        <Link to="/" className="login-brand">
          <img src="/images/logo.png" alt="Bitstek logo" />
          <span>Bitstek Advisory</span>
        </Link>

        <nav className="login-header-links">
          <Link to="/login" className="header-login">
            LOGIN
          </Link>
          <Link to="/signup" className="header-signup">
            SIGN UP
          </Link>
        </nav>
      </header>

      <main className="login-page signup-page">
        {/* Left side: trading illustration */}
        <section className="login-illustration">
          <img
            src="/images/signup-illustration.png"
            alt="Trading and investment illustration"
          />
        </section>

        {/* Right side: signup form or review screen */}
        <section className="login-card signup-card">
          {step === 1 ? (
            <>
              <img
                className="login-logo"
                src="/images/logo.png"
                alt="Bitstek Advisory"
              />

              <h2>Register to Bitstek Advisory</h2>

              <form
                onSubmit={handleSubmit}
                className="login-form signup-form"
                noValidate
              >
                <div className="signup-field">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.fullName && (
                    <p className="field-error">{errors.fullName}</p>
                  )}
                </div>

                <div className="signup-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                  {errors.email && (
                    <p className="field-error">{errors.email}</p>
                  )}
                </div>

                <div className="signup-field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                  {errors.password && (
                    <p className="field-error">{errors.password}</p>
                  )}
                </div>

                <div className="signup-field">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    required
                  />
                  {errors.confirmPassword && (
                    <p className="field-error">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <div className="signup-field">
                  <div className="phone-row">
                    <select
                      name="countryCode"
                      aria-label="Country code"
                      defaultValue="+91"
                    >
                      <option value="+91">+91 (India)</option>
                      <option value="+1">+1 (USA)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+61">+61 (Australia)</option>
                    </select>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  {errors.phone && (
                    <p className="field-error">{errors.phone}</p>
                  )}
                </div>

                <button type="submit">Next</button>
              </form>

              <p className="login-signup">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </>
          ) : (
            <div className="signup-review">
              <img
                className="login-logo"
                src="/images/logo.png"
                alt="Bitstek Advisory"
              />

              <h2>Review Your Details</h2>
              <p>Please check your information before continuing.</p>

              <div className="review-details">
                <p>
                  <strong>Full name:</strong> {userDetails.fullName}
                </p>
                <p>
                  <strong>Email:</strong> {userDetails.email}
                </p>
                <p>
                  <strong>Phone:</strong> {userDetails.countryCode}{" "}
                  {userDetails.phone}
                </p>
              </div>

              <button
                type="button"
                className="review-button"
                onClick={() => setStep(1)}
              >
                Back to Edit
              </button>

              <button
                type="button"
                className="review-button"
                onClick={() =>
                  alert("Email/phone verification will be connected next.")
                }
              >
                Continue
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Signup;
