import type { Todo } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import TodoItem from "./TodoItem/TodoItem";
import Pagination from "./Pagination/Pagination";

interface Props {
  todos: Todo[];
  totalTodos: number;
}

const TodosList = ({ todos, totalTodos }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="italic ">Found todos: {totalTodos} </span>
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TodoItem todo={todo} />
          </motion.div>
        ))}
      </AnimatePresence>
      <Pagination totalTodos={totalTodos} />
    </div>
  );
};
export default TodosList;
