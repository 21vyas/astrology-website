// src/pages/Home.js
import React from 'react';
import HoroscopeWidget from '../components/HoroscopeWidget'; // Import HoroscopeWidget
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Astrology Website</h1>
      <HoroscopeWidget /> {/* Display the Horoscope Widget here */}
    </div>
  );
};

export default Home;
