// src/components/ZodiacCards.js
import React from 'react';
import './styles/ZodiacCards.css'; // You can add specific styles for the ZodiacCards component

// Sample data for Zodiac signs
const zodiacSigns = [
  { name: 'Aries', dateRange: 'March 21 - April 19', element: 'Fire', symbol: '♈' },
  { name: 'Taurus', dateRange: 'April 20 - May 20', element: 'Earth', symbol: '♉' },
  { name: 'Gemini', dateRange: 'May 21 - June 20', element: 'Air', symbol: '♊' },
  { name: 'Cancer', dateRange: 'June 21 - July 22', element: 'Water', symbol: '♋' },
  { name: 'Leo', dateRange: 'July 23 - August 22', element: 'Fire', symbol: '♌' },
  { name: 'Virgo', dateRange: 'August 23 - September 22', element: 'Earth', symbol: '♍' },
  { name: 'Libra', dateRange: 'September 23 - October 22', element: 'Air', symbol: '♎' },
  { name: 'Scorpio', dateRange: 'October 23 - November 21', element: 'Water', symbol: '♏' },
  { name: 'Sagittarius', dateRange: 'November 22 - December 21', element: 'Fire', symbol: '♐' },
  { name: 'Capricorn', dateRange: 'December 22 - January 19', element: 'Earth', symbol: '♑' },
  { name: 'Aquarius', dateRange: 'January 20 - February 18', element: 'Air', symbol: '♒' },
  { name: 'Pisces', dateRange: 'February 19 - March 20', element: 'Water', symbol: '♓' },
];

const ZodiacCards = () => {
  return (
    <div className="zodiac-cards">
      {zodiacSigns.map((sign, index) => (
        <div key={index} className="zodiac-card">
          <h3>{sign.symbol} {sign.name}</h3>
          <p><strong>Date Range:</strong> {sign.dateRange}</p>
          <p><strong>Element:</strong> {sign.element}</p>
        </div>
      ))}
    </div>
  );
};

export default ZodiacCards;
