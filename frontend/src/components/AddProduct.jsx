import "../components/style.css";
import "../components/responsive.css";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

const AddProduct = () => {
    const [productData, setProductData] = useState({ productName: '',  price: '', productImg: '' })
    const handleChange = (event) => {
        event.preventDefault();
        setProductData({ ...productData, [event.target.name]: event.target.value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { productName, price, productImg } = productData
        console.log(productName, price, productImg);
        const response = await axios.post('http://localhost:8000/admin/addProduct', { productData });
        if (response.data.success) {
            setProductData({ productName: '', price: '', productImg: '' });
            toast.success("Product added successfully!")
        } else {
            toast.error(response.data.error)
        }
    }
    return (
        <div>
            <AdminNavbar />
            <div class="screen">
             
                <div class="add-product-container">
                    <form onSubmit={handleSubmit}>
                        <h1 class="admin-panel-title">add product</h1>
                        <div class="input_wrap">
                            <input type="text" name="productName"  onChange={handleChange}  required autocomplete="off" />
                            <label>Product Name</label>
                        </div>
                        <div class="input_wrap">
                            <input type="number" name="price" onChange={handleChange}  required autocomplete="off" />
                            <label>Product Price</label>
                        </div>
                        <div class="input_wrap">
                            <input type="text" name="productImg"  onChange={handleChange}  required autocomplete="off" />
                            <label>Product Image url</label>
                        </div>

                        <div class="submit-field">
                            <input type="submit" value="Add Product" class="admin-panel-btn" />
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}

export default AddProduct;