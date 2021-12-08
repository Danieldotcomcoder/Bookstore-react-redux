import React from 'react';
import BooksList from './BooksList';
import Addbook from './Addbook';

function Bookpage() {
  return (
    <div className="books-main">
      <BooksList />
      <Addbook />
    </div>
  );
}
export default Bookpage;
