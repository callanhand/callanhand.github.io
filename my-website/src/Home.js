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

            <div className='nav-bar'> 
            <h3 className="contact-button" onClick=""> About Me </h3>
            <h3 className="contact-button" onClick=""> Resume </h3>
            <h3 className="contact-button" onClick=""> Outdoor Activities </h3>
            <h3 className="contact-button" onClick=""> Contact </h3>
            </div>
            </div>

        {/* <div className='circle-container'> 
        <BsFillPersonFill className='icon'/> 
        <BsReverseLayoutTextSidebarReverse className='icon'/>
        <BsImageAlt className='icon'/>
        <BsSend className='icon'/>
        </div> */}
        
        {/* <div className='caption-container'> 

            <h3 className='caption'> About Me </h3>

            <h3 className='caption'>  Resume  </h3>

            <h3 className='caption'>  Outdoor Activities </h3>
        
            <h3 className='caption'> Contact </h3>
        </div> */}

         


        {/* <div className='resume'> 
            <h1> RESUME </h1>

            <hr class="top-line" />

            <h2> Experience </h2>

            <hr class="section-line" />

            <div class="flex-grid">
                <div class="col1"> Sept. 2022 - Present  </div>
                <div class="col"> Programmer/Analyst - L.L. Bean
                    <br />
                    <ul>
                        <li> Implemented architectural application changes to multithread API calls to improve responsiveness and data retrieval </li>
                        <li> Created a new JavaRestful API that queried a relational database for product data, making product lookup over one hundred times faster</li>

                        <li>Improved and optimized internal web applications built with React.js/Javascript front end and Java/Node.js backend </li>
                        <li>
                            Strong track record of collaborating with cross-functional teams, vendors, and stakeholders
                        </li>

                    </ul>
                </div>
                <div class="col3"> Freeport, ME</div>
            </div>

            <hr />

            <div class="flex-grid">
                <div class="col1"> Aug. 2021 - Aug. 2022 </div>
                <div class="col"> Assistant Hut Manager - Appalachian Mountain Club
                    <br />
                    <ul>
                        <li> Implemented architectural application changes to multithread API calls to improve responsiveness and data retrieval </li>
                        <li> Created a new JavaRestful API that queried a relational database for product data, making product lookup over one hundred times faster</li>

                        <li>Improved and optimized internal web applications built with React.js/Javascript front end and Java/Node.js backend </li>
                        <li>
                            Strong track record of collaborating with cross-functional teams, vendors, and stakeholders
                        </li>

                    </ul>
                </div>
                <div class="col3"> Gorham, NH </div>
            </div>

            < hr />

            <div class="flex-grid">
                <div class="col1"> May 2020 - Aug. 2020 </div>
                <div class="col"> TechStart Intern - Liberty Mutual Insurance
                    <br />
                    <ul>
                        <li> Implemented architectural application changes to multithread API calls to improve responsiveness and data retrieval </li>
                        <li> Created a new JavaRestful API that queried a relational database for product data, making product lookup over one hundred times faster</li>

                        <li>Improved and optimized internal web applications built with React.js/Javascript front end and Java/Node.js backend </li>
                        <li>
                            Strong track record of collaborating with cross-functional teams, vendors, and stakeholders
                        </li>

                    </ul>
                </div>
                <div class="col3"> Gorham, NH </div>
            </div>

            <h2> Education </h2>

            <hr class="section-line" />

            <div class="flex-grid">
                <div class="col1"> 2017 - 2021  </div>
                <div class="col"> James Madison University - B.S. Computer Science - Minor Creative Writing
                    <br />
                    <ul> <li> President's List: Fall 2020, Spring 2020, 2021 </li></ul>

                </div>
                <div class="col3"> Harrisonburg, VA </div>
            </div>

            <hr />

            <div class="flex-grid">
                <div class="col1"> Spring 2019  </div>
                <div class="col"> University of Edinburgh (Study Abroad)
                    <br />
                    <ul> <li> Mentor for Hello World Hackaton </li></ul>

                </div>
                <div class="col3"> Edinburgh, Scotland</div>
            </div>
            </div> */}

        </div>
    );


}

export default Home;