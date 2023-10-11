import React, { useState, useEffect } from 'react';

function Restaurants () {
	// Define state to store restaurant data
	const [ restaurants, setRestaurants ] = useState([]);

	// // Fetch restaurant data from an API
	// useEffect(() => {
	// 	// Replace with actual API fetch code
	// 	// Example API call:
	// 	fetch('https://api.example.com/restaurants')
	// 		.then((response) => response.json())
	// 		.then((data) => setRestaurants(data));
	// }, []);

	return (
		<div>
			<h2>Restaurants</h2>
			<img
				src="https://media4.giphy.com/media/Lkle2NZinkcy3uUG8T/giphy.gif"
				alt="Weather Placeholder"
				className="centered-gif"
			/>
			<ul>
				{/* Loop through the restaurants and display them */}
				{restaurants.map((restaurant) => (
					<li key={restaurant.id}>
						<h3>{restaurant.name}</h3>
						<p>Address: {restaurant.address}</p>
						<p>Cuisine: {restaurant.cuisine}</p>
						<p>Rating: {restaurant.rating}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Restaurants;
