import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
	Switch,
	BrowserRouter as Router,
	Route,
	Redirect,
} from "react-router-dom";
import Aos from "aos";
import {
	Activity,
	Auctions,
	Authors,
	ConnectWallet,
	Contact,
	CreateItem,
	Discover,
	Home,
	ItemDetails,
	Profile,
	Login,
	SignUp,
} from "./pages";

import "aos/dist/aos.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/global.css";
// import '../../assets/css/style.css';
// import './global.css';

import "bootstrap/dist/js/bootstrap.bundle.min";
import Bridge from "./components/mindMap/bridge";
import Community from "./components/mindMap/community";
import Vision from "./components/mindMap/vision";
import Metaverse from "./components/mindMap/metaverse";
import Seedling from "./components/mindMap/seedling";
import Physical from "./components/mindMap/physical";

const App = () => {
	useEffect(() => {
		Aos.init({
			duration: 1000,
		});
	}, []);

	return (
		<div className="App">
			<Helmet>
				<meta charset="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<title>NFT Marketplace</title>
				<link
					href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
			</Helmet>
			<Router>
				<Switch>
					<Route exact path="/home" component={Home} />
					<Route path="/home/:anchorId" component={Home} />
					<Route path="/bridge" component={Bridge} />
					<Route path="/community" component={Community} />
					<Route path="/seedling" component={Seedling} />
					<Route path="/physical" component={Physical} />
					<Route path="/metaverse" component={Metaverse} />
					<Route path="/vision" component={Vision} />
					{/* <Redirect exact to="/home"/> */}
					<Redirect exact from="/" to="/home" />
					<Route path="/activity" component={Activity} />
					{/* <Route path="/auctions" component={Auctions} /> */}
					{/* <Route path="/authors" component={Authors} /> */}
					{/* <Route path="/connectWallet" component={ConnectWallet} /> */}
					{/* <Route path="/contact" component={Contact} /> */}
					{/* <Route path="/createitem" component={CreateItem} /> */}
					{/* <Route path="/discover" component={Discover} /> */}
					{/* <Route path="/itemDetails" component={ItemDetails} /> */}
					{/* <Route path="/profile" component={Profile} /> */}
					{/* <Route path="/login" component={Login} /> */}
					{/* <Route path="/signup" component={SignUp} /> */}
				</Switch>
			</Router>
		</div>
	);
};

export default App;
