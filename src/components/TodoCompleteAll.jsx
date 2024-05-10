import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';


function TodoCompleteAll() {
  const {setTodos} = useContext(TodosContext);
  function completeAllTodos() {
    setTodos(prevTodos =>
      prevTodos.map(todo => ({ ...todo, isComplete: true }))
    );
  }
  return (
    <div className="button" onClick={completeAllTodos}>
      Check All
    </div>
  );
}

export default TodoCompleteAll;
