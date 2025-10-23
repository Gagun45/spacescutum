import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { addTodo } from "@/redux/slices/todosSlice";
import { useState } from "react";

const AddTodoForm = () => {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const dispatch = useAppDispatch();
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTitle = newTodoTitle.trim();
    if (!trimmedTitle) return;
    dispatch(addTodo({ title: trimmedTitle }));
    setNewTodoTitle("");
  };
  return (
    <form
      className="flex flex-1 min-w-48 items-center gap-2"
      onSubmit={handleAddTodo}
    >
      <Input
        placeholder="New todo..."
        value={newTodoTitle}
        onChange={({ target }) => setNewTodoTitle(target.value)}
      />
      <Button className="w-24" disabled={!newTodoTitle}>
        Add Todo
      </Button>
    </form>
  );
};
export default AddTodoForm;
