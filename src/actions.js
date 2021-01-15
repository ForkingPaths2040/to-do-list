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
    // dispatch calls on the reducer and the intructions are within ACTIONS on what state to update throughout all UI
    type: ACTIONS.UPDATELIST,
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

export function toggleStatus(index) {
  const { list } = store.getState();

  const newList = [].concat(list);

  if (newList[index].status === "incomplete") {
    newList[index].status = "complete";
  } else {
    newList[index].status = "incomplete";
  }
  return store.dispatch({
    type: ACTIONS.UPDATELIST,
    list: newList,
  });
}

export default { addToDo, toDoUpdate, createToDo, toggleStatus };
