import React from 'react';
import BooksList from './BooksList';

function Bookpage() {
  return (
    <div className="books-main">
      <BooksList />
      <h2>Add a New Book</h2>
      <form id="form">
        <input id="book-title" type="text" name="Title" placeholder="Book Title" />
        <select placeholder="Category">
          <option>
            Category
          </option>
          <option>
            option 1
          </option>
          <option>
            option 2
          </option>
        </select>
        <button type="submit"> Add a Book </button>
      </form>
    </div>
  );
}
export default Bookpage;
