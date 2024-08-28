import './Section3.css'
import NavBar from "./NavBar"
import React, { useState, useEffect, useCallback } from 'react';
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import recylced from './videos/RecycleApp.mp4'
import recylcedDemo from './videos/RecycleDemo.mp4'

const Section3 = () => {
    const BeneathTheBlade = () => (
        <div className='blades-container'> 
        <iframe src="https://blades-remix-part2.glitch.me/" width="700" height="600"> </iframe>
        <div className='description-container'> 
        <h2> Beneath The Blades </h2>
            <p> Beneath the Blades is a virtual reality game designed to emulate
               what it would feel like to live at a near microscopic level. Gain a new pespective on
               what it would be like live beneath the blades and how our two envrionments interact with each other.

               This games was a collaberation between myself and two others. I was responsible for coding
               all the game controls, movements, and interactions. The game was developed with Javascript. The
               other two people created the designs and landscape.

               This app was designed to be a fun way for kids to learn about what items can be recylced.
               It uses augmented reality to detect if a recycable symbol is present and if so items will begin to
               fall.
               I developed the app using Unity and Android Development studios.
            </p>
            </div>
        </div>
      );
    
      const Recycle = () => (
        <div>
        <div className='video-container'>
           <video  controls poster="./backgroundImages/Recycle.png">
              <source src={recylced} type="video/mp4" />
           </video>
           <video autoPlay muted controls >
              <source src={recylcedDemo} type="video/mp4" />
           </video>
        </div>
        <div className='video-description'> 
        <h2> Recycle! </h2>
           <p> Beneath the Blades is a virtual reality game designed to emulate
              what it would feel like to live at a near microscopic level. Gain a new pespective on
              what it would be like live beneath the blades and how our two envrionments interact with each other.

              This games was a collaberation between myself and two others. I was responsible for coding
              all the game controls, movements, and interactions. The game was developed with Javascript. The
              other two people created the designs and landscape.

              This app was designed to be a fun way for kids to learn about what items can be recylced.
              It uses augmented reality to detect if a recycable symbol is present and if so items will begin to
              fall.
              I developed the app using Unity and Android Development studios.
           </p>
        </div> 
     </div>
      );
    
      const LibertyAR = () => (
        <div>
            <h1> Liberty PrepARe</h1>
     </div>
      );
    
      const slides = [
        { content: <BeneathTheBlade /> },
        { content: <Recycle /> },
        { content: <LibertyAR /> }
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const nextSlide = () => {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex >= slides.length ? 0 : nextIndex);
      };
    
      const prevSlide = () => {
        const prevIndex = currentIndex - 1;
        setCurrentIndex(prevIndex < 0 ? slides.length - 1 : prevIndex);
      };
    
      return (
        <div>
          <h1>Projects</h1>
          <div className="slideshow-container">
            <div className="slide">
              <BsChevronLeft onClick={prevSlide} className='arrow'/>
              <div className='project'> {slides[currentIndex].content} </div>
              <BsChevronRight onClick={nextSlide} className='arrow'/>
            </div>
          </div>
        </div>
      );
    };

export default Section3;