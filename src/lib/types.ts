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

export type SortField = "createdAt" | "title";
export type SortOrder = "asc" | "desc";
export type FilterCompleted = "completed" | "incompleted" | "all";

export type SortBy = {
  field: SortField;
  order: SortOrder;
};

export type UIState = {
  searchQuery: string;
  sortBy: SortBy;
  filterCompleted: FilterCompleted;
};

export type FilterCompletedOption = {
  value: FilterCompleted;
  label: string;
};
