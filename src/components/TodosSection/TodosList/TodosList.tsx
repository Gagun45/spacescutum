import { useAppSelector } from "@/hooks/reduxHooks";
import TodosLoadingState from "../TodosLoadingState/TodosLoadingState";
import TodosErrorState from "../TodosErrorState/TodosErrorState";
import TodosEmptyState from "../TodosEmptyState/TodosEmptyState";
import TodoItem from "./TodoItem/TodoItem";
import ClearTodosBtn from "./ClearTodosBtn/ClearTodosBtn";

const TodosList = () => {
  const { loading, todos, error } = useAppSelector((state) => state.todos);

  if (loading) return <TodosLoadingState />;

  if (error) return <TodosErrorState error={error} />;

  if (todos.length === 0) return <TodosEmptyState />;

  return (
    <div className="p-4 border-2 space-y-4">
      <ClearTodosBtn />
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
export default TodosList;
