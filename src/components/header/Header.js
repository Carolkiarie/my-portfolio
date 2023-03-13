import React from 'react'
import '../header/Header.css'
import Cta from '../cta/Cta'
import Image from '../assets/main-image.png'
import Socials from '../headerSocials/Socials'

export default function Header() {
  return (
   <div className='header'>
    <div className='header_container'>
    <h5>Hello I'm</h5>
    <h1>Caroline Kiarie</h1>
    <h5 className='text-light'>A FrontEnd Developer</h5>
    <Cta/>
    <Socials/>
    <div className='me'>
    <img src= {Image}/>
    </div>
{/* change this to links */}
    <a href='' className='scroll_down'>Scroll down</a>

    </div>
   </div>
  )
}
