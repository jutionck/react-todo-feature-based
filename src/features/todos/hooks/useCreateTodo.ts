import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import { useApiError } from '@shared/hooks/useApiError';
import type { TodoFormData } from '../types/todo.types';

export const useCreateTodo = () => {
  const { addTodo } = useTodoStore();
  const [loading, setLoading] = useState(false);
  const { error, handleError, clearError } = useApiError();

  const createTodo = async (data: TodoFormData) => {
    setLoading(true);
    clearError();

    try {
      // In a real app, this would call the API
      // await todoApi.createTodo(data);

      // For now, use the store directly
      addTodo(data);

      return true;
    } catch (err) {
      handleError(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    createTodo,
    loading,
    error,
    clearError,
  };
};
