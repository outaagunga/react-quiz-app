import { useState } from "react";
import QuestionCard from "./QuestionCard";
import Timer from "./Timer";

function QuizScreen({ questions, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [localQuestions, setLocalQuestions] = useState(questions);

  const currentQuestion = localQuestions[currentIndex];

  function handleAnswer(selectedOption) {
    const updated = localQuestions.map((q, i) =>
      i === currentIndex
        ? { ...q, userAnswer: selectedOption }
        : q
    );

    setLocalQuestions(updated);
  }

  function handleNext() {
    if (currentIndex < localQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onFinish(localQuestions);
    }
  }

  function handleTimeUp() {
    handleNext();
  }

  return (
    <div className="card">
      <Timer duration={15} onTimeUp={handleTimeUp} />

      <QuestionCard
        question={currentQuestion}
        onSelect={handleAnswer}
      />

      <button onClick={handleNext}>
        {currentIndex === localQuestions.length - 1
          ? "Finish"
          : "Next"}
      </button>
    </div>
  );
}

export default QuizScreen;
