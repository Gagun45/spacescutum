import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setCurrentPage } from "@/redux/slices/uiSlice";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";

interface Props {
  totalTodos: number;
}

const Pagination = ({ totalTodos }: Props) => {
  const { showOnPage, currentPage } = useAppSelector((s) => s.ui);
  const dispatch = useAppDispatch();

  const totalPages = Math.ceil(totalTodos / showOnPage);

  const isNextPage = currentPage < totalPages;
  const isPrevPage = currentPage > 1;

  useEffect(() => {
    dispatch(setCurrentPage({ page: 1 }));
  }, [totalTodos, dispatch]);

  const handleChangePage = (page: number) => {
    dispatch(setCurrentPage({ page }));
  };

  const handleNextPage = () => {
    dispatch(setCurrentPage({ page: currentPage + 1 }));
  };

  const handlePrevPage = () => {
    dispatch(setCurrentPage({ page: currentPage - 1 }));
  };

  const pages = Array.from({ length: totalPages }).map((_, i) => i + 1);

  return (
    <div className="flex gap-2 items-center justify-between flex-wrap">
      <Button onClick={handlePrevPage} disabled={!isPrevPage}>
        <ArrowLeft />
      </Button>
      <div className="space-x-1">
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => handleChangePage(page)}
            variant={currentPage === page ? "default" : "outline"}
          >
            {page}
          </Button>
        ))}
      </div>
      <Button onClick={handleNextPage} disabled={!isNextPage}>
        <ArrowRight />
      </Button>
    </div>
  );
};
export default Pagination;
