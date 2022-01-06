import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './TodoList.module.css';
import TodoListItem from '../TodoListItem/TodoListItem'
import TodoItemForm from '../TodoItemForm/TodoItemForm';
import { loadTodos, removeTodoRequest, updateTodoRequest } from '../thunks';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


const TodoList = ({
  todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos
}) => {

  useEffect(() => {
    startLoadingTodos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadingMessage = <CircularProgress />;

  const content = (
    <>
      <TodoItemForm />
      <Box
        className={styles.TodoList}
        data-testid="TodoList"
        sx={{ justifyContent: 'space-around', flexWrap: 'wrap', display: 'flex', flexDirection: 'row', p: 1, m: 1, bgcolor: 'background.paper' }}>
        {
          todos.map(todo =>
            <TodoListItem key={todo.id} todo={todo}
              onRemovePressed={onRemovePressed}
              onCompletedPressed={onCompletedPressed} />
          )
        }
      </Box >
    </>
  );
  return isLoading ? loadingMessage : content;

}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(updateTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
