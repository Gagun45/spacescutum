import type { Todo, UIState } from "./types";

interface Props {
  todos: Todo[];
  ui: UIState;
}

const getFilteredTodos = ({ todos, ui }: Props) => {
  const { searchQuery, filterCompleted } = ui;

  let filtered = [...todos];

  //search query
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter((t) => t.title.toLowerCase().includes(q));
  }

  //filter by completion
  if (filterCompleted === "completed")
    filtered = filtered.filter((t) => t.completed);
  if (filterCompleted === "incompleted")
    filtered = filtered.filter((t) => !t.completed);

  //sort by
  //show on page

  return filtered;
};

export { getFilteredTodos };
