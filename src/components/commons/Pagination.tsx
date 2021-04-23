import React from 'react';
import '../../styles/pagination.scss'

type Total = number;
type Paginate = (p: number) => void;
type CurrentPage = number;

// interface PaginationInterface {
//     total: number,
//     paginate: (p: number) => void,
//     currentPage: number
// }

const Pagination = ({
  total,
  currentPage,
  paginate,
}: {
  total: Total;
  currentPage: CurrentPage;
  paginate: Paginate;
}) => {
  return (
    <div className="pagination">
      <div>
        <button
          type="button"
          onClick={() => {
            if (currentPage > 1) {
              paginate(currentPage - 1);
            }
          }}
        >
          Prev
        </button>
      </div>
      <div>
        <h1>{currentPage}</h1>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            if (currentPage > 0 && currentPage < total) {
              paginate(currentPage + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
