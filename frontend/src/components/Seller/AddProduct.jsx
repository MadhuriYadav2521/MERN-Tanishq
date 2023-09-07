import "../style.css";
import "../responsive.css";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { SellerProtected } from '../AuthProtected';
import Navbar from "../Navbar";
import { AuthContext } from "../../Context/AuthContext";

const AddProduct = () => {
    const {state} = useContext(AuthContext)
    const [productData, setProductData] = useState({ productName: '', price: '', productImg: '',category: '' })
    const handleChange = (event) => {
        event.preventDefault();
        setProductData({ ...productData, [event.target.name]: event.target.value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { productName, price, productImg, category } = productData
        console.log(productName, price, productImg, category);
        const response = await axios.post('http://localhost:8000/seller/addProduct', { productData, userId : state?.user?.id });
        if (response.data.success) {
            setProductData({ productName: '', price: '', productImg: '',category: '' });
            toast.success("Product added successfully!")
        } else {
            toast.error(response.data.error)
        }
    }
    return (
        <div>
            <Navbar />
            <SellerProtected>
                <div class="screen">
                    <div class="add-product-container">
                        <form onSubmit={handleSubmit}>
                            <h1 class="admin-panel-title">add product</h1>
                            <div class="input_wrap">
                                <input type="text" name="productName" onChange={handleChange} required autocomplete="off" />
                                <label>Product Name</label>
                            </div>
                            <div class="input_wrap">
                                <input type="text" name="category" onChange={handleChange} required autocomplete="off" />
                                <label>Category</label>
                            </div>
                            <div class="input_wrap">
                                <input type="number" name="price" onChange={handleChange} required autocomplete="off" />
                                <label>Product Price</label>
                            </div>
                            <div class="input_wrap">
                                <input type="text" name="productImg" onChange={handleChange} required autocomplete="off" />
                                <label>Product Image url</label>
                            </div>

                            <div class="submit-field">
                                <input type="submit" value="Add Product" class="admin-panel-btn" />
                            </div>
                        </form>
                    </div>
                </div >
            </SellerProtected>

        </div >

    );
}

export default AddProduct;