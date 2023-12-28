import React from "react";
import "./works.css"; 
import photo1 from "../../assets/Screenshots1.png";
import photo2 from "../../assets/1.jpeg";
import photo3 from "../../assets/2.png";
import photo4 from "../../assets/3.png";
import photo5 from "../../assets/4.png";
import photo6 from "../../assets/5.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Works = () => {

  return (
   <section  id="works">
 
   <h2 className="workstitle">Portfolio</h2>
   <span className="worksDesc">A Software developer equipped with proficiency in GIT and GitHub, bringing together analytical thinking, problem solving skills, and effective communication to achieve project goals.</span>
   <div className="worksImgs">


   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo1} style={{ width: '18rem', height:"13rem" }} />
      <Card.Body>
        <Card.Title className="titleCard">Windows Painter (OOP)</Card.Title>
        <Card.Text>
        This project is a simple Windows painter application implemented in C# using Object-Oriented Programming (OOP) principles. The application allows users to draw and fill ellipses on a canvas.
        </Card.Text>
        <Button
                    variant="primary"
                    onClick={() => {
                        window.open('https://github.com/omertzroya/Windows-Painter-C-Sharp-Project', '_blank');
                    }}
                > Demo</Button>
      </Card.Body>
    </Card>

   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo2} style={{ width: '18rem' , height:"13rem"}} />
      <Card.Body>
        <Card.Title className="titleCard">EASYFUN C# Win APP</Card.Title>
        <Card.Text>
        EASYFUN app is a native application developed in collaboration with Microsoft I4G. It won the first place in the competition held in Israel and was presented to Microsoft Israel CEO Danny Yamin and global CEO Satya Nadella at the “Think Next” event.
        </Card.Text>
        <Button
                    variant="primary"
                    onClick={() => {
                        window.open('https://github.com/omertzroya/EasyFun-Win-App-C-Sharp-Project', '_blank');
                    }}
                > Demo</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo5} style={{ width: '18rem' , height:"13rem"  }} />
      <Card.Body>
        <Card.Title className="titleCard">ThinkBig Swift iOS App Project</Card.Title>
        <Card.Text>
        Explore potential matches through the MatchView feature.
        Send messages to users you're interested in connecting with.
        </Card.Text>
        <Button
                    variant="primary"
                    onClick={() => {
                        window.open('https://apps.apple.com/il/app/thinkbig/id1547124095?l=iw', '_blank');
                    }}
                > Demo</Button>
      </Card.Body>
    </Card>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo3} style={{ width: '18rem' , height:"13rem"}} />
      <Card.Body>
        <Card.Title className="titleCard">ToDo List App</Card.Title>
        <Card.Text>
        Web Application with Express.js The app is built using the Express.js framework, which is a popular web framework for Node.js. Express.js simplifies the process of building web applications and APIs.
        </Card.Text>
        <Button
                    variant="primary"
                    onClick={() => {
                        window.open('https://omer-tzroya-todo-list-fullstack-project.onrender.com/', '_blank');
                    }}
                > Demo</Button>
      </Card.Body>
    </Card>
    
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo4} style={{ width: '18rem', height:"13rem" }} />
      <Card.Body>
        <Card.Title className="titleCard">NBA Scores Web App</Card.Title>
        <Card.Text>
        This is a web application built with Node.js and Express that fetches and displays real-time NBA scores using the RapidAPI service. 
        </Card.Text>
        <Button
                    variant="primary"
                    onClick={() => {
                        window.open('https://omer-tzroya-nba-scores-fullstack-project.onrender.com/', '_blank');
                    }}
                > Demo</Button>
      </Card.Body>
    </Card>
    


    
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo6} style={{ width: '18rem' , height:"13rem"}} />
      <Card.Body>
        <Card.Title className="titleCard">Library Management System</Card.Title>
        <Card.Text>
        This is a FullStack web application for managing a library's book inventory. It allows users to view, add, search, and delete books from the database. 
        </Card.Text>
        <Button
                    variant="primary"
                    onClick={() => {
                        window.open('https://omer-tzroya-library-fullstack-project.onrender.com/', '_blank');
                    }}
                > Demo</Button>
      </Card.Body>
    </Card>

   </div>

    </section>
  );
};

export default Works;