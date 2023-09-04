import { shuffleArr } from "../lib";
import { IQuestion } from "../types";
import ReactStars from "react-stars";

interface IProps {
  question: IQuestion;
  index: number;
  totalQuestions: number;
}
export default function Quiz(props: IProps) {
  let { question, index, totalQuestions } = props;
  question = JSON.parse(decodeURIComponent(JSON.stringify(question)));
  //   console.log("🚀 ~ file: Quiz.tsx:7 ~ Quiz ~ question:", props);
  //   console.log("🚀 ~ file: Quiz.tsx:7 ~ Quiz ~ question:", question);

  // shuffling correct and incorrect choices
  const choices = shuffleArr([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);
  console.log("🚀 ~ file: Quiz.tsx:21 ~ Quiz ~ choices:", choices);

  const questionRating =
    question.difficulty === "easy"
      ? 1
      : question.difficulty === "medium"
      ? 2
      : question.difficulty === "hard"
      ? 3
      : 0;

  return (
    <div>
      <h2>
        Question {index} out of {totalQuestions}
      </h2>
      <h4>{question.category}</h4>

      <ReactStars
        count={5}
        value={questionRating}
        edit={false}
        size={22}
        color1="#e5e5e5"
        color2={"black"}
      />

      <p>{question.question}</p>

      <div>
        {choices.map((item, i) => (
          <button className="p-10" key={i}>{item}</button>
        ))}
      </div>
    </div>
  );
}
