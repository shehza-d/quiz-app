import type { IQuestion, IScore } from "../types";
import ReactStars from "react-stars";
import { useState } from "react";
import type { Dispatch, SetStateAction, MouseEvent } from "react";

interface IProps {
  question: IQuestion;
  choices: string[];
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
  totalQuestions: number;
  correctAnswer: string;
  setScore: Dispatch<SetStateAction<IScore[]>>;
}

export default function Quiz(props: IProps) {
  const {
    question,
    choices,
    currentQuestion,
    setCurrentQuestion,
    totalQuestions,
    correctAnswer,
    setScore,
  } = props; // destructuring of props

  const [userSelectedAns, setUserSelectedAns] = useState<string>("");

  const questionRating =
    question.difficulty === "easy"
      ? 1
      : question.difficulty === "medium"
      ? 2
      : question.difficulty === "hard"
      ? 3
      : 0;

  const checkAns = (event: MouseEvent<HTMLButtonElement>) => {
    if (userSelectedAns) return; // most important line
    setUserSelectedAns(event.currentTarget.innerText);
  };

  return (
    <div className="">
      <h2 className="text-2xl text-zinc-600 md:text-4xl">
        Question {currentQuestion + 1} of {totalQuestions}
      </h2>
      <h4 className="pt-2 text-zinc-500">{question.category}</h4>

      <ReactStars
        count={5}
        value={questionRating}
        edit={false}
        size={22}
        color1="#e5e5e5"
        color2={"black"}
      />

      <p className="flex min-h-[6rem] items-center text-lg font-medium">
        {question.question}
      </p>

      <div className="grid grid-cols-2 gap-8">
        {choices.map((item, i) => (
          <button
            onClick={checkAns}
            className={`rounded-md border-2 border-slate-700 px-2 font-medium ${
              userSelectedAns
                ? item === correctAnswer
                  ? "bg-black text-white"
                  : "opacity-50"
                : ""
            }`}
            key={i}
          >
            {item}
          </button>
        ))}
      </div>

      {userSelectedAns && (
        <div className="mt-10 flex w-full flex-col items-center gap-6">
          <div className="text-4xl font-medium text-zinc-800">
            {userSelectedAns === correctAnswer ? "Correct!" : "Sorry!"}
          </div>
          {currentQuestion + 1 !== totalQuestions && (
            <button
              className="rounded-md border-2 border-slate-700 px-6 py-1"
              onClick={() => {
                setScore((prev) => [
                  ...prev,
                  {
                    questionNo: currentQuestion + 1,
                    answeredCorrectly: userSelectedAns === correctAnswer,
                  },
                ]);
                setCurrentQuestion(currentQuestion + 1);
                setUserSelectedAns("");
              }}
            >
              Next Question
            </button>
          )}
        </div>
      )}
    </div>
  );
}
