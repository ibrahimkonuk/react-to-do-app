import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItemForm.module.css';

const TodoItemForm = () => (
  <div className={styles.TodoItemForm} data-testid="TodoItemForm">
    TodoItemForm Component
  </div>
);

TodoItemForm.propTypes = {};

TodoItemForm.defaultProps = {};

export default TodoItemForm;
