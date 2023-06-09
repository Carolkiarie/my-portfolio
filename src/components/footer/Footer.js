import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import '../footer/Footer.css'

export default function Footer() {
  return (
    <footer>
      <a href="/#" className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com"><FaFacebookF /></a>
        <a href="http://instagram.com"><FiInstagram /></a>
        <a href="http://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Carol@2023. All rights reserved.</small>
      </div>
    </footer>
  )
}
