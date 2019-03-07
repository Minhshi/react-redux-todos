import React from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        Todo List
        {console.log(this.props.todos)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodoList);
