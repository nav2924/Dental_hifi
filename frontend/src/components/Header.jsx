import React, { useCallback } from "react";
import "../style/Header.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, signIn, signOut } = useAuth();

  const handleSignIn = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleSignOut = useCallback(() => {
    signOut();
    navigate("/");
    console.log("Signed out successfully");
  }, [signOut, navigate]);

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        DentalHifi
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-items">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blog">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact-us">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            {!isAuthenticated ? (
              <button
                type="button"
                className="btn btn-link nav-link"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-link nav-link"
                onClick={handleSignOut}
              >
                Log Out
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
