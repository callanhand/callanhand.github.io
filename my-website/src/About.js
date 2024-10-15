import './About.css'
import bikeImage from "./backgroundImages/bike.jpeg";
import profilePic from "./backgroundImages/me.jpeg";
import { Link } from "react-router-dom";
import { FaMapPin } from "react-icons/fa";

function About() {
  return (
    <div className='about-container'>

        <div class="outdoor-vertical-line">
          <div className='outdoor-title'> Outdoor Activities</div>
        </div>

        <div class="work-vertical-line">
          <div className='work-title'> Work</div>
        </div>

        <div class="about-vertical-line">
          <div className='about-title'> About</div>
        </div>

      {/* <div class="item">
          <Link to="/blade">
            <div class="polaroid"><img src={bikeImage} />
              <div class="caption">Outdoor Activities </div>
            </div>
            </Link>
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
          </div> */}
    </div>
  );
}


export default About;