import { useState, useCallback } from 'react';
import type { ApiError } from '@shared/types/common.types';

export const useApiError = () => {
  const [error, setError] = useState<ApiError | null>(null);

  const handleError = useCallback((error: unknown) => {
    if (error instanceof Error) {
      setError({
        message: error.message,
        status: 500,
        code: 'UNKNOWN_ERROR',
      });
    } else if (typeof error === 'object' && error !== null && 'message' in error) {
      setError(error as ApiError);
    } else {
      setError({
        message: 'An unknown error occurred',
        status: 500,
        code: 'UNKNOWN_ERROR',
      });
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    handleError,
    clearError,
    hasError: error !== null,
  };
};
