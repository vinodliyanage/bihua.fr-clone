import React from "react";
import { Link } from "react-router-dom";
import { ProjectsInterface } from "../../models/ProjectsInterface";
import ContactIndex from "../layout/ContactIndex";
import HeroTitle from "../layout/HeroTitle";
import IntroIndex from "../layout/IntroIndex";
import Projects from "../layout/Projects";
import Tryptique from "../layout/Tryptique";

const Home: React.FC<ProjectsInterface> = (props) => {
  const { grid, projects } = props.projectsGrid;

  const projectsGrid = {
    grid: grid.slice(0, 4),
    projects: projects.slice(0, 4),
  };

  return (
    <div className="home">
      <section className="home__home block">
        <HeroTitle
          title="Bihua Transforme vos idées - en image"
          className="home"
        >
          <span className="word">Studio créatif lyonnais</span>
          <span className="word">spécialisé dans les</span>
          <span className="word">solutions digitales</span>
        </HeroTitle>
        <Tryptique />
      </section>

      <section className="home__intro block">
        <IntroIndex />
      </section>

      <section className="home__projects">
        <Projects projectsGrid={projectsGrid} rowSize={12} />

        <div className="circle-link">
          <div className="circle"></div>
          <Link className="link p" to="/realisations">
            Voir tous les projets
          </Link>
          <hr className="" />
        </div>
      </section>

      <section className="home__contact block">
        <ContactIndex />
      </section>
    </div>
  );
};

export default Home;
