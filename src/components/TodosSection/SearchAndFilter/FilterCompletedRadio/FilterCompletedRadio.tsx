import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { FILTER_COMPLETED_OPTIONS as options } from "@/lib/constants";
import type { FilterCompleted } from "@/lib/types";
import { setFilterCompleted } from "@/redux/slices/uiSlice";
const FilterCompletedRadio = () => {
  const dispatch = useAppDispatch();
  const filterOption = useAppSelector((s) => s.ui.filterCompleted);
  const handleChange = (value: string) => {
    const show = value as FilterCompleted;
    dispatch(setFilterCompleted({ show }));
  };
  return (
    <RadioGroup
      value={filterOption}
      onValueChange={handleChange}
      className="w-fit"
    >
      {options.map((opt) => (
        <Label key={opt.label} className="flex items-center gap-3 cursor-pointer">
          <RadioGroupItem value={opt.value} id={opt.value} />
          {opt.label}
        </Label>
      ))}
    </RadioGroup>
  );
};
export default FilterCompletedRadio;
