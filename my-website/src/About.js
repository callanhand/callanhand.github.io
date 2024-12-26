import './About.css'
import { Link } from "react-router-dom";

function About() {
  return (
    <div className='about-container'>

        <div class="outdoor-vertical-line">
        <Link to="/outdoor">
          <div className='outdoor-title'> Outdoor Activities </div>
          </Link>
        </div>

        <div class="work-vertical-line">
        <Link to="/work">
          <div className='work-title'> Work</div>
          </Link>
        </div>

        <div class="about-vertical-line">
        <Link to="/aboutMe">
          <div className='about-title'> About Me</div>
          </Link>
        </div>
    </div>
  );
}


export default About;