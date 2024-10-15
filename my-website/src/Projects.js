import './Projects.css'
import image2 from "./backgroundImages/marsh.jpg";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowReturnRight } from "react-icons/bs";
import { useEffect } from 'react';
import recycleVideo from "./videos/RecycleDemo.mp4";
import recycleVideo2 from "./videos/RecycleApp.mp4";

function Projects() {

  useEffect(() => {
    const slides = document.querySelectorAll('.myslides');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length > 0 && dots.length > 0) {
      dots[0].classList.add('active');
    }
    
    let i = 0;

    function updateSlide(direction) {
      if (direction === 'forward' && i < slides.length - 1) {
        slides[i]?.classList.remove('current');
        slides[i]?.classList.add('past');
        dots[i]?.classList.remove('active');
        i += 1;
        slides[i]?.classList.add('current');
        dots[i]?.classList.add('active');
      } else if (direction === 'backward' && i > 0) {
        slides[i]?.classList.remove('current');
        dots[i]?.classList.remove('active');
        i -= 1;
        dots[i]?.classList.add('active');
        slides[i]?.classList.remove('past');
        slides[i]?.classList.add('current');
      }
    }

    document.getElementById('left')?.addEventListener('click', () => updateSlide('backward'));
    document.getElementById('right')?.addEventListener('click', () => updateSlide('forward'));

    return () => {
      document.getElementById('left')?.removeEventListener('click', () => updateSlide('backward'));
      document.getElementById('right')?.removeEventListener('click', () => updateSlide('forward'));
    };
  }, []); // Run once after the component mounts


   return (

      <div> 
         <div class="myslides">
            <iframe src="https://blades-remix-part2.glitch.me/"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <h2>  BENEATH THE BLADES </h2>
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


        <div class="myslides">
          <div className='mountain-container'> 
          <div className='design-pic'>  </div>
          <div className='app-vid'>  </div>

            </div>
            <h2> TO THE MOUNTAINS </h2>
            <p> While interning for NBC Sports Boston, I was given the opportunity to record a mock newscast.</p>
        </div>

        <div class="myslides">
             <iframe src={recycleVideo}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <h2> MARQUETTE TAKES DOWN #1 VILLANOVA</h2>
            <p> My video report following Marquette basketball's victory over #1Villanova.</p>
        </div>
        <div class="myslides">
             <iframe src="/gpx_routes_map.html"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <h2> BIKE TRIP MAP </h2>
            <p> Created a python script to visualize my bike pack across the country. </p>
        </div>

        <div id="controls">
            <button class="button" id="left"> &#10094; </button>
            <button class="button" id="right"> &#10095; </button>
        </div>

        <div id="dots">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
        </div>

      </div> 



      /* <div className='projects-container'>

            <div className='spacer'> 
               <Link className='nav-button' to="/blade">
                  <h2 className='project-title1'> <BsArrowReturnRight /> Beneath The Blades  </h2>
               </Link>

               <Link className='nav-button' to="/recycle">
                  <h2 className='project-title2'> <BsArrowReturnRight /> Recycle! </h2>
               </Link>

               <Link className='nav-button' to="/blade">
                  <h2 className='project-title3'> <BsArrowReturnRight /> Liberty PrepARe </h2>
               </Link>

               </div> */



      // < div class="projects-container" >

      //       <div className='background'>
      //          <Link to="/blade">
      //          <div className='project-caption'> 
      //          <h2 className='project-title'> Beneath The Blades</h2>
      //          <p className='project-text'> Beneath the Blades is a virtual reality game designed to emulate
      //          what it would feel like to live at a near microscopic level. Gain a new pespective on
      //          what it would be like live beneath the blades and how our two envrionments interact with each other.
      //          </p>
      //          </div>
      //          </Link>
      //       </div>
      //       <div className='background'>
      //       <Link to="/recycle">
      //          <div className='project-caption'> 
      //          <h2 className='project-title'> Recycle! </h2>
      //          <p className='project-text'> Beneath the Blades is a virtual reality game designed to emulate
      //          what it would feel like to live at a near microscopic level. Gain a new pespective on
      //          what it would be like live beneath the blades and how our two envrionments interact with each other.
      //          </p>
      //          </div>
      //          </Link>
      //       </div>
      //       <div className='background'>
      //          <div className='project-caption'> 
      //          <h2 className='project-title'> Liberty PrepARe</h2>
      //          <p className='project-text'> Beneath the Blades is a virtual reality game designed to emulate
      //          what it would feel like to live at a near microscopic level. Gain a new pespective on
      //          what it would be like live beneath the blades and how our two envrionments interact with each other.
      //          </p>
               
      //          </div>
      //       </div>
      //    </div > 


      //     <div class="white-box"></div>
      //    <div class="colorful-box">

      //       <h2> Beneath The Blades</h2>
      //    </div> 


      //    <div className='projects'>
      //       <div className='project'>
      //          <Link to="/blade">
      //             <img src={BeneathBlades} />
      //          </Link>
      //          <h2> Beneath The Blades </h2>
      //          <div> A Virtual Reality Game</div>
      //       </div>




      //       <div className='project'>
      //          <img className='recycle' src={Recylce} />
      //          <h2> Recycle! </h2>
      //          <div> An Augmented Reality App</div>
      //       </div>
      //       <div className='project'>
      //          <img src={Hackathon} />
      //          <h2> Home Insurance App </h2>
      //          <div> An Augmented Reality App</div>
      //       </div>

      //    </div> 

      //    <div className='description'>
      //       <h2> Beneath The Blades </h2>
      //       <p> Beneath the Blades is a virtual reality game designed to emulate
      //          what it would feel like to live at a near microscopic level. Gain a new pespective on
      //          what it would be like live beneath the blades and how our two envrionments interact with each other.

      //          This games was a collaberation between myself and two others. I was responsible for coding
      //          all the game controls, movements, and interactions. The game was developed with Javascript. The
      //          other two people created the designs and landscape.

      //          This app was designed to be a fun way for kids to learn about what items can be recylced.
      //          It uses augmented reality to detect if a recycable symbol is present and if so items will begin to
      //          fall.
      //          I developed the app using Unity and Android Development studios.
      //       </p>
      //    </div>


      //    <div className='video-container'>
      //       <video width="750" height="500" controls >
      //          <source src={recylced} type="video/mp4" />
      //       </video>
      //       <video autoPlay muted width="750" height="500" controls >
      //          <source src={recylcedDemo} type="video/mp4" />
      //       </video>
      //    </div>

      //    <div className='description'>
      //       <h2> Augmented Reality Home Insurance App </h2>
      //       <p> This app was designed to be a fun way for kids to learn about what items can be recylced.
      //          It uses augmented reality to detect if a recycable symbol is present and if so items will begin to
      //          fall.
      //          I developed the app using Unity and Android Development studios.
      //       </p>
      //    </div>

      //    <video width="750" height="500" controls >
      //       <source src={hackathon} type="video/mp4" />
      //    </video> 
      //    </div>

      // </div >


   );
}

export default Projects;