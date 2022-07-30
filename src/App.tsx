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

// import { GridInterface } from "./models/GridInterface";
// import shuffle from "./utils/shuffle";

function App() {
  // const [grid, setGrid] = useState<GridInterface[]>(() => shuffle(getGrid()));
  // const [seconds, setSeconds] = useState(0);

  const projectsGrid = {
    projects: getProjects(),
    grid: getGrid(),
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds(seconds + 1);
  //     setGrid(shuffle(grid));
  //   }, 180000);
  //   return () => clearInterval(interval);
  // }, [seconds, grid]);

  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route
            path="/realisations"
            element={<Realisations projectsGrid={projectsGrid} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error-404" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
