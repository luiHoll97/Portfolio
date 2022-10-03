import React from "react";
// ===== Components =====
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ProjectsComp from "../components/Projects/ProjectsComp";
import AboutContent from "../components/About/AboutContent";

const About = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <ProjectsComp
        heading="About"
        text="Where to start. I normally talk about being a career changer.. but I'll spare the details"
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
