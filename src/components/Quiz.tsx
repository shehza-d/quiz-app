import { IQuestion } from "../types";
import ReactStars from "react-stars";
import { useState, type Dispatch, type SetStateAction } from "react";

interface IProps {
  question: IQuestion;
  choices: string[];
  currentQuestion: number;
  totalQuestions: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
}

export default function Quiz(props: IProps) {
  const {
    question,
    choices,
    currentQuestion,
    setCurrentQuestion,
    totalQuestions,
  } = props; // destructuring of props

  const [correctAns, setCorrectAns] = useState<boolean | null>(null);

  const questionRating =
    question.difficulty === "easy"
      ? 1
      : question.difficulty === "medium"
      ? 2
      : question.difficulty === "hard"
      ? 3
      : 0;

  const checkAns = (event: any) => {
    if (correctAns !== null) return; // most important line
    if (event.target.innerText === question.correct_answer) setCorrectAns(true);
    else setCorrectAns(false);
  };

  return (
    <div className="">
      <h2 className="text-4xl text-zinc-600">
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

      <p className="py-6 text-lg font-medium">{question.question}</p>

      <div className="grid grid-cols-2 gap-8 px-12">
        {choices.map((item, i) => (
          <button
            onClick={checkAns}
            className="rounded-md border-2 border-slate-700 bg-zinc-200 font-medium"
            key={i}
          >
            {item}
          </button>
        ))}
      </div>

      {correctAns !== null && (
        <div className="mt-10 flex w-full flex-col items-center gap-6">
          <div className="text-4xl font-medium text-zinc-800">
            {correctAns ? "Correct!" : "Sorry!"}
          </div>
          {currentQuestion + 1 !== totalQuestions && (
            <button
              className="rounded-md border-2 border-slate-700 px-6 py-1"
              onClick={() => {
                setCurrentQuestion(currentQuestion + 1);
                setCorrectAns(null);
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
