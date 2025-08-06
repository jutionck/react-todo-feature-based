import React, { useState } from 'react';
import { Save, X } from 'lucide-react';
import type { Todo, TodoUpdate } from '../types/todo.types';
import { Modal } from '@shared/components/ui/Modal';
import { Button } from '@shared/components/ui/Button';
import { Input } from '@shared/components/ui/Input';
import { Select } from '@shared/components/ui/Select';

interface EditTodoModalProps {
  todo: Todo;
  onSave: (id: string, data: TodoUpdate) => void;
  onClose: () => void;
}

export const EditTodoModal: React.FC<EditTodoModalProps> = ({
  todo,
  onSave,
  onClose,
}) => {
  const [formData, setFormData] = useState<TodoUpdate>({
    title: todo.title,
    description: todo.description || '',
    priority: todo.priority,
    category: todo.category,
    dueDate: todo.dueDate,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title?.trim()) return;

    onSave(todo.id, formData);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      dueDate: e.target.value ? new Date(e.target.value) : undefined,
    });
  };

  return (
    <Modal isOpen={true} onClose={onClose} title='Edit Todo' size='md'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <Input
          label='Title'
          type='text'
          value={formData.title || ''}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder='Todo title'
          required
        />

        <Input
          label='Description (optional)'
          type='text'
          value={formData.description || ''}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder='Todo description'
        />

        <div className='grid grid-cols-2 gap-4'>
          <Select
            label='Priority'
            value={formData.priority || 'medium'}
            onChange={(e) =>
              setFormData({ ...formData, priority: e.target.value as any })
            }
          >
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </Select>

          <Select
            label='Category'
            value={formData.category || 'personal'}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value as any })
            }
          >
            <option value='personal'>Personal</option>
            <option value='work'>Work</option>
            <option value='shopping'>Shopping</option>
            <option value='health'>Health</option>
          </Select>
        </div>

        <Input
          label='Due Date (optional)'
          type='date'
          value={
            formData.dueDate
              ? new Date(formData.dueDate).toISOString().split('T')[0]
              : ''
          }
          onChange={handleDateChange}
        />

        <div className='flex gap-3 pt-4'>
          <Button type='submit' variant='primary' className='flex-1'>
            <Save className='w-4 h-4 mr-2' />
            Save Changes
          </Button>
          <Button type='button' variant='secondary' onClick={onClose}>
            <X className='w-4 h-4 mr-2' />
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};
