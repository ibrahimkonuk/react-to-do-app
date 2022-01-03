import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';
import TodoItem from '../TodoListItem/TodoListItem'
import TodoItemForm from '../TodoItemForm/TodoItemForm';

const TodoList = ({ todos = [{ title: 'To-do item', description: 'To-do item description.' }] }) => (
  <div className={styles.TodoList} data-testid="TodoList">
    <TodoItemForm />
    {todos.map((todo, index) => < TodoItem key={index} todo={todo} />)}
  </div>
);

TodoList.propTypes = {};

TodoList.defaultProps = {};

export default TodoList;
