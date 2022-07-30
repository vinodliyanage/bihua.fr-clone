import * as React from "react";
import Hero from "../layout/Hero";
import Projects from "../layout/Projects";
import { ProjectsInterface } from "../../models/ProjectsInterface";

// TODO: add lazy loading images

function Realisations(props: ProjectsInterface) {
  console.log(props)

  return (
    <div className="realisations">
      <Hero
        title="Bihua Transforme vos idées - en image"
        className="realisations block"
      >
        <span className="word">Bihua transforme</span>
        <span className="word shift-right">vos idées — en image</span>
      </Hero>

      <Projects projectsGrid={props.projectsGrid}/>
    </div>
  );
}

export default Realisations;
