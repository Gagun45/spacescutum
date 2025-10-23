import AddTodoForm from "./AddTodoForm/AddTodoForm";
import SearchAndFilterMobile from "./SearchAndFilterMobile/SearchAndFilterMobile";
import TodosContainer from "./TodosContainer/TodosContainer";

const TodosSection = () => {
  return (
    <section className="space-y-4 grow">
      <AddTodoForm />
      <SearchAndFilterMobile />
      <TodosContainer />
    </section>
  );
};
export default TodosSection;
