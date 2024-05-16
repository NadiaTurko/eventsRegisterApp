import React from "react";
import "./pagination.css";

const Pagination = ({ eventsPerPage, totalEvents, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page__item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            onClick={() => paginate(currentPage - 1)}
            href="#!"
            className="page__link"
          >
            &laquo;
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page__item ${currentPage === number ? "active" : ""}`}
          >
            <a
              onClick={() => paginate(number)}
              href="#!"
              className="page__link"
            >
              {number}
            </a>
          </li>
        ))}
        <li
          className={`page__item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a
            onClick={() => paginate(currentPage + 1)}
            href="#!"
            className="page__link"
          >
            &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
