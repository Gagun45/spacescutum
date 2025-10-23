import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { FILTER_COMPLETED_OPTIONS as options } from "@/lib/constants";
import type { FilterCompleted as FilterCompletedType } from "@/lib/types";
import { setFilterCompleted } from "@/redux/slices/uiSlice";
const FilterCompleted = () => {
  const dispatch = useAppDispatch();
  const filterOption = useAppSelector((s) => s.ui.filterCompleted);
  const handleChange = (value: string) => {
    const show = value as FilterCompletedType;
    dispatch(setFilterCompleted({ show }));
  };
  return (
    <RadioGroup defaultValue={filterOption} onValueChange={handleChange}>
      {options.map((opt) => (
        <Label key={opt.label} className="flex items-center gap-3">
          <RadioGroupItem value={opt.value} id={opt.value} />
          {opt.label}
        </Label>
      ))}
    </RadioGroup>
  );
};
export default FilterCompleted;
