import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/index";
import QuizPage from "../pages/Quiz";
import Welcome from "../pages/Welcome";
import ResultPage from "../pages/Result";

export default function AppRouter() {
  const { state } = useContext(GlobalContext);
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="*" element={<Navigate to="/welcome" replace={true} />} />
    </Routes>
  );
}
