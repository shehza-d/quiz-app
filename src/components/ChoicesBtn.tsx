import { useContext } from "react";
import { GlobalContext } from "../context/index";
import type { Dispatch, SetStateAction, MouseEvent } from "react";
import { totalQuestions } from "../data/index";

interface IProps {
  item: string;
  correctAnswer: string;
  userSelectedAns: string;
  setUserSelectedAns: Dispatch<SetStateAction<string>>;
  currentQuestion: number;
  setBtnText: Dispatch<SetStateAction<string>>;
}

export default function ChoicesBtn(props: IProps) {
  const {
    item,
    correctAnswer,
    userSelectedAns,
    setUserSelectedAns,
    currentQuestion,
    setBtnText,
  } = props; // destructuring of props

  const { state, dispatch } = useContext(GlobalContext);
  const { scores } = state;

  const checkAns = (event: MouseEvent<HTMLButtonElement>) => {
    if (userSelectedAns) return; // most important line

    // API can be called here to send Result to DB
    setUserSelectedAns(event.currentTarget.innerText);

    dispatch({
      type: "SET_SCORE",
      payload: [
        ...scores,
        {
          questionNo: currentQuestion + 1,
          answeredCorrectly: event.currentTarget.innerText === correctAnswer,
        },
      ],
    });

    if (currentQuestion + 1 === totalQuestions) {
      setBtnText("Show result");
      return;
    }
  };
  return (
    <button
      onClick={checkAns}
      className={`w-full max-w-[18rem] rounded-md border-2  border-slate-700 px-2 py-1 font-medium ${
        userSelectedAns
          ? item === correctAnswer
            ? "bg-black text-white"
            : "opacity-50"
          : "bg-gray-200"
      }`}
    >
      {item}
    </button>
  );
}
