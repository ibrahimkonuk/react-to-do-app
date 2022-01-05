import { createTodo, loadTodosInProgress, loadTodosSuccess, loadTodosFailure, removeTodo, markTodoAsCompleted } from './actions';

export const loadTodos = () => async (dispatch) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();

        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
}

export const addTodoRequest = (title, description) => async dispatch => {
    try {
        const body = JSON.stringify({ title, description });
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete'
        });
        const todo = await response.json();
        dispatch(removeTodo(todo))
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const updateTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'post'
        });
        const todo = await response.json();
        dispatch(markTodoAsCompleted(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const displayAlert = title => () => {
    alert(title);
};