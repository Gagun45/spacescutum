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
    <>
      <ClearTodosBtn />
      <div className="flex flex-col gap-4">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
};
export default TodosList;
