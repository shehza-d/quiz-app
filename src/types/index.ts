export type IDifficulty = "easy" | "medium" | "hard";

export interface IQuestion {
  category: string;
  type: "multiple" | "boolean";
  difficulty: IDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IScore {
  questionNo: number;
  answeredCorrectly: boolean;
}
