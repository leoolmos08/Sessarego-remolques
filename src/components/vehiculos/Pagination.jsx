import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

export default function Pagination({
  setCurrentPage,
  currentPage,
  totalPages,
}) {
  const [selected, setSelected] = useState(1);
  const handlePress = (i) => {
    setCurrentPage(i);
    setSelected(i);
  };

  const fxNextPage = () => {
    setCurrentPage(currentPage + 1);
    setSelected(currentPage);
  };
  const handleNextPage = () => {
    currentPage < totalPages && fxNextPage();
  };

  const handlePrevPage = () => {
    currentPage !== 1 && setCurrentPage(currentPage - 1);
  };
  const pagesNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-10">
      <nav
        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <div
          onClick={handlePrevPage}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        {pagesNumbers.map((i) => (
          <div
            aria-current="page"
            key={i}
            onClick={() => handlePress(i)}
            className={
              selected === i
                ? "relative z-10 inline-flex items-center bg-gray-800 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                : "relative inline-flex items-center px-4 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            }
          >
            {i}
          </div>
        ))}
        <div
          onClick={handleNextPage}
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </div>
      </nav>
    </div>
  );
}
