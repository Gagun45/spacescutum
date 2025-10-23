import ClearFiltersBtn from "../General/ClearFiltersBtn/ClearFiltersBtn";
import FilterCompletedRadio from "../TodosSection/SearchAndFilterMobile/FilterCompletedRadio/FilterCompletedRadio";
import SearchBar from "../TodosSection/SearchAndFilterMobile/SearchBar/SearchBar";
import ShowOnPageSelect from "../TodosSection/SearchAndFilterMobile/ShowOnPageSelect/ShowOnPageSelect";
import SortBySelect from "../TodosSection/SearchAndFilterMobile/SortBySelect/SortBySelect";

const SearchAndFilterDesktop = () => {
  return (
    <div className="hidden xl:flex w-96 gap-6 flex-col border-r pr-2">
      <h2 className="text-lg font-semibold text-center tracking-wide">
        Search & Filters
      </h2>
      <SearchBar />
      <ShowOnPageSelect />
      <SortBySelect />
      <FilterCompletedRadio />
      <ClearFiltersBtn />
    </div>
  );
};
export default SearchAndFilterDesktop;
