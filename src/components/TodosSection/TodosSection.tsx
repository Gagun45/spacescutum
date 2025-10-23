import AddTodoForm from "./AddTodoForm/AddTodoForm";
import SearchAndFilter from "./SearchAndFilter/SearchAndFilter";
import TodosList from "./TodosList/TodosList";

const TodosSection = () => {
  return (
    <section className="space-y-4 ">
      <AddTodoForm />
      <SearchAndFilter />
      <TodosList />
    </section>
  );
};
export default TodosSection;
