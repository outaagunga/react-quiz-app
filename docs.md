
# 1. Title & Objective - (react-quiz-app)  

## 1.1 Project Title

**Building a Logic-Driven Quiz App in React: Practicing Complex State Management with API Integration**

A logic-driven Quiz App built to practice complex state management in React. The app handles dynamic questions, scoring, timers, and conditional rendering, with a review mode that shows incorrect answers and explanations. Questions are fetched from the Open Trivia DB API.

---

## 1.2 Technology Chosen

* **React (JavaScript library)**
* Open Trivia DB API
* Vite (build tool)

Primary focus: **React**

---

## 1.3 Why This Technology?

I chose React because it is one of the most in-demand frontend technologies in the job market and is widely used in modern web applications. I specifically wanted to strengthen my understanding of complex state management, conditional rendering, and component architecture. This project also allowed me to bridge a gap in handling asynchronous API data and building structured, maintainable UI systems using the Single Responsibility Principle.

---

## 1.4 End Goal / Expected Outcome

By the end of this project, I will have built a fully functional quiz application that:

* Fetches dynamic questions from the Open Trivia DB API
* Manages complex state transitions (start → quiz → result → review)
* Implements a countdown timer per question
* Calculates scores and tracks incorrect answers
* Demonstrates clean component architecture using SRP
* Separates business logic from UI logic
* Includes a structured test plan and documentation

The final result demonstrates mastery of React state management, component isolation, API integration, and conditional rendering patterns.

---

# 2. Quick Summary of the Technology

## 2.1 What Is It?

React is a JavaScript library for building user interfaces using a component-based architecture. It allows developers to create reusable UI components that manage their own state and render efficiently using a virtual DOM. React emphasizes declarative programming and predictable state-driven rendering.

---

## 2.2 Where Is It Used?

• Single Page Applications (SPAs)
• SaaS dashboards and admin panels
• E-commerce platforms
• Educational platforms
• FinTech and trading interfaces
• Social media applications

React is widely used in startups and large tech companies alike.

---

## 2.3 Key Features & Capabilities

• **Component-Based Architecture** – Applications are built from reusable, isolated components, improving maintainability and scalability.

• **State Management** – React provides hooks like `useState` and `useEffect` to manage dynamic data and lifecycle behavior.

• **Virtual DOM Rendering** – Efficient updates ensure only changed parts of the UI are re-rendered.

• **Declarative UI** – The UI automatically updates when state changes, making code predictable and easier to debug.

• **Hooks System** – Enables functional components to manage side effects, state, and complex logic.

---

## 2.4 Real-World Example

One major real-world example is Meta Platforms, which created and maintains React. React is heavily used across platforms like Facebook and Instagram to manage dynamic user interfaces with high performance and real-time updates.

---


# 3. System Requirements

| Requirement       | Details                        | Version / Notes               |
| ----------------- | ------------------------------ | ----------------------------- |
| Operating System  | Windows 10 / Windows 11        | Tested on Windows 10 (64-bit) |
| Code Editor / IDE | Visual Studio Code             | v1.85+ recommended            |
| Runtime / SDK     | Node.js                        | v18+ (LTS recommended)        |
| Package Manager   | npm (comes with Node.js)       | v9+                           |
| Browser           | Google Chrome                  | v120+                         |
| Other Tools       | Git (optional but recommended) | Latest stable                 |

> Note: The project was built using Vite as the development server and build tool.

---

# 4. Installation & Setup Instructions

Below is a complete step-by-step setup guide.

---

## Step 1 – Install Node.js

### What This Step Achieves

Node.js allows us to:

* Run JavaScript outside the browser
* Use npm (Node Package Manager)
* Install React and other dependencies
* Run the development server

---

### Download Node.js

Go to:
[https://nodejs.org](https://nodejs.org)

Download the **LTS (Long Term Support)** version.

---

### Verify Installation

Open a terminal and run:

```bash
node -v
```

Expected Output Example:

```bash
v18.18.0
```

Then verify npm:

```bash
npm -v
```

Expected Output Example:

```bash
9.8.1
```

If both commands return versions, installation is successful.

---

## Step 2 – Create React Project Using Vite

### What This Step Achieves

Vite is a fast build tool that:

* Sets up React instantly
* Provides a development server
* Optimizes builds for production

---

### Create Project

Open terminal and run:

```bash
npm create vite@latest quiz-app
```

Select:

* Framework: **React**
* Variant: **JavaScript**

---

### Navigate Into Project Folder

```bash
cd quiz-app
```

---

## Step 3 – Install Dependencies

### What This Step Achieves

This installs all required packages listed in `package.json`.

---

Run:

```bash
npm install
```

Expected Output:

```bash
added xxx packages in x.xs
```

No errors should appear.

---

## Step 4 – Replace Default Files with Project Code

### What This Step Achieves

You will:

* Replace default Vite boilerplate
* Insert the structured Quiz App architecture
* Create required folders

---

### Create Required Folder Structure

Inside `src/`, create:

```
components/
hooks/
services/
utils/
```

Add the files:

```
components/
  StartScreen.jsx
  QuizScreen.jsx
  QuestionCard.jsx
  Timer.jsx
  ResultScreen.jsx
  ReviewScreen.jsx

hooks/
  useQuiz.js

services/
  triviaApi.js

utils/
  shuffleArray.js
  decodeHtml.js
```

Then replace:

* `App.jsx`
* `main.jsx`
* `App.css`

With the provided project code.

---

## Step 5 – Run the Development Server

### What This Step Achieves

Starts the Vite dev server with hot reload.

---

Run:

```bash
npm run dev
```

Expected Output Example:

```bash
VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

Open the URL shown in your browser.

---

# Final Verification

If setup is successful, you should see:

* A “Start Quiz” screen
* Input fields for number of questions
* Difficulty selector
* Start button

Clicking Start should:

* Fetch questions from the Open Trivia DB API
* Start the quiz with a timer
* Allow navigation between questions
* Show results screen at completion
* Allow review of incorrect answers

If all these behaviors work, installation is successful.

---

# 5. Minimal Working Example

## 5.1 What Does This Example Do?

This example demonstrates a **fully functional quiz application** using React. It fetches dynamic questions from the Open Trivia DB API, presents one question at a time, handles a countdown timer, tracks user selections, calculates scores, and provides a review of incorrect answers.

It shows the separation of **UI and business logic** using hooks, utilities, and service layers, emphasizing the Single Responsibility Principle.

---

## 5.2 Code / Project Structure

Due to size, here’s the **project structure** with purpose notes:

```
quiz-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx      // Collects quiz config & triggers start
│   │   ├── QuizScreen.jsx       // Manages question progression
│   │   ├── QuestionCard.jsx     // Displays a single question
│   │   ├── Timer.jsx            // Countdown timer logic
│   │   ├── ResultScreen.jsx     // Shows final score
│   │   └── ReviewScreen.jsx     // Shows incorrect answers
│   │
│   ├── hooks/
│   │   └── useQuiz.js           // Central quiz state machine (SRP)
│   │
│   ├── services/
│   │   └── triviaApi.js         // Fetch questions from Open Trivia DB
│   │
│   ├── utils/
│   │   ├── shuffleArray.js      // Randomize answer options
│   │   └── decodeHtml.js        // Decode HTML entities from API
│   │
│   ├── App.jsx                  // Orchestrates which screen to show
│   ├── main.jsx                 // Mounts React app
│   └── App.css                  // Styles for all components
│
└── package.json
```

> Key Points:
>
> * **Components**: Pure UI, receive props only
> * **Hooks**: Centralized state and transitions
> * **Services**: API requests
> * **Utils**: Pure helper functions

All components are **SRP-compliant**, making them testable and maintainable.

---

## 5.3 How to Run

1. Open a terminal in the project root folder (`quiz-app/`).
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the browser and navigate to the URL displayed (e.g., `http://localhost:5173/`).
5. Interact with the quiz: start, answer questions, view results, and review incorrect answers.

---

## 5.4 Expected Output

When run successfully, the user should see:

1. **Start Screen**

   * Input for number of questions
   * Difficulty selector
   * Category input
   * Start button

2. **Quiz Screen**

   * One question displayed at a time
   * Four shuffled options
   * Countdown timer
   * Next button

3. **Result Screen**

   * Final score and percentage
   * Buttons to review incorrect answers or restart

4. **Review Screen**

   * Shows each question answered incorrectly
   * Displays user answer and correct answer

> Example visible result:
> User clicks Start → sees a question → timer counts down → selects answer → moves to next question → finishes → sees score → can review wrong answers.

---

# 6. AI Prompt Journal

This section tracks AI usage during project development.

| Prompt # | Curriculum Link                     | AI Response Summary                                                                        | Your Evaluation (1–5)                                  |
| -------- | ----------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 1        | Project Planning / State Management | Generated beginner-friendly project structure and folder organization                      | 5 – Extremely helpful; saved hours of planning         |
| 2        | Component & Hook Architecture       | Provided SRP-compliant React code structure with hooks and services                        | 5 – Excellent guidance; code was ready to use          |
| 3        | Trading Logic to Quiz Logic Analogy | Suggested state machine design for quiz app, including start → quiz → result → review flow | 4 – Very useful, gave clarity on transitions           |
| 4        | Testing Plan                        | Generated complete behavior checklist and test folder structure                            | 5 – Comprehensive; made testing plan trivial           |
| 5        | Documentation                       | Assisted in creating full structured project documentation                                 | 5 – Clear and professional; ready to submit or publish |

> Notes:
>
> * Prompts focused on React architecture, testing, and documentation.
> * AI responses were evaluated for completeness, clarity, and applicability.

---

# 7. Common Issues & Fixes

---

## Issue 1 – API Fetch Fails / No Questions Loaded

**Problem Description**
When starting the quiz, no questions appear, and the app seems stuck on the Start screen.

**Error Message / Output**

```
Error: Failed to fetch questions
```

or

```
Error: No questions available for selected options
```

**Root Cause**

* Network connectivity issues
* Invalid category or difficulty combination not available in Open Trivia DB
* API downtime

**Fix Applied**

* Ensure internet connection is stable
* Use valid category IDs (or leave blank for “any”)
* Catch errors in `useQuiz.js` and alert the user (already implemented)

**Helpful Resources**

* [Open Trivia DB API Documentation](https://opentdb.com/api_config.php)
* [Stack Overflow – fetch API common errors](https://stackoverflow.com/questions/39884619/fetch-api-handling-errors)

---

## Issue 2 – Timer Not Resetting Between Questions

**Problem Description**
Timer continues counting from previous question or displays negative values.

**Error Message / Output**

* Timer goes below 0 or does not restart at 15 seconds

**Root Cause**

* `useEffect` dependency array in `Timer.jsx` missing proper dependencies
* Timer state not reset on question change

**Fix Applied**

* Ensure `useEffect` sets `timeLeft` whenever `duration` changes:

```jsx
useEffect(() => {
  setTimeLeft(duration);
}, [duration]);
```

* Clean up intervals on unmount to prevent memory leaks:

```jsx
return () => clearInterval(interval);
```

**Helpful Resources**

* [React Hooks FAQ – useEffect cleanup](https://reactjs.org/docs/hooks-faq.html#how-to-implement-getderivedstatefromprops)

---

## Issue 3 – Answer Selection Not Saving Correctly

**Problem Description**
Clicking an option does not register, or previous answer disappears after navigation.

**Error Message / Output**

* `userAnswer` remains `null` in question object

**Root Cause**

* Local question state not updated immutably
* Component not re-rendering after state change

**Fix Applied**

* In `QuizScreen.jsx`, map over questions and immutably update the current question’s `userAnswer`:

```jsx
const updated = localQuestions.map((q, i) =>
  i === currentIndex
    ? { ...q, userAnswer: selectedOption }
    : q
);
```

**Helpful Resources**

* [React Docs – State Updates](https://reactjs.org/docs/state-and-lifecycle.html)

---

## Issue 4 – Styling Looks Broken

**Problem Description**
Buttons and cards appear unstyled or distorted

**Error Message / Output**

* No console error, but layout differs from design

**Root Cause**

* `App.css` not imported in `main.jsx`
* Missing `className` in components

**Fix Applied**

* Ensure `import "./App.css";` in `main.jsx`
* Verify all buttons and card divs have correct classes (`card`, `option-btn`, `correct`, `incorrect`)

**Helpful Resources**

* [MDN – CSS Classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors)

---

# 8. References

---

## Official Documentation

* [React Official Docs](https://reactjs.org/docs/getting-started.html) – Main React documentation
* [Vite Official Docs](https://vitejs.dev/) – Build tool used for setup
* [Open Trivia DB API Docs](https://opentdb.com/api_config.php) – API documentation for fetching questions

---

## Video Tutorials

* [React JS Crash Course – Traversy Media](https://www.youtube.com/watch?v=w7ejDZ8SWv8) – Guided React project creation
* [React State Management Tutorial – Academind](https://www.youtube.com/watch?v=35lXWvCuM8o) – State and hooks explained

---

## Blog Posts & Articles

* [React Component Architecture – Dave Ceddia](https://daveceddia.com/react-component-patterns/) – Explains component isolation and SRP
* [Testing React Hooks – Kent C. Dodds](https://kentcdodds.com/blog/how-to-test-react-hooks) – Hook testing strategies

---

## Community Resources

* [Stack Overflow – React Hooks Questions](https://stackoverflow.com/questions/tagged/react-hooks)
* [GitHub Discussions – Open Trivia DB](https://github.com/atar-axis/open-trivia-db/discussions)
* [Reddit r/reactjs](https://www.reddit.com/r/reactjs/)

---

## AI Tools Used

* **ChatGPT / OpenAI GPT-5 Mini** – Assisted in:

  * Project structure and architecture
  * Component & hook code generation
  * Test plan creation
  * Documentation drafting

* **No other AI tools** were used

---

✅ With this segment, your **full documentation is complete**, covering:

* Project objective
* Technology overview
* System requirements & setup
* Minimal working example
* AI prompt journal
* Common issues & fixes
* References  
