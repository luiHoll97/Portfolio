import React from "react";
import "./ProjectCard.css";
import workData from "../Work/workData";

interface IProject {
  id: number;
  title: string;
  description: string;
  imgsrc: string;
  webLink: string;
  finished: boolean;
  group: boolean;
}

// const numberOfProjects = (workData : IProject[]) => {
//     let count = 0
//     for (const project of workData) {
//         count++
//     }
//     return count
// }

const ProjectCard = (): JSX.Element => {
  return (
    <div className="work-container">
      <h1 className="proj-heading">Recents</h1>
      <div className="proj-container">
        {workData.map((project: IProject) => (
          <div
            className={project.finished ? "proj-card" : "proj-card-dev"}
            key={project.id}
          >
            <div className="imgtst">
              <div
                className="img-cont"
                onClick= {project.finished ? () => window.location.href = project.webLink : undefined}
              >
                <img src={project.imgsrc} alt="proj-card" />
                {project.finished === false && (
                  <div className="centered">Coming soon</div>
                )}
                {project.group && <div className="top">Team Project</div>}
              </div>
            </div>

            <h2 className="proj-title">{project.title}</h2>
            <div className="pro-details">
              <p>{project.description}</p>
              <div className="pro-buttons">
                { project.finished && <button
                  className="btn"
                  onClick={() => (window.location.href = project.webLink)}
                >
                  {project.finished ? "View" : "Ok then.."}
                </button>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
