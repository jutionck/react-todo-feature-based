import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import { useApiError } from '@shared/hooks/useApiError';
import type { Todo } from '../types/todo.types';
import type { GetTodosParams } from '../api/todoApi.types';

export const useTodos = (params?: GetTodosParams) => {
  const { todos, addTodo, updateTodo, deleteTodo, toggleTodo, clearCompleted } = useTodoStore();
  const [loading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { error, handleError, clearError } = useApiError();

  // Filter todos based on params
  const filteredTodos = todos.filter((todo: Todo) => {
    if (params?.status && params.status !== 'all') {
      if (params.status === 'completed' && !todo.completed) return false;
      if (params.status === 'active' && todo.completed) return false;
    }

    if (params?.category && params.category !== 'all' && todo.category !== params.category) {
      return false;
    }

    if (params?.search) {
      const searchTerm = params.search.toLowerCase();
      const titleMatch = todo.title.toLowerCase().includes(searchTerm);
      const descriptionMatch = todo.description?.toLowerCase().includes(searchTerm);
      if (!titleMatch && !descriptionMatch) return false;
    }

    return true;
  });

  const refresh = async () => {
    setRefreshing(true);
    clearError();

    try {
      // In a real app, this would fetch from the API
      // For now, we're using Zustand store which persists to localStorage
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    } catch (err) {
      handleError(err);
    } finally {
      setRefreshing(false);
    }
  };

  const statistics = {
    total: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    active: todos.filter(todo => !todo.completed).length,
    overdue: todos.filter(todo =>
      todo.dueDate &&
      new Date(todo.dueDate) < new Date() &&
      !todo.completed
    ).length,
  };

  return {
    todos: filteredTodos,
    allTodos: todos,
    loading,
    refreshing,
    error,
    statistics,
    actions: {
      addTodo,
      updateTodo,
      deleteTodo,
      toggleTodo,
      clearCompleted,
      refresh,
      clearError,
    },
  };
};
