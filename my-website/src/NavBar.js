import { Link, useLocation } from "react-router-dom";
import './NavBar.css'
import React from "react";

const NavBar = () => {
  const location = useLocation();

  return (
      <div className='nav-bar'>
        <h3> <Link className={`nav-button ${location.pathname === '/' ? 'bold' : ''}`}  to="/">Home / </Link> </h3>
        <h3> <Link className={`nav-button ${location.pathname === '/about' ? 'bold' : ''}`} to="/about">About / </Link> </h3>
        <h3> <Link className={`nav-button ${location.pathname === '/resume' ? 'bold' : ''}`} to="/resume">Resume /</Link> </h3>
        <h3> <Link className={`nav-button ${location.pathname === '/projects' ? 'bold' : ''}`} to="/projects"> Projects /</Link> </h3>
        <h3> <Link className={`nav-button ${location.pathname === '/contact' ? 'bold' : ''}`} to="/contact">Contact</Link> </h3>
      </div>
  );
}
export default NavBar;
