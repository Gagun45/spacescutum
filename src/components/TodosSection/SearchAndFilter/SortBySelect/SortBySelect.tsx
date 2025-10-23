import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { SORT_BY_OPTIONS as options } from "@/lib/constants";
import type { SortBy } from "@/lib/types";
import { setSortBy } from "@/redux/slices/uiSlice";

const SortBySelect = () => {
  const { sortBy } = useAppSelector((s) => s.ui);
  const dispatch = useAppDispatch();
  const handleChange = (value: string) => {
    const sortByValue = value as SortBy;
    dispatch(setSortBy({ sortBy: sortByValue }));
  };
  return (
    <NativeSelect
      value={sortBy}
      onChange={({ target }) => handleChange(target.value)}
    >
      {options.map((opt) => (
        <NativeSelectOption key={opt.value} value={opt.value}>
          {opt.label}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
};
export default SortBySelect;
