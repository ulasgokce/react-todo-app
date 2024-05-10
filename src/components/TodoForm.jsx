import React, { useContext } from 'react';
import { useState } from 'react';
import { TodosContext } from '../context/TodosContext';

function TodoForm(props) {
  const [todoInput, setTodoInput] = useState('');
  const { setTodos, lastTodoId, setLastTodoId } = useContext(TodosContext);

  function addTodo(event) {
    event.preventDefault();
    if (!todoInput.trim()) return;
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: lastTodoId,
        title: todoInput,
        isComplete: false,
        isEditing: false,
      },
    ]);
    setLastTodoId(prevLastTodoId => prevLastTodoId + 1);
    setTodoInput('');
  }

  return (
    <form action="#" onSubmit={addTodo}>
      <input
        type="text"
        value={todoInput}
        onChange={e => setTodoInput(e.target.value)}
        className="todo-input"
        placeholder="What do you need to do?"
      />
    </form>
  );
}

export default TodoForm;
