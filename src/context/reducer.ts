export const reducer = (
  state: any,
  action: { type: string; payload?: Object },
) => {
  switch (action.type) {
    case "SHOW_PAGE": {
      return { ...state, page: action.payload };
    }

    default: {
      return state;
    }
  }
};
