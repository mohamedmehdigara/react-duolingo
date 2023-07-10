import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="Duolingo.png" alt="Duolingo Logo" className="logo" />
      </div>
      <ul className="menu">
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/leaderboards">Leaderboards</Link>
        </li>
        <li>
          <Link to="/quests">Quests</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
