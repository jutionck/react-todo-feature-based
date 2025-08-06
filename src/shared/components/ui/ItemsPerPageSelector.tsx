import React from 'react';
import { Select } from './Select';

interface ItemsPerPageSelectorProps {
  value: number;
  onChange: (itemsPerPage: number) => void;
  options?: Array<{ value: number; label: string }>;
  className?: string;
}

export const ItemsPerPageSelector: React.FC<ItemsPerPageSelectorProps> = ({
  value,
  onChange,
  options = [
    { value: 5, label: '5 items' },
    { value: 10, label: '10 items' },
    { value: 20, label: '20 items' },
    { value: 999999, label: 'Show All' },
  ],
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className='text-sm text-gray-500'>Show:</span>
      <Select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className='w-28 py-1 text-sm'
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
};
