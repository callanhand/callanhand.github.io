import './Projects.css'
import hackathon from './videos/HackathonApp.mp4'
import bird from "./backgroundImages/bird.jpg";
import { Link } from "react-router-dom";

function Projects() {

   return (

      <div>


         <div class="projects-container">

            <div className='background'>
               <Link to="/blade">
               <div className='project-caption'> 
               <h2 className='project-title'> Beneath The Blades</h2>
               <p className='project-text'> Beneath the Blades is a virtual reality game designed to emulate
               what it would feel like to live at a near microscopic level. Gain a new pespective on
               what it would be like live beneath the blades and how our two envrionments interact with each other.
               </p>
               </div>
               </Link>
            </div>
            <div className='background'>
            <Link to="/recycle">
               <div className='project-caption'> 
               <h2 className='project-title'> Recycle! </h2>
               <p className='project-text'> Beneath the Blades is a virtual reality game designed to emulate
               what it would feel like to live at a near microscopic level. Gain a new pespective on
               what it would be like live beneath the blades and how our two envrionments interact with each other.
               </p>
               </div>
               </Link>
            </div>
            <div className='background'>
               <div className='project-caption'> 
               <h2 className='project-title'> Liberty PrepARe</h2>
               <p className='project-text'> Beneath the Blades is a virtual reality game designed to emulate
               what it would feel like to live at a near microscopic level. Gain a new pespective on
               what it would be like live beneath the blades and how our two envrionments interact with each other.
               </p>
               
               </div>
            </div>
         </div>


         {/* <div class="white-box"></div>
         <div class="colorful-box">

            <h2> Beneath The Blades</h2>
         </div> */}


         {/* <div className='projects'>
            <div className='project'>
               <Link to="/blade">
                  <img src={BeneathBlades} />
               </Link>
               <h2> Beneath The Blades </h2>
               <div> A Virtual Reality Game</div>
            </div>




            <div className='project'>
               <img className='recycle' src={Recylce} />
               <h2> Recycle! </h2>
               <div> An Augmented Reality App</div>
            </div>
            <div className='project'>
               <img src={Hackathon} />
               <h2> Home Insurance App </h2>
               <div> An Augmented Reality App</div>
            </div>

         </div> */}




         {/* 

         <div className='description'>
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


         <div className='video-container'>
            <video width="750" height="500" controls >
               <source src={recylced} type="video/mp4" />
            </video>
            <video autoPlay muted width="750" height="500" controls >
               <source src={recylcedDemo} type="video/mp4" />
            </video>
         </div>

         <div className='description'>
            <h2> Augmented Reality Home Insurance App </h2>
            <p> This app was designed to be a fun way for kids to learn about what items can be recylced.
               It uses augmented reality to detect if a recycable symbol is present and if so items will begin to
               fall.
               I developed the app using Unity and Android Development studios.
            </p>
         </div>

         <video width="750" height="500" controls >
            <source src={hackathon} type="video/mp4" />
         </video> */}

      </div>


   );
}

export default Projects;