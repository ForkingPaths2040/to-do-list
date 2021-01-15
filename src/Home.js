import React, { Component } from "react";
import actions from "./actions";
import { connect } from "react-redux";
import { bindActionCreators } from "react-redux";
import ItemList from "./components/ItemList/ItemList";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <label htmlFor="task-name"></label>
        <input
          name="task-name"
          value={this.props.taskName}
          onChange={this.props.toDoUpdate}
          placeholder="Add a task"
        ></input>
        <button onClick={this.props.addToDo}>add to List</button>
        <ItemList {...this.props} />
      </div>
    );
  }
}

function mapProps(state) {
  return {
    list: state.list,
    taskName: state.taskName,
  };
}

function mapDispatch(dispatch) {
  return {
    addToDo: (newItem) => dispatch(actions.addToDo(newItem)),
    toDoUpdate: (e) => dispatch(actions.toDoUpdate(e)),
    toggleStatus: (index) => dispatch(actions.toggleStatus(index)),
  };
}

export default connect(mapProps, mapDispatch)(Home);
