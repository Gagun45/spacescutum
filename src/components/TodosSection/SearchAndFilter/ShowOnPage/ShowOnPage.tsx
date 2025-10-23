import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { SHOW_ON_PAGE_OPTIONS as options } from "@/lib/constants";
import { setShowOnPage } from "@/redux/slices/uiSlice";

const ShowOnPage = () => {
  const { sortBy } = useAppSelector((s) => s.ui);
  const dispatch = useAppDispatch();
  const handleChange = (value: string) => {
    const showOnPage = parseInt(value);
    dispatch(setShowOnPage({ showOnPage }));
  };

  return (
    <NativeSelect
      defaultValue={sortBy}
      onChange={({ target }) => handleChange(target.value)}
    >
      {options.map((opt) => (
        <NativeSelectOption key={opt} value={opt}>
          {opt}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
};
export default ShowOnPage;
