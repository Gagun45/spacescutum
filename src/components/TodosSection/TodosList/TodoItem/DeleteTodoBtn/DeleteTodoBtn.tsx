import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { deleteTodo } from "@/redux/slices/todosSlice";
import { TrashIcon } from "lucide-react";

interface Props {
  todoId: string;
}

const DeleteTodoBtn = ({ todoId }: Props) => {
  const dispatch = useAppDispatch();
  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ todoId }));
  };
  return (
    <Button variant={"destructive"} onClick={handleDeleteTodo}>
      <TrashIcon />
    </Button>
  );
};
export default DeleteTodoBtn;
