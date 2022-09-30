import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ProjectsComp from "../components/Projects/ProjectsComp";

const About = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <ProjectsComp
        heading="About"
        text="Recent scholar from Academy.tech's fully funded coding bootcamp"
      />
      <Footer />
    </div>
  );
};

export default About;
