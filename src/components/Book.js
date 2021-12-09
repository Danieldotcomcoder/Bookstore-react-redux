/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { removeBookfromapi } from '../redux/books/books';

export default function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <li className="List">
      <div className="sect-one">
        <h5 className="category">Science</h5>
        <h4 className="book-title">{` ${book.title} `}</h4>
        <h4 className="book-author">{` ${book.category} `}</h4>
        <button id="btns-comnts" className="class-btns" type="button">Comments</button>
        <button id="btns-remv" className="class-btns" type="button" onClick={() => dispatch(removeBookfromapi(book.item_id))}>Remove book</button>
        <button id="btns" className="class-btns" type="button">Edit</button>
      </div>
      <div className="sect-two">
        <CircularProgress color="primary" size={70} thickness={3} className="circle" variant="determinate" value="75" />
        <div className="sect-two-o">
          <h3 className="percentage"> 50% </h3>
          <h3 className="completed"> Completed</h3>
        </div>
      </div>
      <div className="sect-three">
        <h3 className="current-chapter">Current Chapter</h3>
        <h4>Chapter 5</h4>
        <button type="button" className="update-progress">Update Progress</button>
      </div>
    </li>
  );
}
Book.propTypes = {
  book: PropTypes.object.isRequired,
};
