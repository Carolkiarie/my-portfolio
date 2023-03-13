import React from 'react'
import '../about/About.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
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
        {/* <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>300+ Worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
        </div> */}

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
