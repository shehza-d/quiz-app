import { IQuestion } from "../types";
// import { shuffleArr } from "../lib";
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
      <h2 className="text-zinc-600 text-4xl">
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

      <p className="text-lg font-medium py-6">{question.question}</p>

      <div>
        {choices.map((item, i) => (
          <button
            onClick={checkAns}
            className="p-2 border border-slate-500"
            key={i}
          >
            {item}
          </button>
        ))}
      </div>

      {correctAns !== null && (
        <>
          <div>{correctAns ? "Correct!" : "Incorrect!"}</div>
          <button
            onClick={() => {
              if (correctAns === null) return;
              setCurrentQuestion(currentQuestion + 1);
              setCorrectAns(null);
            }}
          >
            Next Question
          </button>
        </>
      )}
    </div>
  );
}
