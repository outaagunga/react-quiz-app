import { useState } from "react";

function StartScreen({ onStart }) {
  const [amount, setAmount] = useState(5);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onStart({
      amount,
      difficulty,
      category,
    });
  }

  return (
    <div className="card">
      <h2>Start Quiz</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Number of Questions:
          <input
            type="number"
            min="1"
            max="20"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>

        <br /><br />

        <label>
          Difficulty:
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>

        <br /><br />

        <label>
          Category ID (optional):
          <input
            type="number"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>

        <br />

        <button type="submit">Start</button>
      </form>
    </div>
  );
}

export default StartScreen;
