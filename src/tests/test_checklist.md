
quiz-app/
│
├── src/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── tests/
│   ├── components/
│   │   ├── StartScreen.test.jsx
│   │   ├── QuizScreen.test.jsx
│   │   ├── QuestionCard.test.jsx
│   │   ├── Timer.test.jsx
│   │   ├── ResultScreen.test.jsx
│   │   └── ReviewScreen.test.jsx
│   │
│   ├── hooks/
│   │   └── useQuiz.test.js
│   │
│   ├── services/
│   │   └── triviaApi.test.js
│   │
│   ├── utils/
│   │   ├── shuffleArray.test.js
│   │   └── decodeHtml.test.js
│   │
│   ├── integration/
│   │   ├── quizFlow.test.jsx
│   │   ├── restartFlow.test.jsx
│   │   └── timeoutFlow.test.jsx
│   │
│   └── setup/
│       ├── testSetup.js
│       └── mockHandlers.js
│
├── vite.config.js
└── package.json



## Below is a **complete behavior checklist** grouped by responsibility.

---

# 🧠 1. useQuiz Hook (Core State Machine)

## 🔹 Initial State

* Mode defaults to `"start"`
* Questions array is empty
* Score is `0`
* Incorrect answers array is empty

---

## 🔹 startQuiz()

* Calls API with correct parameters
* Sets mode to `"quiz"` after successful fetch
* Resets score to `0`
* Clears incorrectAnswers
* Formats questions correctly:

  * Each question has:

    * id
    * decoded question
    * shuffled options
    * correctAnswer
    * userAnswer = null
* Handles API failure:

  * Does NOT change mode to `"quiz"`
  * Shows alert on error

---

## 🔹 finishQuiz()

* Calculates score correctly
* Identifies incorrect answers correctly
* Stores updated questions with user answers
* Sets mode to `"result"`
* Does not mutate original question objects improperly

---

## 🔹 goToReview()

* Sets mode to `"review"`

---

## 🔹 restartQuiz()

* Sets mode to `"start"`
* Clears questions
* Resets score
* Clears incorrect answers

---

# 🌐 2. triviaApi.js

* Sends request with:

  * amount
  * difficulty (when provided)
  * category (when provided)
* Throws error when:

  * Response is not OK
  * response_code !== 0
* Returns `results` array on success

---

# 🔀 3. shuffleArray Utility

* Returns new array (does not mutate original)
* Contains same elements as input
* Changes order most of the time
* Handles empty array
* Handles single-item array

---

# 🔤 4. decodeHtml Utility

* Decodes:

  * `&quot;`
  * `&#039;`
  * `&amp;`
* Returns original string if no entities present
* Does not throw on empty string

---

# 🎬 5. App.jsx (Screen Orchestration)

* Renders:

  * StartScreen when mode = "start"
  * QuizScreen when mode = "quiz"
  * ResultScreen when mode = "result"
  * ReviewScreen when mode = "review"
* Passes correct props to each screen

---

# 📝 6. StartScreen

* Renders:

  * Amount input
  * Difficulty select
  * Category input
* Calls onStart with correct config object
* Prevents default form submission
* Does not crash if inputs are empty
* Enforces min/max amount

---

# ❓ 7. QuizScreen

## Initial Render

* Displays first question
* Displays timer
* Displays next button

---

## Answer Selection

* Clicking option:

  * Updates local question userAnswer
  * Does not skip question
* Selecting new option overwrites previous selection

---

## Navigation

* Next button:

  * Moves to next question
  * Calls onFinish on last question
* Does not skip beyond last index

---

## Timer Behavior

* Countdown starts on question render
* Calls onTimeUp when time reaches 0
* Moves to next question on timeout
* Timer resets when moving to next question
* Interval is cleaned up properly (no memory leak)

---

# 🃏 8. QuestionCard

* Displays question text
* Displays all options
* Calls onSelect with correct option
* Does not contain scoring logic
* Does not mutate question object

---

# ⏳ 9. Timer

* Initializes with correct duration
* Decrements every second
* Stops at 0
* Calls onTimeUp exactly once
* Clears interval on unmount
* Resets when duration changes

---

# 🏁 10. ResultScreen

* Displays correct score
* Calculates percentage correctly
* Calls onReview when review clicked
* Calls onRestart when restart clicked
* Handles total = 0 safely

---

# 🔍 11. ReviewScreen

* Shows:

  * Question text
  * User answer
  * Correct answer
* Displays "No Answer" when userAnswer is null
* Displays message when no incorrect answers
* Calls onRestart when restart clicked

---

# 🔁 12. Full User Flow (Integration Tests)

Test complete flows:

### Flow 1: Perfect Score

* Start quiz
* Answer all correctly
* Score equals total
* Review shows no incorrect answers

---

### Flow 2: All Incorrect

* Answer all wrong
* Score = 0
* Review shows all questions

---

### Flow 3: Timeout Path

* Let timer expire
* Ensure question advances
* Ensure unanswered counted incorrect

---

### Flow 4: Restart Flow

* Finish quiz
* Click restart
* Returns to start screen
* State resets fully

---

### Flow 5: API Failure

* Mock failed fetch
* Ensure app does not enter quiz mode
* Error handled gracefully

---

# ⚠️ 13. Edge Cases

* Empty question array
* User clicks next without selecting answer
* Rapid clicking next button
* Timer unmount before completion
* Very slow API response
* Double submission prevention
* Large amount (20 questions)
* Zero incorrect answers review state

---

# 🧪 14. What Type of Tests to Write

## Unit Tests

* Utilities
* Hook logic
* Pure functions

## Component Tests

* Render behavior
* User interactions
* Conditional rendering

## Integration Tests

* Complete quiz flow

---

# 🏗 Recommended Tools

* Vitest or Jest
* React Testing Library
* MSW (Mock Service Worker) for API mocking

---