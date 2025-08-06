// Mock data and functions for development/testing
import type { Todo, TodoFormData, TodoUpdate } from '../types/todo.types';
import type { GetTodosParams } from './todoApi.types';

// Mock data
const mockTodos: Todo[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    description: 'Finish the detailed project proposal for the client meeting',
    completed: false,
    priority: 'high',
    category: 'work',
    createdAt: new Date('2024-01-15T10:00:00Z'),
    updatedAt: new Date('2024-01-15T10:00:00Z'),
    dueDate: new Date('2024-01-20T17:00:00Z'),
  },
  {
    id: '2',
    title: 'Buy groceries',
    description: 'Milk, bread, eggs, vegetables',
    completed: true,
    priority: 'medium',
    category: 'shopping',
    createdAt: new Date('2024-01-14T09:30:00Z'),
    updatedAt: new Date('2024-01-14T14:30:00Z'),
  },
  {
    id: '3',
    title: 'Schedule doctor appointment',
    description: '',
    completed: false,
    priority: 'medium',
    category: 'health',
    createdAt: new Date('2024-01-13T08:00:00Z'),
    updatedAt: new Date('2024-01-13T08:00:00Z'),
  },
  {
    id: '4',
    title: 'Read 30 minutes',
    description: 'Continue reading "The Clean Coder"',
    completed: false,
    priority: 'low',
    category: 'personal',
    createdAt: new Date('2024-01-12T20:00:00Z'),
    updatedAt: new Date('2024-01-12T20:00:00Z'),
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
export const mockTodoApi = {
  getTodos: async (params?: GetTodosParams): Promise<Todo[]> => {
    await delay(500);

    let filteredTodos = [...mockTodos];

    // Apply filters
    if (params?.status && params.status !== 'all') {
      filteredTodos = filteredTodos.filter(todo =>
        params.status === 'completed' ? todo.completed : !todo.completed
      );
    }

    if (params?.category && params.category !== 'all') {
      filteredTodos = filteredTodos.filter(todo => todo.category === params.category);
    }

    if (params?.search) {
      const searchTerm = params.search.toLowerCase();
      filteredTodos = filteredTodos.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm) ||
        todo.description?.toLowerCase().includes(searchTerm)
      );
    }

    // Sort
    if (params?.sortBy) {
      filteredTodos.sort((a, b) => {
        const aValue = a[params.sortBy as keyof Todo];
        const bValue = b[params.sortBy as keyof Todo];

        if (!aValue || !bValue) return 0;

        if (params.sortOrder === 'desc') {
          return aValue > bValue ? -1 : 1;
        }
        return aValue < bValue ? -1 : 1;
      });
    }

    return filteredTodos;
  },

  getTodo: async (id: string): Promise<Todo | null> => {
    await delay(300);
    return mockTodos.find(todo => todo.id === id) || null;
  },

  createTodo: async (data: TodoFormData): Promise<Todo> => {
    await delay(400);

    const newTodo: Todo = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mockTodos.unshift(newTodo);
    return newTodo;
  },

  updateTodo: async (id: string, data: TodoUpdate): Promise<Todo | null> => {
    await delay(400);

    const todoIndex = mockTodos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) return null;

    mockTodos[todoIndex] = {
      ...mockTodos[todoIndex],
      ...data,
      updatedAt: new Date(),
    };

    return mockTodos[todoIndex];
  },

  deleteTodo: async (id: string): Promise<boolean> => {
    await delay(300);

    const todoIndex = mockTodos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) return false;

    mockTodos.splice(todoIndex, 1);
    return true;
  },

  toggleTodo: async (id: string): Promise<Todo | null> => {
    await delay(300);

    const todoIndex = mockTodos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) return null;

    mockTodos[todoIndex] = {
      ...mockTodos[todoIndex],
      completed: !mockTodos[todoIndex].completed,
      updatedAt: new Date(),
    };

    return mockTodos[todoIndex];
  },

  clearCompleted: async (): Promise<Todo[]> => {
    await delay(400);

    const completedTodos = mockTodos.filter(todo => todo.completed);
    mockTodos.splice(0, mockTodos.length, ...mockTodos.filter(todo => !todo.completed));

    return completedTodos;
  },
};
