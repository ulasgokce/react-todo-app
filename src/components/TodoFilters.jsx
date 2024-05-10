import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

function TodoFilters() {
  const { filter, setFilter, todosFiltered } = useContext(TodosContext);
  return (
    <div>
      <button
        className={`button filter-button ${
          filter === 'all' ? 'filter-button-active' : ''
        }`}
        onClick={() => {
          todosFiltered();
          setFilter('all');
        }}
      >
        All
      </button>
      <button
        className={`button filter-button ${
          filter === 'active' ? 'filter-button-active' : ''
        }`}
        onClick={() => {
          todosFiltered();
          setFilter('active');
        }}
      >
        Active
      </button>
      <button
        className={`button filter-button ${
          filter === 'completed' ? 'filter-button-active' : ''
        }`}
        onClick={() => {
          todosFiltered();
          setFilter('completed');
        }}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilters;
