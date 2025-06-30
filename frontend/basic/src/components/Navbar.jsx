import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [login, setLogin] = useState(localStorage.getItem("userId") || localStorage.getItem("captainId") && true);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    // setLogin(false)

  };

  return (
    <nav>
      <div className="nav">
        <div className="container">
          <div className="main-nav">
            <div className="logo">
              <h3>Car Polling</h3>
              <button className="burger-icon" onClick={handleMobileMenuClick}>
                <FiMenu />
              </button>
            </div>

            <div className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
              <ul>
                <li>About us</li>
                <li>Services</li>
                <li>Contact us</li>
              </ul>
              {login ? null : <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
