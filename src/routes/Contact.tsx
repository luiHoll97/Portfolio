import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ProjectsComp from "../components/Projects/ProjectsComp";
import ContactMe from "../components/Contact/ContactMe";

const Contact = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <ProjectsComp heading="Contact" text="Let's talk!" />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Contact;
