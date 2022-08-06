import React from "react";
import Base from "../layout/Base";
import Final from "../layout/Final";
import Passion from "../layout/Passion";
import Team from "../layout/Team";

const Studio: React.FC = () => {
  return (
    <div className="studio">
      <section className="studio__hero block">
        <h1 className="title">
          <span className="word">Apprendre les règles </span>
          <span className="word shift-right">comme un</span>
          <span className="word">professionnel</span>
          <span> </span>
          <span className="word">et les </span>
          <span> </span>
          <span className="word"> enfreindre comme</span>
          <span className="word shift-right"> — un artiste </span>
        </h1>
      </section>
      <section className="studio__base block">
        <Base />
      </section>
      <section className="studio__team">
        <Team />
      </section>
      <section className="studio__passion">
        <Passion />
      </section>
      <section className="studio__final block">
        <Final />
      </section>
    </div>
  );
};

export default Studio;
