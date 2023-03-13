import React from 'react'
import '../contact/Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'

import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a87hd2e', 'template_mevzo34', form.current, 'S4U_0hOC6ywHJxYIF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>wairimucarolk@gmail.com</h5>
            <a href="mailto:wairimucarolk@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerFill className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>@carolkiarie</h5>
            <a href="http://m.me/name" rel='noreferrer' target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+4917634528323</h5>
            <a href="http://api.whatsapp.com/send?phone+4917634528323" rel='noreferrer' target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="17" placeholder='Your Message' required></textarea>
          <button type='sumbit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}
