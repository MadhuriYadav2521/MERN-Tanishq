import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import MultipleProducts from './components/MultipleProducts';
import SingleProduct from './components/SingleProduct';
import ProductCart from './components/ProductCart';
import SuccessPage from './components/SuccessPage';
import AddProduct from './components/Seller/AddProduct';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrderHistory from './components/OrderHistory';
import SellerHome from './components/Seller/SellerHome';
import SellerAllProducts from './components/Seller/SellerAllProducts';
import UpdateProduct from './components/Seller/UpdateProduct';


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
        <Route path='/orderHistory' element={<OrderHistory />} />
        <Route path='/sellerHome' element={<SellerHome />} />
        <Route path='/sellerAllProducts' element={<SellerAllProducts />} />
        <Route path='/getUpdateProduct/:pid' element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;