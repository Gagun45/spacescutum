import { Search } from "lucide-react";

import StateWrapper from "../StateWrapper";

import ClearFiltersBtn from "../../../General/ClearFiltersBtn/ClearFiltersBtn";

const TodosFilteredEmptyState = () => {
  return (
    <StateWrapper>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
        <Search className="h-7 w-7 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold">No matching todos</h3>
      <p className="text-sm text-muted-foreground max-w-sm">
        We couldn`t find any todos that match your search or filter criteria.
      </p>
      <ClearFiltersBtn />
    </StateWrapper>
  );
};

export default TodosFilteredEmptyState;
