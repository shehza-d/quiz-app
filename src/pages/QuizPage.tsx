import { useState } from "react";
import { questionsData, totalQuestions } from "../data/index";
import Quiz from "../components/Quiz";
import ProgressBar from "../components/ProgressBar";
import ScoreBar from "../components/ScoreBar";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const percentage = ((currentQuestion + 1) / totalQuestions) * 100;

  const question = questionsData[currentQuestion];

  return (
    <>
      <ProgressBar percentage={percentage} />
      <div className="mx-auto mt-10 flex h-[85vh] w-4/5 max-w-4xl flex-col justify-between">
        <Quiz
          question={question}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          correctAnswer={question.correct_answer}
        />
        <ScoreBar />
      </div>
    </>
  );
}
