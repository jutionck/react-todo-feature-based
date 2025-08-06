export type StatusFilter = 'all' | 'active' | 'completed';

export type CategoryFilter = 'all' | 'personal' | 'work' | 'shopping' | 'health';

export interface FilterState {
  statusFilter: StatusFilter;
  categoryFilter: CategoryFilter;
  searchTerm: string;
}

export interface UseFiltersReturn extends FilterState {
  filteredItems: any[];
  setStatusFilter: (status: StatusFilter) => void;
  setCategoryFilter: (category: CategoryFilter) => void;
  setSearchTerm: (term: string) => void;
  clearFilters: () => void;
}
