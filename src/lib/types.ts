export type ExternalTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
};

export type TodosState = {
  todos: Todo[];
  loading: boolean;
  error?: string | null;
};
