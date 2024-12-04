// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.css'; // Global styles import
import Navbar from './components/Navbar'; // Navbar component
import Home from './pages/Home'; // Home page
import About from './pages/About'; // About page
import AskQuestion from './pages/AskQuestion'; // Ask Question page
import Contact from './pages/Contact'; // Contact page

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar component rendered on all pages */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<About />} /> {/* About Page */}
          <Route path="/ask-question" element={<AskQuestion />} /> {/* Ask Question Page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
