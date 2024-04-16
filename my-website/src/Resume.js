
import './Resume.css'

function Resume() {
    return (
        <div className='resume-body'>
            <div className='resume-image'>
            </div>
            <div className='resume'> 

                <div className='resume-title'> 
                <h1> RESUME </h1>
                <div className='pdf'> PDF </div>
                </div> 

            
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
            </div>

        </div>
    );
}

export default Resume;