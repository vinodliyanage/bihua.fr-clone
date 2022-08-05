import React from "react";
import { Link } from "react-router-dom";

const ContactIndex: React.FC = () => {
  return (
    <div className="contact-index">
      <div className="columns">
        <div className="column is-3">
          <h2>contact</h2>
        </div>
        <div className="column">
          <Link to="/contact" className="indication-link-wrapper">
            <h1>Une idée de projet</h1>
            <p>Vous avez un projet, une demande ? Nous serions ravis de</p>
            <p>pouvoir vous aider, contactez-nous.</p>
            <span className="indication-link a"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactIndex;
