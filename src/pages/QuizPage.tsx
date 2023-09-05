import { useState } from "react";
import data from "../data/questions.json";
import Quiz from "../components/Quiz";
import { IQuestion } from "../types";
import { shuffleArr } from "../lib";
import ProgressBar from "../components/ProgressBar";
import ScoreBar from "../components/ScoreBar";

export default function QuizPage() {
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

  return (
    <>
      <ProgressBar />
      <div className="flex h-[85vh] justify-between mt-10 flex-col w-4/5 mx-auto">
        <Quiz
          question={question}
          choices={choices}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          totalQuestions={data.length}
        />
        <ScoreBar />
      </div>
    </>
  );
}
