import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { setSearchQuery } from "@/redux/slices/uiSlice";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(setSearchQuery({ query }));
  }, [query, dispatch]);

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Search todo..."
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <Button disabled={!query} onClick={() => setQuery("")}>
        <XIcon />
      </Button>
    </div>
  );
};
export default SearchBar;
