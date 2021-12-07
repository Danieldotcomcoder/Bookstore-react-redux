/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = (props) => {
  const [addnewBook, setAddBook] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setAddBook({
      ...addnewBook,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.addBook(addnewBook);
    setAddBook({
      title: '',
      author: '',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input id="book-title" type="text" name="title" placeholder="Book Title" value={addnewBook.title} onChange={onChange} required />
      <input id="book-author" type="text" name="author" placeholder="Book Author" value={addnewBook.author} onChange={onChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddBook;
