import React, { Component } from "react";
import actions from "./actions";
import { connect } from "react-redux";
import { bindActionCreators } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <button
          onClick={() => {
            this.props.addToDo("Example");
          }}
        >
          add to List
        </button>
      </div>
    );
  }
}

function mapProps(state) {
  return {
    list: state.list,
  };
}

function mapDispatch(dispatch) {
  return {
    addToDo: (newItem) => dispatch(actions.addToDo(newItem)),
  };
}

export default connect(mapProps, mapDispatch)(Home);
