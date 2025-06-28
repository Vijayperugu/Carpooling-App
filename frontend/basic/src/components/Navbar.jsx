import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import "../styles/Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="nav">
        <div className="container">
          <div className="main-nav">
            <div className="logo">
              <h3>Car Polling</h3>
              {isMobile && (
                <button className="burger-icon" onClick={handleMobileMenuClick}>
                  <FiMenu />
                </button>
              )}
            </div>
            <div
              className="nav-menu"
              style={{
                display: isMobile ? (mobileMenuOpen ? "flex" : "none") : "flex",
              }}
            >
              <ul>
                <li>About us</li>
                <li>Services</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
