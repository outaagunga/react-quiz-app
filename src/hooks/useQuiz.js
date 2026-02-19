import { useState } from "react";
import { fetchTriviaQuestions } from "../services/triviaApi";
import shuffleArray from "../utils/shuffleArray";
import decodeHtml from "../utils/decodeHtml";

function formatQuestions(rawQuestions) {
  return rawQuestions.map((q, index) => {
    const decodedQuestion = decodeHtml(q.question);
    const decodedCorrect = decodeHtml(q.correct_answer);
    const decodedIncorrect = q.incorrect_answers.map(decodeHtml);

    const options = shuffleArray([
      decodedCorrect,
      ...decodedIncorrect,
    ]);

    return {
      id: index,
      question: decodedQuestion,
      options,
      correctAnswer: decodedCorrect,
      userAnswer: null,
    };
  });
}

function useQuiz() {
  const [mode, setMode] = useState("start");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  // START QUIZ
  async function startQuiz(config) {
    try {
      const raw = await fetchTriviaQuestions(config);
      const formatted = formatQuestions(raw);

      setQuestions(formatted);
      setScore(0);
      setIncorrectAnswers([]);
      setMode("quiz");
    } catch (error) {
      alert(error.message);
    }
  }

  // FINISH QUIZ
  function finishQuiz(updatedQuestions) {
    let calculatedScore = 0;
    const wrong = [];

    updatedQuestions.forEach((q) => {
      if (q.userAnswer === q.correctAnswer) {
        calculatedScore++;
      } else {
        wrong.push(q);
      }
    });

    setQuestions(updatedQuestions);
    setScore(calculatedScore);
    setIncorrectAnswers(wrong);
    setMode("result");
  }

  function goToReview() {
    setMode("review");
  }

  function restartQuiz() {
    setMode("start");
    setQuestions([]);
    setScore(0);
    setIncorrectAnswers([]);
  }

  return {
    mode,
    questions,
    score,
    incorrectAnswers,
    startQuiz,
    finishQuiz,
    goToReview,
    restartQuiz,
  };
}

export default useQuiz;
