import { useContext } from "react";
import { GlobalContext } from "../context/index";
import { evaluateScore } from "../lib";
import { totalQuestions } from "../data/index";

// this is the bottom Score Progress Bar
export default function ScoreBar() {
  const { state } = useContext(GlobalContext);
  const { scores } = state;

  const totalAttemptedQues = scores.length;

  const { totalCorrectAns, totalIncorrectAns } = evaluateScore(scores);

  const minPercentage = Math.round((totalCorrectAns / totalQuestions) * 100);

  const totalCorrectPer = Math.round(
    (totalCorrectAns / totalAttemptedQues) * 100,
  );

  const maxPercentage = Math.round(
    ((totalQuestions - totalIncorrectAns) / totalQuestions) * 100,
  );

  return (
    <div className="relative h-9 w-full rounded-md border-2 border-zinc-600">
      <div className="absolute -top-12 flex h-9 w-full items-center justify-between">
        <span>Min: {minPercentage}%</span>
        <span>Score: {totalCorrectPer || 0}%</span>
        <span>Max: {maxPercentage}%</span>
      </div>
      <div
        style={{ width: `${maxPercentage}%` }}
        className={`absolute h-full rounded-l bg-gray-300`}
      ></div>
      <div
        style={{ width: `${totalCorrectPer || 0}%` }}
        className="absolute h-full rounded-l bg-gray-500"
      ></div>
      <div
        style={{ width: `${minPercentage}%` }}
        className={`absolute h-full rounded-l bg-black`}
      ></div>
    </div>
  );
}
