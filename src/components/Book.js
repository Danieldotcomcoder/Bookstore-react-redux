/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookfromapi } from '../redux/books/books';

export default function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <li className="List">
      <h4 className="book-title">{` ${book.title} `}</h4>
      <h4 className="book-category">{` ${book.category} `}</h4>
      <button type="button" onClick={() => dispatch(removeBookfromapi(book.item_id))}>Remove book</button>
    </li>
  );
}
Book.propTypes = {
  book: PropTypes.object.isRequired,
};
