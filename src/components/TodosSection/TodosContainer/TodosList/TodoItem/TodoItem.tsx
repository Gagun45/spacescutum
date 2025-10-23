import type { Todo } from "@/lib/types";
import DeleteTodoBtn from "./DeleteTodoBtn/DeleteTodoBtn";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { editTodoTitle, toggleTodoCompleted } from "@/redux/slices/todosSlice";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import EditTodoBtn from "./EditTodoBtn/EditTodoBtn";
import TodoTitle from "./TodoTitle/TodoTitle";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState(todo.title);
  const handleCancelEdit = () => {
    setNewTodoTitle(todo.title);
    setEditMode(false);
  };
  const handleSaveEdit = () => {
    if (!newTodoTitle || todo.title === newTodoTitle) {
      handleCancelEdit();
      return;
    }
    dispatch(editTodoTitle({ todoId: todo.id, newTitle: newTodoTitle }));
    setEditMode(false);
  };
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    dispatch(toggleTodoCompleted({ todoId: todo.id }));
  };
  return (
    <article className="flex flex-col gap-2 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex flex-1 items-center gap-2 min-w-36">
          <Checkbox
            id={todo.id}
            checked={todo.completed}
            onCheckedChange={handleToggle}
          />
          <TodoTitle
            todo={todo}
            editMode={editMode}
            newTodoTitle={newTodoTitle}
            setNewTodoTitle={setNewTodoTitle}
            handleCancelEdit={handleCancelEdit}
            handleSaveEdit={handleSaveEdit}
          />
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <EditTodoBtn
            setEditMode={setEditMode}
            editMode={editMode}
            handleCancelEdit={handleCancelEdit}
            handleSaveEdit={handleSaveEdit}
          />
          <DeleteTodoBtn todoId={todo.id} />
        </div>
      </div>
    </article>
  );
};
export default TodoItem;
