import React, { useEffect, useRef } from "react";
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
	const manifestoRef = useRef();
	const { anchorId } = useParams();
	console.log(anchorId);

	const slideOpen = () => {
		document.getElementById("mySidebar").style.display = "block";
	};

	const slideClose = () => {
		document.getElementById("mySidebar").style.display = "none";
	};

	useEffect(() => {
		if (anchorId === "manifesto") manifestoRef.current.scrollIntoView();
	}, [anchorId]);

	return (
		<>
			{/* <Preloader Title={Title} /> */}
			<nav
				className="navbar navbar-expand-lg navbar-white  fixed-top"
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
								<button
									className="nav-link close-button"
									onClick={slideClose}
								>
									Close
								</button>
							</li>

							<li className="nav-item">
								<AnchorLink className="nav-link" href="#home">
									Home
								</AnchorLink>
							</li>
							<li className="nav-item">
								<AnchorLink
									className="nav-link"
									href="#manifesto"
								>
									Manifesto
								</AnchorLink>
							</li>
							<li className="nav-item">
								<AnchorLink className="nav-link" href="#team">
									Team
								</AnchorLink>
							</li>

							<li className="nav-item">
								<AnchorLink
									className="nav-link"
									href="#mindmap"
								>
									Mind Map
								</AnchorLink>
							</li>
							<li className="nav-item">
								<AnchorLink
									className="nav-link"
									href="#aboutus"
								>
									About Us
								</AnchorLink>
							</li>

							<li className="nav-item">
								<AnchorLink
									className="nav-link"
									href="#contactus"
								>
									Contact Us
								</AnchorLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div>
				<section id="home">
					<HeroContainer />
				</section>
				<section id="manifesto" ref={manifestoRef}>
					<TopCollectionsContainer />
				</section>
				<section id="team">
					<ListedItemsContainer />
				</section>
				<section id="mindmap">
					<MindMapCards />
				</section>
				<section id="aboutus">
					<AboutUs />
				</section>
				<section id="contactus">
					<Footer />
				</section>
			</div>
		</>
	);
}

export default Head;
