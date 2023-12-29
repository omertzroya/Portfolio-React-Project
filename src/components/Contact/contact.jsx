import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {

    const form = useRef(null);
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_8de5ewa', 'template_gtl2zsz', form.current, 'h7wO48D3OCZuR_IWv')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Your message has been sent successfully. I will contact you soon.");
      }, (error) => {
          console.log(error.text);
      });
    };
    
    return (
      <section id="contact">

       <h1 className="contactTitle">Contact Me ✉️</h1>
       <span className="contactDesc"> Open for Collaboration 🚀</span>

       <form className="contactForm" ref={form} onSubmit={sendEmail}>
       <input type="text" placeholder="Name" className="name" name="to_name"/>
        <input type="text" placeholder="Email" className="email" name="from_email"/>
        <textarea placeholder="Message" className="message" name="message"></textarea>
        <button className="contactFormButton" type="submit" >Send</button>
       </form>

      </section>
    );
}

export default Contact;