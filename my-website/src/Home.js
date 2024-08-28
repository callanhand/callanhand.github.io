import './Home.css'
import image1 from "./backgroundImages/image1.jpg";
import { BsFillPersonFill } from "react-icons/bs";
import { BsImageAlt } from "react-icons/bs";
import { BsPersonRaisedHand } from "react-icons/bs";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { BsSend } from "react-icons/bs";


function Home() {

    var divStyle = {
        backgroundImage: 'url(' + image1 + ')',
        width: '100%',
        height: '100vh',
        backgroundPosition: '85% 40%'
    };

    return (
        <div className='home'>
            <div className='image' style={divStyle}>
                <div className='title'>
                    <h1 className='header'> Callan Hand</h1>
                    <h3 className='sub-title'> Software Engineer | Outdoor Enthusiast | Creative </h3>
                </div>
            </div>
        </div>
    );


}

export default Home;