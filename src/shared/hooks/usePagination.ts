import { useState, useMemo } from 'react';

interface UsePaginationProps<T> {
  data: T[];
  defaultItemsPerPage?: number;
}

interface UsePaginationReturn<T> {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  currentData: T[];
  startIndex: number;
  endIndex: number;
  isShowingAll: boolean;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (items: number) => void;
  goToPage: (page: number) => void;
  handleItemsPerPageChange: (newItemsPerPage: number) => void;
}

export function usePagination<T>({
  data,
  defaultItemsPerPage = 5,
}: UsePaginationProps<T>): UsePaginationReturn<T> {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  // Calculate pagination values
  const isShowingAll = itemsPerPage >= 999999;
  const actualItemsPerPage = isShowingAll ? data.length : itemsPerPage;
  const totalPages = Math.ceil(data.length / actualItemsPerPage);
  const startIndex = (currentPage - 1) * actualItemsPerPage;
  const endIndex = startIndex + actualItemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  // Reset to page 1 if current page exceeds total pages
  useMemo(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to page 1 when changing items per page
  };

  return {
    currentPage,
    itemsPerPage,
    totalPages,
    currentData,
    startIndex,
    endIndex,
    isShowingAll,
    setCurrentPage,
    setItemsPerPage,
    goToPage,
    handleItemsPerPageChange,
  };
}
