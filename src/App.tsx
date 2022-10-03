import React from "react";

import "./index.css";
// ==== Components =====
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Thankyou from "./routes/Thankyou";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

function App(): JSX.Element {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="thankyou" element={<Thankyou />} />
      </Routes>
    </>
  );
}

export default App;
