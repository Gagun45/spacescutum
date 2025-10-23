import type { Todo, UIState } from "./types";

interface Props {
  todos: Todo[];
  ui: UIState;
}

const getFilteredTodos = ({ todos, ui }: Props) => {
  const { searchQuery, filterCompleted, sortBy, showOnPage } = ui;

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

  switch (sortBy) {
    case "createdAtAsc":
      filtered.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      break;
    case "createdAtDesc":
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
    case "titleAsc":
      filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "titleDesc":
      filtered.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }
  //show on page
  const paginated = filtered.slice(0, showOnPage);

  return paginated;
};

export { getFilteredTodos };
