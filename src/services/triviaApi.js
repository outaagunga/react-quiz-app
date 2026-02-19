export async function fetchTriviaQuestions({ amount, difficulty, category }) {
  const params = new URLSearchParams({
    amount,
    type: "multiple",
  });

  if (difficulty) params.append("difficulty", difficulty);
  if (category) params.append("category", category);

  const response = await fetch(
    `https://opentdb.com/api.php?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch questions");
  }

  const data = await response.json();

  if (data.response_code !== 0) {
    throw new Error("No questions available for selected options");
  }

  return data.results;
}
