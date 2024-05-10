import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';


function TodoClearCompleted(props) {
const {setTodos} = useContext(TodosContext);
  function clearCompleted() {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.isComplete));
  }
  return (
    <button className="button" onClick={clearCompleted}>
      Clear completed
    </button>
  );
}

export default TodoClearCompleted;
