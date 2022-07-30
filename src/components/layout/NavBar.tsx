import * as React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'

function NavBar() {
  return (
    <header>
      <nav className="navbar block" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="no-hover" to="/index" >
            <img
              className="logo"
              src={logo}
            />
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>

        </div>

        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar__menu__container">
              <Link className="navbar__item underline" to="/studio">Studio</Link>
              <Link className="navbar__item underline" to="/realisations">Réalisations</Link>
              <Link className="navbar__item underline" to='/contact'>Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
