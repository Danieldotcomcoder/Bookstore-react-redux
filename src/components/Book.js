import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, author }) => (
  <li key={id}>
    <h4>{title}</h4>
    <h4>{author}</h4>
    <button type="button"> Remove </button>
  </li>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
