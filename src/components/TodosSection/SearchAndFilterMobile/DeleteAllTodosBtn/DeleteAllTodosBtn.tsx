import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { clearTodos } from "@/redux/slices/todosSlice";

const DeleteAllTodosBtn = () => {
  const { todos } = useAppSelector((s) => s.todos);
  const dispatch = useAppDispatch();
  const onClearTodos = () => {
    dispatch(clearTodos());
  };
  if (todos.length === 0) return null;
  return (
    <Button variant={'ghost'} className="w-24" onClick={onClearTodos}>
      Delete all todos
    </Button>
  );
};
export default DeleteAllTodosBtn;
