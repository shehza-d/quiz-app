import { useContext } from "react";
import { GlobalContext } from "../context/index";
import QuizPage from "../pages/QuizPage";
import Welcome from "../pages/Welcome";
import ResultPage from "../pages/ResultPage";

export default function ShowPages() {
  const { state } = useContext(GlobalContext);

  switch (state.page) {
    case null:
      return <Welcome />;
    case true:
      return <QuizPage />;
    case false:
      return <ResultPage />;
    default:
      return <h1>No project match</h1>;
  }
}
