import type { Todo, UIState } from "./types";

interface Props {
  todos: Todo[];
  ui: UIState;
}

const getFilteredTodos = ({ todos, ui }: Props) => {
  const { searchQuery, filterCompleted, sortBy, showOnPage, currentPage } = ui;

  let filteredTodos = [...todos];

  //search query
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filteredTodos = filteredTodos.filter((t) =>
      t.title.toLowerCase().includes(q)
    );
  }

  //filter by completion
  if (filterCompleted === "completed")
    filteredTodos = filteredTodos.filter((t) => t.completed);
  if (filterCompleted === "incompleted")
    filteredTodos = filteredTodos.filter((t) => !t.completed);

  //sort by

  switch (sortBy) {
    case "createdAtAsc":
      filteredTodos.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      break;
    case "createdAtDesc":
      filteredTodos.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
    case "titleAsc":
      filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "titleDesc":
      filteredTodos.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }
  const totalTodos = filteredTodos.length;
  //show on page
  const pageTodos = filteredTodos.slice(
    showOnPage * (currentPage - 1),
    showOnPage * currentPage
  );

  return { pageTodos, totalTodos };
};

export { getFilteredTodos };
