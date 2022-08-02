import React from "react";
import { GridInterface } from "../../models/GridInterface";
import { ProjectInterface } from "../../models/ProjectInterface";

interface ProjectProps {
  project: ProjectInterface;
  grid: GridInterface;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { project, grid } = props;

  const alt = `bihua.fr ${project.name} ${project.year}`;
  return (
    <article className="project" style={grid}>
      <div className="project__wrapper"></div>
      <a className="project__content">
        <img className="project__image" src={project.image} alt={alt} />
        <div className="project__description__container">
          <h3 className="project__name">{project.name}</h3>
          <p className="project__year">{project.year}</p>
        </div>
      </a>
    </article>
  );
};

export default Project;
