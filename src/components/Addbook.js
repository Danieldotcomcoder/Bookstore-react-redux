import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setInputTitle] = useState('');
  const [category, setInputCategory] = useState('');

  const onTitleChange = (e) => setInputTitle((e.target.value));
  const onCategoryChange = (e) => setInputCategory((e.target.value));

  const OnSubmit = (e) => {
    const newbook = {
      item_id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(newbook));
    e.preventDefault();
    setInputTitle('');
    setInputCategory('');
  };

  return (
    <form onSubmit={OnSubmit}>
      <input type="text" name="title" placeholder="Book Title" value={title} onChange={onTitleChange} required />
      <input type="text" name="category" placeholder="Category" value={category} onChange={onCategoryChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
