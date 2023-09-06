import { useContext } from "react";
import { GlobalContext } from "./context/index";
import QuizPage from "./pages/QuizPage";
import Welcome from "./pages/Welcome";
import ResultPage from "./pages/ResultPage";

export default function App() {
  const { state } = useContext(GlobalContext);

  return (
    <main className="min-h-screen">
      {state.page === null && <Welcome />}
      {state.page === true && <QuizPage />}
      {state.page === false && <ResultPage />}
    </main>
  );
}
