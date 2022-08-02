import React from "react";
import Hero from "../layout/HeroTitle";
import Projects from "../layout/Projects";
import { ProjectsInterface } from "../../models/ProjectsInterface";

// TODO: add lazy loading images

const Realisations: React.FC<ProjectsInterface> = (props) => {
  return (
    <section className="realisations">
      <Hero
        title="Bihua Transforme vos idées - en image"
        className="realisations block"
      >
        <span className="word">Bihua transforme</span>
        <span className="word shift-right">vos idées — en image</span>
      </Hero>

      <section className="realisations__projects">
        <Projects projectsGrid={props.projectsGrid} rowSize={34} />
      </section>
    </section>
  );
};

export default Realisations;
