import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoListItem.module.css';

const TodoListItem = ({ todo }) => (
  <article className={styles.TodoListItem} data-testid="TodoListItem">
    <h1 className='todo-item__title'> {todo.title} </h1>
    <p className='todo-item_description'> {todo.description} </p>
    <button className='todo-item__completed'>Mark as completed</button>
    <button className='todo-item__remove'>Remove</button>
  </article>
);

TodoListItem.propTypes = {};

TodoListItem.defaultProps = {};

export default TodoListItem;
