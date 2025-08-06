import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import { useApiError } from '@shared/hooks/useApiError';

export const useToggleTodo = () => {
  const { toggleTodo } = useTodoStore();
  const [loading, setLoading] = useState(false);
  const { error, handleError, clearError } = useApiError();

  const toggleTodoItem = async (id: string) => {
    setLoading(true);
    clearError();

    try {
      // In a real app, this would call the API
      // await todoApi.toggleTodo(id);

      // For now, use the store directly
      toggleTodo(id);

      return true;
    } catch (err) {
      handleError(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    toggleTodo: toggleTodoItem,
    loading,
    error,
    clearError,
  };
};
