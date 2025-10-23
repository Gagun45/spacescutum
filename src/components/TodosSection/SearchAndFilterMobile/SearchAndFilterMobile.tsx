import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SearchBar from "./SearchBar/SearchBar";
import FilterCompleted from "./FilterCompletedRadio/FilterCompletedRadio";
import SortBySelect from "./SortBySelect/SortBySelect";
import ShowOnPage from "./ShowOnPageSelect/ShowOnPageSelect";
import { useAppSelector } from "@/hooks/reduxHooks";
import ClearFiltersBtn from "../../General/ClearFiltersBtn/ClearFiltersBtn";

const SearchAndFilterMobile = () => {
  const { todos } = useAppSelector((s) => s.todos);
  if (todos.length === 0) return null;
  return (
    <Accordion type="single" collapsible className="xl:hidden">
      <AccordionItem value="item-1" className="space-y-4">
        <AccordionTrigger className="max-w-fit">
          Search & Filter
        </AccordionTrigger>

        <AccordionContent className="space-y-4 overflow-visible!">
          <SearchBar />
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <ShowOnPage />
              <SortBySelect />
            </div>
            <FilterCompleted />
            <ClearFiltersBtn />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default SearchAndFilterMobile;
