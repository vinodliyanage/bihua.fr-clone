import * as React from "react";
import Hero from "../layout/Hero";

function Studio() {
  return (
    <div className="studio block">
      <Hero
        title="Bihua Transforme vos idées - en image"
        className="studio"
      >
        <span className="word">Apprendre les règles </span>
        <span className="word shift-right"> comme un professionnel </span>
        <span className="word"> et les enfreindre comme </span>
        <span className="word shift-right"> — un artiste </span>
      </Hero>
    </div>
  );
}

export default Studio;
