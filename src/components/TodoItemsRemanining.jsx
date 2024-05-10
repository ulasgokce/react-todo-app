import React, { useContext, useMemo } from 'react';
import { TodosContext } from '../context/TodosContext';

function TodoItemsRemanining(props) {
  const { todos } = useContext(TodosContext);
  const remaining = useMemo(
    () => todos.filter(todo => !todo.isComplete).length,
    [todos]
  );
  return <span>{remaining} items remaining</span>;
}

export default TodoItemsRemanining;
