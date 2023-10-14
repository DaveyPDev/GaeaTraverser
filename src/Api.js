//      <------ Start Weather App ------>     //
const OPENWEATHER_API_KEY = '4766b78f27c46ab72e0d85d4a1f5bf9c';
// const GEOCODING_API_URL = 'https://api.openweathermap.org/geo/1.0';
// const LON_LAG_API_URL = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`

export function getWeather (lat, lon) {
	// Updated parameters
	const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`;
	return fetch(WEATHER_API_URL).then((response) => response.json()).then((data) => data);
}

export function getWeatherByCoordinates (lat, lon) {
	const ONE_CALL_API_URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${OPENWEATHER_API_KEY}`;

	return fetch(ONE_CALL_API_URL).then((response) => response.json()).then((data) => data);
}

export function getCoordinatesByLocation (city, state, country) {
	const GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${OPENWEATHER_API_KEY}`;

	return fetch(GEOCODING_API_URL).then((response) => response.json()).then((data) => {
		if (data.length > 0) {
			return {
				lat : data[0].lat,
				lon : data[0].lon
			};
		}
		else {
			throw new Error('Location not found.');
		}
	});
}



//      <------ End Weather App ------>     //

//    <------ Start Google Maps App ------>     //
const GOOGLE_API_KEY = 'AIzaSyDbkcTPnSBVp6_XYvjH1gR5GodWeZUYylU';
const MAPS_API_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap`;

export function getMapsScriptURL () {
	return MAPS_API_URL;
}

export function getPlacePredictions (query) {
	if (window.google) {
		const service = new window.google.maps.places.AutocompleteService();
		return new Promise((resolve, reject) => {
			service.getPlacePredictions({ input: query }, (predictions, status) => {
				if (status === window.google.maps.places.PlacesServiceStatus.OK) {
					resolve(
						predictions.map((prediction) => ({
							description : prediction.description,
							placeId     : prediction.place_id
						}))
					);
				}
				else {
					reject(new Error(status));
				}
			});
		});
	}
	else {
		throw new Error('Google Maps API not loaded');
	}
}

//    <------ End Google Maps App ------>     //

//      <------ Start TripAdvisor App ------>     //
const TRIPADVISOR_API_KEY = '4AD5532B4B5145AE936A8A2D1ADF47F0';
const SEARCH_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/search';
const DETAILS_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/{locationId}/details';
const PHOTOS_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/{locationId}/photos';
const REVIEWS_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/{locationId}/reviews';
const NEARBY_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/nearby_search';

export function getTripAdvisorDetailsURL (locationId) {
	return DETAILS_API_URL.replace('{locationId}', locationId);
}

export function getTripAdvisorPhotosURL (locationId) {
	return PHOTOS_API_URL.replace('{locationId}', locationId);
}

export function getTripAdvisorReviewsURL (locationId) {
	return REVIEWS_API_URL.replace('{locationId}', locationId);
}

export function searchTripAdvisorLocations (query) {
	const url = `${SEARCH_API_URL}?query=${query}`;
	return fetch(url).then((response) => response.json()).then((data) => data.results);
}

export function getNearbyTripAdvisorLocations (latitude, longitude) {
	const url = `${NEARBY_API_URL}?latitude=${latitude}&longitude=${longitude}`;
	return fetch(url).then((response) => response.json()).then((data) => data.results);
}

//      <------ End TripAdvisor App ------>     //

// //      <------ Start Weather App ------>     //
// const OPENWEATHER_API_KEY = '2bdb00a59d61be4d07564ba927191277';
// const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`;
// const GEOCODING_API_URL = 'http://api.openweathermap.org/geo/1.0';
// //      <------ End Weather App ------>     //

// //    <------ Start Google Maps App ------>     //
// const GOOGLE_API_KEY = 'AIzaSyDphv5yJzdqL3okfU6nufflGcUOyqwEi6U';
// const MAPS_API_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap`;
// const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=(cities)&key=${GOOGLE_MAPS_API_KEY}`;
// //    <------ End Google Maps App ------>     //

// //      <------ Start TripAdvisor App ------>     //
// const TRIPADVISOR_API_KEY = '03C6A75A637A4EB4AC8DF557C31FE43A';
// const SEARCH_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/search';
// const DETAILS_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/{locationId}/details';
// const PHOTOS_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/{locationId}/photos';
// const REVIEWS_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/{locationId}/reviews';
// const NEARBY_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/nearby_search';
// //      <------ End TripAdvisor App ------>     //

// //      <------ Start Weather App ------>     //

// export function getWeather(city, state, country) {
//     return fetch(WEATHER_API_URL)
//         .then(response => response.json())
//         .then(data => {
//             if (data.cod === 200) {
//                 return data;
//             } else {
//                 throw new Error(data.message);
//             }
//         });
// }

// export function getCoordinatesByLocation (city, state, country) {
// 	return fetch(`${GEOCODING_API_URL}/direct?q=${city},${state},${country}&limit=5&appid=${OPENWEATHER_API_KEY}`)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			if (data.length > 0) {
// 				return { lat: data[0].lat, lon: data[0].lon };
// 			}
// 			else {
// 				throw new Error('Location not found.');
// 			}
// 		});
// }

// //      <------ End Weather App ------>     //

// //    <------ Start Google Maps App ------>     //

// export function getMapsScriptURL () {
// 	return MAPS_API_URL;
// }

// export function getPlacePredictions(query) {

//   return fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       if (data.status === 'OK') {
//         return data.predictions.map(prediction => ({
//           description: prediction.description,
//           placeId: prediction.place_id
//         }));
//       } else {
//         throw new Error(data.error_message);
//       }
//     });
// }

// //    <------ End Google Maps App ------>     //

// //      <------ Start TripAdvisor App ------>     //

// export function getTripAdvisorDetailsURL (locationId) {
// 	return DETAILS_API_URL.replace('{locationId}', locationId);
// }

// export function getTripAdvisorPhotosURL (locationId) {
// 	return PHOTOS_API_URL.replace('{locationId}', locationId);
// }

// export function getTripAdvisorReviewsURL (locationId) {
// 	return REVIEWS_API_URL.replace('{locationId}', locationId);
// }

// export function searchTripAdvisorLocations (query) {
// 	const url = `${SEARCH_API_URL}?query=${query}`;
// 	return fetch(url).then((response) => response.json()).then((data) => data.results);
// }

// export function getNearbyTripAdvisorLocations (latitude, longitude) {
// 	const url = `${NEARBY_API_URL}?latitude=${latitude}&longitude=${longitude}`;
// 	return fetch(url).then((response) => response.json()).then((data) => data.results);
// }

// //      <------ End TripAdvisor App ------>     //
