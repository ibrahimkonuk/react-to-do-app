import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './TodoItemForm.module.css';
import { addTodoRequest } from '../thunks';


const TodoItemForm = ({ todos, onCreatePressed }) => {

  const [inputTitle, setTitleValue] = useState('');
  const [inputDescription, setDecriptionValue] = useState('');

  return (
    <div className={styles.TodoItemForm} data-testid="TodoItemForm">
      <label>Title</label>
      <input className='todo-form__title' type='text' value={inputTitle}
        onChange={e => setTitleValue(e.target.value)} />
      <label>Description</label>
      <input className='todo-form__description' type='text' value={inputDescription}
        onChange={e => setDecriptionValue(e.target.value)} />
      <button
        className='todo-form__button'
        onClick={() => {
          const isDuplicateText =
            todos.some(todo => todo.title === inputTitle);
          if (!isDuplicateText && inputTitle && inputDescription) {
            onCreatePressed(inputTitle, inputDescription);
            setTitleValue('');
            setDecriptionValue('');
          }
        }}
      >Add</button>
    </div >
  )
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: (title, description) => dispatch(addTodoRequest(title, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemForm);