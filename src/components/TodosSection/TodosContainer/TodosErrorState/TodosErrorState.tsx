import { Button } from "@/components/ui/button";
import StateWrapper from "../StateWrapper";
import { fetchTodosFromApi } from "@/redux/slices/todosSlice";
import { useAppDispatch } from "@/hooks/reduxHooks";

interface Props {
  error?: string;
}

const TodosErrorState = ({ error }: Props) => {
  const dispatch = useAppDispatch();
  if (!error) return null;

  return (
    <StateWrapper>
      <p className="text-sm text-red-500 font-medium">Oops! Something went wrong:</p>
      <p className="text-sm text-muted-foreground">{error}</p>
      <Button
        variant="outline"
        onClick={() => dispatch(fetchTodosFromApi())}
        className="mt-2"
      >
        Retry
      </Button>
    </StateWrapper>
  );
};

export default TodosErrorState;
