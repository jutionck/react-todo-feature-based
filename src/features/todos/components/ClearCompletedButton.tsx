import React from 'react';
import { Button } from '@/shared/components/ui/Button';

interface ClearCompletedButtonProps {
  completedCount: number;
  onClear: () => void;
  className?: string;
}

export const ClearCompletedButton: React.FC<ClearCompletedButtonProps> = ({
  completedCount,
  onClear,
  className = '',
}) => {
  if (completedCount === 0) return null;

  return (
    <div className={`text-center ${className}`}>
      <Button
        variant='ghost'
        size='sm'
        onClick={onClear}
        className='text-gray-600 hover:text-red-600 transition-colors'
      >
        Clear completed ({completedCount})
      </Button>
    </div>
  );
};
