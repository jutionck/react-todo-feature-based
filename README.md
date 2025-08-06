# React Todo Feature Based

Create a feature-based React application for managing todos with Bun, TypeScript, Tailwind CSS, and Vite. The project should be structured to allow for easy scalability and maintainability, with a focus on modularity and reusability.

![MVP Project](mvp.png)

## 🛠 Tech Stack

### **Core Technologies**

- **⚛️ React 19.1.0**: Latest React with concurrent features
- **📘 TypeScript**: Full type safety and IntelliSense
- **🎨 Tailwind CSS v4.1.11**: Utility-first CSS framework
- **⚡ Vite 7.0.4**: Lightning-fast build tool
- **🟡 Bun 1.0.4**: Ultra-fast JavaScript runtime and package manager

### **State Management**

- **🐻 Zustand**: Lightweight state management
- **💾 Zustand Persist**: LocalStorage persistence middleware

### **Development Tools**

- **🔧 ESLint**: Code linting and formatting
- **🏗️ TypeScript Config**: Strict type checking
- **📦 Path Mapping**: Clean import aliases
- **🔄 Hot Reload**: Instant development feedback

### **UI & UX**

- **🎯 Lucide React**: Beautiful icon library
- **🎨 Custom Design System**: Consistent UI components
- **📱 Responsive Design**: Mobile-first approach
- **✨ Smooth Animations**: CSS transitions and hover effects

## 🚀 Quick Start

### **Prerequisites**

- **Bun** (latest version) - [Install Bun](https://bun.sh)
- **Node.js** 18+ (for compatibility)
- **Git** for version control

### **Installation**

```bash
# Clone the repository
git clone https://github.com/jutionck/react-todo-feature-based.git

# Navigate to project directory
cd react-todo-feature-based

# Install dependencies
bun install

# Start development server
bun run dev

# Open your browser and navigate to
# http://localhost:5173
```

### **Available Scripts**

```bash
# Development
bun run dev          # Start development server

# Building
bun run build        # Build for production
bun run preview      # Preview production build

# Code Quality
bun run lint         # Run ESLint
bun run type-check   # Run TypeScript compiler
```

### **Project Setup**

The project uses **Bun** as the runtime and package manager for optimal performance:

- ⚡ **50x faster** than npm for package installation
- 🚀 **Built-in bundler** and test runner
- 🔧 **TypeScript support** out of the box
- 📦 **Better dependency resolution**

## Structure Project

```
react-todo-feature-based/
├── src/
│   ├── features/
│   │   ├── app/
│   │   │   ├── hooks/
│   │   │   │   └── useAppState.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── todos/
│   │   │   ├── api/
│   │   │   │   ├── todoApi.ts
│   │   │   │   ├── todoApi.mock.ts
│   │   │   │   └── todoApi.types.ts
│   │   │   ├── components/
│   │   │   │   ├── TodoList.tsx
│   │   │   │   ├── TodoItem.tsx
│   │   │   │   ├── TodoForm.tsx
│   │   │   │   ├── TodoStats.tsx
│   │   │   │   ├── ClearCompletedButton.tsx
│   │   │   │   └── EditTodoModal.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useTodos.ts
│   │   │   │   ├── useCreateTodo.ts
│   │   │   │   ├── useUpdateTodo.ts
│   │   │   │   ├── useDeleteTodo.ts
│   │   │   │   ├── useToggleTodo.ts
│   │   │   │   ├── useTodoFilters.ts
│   │   │   │   ├── useTodoStats.ts
│   │   │   │   └── useTodoOperations.ts
│   │   │   ├── store/
│   │   │   │   └── todoStore.ts
│   │   │   ├── types/
│   │   │   │   └── todo.types.ts
│   │   │   ├── utils/
│   │   │   │   └── todoHelpers.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── filters/
│   │   │   ├── components/
│   │   │   │   ├── FilterBar.tsx
│   │   │   │   └── SearchBar.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useFilters.ts
│   │   │   ├── store/
│   │   │   │   └── filterStore.ts
│   │   │   ├── types/
│   │   │   │   └── filter.types.ts
│   │   │   └── index.ts
│   │   │
│   │   └── statistics/
│   │       ├── components/
│   │       │   ├── StatsOverview.tsx
│   │       │   └── StatCard.tsx
│   │       ├── hooks/
│   │       │   └── useStatistics.ts
│   │       └── index.ts
│   │
│   ├── shared/
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   ├── config.ts
│   │   │   └── interceptors.ts
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Select.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Badge.tsx
│   │   │   │   ├── EmptyState.tsx
│   │   │   │   ├── PaginationControls.tsx
│   │   │   │   └── ItemsPerPageSelector.tsx
│   │   │   └── layout/
│   │   │       ├── Header.tsx
│   │   │       └── Container.tsx
│   │   ├── hooks/
│   │   │   ├── useApiError.ts
│   │   │   ├── useLocalStorage.ts
│   │   │   ├── useDebounce.ts
│   │   │   └── usePagination.ts
│   │   ├── utils/
│   │   │   └── cn.ts
│   │   └── types/
│   │       └── common.types.ts
│   │
│   ├── app/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── main.tsx
│   │
│   ├── index.css
│   └── vite-env.d.ts
│
├── .gitignore
├── bun.lockb
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Features Implemented

### 🎯 **Core Features**

- ✅ **Todo Management**: Create, read, update, delete todos
- ✅ **Todo Status**: Toggle between completed/pending
- ✅ **Rich Todo Data**: Title, description, priority, category, due date
- ✅ **Persistent Storage**: LocalStorage with Zustand persist middleware

### 🔍 **Filtering & Search**

- ✅ **Status Filter**: All, Active, Completed todos
- ✅ **Category Filter**: Personal, Work, Shopping, Health
- ✅ **Search**: Real-time search in title and description
- ✅ **Combined Filters**: Multiple filters work together

### 📄 **Pagination**

- ✅ **Items Per Page**: 5, 10, 20, or Show All options
- ✅ **Smart Pagination**: Previous/Next with page numbers
- ✅ **Pagination Info**: Current page and total items display
- ✅ **Responsive Design**: Works on all screen sizes

### 📊 **Statistics & Analytics**

- ✅ **Todo Stats**: Pending, completed, and total counts
- ✅ **Completion Rate**: Visual progress indicators
- ✅ **Real-time Updates**: Stats update with filter changes

### 🎨 **UI/UX Features**

- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Consistent Design System**: Shared UI components
- ✅ **Smooth Animations**: Transitions and hover effects
- ✅ **Empty States**: Helpful messages when no data
- ✅ **Loading States**: Better user experience

### 🛠 **Technical Features**

- ✅ **TypeScript**: Full type safety
- ✅ **Feature-Based Architecture**: Modular and scalable
- ✅ **Custom Hooks**: Reusable business logic
- ✅ **State Management**: Zustand for global state
- ✅ **Component Library**: Shared UI components
- ✅ **Clean Code**: Following best practices

## Key Components

### 📦 **New Components After Refactoring**

#### **App Level**

- `useAppState`: Central hook for all app-level state management

#### **Todo Feature**

- `TodoStats`: Statistics display component
- `ClearCompletedButton`: Dedicated clear completed button
- `useTodoFilters`: Centralized filtering logic
- `useTodoStats`: Statistics calculation hook
- `useTodoOperations`: Todo operations encapsulation

#### **Shared Components**

- `EmptyState`: Reusable empty state component
- `PaginationControls`: Complete pagination UI
- `ItemsPerPageSelector`: Items per page dropdown

#### **Filter Feature**

- `filterStore`: Zustand store for filter state
- Enhanced `FilterBar`: Using shared UI components

## Architecture Highlights

### 🏗 **Clean Architecture**

- **Feature-based structure**: Each feature is self-contained
- **Shared components**: Reusable UI elements
- **Custom hooks**: Business logic separation
- **Type safety**: Full TypeScript coverage

### 🔄 **State Management**

- **Zustand stores**: Lightweight and performant
- **Persistent state**: LocalStorage integration
- **Reactive updates**: Real-time UI updates

### 🎯 **Best Practices**

- **Single Responsibility**: Each component/hook has one job
- **DRY Principle**: No code duplication
- **Composition**: Building complex UIs from simple parts
- **Testability**: Easy to unit test individual pieces

## 📱 MVP Demo & Screenshots

### 🚀 **Getting Started**

To see the MVP in action, run the following commands:

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Open browser and navigate to
http://localhost:5173
```

### 🎯 **MVP Features Showcase**

#### **1. Main Dashboard**

The main dashboard displays a clean, modern interface with:

- **Header**: Application title with consistent branding
- **Todo Form**: Quick add form with title, description, priority, and category
- **Filter Bar**: Status filters (All/Active/Completed), category dropdown, and search
- **Statistics Overview**: Real-time stats showing completion rates and counts
- **Todo List**: Paginated list with smart sorting (incomplete first)

#### **2. Todo Management**

- ✅ **Add Todo**: Rich form with validation
- ✅ **Edit Todo**: Inline editing with modal popup
- ✅ **Toggle Status**: Click checkbox to mark complete/incomplete
- ✅ **Delete Todo**: Remove with confirmation
- ✅ **Bulk Actions**: Clear all completed todos

#### **3. Filtering & Search**

- ✅ **Status Filters**: View all, active, or completed todos
- ✅ **Category Filters**: Filter by Personal, Work, Shopping, Health
- ✅ **Real-time Search**: Search in title and description
- ✅ **Combined Filtering**: Multiple filters work together seamlessly

#### **4. Pagination System**

- ✅ **Items Per Page**: Choose 5, 10, 20, or Show All
- ✅ **Smart Navigation**: Previous/Next buttons with page numbers
- ✅ **Page Info**: "Showing X-Y of Z items" display
- ✅ **Responsive**: Works perfectly on mobile and desktop

#### **5. Statistics & Analytics**

- ✅ **Live Stats**: Pending and completed counts update in real-time
- ✅ **Progress Indicators**: Visual completion rate display
- ✅ **Filtered Stats**: Statistics adapt to current filters
- ✅ **Todo Overview**: Comprehensive statistics dashboard

#### **6. User Experience**

- ✅ **Responsive Design**: Mobile-first, works on all screen sizes
- ✅ **Smooth Animations**: Hover effects and transitions
- ✅ **Empty States**: Helpful messages when no data
- ✅ **Loading States**: Clean loading indicators
- ✅ **Consistent UI**: Unified design system throughout

### 🎨 **Design System**

The MVP implements a complete design system with:

- **Primary Colors**: Blue gradient theme (`primary-50` to `primary-600`)
- **Typography**: Consistent font sizes and weights
- **Spacing**: Systematic padding and margins
- **Components**: Reusable Button, Input, Select, Modal, Badge components
- **Layout**: Container-based responsive layout
- **Icons**: Lucide React icons throughout

### 📊 **Sample Data**

The application comes with sample data to showcase features:

- **5 Sample Todos** with different categories and priorities
- **Mixed Status**: Both completed and pending todos
- **Rich Content**: Todos with descriptions and due dates
- **Categories**: Examples from all category types

### 🔧 **Developer Experience**

- **Hot Reload**: Instant updates during development
- **TypeScript**: Full type safety with IntelliSense
- **Error Handling**: Comprehensive error boundaries
- **Console Logs**: Clean development logs
- **Build Optimization**: Production-ready builds

### 🚀 **Performance Features**

- **Lazy Loading**: Components load as needed
- **Memoization**: Optimized re-renders with useMemo
- **Efficient Filtering**: Smart filtering without unnecessary re-renders
- **Pagination**: Handle large datasets efficiently
- **Local Storage**: Persistent state across sessions

---

_To see all these features in action, simply run `bun run dev` and open http://localhost:5173 in your browser!_

## 📋 Data Structure

### **Todo Interface**

```typescript
interface Todo {
  id: string; // Unique identifier
  title: string; // Todo title
  description?: string; // Optional description
  completed: boolean; // Completion status
  priority: 'low' | 'medium' | 'high'; // Priority level
  category: 'personal' | 'work' | 'shopping' | 'health'; // Category
  createdAt: Date; // Creation timestamp
  updatedAt: Date; // Last update timestamp
  dueDate?: Date; // Optional due date
}
```

### **Filter State**

```typescript
interface FilterState {
  filter: 'all' | 'active' | 'completed'; // Status filter
  categoryFilter: 'all' | 'personal' | 'work' | 'shopping' | 'health'; // Category filter
  searchTerm: string; // Search query
}
```

## 🏗 Project Architecture

### **Feature-Based Structure**

Each feature is completely self-contained with:

- **Components**: UI components specific to the feature
- **Hooks**: Business logic and state management
- **Types**: TypeScript interfaces and types
- **Utils**: Helper functions and utilities
- **Store**: Zustand store for global state
- **API**: Data fetching and API integration

### **Dependency Flow**

```
App Level (useAppState)
    ↓
Feature Level (useTodoOperations, useFilters)
    ↓
Shared Level (usePagination, Button, Input)
```

### **State Management Pattern**

- **Global State**: Zustand stores for cross-component data
- **Local State**: React useState for component-specific state
- **Derived State**: useMemo for computed values
- **Side Effects**: useEffect for external interactions

## 🧪 Testing Strategy

### **Unit Testing**

- **Custom Hooks**: Test business logic in isolation
- **Components**: Test UI behavior and interactions
- **Utils**: Test helper functions and calculations
- **Stores**: Test state management logic

### **Integration Testing**

- **Feature Flow**: Test complete user workflows
- **Filter Combinations**: Test multiple filters together
- **Pagination**: Test pagination with different data sets

### **E2E Testing**

- **User Journeys**: Complete todo management workflows
- **Cross-browser**: Ensure compatibility across browsers
- **Responsive**: Test on different screen sizes

## 🚀 Deployment

### **Build Process**

```bash
# Build for production
bun run build

# Preview build locally
bun run preview

# Build artifacts in dist/ directory
```

### **Environment Variables**

```env
# API Configuration (if using external API)
VITE_API_BASE_URL=https://api.example.com
VITE_API_KEY=your-api-key

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false
```

### **Production Optimizations**

- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Remove unused code
- **Asset Optimization**: Minified CSS and JS
- **Gzip Compression**: Smaller bundle sizes

## 🤝 Contributing

### **Development Workflow**

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Code Standards**

- **TypeScript**: Strict mode enabled
- **ESLint**: Follow configured rules
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Clear commit messages

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Juti Noor Cahyo**

- GitHub: [@jutionck](https://github.com/jutionck)
- LinkedIn: [Juti Noor Cahyo](https://linkedin.com/in/jutionck)

---

## ⭐ Show Your Support

Give a ⭐ if this project helped you learn about modern React development patterns!
