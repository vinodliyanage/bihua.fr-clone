import React from "react";
import ProjectsGrid from "../../models/ProjectsGridInterface";
import Project from "./Project";

interface ProjectsProps {
  projectsGrid:ProjectsGrid,
  rowSize: number;
}

const Projects: React.FC<ProjectsProps> = (props) => {
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
