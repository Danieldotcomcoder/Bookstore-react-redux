import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const bookList = useSelector((state) => state.books);
  return (
    <div>
      <ul>
        {bookList.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </ul>
    </div>
  );
};
export default BooksList;
