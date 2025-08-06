import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import { useApiError } from '@shared/hooks/useApiError';

export const useDeleteTodo = () => {
  const { deleteTodo } = useTodoStore();
  const [loading, setLoading] = useState(false);
  const { error, handleError, clearError } = useApiError();

  const deleteTodoItem = async (id: string) => {
    setLoading(true);
    clearError();

    try {
      // In a real app, this would call the API
      // await todoApi.deleteTodo(id);

      // For now, use the store directly
      deleteTodo(id);

      return true;
    } catch (err) {
      handleError(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteTodo: deleteTodoItem,
    loading,
    error,
    clearError,
  };
};
