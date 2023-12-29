import  React from 'react';
import "./intro.css";
import bg from "../../assets/profile.png";
import { Link } from 'react-scroll';
import btnImg from "../../assets/hireme.png"; 
import resumePDF from '../../assets/resume.pdf';


const Intro = () => {
    const openResume = () => {
        window.open(resumePDF, '_blank');
    };

    return (
        <section className="intro" id="intro"> 
         
         <div className="introContent">
         
         <span className="introText"> I'm <span className="introName">Omer Tzroya <br/> </span> Software Developer </span>
         <p className="introPara">1️⃣ 🧑‍🏫 B.Sc Computer Science. <br/>
2️⃣ experience in developing iOS applications with an app that I built and uploaded to the Appstore.<br/>
3️⃣ experience in full-stack development with websites that I built for small businesses.<br/>
4️⃣ Certificate of Appreciation from the CEO of Microsoft Israel. <br/></p>
         <Link > <button className="btn" onClick={openResume}>
                    <img src={btnImg} alt="" className="btnImg" /> My resume
                </button>
 </Link>
         </div>
         
         <img src={bg} alt="profile" className="bg" />


        </section>
    );
}

export default Intro;