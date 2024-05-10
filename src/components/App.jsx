import '../rest.css';
import '../App.css';
import NoTodos from './NoTodos.jsx';
import { useEffect, useState, useRef } from 'react';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
import useLocalStorage from '../hooks/useLocalStorage';
import { TodosContext } from '../context/TodosContext.js';
function App() {
  const [name, setName] = useLocalStorage('name', '');
  const nameInputEl = useRef(null);
  const [lastTodoId, setLastTodoId] = useLocalStorage('lastTodoId', 0);
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');

  function todosFiltered() {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.isComplete);
      case 'completed':
        return todos.filter(todo => todo.isComplete);
      default:
        return todos;
    }
  }
  useEffect(() => {
    nameInputEl.current.focus();
    return () => {
      // console.log('App component unmounted');
    };
  }, []);

  function handleNameInput(event) {
    setName(event.target.value);
    localStorage.setItem('name', JSON.stringify(event.target.value));
  }
  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        lastTodoId,
        setLastTodoId,
        todosFiltered,
        filter,
        setFilter,
      }}
    >
      <div className="todo-app-container">
        <div className="todo-app">
          <div className="name-container">
            <h2>What is your name?</h2>
            <form action="#">
              <input
                ref={nameInputEl}
                type="text"
                className="todo-input"
                placeholder="what is your name"
                value={name}
                onChange={handleNameInput}
              />
              {name && <p className="name-label">Hello, {name}</p>}
            </form>
          </div>
          <h2>Todo App</h2>
          <TodoForm />
          {todos.length > 0 ? <TodoList /> : <NoTodos />}
        </div>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
