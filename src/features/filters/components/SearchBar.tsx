import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@shared/components/ui/Input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search todos...',
  className,
}) => {
  return (
    <Input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      startIcon={<Search className='w-4 h-4' />}
      className={className}
    />
  );
};
