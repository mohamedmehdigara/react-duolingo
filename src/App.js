import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LanguageSelection from './pages/LanguageSelection';
import Lessons from './pages/Lessons';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import Characters from './components/Characters'; // Existing Characters component
import CharactersList from './components/CharactersList'; // New CharactersList component

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Header />
          <Main />
          <Routes>
            <Route exact path="/" element={<LanguageSelection />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/profile" element={<Profile />} />

            {/* Update for Characters route */}
            <Route path="/Characters" element={<CharactersList />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
