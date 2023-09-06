export const reducer = (
  state: any,
  action: { type: string; payload?: Object },
) => {
  switch (action.type) {
    case "SHOW_PAGE": {
      return { ...state, page: action.payload };
    }

    case "SET_SCORE": {
      return { ...state, totalScore: action.payload }; // array of scores
    }

    default: {
      return state;
    }
  }
};
