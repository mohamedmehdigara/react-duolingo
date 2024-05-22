import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LanguageSelection from './pages/LanguageSelection';
import Lessons from './pages/Lessons';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import Characters from './components/Characters';
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Header />
          <Main/>
          <Routes>
            <Route exact path="/" element={<LanguageSelection/>} />
            <Route path="/lessons" element={<Lessons/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/Characters" element={<Characters/>} />

          </Routes>
        </div>
        <Footer />

      </div>
    </Router>
  );
};

export default App;
