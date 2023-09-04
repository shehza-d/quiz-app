import { useState } from "react";
import data from "./data/questions.json";
import Quiz from "./pages/Quiz";
import { IQuestion } from "./types";
import { shuffleArr } from "./lib";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const question = {
    category: decodeURIComponent(data[currentQuestion].category),
    type: data[currentQuestion].type,
    difficulty: data[currentQuestion].difficulty,
    question: decodeURIComponent(data[currentQuestion].question),
    correct_answer: decodeURIComponent(data[currentQuestion].correct_answer),
    incorrect_answers: data[currentQuestion].incorrect_answers.map((i) =>
      decodeURIComponent(i)
    ),
  } as IQuestion;
  // JSON.parse(decodeURIComponent(JSON.stringify(question)));

  // shuffling correct and incorrect choices
  const choices = shuffleArr([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);

  console.log("rerendring");

  return (
    <main>
      <Quiz
        question={question}
        choices={choices}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        totalQuestions={data.length}
      />
    </main>
  );
}
