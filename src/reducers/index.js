export const userDetailsReducer = (
  state = { pageDetails: {}, usersList: [] },
  action
) => {
  switch (action.type) {
    case "usersList":
      const pageDetails = {
        page: action.payload.data.page,
        total: action.payload.data.total,
      };
      return { ...state, usersList: action.payload.data.data, pageDetails };

    case "sort":
      return {
        ...state,
        usersList: [
          ...state.usersList.sort(function (a, b) {
            if (a.first_name < b.first_name) {
              return action.data === "A-Z" ? -1 : 1;
            }
            if (a.first_name > b.first_name) {
              return action.data === "Z-A" ? -1 : 1;
            }
            return 0;
          }),
        ],
      };
    default:
      return state;
  }
};
