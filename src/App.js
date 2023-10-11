import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Weather from './components/Weather';
import Events from './components/Events';
import Restaurants from './components/Restaurants';
import Maps from './components/Maps';
import Home from './components/Home';
import Lodging from './components/Lodging';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

import './App.css';

function App () {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<ErrorBoundary>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/lodging" element={<Lodging />} />
						<Route path="/events" element={<Events />} />
						<Route path="/restaurants" element={<Restaurants />} />
						<Route path="/maps" element={<Maps />} />
						<Route path="/weather" element={<Weather />} />
					</Routes>
				</ErrorBoundary>
				<Footer />
			</Router>
		</div>
	);
}

export default App;