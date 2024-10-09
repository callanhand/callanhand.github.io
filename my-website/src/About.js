import './About.css'
import bikeImage from "./backgroundImages/bike.jpeg";
import profilePic from "./backgroundImages/me.jpeg";


function About() {
  return (
    <div className='about-container'>
      <div className='about-container2'>
        <div className='about-wrapper'>

          <div class="item">
            <div class="polaroid"><img src={bikeImage} />
              <div class="caption">Outdoor Activities </div>
            </div>
          </div>
          <div class="item">
            <div class="polaroid"><img src="https://image.ibb.co/mmyvrc/anniversary_balloons_birthday_68369.jpg" />
              <div class="caption">Work</div>
            </div>
          </div>

          <div class="item">
            <div class="polaroid"><img src={profilePic} />
              <div class="caption">About Me</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default About;