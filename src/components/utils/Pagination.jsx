import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPress }) => {
  const handlePageClick = (data) => {
    onPress(data.selected + 1);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<FaAngleRight />}
      onPageChange={handlePageClick}
      marginPagesDisplayed={3}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel={<FaAngleLeft />}
      containerClassName="flex gap-3 items-center"
      pageClassName="flex justify-center items-center w-6 h-6 rounded-full text-[10px] font-semibold transition hover:bg-primary hover:text-white"
      previousLinkClassName="flex justify-center items-center w-6 h-6 rounded-full font-bold transition hover:bg-primary hover:text-white"
      nextLinkClassName="flex justify-center items-center w-6 h-6 rounded-full font-bold transition hover:bg-primary hover:text-white"
      activeClassName="flex justify-center items-center w-6 h-6 rounded-full font-bold bg-primary text-white"
    />
  );
};

export default Pagination;
