import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  showAll?: boolean;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  startIndex,
  endIndex,
  showAll = false,
}) => {
  if (totalPages <= 1 || showAll) return null;

  return (
    <div className='flex items-center justify-between pt-4'>
      <div className='flex items-center gap-2'>
        <Button
          variant='ghost'
          size='sm'
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className='flex items-center gap-1'
        >
          <ChevronLeft className='w-4 h-4' />
          Previous
        </Button>

        <div className='flex items-center gap-1'>
          {/* Show page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((page) => {
              // Show current page, first page, last page, and 1 page before/after current
              return (
                page === 1 ||
                page === totalPages ||
                Math.abs(page - currentPage) <= 1
              );
            })
            .map((page, index, array) => {
              // Add ellipsis if there's a gap
              const prevPage = array[index - 1];
              const showEllipsis = prevPage && page - prevPage > 1;

              return (
                <React.Fragment key={page}>
                  {showEllipsis && (
                    <span className='px-2 py-1 text-gray-400'>...</span>
                  )}
                  <Button
                    variant={currentPage === page ? 'primary' : 'ghost'}
                    size='sm'
                    onClick={() => onPageChange(page)}
                    className='min-w-[32px] h-8'
                  >
                    {page}
                  </Button>
                </React.Fragment>
              );
            })}
        </div>

        <Button
          variant='ghost'
          size='sm'
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='flex items-center gap-1'
        >
          Next
          <ChevronRight className='w-4 h-4' />
        </Button>
      </div>

      <div className='text-sm text-gray-500'>
        Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of{' '}
        {totalItems}
        {showAll && ' (All items)'}
      </div>
    </div>
  );
};
