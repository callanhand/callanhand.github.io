import React, { useState, useEffect, useRef } from 'react';
import './Intro.css';
import Popup from 'reactjs-popup';

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

    const inputRef = useRef(null);

    useEffect(() => {
        // Focus the input element when the component mounts
        inputRef.current.focus();

        // Add event listener for click on the document
        document.addEventListener('click', handleClick);

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

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
              }, 2500); // Close modal after 3 seconds
            

            return;
        }
        // Reset the input field
        setUserInput('');
    };

    const handleClick = () => {
        // Focus the input element when the user clicks anywhere on the page
        inputRef.current.focus();
    };

    const closeModal = () => {
        setShowModal(false);
      };

    return (
        <body>
            <div class="container">
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
                        // onKeyDown={handleKeyDown}
                        ref={inputRef}
                    />
                    </label>
                </form>
               <Modal isOpen={showModal} onClose={closeModal} />
                
            </div>

        </body>
    );
}
export default Intro;