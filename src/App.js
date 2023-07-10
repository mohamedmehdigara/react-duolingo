import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageSelection from './pages/LanguageSelection';
import Lessons from "./pages/Lessons";
import Profile from "./pages/Profile";
import Header from './components/Header';


const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route exact path="/" element={<LanguageSelection/>} />
          <Route path="/lessons" element={<Lessons/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
