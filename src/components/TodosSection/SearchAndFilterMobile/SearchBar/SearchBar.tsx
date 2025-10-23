import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setSearchQuery } from "@/redux/slices/uiSlice";
import { XIcon } from "lucide-react";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { searchQuery } = useAppSelector((s) => s.ui);

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Search todo..."
        value={searchQuery}
        onChange={({ target }) =>
          dispatch(setSearchQuery({ query: target.value }))
        }
      />
      <Button
        disabled={!searchQuery}
        onClick={() => dispatch(setSearchQuery({ query: "" }))}
      >
        <XIcon />
      </Button>
    </div>
  );
};
export default SearchBar;
