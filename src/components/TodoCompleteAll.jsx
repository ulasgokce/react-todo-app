import React from 'react';
import PropTypes from 'prop-types';

TodoCompleteAll.propTypes = {
  completeAll: PropTypes.func.isRequired,
};

function TodoCompleteAll(props) {
  return (
    <div className="button" onClick={props.completeAll}>
      Check All
    </div>
  );
}

export default TodoCompleteAll;
