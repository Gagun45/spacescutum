import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ClearTodosBtn from "./ClearTodosBtn/ClearTodosBtn";
import SearchBar from "./SearchBar/SearchBar";
import FilterCompleted from "./FilterCompleted/FilterCompleted";
import SortBySelect from "./SortBySelect/SortBySelect";

const SearchAndFilter = () => {
  return (
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
            <SortBySelect />
            <FilterCompleted />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default SearchAndFilter;
