import bird from "./backgroundImages/bird.jpg";
import './About.css';

function About() {
   var divStyle = {
      backgroundImage: 'url(' + bird + ')',
      width: '50%',
      height: '100vh',
      backgroundPosition: '85% 40%'
  };

    return (

       <div> 

         <div className='image-container' style={divStyle}>  
         <img src={bird} className='bird-image' alt="bird on pole in water" />
         </div>

       </div>
  

    );
  }
  
  export default About;