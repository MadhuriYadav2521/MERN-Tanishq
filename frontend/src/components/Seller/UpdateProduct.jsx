import "../style.css";
import "../responsive.css";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { SellerProtected } from '../AuthProtected';
import Navbar from "../Navbar";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
    const { pid } = useParams()
    // console.log(pid, "pid");
    const route = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [productData, setProductData] = useState({ productName: '', category: '', price: '', productImg: '' })

    useEffect(() => {
        const getUpdateProduct = async () => {
            setIsLoading(true)
            try {
                console.log(pid, "pid");
                const response = await axios.get(`http://localhost:8000/seller/getUpdateProduct/${pid}`)
                console.log(response, "respons from get up");
                if (response.data.success) {
                    setProductData(response.data.product)
                } else {
                    toast.error(response.data.error)
                }
            } catch (err) {
                console.log(err);
                toast.error("Internal server error!")
            } finally {
                setIsLoading(false)
            }
        }

        getUpdateProduct()
    }, [pid])

    const handleChange = (event) => {
        event.preventDefault();
        setProductData({ ...productData, [event.target.name]: event.target.value })
    };

    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            const { productName, price, productImg, category } = productData
            console.log(productName, price, productImg, category);

            console.log(productData, "sent to back product data");
            const response = await axios.put(`http://localhost:8000/seller/updateProduct/${pid}`, { productData })

            console.log(response, "response from put product");
            if (response.data.success) {
                setProductData(response.data.product)
                toast.success("Product has been updated!")
                route('/sellerAllProducts')
            } else {
                toast.error(response.data.error)
            }
        } catch (err) {
            console.log(err);
            toast.error("Internal server error!")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>

            <Navbar />
            {/* <SellerProtected> */}
            {isLoading ? (
                <div className="loader"></div>
            ) : (
                <div class="screen">
                       {productData ? (
                    <div class="add-product-container">
                        <form onSubmit={handleSubmit}>
                            <h1 class="admin-panel-title">Update product</h1>
                            <div class="input_wrap">
                                <input type="text" name="productName" value={productData.productName} onChange={handleChange} required autocomplete="off" />
                                <label>Product Name</label>
                            </div>
                            <div class="input_wrap">
                                <input type="text" name="category" value={productData.category} onChange={handleChange} required autocomplete="off" />
                                <label>Category</label>
                            </div>
                            <div class="input_wrap">
                                <input type="number" name="price" value={productData.price} onChange={handleChange} required autocomplete="off" />
                                <label>Product Price</label>
                            </div>
                            <div class="input_wrap">
                                <input type="text" name="productImg" value={productData.productImg} onChange={handleChange} required autocomplete="off" />
                                <label>Product Image url</label>
                            </div>

                            <div class="submit-field">
                                <input type="submit" value="Update Product" class="admin-panel-btn" />
                            </div>
                        </form>
                    </div>
                         ) : (
                            <>
                                <h2>Product not found!</h2>
                            </>
                        )}
                </div >
              )}
            {/* </SellerProtected> */}

        </div>
    );
}

export default UpdateProduct;