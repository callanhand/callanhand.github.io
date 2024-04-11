import './BeneathBlade.css'

function Blade() {
    return (

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
  }
  
  export default Blade;