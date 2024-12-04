// src/components/ResponseDisplay.js
import React from "react";

const ResponseDisplay = ({ responses }) => {
  return (
    <div style={styles.container}>
      {responses.map((response, index) => (
        <div key={index} style={styles.response}>
          <strong>Q:</strong> {response.question}
          <br />
          <strong>A:</strong> {response.answer}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  response: {
    marginBottom: "15px",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
};

export default ResponseDisplay;
