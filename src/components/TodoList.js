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
        <div className="ui header">Todo List</div>
        <div className="ui segment">
          {this.props.todos.map(todo => {
            return <Todo todo={todo} key={todo.id} />;
          })}
        </div>
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
