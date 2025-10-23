import AddTodoForm from "./AddTodoForm/AddTodoForm";
import SearchAndFilter from "./SearchAndFilter/SearchAndFilter";
import TodosContainer from "./TodosContainer/TodosContainer";

const TodosSection = () => {
  return (
    <section className="space-y-4">
      <AddTodoForm />
      <SearchAndFilter />
      <TodosContainer />
    </section>
  );
};
export default TodosSection;
