import React, { useState } from 'react';
import { getCoordinatesByLocation, getWeatherByCoordinates } from '../Api'; // Update the import path
import LocationSearch from './LocationSearch';

function Weather () {
	const [ weatherData, setWeatherData ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ city, setCity ] = useState('');
	const [ error, setError ] = useState(null);

	const fetchWeather = (location) => {
		setLoading(true);
		setError(null);

		// Use the location description directly for geocoding
		getCoordinatesByLocation(location.description)
			.then((coordinates) => {
				if (!coordinates) {
					throw new Error('Location not found.');
				}
				return getWeatherByCoordinates(coordinates.lat, coordinates.lon);
			})
			.then((data) => {
				if (data.cod !== 200) {
					throw new Error(data.message);
				}
				setWeatherData(data);
			})
			.catch((error) => {
				setError('Error fetching weather data. ' + error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const handleLocationSelect = (location) => {
		setCity(location.description);
		fetchWeather(location.description);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		fetchWeather(city);
	};

	return (
		<div>
			<h2>Weather</h2>
			<img
				src="https://cdn.dribbble.com/users/2277649/screenshots/8498294/weather_dribbble_size.gif.gif"
				alt="Weather Placeholder"
				className="centered-gif"
			/>
			<form onSubmit={handleSubmit}>
				<label>
					Enter a city name:
					<input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
				</label>
				<button type="submit">Search</button>
			</form>
			<LocationSearch onLocationSelect={handleLocationSelect} />
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>{error}</p>
			) : weatherData && weatherData.main ? (
				<div>
					<p>Temperature: {weatherData.main.temp}°C</p>
					<p>Feels like: {weatherData.main.feels_like}°C</p>
					<p>Humidity: {weatherData.main.humidity}%</p>
				</div>
			) : null}
		</div>
	);
}

export default Weather;

// import React, { useState, useEffect } from 'react';

// function Weather() {
// 	const [weatherData, setWeatherData] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	const [city, setCity] = useState('');

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		const apiKey = 'your_api_key_here'; // Replace with your actual API key
// 		const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// 		fetch(apiUrl)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				setWeatherData(data);
// 				setLoading(false); // Set loading to false when data is received
// 			})
// 			.catch((error) => console.error('Error fetching weather data:', error));
// 	};

// 	return (
// 		<div>
// 			<h2>Weather</h2>
// 			<form onSubmit={handleSubmit}>
// 				<label>
// 					Enter a city name:
// 					<input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
// 				</label>
// 				<button type="submit">Search</button>
// 			</form>
// 			{loading ? (
// 				<img
// 					src="https://cdn.dribbble.com/users/2277649/screenshots/8498294/weather_dribbble_size.gif.gif"
// 					alt="Weather Placeholder"
// 					className="centered-gif"
// 				/>
// 			) : (
// 				<div>
// 					<h3>{weatherData.name}</h3>
// 					<p>Temperature: {weatherData.main.temp}°C</p>
// 					<p>Weather: {weatherData.weather[0].description}</p>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

// export default Weather;

// import React from 'react';

// function Weather () {
// 	return (
// 		<div>
// 			<h2>Weather</h2>
// 			<img
// 				src="https://cdn.dribbble.com/users/2277649/screenshots/8498294/weather_dribbble_size.gif.gif"
// 				alt="Weather Placeholder"
// 				className="centered-gif"
// 			/>

// 			{/* Weather content goes here */}
// 		</div>
// 	);
// }

// export default Weather;

// import React, { useState, useEffect } from 'react';

// function Weather() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const apiKey = 'your_api_key_here'; // Replace with your actual API key
//     const city = `${city}`;
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setWeatherData(data);
//         setLoading(false); // Set loading to false when data is received
//       })
//       .catch((error) => console.error('Error fetching weather data:', error));
//   }, []);

//   return (
//     <div>
//       <h2>Weather</h2>
//       <img
//         src="https://cdn.dribbble.com/users/2277649/screenshots/8498294/weather_dribbble_size.gif.gif"
//         alt="Weather Placeholder"
//         className="centered-gif"
//       />
//       {loading ? (
//         <p>Loading weather data...</p>
//       ) : (
//         <div>
//           <h3>{weatherData.name}</h3>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Weather: {weatherData.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Weather;
