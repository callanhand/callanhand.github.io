import { Link, useLocation } from "react-router-dom";
import './NavBar.css'
import { BsFillGridFill } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import React, { useState } from "react";

const NavBar = () => {
  const location = useLocation();
  let navColor = '';

  const [showNav, setShowNav] = useState(false);

  const openNavBar = () => {
    setShowNav(!showNav);
  };

  if (location.pathname === '/') {
    navColor = 'home-page';
  } else if (location.pathname === '/resume' || location.pathname === '/projects') {
    navColor = 'resume-page';
  } else if (location.pathname === '/blade') {
    navColor = 'blade-page';
  }


  return (
      <div className='nav-bar'>
        {/* <h3> <Link className={`nav-button ${navColor}`} to="/">Home</Link> </h3>
        <h3> <Link className={`nav-button ${navColor}`} to="/about">About Me </Link> </h3> */}
        <h3> <Link className={`nav-button ${navColor}`} to="/resume">Resume</Link> </h3>
        <h3> <Link className={`nav-button ${navColor}`} to="/projects">Projects</Link> </h3>
        <h3> <Link className={`nav-button ${navColor}`} to="/contact">Contact</Link> </h3>
      </div>
  );
}
export default NavBar;
