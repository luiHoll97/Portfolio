import React from "react";

// === Components ===
import NavBar from "../components/NavBar/NavBar";
import BackgroundImg from "../components/BackgroundImg/BackgroundImg";
import Footer from "../components/Footer/Footer";

const Home = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <BackgroundImg />
      <Footer/>
    </div>
  );
};

export default Home;
