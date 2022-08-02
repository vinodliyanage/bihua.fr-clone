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
          {/* TODO: fix the indication link */}
          <Link to="/contact" className="h1">
            Une idée de projet
          </Link>
          <p>Vous avez un projet, une demande ? Nous serions ravis de</p>
          <p>pouvoir vous aider, contactez-nous.</p>
        </div>
        <div className="column is-1">
          <Link to="/contact" className="indication-link"></Link>
        </div>
      </div>
    </div>
  );
}

export default ContactIndex;
