import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

import $ from "jquery";
import "jquery-syotimer";

import jQueryBridget from "jquery-bridget";
import jQuery from "jquery";

import "./script.js";
import "./navbar.css";
import { NavbarLogo } from "../../utils/allImgs";
import HeroContainer from "../../containers/Home/Hero/index";
import TopCollectionsContainer from "../../components/TopCollections/index";
import ListedItemsContainer from "../../components/ListedItems/index";
import Footer from "../Footer/index";
import AboutUs from "../../components/About/aboutUs";
import MindMapCards from "../../components/mindMapCards/mindMapCards";

import { Addshrink } from "../../utils";
import Preloader from "../../components/Preloader";
import data from "../../data/data-layouts/data-Head.json";

function Head({ Title }) {

  const homeRef = useRef();
  const manifestoRef = useRef();

  const teamRef = useRef();
  const mindmapRef = useRef();
  const aboutusRef = useRef();
  const contactusRef = useRef();
  const { anchorId } = useParams();
  console.log(anchorId);

  const slideOpen = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const slideClose = () => {
    document.getElementById("mySidebar").style.display = "none";
  };

  useEffect(() => {
    if (anchorId === "home") homeRef.current.scrollIntoView();
    if (anchorId === "manifesto") manifestoRef.current.scrollIntoView();
    if (anchorId === "team") teamRef.current.scrollIntoView();
    if (anchorId === "mindmap") mindmapRef.current.scrollIntoView();
    if (anchorId === "aboutus") aboutusRef.current.scrollIntoView();
    if (anchorId === "contactus") contactusRef.current.scrollIntoView();
  }, [anchorId]);


// --------------------------------------------
const [navbar, setNavbar] = useState(false)

const changeBackground = () => {
  console.log(window.scrollY);
  if (window.scrollY >= 20.66666793823242 ) {
    setNavbar(true)
  } else {
    setNavbar(false)
  }
}

useEffect(() => {
  changeBackground()
  window.addEventListener("scroll", changeBackground);

})


  return (
    <>
      {/* <Preloader Title={Title} /> */}
     <div className= {navbar ? ("background-color") : ("")}>

      <nav 
        className= " navbar navbar-expand-lg background-color  navbar-white  fixed-top"
        id="banner"
      >
        <div className="container">
          <AnchorLink className="navbar-brand">
            <span>
              <img src={NavbarLogo} alt="logo" />
            </span>
          </AnchorLink>

          <button
            onClick={slideOpen}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mySidebar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item closeData">
                <button className="nav-link close-button" onClick={slideClose}>
                  Close
                </button>
              </li>

              <li className="nav-item">
                <AnchorLink className="nav-link" href="#home">
                  Home
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#manifesto">
                  Manifesto
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#team">
                  Team
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink className="nav-link" href="#mindmap">
                  Mind Map
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#aboutus">
                  About Us
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink className="nav-link" href="#contactus">
                  Contact Us
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</div>


      <div>
        <section id="home" ref={homeRef}>
          <HeroContainer />
        </section>
        <section id="manifesto" ref={manifestoRef}>
          <TopCollectionsContainer />
        </section>
        <section id="team" ref={teamRef}>
          <ListedItemsContainer />
        </section>
        <section id="mindmap" ref={mindmapRef}>
          <MindMapCards />
        </section>
        <section id="aboutus" ref={aboutusRef}>
          <AboutUs />
        </section>
        <section id="contactus" ref={contactusRef}>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Head;
