import { GridInterface } from "./GridInterface";
import { ProjectInterface } from "./ProjectInterface";

export default interface ProjectsGrid {
  projects: ProjectInterface[];
  grid: GridInterface[];
}

