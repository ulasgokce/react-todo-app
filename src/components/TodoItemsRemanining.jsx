import React from 'react';
import PropTypes from 'prop-types';

TodoItemsRemanining.propTypes = {
  remaining: PropTypes.func.isRequired,
};

function TodoItemsRemanining(props) {
  return <span>{props.remaining()} items remaining</span>;
}

export default TodoItemsRemanining;
