import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { fetchTodosFromApi } from "@/redux/slices/todosSlice";

interface Props {
  error: string;
}

const TodosErrorState = ({ error }: Props) => {
  const dispatch = useAppDispatch();
  if (!error) return null;
  return (
    <div className="p-4">
      <p className="text-red-500">Error: {error}</p>
      <Button onClick={() => dispatch(fetchTodosFromApi())}>Retry</Button>
    </div>
  );
};
export default TodosErrorState;
