import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './TodoList.module.css';
import TodoListItem from '../TodoListItem/TodoListItem'
import TodoItemForm from '../TodoItemForm/TodoItemForm';
import { removeTodo, markTodoAsCompleted } from '../actions';
import { loadTodos } from '../thunks';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className={styles.TodoList} data-testid="TodoList">
      <TodoItemForm />
      {todos.map(todo =>
        <TodoListItem key={todo.id} todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed} />
      )}
    </div>
  );
  return isLoading ? loadingMessage : content;

}
const mapStateToProps = state => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (title) => dispatch(removeTodo(title)),
  onCompletedPressed: (title) => dispatch(markTodoAsCompleted(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
