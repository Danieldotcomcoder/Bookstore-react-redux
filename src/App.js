import { React } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Bookpage from './components/bookpage';
import Categories from './components/categoriespage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="Bookstore-CMS">Bookstore CMS</h1>
        <nav className="navlist">
          <ul>
            <li>
              <Link to="/" className="Books">Books</Link>
            </li>
            <li>
              <Link to="/categories" className="Categories">Categories</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Bookpage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
