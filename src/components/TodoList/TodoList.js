import React from 'react';
import { connect } from 'react-redux';
import styles from './TodoList.module.css';
import TodoListItem from '../TodoListItem/TodoListItem'
import TodoItemForm from '../TodoItemForm/TodoItemForm';
import { removeTodo } from '../actions';


const TodoList = ({ todos = [], onRemovePressed }) => (
  <div className={styles.TodoList} data-testid="TodoList">
    <TodoItemForm />
    {todos.map((todo, index) => <TodoListItem key={index} todo={todo} onRemovePressed={onRemovePressed} />)}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: (title) => dispatch(removeTodo(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
