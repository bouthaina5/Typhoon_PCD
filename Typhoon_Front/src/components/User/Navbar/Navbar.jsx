import React, { useState } from "react";
import "../Navbar/styles.css";
import logo from "../../../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ onLinkClick }) => {
  const [toggler, setToggler] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    window.scrollY > window.screen.height - window.screen.height * 0.27
      ? setNavbar(true)
      : setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar navbar-fixed-top py-3 ${
        navbar ? "navbar-scroll-color" : "rgba-gradient-nav"
      }`}
    >
      <div className="container-fluid mx-3">
        <Link className="navbar-brand" to="/">
          <img alt="logo" src={logo} width="50" />
        </Link>
        <button
          className="navbar-toggler costmusetoggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setToggler(!toggler)}
        >
          <i
            className={`fas ${toggler ? "fa-bars" : "fa-times"} fa-lg`}
            style={{ color: "black" }}
          ></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  smooth-scroll ms-lg-5">
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("homeSection")}
                className="nav-link"
                to="/"
              >
                Acceuil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("authentification")}
                className="nav-link"
                to="/authentification"
                data-offset="90"
              >
                S'authentifier 
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("inscription")}
                className="nav-link"
                to="/inscription"
                data-offset="90"
              >
                S'inscrire
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                onClick={() => onLinkClick("skillSection")}
                className="nav-link"
                data-offset="30"
              >
                Typhoon en chiffre
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => onLinkClick("contactSection")}
                className="nav-link"
                data-offset="90"
                to="/"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
