import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/AppParts/NavBar';
import Weather from './components/WeatherParts/Weather';
import Events from './components/Events';
import Restaurants from './components/Restaurants';
import Maps from './components/MapParts/Maps';
import Home from './components/AppParts/Home';
import Lodging from './components/Lodging';
import Footer from './components/AppParts/Footer';
import ErrorBoundary from './ErrorBoundary';
// import GetWeather from './components/GetWeather';
import OWLocationSearch from './components/WeatherParts/OW_LocationSearch';

import './App.css';

function App () {
	// const handleLocationSelect = (location) => {
	// 	console.log(location);
	//   };
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
						{/* <Route path="/getweather" element={<GetWeather />} /> */}
					</Routes>
				</ErrorBoundary>
				<Footer />
			</Router>
		</div>
	);
}

export default App;