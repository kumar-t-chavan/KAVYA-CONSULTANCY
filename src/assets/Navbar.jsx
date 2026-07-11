import React from "react";
import kavya from './Images/kavya.jpeg'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={kavya} alt="Kavya Logo" height={50} width={80}/>

        
            <input type="checkbox" id="menu-toggle"/>

            <label for="menu-toggle" class="menu-btn">&#9776;</label>

            <ul class="nav-links">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">INDUTRIES</a></li>
                <li><a href="#">JOB</a></li>
                <li><a href="#">CONTACT US</a></li>
                <li className="applynow"><a href="#">APPLY NOW</a></li>
                
            </ul>

      </nav>
    </header>
  );
};

export default Navbar;