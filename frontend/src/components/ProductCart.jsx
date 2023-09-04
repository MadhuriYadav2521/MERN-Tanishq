import "../components/style.css";
import "../components/responsive.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-hot-toast";
import axios from "axios";


const ProductCart = () => {
    const [cart, setCart] = useState()
    const {state} = useContext(AuthContext)

    useEffect(()=>{
        const getCartProduct = async () =>{
            try {
                const response = axios.post('http://localhost:8000/buyer/getCartProduct',{userId: state?.user?.id})
                console.log(response,"response from cart");
                if(response.data.success){
                    setCart(response.data.product)
                }else{
                    toast.error((await response).data.error)
                }
            } catch (err) {
                console.log(err);
            }
        }
        if(state?.user?.id){
            getCartProduct();
        }
    },[state])
       

    return (
        <div>

            <div className="screen">
                <Navbar />
                <div class="cart-section">
                    <div class="cart-container">
                        <div class="cart-login-section">
                            <span class="cart-bold">register</span>
                            <span>/</span>
                            <span class="cart-bold">login</span>
                            <span>to get Exciting offers & benifits on your</span>
                            <span>Encircle points!</span>
                        </div>

                        <div class="cart-wrapper">
                            <div class="cart-left" id="finalcart">
                                <div class="cart-products">
                                    <div class="cart-product-img" id="productImage">
                                        <img src='https://staticimg.titan.co.in/Mia/Catalog/552820DPJAAE52_1.jpg' class="got-image" alt="" />
                                    </div>
                                    <div class="cart-product-details" >
                                        <div class="cart-product-name" id="productName">Ravishing Rose Gold Drop Earrings</div>
                                        <div class="cart-product-id">234226DPJAA7785</div>
                                        <div class="cart-price-section">
                                            <div class="c-real-price" id="productPrice">₹ 25000 </div>
                                            <div class="cart-del-price"><del>₹ 26019</del></div>
                                        </div>
                                        <div class="gift-message">
                                            <input type="checkbox" name="" id="" />
                                            <div class="add-gift">add gift message</div>
                                        </div>
                                    </div>
                                    <div class="cart-product-control">
                                        <div class="cart-product-qty">
                                            <span class="product-set-qty">-</span>
                                            <span class="product-qty">1</span>
                                            <span class="product-set-qty">+</span>
                                        </div>
                                        <div class="cart-p-like-and-delete">
                                            <div class="cart-p-like">
                                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OC4yNCA0OC4yNCI+PGcgaWQ9ImMiPjxwYXRoIGlkPSJQYXRoXzE0MjUiIGQ9Ik0uMTIsLjEyVjQ4LjEySDQ4LjEyVi4xMkguMTJaTTQ1LjExLDQ1LjExSDMuMTVWMy4xNEg0NS4xMVY0NS4xMVoiIHN0eWxlPSJmaWxsOm5vbmU7Ii8+PHBhdGggZD0iTTI0LjExLDQwLjQyYy0uMTYsMC0uMzItLjA2LS40NC0uMThsLTEyLjc0LTEyLjY4Yy0zLjcxLTMuNjktNS4yNi03Ljk5LTQuMjUtMTEuNzksLjc4LTIuOTQsMy01LjE3LDUuOTQtNS45NywzLjctMSw3Ljg3LC4zNywxMS41MSwzLjc4LDYuMDgtNS43MiwxMi4yMi00Ljk0LDE1LjQyLTEuNzIsMy4yNSwzLjI3LDMuOTQsOS41OC0yLjIyLDE1LjcxLS4wNCwuMDQtLjA5LC4wOC0uMTQsLjFsLTEyLjYzLDEyLjU2Yy0uMTIsLjEyLS4yOCwuMTgtLjQ0LC4xOFpNMTUuMDQsMTAuNzNjLS43MiwwLTEuNDIsLjA5LTIuMSwuMjgtMi41MSwuNjgtNC40LDIuNTgtNS4wNiw1LjA4LS44OSwzLjM2LC41NCw3LjIyLDMuOTMsMTAuNTlsMTIuMywxMi4yNSwxMi4zMi0xMi4yNXMuMDktLjA3LC4xMy0uMWM1LjQzLTUuNDksNC45LTExLDIuMS0xMy44Mi0yLjg2LTIuODctOC40OC0zLjQyLTE0LjA5LDIuMTUtLjI0LC4yNC0uNjQsLjI0LS44OCwwLTIuNzMtMi43MS01Ljc4LTQuMTctOC42NC00LjE3WiIgc3R5bGU9ImZpbGw6Izg2MmIyZTsiLz48L2c+PC9zdmc+" alt="" />
                                            </div>
                                            <div class="cart-p-delete">
                                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0OC4yIDQ4LjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4LjIgNDguMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiM4NDI3MkE7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGlkPSJQYXRoXzE0MjIiIGNsYXNzPSJzdDAiIGQ9Ik0wLjEsMC4xdjQ4aDQ4di00OEgwLjF6IE00NS4xLDQ1LjFoLTQydi00Mmg0MlY0NS4xeiIvPgoJPGcgaWQ9Ikdyb3VwXzE0MzIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Ljg0IDUuMjUpIj4KCQk8cmVjdCB4PSIwLjEiIHk9IjEuOSIgY2xhc3M9InN0MSIgd2lkdGg9IjM0LjMiIGhlaWdodD0iMSIvPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00LjUsMzguN2MtMS4xLDAtMS45LTAuOS0xLjktMlYyLjRoMXYzNC4zYzAsMC41LDAuNCwxLDAuOSwxaDI1LjZjMC41LDAsMC45LTAuNSwwLjktMVYyLjRoMXYzNC4zCgkJCWMwLDEuMS0wLjgsMi0xLjksMkg0LjV6Ii8+CgkJPHJlY3QgeD0iOS44IiB5PSItMSIgY2xhc3M9InN0MSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjEiLz4KCQk8cmVjdCB4PSIxMS42IiB5PSI5LjIiIGNsYXNzPSJzdDEiIHdpZHRoPSIxIiBoZWlnaHQ9IjE5LjUiLz4KCQk8cmVjdCB4PSIyMiIgeT0iOS4yIiBjbGFzcz0ic3QxIiB3aWR0aD0iMSIgaGVpZ2h0PSIxOS41Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="cart-right">

                                <div class="cart-address-section">
                                    <div class="c-select-country">
                                        <fieldset>
                                            <legend>Country</legend>
                                            <select name="" id="">
                                                <option value="">in</option>
                                                <option value="">canada</option>
                                                <option value="">germany</option>
                                            </select>
                                        </fieldset>

                                    </div>
                                    <div class="cart-pincode-check">
                                        <input type="text" placeholder="Pincode" />
                                        <a href="" class="check">check</a>
                                    </div>
                                </div>
                                <div class="cart-billing-details">
                                    <div class="c-b-links">
                                        <a href="" >enter code</a>
                                        <a href="">view promo cards</a>
                                    </div>
                                    <div class="coupon-code">
                                        <input type="text" placeholder="Enter Coupon Code" />

                                        <button>apply</button>
                                    </div>
                                    <div class="order-summary">
                                        <div class="os-title">order summmary</div>
                                        <div class="billing-content">
                                            <div class="biil-left">sub total</div>
                                            <div class="bill-right" id="totalPrice">0</div>
                                        </div>
                                        <div class="billing-content">
                                            <div class="biil-left">discount</div>
                                            <div class="bill-right" id="discount">0</div>
                                        </div>
                                        <div class="billing-content">
                                            <div class="biil-left">delivery charges</div>
                                            <div class="bill-right">free</div>
                                        </div>
                                        <div class="billing-content">
                                            <div class="biil-left">total</div>
                                            <div class="bill-right" id="finalPrice">0</div>
                                        </div>
                                        <div class="billing-content">
                                            <div class="biil-left">you save</div>
                                            <div class="bill-right">2000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fixed-footer-checkout">
                        <div class="total-price-section">
                            <ul>
                                <li>Total</li>
                                <li><span>1</span>item</li>
                                <li class="bold-price-text">₹ <span id="ffTotal">0</span></li>
                            </ul>
                        </div>
                        <div class="checkout-section">
                            <a href="./index.html"><button class="continue-shopping-btn">Continue Shopping</button></a>
                            <a href="./successPage.html"><button class="checkout-btn">Proceed to Checkout</button></a>
                        </div>
                    </div>
                </div>
               
                <Footer />
            </div>

        </div>
    );
}

export default ProductCart;