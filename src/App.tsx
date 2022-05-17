import './Styles/reset.scss';
import './App.scss';
import {
  BrowserRouter as Router, Routes, NavLink, Route, Navigate,
} from 'react-router-dom';
import ProductsPage from './Components/ProductsPage';
import Input from './Components/Input';
import Numbers from './Components/Numbers';
import CartItems from './Components/CartItems';
import Page404 from './Components/404';

const App = () => (
  <Router>
    <header>
      <nav className="navigation">
        <div className="navigation-box">
          <NavLink className="link" to="/Numbers">Numbers</NavLink>
          <NavLink className="link" to="/Input">Input</NavLink>
          <NavLink className="link" to="/ProductsPage">ProductsPage</NavLink>
          <NavLink className="link" to="/CartItems">CartItems</NavLink>

        </div>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={App} />
      <Route path="/Numbers" element={<Numbers />} />
      <Route path="/Input" element={<Input />} />
      <Route path="/ProductsPage" element={<ProductsPage />} />
      <Route path="/CartItems" element={<CartItems />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </Router>
);

export default App;
