import React from 'react';

interface TodoStatsProps {
  pendingCount: number;
  completedCount: number;
  totalCount: number;
  currentPage?: number;
  totalPages?: number;
  showPageInfo?: boolean;
  children?: React.ReactNode;
}

export const TodoStats: React.FC<TodoStatsProps> = ({
  pendingCount,
  completedCount,
  totalCount,
  currentPage,
  totalPages,
  showPageInfo = false,
  children,
}) => {
  return (
    <div className='flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200'>
      <div className='text-sm text-gray-600'>
        <span className='font-medium'>
          {pendingCount} pending • {completedCount} completed
        </span>
        <span className='ml-2 text-gray-500'>Total: {totalCount} todos</span>
      </div>

      <div className='flex items-center gap-4'>
        {children}

        {/* Page Info */}
        {showPageInfo && currentPage && totalPages && totalPages > 1 && (
          <div className='text-sm text-gray-500'>
            Page {currentPage} of {totalPages}
          </div>
        )}
      </div>
    </div>
  );
};
