import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'
import '../headerSocials/Socials.css'

export default function() {
  return (
    <div className='header_socials'>
        <a href=" https://Linkedin.com" target= "_blank"> <BsLinkedin/> </a>
        <a href=" https://github.com" target= "_blank"> <BsGithub/> </a>
        <a href=" https://medium.com" target= "_blank"> <BsMedium/>  </a>
    </div>
  )
}
