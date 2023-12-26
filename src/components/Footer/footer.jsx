import React from "react";
import "./footer.css";
import facebook from "../../assets/facebook-icon.png";

const Footer = () => {
    return (
     <footer className="footer">
      <div className="footer__logo">
     <div className="img"> 
     <img src={facebook} alt="github" className="icon"/>
     <img src={facebook} alt="github" className="icon"/>
     <img src={facebook} alt="github" className="icon"/>
     <img src={facebook} alt="github" className="icon"/>
     </div>
     <span>Copyright © OmerTzroya </span>  
     </div>
     </footer>
    );
}

export default Footer;