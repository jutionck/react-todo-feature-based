import { apiClient } from '@shared/api/client';
import { API_ENDPOINTS } from '@shared/api/config';
import type { Todo, TodoFormData, TodoUpdate } from '../types/todo.types';
import type {
  GetTodosParams,
  TodoApiResponse,
  TodosListApiResponse
} from './todoApi.types';

export const todoApi = {
  // Get all todos
  getTodos: async (params?: GetTodosParams): Promise<TodosListApiResponse> => {
    return apiClient.get<Todo[]>(API_ENDPOINTS.TODOS, params);
  },

  // Get a single todo by ID
  getTodo: async (id: string): Promise<TodoApiResponse> => {
    return apiClient.get<Todo>(`${API_ENDPOINTS.TODOS}/${id}`);
  },

  // Create a new todo
  createTodo: async (data: TodoFormData): Promise<TodoApiResponse> => {
    return apiClient.post<Todo>(API_ENDPOINTS.TODOS, data);
  },

  // Update a todo
  updateTodo: async (id: string, data: TodoUpdate): Promise<TodoApiResponse> => {
    return apiClient.put<Todo>(`${API_ENDPOINTS.TODOS}/${id}`, data);
  },

  // Partially update a todo
  patchTodo: async (id: string, data: Partial<TodoUpdate>): Promise<TodoApiResponse> => {
    return apiClient.patch<Todo>(`${API_ENDPOINTS.TODOS}/${id}`, data);
  },

  // Delete a todo
  deleteTodo: async (id: string): Promise<TodoApiResponse> => {
    return apiClient.delete<Todo>(`${API_ENDPOINTS.TODOS}/${id}`);
  },

  // Toggle todo completion status
  toggleTodo: async (id: string): Promise<TodoApiResponse> => {
    return apiClient.patch<Todo>(`${API_ENDPOINTS.TODOS}/${id}/toggle`);
  },

  // Bulk operations
  bulkDelete: async (ids: string[]): Promise<TodosListApiResponse> => {
    return apiClient.post<Todo[]>(`${API_ENDPOINTS.TODOS}/bulk-delete`, { ids });
  },

  bulkUpdate: async (ids: string[], data: Partial<TodoUpdate>): Promise<TodosListApiResponse> => {
    return apiClient.post<Todo[]>(`${API_ENDPOINTS.TODOS}/bulk-update`, { ids, data });
  },

  // Clear completed todos
  clearCompleted: async (): Promise<TodosListApiResponse> => {
    return apiClient.delete<Todo[]>(`${API_ENDPOINTS.TODOS}/completed`);
  },
};
