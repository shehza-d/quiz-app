import { useContext } from "react";
import { GlobalContext } from "../context/index";
import { evaluateScore } from "../lib";

export default function ResultPage() {
  const { state, dispatch } = useContext(GlobalContext);
  const { totalScore, totalQuestions } = state;
  const { totalCorrectAns } = evaluateScore(totalScore);

  const totalCorrectPer = Math.round((totalCorrectAns / totalQuestions) * 100);

  return (
    <div className="mx-auto mt-10 flex h-[80vh] w-4/5 flex-col items-center justify-center">
      <img
        width={900}
        height={563}
        className="w-96"
        src="/Expertizo-logo.png"
        alt="logo of Expertizo"
      />
      <h1 className="break-words text-center text-4xl font-bold lg:text-5xl">
        Result Page
      </h1>

      <div className="text-2xl my-10">
        <p>
          You answered {totalCorrectAns} out of {totalQuestions} questions
          correctly!
        </p>
        <p>Total Percentage was {totalCorrectPer}%</p>
      </div>

      <button
        className="rounded-md px-6 py-2 ring-2 ring-blue-400 duration-300 hover:bg-blue-300 hover:transition-transform"
        onClick={() => dispatch({ type: "SHOW_PAGE", payload: true })}
      >
        Restart Quiz
      </button>
    </div>
  );
}
