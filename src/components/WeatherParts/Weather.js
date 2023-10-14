import React, { useState, useEffect } from 'react';



const GetWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  };

  const fetchWeather = () => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4766b78f27c46ab72e0d85d4a1f5bf9c&units=imperial`;
    if (!location) {
      return; 
    }

    setLoading(true);
    setError(null);

    // Use the API request URL with the user's query
    

    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (location) {
      fetchWeather();
    }
  }, [location]);

  return (
    <div>
      <h2>Weather</h2>
      <img
        src="https://cdn.dribbble.com/users/2277649/screenshots/8498294/weather_dribbble_size.gif.gif"
        alt="Weather Placeholder"
        className="centered-gif"
      />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter city, state, country, or zip code"
        />
        <button onClick={fetchWeather}>Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div>
          <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          <p>{weatherData.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].main}
          />
          <p>Temperature: {weatherData.main.temp}°F</p>
          <p>Feels like: {weatherData.main.feels_like}°F</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} mph, {weatherData.wind.deg}°</p>
        </div>
      ) : null}
    </div>
  );
};

export default GetWeather;


// import React, { useState, useEffect } from 'react';
// import { getWeather, getWeatherByCoordinates, getCoordinatesByLocation } from '../Api';
// import OwLocationSearch from './OW_LocationSearch';


// const Weather = () => {
// 	const [weatherData, setWeatherData] = useState(null);
// 	const [loading, setLoading] = useState(false);
// 	const [location, setLocation] = useState('');
// 	const [error, setError] = useState(null);
// 	const [coordinates, setCoordinates] = useState({ lat: null, lon: null });

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		fetchWeather();
// 	};

// 	const handleLocationSelect = (location) => {
// 		setLocation(location.name);
// 		setCoordinates({ lat: location.lat, lon: location.lon });
// 	};

// 	const fetchWeather = () => {
// 		if (!coordinates.lat || !coordinates.lon) {
// 			return;
// 		}

// 		setLoading(true);
// 		setError(null);

// 		getWeather(coordinates.lat, coordinates.lon)
// 			.then((data) => {
// 				setWeatherData(data);
// 				setLoading(false);
// 			})
// 			.catch((error) => {
// 				setError(error.message);
// 				setLoading(false);
// 			});
// 	};

// 	return (
// 		<div>
// 			<h2>Weather</h2>
// 			<img
// 				src="https://cdn.dribbble.com/users/2277649/screenshots/8498294/weather_dribbble_size.gif.gif"
// 				alt="Weather Placeholder"
// 				className="centered-gif"
// 			/>
// 			<form onSubmit={handleSubmit}>
// 				<label>
// 					Enter a city name or zip code:
// 					<input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
// 				</label>
// 				<button type="submit">Search</button>
// 			</form>
// 			<OwLocationSearch onSelect={handleLocationSelect} />
// 			{loading ? (
// 				<p>Loading...</p>
// 			) : error ? (
// 				<p>{error}</p>
// 			) : weatherData ? (
// 				<div>
// 					<p>Temperature: {weatherData.main.temp}°C</p>
// 					<p>Feels like: {weatherData.main.feels_like}°C</p>
// 					<p>Humidity: {weatherData.main.humidity}%</p>
// 				</div>
// 			) : null}
// 		</div>
// 	);
// };

// export default Weather;



// // <----- Take 2 -----> //

// // import React, { useState, useEffect } from 'react';
// // import { getWeather, getCoordinatesByLocation } from '../Api';
// // import LocationSearch from './LocationSearch'; 

// // const Weather = () => {
// // 	const [weatherData, setWeatherData] = useState(null);
// // 	const [loading, setLoading] = useState(false);
// // 	const [location, setLocation] = useState('');
// // 	const [error, setError] = useState(null);
// // 	const [coordinates, setCoordinates] = useState({ lat: null, lon: null });

// // 	const handleSubmit = (event) => {
// // 		event.preventDefault();
// // 		fetchWeather();
// // 	};

// // 	const handleLocationSelect = (location) => {
// // 		setLocation(location);
// // 	};

// // 	const fetchWeatherByCoordinates = (lat, lon) => {
// // 		setLoading(true);
// // 		setError(null);

// // 		getWeather(lat, lon)
// // 			.then((data) => {
// // 				setWeatherData(data);
// // 				setLoading(false);
// // 			})
// // 			.catch((error) => {
// // 				setError(error.message);
// // 				setLoading(false);
// // 			});
// // 	};

// // 	const fetchWeather = () => {
// // 		setLoading(true);
// // 		setError(null);

// // 		let weatherPromise;

// // 		if (location.match(/^\d{5}$/)) {
// // 			weatherPromise = searchByZip(location);
// // 		} else {
// // 			weatherPromise = searchByCity(location);
// // 		}

// // 		weatherPromise
// // 			.then((data) => {
// // 				setWeatherData(data);
// // 				setLoading(false);
// // 			})
// // 			.catch((error) => {
// // 				setError(error.message);
// // 				setLoading(false);
// // 			});
// // 	};

// // 	function searchByZip(zip) {
// // 		return getCoordinatesByLocation(zip)
// // 			.then(({ lat, lon }) => {
// // 				setCoordinates({ lat, lon });
// // 				return getWeather(lat, lon);
// // 			});
// // 	}

// // 	function searchByCity(city) {
// // 		return getCoordinatesByLocation(city)
// // 			.then(({ lat, lon }) => {
// // 				setCoordinates({ lat, lon });
// // 				return getWeather(lat, lon);
// // 			});
// // 	}

// // 	return (
// // 		<div>
// // 			<h2>Weather</h2>
// // 			<img
// // 				src="https://cdn.dribbble.com/users/2277649/screenshots/8498294/weather_dribbble_size.gif.gif"
// // 				alt="Weather Placeholder"
// // 				className="centered-gif"
// // 			/>
// // 			<form onSubmit={handleSubmit}>
// // 				<label>
// // 					Enter a city name or zip code:
// // 					<input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
// // 				</label>
// // 				<button type="submit">Search</button>
// // 			</form>
// // 			<LocationSearch onLocationSelect={handleLocationSelect} />
// // 			{loading ? (
// // 				<p>Loading...</p>
// // 			) : error ? (
// // 				<p>{error}</p>
// // 			) : weatherData && weatherData.length > 0 ? (
// // 				<div>
// // 					{weatherData.map((data) => (
// // 						<div key={data.id}>
// // 							<p>Temperature: {data.main.temp}°C</p>
// // 							<p>Feels like: {data.main.feels_like}°C</p>
// // 							<p>Humidity: {data.main.humidity}%</p>
// // 						</div>
// // 					))}
// // 				</div>
// // 			) : null}
// // 		</div>
// // 	);
// // };

// // export default Weather;



// // 	<----- Take 1 -----> //

// // import React, { useState, useEffect } from 'react';

// // function Weather() {
// // 	const [weatherData, setWeatherData] = useState(null);
// // 	const [loading, setLoading] = useState(true);
// // 	const [city, setCity] = useState('');

// // 	const handleSubmit = (event) => {
// // 		event.preventDefault();
// // 		const apiKey = 'your_api_key_here'; // Replace with your actual API key
// // 		const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// // 		fetch(apiUrl)
// // 			.then((response) => response.json())
// // 			.then((data) => {
// // 				setWeatherData(data);
// // 				setLoading(false); // Set loading to false when data is received
// // 			})
// // 			.catch((error) => console.error('Error fetching weather data:', error));
// // 	};

// // 	return (
// // 		<div>
// // 			<h2>Weather</h2>
// // 			<form onSubmit={handleSubmit}>
// // 				<label>
// // 					Enter a city name:
// // 					<input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
// // 				</label>
// // 				<button type="submit">Search</button>
// // 			</form>
// // 			{loading ? (
// // 				<img
// // 					src="https://cdn.dribbble.com/users/2277649/screenshots/8498294/weather_dribbble_size.gif.gif"
// // 					alt="Weather Placeholder"
// // 					className="centered-gif"
// // 				/>
// // 			) : (
// // 				<div>
// // 					<h3>{weatherData.name}</h3>
// // 					<p>Temperature: {weatherData.main.temp}°C</p>
// // 					<p>Weather: {weatherData.weather[0].description}</p>
// // 				</div>
// // 			)}
// // 		</div>
// // 	);
// // }

// // export default Weather;

// // import React from 'react';

// // function Weather () {
// // 	return (
// // 		<div>
// // 			<h2>Weather</h2>
// // 			<img
// // 				src="https://cdn.dribbble.com/users/2277649/screenshots/8498294/weather_dribbble_size.gif.gif"
// // 				alt="Weather Placeholder"
// // 				className="centered-gif"
// // 			/>

// // 			{/* Weather content goes here */}
// // 		</div>
// // 	);
// // }

// // export default Weather;

// // import React, { useState, useEffect } from 'react';

// // function Weather() {
// //   const [weatherData, setWeatherData] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const apiKey = 'your_api_key_here'; // Replace with your actual API key
// //     const city = `${city}`;
// //     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// //     fetch(apiUrl)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setWeatherData(data);
// //         setLoading(false); // Set loading to false when data is received
// //       })
// //       .catch((error) => console.error('Error fetching weather data:', error));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Weather</h2>
// //       <img
// //         src="https://cdn.dribbble.com/users/2277649/screenshots/8498294/weather_dribbble_size.gif.gif"
// //         alt="Weather Placeholder"
// //         className="centered-gif"
// //       />
// //       {loading ? (
// //         <p>Loading weather data...</p>
// //       ) : (
// //         <div>
// //           <h3>{weatherData.name}</h3>
// //           <p>Temperature: {weatherData.main.temp}°C</p>
// //           <p>Weather: {weatherData.weather[0].description}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Weather;
