import React from 'react';
import '../App.css'; // Import CSS file for styling

const LanguageSelection = () => {
  const languages = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Spanish' },
    { id: 3, name: 'French' },
    // Add more languages as needed
  ];

  const handleLanguageClick = (languageId) => {
    // Perform actions when a language is clicked, such as storing the selected language in state or navigating to the next page
    console.log(`Language with ID ${languageId} clicked!`);
  };

  return (
    <div>
      <h1>Language Selection Page</h1>
      <ul className="language-list">
        {languages.map((language) => (
          <li
            key={language.id}
            className="language-item"
            onClick={() => handleLanguageClick(language.id)}
          >
            {language.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelection;
