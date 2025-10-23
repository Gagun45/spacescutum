import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { deleteTodo } from "@/redux/slices/todosSlice";

interface Props {
  todoId: string;
}

const DeleteTodoBtn = ({ todoId }: Props) => {
  const dispatch = useAppDispatch();
  const onDeleteTodo = () => {
    dispatch(deleteTodo({ todoId }));
  };
  return <Button onClick={onDeleteTodo}>DeleteTodo</Button>;
};
export default DeleteTodoBtn;
