import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';
import store from '../redux/configureStore';
import Book from './Book';
import AddBook from './Addbook';

const BooksList = () => {
  const [books, setBooks] = useState(store.getState().booksReducer);

  const dispatch = useDispatch();

  const AddBookToStorage = ({ title, author }) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));

    localStorage.setItem('ListOfBooks', JSON.stringify(store.getState().booksReducer));
    setBooks(JSON.parse(localStorage.getItem('ListOfBooks')));
  };

  const deleteBook = (book) => {
    dispatch(removeBook(book));

    localStorage.setItem('ListOfBooks', JSON.stringify(store.getState().booksReducer));
    setBooks(JSON.parse(localStorage.getItem('ListOfBooks')));
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            deleteBook={() => deleteBook(book)}
          />
        ))}
      </ul>

      <AddBook addBook={AddBookToStorage} />
    </div>
  );
};

export default BooksList;
