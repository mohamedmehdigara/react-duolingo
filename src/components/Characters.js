import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // For type checking props

const Character = ({ characterData, ...rest }) => {
  // Handle missing data gracefully (outside useState)
  if (!characterData) return null;

  const [isCompleted, setIsCompleted] = useState(characterData?.completed ?? false);

  // Optional: Fetch character data asynchronously (outside useEffect)
  let shouldFetchData = false; // Flag to control fetching (optional)
  if (/* condition for fetching */) {
    shouldFetchData = true;
  }

  useEffect(() => {
    if (shouldFetchData) {
      // Implement logic to fetch character data if necessary
    }
  }, [shouldFetchData]); // Dependency array for useEffect

  const renderCharacterContent = () => {
    switch (characterData.type) {
      case 'letter':
        return characterData.symbol;
      case 'image':
        return <img src={characterData.src} alt={characterData.alt} />;
      default:
        return characterData.symbol || '?'; // Default symbol for unknown type
    }
  };

  return (
    <div
      className={`character ${isCompleted ? 'completed' : ''}`}
      style={{ width: rest.size || 24, height: rest.size || 24, borderRadius: rest.size / 2 || 12, backgroundColor: rest.color || '#333' }}
      onClick={() => { /* Handle character click (optional) */ }}
    >
      {renderCharacterContent()}
    </div>
  );
};

Character.propTypes = {
  characterData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['letter', 'image']),
    symbol: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    tooltip: PropTypes.string,
    completed: PropTypes.bool, // Optional if fetched later
  }).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Character;
