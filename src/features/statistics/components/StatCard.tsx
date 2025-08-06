import React from 'react';

export interface StatCardProps {
  title: string;
  value: number | string;
  color: string;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  color,
  icon,
}) => {
  return (
    <div className='bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100'>
      <div className='flex items-center gap-3'>
        {icon && <div className={`p-2 rounded-lg ${color}`}>{icon}</div>}
        <div>
          <p className='text-sm font-medium text-gray-600'>{title}</p>
          <p className='text-2xl font-bold text-gray-900'>{value}</p>
        </div>
      </div>
    </div>
  );
};
