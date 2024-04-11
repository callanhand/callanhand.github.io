import './Home.css'
import image1 from "./backgroundImages/image1.jpg";
import { BsFillPersonFill } from "react-icons/bs";
import { BsImageAlt } from "react-icons/bs";
import { BsPersonRaisedHand } from "react-icons/bs";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { BsSend } from "react-icons/bs";


function Home() {

    var divStyle = {
        backgroundImage: 'url(' + image1 + ')',
        width: '100%',
        height: '100vh',
        backgroundPosition: '85% 40%'
    };

    return (
        <div className='home'>

            <div className='image' style={divStyle}> 


                <div className='title'>
                    <h1 className='header'> Callan Hand</h1>
                    <h3 className='sub-title'> Software Engineer | Outdoor Enthusiast | Writer </h3>
                </div>

                {/* <Router>
                    <div> 

                    <div className='nav-bar'>
                        <h3 className="contact-button" onClick=""> About Me </h3>
                        <h3 className="contact-button" onClick=""> Resume </h3>
                        <h3 className="contact-button" onClick=""> Outdoor Activities </h3>
                        <h3 className="contact-button" onClick=""> Contact </h3>
                    </div>

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                    </div>
                </Router> */}

            </div>
            </div>

            /* <div className='circle-container'> 
        <BsFillPersonFill className='icon'/> 
        <BsReverseLayoutTextSidebarReverse className='icon'/>
        <BsImageAlt className='icon'/>
        <BsSend className='icon'/>
        </div> */

            /* <div className='caption-container'> 

            <h3 className='caption'> About Me </h3>

            <h3 className='caption'>  Resume  </h3>

            <h3 className='caption'>  Outdoor Activities </h3>
        
            <h3 className='caption'> Contact </h3>
        </div> */

    );


}

export default Home;