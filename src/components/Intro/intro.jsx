import  React from 'react';
import "./intro.css";
import bg from "../../assets/profile.png";
import { Link } from 'react-scroll';
import btnImg from "../../assets/hireme.png"; 


const Intro = () => {
    return (
        <section className="intro" id="intro"> 
        
         <div className="introContent">
         <span className="hello">Hello,</span>
         <span className="introText"> I'm <span className="introName">Omer Tzroya <br/> </span> Software Developer </span>
         <p className="introPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Nulla ultricies arcu ex, id bibendum diam imperdiet et.</p>
         <Link > <button className="btn"> <img src={btnImg} alt=""  className='btnImg'/>Hire me</button> </Link>
         </div>
         <img src={bg} alt="profile" className="bg" />
        


        </section>
    );
}

export default Intro;