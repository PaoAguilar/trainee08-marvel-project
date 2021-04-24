import React from 'react';
import NextImg from '../../img/next.png';
import PrevImg from '../../img/prev.png';
import '../../styles/pagination.scss';

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
        <div className="pagination__images">
          <img
            src={PrevImg}
            alt="Previous"
            onClick={() => {
              if (currentPage > 1) {
                paginate(currentPage - 1);
              }
            }}
          />
        </div>
      </div>
      <div className="pagination__number">
        <h3>{currentPage}</h3>
      </div>
      <div>
        <div className="pagination__images">
          <img
            src={NextImg}
            alt="Next"
            onClick={() => {
              if (currentPage > 0 && currentPage < total) {
                paginate(currentPage + 1);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
