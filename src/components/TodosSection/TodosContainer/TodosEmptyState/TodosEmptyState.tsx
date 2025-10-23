import { ClipboardList, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/reduxHooks";
import StateWrapper from "../StateWrapper";
import { fetchTodosFromApi } from "@/redux/slices/todosSlice";

const TodosEmptyState = ({ loading }: { loading: boolean }) => {
  const dispatch = useAppDispatch();

  return (
    <StateWrapper>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
        <ClipboardList className="h-7 w-7 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold">Your todo list is empty</h3>
      <p className="text-sm text-muted-foreground max-w-sm">
        Start by adding a new task above, or fetch some sample todos from the
        API to get started.
      </p>
      <Button
        variant="outline"
        onClick={() => dispatch(fetchTodosFromApi())}
        className="mt-2 flex items-center gap-2"
        disabled={loading}
      >
        {loading && <Loader className="animate-spin" />}
        {loading ? "Fetching..." : "Fetch Sample Todos"}
      </Button>
    </StateWrapper>
  );
};

export default TodosEmptyState;
