import React from 'react';
import './style.css';
import Header from "./components/Header";
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from "./components/Footer";

function App() {
	return (
		<div className='App'>
			<Header />
			<Nav />
			<div className='container'>
				<MainContent />
			</div>
			<Footer />
		</div>
	);
}

export default App;
