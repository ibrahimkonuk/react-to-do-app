import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItemForm.module.css';

const TodoItemForm = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={styles.TodoItemForm} data-testid="TodoItemForm">
      <input className='todo-form__input' type='text' value={inputValue}
        onChange={e => setInputValue(e.target.value)} />
      <button className='todo-form__button'>Add</button>
    </div>
  )
};

TodoItemForm.propTypes = {};

TodoItemForm.defaultProps = {};

export default TodoItemForm;
