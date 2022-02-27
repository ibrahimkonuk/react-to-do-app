import '@testing-library/jest-dom/extend-expect';
import { todos } from '../reducers'

const mockTodo = [{
    isCompleted: false,
    title: 'title',
    description: 'description'
}];

const actions = {
    create: 'CREATE_TODO',
    delete: 'REMOVE_TODO',
};

test('it should create to-do item', () => {

    const mockAction = {
        type: actions.create,
        payload: {
            todo: mockTodo
        }
    };
    const originalState = [];
    const actual = todos(originalState, mockAction);
    expect(actual).toEqual(mockTodo);
});

test('it should delete to-do item', () => {

    const mockAction = {
        type: actions.delete,
        payload: {
            todo: { mockTodo }
        }
    };
    const originalState = [{ mockTodo }];
    const actual = todos(originalState, mockAction);
    expect(actual).toEqual([]);
});