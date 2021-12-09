import { createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'w6PTwUOXZt5voQWUhhz4';
const appUrl = `${baseUrl}/apps/${apiKey}/books`;

const bookSlice = createSlice(
  {
    name: 'books',
    initialState: [],
    reducers: {
      addBook: (state, action) => [...current(state), { ...action.payload }],
      removeBook: (state, action) => current(state).filter((b) => b.item_id !== action.payload),
      getBooks: (state, action) => action.payload,
    },
  },
);

const getBooksfromapi = async (dispatch) => {
  const res = await axios.get(appUrl);
  const bookList = Object.entries(res.data).map(([id, [book]]) => (
    {
      item_id: id,
      title: book.title,
      category: book.category,
    }
  ));
  dispatch({ type: 'books/getBooks', payload: bookList });
};

const addBooktoapi = (book) => {
  const addBookThunk = async (dispatch) => {
    const res = await axios.post(appUrl, {
      item_id: book.item_id,
      title: book.title,
      category: book.category,
    });
    if (res.status) {
      dispatch({ type: 'books/addBook', payload: book });
    }
  };
  return addBookThunk;
};

const removeBookfromapi = (id) => {
  const deleteBookThunk = async (dispatch) => {
    const res = await axios.delete(`${appUrl}/${id}`);
    if (res.status) {
      dispatch({ type: 'books/removeBook', payload: id });
    }
  };
  return deleteBookThunk;
};

export { addBooktoapi, getBooksfromapi, removeBookfromapi };
export default bookSlice.reducer;
