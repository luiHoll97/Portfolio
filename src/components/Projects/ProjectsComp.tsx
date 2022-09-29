import React from "react";
import "./ProjectsComp.css";

interface ProjectProps {
  heading: string;
  text: string;
}

const ProjectsComp = ({ heading, text }: ProjectProps): JSX.Element => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProjectsComp;
