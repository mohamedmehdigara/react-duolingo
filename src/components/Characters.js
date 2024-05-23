import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // For type checking props

const Characters = ({ characterData, ...rest }) => {
  // Handle missing data gracefully (outside useState)

  const [isCompleted, setIsCompleted] = useState();

  // Optional: Fetch character data asynchronously (outside useEffect)
  // Implement this logic if data is fetched within the Character component

  useEffect(() => {
    // Implement logic to fetch data if necessary
  }, []); // Dependency array for useEffect

  const renderCharacterContent = () => {
    // Ensure characterData is defined before accessing its properties
    if (!characterData) return null;

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
      className={`characters ${isCompleted ? 'completed' : ''}`}
      style={{ width: rest.size || 24, height: rest.size || 24, borderRadius: rest.size / 2 || 12, backgroundColor: rest.color || '#333' }}
      onClick={() => { /* Handle character click (optional) */ }}
    >
      {renderCharacterContent()}
    </div>
  );
};

Characters.propTypes = {
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

export default Characters;
