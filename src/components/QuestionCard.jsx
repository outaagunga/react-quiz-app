import React from 'react'
function QuestionCard({ question, onSelect }) {
  return (
    <div>
      <h3>{question.question}</h3>

      {question.options.map((option, index) => (
        <button
          key={index}
          className="option-btn"
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuestionCard;
