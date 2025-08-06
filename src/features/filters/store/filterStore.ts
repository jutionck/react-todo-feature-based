import { create } from 'zustand';
import type { StatusFilter, CategoryFilter } from '../types/filter.types';

interface FilterStore {
  filter: StatusFilter;
  categoryFilter: CategoryFilter;
  searchTerm: string;
  setFilter: (filter: StatusFilter) => void;
  setCategoryFilter: (category: CategoryFilter) => void;
  setSearchTerm: (term: string) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  filter: 'all',
  categoryFilter: 'all',
  searchTerm: '',
  setFilter: (filter) => set({ filter }),
  setCategoryFilter: (categoryFilter) => set({ categoryFilter }),
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  clearFilters: () => set({ filter: 'all', categoryFilter: 'all', searchTerm: '' }),
}));

export const useFilters = () => {
  const { filter, categoryFilter, searchTerm, setFilter, setCategoryFilter, setSearchTerm, clearFilters } = useFilterStore();
  return { filter, categoryFilter, searchTerm, setFilter, setCategoryFilter, setSearchTerm, clearFilters };
};
