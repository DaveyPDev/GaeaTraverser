import React, { useState, useEffect } from 'react';

function Lodging() {
  const [locationQuery, setLocationQuery] = useState(''); // State to store user input
  const [lodgingData, setLodgingData] = useState([]);
  const [loading, setLoading] = useState(true);

  // TripAdvisor API endpoint and your API key
  const apiKey = 'YOUR_API_KEY_HERE';

  useEffect(() => {
    if (!locationQuery) {
      // Don't fetch data if locationQuery is empty
      return;
    }

    const apiUrl = `https://api.tripadvisor.com/api/partner/2.0/location/${locationQuery}/hotels?key=${apiKey}`;

    // Fetch lodging data from TripAdvisor API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setLodgingData(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching lodging data:', error));
  }, [locationQuery]); // Trigger useEffect when locationQuery changes

  return (
    <div>
      <h2>Lodging</h2>
      <input
        type="text"
        placeholder="Enter a location"
        value={locationQuery}
        onChange={(e) => setLocationQuery(e.target.value)}
      />
      <img
        src="https://i.gifer.com/YfKs.gif"
        alt="Lodging Placeholder"
        className="centered-gif"
      />
      {loading ? (
        <p>Loading lodging data...</p>
      ) : (
        <div>
          {lodgingData.map((hotel) => (
            <div key={hotel.id}>
              <h3>{hotel.name}</h3>
              <p>Rating: {hotel.rating}</p>
              <p>Address: {hotel.address}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Lodging;



// import React from 'react';

// function Lodging () {
    // 	return (
        // 		<div>
        // 			<h2>Lodging</h2>
        // 			<img
        // 				src="https://i.gifer.com/YfKs.gif"
        // 				alt="Weather Placeholder"
        // 				className="centered-gif"
        // 			/>
        
        // 			{/* Weather content goes here */}
        // 		</div>
        // 	);
        // }
        
        // export default Lodging;
        
        
        
        
        // import React, { useState, useEffect } from 'react';
        
        // function Lodging() {
        //   const [lodgingData, setLodgingData] = useState([]);
        //   const [loading, setLoading] = useState(true);
        
        //   useEffect(() => {
        //     // Fetch lodging data from an API (replace with your API URL)
        //     fetch('https://api.example.com/lodging')
        //       .then((response) => response.json())
        //       .then((data) => {
        //         setLodgingData(data);
        //         setLoading(false); // Set loading to false when data is received
        //       })
        //       .catch((error) => console.error('Error fetching lodging data:', error));
        //   }, []);
        
        //   return (
        //     <div>
        //       <h2>Lodging</h2>
        //       <img
        //         src="https://i.gifer.com/YfKs.gif"
        //         alt="Lodging Placeholder"
        //         className="centered-gif"
        //       />
        //       {loading ? (
        //         <p>Loading lodging data...</p>
        //       ) : (
        //         <div>
        //           {lodgingData.map((lodging) => (
        //             <div key={lodging.id}>
        //               <h3>{lodging.name}</h3>
        //               <p>Location: {lodging.location}</p>
        //               <p>Price: {lodging.price}</p>
        //               {/* Add more lodging details */}
        //             </div>
        //           ))}
        //         </div>
        //       )}
        //     </div>
        //   );
        // }
        
        // export default Lodging;