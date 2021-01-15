import { ACTIONS } from "./actions";

const reducer = (
  state = {
    list: [],
    toDoName: "",
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
    case ACTIONS.UPDATENAME:
      return {
        ...state,
        toDoName: action.toDoName,
      };
    default:
      return state;
  }
};

export default reducer;
