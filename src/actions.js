import store from "./store";

export const ACTIONS = {
  ADDTODO: "ADDTODO",
  REMOVETODO: "REMOVETODO",
  UPDATENAME: "UPDATENAME",
  UPDATELIST: "UPDATELIST",
  TOGGLESTATUS: "TOGGLESTATUS",
};

export function addToDo(newItem) {
  console.log("Got new item", newItem);
  const { list } = store.getState();

  const newList = [].concat(list);
  newList.push(newItem);

  return store.dispatch({
    type: ACTIONS.ADDTODO,
    list: newList,
  });
  // return (dispatch, getState) => {
  //   return dispatch({
  //     type: ACTIONS.ADDTODO,
  //     list: [],
  //   });
  // };
}

export function createdToDo(job = "") {
  return {
    job,
    status: "incomplete",
    createdAt: Date.now(),
  };
}

export default { addToDo };
