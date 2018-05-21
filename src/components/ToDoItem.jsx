import React from "react";
import { connect } from "react-redux";
import { updateToDoText, toggleToDo, removeToDo } from "../actions/index";

class ToDoItem extends React.Component {
  render() {
    const todo = this.props.data;

    return (
      <tr className="todo-item" data-id={todo.uuid}>
        <td>
          <div className="custom-control custom-checkbox">
            <input
              className="custom-control-input"
              value={todo.uuid}
              id={`todo-done-${todo.uuid}`}
              type="checkbox"
              checked={todo.done}
              onChange={e => {
                this.props.toggleToDo(todo.uuid);
              }}
            />
            <label
              className="custom-control-label"
              htmlFor={`todo-done-${todo.uuid}`}
            >
              &nbsp;
            </label>
          </div>
        </td>
        <td className="col-1">
          <input
            type="text"
            className="form-control"
            value={todo.text}
            onChange={e => {
              this.props.updateToDoText(todo.uuid, e.target.value);
            }}
          />
        </td>
        <td className="col-action">
          <i
            className="icon-remove fa fa-remove"
            onClick={e => this.props.removeToDo(todo.uuid)}
          />
        </td>
      </tr>
    );
  }
}

export default connect(state => ({}), {
  updateToDoText,
  toggleToDo,
  removeToDo
})(ToDoItem);
