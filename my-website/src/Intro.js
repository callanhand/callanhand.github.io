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
    const [hide, setHide] = useState(true);

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
            // start animation 
            setHide(true);

            // hide page after 
            setTimeout(function () {
                //setFadeIn(true);
                setHide(true);
            }, 1500);

            setTimeout(function () {
                //setHide
            }, 5500);
            return;
        }
        // Reset the input field
        setUserInput('');
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (

        <div>
            {/* <div class={`${hide ? '' : 'hidden'} ${fadeOut ? 'animate_content' : ''}`}> <Home> </Home> </div> */}
            
            {/* <div class={`new-page ${fadeOut ? 'animate_content-in' : ''} ${fadeIn ? 'fade_in' : ''}`} /> */}
            <Home> </Home>

            {/* <div class='container'>
                <p class={`typed ${hide ? 'disappear' : ''}`}>$  Hi! My name is Callan Hand. </p>
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

            </div> */}
        </div>
    );
}
export default Intro;