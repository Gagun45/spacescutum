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

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // show all if few pages
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // always show first page
      pages.push(1);

      if (currentPage > 4) pages.push("…");

      // show up to 3 pages around current
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) pages.push("…");

      // always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

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

  return (
    <div className="flex gap-2 items-center justify-between flex-wrap">
      <Button
        aria-label="Previous page"
        onClick={handlePrevPage}
        disabled={!isPrevPage}
      >
        <ArrowLeft />
      </Button>
      <span className="sm:hidden tracking-widest font-semibold">
        {currentPage}/{totalPages}
      </span>
      <div className="space-x-1 hidden sm:block">
        {visiblePages.map((page, index) =>
          page === "…" ? (
            <span
              key={`ellipsis-${index}`}
              className="px-2 text-gray-500 select-none"
            >
              …
            </span>
          ) : (
            <Button
              aria-label={`Page ${page}`}
              key={page}
              onClick={() => handleChangePage(page as number)}
              variant={currentPage === page ? "default" : "outline"}
              className="w-9 h-9 rounded-full"
            >
              {page}
            </Button>
          )
        )}
      </div>
      <Button
        aria-label="Next page"
        onClick={handleNextPage}
        disabled={!isNextPage}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};
export default Pagination;
