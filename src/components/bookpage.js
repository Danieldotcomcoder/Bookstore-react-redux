import React from 'react';
import BooksList from './BooksList';
import AddBook from './Addbook';

function Bookpage() {
  return (
    <div className="books-main">
      <BooksList />
      <AddBook />
    </div>
  );
}
export default Bookpage;
