import React from 'react'
import '../header/Header.css'
import Cta from '../cta/Cta'
import Image from '../assets/main-image.png'
import Socials from '../headerSocials/Socials'
import Typed from "react-typed";

export default function Header() {
  const transition = { duration: 3, type: "spring" };
  return (
   <div id='header'>
    <div className='header_container'>
    <h2>Hello! I am</h2>
    <h3>Caroline Kiarie</h3>
    <span className='text-light'>
            <Typed
              strings={[
                "A Frontend Developer keen on improving her skills.",
                "A passionate Web designer with an extreme creative mind🎇",
                "An enthusiastic Coder 🤓🥳😇",
              ]}
              typeSpeed={50}
              backSpeed={20}
              loop
            />
          </span>
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
