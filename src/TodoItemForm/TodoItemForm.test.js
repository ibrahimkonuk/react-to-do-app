import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoItemForm from './TodoItemForm';

describe('<TodoItemForm />', () => {
  test('it should mount', () => {
    render(<TodoItemForm />);
    
    const todoItemForm = screen.getByTestId('TodoItemForm');

    expect(todoItemForm).toBeInTheDocument();
  });
});