import React from "react";
import { ProjectsInterface } from "../../models/ProjectsInterface";
import Project from "./Project";

const Projects: React.FC<ProjectsInterface> = (props) => {
  const { projects, grid } = props.projectsGrid;
  const rowSize = props.rowSize;

  return (
    <div
      className="projects"
      style={{ gridTemplateRows: `repeat(${rowSize},9vh)` }}
    >
      {projects.map((project) => (
        <Project key={project.id} project={project} grid={grid[project.id]} />
      ))}
    </div>
  );
};

export default Projects;
