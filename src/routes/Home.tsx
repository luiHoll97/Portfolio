import React from "react";

// === Components ===
import NavBar from "../components/NavBar/NavBar";
import BackgroundImg from "../components/BackgroundImg/BackgroundImg";

const Home = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <BackgroundImg />
    </div>
  );
};

export default Home;
