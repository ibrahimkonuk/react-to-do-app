import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from '../components/actions';


export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { title, description } = payload;
            const newTodo = {
                title,
                description,
                isCompleted: false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { title } = payload;
            return state.filter(todo => todo.title !== title);
        }
        case MARK_TODO_AS_COMPLETED: {
            const { title } = payload;
            return state.map(todo => {
                if (todo.title === title) { return { ...todo, isCompleted: true }; }
                return todo;
            });
        }
        default:
            return state;
    }
}