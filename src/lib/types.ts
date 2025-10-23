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

export type SortBy =
  | "titleAsc"
  | "titleDesc"
  | "createdAtAsc"
  | "createdAtDesc";
export type FilterCompleted = "completed" | "incompleted" | "all";

export type UIState = {
  searchQuery: string;
  sortBy: SortBy;
  filterCompleted: FilterCompleted;
};

export type FilterCompletedOption = {
  value: FilterCompleted;
  label: string;
};

export type SortByOption = {
  value: SortBy;
  label: string;
};
