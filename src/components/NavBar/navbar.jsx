import React from "react";      
import "./navbar.css";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";

const NavBar = () => {
    return (
        <nav className="navbar" >
            <div className="desktopMenu">

            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">My Skills</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">About</Link>
            </div>

            <button className="desktopMenuBtn"><img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me</button>
        </nav>
    );
}

export default NavBar;