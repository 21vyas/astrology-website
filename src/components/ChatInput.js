// src/components/ChatInput.js
import React, { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [question, setQuestion] = useState("");

  const handleSend = () => {
    if (question.trim() !== "") {
      onSend(question); // Call the parent handler
      setQuestion("");
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Ask your astrology question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSend} style={styles.button}>
        Ask
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  input: {
    width: "70%",
    padding: "10px",
    fontSize: "16px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ChatInput;
