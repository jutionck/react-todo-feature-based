import React, { useMemo } from 'react';
import type { Todo } from '../types/todo.types';
import { TodoItem } from './TodoItem';
import { TodoStats } from './TodoStats';
import { CheckCircle } from 'lucide-react';
import { PaginationControls } from '@/shared/components/ui/PaginationControls';
import { ItemsPerPageSelector } from '@/shared/components/ui/ItemsPerPageSelector';
import { EmptyState } from '@/shared/components/ui/EmptyState';
import { usePagination } from '@/shared/hooks/usePagination';
import { useTodoFilters } from '../hooks/useTodoFilters';
import { useTodoStats } from '../hooks/useTodoStats';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onEdit: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onEdit,
  onDelete,
}) => {
  const { filteredTodos } = useTodoFilters(todos);
  const { pending, completed } = useTodoStats(filteredTodos);

  // Sort todos: incomplete first, then completed, both sorted by updatedAt
  const sortedTodos = useMemo(() => {
    return [...filteredTodos].sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1; // incomplete on top
      }
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
  }, [filteredTodos]);

  // Use pagination hook
  const {
    currentPage,
    itemsPerPage,
    totalPages,
    currentData: currentTodos,
    startIndex,
    endIndex,
    isShowingAll,
    goToPage,
    handleItemsPerPageChange,
  } = usePagination({
    data: sortedTodos,
    defaultItemsPerPage: 5,
  });

  if (filteredTodos.length === 0) {
    return (
      <EmptyState
        icon={CheckCircle}
        title='No todos found'
        description='Add a new todo or adjust your filters'
      />
    );
  }

  return (
    <div className='space-y-4'>
      {/* Todo Stats & Controls */}
      {filteredTodos.length > 0 && (
        <TodoStats
          pendingCount={pending}
          completedCount={completed}
          totalCount={filteredTodos.length}
          currentPage={currentPage}
          totalPages={totalPages}
          showPageInfo={totalPages > 1 && !isShowingAll}
        >
          <ItemsPerPageSelector
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          />
        </TodoStats>
      )}

      {/* Todo Items */}
      <div className='space-y-3'>
        {currentTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
        totalItems={filteredTodos.length}
        startIndex={startIndex}
        endIndex={endIndex}
        showAll={isShowingAll}
      />
    </div>
  );
};

export default TodoList;
