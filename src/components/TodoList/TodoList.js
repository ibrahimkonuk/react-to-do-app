import React from 'react';
import { connect } from 'react-redux';
import styles from './TodoList.module.css';
import TodoListItem from '../TodoListItem/TodoListItem'
import TodoItemForm from '../TodoItemForm/TodoItemForm';
import { removeTodo, markTodoAsCompleted } from '../actions';


const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
  <div className={styles.TodoList} data-testid="TodoList">
    <TodoItemForm />
    {todos.map((todo, index) =>
      <TodoListItem key={index} todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed} />
    )}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: (title) => dispatch(removeTodo(title)),
  onCompletedPressed: (title) => dispatch(markTodoAsCompleted(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
