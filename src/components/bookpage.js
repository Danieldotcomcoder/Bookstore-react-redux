import React from 'react';
import BooksList from './BooksList';

function Bookpage() {
  return (
    <div className="books-main">
      <BooksList />
      <h2>Add a New Book</h2>
      <form id="form">
        <input id="book-title" type="text" name="Title" placeholder="Book Title" />
        <input id="book-author" type="text" name="Title" placeholder="Book Author" />
        <button type="submit"> Add a Book </button>
      </form>
    </div>
  );
}
export default Bookpage;
