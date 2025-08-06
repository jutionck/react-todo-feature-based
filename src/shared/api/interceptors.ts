// API Request and Response interceptors
// This file can be used to add authentication, logging, error handling, etc.

import type { ApiError } from '@shared/types/common.types';

export const requestInterceptor = (request: RequestInit): RequestInit => {
  // Add authentication headers, request logging, etc.
  const token = localStorage.getItem('auth_token');

  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  // Log requests in development
  if (import.meta.env.DEV) {
    console.log('API Request:', request);
  }

  return request;
};

export const responseInterceptor = <T>(response: Response): Promise<T> => {
  // Handle global response errors, logging, etc.

  if (import.meta.env.DEV) {
    console.log('API Response:', response);
  }

  if (response.status === 401) {
    // Handle unauthorized access
    localStorage.removeItem('auth_token');
    window.location.href = '/login';
  }

  return response.json();
};

export const errorInterceptor = (error: ApiError): ApiError => {
  // Global error handling

  if (import.meta.env.DEV) {
    console.error('API Error:', error);
  }

  // Show toast notification, log to error service, etc.

  return error;
};
