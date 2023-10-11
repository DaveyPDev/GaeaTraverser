import React, { useEffect } from 'react';
import LocationSearch from './LocationSearch'; // Import the LocationSearch component

function Maps() {
  const loadMapsAPI = () => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDphv5yJzdqL3okfU6nufflGcUOyqwEi6U&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  };

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 0, lng: 0 },
      zoom: 8,
    });
  };

  useEffect(() => {
    loadMapsAPI();
  }, []);
  const handleLocationSelect = (selectedLocation) => {
    console.log('Selected Location:', selectedLocation);
  };

  return (
    <div>
      <h2>Maps</h2>
      <LocationSearch onLocationSelect={handleLocationSelect} />
      <img src="https://media0.giphy.com/media/B14Ym7cs4PxwRUdCtN/giphy.gif" className="centered-gif" />
      <form id="search-form">
        <label>
          Enter a location:
          <input type="text" id="search-input" />
        </label>
        <button type="submit">Search</button>
      </form>
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
}

export default Maps;




// import React, { Component } from 'react';

// `https://maps.googleapis.com/maps/api/js?key=AIzaSyDphv5yJzdqL3okfU6nufflGcUOyqwEi6U&libraries=places&callback=initMap`;
// class Maps extends Component {
// 	render () {
// 		return (
// 			<div>
// 				<h2>Maps</h2>
// 				<img src="https://media0.giphy.com/media/B14Ym7cs4PxwRUdCtN/giphy.gif" 
// 				className="centered-gif" />
// 				{/* Your maps-related content */}
// 			</div>
// 		);
// 	}
// }

// export default Maps;
