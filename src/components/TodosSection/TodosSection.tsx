import AddTodoForm from "./AddTodoForm/AddTodoForm";
import FilterCompleted from "./FilterCompleted/FilterCompleted";
import SearchBar from "./SearchBar/SearchBar";
import ClearTodosBtn from "./TodosList/ClearTodosBtn/ClearTodosBtn";
import TodosList from "./TodosList/TodosList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TodosSection = () => {
  return (
    <section className="space-y-4">
      <AddTodoForm />

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <div className="flex items-center">
            <AccordionTrigger className="max-w-fit">
              Search & Filter
            </AccordionTrigger>
            <ClearTodosBtn />
          </div>
          <AccordionContent className="space-y-4">
            <SearchBar />
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span>Show on page</span>
              <span>Sort By</span>
              <FilterCompleted />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <TodosList />
    </section>
  );
};
export default TodosSection;
