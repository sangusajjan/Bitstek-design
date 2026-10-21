
import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Login submitted. Real authentication will be connected later.");
  }

  
return (
  <div className="login-layout">
    <header className="login-header">
      <Link to="/" className="login-brand">
        <img src="/images/logo.png" alt="Bitstek logo" />
        <span>Bitstek Advisory</span>
      </Link>

      <nav className="login-header-links">
        <Link to="/login" className="header-login">LOGIN</Link>
        <Link to="/signup" className="header-signup">SIGN UP</Link>
      </nav>
    </header>

    <main className="login-page">
      <section className="login-illustration">
        <img
          src="/images/login-illustration.png"
          alt="Trading illustration"
        />
      </section>

      <section className="login-card">
        <img
          className="login-logo"
          src="/images/logo.png"
          alt="Bitstek Advisory"
        />

        <h2>Login to Bitstek Advisory</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <input type="email" placeholder="Email" required />
          <input
            type="password"
            placeholder="Password"
            required
            minLength={8}
          />

          <Link className="forgot-password" to="/forgot-password">
            Forgot password?
          </Link>

          <button type="submit">Login</button>
        </form>

        <p className="login-signup">
          Don't have an account? <Link to="/signup">Signup now!</Link>
        </p>
      </section>
    </main>
  </div>
);

}

export default Login;
