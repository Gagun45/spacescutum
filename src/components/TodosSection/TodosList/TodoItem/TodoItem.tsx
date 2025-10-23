import type { Todo } from "@/lib/types";
import DeleteTodoBtn from "./DeleteTodoBtn/DeleteTodoBtn";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  return (
    <div className="flex flex-col gap-1 border-b pb-2">
      <span>Id: {todo.id}</span>
      <span>Title: {todo.title}</span>
      <span>Completed: {todo.completed ? "Yes" : "No"}</span>
      <span>CreatedAt: {new Date(todo.createdAt).toLocaleString()}</span>
      <DeleteTodoBtn todoId={todo.id} />
    </div>
  );
};
export default TodoItem;
