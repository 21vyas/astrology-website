import React, { useState } from "react";
import './styles/AskQuestion.css'; // Correct relative path to the CSS file


const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your question: "${question}" has been submitted!`);
    setQuestion(""); // Reset form
  };

  return (
    <div className="ask-question">
      <h1>Ask Your Question</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          rows="6"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AskQuestion;
