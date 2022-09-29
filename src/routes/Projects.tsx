import React from "react";
// ==== Components =====
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ProjectsComp from "../components/Projects/ProjectsComp";

const Projects = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <ProjectsComp
        heading="Projects"
        text="a few things I've been tinkering on.."
      />
      <Footer />
    </div>
  );
};

export default Projects;
