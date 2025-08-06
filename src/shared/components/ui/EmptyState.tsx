import React from 'react';

interface EmptyStateProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  action,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-12 text-gray-500 ${className}`}
    >
      <Icon className='w-16 h-16 mb-4 text-gray-300' />
      <h3 className='text-lg font-medium mb-2'>{title}</h3>
      <p className='text-sm text-center mb-4'>{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
};
