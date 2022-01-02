import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoListItem.module.css';

const TodoListItem = () => (
  <div className={styles.TodoListItem} data-testid="TodoListItem">
    TodoListItem Component
  </div>
);

TodoListItem.propTypes = {};

TodoListItem.defaultProps = {};

export default TodoListItem;
