import { useState } from "react";
import QuizPage from "./pages/QuizPage";
import Welcome from "./pages/Welcome";
import ResultPage from "./pages/ResultPage";
import { useContext } from "react";
import { GlobalContext } from "./context/index";

export default function App() {
  const {
    state: { page },
  } = useContext(GlobalContext);

  return (
    <main className="min-h-screen">
      {page === null && <Welcome />}
      {page === true && <QuizPage />}
      {page === false && <ResultPage score={43} />}
    </main>
  );
}
