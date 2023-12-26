import React from "react";      
import "./navbar.css";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";
import { useState } from "react";


const NavBar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
      setNavbarOpen(!navbarOpen);
    };

    return (
        <nav className={`navbar ${navbarOpen ? 'open' : ''}`} >
            <div className="desktopMenu">
             <img  src={menu}
          alt=""
          className="menuIcon"
          onClick={toggleNavbar}/>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem  "   >Home</Link>
            <Link  activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem "  >My Skills</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem "  >Portfolio</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem "  >Contact Me</Link>
            </div>    
        </nav>
    );
}

export default NavBar;