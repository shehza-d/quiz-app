import { IDifficulty, IScore } from "../types";

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export const shuffleArr = (array: string[]) => {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const evaluateScore = (score: IScore[]) => {
  let totalCorrectAns = 0;
  let totalIncorrectAns = 0;

  score.forEach((item) => {
    totalCorrectAns += item.answeredCorrectly ? 1 : 0;
    totalIncorrectAns += !item.answeredCorrectly ? 1 : 0;
  });

  return { totalCorrectAns, totalIncorrectAns };
};

export const getRating = (rating: IDifficulty) =>
  rating === "easy" ? 1 : rating === "medium" ? 2 : rating === "hard" ? 3 : 0;
