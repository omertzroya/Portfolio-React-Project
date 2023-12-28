import React from "react";
import "./footer.css";
import facebook from "../../assets/facebook-icon.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
const Footer = () => {
    return (
     <footer className="footer">
      <div className="footer__logo">
     <div className="img"> 
     <img src={facebook} alt="github" className="icon" onClick={() => {
    window.open('https://www.facebook.com/omer.tzruya', '_blank');
}} />
     <img src={linkedin} alt="github" className="icon" onClick={() => {
    window.open('https://www.linkedin.com/in/omer-tzroya/', '_blank');
}} />
     <img src={github} alt="github" className="icon" onClick={() => {
    window.open('https://github.com/omertzroya', '_blank');
}}/>
    
     </div>
     <span>Copyright © OmerTzroya </span>  
     </div>
     </footer>
    );
}

export default Footer;
