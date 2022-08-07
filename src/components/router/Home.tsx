import React from "react";
import { Link } from "react-router-dom";
import { ProjectsInterface } from "../../models/ProjectsInterface";
import ContactIndex from "../layout/ContactIndex";
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
    <section className="home">
      <section className="home__hero block">
        <h1 className="title">
          <span className="word">Studio créatif lyonnais</span>
          <span className="word">spécialisé dans les</span>
          <span className="word">solutions digitales</span>
        </h1>
        <Tryptique />
      </section>

      <section className="home__intro block">
        <IntroIndex />
      </section>

      <section className="home__projects">
        <div className="home__projects__title">
          <h2>Projets séléctionnés</h2>
          <span className="number-animation">
            <span>0</span>
            <span className="numbers">
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </span>
          </span>
        </div>

        <Projects projectsGrid={projectsGrid} rowSize={12} />

        <div className="columns">
          <div className="column is-9"></div>
          <Link className="link column is-3" to="/realisations">
            <div className="circle-link">
              <div className="circle"></div>
              <span className="p">Voir tous les projets</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="home__contact block">
        <ContactIndex />
      </section>
    </section>
  );
};

export default Home;
