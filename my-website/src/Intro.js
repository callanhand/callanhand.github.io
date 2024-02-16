import React, { useState } from 'react';
import './Intro.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <p class="error-modal">Invalid input. Please enter either Y or N.</p>
            </div>
        </div>
    );
}


function Intro() {
    const [userInput, setUserInput] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const [show, setshow] = useState(false);

    const handleChange = (e) => {
        const inputValue = e.target.value.toUpperCase();
        setUserInput(inputValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput !== 'Y' && userInput !== 'N') {
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                setUserInput('');
            }, 2500); // Close modal after 2.5 seconds

            return;
        }
        if (userInput === 'Y') {
            console.log("I'm in");
            setFadeOut(true);

            // setTimeout(function () {
            //     // $(".page__style").removeClass("animate_content");
            //   }, 3200);
            // Navigate to the new page

            setTimeout(function () {
                setFadeIn(true);
              }, 1500);

              setTimeout(function () {
                setshow(true);
              }, 3000);

            // setTimeout(function () {
            //     document.querySelector(".home").classList.add("fadeIn");
            // }, 1500);

            
            // .page__description {
            //     animation: fadeOutAndIn 3.9s forwards; /* Adjust the duration to match the total time */
            //   }

            //window.location.href = '/home';
            return;
        }
        // Reset the input field
        setUserInput('');
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Router>
            <Routes>
                <Route exact path="/home" element={""} />
                <Route exact path="/" element={
                    <div> 
                    <div class={`new-page ${fadeOut ? 'animate_content-in' : ''} ${fadeIn ? 'fade_in' : ''}`} > 
                        <div class={`hidden ${show ? 'show' : ''}`}> 
                            <Home> </Home>
                        </div>

                    </div>
                    <div class={`container ${fadeOut ? 'animate_content' : ''}`}> 
                        <p class="typed">$  Hi! My name is Callan Hand. </p>
                        <p class="typed">$  I'm an imaginative and passionate software engineer with
                            a strong background </p>
                        <p class="typed"> in developing innovative solutions to complex technical puzzles. </p>
                        <p class="typed">$  Would you like to learn more?</p>
                        <p class="typed">$  Y / N </p>

                        <form onSubmit={handleSubmit}>
                            <label> $
                                <input
                                    type="text"
                                    value={userInput}
                                    onChange={handleChange}
                                    autoFocus
                                    onBlur={e => e.target.focus()}
                                />
                            </label>
                        </form>
                        <Modal isOpen={showModal} onClose={closeModal} />

                    </div>
                    </div>
                } />
                
            </Routes>

        </Router>
    );
}
export default Intro;