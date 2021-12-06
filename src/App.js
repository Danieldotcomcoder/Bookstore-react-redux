import { React } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Book from './redux/books/books';
import Categories from './redux/categories/categories';
import './App.css';

function App() {
  return (
    <Router>

      <div className="App">
        <div>
          <h1>Bookstore CMS</h1>
          <nav className="navlist">
            <ul>
              <li>
                <Link to="/">Books</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Book />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
