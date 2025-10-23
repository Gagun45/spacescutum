import type { Todo } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import TodoItem from "./TodoItem/TodoItem";

interface Props {
  todos: Todo[];
}

const TodosList = ({ todos }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5 }}
          >
            <TodoItem todo={todo} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
export default TodosList;
