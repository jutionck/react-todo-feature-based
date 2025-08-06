import { useFilters } from "@/features/filters";
import { useTodoStore, useTodoFilters, useTodoStats, useTodoOperations } from "@/features/todos";

export const useAppState = () => {
  const { todos } = useTodoStore();
  const { filteredTodos } = useTodoFilters(todos);
  const { completed } = useTodoStats(todos);
  const todoOperations = useTodoOperations();
  const filterState = useFilters();

  return {
    todos,
    filteredTodos,
    completedCount: completed,

    ...todoOperations,

    ...filterState,
  };
};
