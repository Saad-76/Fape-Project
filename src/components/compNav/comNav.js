import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import "jquery-syotimer";

import jQueryBridget from "jquery-bridget";
import jQuery from "jquery";

// import './script.js'
// import './navbar.css'
import { NavbarLogo } from "../../utils/allImgs";
import { Addshrink } from "../../utils";
import Preloader from "../../components/Preloader";

// import data from '../../data/data-layouts/data-Head.json'

function ComNav({ Title }) {
  const slideOpen = () => {
    document.getElementById("nav-bar").style.display = "block";
  };

  const slideClose = () => {
    document.getElementById("nav-bar").style.display = "none";
  };

  return (
    <>
      {/* <Preloader Title={Title} /> */}
      <nav
        className="navbar navbar-expand-lg background-color navbar-white fixed-top"
        id="banner"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <span>
              <img src={NavbarLogo} alt="logo" />
            </span>
          </NavLink>

          <button
            onClick={slideOpen}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav-bar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item closeData">
                <button className="nav-link close-button" onClick={slideClose}>
                  Close
                </button>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home/home">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/home/manifesto">
                  Manifesto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home/team">
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home/mindmap">
                  Mind Map
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home/aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home/contactus">
                  Contact Us
                </NavLink>
              </li>
              {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li> */}
              {/* <li className="lh-55px"><NavLink to="/connectwallet" className="btn login-btn ml-50">Connect Wallet</NavLink></li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ComNav;
