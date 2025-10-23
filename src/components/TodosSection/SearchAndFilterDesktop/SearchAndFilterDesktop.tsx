import ClearFiltersBtn from "../SearchAndFilterMobile/ClearFiltersBtn/ClearFiltersBtn";
import FilterCompletedRadio from "../SearchAndFilterMobile/FilterCompletedRadio/FilterCompletedRadio";
import SearchBar from "../SearchAndFilterMobile/SearchBar/SearchBar";
import ShowOnPage from "../SearchAndFilterMobile/ShowOnPage/ShowOnPage";
import SortBySelect from "../SearchAndFilterMobile/SortBySelect/SortBySelect";

const SearchAndFilterDesktop = () => {
  return (
    <div className="hidden xl:flex w-96 gap-6 flex-col border-r pr-2">
      <h2 className="text-lg font-semibold text-center tracking-wide">
        Search & Filters
      </h2>
      <SearchBar />
      <ShowOnPage />
      <SortBySelect />
      <FilterCompletedRadio />
      <ClearFiltersBtn/>
    </div>
  );
};
export default SearchAndFilterDesktop;
