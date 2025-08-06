# React Todo Feature Based

Create a feature-based React application for managing todos with Bun, TypeScript, Tailwind CSS, and Vite. The project should be structured to allow for easy scalability and maintainability, with a focus on modularity and reusability.

## Structure Project

```
todo-app/
├── src/
│   ├── features/
│   │   ├── todos/
│   │   │   ├── api/
│   │   │   │   ├── todoApi.ts
│   │   │   │   ├── todoApi.mock.ts
│   │   │   │   └── todoApi.types.ts
│   │   │   ├── components/
│   │   │   │   ├── TodoList.tsx
│   │   │   │   ├── TodoItem.tsx
│   │   │   │   ├── TodoForm.tsx
│   │   │   │   └── EditTodoModal.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useTodos.ts
│   │   │   │   ├── useCreateTodo.ts
│   │   │   │   ├── useUpdateTodo.ts
│   │   │   │   ├── useDeleteTodo.ts
│   │   │   │   └── useToggleTodo.ts
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
│   │   │   │   └── Badge.tsx
│   │   │   └── layout/
│   │   │       ├── Header.tsx
│   │   │       └── Container.tsx
│   │   ├── hooks/
│   │   │   ├── useApiError.ts
│   │   │   ├── useLocalStorage.ts
│   │   │   └── useDebounce.ts
│   │   ├── utils/
│   │   │   └── cn.ts
│   │   └── types/
│   │       └── common.types.ts
│   │
│   ├── app/
│   │   ├── App.tsx
│   │   └── App.css
│   │
│   ├── main.tsx
│   └── index.css
│   ├── vite-env.d.ts
│
├── .gitignore
├── bun.lockb
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig..app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```
