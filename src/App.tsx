import { useState } from "react";
import QuizPage from "./pages/QuizPage";
import Welcome from "./pages/Welcome";

export default function App() {
  const [start, setStart] = useState(false);

  return (
    <main className="min-h-screen">
      {start ? <QuizPage /> : <Welcome setStart={setStart} />}
    </main>
  );
}
