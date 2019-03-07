import React from "react";
import User from "./User";

class Todo extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="ui header">{this.props.todo.title}</div>
          <div className="description">
            {this.props.todo.completed ? "Status: Done" : "Status: Not Done"}
          </div>
          <div>
            <User userId={this.props.todo.userId} />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
