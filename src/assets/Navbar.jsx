import React from "react";
import kavya from './Images/kavya.jpeg'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={kavya} alt="Kavya Logo" height={50} width={80}/>

        
            <input type="checkbox" id="menu-toggle"/>

            <label htmlFor="menu-toggle" className="menu-btn">&#9776;</label>

            <ul className="nav-links">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
                <li><Link to="inndutries">INDUTRIES</Link></li>
                <li><Link to="/job">JOB</Link></li>
                <li><Link to="/contact">CONTACT US</Link></li>
                <li className="applynow"><Link to="/apply">APPLY NOW</Link></li>
                
            </ul>

      </nav>
    </header>
  );
};

export default Navbar;