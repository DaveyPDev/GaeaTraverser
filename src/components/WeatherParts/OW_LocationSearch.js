import React, { useState } from 'react';

const OWLocationSearch = ({ onSelect }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const handleSearchTermChange = (event) => {
		setSearchTerm(event.target.value);
		searchLocations(event.target.value);
	};

	const searchLocations = (searchTerm) => {
		if (searchTerm.length < 3) {
			setSearchResults([]);
			return;
		}

		fetch(`https://api.openweathermap.org/data/2.5/weather=${searchTerm}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setSearchResults(data.results);
			})
			.catch((error) => {
				console.error(error);
				setSearchResults([]);
			});
	};

	const handleLocationSelect = (location) => {
		onSelect(location);
		setSearchTerm('');
		setSearchResults([]);
	};

	return (
		<div>
			<input type="text" value={searchTerm} onChange={handleSearchTermChange} />
			<ul>
				{searchResults.map((location) => (
					<li key={location.id} onClick={() => handleLocationSelect(location)}>
						{location.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default OWLocationSearch;

// import React, { useState } from 'react';

// function LocationSearch ({ onLocationSelect }) {
// 	const [ query, setQuery ] = useState('');
// 	const [ predictions, setPredictions ] = useState([]);

// 	const handleSearch = () => {
// 		if (window.google && window.google.maps) {
// 		  const service = new window.google.maps.places.AutocompleteService();
	  
// 		  service.getPlacePredictions(
// 			{
// 			  input: query,
// 			},
// 			(predictions, status) => {
// 			  if (status === window.google.maps.places.PlacesServiceStatus.OK) {
// 				// Check if predictions array has results
// 				if (predictions.length > 0) {
// 				  // Select the first prediction
// 				  const selectedPrediction = predictions[0];
// 				  setQuery(selectedPrediction.description);
// 				  setPredictions([]); // Clear predictions
// 				  onLocationSelect(selectedPrediction); // Notify parent component about location selection
// 				}
// 			  } else {
// 				console.error('Autocomplete service error:', status);
// 			  }
// 			}
// 		  );
// 		}
// 	  };
	  

// 	return (
// 		<div>
// 			{/* Display autocomplete predictions */}
// 			<ul>
// 				{predictions.map((prediction) => (
// 					<li
// 						key={prediction.place_id}
// 						onClick={() => {
// 							setQuery(prediction.description);
// 							setPredictions([]); // Clear predictions
// 							onLocationSelect(prediction); // Notify parent component about location selection
// 						}}
// 					>
// 						{prediction.description}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default LocationSearch;
