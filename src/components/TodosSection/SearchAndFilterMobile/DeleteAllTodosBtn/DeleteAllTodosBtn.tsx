import { Button, buttonVariants } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { clearTodos } from "@/redux/slices/todosSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DeleteAllTodosBtn = () => {
  const { todos } = useAppSelector((s) => s.todos);
  const dispatch = useAppDispatch();
  const onClearTodos = () => {
    dispatch(clearTodos());
  };
  if (todos.length === 0) return null;
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Delete all todos</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete all
            todos.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="justify-between!">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className={buttonVariants({ variant: "destructive" })}
            onClick={onClearTodos}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    // <Button variant={'ghost'} onClick={onClearTodos}>
    //   Delete all todos
    // </Button>
  );
};
export default DeleteAllTodosBtn;
