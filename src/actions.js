import store from "./store";

export const ACTIONS = {
  ADDTODO: "ADDTODO",
  REMOVETODO: "REMOVETODO",
  UPDATENAME: "UPDATENAME",
  UPDATELIST: "UPDATELIST",
  TOGGLESTATUS: "TOGGLESTATUS",
};

export function addToDo() {
  const { list, taskName } = store.getState();

  const newList = [].concat(list);
  // helper function used to push an object to the array (multiple objects in an array). task name is the argument that is only an input but has other properties as it is an object
  newList.push(createToDo(taskName));

  console.log("Got new item", taskName);

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

export function createToDo(job = "") {
  return {
    job,
    status: "incomplete",
    createdAt: Date.now(),
  };
}

export function toDoUpdate(e) {
  console.log("got event", e.target.value);
  return store.dispatch({
    type: ACTIONS.UPDATENAME,
    taskName: e.target.value,
  });
}

export default { addToDo, toDoUpdate, createToDo };
