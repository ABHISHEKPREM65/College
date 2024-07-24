import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our
            university's comprehensive eductaion programs. Our cutting-edge
            curriculum is designed to empower students with the knowledge,
            skills and expriences needed to excel in the dynamic field of eductaion.
        </p>
        <p>With a focus on innovation, hands-on learning, and personalized
            mentoship, our programs prepare aspiring educators to make a 
            meaningful impact inclassrooms, schools, and communites.
        </p>
        <p>Whether you aspire to become a teacher, administrator,
            counselor, or educationl leader, our diverse range of programs
            offers the perfect pathway to achieve your goals and unlock your
            full potential in shaping the future of ducation.
        </p>
      </div>
    </div>
  )
}

export default About
