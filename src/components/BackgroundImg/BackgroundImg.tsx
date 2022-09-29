
import "./BackgroundImg.css"
import React from "react"
// Images
import myBackground from "../../imgs/background-image.jpg"

const BackgroundImg = (): JSX.Element => {
  return (
    <div className="hero">
        <div className="mask">
            <img 
                className="into-img"
                src={myBackground}
                alt="intro-img"
            />   
        </div>
        <div className="content">
            <p>Hey, welcome to Lui's page</p>
            <h1>Full-stack Engineer</h1>
        </div>   
    </div>
  )
};

export default BackgroundImg;
