import "../components/style.css";
import "../components/responsive.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ProductCart = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const { state, dispatch } = useContext(AuthContext);
    const router = useNavigate();

    useEffect(() => {
        const getCartProduct = async () => {
            setIsLoading(true);
            try {
                const response = await axios.post('http://localhost:8000/buyer/getCartProduct', { userId: state?.user?.id });
                console.log(response, "response from cart");
                if (response.data.success) {
                    setCart(response.data.productsOfCart);
                    setTotalPrice(response.data.total);
                    setTotalProducts(response.data.totalCartProducts);
                } else {
                    toast.error(response.data.error);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        if (state?.user?.id) {
            getCartProduct();
        }
    }, [state]);


    const removeFromCart = async (productId) => {
        setIsLoading(true);
        try {
            console.log(productId, "pid");
            const response = await axios.post('http://localhost:8000/buyer/removeFromCart', { productId, userId: state?.user?.id });
            console.log(response, "response after remove from cart");
            if (response.data.success) {
                dispatch({
                    type: "RemoveFromCart",
                    payload: {
                        cart: response.data.productsOfCart,
                        totalPrice: response.data.total,
                        totalProducts: response.data.totalCartProducts
                    }
                })
                setCart(response.data.productsOfCart);
                setTotalPrice(response.data.total);
                setTotalProducts(response.data.totalCartProducts);
                toast.success("Product deleted from cart!");
            } else {
                toast.error(response.data.error);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    const  buyNow = async () =>{
        try {
            console.log(cart,totalPrice, totalProducts,"cart,totalPrice, totalProducts from buynow");
            const response = await axios.post('http://localhost:8000/buyer/buyNow',{ userId: state?.user?.id, cart,totalPrice, totalProducts })
            console.log(response,"res from buy now");
            if(response.data.success){
                dispatch({
                    type: "buyNow",
                    payload : response.data.finalCart
                })
                setCart(response.data.finalCart)
    
                toast.success("Order placed!");
            }else{
                toast.error("Error while processing transaction!")
            }
        } catch (err) {
            console.log(err);
            toast.error("Internal server error!")
        }
    }

    return (
        <div>

            <div className="screen">
                <Navbar />

                {isLoading ? (
                    <div className="loader"></div>

                ) : (
                    <div>
                        {cart?.length ? (
                            <div className="cart-section">
                                <div className="cart-container">
                                    <div className="cart-login-section" onClick={() => router('/register')}>
                                        <span className="cart-bold">register</span>
                                        <span>/</span>
                                        <span className="cart-bold">login</span>
                                        <span>to get Exciting offers & benifits on your</span>
                                        <span>Encircle points!</span>
                                    </div>

                                    <div className="cart-wrapper">
                                        <div className="cart-left" id="finalcart">
                                            {cart.map((p) => (
                                                <div className="cart-products" key={p._id}>
                                                    <div className="cart-product-img" id="productImage">
                                                        <img src={p.productImg} className="got-image" alt="" />
                                                    </div>
                                                    <div className="cart-product-details" >
                                                        <div className="cart-product-name" id="productName">{p.productName}</div>
                                                        <div className="cart-product-id">{p._id}</div>
                                                        <div className="cart-price-section">
                                                            <div className="c-real-price" id="productPrice">₹ {p.price} </div>

                                                        </div>
                                                        <div className="gift-message">
                                                            <input type="checkbox" name="" id="" />
                                                            <div className="add-gift">add gift message</div>
                                                        </div>
                                                    </div>
                                                    <div className="cart-product-control">
                                                        <div className="cart-product-qty">
                                                            <span className="product-set-qty">-</span>
                                                            <span className="product-qty">1</span>
                                                            <span className="product-set-qty">+</span>
                                                        </div>
                                                        <div className="cart-p-like-and-delete">
                                                            <div className="cart-p-like">
                                                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OC4yNCA0OC4yNCI+PGcgaWQ9ImMiPjxwYXRoIGlkPSJQYXRoXzE0MjUiIGQ9Ik0uMTIsLjEyVjQ4LjEySDQ4LjEyVi4xMkguMTJaTTQ1LjExLDQ1LjExSDMuMTVWMy4xNEg0NS4xMVY0NS4xMVoiIHN0eWxlPSJmaWxsOm5vbmU7Ii8+PHBhdGggZD0iTTI0LjExLDQwLjQyYy0uMTYsMC0uMzItLjA2LS40NC0uMThsLTEyLjc0LTEyLjY4Yy0zLjcxLTMuNjktNS4yNi03Ljk5LTQuMjUtMTEuNzksLjc4LTIuOTQsMy01LjE3LDUuOTQtNS45NywzLjctMSw3Ljg3LC4zNywxMS41MSwzLjc4LDYuMDgtNS43MiwxMi4yMi00Ljk0LDE1LjQyLTEuNzIsMy4yNSwzLjI3LDMuOTQsOS41OC0yLjIyLDE1LjcxLS4wNCwuMDQtLjA5LC4wOC0uMTQsLjFsLTEyLjYzLDEyLjU2Yy0uMTIsLjEyLS4yOCwuMTgtLjQ0LC4xOFpNMTUuMDQsMTAuNzNjLS43MiwwLTEuNDIsLjA5LTIuMSwuMjgtMi41MSwuNjgtNC40LDIuNTgtNS4wNiw1LjA4LS44OSwzLjM2LC41NCw3LjIyLDMuOTMsMTAuNTlsMTIuMywxMi4yNSwxMi4zMi0xMi4yNXMuMDktLjA3LC4xMy0uMWM1LjQzLTUuNDksNC45LTExLDIuMS0xMy44Mi0yLjg2LTIuODctOC40OC0zLjQyLTE0LjA5LDIuMTUtLjI0LC4yNC0uNjQsLjI0LS44OCwwLTIuNzMtMi43MS01Ljc4LTQuMTctOC42NC00LjE3WiIgc3R5bGU9ImZpbGw6Izg2MmIyZTsiLz48L2c+PC9zdmc+" alt="" />
                                                            </div>
                                                            <div className="cart-p-delete" onClick={() => removeFromCart(p._id)} style={{ cursor: "pointer" }} >
                                                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0OC4yIDQ4LjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4LjIgNDguMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiM4NDI3MkE7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGlkPSJQYXRoXzE0MjIiIGNsYXNzPSJzdDAiIGQ9Ik0wLjEsMC4xdjQ4aDQ4di00OEgwLjF6IE00NS4xLDQ1LjFoLTQydi00Mmg0MlY0NS4xeiIvPgoJPGcgaWQ9Ikdyb3VwXzE0MzIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Ljg0IDUuMjUpIj4KCQk8cmVjdCB4PSIwLjEiIHk9IjEuOSIgY2xhc3M9InN0MSIgd2lkdGg9IjM0LjMiIGhlaWdodD0iMSIvPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00LjUsMzguN2MtMS4xLDAtMS45LTAuOS0xLjktMlYyLjRoMXYzNC4zYzAsMC41LDAuNCwxLDAuOSwxaDI1LjZjMC41LDAsMC45LTAuNSwwLjktMVYyLjRoMXYzNC4zCgkJCWMwLDEuMS0wLjgsMi0xLjksMkg0LjV6Ii8+CgkJPHJlY3QgeD0iOS44IiB5PSItMSIgY2xhc3M9InN0MSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjEiLz4KCQk8cmVjdCB4PSIxMS42IiB5PSI5LjIiIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjE5LjUiLz4KCQk8cmVjdCB4PSIyMiIgeT0iOS4yIiBjbGFzcz0ic3QxIiB3aWR0aD0iMSIgaGVpZ2h0PSIxOS41Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                        <div className="cart-right">

                                            <div className="cart-address-section">
                                                <div className="c-select-country">
                                                    <fieldset>
                                                        <legend>Country</legend>
                                                        <select name="" id="">
                                                            <option value="">in</option>
                                                            <option value="">canada</option>
                                                            <option value="">germany</option>
                                                        </select>
                                                    </fieldset>

                                                </div>
                                                <div className="cart-pincode-check">
                                                    <input type="text" placeholder="Pincode" />
                                                    <a href="" className="check">check</a>
                                                </div>
                                            </div>
                                            <div className="cart-billing-details">
                                                <div className="c-b-links">
                                                    <a href="" >enter code</a>
                                                    <a href="">view promo cards</a>
                                                </div>
                                                <div className="coupon-code">
                                                    <input type="text" placeholder="Enter Coupon Code" />

                                                    <button>apply</button>
                                                </div>
                                                <div className="order-summary">
                                                    <div className="os-title">order summmary</div>
                                                    <div className="billing-content">
                                                        <div className="biil-left">sub total</div>
                                                        <div className="bill-right" id="totalPrice">{totalPrice}</div>
                                                    </div>
                                                    <div className="billing-content">
                                                        <div className="biil-left">discount</div>
                                                        <div className="bill-right" id="discount">0</div>
                                                    </div>
                                                    <div className="billing-content">
                                                        <div className="biil-left">delivery charges</div>
                                                        <div className="bill-right">free</div>
                                                    </div>
                                                    <div className="billing-content">
                                                        <div className="biil-left">total</div>
                                                        <div className="bill-right" id="finalPrice">{totalPrice}</div>
                                                    </div>
                                                    <div className="billing-content">
                                                        <div className="biil-left">you save</div>
                                                        <div className="bill-right">0</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fixed-footer-checkout">
                                    <div className="total-price-section">
                                        <ul>
                                            <li>Total</li>
                                            <li><span>{totalProducts} </span>item </li>
                                            <li className="bold-price-text">₹ <span id="ffTotal">{totalPrice}</span></li>
                                        </ul>
                                    </div>
                                    <div className="checkout-section">
                                        <a ><button className="continue-shopping-btn" onClick={() => router('/')} >Continue Shopping</button></a>
                                        <a ><button className="checkout-btn" onClick={buyNow} >Buy Now</button></a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="screen">
                                <div className="cFooterImgContent">
                                   <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw39d0b5f4/images/cart/Group14779.svg" alt="" />
                                   <h1 className="container-title">Your cart is empty. Let's buy something!</h1>
                                    <button onClick={() => router('/')} className="checkout-btn">Continue shopping</button>
                                </div>

                            </div>
                        )}
                    </div>
                )}
                <Footer />
            </div>

        </div>
    );
}

export default ProductCart;