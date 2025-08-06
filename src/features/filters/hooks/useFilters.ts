import { useState, useMemo } from 'react';
import type { Todo } from '@features/todos/types/todo.types';
import type { StatusFilter, CategoryFilter, UseFiltersReturn } from '../types/filter.types';

export const useFilters = (todos: Todo[]): UseFiltersReturn => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    return todos.filter((todo) => {
      if (statusFilter === 'active' && todo.completed) return false;
      if (statusFilter === 'completed' && !todo.completed) return false;

      if (categoryFilter !== 'all' && todo.category !== categoryFilter) return false;

      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const titleMatch = todo.title.toLowerCase().includes(searchLower);
        const descriptionMatch = todo.description?.toLowerCase().includes(searchLower);
        if (!titleMatch && !descriptionMatch) return false;
      }

      return true;
    });
  }, [todos, statusFilter, categoryFilter, searchTerm]);

  const clearFilters = () => {
    setStatusFilter('all');
    setCategoryFilter('all');
    setSearchTerm('');
  };

  return {
    filteredItems,
    statusFilter,
    setStatusFilter,
    categoryFilter,
    setCategoryFilter,
    searchTerm,
    setSearchTerm,
    clearFilters,
  };
};
