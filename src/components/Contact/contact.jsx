import React from "react";
import "./contact.css";

const Contact = () => {
    return (
      <section id="contact">

       <h1 className="contactTitle">Contact Me</h1>
       <span className="contactDesc"> Open for Collaboration 🚀</span>

       <form className="contactForm">
       <input type="text" placeholder="Name" className="name"/>
        <input type="text" placeholder="Email" className="email"/>
        <textarea placeholder="Message" className="message"></textarea>
        <button className="contactFormButton">Send</button>
       </form>

      </section>
    );
}

export default Contact;