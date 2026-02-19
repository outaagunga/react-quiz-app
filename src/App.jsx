import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import ReviewScreen from "./components/ReviewScreen";
import useQuiz from "./hooks/useQuiz";

function App() {
  const {
    mode,
    questions,
    score,
    incorrectAnswers,
    startQuiz,
    finishQuiz,
    goToReview,
    restartQuiz,
  } = useQuiz();

  return (
    <div className="app-container">
      {mode === "start" && <StartScreen onStart={startQuiz} />}

      {mode === "quiz" && (
        <QuizScreen
          questions={questions}
          onFinish={finishQuiz}
        />
      )}

      {mode === "result" && (
        <ResultScreen
          score={score}
          total={questions.length}
          onReview={goToReview}
          onRestart={restartQuiz}
        />
      )}

      {mode === "review" && (
        <ReviewScreen
          incorrectAnswers={incorrectAnswers}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
