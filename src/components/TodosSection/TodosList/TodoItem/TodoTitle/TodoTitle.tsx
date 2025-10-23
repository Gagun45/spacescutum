import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Todo } from "@/lib/types";
import type { KeyboardEvent } from "react";

interface Props {
  todo: Todo;
  editMode: boolean;
  handleSaveEdit: () => void;
  handleCancelEdit: () => void;
  newTodoTitle: string;
  setNewTodoTitle: React.Dispatch<React.SetStateAction<string>>;
}

const TodoTitle = ({
  todo,
  editMode,
  handleCancelEdit,
  handleSaveEdit,
  newTodoTitle,
  setNewTodoTitle,
}: Props) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSaveEdit();
    if (e.key === "Escape") handleCancelEdit();
  };

  if (editMode)
    return (
      <Input
        autoFocus
        onBlur={handleSaveEdit}
        onKeyDown={handleKeyDown}
        value={newTodoTitle}
        onChange={({ target }) => setNewTodoTitle(target.value)}
      />
    );
  return (
    <Label
      htmlFor={todo.id}
      className={`cursor-pointer ${
        todo.completed ? "line-through text-gray-400" : ""
      }`}
    >
      {todo.title}
    </Label>
  );
};
export default TodoTitle;
