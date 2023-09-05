import type { Dispatch, SetStateAction, MouseEvent } from "react";

interface IProps {
  item: string;
  correctAnswer: string;
  userSelectedAns: string;
  setUserSelectedAns: Dispatch<SetStateAction<string>>;
}

export default function ChoicesBtn(props: IProps) {
  const { item, correctAnswer, userSelectedAns, setUserSelectedAns } = props; // destructuring of props

  const checkAns = (event: MouseEvent<HTMLButtonElement>) => {
    if (userSelectedAns) return; // most important line
    setUserSelectedAns(event.currentTarget.innerText);
  };
  return (
    <button
      onClick={checkAns}
      className={`w-full max-w-[18rem] rounded-md border-2 border-slate-700 px-2 py-1 font-medium ${
        userSelectedAns
          ? item === correctAnswer
            ? "bg-black text-white"
            : "opacity-50"
          : ""
      }`}
    >
      {item}
    </button>
  );
}
