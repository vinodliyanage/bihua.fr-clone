import * as React from "react";
import Hero from "../layout/Hero";


function Home() {
  return (
    <div className="home block">
      <Hero
        title="Bihua Transforme vos idées - en image"
        className="home"
      >
        <span className="word">Studio créatif lyonnais</span>
        <span className="word">spécialisé dans les</span>
        <span className="word">solutions digitales</span>
      </Hero>
    </div>
  );
}

export default Home;
