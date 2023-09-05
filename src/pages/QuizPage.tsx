import { useState } from "react";
import data from "../data/questions.json";
import Quiz from "../components/Quiz";
import { IQuestion } from "../types";
import { shuffleArr } from "../lib";
import ProgressBar from "../components/ProgressBar";
import ScoreBar from "../components/ScoreBar";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const totalQuestions = data.length;
  const percentage = ((currentQuestion + 1) / totalQuestions) * 100;

  const question = {
    category: decodeURIComponent(data[currentQuestion].category),
    type: data[currentQuestion].type,
    difficulty: data[currentQuestion].difficulty,
    question: decodeURIComponent(data[currentQuestion].question),
    correct_answer: decodeURIComponent(data[currentQuestion].correct_answer),
    incorrect_answers: data[currentQuestion].incorrect_answers.map((i) =>
      decodeURIComponent(i),
    ),
  } as IQuestion;
  // const question = JSON.parse(decodeURIComponent(JSON.stringify(question)));

  // shuffling correct and incorrect choices
  const choices = shuffleArr([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);

  return (
    <>
      <ProgressBar percentage={percentage} />
      <div className="mx-auto mt-10 flex h-[85vh] w-4/5 flex-col justify-between">
        <Quiz
          question={question}
          choices={choices}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          totalQuestions={totalQuestions}
        />
        <ScoreBar />
      </div>
    </>
  );
}
