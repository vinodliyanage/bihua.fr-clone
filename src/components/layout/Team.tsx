import React, { useState } from "react";

import camille from "../../images/portrait-camille.jpg";
import dona from "../../images/portrait-dona.jpg";
import lucas from "../../images/portrait-lucas.jpg";
import nicolas from "../../images/portrait-nicolas.jpg";

interface Style {
  opacity: string;
  top: string;
  left: string;
  width?: string;
  borderRadius?: string;
}

interface TeamState {
  camille?: Style;
  dona?: Style;
  lucas?: Style;
  nicolas?: Style;
}

type MouseEventHandler = (
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  id: string
) => void;

const Team: React.FC = () => {
  const [style, setStyle] = useState<TeamState>({});
  const [prevTimeout, setPrevTimeout] = useState<NodeJS.Timeout>();

  const handleMouseLeave: MouseEventHandler = (e, id) => {
    const newStyle = {
      [id]: {
        opacity: 0,
        top: e.clientY,
        left: e.clientX,
      },
    };
    setStyle({ ...newStyle });
  };

  const handleMouseMove: MouseEventHandler = (e, id) => {
    const newStyle = {
      [id]: {
        opacity: 1,
        top: e.clientY,
        left: e.clientX,
        width: "300px",
        borderRadius: "0%",
      },
    };
    setStyle({ ...newStyle });
  };

  const handleTouchStart = (id: string) => {
    clearTimeout(prevTimeout);

    const timeout = setTimeout(() => {
      setStyle({ [id]: {} });
    }, 4000);

    setPrevTimeout(timeout);
  };

  return (
    <div className="team">
      <div className="team__wrapper">
        <div
          className="team__member"
          onMouseMove={(e) => handleMouseMove(e, "nicolas")}
          onMouseLeave={(e) => handleMouseLeave(e, "nicolas")}
          onTouchStart={() => handleTouchStart("nicolas")}
        >
          <img
            className="hover-image"
            src={nicolas}
            alt="nicolas"
            style={style?.["nicolas"]}
          />

          <h2>Directeur</h2>
          <p>Nicolas Degache</p>
        </div>

        <div
          className="team__member"
          onMouseMove={(e) => handleMouseMove(e, "lucas")}
          onMouseLeave={(e) => handleMouseLeave(e, "lucas")}
          onTouchStart={() => handleTouchStart("lucas")}
        >
          <img
            className="hover-image"
            src={lucas}
            alt="lucas"
            style={style?.["lucas"]}
          />
          <h2>Designer Interactif</h2>
          <p>Lucas Macaluso</p>
        </div>

        <div
          className="team__member"
          onMouseMove={(e) => handleMouseMove(e, "dona")}
          onMouseLeave={(e) => handleMouseLeave(e, "dona")}
          onTouchStart={() => handleTouchStart("dona")}
        >
          <img
            className="hover-image"
            src={dona}
            alt="dona"
            style={style?.["dona"]}
          />
          <h2>Développeur Créatif</h2>
          <p>Donaël Walter</p>
        </div>

        <div
          className="team__member"
          onMouseMove={(e) => handleMouseMove(e, "camille")}
          onMouseLeave={(e) => handleMouseLeave(e, "camille")}
          onTouchStart={() => handleTouchStart("camille")}
        >
          <img
            className="hover-image"
            src={camille}
            alt="camille"
            style={style?.["camille"]}
          />
          <h2>Media Social Manager</h2>
          <p>Camille Touzot</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
