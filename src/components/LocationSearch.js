import React, { useState } from 'react';

function LocationSearch ({ onLocationSelect }) {
	const [ query, setQuery ] = useState('');
	const [ predictions, setPredictions ] = useState([]);

	const handleSearch = () => {
		if (window.google && window.google.maps) {
		  const service = new window.google.maps.places.AutocompleteService();
	  
		  service.getPlacePredictions(
			{
			  input: query,
			},
			(predictions, status) => {
			  if (status === window.google.maps.places.PlacesServiceStatus.OK) {
				// Check if predictions array has results
				if (predictions.length > 0) {
				  // Select the first prediction
				  const selectedPrediction = predictions[0];
				  setQuery(selectedPrediction.description);
				  setPredictions([]); // Clear predictions
				  onLocationSelect(selectedPrediction); // Notify parent component about location selection
				}
			  } else {
				console.error('Autocomplete service error:', status);
			  }
			}
		  );
		}
	  };
	  

	return (
		<div>
			<input
				type="text"
				placeholder="Search for a location"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button onClick={handleSearch}>Search</button>

			{/* Display autocomplete predictions */}
			<ul>
				{predictions.map((prediction) => (
					<li
						key={prediction.place_id}
						onClick={() => {
							setQuery(prediction.description);
							setPredictions([]); // Clear predictions
							onLocationSelect(prediction); // Notify parent component about location selection
						}}
					>
						{prediction.description}
					</li>
				))}
			</ul>
		</div>
	);
}

export default LocationSearch;
