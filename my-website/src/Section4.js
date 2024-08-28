import './Section4.css'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { BsLinkedin } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

const Section4 = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
       e.persist();
       e.preventDefault();
       setIsSubmitting(true);
       emailjs
          .sendForm(
             'service_0pypgfc',
             'template_le8wzf1',
             e.target,
             'uUYgM1ftaZdpCabR5'
          )
          .then(
             (result) => {
                setStateMessage('Message sent!');
                setIsSubmitting(false);
                setTimeout(() => {
                   setStateMessage(null);
                }, 5000); // hide message after 5 seconds
             },
             (error) => {
                setStateMessage('Something went wrong, please try again later');
                setIsSubmitting(false);
                setTimeout(() => {
                   setStateMessage(null);
                }, 5000); // hide message after 5 seconds
             }
          );
 
       // Clears the form after sending the email
       e.target.reset();
    };
    return (
       <div className='section4-container'>
          <div className=''>
             <h2> Get In Touch</h2>
             <form className='form-content' onSubmit={sendEmail}>
                <div className='input-box'>
                   <label>Name: </label>
                   <input type="text" name="user_name" />
                   <label>Email: </label>
                   <input type="email" name="user_email" />
                </div>
                <div className='input-box-message'>
                   <label className='message'>Message: </label>
                   <textarea name="message" />
                </div>
                <div className='submit'>
                   <input type="submit" value="Send" disabled={isSubmitting} />
                   {stateMessage && <p>{stateMessage}</p>}
                </div>
 
             </form>
          </div>
          <div className='contact-info'>
             <a href="https://www.linkedin.com/in/callan-hand-81304818a/" target="_blank" ><BsLinkedin className='contact-icon' /></a>
             <div className='contact-email'> <BsEnvelope className='contact-icon' /> <span className='email'> callanhand4@outlook.com </span></div>
          </div>
       </div>
    );
 };
export default Section4;