import React from "react";
import Projects from "../layout/Projects";
import ProjectsGrid from "../../models/ProjectsGridInterface";

interface RealisationsProps {
  projectsGrid: ProjectsGrid
}

const Realisations: React.FC<RealisationsProps> = (props) => {
  return (
    <section className="realisations">
      <section className="realisations__hero">
        <h1 className="title">
          <span className="word">Bihua transforme</span>
          <span className="word shift-right">vos idées</span>
          <span> </span>
          <span className="word"> — en image</span>
        </h1>
      </section>
      <section className="realisations__projects">
        <Projects projectsGrid={props.projectsGrid} rowSize={34} />
      </section>
    </section>
  );
};

export default Realisations;
