import React from 'react';

const Header = () => {
  const handleNavigation = (path) => {
    // Implement navigation logic here (e.g., update state or use a library like useHistory)
    console.log(`Navigate to: ${path}`); // Placeholder for now
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleNavigation('/')}>Language Selection</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/lessons')}>Lessons</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/profile')}>Profile</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
