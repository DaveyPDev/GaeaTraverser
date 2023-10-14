
// import React, { useState, useEffect } from 'react';




// const GetWeather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [location, setLocation] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetchWeather();
//   };

//   const fetchWeather = () => {
//     const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4766b78f27c46ab72e0d85d4a1f5bf9c&units=imperial`;
//     if (!location) {
//       return; 
//     }

//     setLoading(true);
//     setError(null);

//     // Use the API request URL with the user's query
    

//     fetch(apiURL)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setWeatherData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     if (location) {
//       fetchWeather();
//     }
//   }, [location]);

//   return (
//     <div>
//       <h2>Weather</h2>
//       <img
//         src="https://cdn.dribbble.com/users/2277649/screenshots/8498294/weather_dribbble_size.gif.gif"
//         alt="Weather Placeholder"
//         className="centered-gif"
//       />
//       <form onSubmit={(e) => e.preventDefault()}>
//         <input
//           type="text"
//           value={location}
//           onChange={(event) => setLocation(event.target.value)}
//           placeholder="Enter city, state, country, or zip code"
//         />
//         <button onClick={fetchWeather}>Search</button>
//       </form>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : weatherData ? (
//         <div>
//           <h3>{weatherData.name}, {weatherData.sys.country}</h3>
//           <p>{weatherData.weather[0].description}</p>
//           <img
//             src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
//             alt={weatherData.weather[0].main}
//           />
//           <p>Temperature: {weatherData.main.temp}°F</p>
//           <p>Feels like: {weatherData.main.feels_like}°F</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           <p>Wind: {weatherData.wind.speed} mph, {weatherData.wind.deg}°</p>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default GetWeather;