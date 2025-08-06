import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Todo, TodoFormData, TodoUpdate } from '../types/todo.types';

// Sample data untuk development/testing
const sampleTodos: Todo[] = [
  {
    id: '1',
    title: 'Complete React project',
    description: 'Finish the todo app with all features',
    completed: false,
    priority: 'high',
    category: 'work',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    title: 'Buy groceries',
    description: 'Milk, eggs, bread, and vegetables',
    completed: true,
    priority: 'medium',
    category: 'shopping',
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02'),
  },
  {
    id: '3',
    title: 'Exercise',
    description: '30 minutes cardio workout',
    completed: false,
    priority: 'medium',
    category: 'health',
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03'),
  },
  {
    id: '4',
    title: 'Call mom',
    description: 'Weekly check-in call',
    completed: false,
    priority: 'low',
    category: 'personal',
    createdAt: new Date('2024-01-04'),
    updatedAt: new Date('2024-01-04'),
  },
  {
    id: '5',
    title: 'Prepare presentation',
    description: 'Sales deck for Q1 meeting',
    completed: false,
    priority: 'high',
    category: 'work',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
  },
];

interface TodoStore {
  todos: Todo[];
  addTodo: (data: TodoFormData) => void;
  updateTodo: (id: string, data: TodoUpdate) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  clearCompleted: () => void;
  resetTodos: () => void; // Add reset method
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: sampleTodos, // Start with sample data

      addTodo: (data) => set((state) => ({
        todos: [
          {
            ...data,
            id: crypto.randomUUID(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          ...state.todos,
        ],
      })),

      updateTodo: (id, data) => set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id
            ? { ...todo, ...data, updatedAt: new Date() }
            : todo
        ),
      })),

      deleteTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),

      toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id
            ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
            : todo
        ),
      })),

      clearCompleted: () => set((state) => ({
        todos: state.todos.filter((todo) => !todo.completed),
      })),

      resetTodos: () => set(() => ({
        todos: sampleTodos,
      })),
    }),
    {
      name: 'todo-storage',
    }
  )
);