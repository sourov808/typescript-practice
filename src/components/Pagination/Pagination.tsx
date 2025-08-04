import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { setPage } from "../../store/productSlice";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { currentPage, totalPages } = useAppSelector((state) => state.products);

  const handlePrev = () => {
    if (currentPage > 1) dispatch(setPage(currentPage - 1));
  };

  const handleNext = () => {
    if (currentPage < totalPages) dispatch(setPage(currentPage + 1));
  };

  const handlePageClick = (page: number) => {
    dispatch(setPage(page));
  };

  const limitedPageNum = () => {
    const totalVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(totalVisible / 2));
    let end = start + totalVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - totalVisible - 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumber = limitedPageNum();

  return (
    <div className="flex justify-center my-6 space-x-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-cyan-300  hover:bg-gray-500 rounded disabled:opacity-50"
      >
        <BiChevronsLeft />
      </button>

      <span className="text-lg">
        {/* Page {currentPage} of {totalPages}
         */}
        {pageNumber.map((page) => (
          <button
            key={page}
            onClick={() => {
              handlePageClick(page);
            }}
            className={`px-3 py-1 ml-2 rounded ${
              page === currentPage
                ? "bg-orange-500 text-white font-bold"
                : "bg-cyan-300 hover:bg-gray-400"
            }`}
          >
            {page}
          </button>
        ))}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-cyan-300 hover:bg-gray-500 rounded disabled:opacity-50 "
      >
        <BiChevronsRight />
      </button>
    </div>
  );
};

export default Pagination;
