// src/components/HoroscopeWidget.js
import React, { useState } from 'react';
import './styles/HoroscopeWidget.css'; // Add specific styles for the widget

const HoroscopeWidget = () => {
  const [sign, setSign] = useState('');
  const [horoscope, setHoroscope] = useState('');

  // Sample data for horoscopes (This can be fetched from an API in a real-world scenario)
  const horoscopes = {
    Aries: {
      daily: 'Today is a day for new beginnings. Take the first step towards a new adventure.',
      weekly: 'You will face some challenges this week, but don’t be afraid to take risks.',
      monthly: 'This month will be full of unexpected opportunities. Keep your eyes open.',
    },
    Taurus: {
      daily: 'You might feel a bit more introverted today. Take some time to reflect on your goals.',
      weekly: 'This week, focus on your finances. A good opportunity will come your way.',
      monthly: 'The month ahead promises growth, especially in relationships and personal goals.',
    },
    // Add other zodiac signs similarly
  };

  const handleSignChange = (event) => {
    setSign(event.target.value);
    setHoroscope('');
  };

  const fetchHoroscope = (type) => {
    if (sign) {
      setHoroscope(horoscopes[sign] ? horoscopes[sign][type] : 'No horoscope available');
    } else {
      setHoroscope('Please select a zodiac sign');
    }
  };

  return (
    <div className="horoscope-widget">
      <h2>Horoscope Widget</h2>
      <select onChange={handleSignChange} value={sign}>
        <option value="">Select Zodiac Sign</option>
        <option value="Aries">Aries</option>
        <option value="Taurus">Taurus</option>
        <option value="Gemini">Gemini</option>
        <option value="Cancer">Cancer</option>
        <option value="Leo">Leo</option>
        <option value="Virgo">Virgo</option>
        <option value="Libra">Libra</option>
        <option value="Scorpio">Scorpio</option>
        <option value="Sagittarius">Sagittarius</option>
        <option value="Capricorn">Capricorn</option>
        <option value="Aquarius">Aquarius</option>
        <option value="Pisces">Pisces</option>
      </select>

      <div className="horoscope-actions">
        <button onClick={() => fetchHoroscope('daily')}>Daily Horoscope</button>
        <button onClick={() => fetchHoroscope('weekly')}>Weekly Horoscope</button>
        <button onClick={() => fetchHoroscope('monthly')}>Monthly Horoscope</button>
      </div>

      {horoscope && (
        <div className="horoscope-display">
          <h3>{sign ? `${sign}'s Horoscope` : 'Select a Zodiac Sign'}</h3>
          <p>{horoscope}</p>
        </div>
      )}
    </div>
  );
};

export default HoroscopeWidget;
