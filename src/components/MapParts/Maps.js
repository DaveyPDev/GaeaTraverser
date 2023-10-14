import React, { useEffect, useState } from 'react';
// import OWLocationSearch from '../WeatherParts/OW_LocationSearch';
import G_LocationSearch from '../MapParts/G_LocationSearch';
import G_Directions from '../MapParts/G_Directions';
import G_Geocoding from '../MapParts/G_Geocoding';
// AIzaSyDbkcTPnSBVp6_XYvjH1gR5GodWeZUYylU

const Maps = () => {
	const [ searchQuery, setSearchQuery ] = useState('');

	const loadMapsAPI = () => {
		if (window.google) {
			initMap();
		}
		else {
			const script = document.createElement('script');
			script.src =
				'https://maps.googleapis.com/maps/api/js?key=AIzaSyDbkcTPnSBVp6_XYvjH1gR5GodWeZUYylU&libraries=places&callback=initMap';
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
		}
	};

	const initMap = () => {
		if (window.google && window.google.maps) {
			// Use the Geolocation API to get the user's location.
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((position) => {
					const userLocation = {
						lat : position.coords.latitude,
						lng : position.coords.longitude
					};

					const map = new window.google.maps.Map(document.getElementById('map'), {
						center : userLocation, // Center the map on the user's location
						zoom   : 8
					});
				});
			}
			else {
				console.error('Geolocation is not supported by your browser.');
			}
		}
		else {
			console.error('Google Maps API not available');
		}
	};

	const handleLocationSelect = (selectedLocation) => {
		console.log('Selected Location:', selectedLocation);
	};

	const handleSearch = (event) => {
		event.preventDefault();
	};

	useEffect(() => {
		loadMapsAPI();
	}, []);

	return (
		<div>
			<h2>Maps</h2>
			<img src="https://media0.giphy.com/media/B14Ym7cs4PxwRUdCtN/giphy.gif" className="centered-gif" />
			<G_LocationSearch onLocationSelect={handleLocationSelect} />
			<form id="search-form" onSubmit={handleSearch}>
				<label>
					Enter a location:
					<input
						type="text"
						id="search-input"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</label>
				<button type="submit">Search</button>
			</form>
			<div id="map" style={{ height: '500px', width: '100%' }} />
		</div>
	);
};

export default Maps;

// import React, { useEffect } from 'react';
// // import OWLocationSearch from '../WeatherParts/OW_LocationSearch';
// import G_LocationSearch from '../MapParts/G_LocationSearch';
// import G_Directions from '../MapParts/G_Directions';
// import G_Geocoding from '../MapParts/G_Geocoding';
// // AIzaSyDbkcTPnSBVp6_XYvjH1gR5GodWeZUYylU

// const Maps = () => {
//   const loadMapsAPI = () => {
//     if (window.google) {
//       initMap();
//     } else {
//       const script = document.createElement('script');
//       script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDbkcTPnSBVp6_XYvjH1gR5GodWeZUYylU&libraries=places&callback=initMap';
//       script.async = true;
//       script.defer = true;
//       document.head.appendChild(script);
//     }
//   };

//   const initMap = () => {
//     if (window.google && window.google.maps) {
//       const map = new window.google.maps.Map(document.getElementById('map'), {
//         center: { lat: 0, lng: 0 },
//         zoom: 8
//       });
//     } else {
//       console.error('Google Maps API not available');
//     }
//   };

//   useEffect(() => {
//     loadMapsAPI();
//   }, []);

//   const handleLocationSelect = (selectedLocation) => {
//     console.log('Selected Location:', selectedLocation);
//   };

//   return (
//     <div>
//       <h2>Maps</h2>
//       <OWLocationSearch onLocationSelect={handleLocationSelect} />
//       <img src="https://media0.giphy.com/media/B14Ym7cs4PxwRUdCtN/giphy.gif" className="centered-gif" />
//       <form id="search-form">
//         <label>
//           Enter a location:
//           <input type="text" id="search-input" />
//         </label>
//         <button type="submit">Search</button>
//       </form>
//       <div id="map" style={{ height: '500px', width: '100%' }}></div>
//     </div>
//   );
// };

// export default Maps;

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
