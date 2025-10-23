import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { fetchTodosFromApi } from "@/redux/slices/todosSlice";
import { ClipboardList, Loader2 } from "lucide-react";

const TodosEmptyState = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.todos);
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
        <ClipboardList className="h-7 w-7 text-muted-foreground" />
      </div>

      <div>
        <h3 className="text-lg font-semibold">Your todo list is empty</h3>
        <p className="mt-1 text-sm text-muted-foreground max-w-sm">
          Start by adding a new task above, or fetch some sample todos from the
          API to get started.
        </p>
      </div>

      <Button
        variant="outline"
        onClick={() => dispatch(fetchTodosFromApi())}
        className="mt-2 flex items-center gap-2"
        disabled={loading} // optional: disable while loading
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {loading ? "Fetching..." : "Fetch Sample Todos"}
      </Button>
    </div>
  );
};
export default TodosEmptyState;
