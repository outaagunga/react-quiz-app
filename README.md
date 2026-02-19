# React Quiz App

A logic-driven quiz app built with React. Fetches dynamic questions from the [Open Trivia DB API](https://opentdb.com/api_config.php), with a countdown timer, score tracking, and a review mode for incorrect answers.

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org) v18+ (includes npm)

Verify your installation:

```bash
node -v
npm -v
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd quiz-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Then open the URL shown in your terminal (e.g. `http://localhost:5173/`) in your browser.

---

## Project Structure

```
src/
├── components/
│   ├── StartScreen.jsx     # Quiz config (questions, difficulty, category)
│   ├── QuizScreen.jsx      # Question progression
│   ├── QuestionCard.jsx    # Single question display
│   ├── Timer.jsx           # Countdown timer
│   ├── ResultScreen.jsx    # Final score
│   └── ReviewScreen.jsx    # Review incorrect answers
├── hooks/
│   └── useQuiz.js          # Central state machine
├── services/
│   └── triviaApi.js        # Open Trivia DB API calls
├── utils/
│   ├── shuffleArray.js     # Randomise answer order
│   └── decodeHtml.js       # Decode HTML entities from API
├── App.jsx                 # Screen orchestration
├── main.jsx                # App entry point
└── App.css                 # Global styles
```

---

## How It Works

1. **Start Screen** — Choose number of questions, difficulty, and category, then hit Start.
2. **Quiz Screen** — Answer one question at a time before the timer runs out.
3. **Result Screen** — See your final score and percentage.
4. **Review Screen** — See every question you got wrong, with the correct answer shown.

---

## Common Issues

**No questions loading**
- Check your internet connection.
- Try a different category/difficulty combination — not all combinations are available in the API.

**Timer not resetting between questions**
- Ensure `useEffect` in `Timer.jsx` resets `timeLeft` when the question changes and clears the interval on unmount.

**Styling looks broken**
- Confirm `import "./App.css"` is present in `main.jsx`.
- Check that components use the correct class names (`card`, `option-btn`, `correct`, `incorrect`).

---

## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Open Trivia DB API](https://opentdb.com/)