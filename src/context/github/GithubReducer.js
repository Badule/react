export const githubReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};
