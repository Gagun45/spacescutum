import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import ClearTodosBtn from "./ClearTodosBtn/ClearTodosBtn";
import SearchBar from "./SearchBar/SearchBar";
import FilterCompleted from "./FilterCompletedRadio/FilterCompletedRadio";
import SortBySelect from "./SortBySelect/SortBySelect";
import ShowOnPage from "./ShowOnPage/ShowOnPage";
import ResetFiltersBtn from "./ResetFiltersBtn/ResetFiltersBtn";

const SearchAndFilter = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <div className="flex items-center gap-4 justify-between flex-wrap">
          <AccordionTrigger className="max-w-fit">
            Search & Filter
          </AccordionTrigger>
          <ResetFiltersBtn />
          {/* <ClearTodosBtn /> */}
        </div>
        <AccordionContent className="space-y-4">
          <SearchBar />
          <div className="flex items-center justify-between flex-wrap gap-2">
            <ShowOnPage />
            <SortBySelect />
            <FilterCompleted />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default SearchAndFilter;
