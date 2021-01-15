import { ACTIONS } from "./actions";

const reducer = (
  state = {
    list: [],
    taskName: "",
    username: "",
  },
  action
) => {
  switch (action.type) {
    case ACTIONS.UPDATELIST:
      return {
        ...state,
        list: action.list,
      };
    case ACTIONS.UPDATENAME:
      return {
        ...state,
        taskName: action.taskName,
      };
    default:
      return state;
  }
};

export default reducer;
