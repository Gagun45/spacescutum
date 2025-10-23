import type { Todo, UIState } from "./types";

interface Props {
  todos: Todo[];
  ui: UIState;
}

const getFilteredTodos = ({ todos, ui }: Props) => {
  const { searchQuery } = ui;
  let filtered = [...todos];
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter((t) => t.title.toLowerCase().includes(q));
  }
  return filtered;
};

export { getFilteredTodos };
