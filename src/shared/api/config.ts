// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  TIMEOUT: 10000,
  RETRIES: 3,
};

export const API_ENDPOINTS = {
  TODOS: '/todos',
  STATISTICS: '/statistics',
} as const;
