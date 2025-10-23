import { useAppSelector } from "@/hooks/reduxHooks";
import TodosErrorState from "./TodosErrorState/TodosErrorState";
import TodosEmptyState from "./TodosEmptyState/TodosEmptyState";
import TodoItem from "./TodoItem/TodoItem";
import { getFilteredTodos } from "@/lib/filterTodos";

const TodosList = () => {
  const { todos, error } = useAppSelector((state) => state.todos);
  const ui = useAppSelector((state) => state.ui);

  if (error) return <TodosErrorState error={error} />;

  if (todos.length === 0) return <TodosEmptyState />;

  const filteredTodos = getFilteredTodos({ todos, ui });

  return (
    <div className="flex flex-col gap-4">
      {filteredTodos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
export default TodosList;
