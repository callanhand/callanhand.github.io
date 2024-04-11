import recylced from './videos/RecycleApp.mp4'
import recylcedDemo from './videos/RecycleDemo.mp4'
import './Recycle.css'

function Recycle() {
   return (

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
}

export default Recycle;