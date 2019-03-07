import React from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";
import Todo from "./Todo";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        Todo List
        {this.props.todos.map(todo => {
          return <Todo todo={todo} />;
        })}
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
