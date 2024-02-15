import React, { useState, useEffect, useRef } from 'react';
import './Intro.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function NewPage() {
    return <div className="new-page">This is the new page with a blue background.</div>;
  }

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

    //const inputRef = React.createRef(); // Create a ref object

    // useEffect(() => {
    //     // Focus the input element when the component mounts
    //     //inputRef.current.focus();

    //     // Add event listener for click on the document
    //     document.addEventListener('click', handleClick);

    //     // Cleanup function to remove event listener
    //     return () => {
    //         document.removeEventListener('click', handleClick);
    //     };
    // }, []);

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
                  // Navigate to the new page
            window.location.href = '/newPage';
            return;
        }
        // Reset the input field
        setUserInput('');
    };

    const handleClick = () => {
        // Focus the input element when the user clicks anywhere on the page
        //inputRef.current.focus();
    };

    const closeModal = () => {
        setShowModal(false);
      };

    return (
        <Router> 
        <Routes>
        <Route exact path="/newPage" element={<NewPage/>} />
        <Route exact path="/" element={ 
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
                    />
                    </label>
                </form>
               <Modal isOpen={showModal} onClose={closeModal} />
                
            </div>
        }/>
        </Routes>

        </Router>
    );
}
export default Intro;