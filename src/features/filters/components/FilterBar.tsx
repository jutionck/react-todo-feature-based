import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/shared/components/ui/Button';
import { Select } from '@/shared/components/ui/Select';
import { Input } from '@/shared/components/ui/Input';
import type { CategoryFilter } from '../types/filter.types';

interface FilterBarProps {
  statusFilter: 'all' | 'active' | 'completed';
  onStatusChange: (status: 'all' | 'active' | 'completed') => void;
  categoryFilter: string;
  onCategoryChange: (category: CategoryFilter) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  statusFilter,
  onStatusChange,
  categoryFilter,
  onCategoryChange,
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className='p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 space-y-4'>
      <div className='flex flex-wrap gap-3'>
        <div className='flex gap-2'>
          <Button
            variant={statusFilter === 'all' ? 'primary' : 'ghost'}
            size='sm'
            onClick={() => onStatusChange('all')}
          >
            All
          </Button>
          <Button
            variant={statusFilter === 'active' ? 'primary' : 'ghost'}
            size='sm'
            onClick={() => onStatusChange('active')}
          >
            Active
          </Button>
          <Button
            variant={statusFilter === 'completed' ? 'primary' : 'ghost'}
            size='sm'
            onClick={() => onStatusChange('completed')}
          >
            Completed
          </Button>
        </div>

        <Select
          value={categoryFilter}
          onChange={(e) => onCategoryChange(e.target.value as CategoryFilter)}
          className='w-40'
        >
          <option value='all'>All Categories</option>
          <option value='personal'>Personal</option>
          <option value='work'>Work</option>
          <option value='shopping'>Shopping</option>
          <option value='health'>Health</option>
        </Select>

        <div className='relative flex-1 min-w-[200px]'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none' />
          <Input
            type='text'
            placeholder='Search todos...'
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className='pl-10'
          />
        </div>
      </div>
    </div>
  );
};
