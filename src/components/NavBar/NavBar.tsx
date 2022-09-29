import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./NavBarStyles.css"
import myLogo from "../../imgs/H2.png"
import { FaBars, FaTimes } from "react-icons/fa"

const NavBar = (): JSX.Element => {

    // state for dropdown menu
    const [dropdownStatus, setDropdownStatus] = useState<boolean>(false)
  return (
    <div className="header">
      <Link to={"/"}>
        <img src={myLogo} className="myLogo"></img>
      </Link>
      <ul className={dropdownStatus ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/about"}>About</Link>
        </li>
        <li>
            <Link to={"/projects"}>Projects</Link>
        </li>
        <li>
            <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setDropdownStatus(!dropdownStatus)}>
        {
            !dropdownStatus ? <FaBars size={30} style={{color: "#fff"}}/> :
            <FaTimes size={30} style={{color:"#fff"}}/>
        }
      </div>
    </div>
  )
};

export default NavBar;
