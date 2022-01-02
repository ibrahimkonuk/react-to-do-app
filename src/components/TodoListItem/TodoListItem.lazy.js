import React, { lazy, Suspense } from 'react';

const LazyTodoListItem = lazy(() => import('./TodoListItem'));

const TodoListItem = props => (
  <Suspense fallback={null}>
    <LazyTodoListItem {...props} />
  </Suspense>
);

export default TodoListItem;
