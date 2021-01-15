import { ACTIONS } from "./actions";

const reducer = (
  state = {
    list: [],
    username: "",
  },
  action
) => {
  switch (action.type) {
    case ACTIONS.ADDTODO:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
