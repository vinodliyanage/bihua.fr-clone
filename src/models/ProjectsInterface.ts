import { GridInterface } from "./GridInterface";
import { ProjectInterface } from "./ProjectInterface";

interface ProjectsGrid {
  projects: ProjectInterface[];
  grid: GridInterface[];
}

export interface ProjectsInterface {
  projectsGrid:ProjectsGrid
}
