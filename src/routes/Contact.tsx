import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ProjectsComp from "../components/Projects/ProjectsComp";

const Contact = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <ProjectsComp heading="Contact" text="Let's talk!"/>
      <Footer />
    </div>
  );
};

export default Contact;
