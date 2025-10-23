import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { resetUI } from "@/redux/slices/uiSlice";

const ClearFiltersBtn = () => {
  const dispatch = useAppDispatch();
  const handleReset = () => {
    dispatch(resetUI());
  };
  return (
    <Button variant={"outline"} className="w-fit" onClick={handleReset}>
      Clear filters
    </Button>
  );
};
export default ClearFiltersBtn;
