import React from "react";

import trace from "../../images/trace.svg";

interface FinalProps {}

const Final: React.FC<FinalProps> = (props) => {
  return (
    <div className="final">
      <p>
        Et si Bihua n’est pas un studio comme les autres, c’est aussi parce que
      </p>
      <q>
        nous considérons que chaque réalisation est
        <br />
        une
        <span> </span>
        <span aria-label="création unique." className="crea-unique">
          <img className="trace" src={trace} alt="" />
          création unique.
        </span>
      </q>
    </div>
  );
};

export default Final;
