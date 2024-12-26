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
            title: "Glacier National Park - Bike Across the Country",
            description: 'I created a python script to display a map of distances per day. Check it out on the Projects page!'
        },
        {
            id: 2,
            src: "https://live.staticflickr.com/7857/47226838101_14771b89d3_k.jpg",
            title: "Mount Washington, NH",
            description: "Growing up I hiked all 48 4,000 ft mountains in NH with my mom"
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
            src: "https://live.staticflickr.com/65535/54080305782_7d0b7b275e_h.jpg",
        },
        // {
        //     id: 7,
        //     src: "https://live.staticflickr.com/65535/53664088892_390260b5b8_h.jpg",
        // },
        // {
        //     id: 8,
        //     src: "https://live.staticflickr.com/65535/54080307947_2c7344fa44_h.jpg",
        // },
        // {
        //     id: 9,
        //     src: "https://live.staticflickr.com/65535/53665411370_6dc62b5692_h.jpg",
        // },
        // {
        //     id: 10,
        //     src: "https://live.staticflickr.com/65535/53665656040_e574cfc0fc_h.jpg",
        // },
        // {
        //     id: 11,
        //     src: "https://live.staticflickr.com/65535/53665655915_0c2330ba3c_h.jpg",
        // },
        // {
        //     id: 12,
        //     src: "https://live.staticflickr.com/65535/54081234751_8e03888a21_h.jpg"
        // },
        // {
        //     id: 13,
        //     src: "https://live.staticflickr.com/65535/53665409798_98d0da6fd1_h.jpg",
        // },
        // {
        //     id: 14,
        //     src: "https://live.staticflickr.com/65535/54081216276_b08d6d09fa_h.jpg",
        // },
        // {
        //     id: 15,
        //     src: "https://live.staticflickr.com/65535/53665555589_cbd83b4480_h.jpg",
        // },
        // {
        //     id: 16,
        //     src: "https://live.staticflickr.com/65535/53665655320_add7e65d41_h.jpg",
        // },
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