import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';

const TodoList = () => (
  <div className={styles.TodoList} data-testid="TodoList">
    TodoList Component
  </div>
);

TodoList.propTypes = {};

TodoList.defaultProps = {};

export default TodoList;
