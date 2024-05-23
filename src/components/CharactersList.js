import React, { useState, useEffect } from 'react';
import Characters from './Characters'; // Import your Characters component

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null); // State for error handling

  // Fetch character data (replace with your actual API endpoint)
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('YOUR_ACTUAL_API_ENDPOINT'); // Replace with your actual URL

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="characters-list">
      {error ? (
        <p>Error fetching characters: {error.message}</p>
      ) : (
        characters.map((characterData) => (
          <Characters key={characterData.id} characterData={characterData} />
        ))
      )}
    </div>
  );
};

export default CharactersList;
