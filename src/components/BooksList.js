import React from 'react';
import Book from './Book';

const BooksList = () => {
  const books = [
    {
      id: 1,
      title: 'A Brief History Of Time',
      author: 'Stephen Hawking',
    },
    {
      id: 2,
      title: 'You Were Born Rich',
      author: 'Bob Proctor',
    },
  ];

  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default BooksList;
