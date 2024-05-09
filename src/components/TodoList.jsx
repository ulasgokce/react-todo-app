import React from 'react';
import { propTypes } from 'prop-types';


TodoList.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      isComplete: propTypes.bool.isRequired,
      isEditing: propTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTodo: propTypes.func.isRequired,
  completeTodo: propTypes.func.isRequired,
  changeEditing: propTypes.func.isRequired,
  updateTodo: propTypes.func.isRequired,
};

function TodoList(props) {
  return (
    <>
      {' '}
      <ul className="todo-list">
        {props.todos.map((todo, index) => (
          <li key={todo.id} className="todo-item-container">
            <div className="todo-item">
              <input
                type="checkbox"
                defaultChecked={todo.isComplete}
                onChange={() => props.completeTodo(todo.id)}
              />
              {!todo.isEditing ? (
                <span
                  onDoubleClick={() => props.changeEditing(todo.id)}
                  className={`todo-item-label ${
                    todo.isComplete ? 'line-through' : ''
                  }`}
                >
                  {todo.title}
                </span>
              ) : (
                <input
                  type="text"
                  onBlur={event => props.updateTodo(event, todo.id)}
                  onKeyDown={event => {
                    if (event.key === 'Enter') {
                      props.updateTodo(event, todo.id);
                    } else if (event.key === 'Escape') {
                      props.changeEditing(todo.id);
                    }
                  }}
                  autoFocus
                  className="todo-item-input"
                  defaultValue={todo.title}
                />
              )}
            </div>
            <button
              className="x-button"
              onClick={() => props.deleteTodo(todo.id)}
            >
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <div className="check-all-container">
        <div>
          <div className="button">Check All</div>
        </div>

        <span>3 items remaining</span>
      </div>
      <div className="other-buttons-container">
        <div>
          <button className="button filter-button filter-button-active">
            All
          </button>
          <button className="button filter-button">Active</button>
          <button className="button filter-button">Completed</button>
        </div>
        <div>
          <button className="button">Clear completed</button>
        </div>
      </div>
    </>
  );
}


export default TodoList;
