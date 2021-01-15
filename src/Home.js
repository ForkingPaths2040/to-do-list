import React, { Component } from "react";
import actions from "./actions";
import { connect } from "react-redux";
import { bindActionCreators } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        {/* <label htmlFor="task-name"></label>
        <input
          name="task-name"
          value={this.props.toDoName}
          onChange={(e) => {
            this.props.toDoUpdate(e);
          }}
          placeholder="Add a task"
        ></input> */}
        <button
          onClick={() => {
            this.props.addToDo("Example");
          }}
        >
          add to List
        </button>
        <ul>
          {this.props.list.map((task, index) => {
            return <li key={`${index}-task`}>{task}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function mapProps(state) {
  return {
    list: state.list,
    toDoName: state.toDoName,
  };
}

function mapDispatch(dispatch) {
  return {
    addToDo: (newItem) => dispatch(actions.addToDo(newItem)),
    toDoUpdate: (e) => dispatch(actions.toDoUpdate(e)),
  };
}

export default connect(mapProps, mapDispatch)(Home);
