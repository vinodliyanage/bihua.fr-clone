import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/router/Contact";
import Footer from "./components/layout/Footer";
import Home from "./components/router/Home";
import NavBar from "./components/layout/NavBar";
import Realisations from "./components/router/Realisations";
import Studio from "./components/router/Studio";
import getGrid from "./data/grid";
import getProjects from "./data/projects";
import Error from "./components/layout/Error";

const App: React.FC = () => {

  const projectsGrid = {
    projects: getProjects(),
    grid: getGrid(),
  };

  return (
    <React.Fragment>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home projectsGrid={projectsGrid} rowSize={12}/>} />
          <Route path="/index" element={<Home projectsGrid={projectsGrid} rowSize={12}/>} />
          <Route path="/studio" element={<Studio />} />
          <Route
            path="/realisations"
            element={<Realisations projectsGrid={projectsGrid} rowSize={34}/>}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
