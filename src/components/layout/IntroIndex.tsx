import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function IntroIndex() {
  const [isClick, setClick] = useState(false);

  const handleClick = () => {
    setClick(!isClick);
  };

  return (
    <section className="intro-index">
      <div className="columns">
        <div className="column is-2"></div>
        <div className="column">
          <h2>Savoir-faire</h2>
          <ul>
            <li>Stratégie</li>
            <li>Social Media</li>
            <li>Identité de marque</li>
            <li>UI/UX Design</li>
            <li>Front-End</li>
            <li>Vidéo/Motion</li>
            <li>Direction Artistique</li>
          </ul>
        </div>
      </div>
      <div className="columns">
        <div className="column is-6"></div>
        <div className="column is-4">
          <h2>Philosophie</h2>
          <p>
            Notre studio, basé à Lyon, est le point de rencontre entre
            créativité et technologie.
          </p>
          <p>
            Nous accompagnons les entreprises dans la construction de leur
            identité visuelle et développons les meilleures solutions pour
            diffuser leur image de marque sur le web.
          </p>
          {isClick && (
            <p>
              Notre équipe est composée de passionnés d’arts graphiques et de
              nouvelles technologies. Ils engagent au service de chaque projet
              leur expérience, leur conviction et un goût immodéré pour la
              modernité. Chez Bihua nous croyons que tout projet de
              communication doit avoir du sens et que le positionnement d’une
              entreprise doit être clair et affirmé.
            </p>
          )}
          {!isClick ? (
            <span className="expand h2" onClick={handleClick}>
              Lire la suite
            </span>
          ) : (
            <div className="circle-link">
              <div className="circle"></div>
              <Link className="link p" to="/studio">
                Le studio
              </Link>
              <hr className="" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default IntroIndex;
