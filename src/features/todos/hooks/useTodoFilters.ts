import { useMemo } from 'react';
import type { Todo } from '@/features/todos/types/todo.types';
import { useFilters } from '@/features/filters/store/filterStore';

export const useTodoFilters = (todos: Todo[]) => {
  const { filter, categoryFilter, searchTerm } = useFilters();

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      // Status filter
      if (filter === 'completed' && !todo.completed) return false;
      if (filter === 'active' && todo.completed) return false;

      // Category filter
      if (categoryFilter !== 'all' && todo.category !== categoryFilter) return false;

      // Search filter (search in title and description)
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const titleMatch = todo.title.toLowerCase().includes(searchLower);
        const descriptionMatch = todo.description?.toLowerCase().includes(searchLower);
        if (!titleMatch && !descriptionMatch) return false;
      }

      return true;
    });
  }, [todos, filter, categoryFilter, searchTerm]);

  return {
    filteredTodos,
    filter,
    categoryFilter,
    searchTerm,
  };
};
