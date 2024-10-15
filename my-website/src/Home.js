import './Home.css';
import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Link } from "react-router-dom";

function Home() {

  useEffect(() => {
    // Set a timeout to delay the animation by 5 seconds
    const timer = setTimeout(() => {
      // Wrap every letter in a span
      var textWrapper = document.querySelector('.name-text .letters');
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        // Set text to visible just before animation starts
        document.querySelector('.name-text').style.visibility = 'visible';

        // Animation
        anime.timeline({ loop: true })
          .add({
            targets: '.name-text .letter',
            translateY: ["1.1em", 0],
            translateX: ["0.55em", 0],
            translateZ: 0,
            rotateZ: [180, 0],
            duration: 750,
            easing: "easeOutExpo",
            delay: (el, i) => 100 * i
          }).add({
            targets: '.name-text',
            duration: 10000, // 10-second pause before the next loop
            easing: "linear",
            opacity: 1 // Keep it at full opacity
          });
      }
    }, 1000); // 1-second delay 

    // Cleanup timer when component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (

    <div>
      <div class="home-container">
        <div class="image-container">

          <div class="text-container">
            <h1 class="name-text">
              <span class="text-wrapper">
                <span class="letters">HI! I'M CALLAN</span>
              </span>
            </h1>

            <p class="intro-text"> I'm a creative software engineer with a passion for the outdoors.</p>

            <Link class="btn" to="/about"> Learn More </Link>

          </div>

        </div>
      </div>

    </div>


  );
}

export default Home;