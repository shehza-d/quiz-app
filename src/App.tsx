import { IQuestion } from "./types";
import { useState } from "react";
import data from "./data/questions.json";
import Quiz from "./pages/Quiz";

export default function App() {
  const [index, setIndex] = useState(0);
  // console.log("🚀 ~ file: App.tsx:2 ~ data:", data[0].question)
  const question = data[2] as IQuestion;
  // data.map((q) => {
  //   // console.log("🚀 ~ file: App.tsx:2 ~ data:", q.question);
  //   console.log("🚀 ~decodeURI", decodeURIComponent(q.question));
  // });
  return (
    <main>
      <Quiz question={question} index={index} totalQuestions={data.length} />
    </main>
  );
}
