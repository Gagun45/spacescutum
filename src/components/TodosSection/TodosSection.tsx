import AddTodoForm from "./AddTodoForm/AddTodoForm";
import SearchBar from "./SearchBar/SearchBar";
import TodosList from "./TodosList/TodosList";

const TodosSection = () => {
  return (
    <section className="space-y-4">
      <div>
        <SearchBar />
      </div>
      <AddTodoForm />
      <TodosList />
    </section>
  );
};
export default TodosSection;
