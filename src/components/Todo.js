import React from "react";

class Todo extends React.Component {
  render() {
    return <div>{this.props.todo.title}</div>;
  }
}

export default Todo;
