export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  category: 'personal' | 'work' | 'shopping' | 'health';
  createdAt: Date;
  updatedAt: Date;
  dueDate?: Date;
}

export type TodoFormData = Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>;

export type TodoUpdate = Partial<TodoFormData>;