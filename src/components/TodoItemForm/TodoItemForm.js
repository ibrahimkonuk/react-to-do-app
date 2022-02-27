import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './TodoItemForm.module.css';
import { addTodoRequest } from '../../thunks'

import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';


const TodoItemForm = ({ todos, onCreatePressed }) => {

  const [inputTitle, setTitleValue] = useState('');
  const [inputDescription, setDecriptionValue] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Container
        data-testid="TodoItemForm"
        id="todo-item-form"
        className={styles.TodoItemForm}
        sx={{ m: 2, mx: "auto", display: 'flex', flexDirection: 'column' }}
        component="form"
        maxWidth='sm'
      >

        <Typography
          sx={{ mx: "auto", pb: 3 }}
          component="div"
          variant="h4">
          Create a new to-do
        </Typography>

        <TextField
          required
          id="outlined-required"
          className='todo-form__title'
          sx={{ mb: 2 }}
          label="Title"
          type='text'
          value={inputTitle}
          onChange={e => setTitleValue(e.target.value)}
        />

        <TextField
          required
          id="outlined-multiline-static"
          className='todo-form__description'
          sx={{ mb: 2 }}
          label="Description"
          multiline
          rows={3}
          type='text'
          value={inputDescription}
          onChange={e => setDecriptionValue(e.target.value)}
        />

        <Button
          id="todo-form__button"
          className='todo-form__button'
          sx={{ color: "#f50057", maxWidth: 100, mx: "auto" }}
          size="large"
          startIcon={<SaveIcon />}
          onClick={() => {
            const isDuplicateText =
              todos.some(todo => todo.title === inputTitle);
            if (!isDuplicateText && inputTitle && inputDescription) {
              onCreatePressed(inputTitle, inputDescription);
              handleClick();
              setTitleValue('');
              setDecriptionValue('');
            }
          }}>
          Save
        </Button>

        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          message="Note created"
        />

      </Container>
      <Divider />
    </>
  )

};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: (title, description) => dispatch(addTodoRequest(title, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemForm);