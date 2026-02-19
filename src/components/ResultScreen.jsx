import React from 'react'
function ResultScreen({ score, total, onReview, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="card">
      <h2>Quiz Complete</h2>

      <p>
        Score: {score} / {total}
      </p>

      <p>Percentage: {percentage}%</p>

      <button onClick={onReview}>Review Incorrect</button>
      <button className="secondary" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}

export default ResultScreen;
