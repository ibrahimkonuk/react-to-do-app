import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import CardActions from '@mui/material/CardActions';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';


const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {

  return (
    <Card
      sx={{ display: 'flex', flexDirection: 'column', m: 1, minWidth: 311 }} >

      <CardContent>

        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom >
          {new Date(todo.createdAt).toLocaleDateString()}
        </Typography>

        <Typography component="div" variant="h5">
          {todo.title}
        </Typography>

        <Typography component="div" variant="body2">
          {todo.description}
        </Typography>

      </CardContent>

      <CardActions
        sx={{ flexDirection: 'row', justifyContent: 'space-between' }} >

        {todo.isCompleted
          ? <Tooltip title="Done" color="success">
            <DoneAllTwoToneIcon size="large" />
          </Tooltip>
          : <Button
            color="secondary"
            className='todo-item__mark'
            onClick={() => onCompletedPressed(todo.id)}
          > Mark as done
          </Button>
        }

        <Tooltip title="Delete">
          <IconButton
            className='todo-item__remove'
            aria-label="delete"
            size="large"
            onClick={() => onRemovePressed(todo.id)}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>

      </CardActions>

    </Card>
  )

};

export default TodoListItem;