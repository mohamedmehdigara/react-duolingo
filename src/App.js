import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LanguageSelection from './pages/LanguageSelection';
import Lessons from './pages/Lessons';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Header />
          <Routes>
            <Route exact path="/" component={LanguageSelection} />
            <Route path="/lessons" component={Lessons} />
            <Route path="/profile" component={Profile} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
