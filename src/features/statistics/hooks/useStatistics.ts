import { useMemo } from 'react';
import type { Todo } from '@features/todos/types/todo.types';

export interface TodoStatistics {
  total: number;
  completed: number;
  active: number;
  byCategory: Record<string, number>;
  byPriority: Record<string, number>;
  completionRate: number;
}

export const useStatistics = (todos: Todo[]): TodoStatistics => {
  return useMemo(() => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const active = total - completed;

    const byCategory = todos.reduce((acc, todo) => {
      acc[todo.category] = (acc[todo.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const byPriority = todos.reduce((acc, todo) => {
      acc[todo.priority] = (acc[todo.priority] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      total,
      completed,
      active,
      byCategory,
      byPriority,
      completionRate,
    };
  }, [todos]);
};
