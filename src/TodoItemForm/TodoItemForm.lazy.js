import React, { lazy, Suspense } from 'react';

const LazyTodoItemForm = lazy(() => import('./TodoItemForm'));

const TodoItemForm = props => (
  <Suspense fallback={null}>
    <LazyTodoItemForm {...props} />
  </Suspense>
);

export default TodoItemForm;
