import React, { useState } from 'react';
import phone from '../assets/Navbar_Images/icn.png';
import email from '../assets/Navbar_Images/Vector1.png';
import insta from '../assets/Navbar_Images/insta.png';
import Youtube from '../assets/Navbar_Images/Youtube.png';
import Fb from '../assets/Navbar_Images/Fb.png';
import tweeter from '../assets/Navbar_Images/tweeter.png';
import Profile from '../assets/Navbar_Images/Profile.png';
import Search from '../assets/Navbar_Images/Search.png';
import Cart from '../assets/Navbar_Images/Cart.png';
import Like from '../assets/Navbar_Images/Like.png';

import {Link} from 'react-router-dom'
const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
      <nav className="navbar d-none d-lg-block " data-spy="affix" data-offset-top="197"
          style={{backgroundColor: "rgba(37, 43, 66, 1)", color: "rgba(255, 255, 255, 1)", height: "100%"}}>
        <div className="container-fluid">
          <div className="d-flex flex-wrap flex-row mb-3 w-100 justify-content-between">
            <div className="p-2">
              <div className="d-inline-block">
                <p className="h6 d-inline-block mb-0">
                  <img src={phone} alt="Image Not Found" />
                  &nbsp; &nbsp;(225) 555-0118
                </p>
                <p className="h6 d-inline-block mb-0 ml-3 px-2">
                  <img src={email} alt="Image Not Found" />
                  &nbsp; &nbsp;michelle.rivera@example.com
                </p>
              </div>
            </div>
            <div className="p-2 d-inline-block">
              <h6 className="d-inline-block mb-0">Follow Us and get a chance to win 80% off</h6>
            </div>
            <div className="p-2 d-inline-block">
              <h6 className="d-inline-block mb-0">Follow Us:</h6>
              <div className="d-inline-block pl-2">
                <a href="#" className="px-1"><img src={insta} alt="Image not found" /></a>
                <a href="#" className="px-1"><img src={Youtube} alt="Image not found" /></a>
                <a href="#" className="px-1"><img src={Fb} alt="Image not found" /></a>
                <a href="#" className="px-1"><img src={tweeter} alt="Image not found" /></a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar  sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>Bandage</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' class="nav-link">Home</Link>
              </li>
              <li className="nav-item">
              <Link to='/shop' class="nav-link">Shop</Link>
              </li>
              <li className="nav-item">
              <Link to='/about' class="nav-link">About</Link>
              </li>
              <li className="nav-item">
              <Link to='/blog' class="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
              <Link to='/contact' class="nav-link">Contact</Link>
              </li>
              {/* <li className="nav-item">
              <Link to='/pages' class="nav-link">Pages</Link>
              </li> */}
            </ul>
            <div className="d-flex justify-content-end align-items-center">
              <div className="p-2 d-inline-block">
                <img src={Profile} alt="Profile" className="d-inline-block" />
                <span className="d-inline-block" style={{color: "rgba(35, 166, 240, 1)"}}>Login/Register</span>
              </div>
              <div className="p-2 d-inline-block">
                <img src={Search} alt="Search" className="d-inline-block" onClick={toggleSearch} style={{cursor: 'pointer'}} />
              </div>
              <div className="p-2 d-inline-block">
                <img src={Cart} alt="Cart" className="d-inline-block" />
                <span style={{color: "rgba(35, 166, 240, 1)"}}>1</span>
              </div>
              <div className="p-2 d-inline-block">
                <img src={Like} alt="Like" className="d-inline-block" />
                <span style={{color: "rgba(35, 166, 240, 1)"}}>1</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isSearchVisible && (
        <div className="container-fluid bg-light py-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search..." />
            <button className="btn btn-primary" type="button">Go</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
