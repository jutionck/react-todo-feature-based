import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { TodoFormData } from '../types/todo.types';
import { Button } from '@shared/components/ui/Button';
import { Input } from '@shared/components/ui/Input';
import { Select } from '@shared/components/ui/Select';

interface TodoFormProps {
  onSubmit: (data: TodoFormData) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<TodoFormData>({
    title: '',
    description: '',
    completed: false,
    priority: 'medium',
    category: 'personal',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    onSubmit(formData);
    setFormData({
      title: '',
      description: '',
      completed: false,
      priority: 'medium',
      category: 'personal',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-4 p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100'
    >
      {/* Main input row */}
      <div className='flex flex-col sm:flex-row gap-3'>
        <Input
          type='text'
          placeholder='What needs to be done?'
          value={formData.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, title: e.target.value })
          }
          className='flex-1'
          required
        />

        <div className='flex flex-col sm:flex-row gap-3 sm:w-auto w-full'>
          <Select
            value={formData.priority}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFormData({ ...formData, priority: e.target.value as any })
            }
            className='w-full sm:w-32'
          >
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </Select>

          <Select
            value={formData.category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFormData({ ...formData, category: e.target.value as any })
            }
            className='w-full sm:w-32'
          >
            <option value='personal'>Personal</option>
            <option value='work'>Work</option>
            <option value='shopping'>Shopping</option>
            <option value='health'>Health</option>
          </Select>

          <Button
            type='submit'
            variant='primary'
            className='w-full sm:w-auto whitespace-nowrap'
          >
            <Plus className='w-4 h-4 mr-1' />
            Add Todo
          </Button>
        </div>
      </div>

      {/* Description input */}
      <Input
        type='text'
        placeholder='Description (optional)'
        value={formData.description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
    </form>
  );
};
