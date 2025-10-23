import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { resetUI } from "@/redux/slices/uiSlice";

const ResetFiltersBtn = () => {
  const dispatch = useAppDispatch();
  const handleReset = () => {
    dispatch(resetUI());
  };
  return <Button onClick={handleReset}>Reset filters</Button>;
};
export default ResetFiltersBtn;
