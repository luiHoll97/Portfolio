import React from "react"

// === Components ===
import NavBar from "../components/NavBar/NavBar";
import BackgroundImg from "../components/BackgroundImg/BackgroundImg";

const Home = () : JSX.Element => {
  return (
    <div>
      <NavBar />
      <br style={{color:"white"}}></br>
      <BackgroundImg />
    </div>
  )
};

export default Home;
