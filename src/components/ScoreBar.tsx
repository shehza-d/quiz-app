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

  const totalCorrectPer = (totalCorrectAns / totalAttemptedQues) * 100;
  const maxPercentage =
    ((totalQuestions - totalIncorrectAns) / totalQuestions) * 100;
  const minPercentage = (totalIncorrectAns / totalQuestions) * 100;

  return (
    <div className="relative h-9 w-full rounded-md border-2 border-zinc-600">
      <div
        style={{ width: `${maxPercentage}%` }}
        className={`absolute h-full rounded-l bg-green-400`}
      ></div>
      <div
        style={{ width: `${totalCorrectPer}%` }}
        className="absolute h-full rounded-l bg-red-400"
      ></div>
      <div
        style={{ width: `${minPercentage}%` }}
        className={`absolute h-full rounded-l bg-blue-400`}
      ></div>
    </div>
  );
}
