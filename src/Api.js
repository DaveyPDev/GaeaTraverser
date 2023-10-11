const OPENWEATHER_API_KEY = '2bdb00a59d61be4d07564ba927191277';
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${OPENWEATHER_API_KEY}`;


const GEOCODING_API_URL = 'http://api.openweathermap.org/geo/1.0';

const GOOGLE_API_KEY = 'AIzaSyDphv5yJzdqL3okfU6nufflGcUOyqwEi6U';
const MAPS_API_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap`;

const TRIPADVISOR_API_KEY = '03C6A75A637A4EB4AC8DF557C31FE43A';
const SEARCH_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/search';
const DETAILS_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/{locationId}/details';
const PHOTOS_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/{locationId}/photos';
const REVIEWS_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/{locationId}/reviews';
const NEARBY_API_URL = 'https://api.content.tripadvisor.com/api/v1/location/nearby_search';


//      <------ Start Weather App ------>     //
export function getWeather(city) {
    const url = WEATHER_API_URL.replace('{city name}', city);
    return fetch(url)
        .then(response => response.json())
        .then(data => data);
}



export function getCoordinatesByLocation(city, state, country, limit = 1) {
  const url = `${GEOCODING_API_URL}/direct?q=${city},${state},${country}&limit=${limit}&appid=${OPENWEATHER_API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data[0]); 
}


export function getWeatherByCoordinates(lat, lon) {
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`;
  return fetch(WEATHER_API_URL)
    .then((response) => response.json());
}

//      <------ End Weather App ------>     //


export function getMapsScriptURL() {
    return MAPS_API_URL;
}

export function getTripAdvisorDetailsURL(locationId) {
    return DETAILS_API_URL.replace('{locationId}', locationId);
}

export function getTripAdvisorPhotosURL(locationId) {
    return PHOTOS_API_URL.replace('{locationId}', locationId);
}

export function getTripAdvisorReviewsURL(locationId) {
    return REVIEWS_API_URL.replace('{locationId}', locationId);
}

export function searchTripAdvisorLocations(query) {
    const url = `${SEARCH_API_URL}?query=${query}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.results);
}

export function getNearbyTripAdvisorLocations(latitude, longitude) {
    const url = `${NEARBY_API_URL}?latitude=${latitude}&longitude=${longitude}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.results);
}
