import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { clearTodos } from "@/redux/slices/todosSlice";

const ClearTodosBtn = () => {
  const dispatch = useAppDispatch();
  const onClearTodos = () => {
    dispatch(clearTodos());
  };
  return <Button className="w-36 ml-auto" onClick={onClearTodos}>Clear todos</Button>;
};
export default ClearTodosBtn;
