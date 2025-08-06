import React from 'react';
import { cn } from '@shared/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  startIcon,
  endIcon,
  className,
  ...props
}) => {
  return (
    <div className='w-full'>
      {label && (
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          {label}
        </label>
      )}
      <div className='relative'>
        {startIcon && (
          <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
            {startIcon}
          </div>
        )}
        <input
          className={cn(
            'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
            'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
            'placeholder:text-gray-400',
            startIcon && 'pl-10',
            endIcon && 'pr-10',
            error && 'border-red-300 focus:ring-red-500',
            className
          )}
          {...props}
        />
        {endIcon && (
          <div className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
            {endIcon}
          </div>
        )}
      </div>
      {error && <p className='mt-1 text-sm text-red-600'>{error}</p>}
    </div>
  );
};
