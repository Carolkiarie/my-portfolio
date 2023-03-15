import React from 'react'
import '../about/About.css'
import Image from '../assets/main-image.png'



export default function about() {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={Image} alt="me-about" />
        </div>
      </div>

      <div className="about__content">
        
        <p>
          I am passionate frontend developer who specializes in creating visually
          stunning websites that deliver unparalled user experience.
          My knowledge in HTML, CSS ,Javascript and React, combined with proficiency 
          in libraries such as Bootstrap allows me to create 
          dynamic and interactive designs. I have experience with version control systems 
          such as Git and strong problem-solving, debugging and troubleshooting skills
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  </section>
  )
}
