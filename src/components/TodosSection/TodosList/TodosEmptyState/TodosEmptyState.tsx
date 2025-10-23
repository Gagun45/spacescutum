import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { fetchTodosFromApi } from "@/redux/slices/todosSlice";

const TodosEmptyState = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col gap-2 p-4">
      <p>No todos yet. You can fetch todos from API or add your own</p>
      <div className="flex gap-2">
        <Button onClick={() => dispatch(fetchTodosFromApi())}>
          Fetch Todos
        </Button>
      </div>
    </div>
  );
};
export default TodosEmptyState;
