// Pagination.jsx

import React from 'react';
import style from './Pagination.module.css';

const Pagination = ({ contactsPerPage, totalContacts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={style.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={style.pageItem}>
            <button
              onClick={() => paginate(number)}
              className={style.pageButton}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
