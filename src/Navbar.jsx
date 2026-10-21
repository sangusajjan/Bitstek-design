
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <img src="/images/bitstek-logo.jpg" alt="Bitstek Advisory" />
            </Link>

            <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/markets" onClick={() => setMenuOpen(false)}>Markets</Link>

                <div className="navbar-company">
                    <Link
                        to="/#company"
                        onClick={(e) => {
                            if (window.innerWidth <= 768) {
                                e.preventDefault();
                            }
                            setMenuOpen(false);
                        }}
                    >
                        Company <span className="nav-chevron">⌄</span>
                    </Link>

                    <div className="company-dropdown">
                        <Link to="/careers" onClick={() => setMenuOpen(false)}>
                            Careers
                        </Link>
                        <Link to="/contacts" onClick={() => setMenuOpen(false)}>
                            Contacts
                        </Link>
                    </div>
                </div>

                <Link to="/calculator" onClick={() => setMenuOpen(false)}>Calculator</Link>
                <Link to="/education" onClick={() => setMenuOpen(false)}>
                    Education
                </Link>

                <div className="navbar-auth">
                    <Link to="/login" onClick={() => setMenuOpen(false)}>
                        LOGIN
                    </Link>
                    <span>|</span>
                    <Link to="/signup" onClick={() => setMenuOpen(false)}>
                        SIGN UP
                    </Link>
                </div>
            </div>

            <button
                className="navbar-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                ☰
            </button>
        </nav>
    );
}

export default Navbar;
