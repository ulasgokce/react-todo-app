import '../rest.css';
import '../App.css';
import NoTodos from './NoTodos.jsx';
import { useState } from 'react';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
function App() {
  const [lastTodoId, setLastTodoId] = useState(4); // [1, 2, 3
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Go to Grocery',
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Do other thing',
      isComplete: false,
      isEditing: false,
    },
  ]);

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
  function addTodo(todo) {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: lastTodoId,
        title: todo,
        isComplete: false,
      },
    ]);
    setLastTodoId(prevLastTodoId => prevLastTodoId + 1);
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />
        {todos.length > 0 ? (
          <>
            <TodoList
              todos={todos}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              changeEditing={changeEditing}
              updateTodo={updateTodo}
            />
          </>
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}

export default App;
