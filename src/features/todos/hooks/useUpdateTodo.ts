import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import { useApiError } from '@shared/hooks/useApiError';
import type { TodoUpdate } from '../types/todo.types';

export const useUpdateTodo = () => {
  const { updateTodo } = useTodoStore();
  const [loading, setLoading] = useState(false);
  const { error, handleError, clearError } = useApiError();

  const updateTodoItem = async (id: string, data: TodoUpdate) => {
    setLoading(true);
    clearError();

    try {
      // In a real app, this would call the API
      // await todoApi.updateTodo(id, data);

      // For now, use the store directly
      updateTodo(id, data);

      return true;
    } catch (err) {
      handleError(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    updateTodo: updateTodoItem,
    loading,
    error,
    clearError,
  };
};
