import React from "react";
// ==== Components =====
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ProjectsComp from "../components/Projects/ProjectsComp";

const Thankyou = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <ProjectsComp
        heading="Thank you!"
        text="I will get back to your request ASAP"
      />
      <Footer />
    </div>
  );
};

export default Thankyou;
