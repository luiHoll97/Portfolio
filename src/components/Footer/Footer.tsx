import React from "react";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./Footer.css";

const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={22} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Monteverde,</p>
              <p>00152 Rome,</p>
              <p>Italy</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <div>
              <p>+44 7889 787168</p>
            </div>
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <div>
              <p>tech.luiholl@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>Lui Holliday</h4>
          <hr
            style={{
              color: "#FFFF99",
              marginTop: "5px",
              marginBottom: "5px",
              opacity: "0.8",
              width: "max",
            }}
          ></hr>
          <p></p>
          <div className="social">
            <FaGithub
              size={25}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaInstagram
              size={25}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={25}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
