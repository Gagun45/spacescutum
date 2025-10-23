import AddTodoForm from "./TodosList/AddTodoForm/AddTodoForm";
import TodosList from "./TodosList/TodosList";

const TodosSection = () => {
  return (
    <section className="space-y-4">
      <span>Todos bar</span>
      <AddTodoForm />
      <TodosList />
    </section>
  );
};
export default TodosSection;
