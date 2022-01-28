import React , {useEffect} from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import "jquery-syotimer";

import jQueryBridget from 'jquery-bridget';
import jQuery from 'jquery';

// import './script.js'
// import './navbar.css'
import {NavbarLogo} from '../../utils/allImgs'
import {Addshrink} from '../../utils'
import Preloader from '../../components/Preloader'
import { useHistory, useLocation } from "react-router-dom";

// import data from '../../data/data-layouts/data-Head.json'

function ComNav({Title}){
    const slideOpen = () => {
        document.getElementById("nav-bar").style.display = "block";
      };
    
      const slideClose = () => {
        document.getElementById("nav-bar").style.display = "none";
      };
    
    const history=useHistory();
    // const bottomscrol = () => {
    //     document.getElementById("containe").scrollbottom += 430;
    //   };




    const handleManifesto=()=>{
        history.push("/home");
        
        window.scrollTo(0, 700);
    }
      
    const handleTeam=()=>{
        history.push("/home");
        window.scrollBy({
            top: 1210,
    
            behavior: 'smooth'
          });
        // window.scrollTo(0, 1320);
    }
    const handleMindMap=()=>{
        history.push("/home");
        window.scrollTo(0, 1380);
    }
    const handleAbout=()=>{
        history.push("/home");
        window.scrollTo(0, 1580);
    }
    const handleContact=()=>{
        history.push("/home");
        window.scrollTo(0, 1700);
    }

      
  return(
    <>
        {/* <Preloader Title={Title} /> */}
        <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
            <div className="container">
                <NavLink className="navbar-brand" to="/"><span><img src={NavbarLogo} alt="logo" /></span></NavLink>

                <button  onClick={slideOpen} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span  className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="nav-bar">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item closeData">
                <button  className="nav-link close-button" onClick={slideClose}>
Close                </button>
              </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/activity">Activity</NavLink>
                        </li> */}
                        
                    
                           <li className="nav-item">
                            <div className="nav-link"  onClick={handleManifesto}>Manifesto</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={handleTeam} > Team </div>
                        </li>
                        <li className="nav-item">
                          <div className="nav-link" onClick={handleMindMap}>  Mind Map</div>
                        </li>
                        <li className="nav-item">
                        <div className="nav-link" onClick={handleAbout}> About Us</div>
                        </li>
                        <li className="nav-item">
                        <div className="nav-link" onClick={handleContact}> Contact Us</div>
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
  )
}

export default ComNav;