import React, { useState, useEffect } from 'react';
import './Section1.css'
import NavBar from "./NavBar"
import { BsArrowDown } from "react-icons/bs";

const pictures = [
    {
        id: 1,
        src: "https://live.staticflickr.com/65535/53664068362_974fa7754b_k.jpg",
    },
    {
        id: 2,
        src: "https://live.staticflickr.com/7857/47226838101_14771b89d3_k.jpg",
    },
    {
        id: 3,
        src: "https://live.staticflickr.com/65535/53664097832_dcf79cf16b_h.jpg",
    },
    {
        id: 4,
        src: "https://live.staticflickr.com/65535/53665427995_5460996698_h.jpg",
    },
    {
        id: 5,
        src: "https://live.staticflickr.com/65535/53665182383_349f6a5e79_h.jpg",
    },
    {
        id: 6,
        src: "https://live.staticflickr.com/65535/53665426630_1444505dfc_h.jpg",
    },
    {
        id: 7,
        src: "https://live.staticflickr.com/65535/53664088892_390260b5b8_h.jpg",
    },
    {
        id: 8,
        src: "https://live.staticflickr.com/65535/53664083942_232f71a79e_h.jpg",
    },
    {
        id: 9,
        src: "https://live.staticflickr.com/65535/53665411370_6dc62b5692_h.jpg",
    },
    {
        id: 10,
        src: "https://live.staticflickr.com/65535/53665656040_e574cfc0fc_h.jpg",
    },
    {
        id: 11,
        src: "https://live.staticflickr.com/65535/53665655915_0c2330ba3c_h.jpg",
    },
    {
        id: 12,
        src: "https://live.staticflickr.com/65535/53665655865_66ff622864_h.jpg",
    },
    {
        id: 13,
        src: "https://live.staticflickr.com/65535/53665409798_98d0da6fd1_h.jpg",
    },
    {
        id: 14,
        src: "https://live.staticflickr.com/65535/53665655495_f09d4ef4e2_h.jpg",
    },
    {
        id: 15,
        src: "https://live.staticflickr.com/65535/53665555589_cbd83b4480_h.jpg",
    },
    {
        id: 16,
        src: "https://live.staticflickr.com/65535/53665655320_add7e65d41_h.jpg",
    },
];

const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

const Section1 = () => {
    const [grid, setGrid] = useState([]);
    const screenWidth = window.innerWidth;

    useEffect(() => {
        const shufflePictures = () => {
            const shuffledPictures = shuffleArray(pictures);
            setGrid(shuffledPictures);
        };

        // Shuffle pictures initially
        shufflePictures();

        // Set interval to shuffle pictures every 3 seconds
        const intervalId = setInterval(() => {
            shufflePictures();
        }, 3000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div className='section1-container'>
            <div className='down-arrow'> 
            <BsArrowDown />
            </div>
            <div className='about-me-section'>
                <div className='section1-navbar'>
                    <NavBar />
                </div>
                <h1> Hi I'm Callan </h1>
                <p> A passonate and creative software enigneer.
                    ggjn ks okgnd ioghignd josdbgsdnojbfjszboj okgnd
                    jdghdgjn gdg onsp gndsoen iehtosn oua gepsn fiueb knfe
                    dsngjosh seconds gsrg'dfbgjsfbseg
                    sfb gdgsr
                </p>
            </div>
            <div className="grid-container">
                {screenWidth < 930 && screenWidth > 700 ?
                    grid.slice(0, 9).map((picture, index) => (
                        <div className="grid-item" key={picture.id}>
                            <img
                                src={picture.src}
                                alt={`Picture ${picture.id}`}
                            />
                        </div>
                    )) : screenWidth < 700 ?
                        grid.slice(0, 4).map((picture, index) => (
                            <div className="grid-item" key={picture.id}>
                                <img
                                    src={picture.src}
                                    alt={`Picture ${picture.id}`}
                                />
                            </div>)) :
                        grid.map((picture, index) => (
                            <div className="grid-item" key={picture.id}>
                                <img
                                    src={picture.src}
                                    alt={`Picture ${picture.id}`}
                                />
                            </div>))
                }
            </div>
        </div>
    );
};

export default Section1;
