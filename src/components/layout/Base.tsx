import React from "react";
import portrait_of_team from "../../images/portrait_of_team.png";

const Base: React.FC = () => {
  return (
    <div className="base">
      <div className="columns">
        <div className="column is-6"></div>
        <div className="column is-4 base__origin">
          <h2>L'origine</h2>
          <p>
            Avant de créer le studio, Nicolas a parcouru les quatre coins du
            monde pour promouvoir l’art et la création. Lors d’un voyage en
            Chine où il accompagne des Street Artistes français, il entend pour
            la première fois le mot “bihua”. Un terme qui signifie “peinture
            murale” en chinois et qui symbolise une partie de sa vie et son
            attachement au monde de l’Art.
          </p>
        </div>
      </div>
      <div className="columns">
        <div className="column base__portrait">
          <q>
            “Nous conjuguons les médias et les savoir-faire pour créer une
            communication différente”
          </q>
          <img src={portrait_of_team} alt="" />
        </div>
      </div>

      <div className="columns">
        <div className="column is-8"></div>
        <div className="column base__talents">
          <p>
            Les projets que nous réalisons depuis 2017 forment un socle
            d’expériences sur lequel nous construisons notre propre
            savoir-faire. Notre équipe, agile et engagée, est composée de jeunes
            talents passionnés par l’image et les nouvelles technologies.
            <br />
            <br />
            Le design, le développement web, les réseaux sociaux et la vidéo
            sont autant de domaines que nous maîtrisons pour créer des solutions
            digitales performantes, au service d’une communication globale,
            ancrée dans le monde d’aujourd’hui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Base;
