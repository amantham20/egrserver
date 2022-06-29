import React from 'react'

import './intro.css'

import ME from './atCSE.jpeg';

import {BiCoffeeTogo} from 'react-icons/bi'
import {FaPizzaSlice} from 'react-icons/fa'
import {AiOutlineProject} from 'react-icons/ai'
import {AiFillProject} from 'react-icons/ai'
import {MdMusicNote} from 'react-icons/md'

const Intro = () => {
  return (
    <section>
        <h1>Hey, </h1>
        <h1>I am Aman Dhruva Thamminana</h1>
        <h3>UnderGrad @ Michigan State University</h3>
        <h4>Student by Day, Developer by Night</h4>

        <img className='imageOfMe' src={ME} alt="" />

        <div className="introTrxt">

          <p>
          Currently pursuing a major in Computer Science, and Mathematics and a Minor in Computational Mathematics, Science & Engineering (CMSE), and Entrepreneurship & Innovation at Michigan State University. I fell in love with computers at first sight. My main interests include Algorithms and Computer theory, Cloud technology, and Machine Learning/Artificial intelligence. I also dabble in other aspects of Business, Engineering, web and mobile development.
          </p><p>
          I'm involved in a variety of extracurriculars on campus, including AI club, Entrepreneurship club, and the Engineering Student Council.
          </p><p>
          I also love spontaneously traveling, listening to overplayed music and consuming too much coffee.
          </p>
        </div>

        <div className='about__cards'>
            <artice className='about__card'>
              <BiCoffeeTogo className='about__icon'/>
              <h5>518</h5>
              <small>Cups of Coffee Drank</small>
            </artice>
            <artice className='about__card'>
              <FaPizzaSlice className='adjust_icon'/>
              <h5>230</h5>
              <small>Slices of Pizza Consumed</small>
            </artice>
            <artice className='about__card'>
              <AiFillProject  className='about__icon' />
              <h5>21</h5>
              <small>Projects Completed</small>
            </artice>
            <artice className='about__card'>
              <MdMusicNote  className='about__icon' />
              <h5>38,307</h5>
              <small>Minutes of Music</small>
            </artice>
        </div>






    </section>

    
  )
}

export default Intro