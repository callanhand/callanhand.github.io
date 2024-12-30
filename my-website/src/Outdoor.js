import './Outdoor.css'
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsCaretLeft } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";

function Outdoor() {

    const pictures = [
        {
            id: 1,
            src: "https://live.staticflickr.com/65535/54081433218_83a2f1345f_h.jpg",
            title: "Glacier National Park",
            description: 'I created a python script to visualize my cross country bike trip. Check it out on the Projects page!'
        },
        {
            id: 2,
            src: "https://live.staticflickr.com/7857/47226838101_14771b89d3_k.jpg",
            title: "Mount Washington",
            description: "Growing up I hiked all 48 4,000 ft mountains in NH with my mom"
        },
        {
            id: 3,
            src: "https://live.staticflickr.com/65535/53664097832_dcf79cf16b_h.jpg",
            title: "Somewhere in New Mexico"
        },
        {
            id: 4,
            src: "https://live.staticflickr.com/65535/53665427995_5460996698_h.jpg",
            title: "Mount Madison",
            description: "The start of one of my favorite hikes - the Presidential Traverse." + 
             " 1 day, 20 miles, 13 peaks."
        },
        {
            id: 5,
            src: "https://live.staticflickr.com/65535/53665182383_349f6a5e79_h.jpg",
            title: "Quetico Provincial Park", 
            description: "Canoeing the boundary waters"
        },
        {
            id: 6,
            src: "https://live.staticflickr.com/65535/54080305782_7d0b7b275e_h.jpg",
            title: "Mount Katahdin"
        }
    ];

    return (
            <div className='bike-trip-container'>
                <Link to="/about" className='outdoor-about-link'>
                    <BsXCircle size={40} className='outdoor-back' />
                </Link>
                <div className='outdoor-text'>
                    <div className='outdoor-text-title'> Outdoor Moments</div>
                    <div className='cascobay-trail'> Support the <a href="https://cascobaytrail.org/" target="_blank"> Casco Bay Trail!</a></div>
                </div>
                <div className="gallery-container">
                    {pictures.map((image, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={image.src} />
                            <div className="overlay">
                                <h3>{image.title}</h3>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default Outdoor;