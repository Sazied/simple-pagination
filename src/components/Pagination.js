import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination-ul">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination">
            <a
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              href="!#"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
