import './Work.css'
import { BiLogoJava } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiMobile } from "react-icons/bi";
import { BiLogoApple } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsXCircle } from "react-icons/bs";
import { useState } from "react";

function Work() {

   const [currentIndex, setCurrentIndex] = useState(0);

   // Work items array to loop through
   const workItems = [
      {
         title: "Full Stack Development",
         icons: [<BiLogoJava size={60} />, <BiLogoJavascript size={60} />, <BiLogoNodejs size={60} />, <BiLogoReact size={60} />],
         text: "Javascript, Node JS, Java ndjgbdsjgest gsjfjsdbgsd jk fdkgsjdkgesbk l sjgbsf dbdsjkfb sefsd fndjoghes bgsjoh obfsbjogs ljrhkdr sn sngoisbs gsdjgo"
      },
      {
         title: "API Development",
         icons: [<BiLogoJava size={60} />, <BiLogoNodejs size={60} />],
         text: "API, JavaRestful Service jgdighs  pgsh nafkgsghnfds ighdsgnl hzkiodt ngsdgh syklj s ioh yda n drp nklfngldrn giroh gs"
      },
      {
         title: "iOS Development",
         icons: [<BiMobile size={60} />, <BiLogoApple size={60} />],
         text: "iOS development, Swift jskryj n opejt spo grdnpaprhny ropr ngkhpflg vaptgjrp om gepksyjspojfg mfpksdth p neskthse "
      }
   ];


   // Handle left arrow click
   const handlePrevClick = () => {

      setCurrentIndex((prevIndex) => (prevIndex === 0 ? workItems.length - 1 : prevIndex - 1));
   };

   // Handle right arrow click
   const handleNextClick = () => {

      setCurrentIndex((prevIndex) => (prevIndex === workItems.length - 1 ? 0 : prevIndex + 1));
   };

   return (

      <div className="work-container">

         <div className='work-item-container'>
            <div className="work-items">
               <Link to="/about">
                  <BsXCircle size={30} className='work-back' />
               </Link>
               <h2 className='title'>{workItems[currentIndex].title}</h2>
               <div className='work1'>
                  <div className='icon-list'>
                     {workItems[currentIndex].icons.map((icon, index) => (
                        <span key={index}>{icon}</span>
                     ))}
                  </div>
                  <div className='work-text'>
                     <p>{workItems[currentIndex].text}</p>
                  </div>
               </div>
               <div className='arrow'>
                  <BiLeftArrowCircle size={30} className='left-arrow' onClick={handlePrevClick} />
                  <BiRightArrowCircle size={30} className='right-arrow' onClick={handleNextClick} />
               </div>
            </div>
         </div>
      </div>


   );
}

export default Work;