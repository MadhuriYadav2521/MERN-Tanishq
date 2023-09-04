import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import MultipleProducts from './components/MultipleProducts';
import SingleProduct from './components/SingleProduct';
import ProductCart from './components/ProductCart';
import SuccessPage from './components/SuccessPage';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='navbar' element={<Navbar />} />
        <Route path='footer' element={<Footer />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/multipleProducts' element={<MultipleProducts />} />
        <Route path='/singleProduct/:id' element={<SingleProduct />} />
        <Route path='/productCart' element={<ProductCart />} />
        <Route path='/successPage' element={<SuccessPage />} />
        <Route path='/addProduct' element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;