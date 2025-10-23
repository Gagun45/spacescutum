import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ClearTodosBtn from "./ClearTodosBtn/ClearTodosBtn";
import SearchBar from "./SearchBar/SearchBar";
import FilterCompleted from "./FilterCompletedRadio/FilterCompletedRadio";
import SortBySelect from "./SortBySelect/SortBySelect";
import ShowOnPage from "./ShowOnPage/ShowOnPage";
import ResetFiltersBtn from "./ResetFiltersBtn/ResetFiltersBtn";
import { useAppSelector } from "@/hooks/reduxHooks";

const SearchAndFilter = () => {
  const { todos } = useAppSelector((s) => s.todos);
  if (todos.length === 0) return null;
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <div className="flex items-center justify-between flex-wrap p-2 gap-2">
          <AccordionTrigger className="max-w-fit">
            Search & Filter
          </AccordionTrigger>

          <ClearTodosBtn />
        </div>
        <AccordionContent className="space-y-4 p-2 ">
          <SearchBar />
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <ShowOnPage />
              <SortBySelect />
            </div>
            <FilterCompleted />
            <ResetFiltersBtn />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default SearchAndFilter;
