import React from "react";
import "./works.css"; 
import profile from "../../assets/Screenshots1.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Works = () => {
  return (
   <section  id="works">
   
   <h2 className="workstitle">Portfolio</h2>
   <span className="worksDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Nulla ultricies arcu ex, id bibendum diam imperdiet et.</span>
   <div className="worksImgs">


   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile} style={{ width: '18rem' }} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

   </div>

    </section>
  );
};

export default Works;