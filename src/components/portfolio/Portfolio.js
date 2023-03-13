import React from 'react'
import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'
import IMG4 from '../assets/portfolio4.jpg'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.jpg'
import '../portfolio/Portfolio.css'


export default function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Huddle Landing page',
      github: 'https://github.com/Carolkiarie/landing-page',
      demo: 'https://carolkiarie.github.io/landing-page/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Random-Advice-Generator',
      github: 'https://github.com/Carolkiarie/advice-generator-app',
      demo: 'https://carolkiarie.github.io/advice-generator-app/'
    },
    {
      id: 3,
      image: IMG3,
      title: 'News-Homepage',
      github: 'https://github.com/Carolkiarie/news-homepage-main',
      demo: 'https://carolkiarie.github.io/news-homepage-main/'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Crypto Currency Dashboard',
      github: 'http://github.com',
      demo: 'https://dribbble.com/Alien_pixels'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Crypto Currency Dashboard',
      github: 'http://github.com',
      demo: 'https://dribbble.com/Alien_pixels'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Crypto Currency Dashboard',
      github: 'http://github.com',
      demo: 'https://dribbble.com/Alien_pixels'
    },
  ]
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' rel='noreferrer' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
