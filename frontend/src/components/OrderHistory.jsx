
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../components/accordian.css"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthProtected from "./AuthProtected";


const OrderHistory = () => {
    const { state } = useContext(AuthContext)
    const [orderData, setOrderData] = useState([])
    const [isLoding, setIsLoding] = useState(false)
    const router = useNavigate()

    useEffect(() => {
        const getOrderHistory = async () => {
            setIsLoding(true)
            try {
                const response = await axios.post('http://localhost:8000/buyer/getOrderHistory', { userId: state?.user?.id })
                console.log(response, "res from get history");
                if (response.data.success) {
                    setOrderData(response.data.orderHistory)
                } else {
                    toast.error(response.data.error)
                }


            } catch (err) {
                console.log(err);
                toast.error("Internal server error!")
            } finally {
                setIsLoding(false)
            }
        }
        if (state?.user) {
            getOrderHistory()
        }

    }, [state])

    return (
        <div>
            <Navbar />
            {isLoding ? (
                <div className="screen">
                    <div className="loader"></div>
                </div>
            ) : (
                <AuthProtected>
                <div>
                    {orderData?.length ? (
                        <div className="screen">
                            <div className="container" style={{ width: "90%", margin: " 0 auto 5rem auto" }}>
                            <h1 style={{margin:"2rem 0",color:"#832729"}}>Order History</h1>

                                {orderData.map((orderHead) => (
                                    <details>
                                        <summary>

                                            <span> Order Id : {orderHead.orderDetails._id}</span>
                                            <span style={{ float: "right" }}>Order Date : {orderHead.orderDetails.createdAt}</span>


                                        </summary>
                                        <div>
                                            {orderHead.cartProducts.map((pro) => (
                                                <div>
                                                    <div className="cart-products" key={pro._id} style={{ justifyContent: "start", margin: "1rem 0 0 0", padding: "0", border:"none",borderBottom:"1px solid lightgray" }}>
                                                        <div className="cart-product-img" style={{ width: "13%" }} id="productImage">
                                                            <img src={pro.productImg} className="got-image" alt="" />
                                                        </div>
                                                        <div className="cart-product-details" style={{ paddingLeft: "10px" }} >
                                                            <div className="cart-product-name" id="productName">{pro.productName}</div>
                                                            <div className="cart-product-id">{pro._id}</div>
                                                            <div className="cart-price-section">
                                                                <div className="c-real-price" id="productPrice">₹ {pro.price} </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div>
                                                <div style={{display:"flex",padding: "1rem 0"}}>
                                                    <h5 className="c-real-price">Total Price : <span style={{fontWeight:"normal"}}>{orderHead.orderDetails.totalPrice}</span></h5>
                                                    <h5 className="c-real-price" style={{paddingLeft:"3rem"}}>Total Products : <span style={{fontWeight:"normal"}}>{orderHead.orderDetails.totalProducts}</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </details>
                                ))}


                            </div>
                        </div>
                    ) : (
                        <div className="">
                            <div className="spFooterImgContent" >
                                <img src="https://stores.maxfashion.in/VendorpageTheme/Enterprise/EThemeForMax/images/product-not-found.jpg" alt="" />
                                <button onClick={() => router('/')} className="fbtn">Continue shopping</button>
                            </div>
                        </div>
                    )}
                </div>
                </AuthProtected>
            )}
        </div>
    );
}

export default OrderHistory;