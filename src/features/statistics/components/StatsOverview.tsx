import React from 'react';
import { CheckCircle, Circle, TrendingUp, BarChart3 } from 'lucide-react';
import type { Todo } from '@features/todos/types/todo.types';
import { StatCard } from './StatCard';
import { useStatistics } from '../hooks/useStatistics';

interface StatsOverviewProps {
  todos: Todo[];
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ todos }) => {
  const stats = useStatistics(todos);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      <StatCard
        title='Total Todos'
        value={stats.total}
        color='bg-primary-100'
        icon={<BarChart3 className='w-5 h-5 text-primary-600' />}
      />

      <StatCard
        title='Completed'
        value={stats.completed}
        color='bg-green-100'
        icon={<CheckCircle className='w-5 h-5 text-green-600' />}
      />

      <StatCard
        title='Active'
        value={stats.active}
        color='bg-blue-100'
        icon={<Circle className='w-5 h-5 text-blue-600' />}
      />

      <StatCard
        title='Completion Rate'
        value={`${stats.completionRate}%`}
        color='bg-indigo-100'
        icon={<TrendingUp className='w-5 h-5 text-indigo-600' />}
      />
    </div>
  );
};
