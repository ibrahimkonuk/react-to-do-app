export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (title, description) => ({
    type: CREATE_TODO,
    payload: { title, description },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (title, description) => ({
    type: REMOVE_TODO,
    payload: { title, description },
});