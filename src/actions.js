import * as types from './action_types'

export const createTodo = (todo) => ({
    type: types.CREATE_TODO,
    payload: { todo },
});

export const removeTodo = todo => ({
    type: types.REMOVE_TODO,
    payload: { todo },
});

export const markTodoAsCompleted = (todo) => ({
    type: types.MARK_TODO_AS_COMPLETED,
    payload: { todo },
});

export const loadTodosInProgress = () => ({
    type: types.LOAD_TODOS_IN_PROGRESS,
});

export const loadTodosSuccess = todos => ({
    type: types.LOAD_TODOS_SUCCESS,
    payload: { todos },
});

export const loadTodosFailure = () => ({
    type: types.LOAD_TODOS_FAILURE,
});