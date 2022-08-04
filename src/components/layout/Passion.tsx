import React from "react";
import passion from '../../images/passion.jpg'

const Passion: React.FC = () => {
  return (
    <div className="passion block">
      <div className="columns passion__content">
        <div className="column is-1"></div>
        <div className="column is-4 passion__image">
          <img src={passion} alt="" />
        </div>
        <div className="column is-1"></div>
        <div className="column is-4">
          <p>
            Nous sommes convaincus que la créativité d’une agence de
            communication passe par une connaissance des arts et de ses
            différentes disciplines. Chez Bihua, nous intégrons spontanément à
            notre réflexion et à notre travail une dimension artistique. 
            <br />
            <br />
            Nous bénéficions également d’un large réseau de créateurs qui peuvent
            intervenir sur nos projets et apporter une vision esthétique forte
            et engagée. Rester en contact avec le monde de la création et les
            nouvelles cultures fait partie de notre ADN et participe à faire de
            Bihua un studio peu ordinaire !
          </p>
        </div>
      </div>
      <div className="passion__quote">
        <q>
          “Nous entretenons une grande proximité avec le monde de l’Art, les
          artistes et les créateurs”
        </q>
      </div>
    </div>
  );
};

export default Passion;
