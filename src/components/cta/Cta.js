import React from 'react'
import '../cta/Cta.css'
import Cv from '../assets/kiarie caroline.pdf'

export default function Cta() {
  return (
    <div className='cta'>
        {/* change the use of anchor tags to links */}
    <a href= {Cv} className='btn'>Download CV</a>
    <a href='#contact' className='btn'>Lets talk</a>
    </div>
  )
}
