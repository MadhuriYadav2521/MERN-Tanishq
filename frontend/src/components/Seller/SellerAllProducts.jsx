import Navbar from "../Navbar";
import Footer from "../Footer";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { AuthContext } from "../../Context/AuthContext";
import { SellerProtected } from "../AuthProtected";


const SellerAllProducts = () => {
    const router = useNavigate()
    const [products, setProducts] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const { state } = useContext(AuthContext)

    useEffect(() => {
        const getAllProducts = async () => {
            setIsLoading(true)
            try {
                console.log(state?.user?.id, "seller id");
                const response = await axios.post('http://localhost:8000/seller/sellerAllProducts', { sellerId: state?.user?.id });
                if (response.data.success) {
                    setProducts(response.data.product)
                } else {
                    toast.error(response.data.error)
                }
            } catch (err) {
                toast.error("Internal server error!")
            } finally {
                setIsLoading(false)
            }
        }
        getAllProducts()
    }, [state])

    const deleteProduct = async (pid) =>{
        setIsLoading(true)
        try {
            console.log(pid,"piiid");
            const response = await axios.post('http://localhost:8000/seller/deleteProduct',{productId :pid})
            console.log(response,"response from delte product");
            if(response.data.success){
                setProducts(products.filter(product => product._id !== pid))
                toast.success("Product successfully deleted!")
                
            }else{
                toast.error(response.data.error)
            }
        } catch (err) {
            console.log(err);
            toast.error("Internal server error!")
        }finally{
            setIsLoading(false)
        }
    }


    return (
        <div>
            <Navbar />
            {isLoading ? (
                <div className="screen" style={{ marginTop: "7.5rem" }}>

                    <div className="loader"></div>
                </div>
            ) : (
                <SellerProtected>
                    <div>
                        {products?.length ? (
                            <div className="screen">

                                <div className="products-container" style={{ marginTop: "8.5rem" }}>
                                    <div className="path">
                                        <span>Dashboard</span>
                                        <span>|</span>
                                        <span>jewellery</span>
                                    </div>
                                    <div className="product-count"><span>Your Products</span></div>
                                    <div className="mul-products-wrapper " id="productContainer">
                                        {products.map((p) => (
                                            <a>
                                                <div className="products">
                                                    <div className="product-image" id="productImg">
                                                        <img src={p.productImg} alt="product" />
                                                    </div>
                                                    <div className="product-info">
                                                        <div className="hurry">only 1 left in stock</div>
                                                        <div className="p-name ellipsis" id="productName">{p.productName}</div>
                                                        <div className="p-price" id="productPrice">&#8377; {p.price}</div>
                                                        <div className="p-path">women | {p.category}</div>
                                                        <button className="explorer-btn" onClick={() => router(`/singleProduct/${p._id}`)}>explore now</button>
                                                        <div class="overlayy forSellerUpdate" style={{display:"flex", justifyContent:"space-between"}} >
                                                            <button onClick={() => router(`/getUpdateProduct/${p._id}`)} style={{ cursor: "pointer",backgroundColor:"white", border:"none", outline:"none",padding:"1rem 1.2rem",  fontWeight:"bolder"}}>Update</button>
                                                            <button onClick={() => deleteProduct(p._id)} style={{ cursor: "pointer", color: "red",backgroundColor:"white", border:"none", outline:"none",padding:"1rem 1.2rem", fontWeight:"bolder" }}>Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <div className="screen">
                                <div style={{ marginTop: "8.5rem" }}>
                                    <div className="cFooterImgContent" >
                                        <img src="https://stores.maxfashion.in/VendorpageTheme/Enterprise/EThemeForMax/images/product-not-found.jpg" alt="" />
                                        <button onClick={() => router('/addProduct')} className="checkout-btn">Add Products</button>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                </SellerProtected>
            )}

        </div>
    );
}

export default SellerAllProducts;