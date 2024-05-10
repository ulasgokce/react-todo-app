import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoItemsRemanining from './TodoItemsRemanining';
import TodoClearCompleted from './TodoClearCompleted';
import TodoCompleteAll from './TodoCompleteAll';
import TodoFilters from './TodoFilters';
import useToggle from '../hooks/useToggle';

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
      isEditing: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todosFiltered: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  changeEditing: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  remaining: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  completeAllTodos: PropTypes.func.isRequired,
};

function TodoList(props) {
  const [filter, setFilter] = useState('all');
  const [isFeatureOneVisible, setFeatureOneVisible] = useToggle(true);
  const [isFeatureTwoVisible, setFeatureTwoVisible] = useToggle(false);
  return (
    <>
      <ul className="todo-list">
        {props.todosFiltered(filter).map((todo, index) => (
          <li key={todo.id} className="todo-item-container">
            <div className="todo-item">
              <input
                type="checkbox"
                checked={todo.isComplete ? true : false}
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
      <div className="toggles-container">
        <button onClick={setFeatureOneVisible} className="button">
          Features One Toggle
        </button>
        <button onClick={setFeatureTwoVisible} className="button">
          Features Two Toggle
        </button>
      </div>
      {isFeatureOneVisible && (
        <div className="check-all-container">
          <TodoCompleteAll completeAll={props.completeAllTodos} />
          <TodoItemsRemanining remaining={props.remaining} />
        </div>
      )}
      {isFeatureTwoVisible && (
        <div className="other-buttons-container">
          <TodoFilters
            todosFiltered={props.todosFiltered}
            filter={filter}
            setFilter={setFilter}
          />
          <div>
            <TodoClearCompleted clearCompleted={props.clearCompleted} />
          </div>
        </div>
      )}
    </>
  );
}

export default TodoList;
