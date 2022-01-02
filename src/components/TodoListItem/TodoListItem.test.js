import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoListItem from './TodoListItem';

describe('<TodoListItem />', () => {
  test('it should mount', () => {
    render(<TodoListItem />);
    
    const todoListItem = screen.getByTestId('TodoListItem');

    expect(todoListItem).toBeInTheDocument();
  });
});