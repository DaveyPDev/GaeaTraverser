
// const OPENWEATHER_API_KEY = '4766b78f27c46ab72e0d85d4a1f5bf9c';


// export function getCoordinatesByLocation(city, state, country) {
//   const GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${OPENWEATHER_API_KEY}`;

//   return fetch(GEOCODING_API_URL)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.length > 0) {
//         return {
//           lat: data[0].lat,
//           lon: data[0].lon,
//         };
//       } else {
//         throw new Error('Location not found.');
//       }
//     });
// }
