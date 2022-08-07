import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const NavBar: React.FC = () => {
  const defaultActiveStates = {
    studio: false,
    realisations: false,
    contact: false,
  };

  const [isShow, setShow] = useState(false);
  const [isActive, setActive] = useState(defaultActiveStates);

  const handleShow = () => setShow(!isShow);
  const handleActive = (id: string) => {
    setActive({
      ...defaultActiveStates,
      [id]: true,
    });

    const timeout = setTimeout(() => {
      setShow(false);
      clearTimeout(timeout);
    }, 1200);
  };

  const getNavItemStyles = (id: string) =>
    `navbar-item underline ${(isActive as any)[id] && "active"} ${
      isShow && "show"
    }`;

  return (
    <header>
      <nav
        id="navbar"
        className={`navbar block ${isShow && "is-fixed-top"}`}
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
            onClick={handleShow}
          >
            <p>{isShow ? "fermer" : "menu"}</p>
          </a>
        </div>

        <div id="navbarMenu" className={`navbar-menu ${isShow && "show"}`}>
          <div className="navbar-end">
            <Link
              className={getNavItemStyles("studio")}
              to="/studio"
              onClick={() => handleActive("studio")}
            >
              Studio
            </Link>
            <Link
              className={getNavItemStyles("realisations")}
              to="/realisations"
              onClick={() => handleActive("realisations")}
            >
              Réalisations
            </Link>
            <Link
              className={getNavItemStyles("contact")}
              to="/contact"
              onClick={() => handleActive("contact")}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
