import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { fetchTodosFromApi } from "@/redux/slices/todosSlice";

interface Props {
  error: string;
}

const TodosErrorState = ({ error }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
      <p className="text-sm text-red-500 font-medium">
        Oops! Something went wrong:
      </p>
      <p className="text-sm text-muted-foreground">{error}</p>
      <Button
        variant="outline"
        onClick={() => dispatch(fetchTodosFromApi())}
        className="mt-2"
      >
        Retry
      </Button>
    </div>
  );
};
export default TodosErrorState;
