import type { Todo } from "@/lib/types";
import DeleteTodoBtn from "./DeleteTodoBtn/DeleteTodoBtn";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { toggleTodoCompleted } from "@/redux/slices/todosSlice";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    dispatch(toggleTodoCompleted({ todoId: todo.id }));
  };
  return (
    <article className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
      <div className="flex items-center justify-between">
        <Label
          className={`flex items-center gap-2 cursor-pointer ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          <Checkbox
            id={todo.id}
            checked={todo.completed}
            onCheckedChange={handleToggle}
          />

          {todo.title}
        </Label>

        <DeleteTodoBtn todoId={todo.id} />
      </div>
      <time className="text-sm text-gray-500">
        Created: {new Date(todo.createdAt).toLocaleString()}
      </time>
    </article>
  );
};
export default TodoItem;
