import React from "react";
import { Link } from "react-router-dom";
import "./AboutContent.css";

const AboutContent = (): JSX.Element => {
  return (
    <div className="about">
      <div className="left">
        <h1>Knock, Knock, Lui?</h1>
        <p>
          Hey, I'm Lui. I'm a fullstack engineer and recent graduate from{" "}
          <a className="acad" href="www.academy.tech">
            academy.tech's
          </a>{" "}
          fully funded scholarship programme.
          <hr
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              color: "#FFFF99",
              opacity: "0.8",
              width: "max",
            }}
          ></hr>
          Before my move into tech, I was a Biomedical Science's graduate and
          worked as Project Manager in sustainable construction. As rewarding as
          the work was, I guess I found dev tools more interesting than a
          carpenter's...(sorry)
        </p>
        <Link to={"/contact"}>
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4"
              className="img"
              alt="true"
            />
          </div>
          <div className="img-stack bottom">
            <img
              src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/photo-1619410283995-43d9134e7656.jpeg"
              className="img"
              alt="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
