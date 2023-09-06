import { useContext } from "react";
import { GlobalContext } from "../context/index";

export default function Welcome() {
  const { dispatch } = useContext(GlobalContext);

  return (
    <div className="mx-auto mt-10 flex h-[80vh] w-4/5 flex-col items-center justify-center">
      <img
        width={900}
        height={563}
        className="w-96"
        src="/Expertizo-logo.png"
        alt="logo of Expertizo"
      />
      <h1 className="mb-10 break-words text-center text-4xl font-bold lg:text-5xl">
        Welcome to Expertizo Quiz
      </h1>
      <button
        className="rounded-md px-6 py-2 ring-2 ring-blue-400 duration-300 hover:bg-blue-300 hover:transition-transform"
        onClick={() => dispatch({ type: "SHOW_PAGE", payload: true })}
      >
        Start Quiz
      </button>
    </div>
  );
}
