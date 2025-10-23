import { useAppSelector } from "@/hooks/reduxHooks";
import TodosErrorState from "./TodosErrorState/TodosErrorState";
import TodosEmptyState from "./TodosEmptyState/TodosEmptyState";
import { getFilteredTodos } from "@/lib/filterTodos";
import TodosFilteredEmptyState from "./TodosFilteredEmptyState/TodosFilteredEmptyState";
import TodosList from "./TodosList/TodosList";

const TodosContainer = () => {
  const { todos, error, loading } = useAppSelector((state) => state.todos);
  const ui = useAppSelector((state) => state.ui);

  if (error) return <TodosErrorState error={error} />;

  if (todos.length === 0) return <TodosEmptyState loading={loading} />;

  const { pageTodos, totalTodos } = getFilteredTodos({ todos, ui });

  if (totalTodos === 0) return <TodosFilteredEmptyState />;

  return <TodosList todos={pageTodos} totalTodos={totalTodos} />;
};
export default TodosContainer;
