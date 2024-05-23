import React, { useState, useEffect } from 'react';
import Characters from './Characters'; // Import your Characters component

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  // Fetch character data (replace with your actual data fetching logic)
  useEffect(() => {
    const fetchCharacters = async () => {
      // Replace with your API call or data source access
      const response = await fetch('https://your-api.com/characters');
      const data = await response.json();
      setCharacters(data);
    };

    fetchCharacters();
  }, []);

  return (
    <div className="characters-list">
      {characters.map((characterData) => (
        <Characters key={characterData.id} characterData={characterData} />
      ))}
    </div>
  );
};

export default CharactersList;
