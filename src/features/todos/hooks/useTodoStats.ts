import { useMemo } from 'react';
import type { Todo } from '../types/todo.types';

export const useTodoStats = (todos: Todo[]) => {
  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const pending = total - completed;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      total,
      completed,
      pending,
      completionRate,
      hasCompleted: completed > 0,
      hasPending: pending > 0,
    };
  }, [todos]);

  return stats;
};
