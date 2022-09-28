import { greet } from "./utils/greet";
import React from "react";

import "./index.css"
// ==== Components =====
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import About from "./routes/About";
import {Route, Routes} from "react-router-dom"


function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </>  

  )
}

export default App;
