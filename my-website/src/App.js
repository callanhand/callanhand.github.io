import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar"
import About from "./About"
import Home from "./Home"
import Contact from "./Contact"
import Resume from "./Resume"
import Projects from "./Projects"
import Outdoor from "./Outdoor.js"
import Work from "./Work.js"
import AboutMe from "./AboutMe.js"
import Section1 from "./Section1.js"

function App() {
  return (
  <div>
    <Router>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<Projects/>} />

        <Route path="/outdoor" element={<Outdoor/>} />
        <Route path="/work" element={<Work/>} /> 
        <Route path="/aboutMe" element={<AboutMe/>} /> 
        <Route path="/section1" element={<Section1/>} /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
