import './Projects.css'
import { useEffect } from 'react';
import recycleVideo from "./videos/RecycleDemo.mp4";
import recycleVideo2 from "./videos/RecycleApp.mp4";

function Projects() {

  useEffect(() => {
    const slides = document.querySelectorAll('.myslides');
    const dots = document.querySelectorAll('.dot');

    if (slides.length > 0 && dots.length > 0) {
      dots[0].classList.add('active');
    }

    let i = 0;

    function updateSlide(direction) {
      if (direction === 'forward' && i < slides.length - 1) {
        slides[i]?.classList.remove('current');
        slides[i]?.classList.add('past');
        dots[i]?.classList.remove('active');
        i += 1;
        slides[i]?.classList.add('current');
        dots[i]?.classList.add('active');
      } else if (direction === 'backward' && i > 0) {
        slides[i]?.classList.remove('current');
        dots[i]?.classList.remove('active');
        i -= 1;
        dots[i]?.classList.add('active');
        slides[i]?.classList.remove('past');
        slides[i]?.classList.add('current');
      }
    }

    document.getElementById('left')?.addEventListener('click', () => updateSlide('backward'));
    document.getElementById('right')?.addEventListener('click', () => updateSlide('forward'));

    return () => {
      document.getElementById('left')?.removeEventListener('click', () => updateSlide('backward'));
      document.getElementById('right')?.removeEventListener('click', () => updateSlide('forward'));
    };
  }, []); // Run once after the component mounts


  return (

    <div className='projects-container'>
      <div class="myslides">
        <iframe src="https://blades-remix-part2.glitch.me/"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture autoplay=0"
          allowfullscreen></iframe>
        <h2>  BENEATH THE BLADES </h2>
        <p> Beneath the Blades is a virtual reality game designed to simulate the experience of living at a near-microscopic scale. The game was a collaboration between myself and two others. I was responsible for coding all the game controls, movements, and interactions using JavaScript, while my collaborators focused on the design and landscape.
        </p>
      </div>


      <div class="myslides">
        <div className='mountain-container'>
          <div className='design-pic'>  </div>
          <div className='app-vid'>  </div>

        </div>
        <h2> TO THE MOUNTAINS </h2>
        <p> To The Mountains began as a personal challenge to hike all 48 of New Hampshire's 4,000-foot mountains in a single winter season. To track my progress, I developed an app specifically for this purpose. Built using UIKit, Swift, and a Firebase database, the app helps me log each climb. I’m currently adding more features, including a progress bar, sign-in capabilities, and optional input fields for details like hiking companions.


        </p>
      </div>

      <div class="myslides">
        <video width="320" height="240" controls autoplay>
          <source src={recycleVideo} type="video/mp4" />
        </video>
        {/* <iframe src={recycleVideo}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay=0"
          allowfullscreen></iframe> */}
        <h2> Recycle!</h2>
        <p> Recycle! is a fun, interactive augmented reality app that teaches kids which items can and cannot be recycled. The game begins when a recycling symbol is detected, prompting items to fall from the screen. The player must tap on items that shouldn’t be recycled before they reach the symbol. I developed the app using Unity and Android Studio. </p>
      </div>
      <div class="myslides">
        <iframe src="/gpx_routes_map.html"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture autoplay=0"
          allowfullscreen></iframe>
        <h2> BIKE TRIP MAP </h2>
        <p> This map was generated using a Python script I wrote to process GPX data from when I bike packed across the country. Each day's ride is color-coded based on mileage. You can hover over or click on any segment to view more details.</p>
      </div>

      <div id="controls">
        <button class="button" id="left"> &#10094; </button>
        <button class="button" id="right"> &#10095; </button>
      </div>

      <div id="dots">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
        <span class="dot" onclick="currentSlide(4)"></span>
      </div>

    </div>

  );
}

export default Projects;