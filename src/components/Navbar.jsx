import React, { useState } from 'react';

import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


const Navbar = (props) => {
  const [mobile, setMobile] = useState(false);
  return (
  
     
    <nav className="Navbar">
      <div className='container'>
        <h3 className="logo">Bini Shops</h3>
        <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <Link to="/payment">Payment</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

        <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
          {mobile ? <RxCross2 /> : <FaBars />}
        </button>
      </div>
    </nav>
   
  );
}

export default Navbar;
