import React, { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
  
    try {
    
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=YOUR_API_KEY`);
      const data = await response.json();
      setSearchResults(data.results); 
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Places"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.placeId}>{result.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
