/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookfromapi } from '../redux/books/books';

export default function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{` ${book.title} `}</span>
      <span>{` ${book.category} `}</span>
      <button type="button" onClick={() => dispatch(removeBookfromapi(book.item_id))}>Remove book</button>
    </li>
  );
}
Book.propTypes = {
  book: PropTypes.object.isRequired,
};
