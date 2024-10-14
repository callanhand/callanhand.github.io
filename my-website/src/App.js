import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar"
import About from "./About"
import Home from "./Home"
import Contact from "./Contact"
import Resume from "./Resume"
import Projects from "./Projects"
import Blade from "./BeneathBlade.js"
import Recycle from "./Recycle.js"
import Home2 from "./Home2.js"


function App() {
  return (<div>
    {/* <Intro /> */}

    <Router>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blade" element={<Blade/>} />
        <Route path="/recycle" element={<Recycle/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
