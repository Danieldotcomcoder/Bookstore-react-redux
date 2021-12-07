import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, deleteBook }) => (
  <li>
    <h4>{title}</h4>
    <h4>{author}</h4>
    <button type="button" onClick={deleteBook}> Remove </button>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
