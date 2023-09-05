import { IScore } from "../types";

interface IProps {
  totalQuestions: number;
  score: IScore[];
}

// this is the bottom Score Progress Bar
export default function ScoreBar(props: IProps) {
  const { totalQuestions, score } = props; // destructuring of props
  const totalAttemptedQues = score.length;

  let totalCorrectAns = 0;
  let totalIncorrectAns = 0;

  score.forEach((item) => {
    totalCorrectAns += item.answeredCorrectly ? 1 : 0;
    totalIncorrectAns += !item.answeredCorrectly ? 1 : 0;
  });

  const minPercentage = Math.round((totalIncorrectAns / totalQuestions) * 100);

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
        className={`absolute h-full rounded-l bg-blue-300`}
      ></div>
      <div
        style={{ width: `${totalCorrectPer || 0}%` }}
        className="absolute h-full rounded-l bg-blue-500"
      ></div>
      <div
        style={{ width: `${minPercentage}%` }}
        className={`absolute h-full rounded-l bg-blue-700`}
      ></div>
    </div>
  );
}
