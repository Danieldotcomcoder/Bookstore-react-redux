import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooktoapi } from '../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const Onsubmit = (e) => {
    e.preventDefault();
    const title = e.target.querySelector('.title-name');
    const category = e.target.querySelector('.category-name');
    const newbook = {
      item_id: uuidv4(),
      title: title.value,
      category: category.value,
    };
    title.value = '';
    category.value = '';
    dispatch(addBooktoapi(newbook));
  };
  return (
    <div>
      <h2 className="add-n-book">ADD NEW BOOK</h2>
      <form id="form" onSubmit={(e) => Onsubmit(e)}>
        <input id="title" placeholder="Book Title" className="title-name" required />
        <input id="category" placeholder="Category" className="category-name" required />
        <button type="submit" className="Add-book-btn"> ADD BOOK </button>
      </form>
    </div>
  );
}
