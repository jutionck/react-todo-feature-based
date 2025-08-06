import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import type { Todo } from '../types/todo.types';

export const useTodoOperations = () => {
  const { addTodo, updateTodo, deleteTodo, toggleTodo, clearCompleted } = useTodoStore();
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const handleEdit = (todo: Todo) => {
    setEditingTodo(todo);
  };

  const handleSave = (id: string, data: any) => {
    updateTodo(id, data);
    setEditingTodo(null);
  };

  const handleCancelEdit = () => {
    setEditingTodo(null);
  };

  return {
    editingTodo,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    clearCompleted,
    handleEdit,
    handleSave,
    handleCancelEdit,
  };
};
