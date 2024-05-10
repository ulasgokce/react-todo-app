import React, { useContext } from 'react';
import TodoItemsRemanining from './TodoItemsRemanining';
import TodoClearCompleted from './TodoClearCompleted';
import TodoCompleteAll from './TodoCompleteAll';
import TodoFilters from './TodoFilters';
import useToggle from '../hooks/useToggle';
import { TodosContext } from '../context/TodosContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function TodoList() {
  const { setTodos, todosFiltered } = useContext(TodosContext);
  const [isFeatureOneVisible, setFeatureOneVisible] = useToggle(true);
  const [isFeatureTwoVisible, setFeatureTwoVisible] = useToggle(true);

  function deleteTodo(id) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }
  function completeTodo(id) {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        }
        return todo;
      })
    );
  }
  function changeEditing(id) {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isEditing: !todo.isEditing,
          };
        }
        return todo;
      })
    );
  }
  function updateTodo(event, id) {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title: event.target.value.trim() ? event.target.value : todo.title,
            isEditing: !todo.isEditing,
          };
        }
        return todo;
      })
    );
  }

  return (
    <>
      <TransitionGroup component="ul" className="todo-list">
        {todosFiltered().map((todo, index) => (
          <CSSTransition
            key={todo.id}
            timeout={300}
            classNames="slide-horizontal"
          >
            <li className="todo-item-container">
              <div className="todo-item">
                <input
                  type="checkbox"
                  checked={todo.isComplete ? true : false}
                  onChange={() => completeTodo(todo.id)}
                />
                {!todo.isEditing ? (
                  <span
                    onDoubleClick={() => changeEditing(todo.id)}
                    className={`todo-item-label ${
                      todo.isComplete ? 'line-through' : ''
                    }`}
                  >
                    {todo.title}
                  </span>
                ) : (
                  <input
                    type="text"
                    onBlur={event => updateTodo(event, todo.id)}
                    onKeyDown={event => {
                      if (event.key === 'Enter') {
                        updateTodo(event, todo.id);
                      } else if (event.key === 'Escape') {
                        changeEditing(todo.id);
                      }
                    }}
                    autoFocus
                    className="todo-item-input"
                    defaultValue={todo.title}
                  />
                )}
              </div>
              <button className="x-button" onClick={() => deleteTodo(todo.id)}>
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
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className="toggles-container">
        <button onClick={setFeatureOneVisible} className="button">
          Features One Toggle
        </button>
        <button onClick={setFeatureTwoVisible} className="button">
          Features Two Toggle
        </button>
      </div>
      <CSSTransition
        in={isFeatureOneVisible}
        timeout={300}
        classNames="slide-vertical"
        unmountOnExit
      >
        <div className="check-all-container">
          <TodoCompleteAll />
          <TodoItemsRemanining />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isFeatureTwoVisible}
        timeout={300}
        classNames="slide-vertical"
        unmountOnExit
      >
        <div className="other-buttons-container">
          <TodoFilters />
          <div>
            <TodoClearCompleted />
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default TodoList;
