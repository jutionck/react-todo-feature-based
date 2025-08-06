import type { Todo } from '../types/todo.types';
import type { ApiResponse, PaginatedResponse } from '@shared/types/common.types';

export interface GetTodosParams {
  page?: number;
  limit?: number;
  status?: 'all' | 'active' | 'completed';
  category?: string;
  search?: string;
  sortBy?: 'createdAt' | 'updatedAt' | 'title' | 'priority' | 'dueDate';
  sortOrder?: 'asc' | 'desc';
}

export interface TodoApiResponse extends ApiResponse<Todo> { }
export interface TodosApiResponse extends ApiResponse<PaginatedResponse<Todo>> { }
export interface TodosListApiResponse extends ApiResponse<Todo[]> { }
