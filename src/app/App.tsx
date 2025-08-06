import { TodoForm } from '@features/todos/components/TodoForm';
import { TodoList } from '@features/todos/components/TodoList';
import { ClearCompletedButton } from '@features/todos/components/ClearCompletedButton';
import { FilterBar } from '@features/filters/components/FilterBar';
import { useAppState } from '@/features/app/hooks/useAppState';
import { Header } from '@/shared/components/layout/Header';
import { Container } from '@/shared/components/layout/Container';
import { StatsOverview } from '@/features/statistics';
import { EditTodoModal } from '@/features/todos';

function App() {
  const {
    todos,
    filteredTodos,
    completedCount,

    editingTodo,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    handleEdit,
    handleSave,
    handleCancelEdit,

    filter,
    categoryFilter,
    searchTerm,
    setFilter,
    setCategoryFilter,
    setSearchTerm,
  } = useAppState();

  return (
    <div className='min-h-screen bg-gradient-to-br from-primary-50 to-primary-100'>
      <Header />

      <Container>
        <div className='py-8 space-y-6'>
          <TodoForm onSubmit={addTodo} />

          <FilterBar
            statusFilter={filter}
            onStatusChange={setFilter}
            categoryFilter={categoryFilter}
            onCategoryChange={setCategoryFilter}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <StatsOverview todos={filteredTodos} />

          <div className='bg-white/95 backdrop-blur-sm rounded-xl shadow-sm p-6 border border-gray-100'>
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onEdit={handleEdit}
              onDelete={deleteTodo}
            />
          </div>

          <ClearCompletedButton
            completedCount={completedCount}
            onClear={clearCompleted}
          />
        </div>
      </Container>

      {editingTodo && (
        <EditTodoModal
          todo={editingTodo}
          onSave={handleSave}
          onClose={handleCancelEdit}
        />
      )}
    </div>
  );
}

export default App;
