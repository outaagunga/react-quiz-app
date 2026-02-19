function ReviewScreen({ incorrectAnswers, onRestart }) {
  return (
    <div className="card">
      <h2>Review Incorrect Answers</h2>

      {incorrectAnswers.length === 0 ? (
        <p>Perfect score! No incorrect answers.</p>
      ) : (
        incorrectAnswers.map((q) => (
          <div key={q.id} style={{ marginBottom: "20px" }}>
            <h4>{q.question}</h4>
            <p>
              Your Answer:{" "}
              <span className="incorrect">
                {q.userAnswer || "No Answer"}
              </span>
            </p>
            <p>
              Correct Answer:{" "}
              <span className="correct">
                {q.correctAnswer}
              </span>
            </p>
          </div>
        ))
      )}

      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}

export default ReviewScreen;
