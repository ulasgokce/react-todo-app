import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

function TodoForm(props) {
  const [todoInput, setTodoInput] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!todoInput.trim()) return;
    props.addTodo(todoInput);
    setTodoInput('');
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
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
