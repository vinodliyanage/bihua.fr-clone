import * as React from 'react';
import { ProjectsInterface } from '../../models/ProjectsInterface';
import Project from './Project';

function Projects(props: ProjectsInterface) {
    const { projects, grid } = props.projectsGrid;

    return ( 
        <section className="projects-wrapper">
        <div className="projects">
          {projects.map((project) => (
            <Project
              key={project.id}
              project={project}
              grid={grid[project.id]}
            />
          ))}
        </div>
      </section>
     );
}

export default Projects;