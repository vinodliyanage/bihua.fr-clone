import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function NavBar() {
  return (
    <header>
      <nav
        className="navbar block"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/index">
            <img className="logo" src={logo} />
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <p>menu</p>
          </a>
        </div>

        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item underline" to="/studio">
              Studio
            </Link>
            <Link className="navbar-item underline" to="/realisations">
              Réalisations
            </Link>
            <Link className="navbar-item underline" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
