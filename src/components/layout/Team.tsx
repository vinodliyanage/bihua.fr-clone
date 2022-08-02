import React from "react";

interface TeamProps {}

const Team: React.FC<TeamProps> = ({}) => {
  return (
    <div className="columns team">
      <div className="column">
        <div className="team-member">
          <h2>Directeur</h2>
          <p>Nicolas Degache</p>
          <img src="" alt="" />
        </div>
        <div className="team-member">
          <h2>Designer Interactif</h2>
          <p>Lucas Macaluso</p>
          <img src="" alt="" />
        </div>
      </div>
      <div className="column">
        <div className="team-member">
          <h2>Développeur Créatif</h2>
          <p>Donaël Walter</p>
          <img src="" alt="" />
        </div>
        <div className="team-member">
          <h2>Media Social Manager</h2>
          <p>Camille Touzot</p>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Team;
