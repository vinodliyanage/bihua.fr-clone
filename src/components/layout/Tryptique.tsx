import React from "react";

import tryp1 from "../../images/tryp-1.webp";
import tryp2 from "../../images/tryp-2.webp";
import tryp3 from "../../images/tryp-3.webp";

const Tryptique: React.FC = () => {
  return (
    <div className="tryptique">
      <img
        className="tryp"
        src={tryp1}
        alt="Panneau de gauche du tryptique d-introduction du studio"
      />
      <img
        className="tryp go-top"
        src={tryp2}
        alt="Panneau de gauche du tryptique d-introduction du studio"
      />
      <img
        className="tryp"
        src={tryp3}
        alt="Panneau de gauche du tryptique d-introduction du studio"
      />
    </div>
  );
};

export default Tryptique;
