import React from 'react';
import { Check, Edit2, Trash2, Clock, AlertCircle } from 'lucide-react';
import type { Todo } from '../types/todo.types';
import { cn } from '@/shared/utils/cn';
import { Badge } from '@/shared/components/ui/Badge';
import { Button } from '@/shared/components/ui/Button';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onEdit,
  onDelete,
}) => {
  return (
    <div
      className={cn(
        'group p-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-200',
        'border border-gray-100 hover:border-primary-200',
        todo.completed && 'opacity-60 bg-gray-50/80'
      )}
    >
      <div className='flex items-start gap-3'>
        <Button
          variant='ghost'
          size='sm'
          onClick={() => onToggle(todo.id)}
          className={cn(
            'mt-1 w-6 h-6 p-0 rounded-full border-2 flex items-center justify-center transition-all duration-200 shrink-0',
            todo.completed
              ? 'bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600'
              : 'bg-white border-gray-300 hover:border-green-400 hover:bg-green-50'
          )}
        >
          {todo.completed && (
            <Check className='w-3.5 h-3.5 text-white stroke-2' />
          )}
        </Button>

        <div className='flex-1'>
          <h3
            className={cn(
              'font-medium text-gray-900 mb-1',
              todo.completed && 'line-through text-gray-500'
            )}
          >
            {todo.title}
          </h3>

          {todo.description && (
            <p className='text-sm text-gray-600 mb-2'>{todo.description}</p>
          )}

          <div className='flex flex-wrap gap-2 items-center'>
            <Badge
              variant={
                todo.priority === 'high'
                  ? 'danger'
                  : todo.priority === 'medium'
                  ? 'info'
                  : 'success'
              }
              className='flex items-center'
            >
              {todo.priority === 'high' && (
                <AlertCircle className='w-3 h-3 mr-1' />
              )}
              {todo.priority}
            </Badge>

            <Badge
              variant={todo.category === 'personal' ? 'default' : 'info'}
              className={cn(
                'flex items-center',
                todo.category === 'personal' &&
                  'bg-primary-100 text-primary-800',
                todo.category === 'work' && 'bg-indigo-100 text-indigo-800',
                todo.category === 'shopping' &&
                  'bg-emerald-100 text-emerald-800',
                todo.category === 'health' && 'bg-teal-100 text-teal-800'
              )}
            >
              {todo.category}
            </Badge>

            {todo.dueDate && (
              <Badge
                variant='default'
                className='flex items-center bg-gray-100 text-gray-700'
              >
                <Clock className='w-3 h-3 mr-1' />
                {new Date(todo.dueDate).toLocaleDateString()}
              </Badge>
            )}
          </div>
        </div>

        <div className='flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
          <Button
            variant='ghost'
            size='sm'
            onClick={() => onEdit(todo)}
            className='p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50'
          >
            <Edit2 className='w-4 h-4' />
          </Button>

          <Button
            variant='ghost'
            size='sm'
            onClick={() => onDelete(todo.id)}
            className='p-2 text-gray-600 hover:text-red-600 hover:bg-red-50'
          >
            <Trash2 className='w-4 h-4' />
          </Button>
        </div>
      </div>
    </div>
  );
};
