import React from 'react';
import './style.css';
import Header from "./components/Header";
import Navbar from './components/Navbar';
// import Nav from './components/Nav';
import Ads from './components/Ads';
import Home from './pages/Home';
import Alex from './pages/Alex';
import ProbsAndRecs from './pages/ProbsAndRecs';
import Sites from './pages/Sites';
import ClaimsAndArgs from './pages/ClaimsAndArgs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";

function App() {
	return (
		<div className='App'>
			<Header />

			<Router>
				<Navbar />
				<Routes>
					<Route path="/Home" exact element={<Home />} />
					<Route path="/Alex" exact element={<Alex />} />
					<Route path="/ProbsAndRecs" exact element={<ProbsAndRecs />} />
					<Route path="/ClaimsAndArgs" exact element={<ClaimsAndArgs />} />
					<Route path="/Sites" exact element={<Sites />} />
				</Routes>
			</Router>

			<div className='container'>
				<Ads />
			</div>
			<Footer />
		</div>
	);
}

export default App;
