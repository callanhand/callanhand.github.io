import "./AboutMe.css"
import { GiMountainRoad } from "react-icons/gi";
import { GiDogBowl } from "react-icons/gi";
import { GiDutchBike } from "react-icons/gi";
import { GiFountainPen } from "react-icons/gi";
import { GiFamilyHouse } from "react-icons/gi";
import { GiAirplane } from "react-icons/gi";
import { GiBookCover } from "react-icons/gi";
import { GiCardAceHearts } from "react-icons/gi";
import { GiBigWave } from "react-icons/gi";
import { GiAcid } from "react-icons/gi";

import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";
import { BsXCircle } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useState } from "react";

function AboutMe() {

   const aboutmeIcons = [
      <GiMountainRoad size={100} />,
      <GiDogBowl size={100} />,
      <GiDutchBike size={100} />,
      <GiFountainPen size={100} />,
      <GiFamilyHouse size={100} />,
      <GiAirplane size={100} />,
      <GiBookCover size={100} />,
      <GiCardAceHearts size={100} />,
      <GiBigWave size={100} />,
      <GiAcid size={100} />
   ]

   const iconText = [
      {
         text: "I LOVE FOSTERING DOGS"
      },
      {
         text: "I LOVE BIKING"
      },
      {
         text: "I LOVE WRITING"
      },
      {
         text: "I LOVE MY FAMILY"
      },
      {
         text: "I LOVE TO TRAVEL"
      },
      {
         text: "I LOVE BOOKS"
      },
      {
         text: "I LOVE PLAYING CARDS"
      },
      {
         text: "I LOVE THE OCEAN"
      },
      {
         text: "I LOVE SCIENCE"
      },
      {
         text: "I LOVE THE MOUNTAINS"
      }
   ]

   // State to track the current start index for the icons
   const [startIndex, setStartIndex] = useState(0);
   const iconsPerPage = 3; // Number of icons to show at a time
   const [currentIndex, setCurrentIndex] = useState(0);

   // Function to handle clicking the left arrow (shifts by one and wraps around)
   const handlePrev = () => {
      const newStartIndex = startIndex - 1;
      if (newStartIndex < 0) {
         // Wrap around to the last icon if at the start
         setStartIndex(aboutmeIcons.length - 1);
         setCurrentIndex(aboutmeIcons.length - 1);
      } else {
         setStartIndex(newStartIndex);
         setCurrentIndex(currentIndex - 1);
      }
   };

   // Function to handle clicking the right arrow (shifts by one and wraps around)
   const handleNext = () => {
      const newStartIndex = startIndex + 1;
      if (newStartIndex >= aboutmeIcons.length) {
         // Wrap around to the first icon if at the end
         setStartIndex(0);
         setCurrentIndex(0);
      } else {
         setStartIndex(newStartIndex);
         setCurrentIndex(currentIndex + 1);
      }
   };

   // Function to get the icons to display, wrapping around the array as needed
   const getDisplayedIcons = () => {
      let displayedIcons = [];
      for (let i = 0; i < iconsPerPage; i++) {
         const index = (startIndex + i) % aboutmeIcons.length; // Wrap around using modulo
         displayedIcons.push(aboutmeIcons[index]);
      }
      return displayedIcons;
   };

   return (

      <div className="aboutme-container">

            <Link to="/about">
               <BsXCircle size={30} className="aboutme-exit"/>
            </Link>

         <div className="aboutme-icon">
            {getDisplayedIcons()}
            <div className="icon-text"> {iconText[currentIndex].text} </div>
         </div>
         <div className='arrow'>
            <BiLeftArrowCircle size={30} className='left-arrow-aboutme' onClick={handlePrev} />
            <BiRightArrowCircle size={30} className='right-arrow-aboutme' onClick={handleNext} />
         </div>

      </div>


   );
}

export default AboutMe;