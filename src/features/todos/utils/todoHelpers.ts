import type { Todo } from '../types/todo.types';

export const todoHelpers = {
  isOverdue: (todo: Todo): boolean => {
    if (!todo.dueDate || todo.completed) return false;
    return new Date(todo.dueDate) < new Date();
  },

  getPriorityColor: (priority: Todo['priority']): string => {
    const colors = {
      low: 'green',
      medium: 'yellow',
      high: 'red',
    };
    return colors[priority];
  },

  getCategoryColor: (category: Todo['category']): string => {
    const colors = {
      personal: 'blue',
      work: 'purple',
      shopping: 'orange',
      health: 'pink',
    };
    return colors[category];
  },

  formatDueDate: (date: Date): string => {
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return `Overdue by ${Math.abs(diffDays)} day(s)`;
    } else if (diffDays === 0) {
      return 'Due today';
    } else if (diffDays === 1) {
      return 'Due tomorrow';
    } else if (diffDays <= 7) {
      return `Due in ${diffDays} days`;
    } else {
      return date.toLocaleDateString();
    }
  },

  sortTodos: (todos: Todo[], sortBy: keyof Todo, order: 'asc' | 'desc' = 'asc'): Todo[] => {
    return [...todos].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (!aValue || !bValue) return 0;

      if (order === 'desc') {
        return aValue > bValue ? -1 : 1;
      }
      return aValue < bValue ? -1 : 1;
    });
  },

  filterByStatus: (todos: Todo[], status: 'all' | 'active' | 'completed'): Todo[] => {
    if (status === 'all') return todos;
    return todos.filter(todo =>
      status === 'completed' ? todo.completed : !todo.completed
    );
  },

  filterByCategory: (todos: Todo[], category: string): Todo[] => {
    if (category === 'all') return todos;
    return todos.filter(todo => todo.category === category);
  },

  searchTodos: (todos: Todo[], searchTerm: string): Todo[] => {
    if (!searchTerm.trim()) return todos;

    const term = searchTerm.toLowerCase();
    return todos.filter(todo =>
      todo.title.toLowerCase().includes(term) ||
      todo.description?.toLowerCase().includes(term)
    );
  },

  getStatistics: (todos: Todo[]) => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const active = total - completed;
    const overdue = todos.filter(todo => todoHelpers.isOverdue(todo)).length;

    return {
      total,
      completed,
      active,
      overdue,
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  },

  generateId: (): string => {
    return Math.random().toString(36).substr(2, 9);
  },

  validateTodo: (todo: Partial<Todo>): string[] => {
    const errors: string[] = [];

    if (!todo.title?.trim()) {
      errors.push('Title is required');
    }

    if (todo.title && todo.title.length > 200) {
      errors.push('Title must be less than 200 characters');
    }

    if (todo.description && todo.description.length > 1000) {
      errors.push('Description must be less than 1000 characters');
    }

    if (todo.dueDate && new Date(todo.dueDate) < new Date()) {
      errors.push('Due date cannot be in the past');
    }

    return errors;
  },
};
