import "../components/style.css";
import "../components/responsive.css";
import * as Icon from "react-bootstrap-icons";
import {AuthProtected} from "./AuthProtected";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState()
    const { state, dispatch } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false);
    const router = useNavigate()
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    // pass product id to backend and get product desc then display.
    useEffect(() => {
        const getSingleProduct = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`https://mern-tanishq-backend.onrender.com/getSingleProduct/${id}`);
                console.log(response, "response");
                if (response.data.success) {
                    setProduct(response.data.product)
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
        getSingleProduct()

    }, [id])  // product in displayed based on product id ...dependancy

    // add product to cart
    const addToCart = async () => {
        setIsLoading(true)
        if (id && state?.user) {
            try {
                console.log(typeof (id), "state?.user?.id");
                const { data } = await axios.post("http://localhost:8000/buyer/addToCart", { productId: id, userId: state?.user?.id })
                console.log(data, "data");
                if (data.success) {

                    // dispatch({
                    //     type: "AddToCart",
                    //     payload: data.product
                    // })
                    dispatch({
                        type: "AddToCart",
                        payload:  data.cart 
                    })
                    setCart(data.products);
                    setTotalPrice(data.total);
                    setTotalProducts(data.totalCartProducts);
                    toast.success("Product added to cart!")
                } else {
                    toast.error(data.error)
                }

            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false)
            }
        } else {
            toast.error("Internal server error!")
        }
    }

    return (

        <div>
            <Navbar />
            {isLoading ? (
                <div className="screen">
                    <div className="loader"></div>
                </div>
            ) : (
                <AuthProtected>
                    <div>
                        {product ? (

                            <div class="screen">
                                <div class="single-product-container">

                                    <div class="product-desc-wrapper" >
                                        <div class="product-desc-left">
                                            <div class="path">
                                                <span>Home</span>
                                                <span>|</span>
                                                <span>{product.category}</span>
                                                <span>|</span>
                                                <span className="ellipsis">{product.productName}</span>
                                            </div>
                                            <div class="product-left-img-wrapper">
                                                <div class="product-left-innerleft">
                                                    <div class="product-left-innerleft-img">
                                                        <img src={product.productImg} alt="/kj" />
                                                    </div>
                                                    <div class="product-left-innerleft-img">
                                                        <img src={product.productImg} alt="" />
                                                    </div>
                                                    <div class="product-left-innerleft-img">
                                                        <img src={product.productImg} alt="" />
                                                    </div>
                                                </div>
                                                <div class="product-left-innerright">
                                                    <div class="img-move-icon">
                                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAzMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAzMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMjcuOSAyNGgtMjRWMGgyNHYyNHoiIHN0eWxlPSJmaWxsOm5vbmUiIHRyYW5zZm9ybT0icm90YXRlKDkwIDEwLjk0IDEzLjA2KSIvPjxwYXRoIGQ9Im0yMSA0LjMtOS41IDkuNS05LjYtOS41TC0xIDcuMmwxMi41IDEyLjVMMjMuOSA3LjIgMjEgNC4zeiIgc3R5bGU9ImZpbGw6IzgzMjcyOTtzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6MyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTAuOTQgMTMuMDYpIi8+PC9zdmc+"
                                                            alt="" />
                                                    </div>
                                                    <div class="product-left-inner-right-img" id="singleProduct">
                                                        <div class="topSellerRgt">try on available</div>
                                                        <img src={product.productImg} class="got-image" alt="" />
                                                    </div>
                                                    <div class="img-move-icon">
                                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAzMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAzMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMjcuOSAyNGgtMjRWMGgyNHYyNHoiIHN0eWxlPSJmaWxsOm5vbmUiIHRyYW5zZm9ybT0icm90YXRlKC05MCAxNC40NzggMTQuNDc3KSIvPjxwYXRoIGQ9Im0yMSA0LjMtOS41IDkuNS05LjYtOS41TC0xIDcuMmwxMi41IDEyLjVMMjMuOSA3LjIgMjEgNC4zeiIgc3R5bGU9ImZpbGw6IzgzMjcyOTtzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6MyIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDE0LjQ3OCAxNC40NzcpIi8+PC9zdmc+"
                                                            alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <button class="try-btn">try it on</button>
                                        </div>
                                        <div class="product-desc-right">
                                            <div class="product-desc-right-innerleft">
                                                <div class="product-id">{product._id}</div>

                                                <div id="singleProductName" class="product-name"><div class="product-name">{product.productName}</div></div>

                                                <div class="p-desc-review">
                                                    <Icon.Star size={15} />
                                                    <Icon.Star size={15} />
                                                    <Icon.Star size={15} />
                                                    <Icon.Star size={15} />
                                                    <Icon.Star size={15} />
                                                    <sapn class="reveiw-text">Write a review</sapn>
                                                </div>
                                                <hr />
                                                <div class="p-related-text">As rosy as your exuberance, as sparkling as your wit!</div>
                                                <div class="price-section">
                                                    <div class="offerAndprice">
                                                        <span class="offer-txt">offer price</span>
                                                        <span class="rupee"> ₹ </span>
                                                        <span class="total-price" id="total-price"><span >{product.price}</span></span>
                                                    </div>
                                                    <div class="del-price">
                                                        <span>price</span>
                                                        <span> ₹ </span>
                                                        <span><del>26 019.00</del></span>
                                                    </div>

                                                </div>
                                                <div class="topSellerRgt">flat 5% off</div>
                                                <div class="qty-wrapper">
                                                    <div class="qty-txt">qty</div>
                                                    <div class="qty-content">
                                                        <div class="bg-gray">-</div>
                                                        <div class="qty-num">1</div>
                                                        <div class="qty-num">N</div>
                                                        <div class="bg-gray">+</div>
                                                    </div>
                                                </div>
                                                <div class="offer-txt">gold purity : 14 karat</div>
                                                <div class="p-related-text">Not sure What ti buy? Checkout our <span>Buying Guides</span></div>
                                                <div class="sp-buttons" id="forAddToCart" >
                                                    <button onClick={addToCart} class="sp-primary-btn">Add to cart</button>
                                                    <a class="sp-secondary-btn">buy now</a>
                                                </div>
                                                <hr />
                                                <div class="address-section">
                                                    <div class="select-country">
                                                        <select name="" id="">
                                                            <option value="">india</option>
                                                            <option value="">canada</option>
                                                            <option value="">germany</option>
                                                        </select>
                                                    </div>
                                                    <div class="pincode-check">
                                                        <input type="text" placeholder="Pincode" />
                                                        <a href="" class="check">check</a>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div class="product-services">
                                                    <div class="p-service">
                                                        <div class="p-service-img">
                                                            <img src="https://www.tanishq.co.in/wps/wcm/connect/tanishqrt/1018d041-8048-466a-9cbd-4175282d71a9/18.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0T6206GQH590V3000-1018d041-8048-466a-9cbd-4175282d71a9-o8Bg5hY"
                                                                alt="" />
                                                        </div>
                                                        <div class="p-service-name">Purity Guaranteed</div>
                                                    </div>
                                                    <div class="p-service">
                                                        <div class="p-service-img">
                                                            <img src="https://www.tanishq.co.in/wps/wcm/connect/tanishqrt/52d69400-d953-466a-8976-3e71e438f40c/19.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0T6206GQH590V3000-52d69400-d953-466a-8976-3e71e438f40c-o8BgeIR"
                                                                alt="" />
                                                        </div>
                                                        <div class="p-service-name">Easy Returns</div>
                                                    </div>
                                                    <div class="p-service">
                                                        <div class="p-service-img">
                                                            <img src="https://www.tanishq.co.in/wps/wcm/connect/tanishqrt/c99d35eb-6c32-429b-a2b2-84966bced2f5/20.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0T6206GQH590V3000-c99d35eb-6c32-429b-a2b2-84966bced2f5-o8Bgj5d"
                                                                alt="" />
                                                        </div>
                                                        <div class="p-service-name">Free Shipping across India</div>
                                                    </div>
                                                </div>
                                                <div class="product-guide">
                                                    <div class="product-guide-header">still confused what to but?</div>
                                                    <p class="p-guide-text">Get on live video call with our design experts, or visit your
                                                        nearest Tanishq store to get an closer look and know more about the product.</p>
                                                    <button class="p-guide-btn">Talk to an Expert</button>

                                                </div>
                                                <hr />
                                            </div>
                                            <div class="product-desc-right-innerright">
                                                <div class="p-d-r-r-img">
                                                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0OCA0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDggNDg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lam9pbjpyb3VuZDt9Cjwvc3R5bGU+CjxnIGlkPSJjIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj4KCTxwYXRoIGlkPSJQYXRoXzE0MjUiIGNsYXNzPSJzdDAiIGQ9Ik0wLDB2NDhoNDhWMEgweiBNNDUsNDVIM1YzaDQyVjQ1eiIvPgoJPHBhdGggaWQ9IlBhdGhfMTQyNiIgY2xhc3M9InN0MSIgZD0iTTM2LjcsMjdMMjQsMzkuN0wxMS4yLDI3QzAsMTUuOCwxMi43LDMuMSwyNCwxNC4zQzM1LjQsMyw0OC4yLDE1LjYsMzYuNywyN0wzNi43LDI3eiIvPgo8L2c+Cjwvc3ZnPgo="
                                                        alt="" />
                                                </div>
                                                <div class="p-d-r-r-img">
                                                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0OCA0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDggNDg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7b3BhY2l0eTowLjQ2O30KCS5zdDF7ZmlsbDpub25lO30KCS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMjMxRjIwO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGc+Cgk8ZyBpZD0iYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCkiPgoJCTxnIGlkPSJHcm91cF8xNDIyNSIgY2xhc3M9InN0MCI+CgkJCTxwYXRoIGlkPSJQYXRoXzEzODYiIGNsYXNzPSJzdDEiIGQ9Ik0wLDB2NDhoNDhWMEgweiBNNDUsNDVIM1YzaDQyVjQ1eiIvPgoJCTwvZz4KCTwvZz4KCTxnIGlkPSJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjk5IDMuMDk2KSI+CgkJPGcgaWQ9Ikdyb3VwXzE0MjI3Ij4KCQkJPGxpbmUgaWQ9IkxpbmVfMTAzIiBjbGFzcz0ic3QyIiB4MT0iMzEiIHkxPSI0MC4xIiB4Mj0iMzAuNyIgeTI9IjM5LjkiLz4KCQkJPGxpbmUgaWQ9IkxpbmVfMTA0IiBjbGFzcz0ic3QyIiB4MT0iMjQiIHkxPSIzNS4xIiB4Mj0iNy41IiB5Mj0iMjMuMSIvPgoJCQk8cGF0aCBpZD0iUGF0aF8xMzg3IiBjbGFzcz0ic3QyIiBkPSJNMzEuNSwzNy41YzAsMC45LTAuMywxLjctMC44LDIuNGMtMC43LDEuMS0yLDEuOC0zLjQsMS44Yy0yLjQtMC4xLTQuMi0yLjEtNC4xLTQuNQoJCQkJYzAtMC44LDAuMy0xLjYsMC43LTIuMmMwLjctMS4xLDItMS44LDMuNC0xLjhDMjkuNywzMy4yLDMxLjUsMzUuMiwzMS41LDM3LjVMMzEuNSwzNy41eiIvPgoJCQk8bGluZSBpZD0iTGluZV8xMDUiIGNsYXNzPSJzdDIiIHgxPSIyNCIgeTE9IjYuNyIgeDI9IjcuNSIgeTI9IjE4LjMiLz4KCQkJPGxpbmUgaWQ9IkxpbmVfMTA2IiBjbGFzcz0ic3QyIiB4MT0iMzEiIHkxPSIxLjgiIHgyPSIzMC44IiB5Mj0iMS45Ii8+CgkJCTxwYXRoIGlkPSJQYXRoXzEzODgiIGNsYXNzPSJzdDIiIGQ9Ik0zMS41LDQuM2MwLDIuMy0xLjgsNC4yLTQuMSw0LjNjLTEuNCwwLTIuNi0wLjctMy40LTEuOWMtMC41LTAuNy0wLjctMS41LTAuNy0yLjQKCQkJCUMyMy4yLDIsMjUuMSwwLjEsMjcuNCwwYzAsMCwwLDAsMCwwYzEuNCwwLDIuNywwLjcsMy40LDEuOUMzMS4zLDIuNiwzMS41LDMuNCwzMS41LDQuM0wzMS41LDQuM3oiLz4KCQkJPHBhdGggaWQ9IlBhdGhfMTM4OSIgY2xhc3M9InN0MiIgZD0iTTguMiwyMC43YzAsMC45LTAuMiwxLjctMC44LDIuNGMtMC43LDEuMS0yLDEuOC0zLjQsMS44Yy0yLjQtMC4xLTQuMi0yLjEtNC4xLTQuNQoJCQkJYzAuMS0yLjIsMS45LTQsNC4xLTQuMWMxLjQsMCwyLjcsMC43LDMuNCwxLjlDOCwxOSw4LjIsMTkuOCw4LjIsMjAuN0w4LjIsMjAuN3oiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="
                                                        alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="s-p-banner-img">
                                        <img src="https://www.tanishq.co.in/wps/wcm/connect/tanishqrt/d1f34107-0514-42d9-9905-ce94f32695d2/desktop/safeD.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0T6206GQH590V3000-d1f34107-0514-42d9-9905-ce94f32695d2-desktop-o8BE4jn"
                                            alt="" />
                                        {/* <img src={} alt="" /> */}
                                    </div>
                                    <div class="s-p-p-details">
                                        <div class="product-details-section">
                                            <div class="product-details">
                                                <div class="p-details-title">product details</div>
                                                <div class="p-details-subtitle">
                                                    <h2>specifications</h2>
                                                    <div class="p-deatails-moveimg-wrapper">
                                                        <div class="pdeatails-move">
                                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0uMS4xdjMyaDMyVi4xSC4xek0zMCAzMEgyVjJoMjh2Mjh6IiBzdHlsZT0iZmlsbDpub25lIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtLjA1IC0uMDUpIi8+PHBhdGggZD0iTTIxIDI1LjkgMTEuMSAxNmw5LjgtOS44IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMjMxZjIwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtLjA1IC0uMDUpIi8+PC9zdmc+"
                                                                alt="" />
                                                        </div>
                                                        <div class="pdeatails-move">
                                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0wIDB2MzJoMzJWMEgwem0zMCAzMEgyVjJoMjh2Mjh6IiBzdHlsZT0iZmlsbDpub25lIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYuMDI1IDE2LjAyNSkiLz48cGF0aCBkPSJNMjEgMjUuOSAxMS4xIDE2bDkuOC05LjgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTAiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNi4wMjUgMTYuMDI1KSIvPjwvc3ZnPg=="
                                                                alt="" />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="p-d-content">
                                                    <div class="p-d-item">
                                                        <div class="p-d-feature-name">Gem stone 1:</div>
                                                        <div class="p-d-feature">synthetic|2</div>
                                                    </div>
                                                    <div class="p-d-item">
                                                        <div class="p-d-feature-name">quantity:</div>
                                                        <div class="p-d-feature">1</div>
                                                    </div>
                                                    <div class="p-d-item">
                                                        <div class="p-d-feature-name">brand:</div>
                                                        <div class="p-d-feature">mia</div>
                                                    </div>
                                                    <div class="p-d-item">
                                                        <div class="p-d-feature-name">style:</div>
                                                        <div class="p-d-feature">traditional</div>
                                                    </div>
                                                    <div class="p-d-item">
                                                        <div class="p-d-feature-name">size 1:</div>
                                                        <div class="p-d-feature">a</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-detail-img">
                                                <img src={product.productImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-story">
                                        <div class="product-story-header">

                                            <div class="p-details-title">product story</div>
                                            <div class="p-d-down-arrow">
                                                <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E"
                                                    alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="more-info">
                                        <div class="more-info-header">

                                            <div class="p-details-title">more information</div>
                                            <div class="p-d-down-arrow">
                                                <img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E"
                                                    alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="p-buying-guides">
                                        <div class="p-buying-guides-header">
                                            <div class="p-details-title">buying guides</div>
                                        </div>
                                        <div class="p-buying-guide-container">
                                            <div class="p-bg-img">
                                                <img src="https://www.tanishq.co.in/wps/wcm/connect/tanishq/3da153bb-9189-40de-940e-c5155b08b515/Guides-Ecomm-Banner-2.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-3da153bb-9189-40de-940e-c5155b08b515-m-yFjiV"
                                                    alt="" />
                                            </div>
                                            <div class="p-bg-img">
                                                <img src="https://www.tanishq.co.in/wps/wcm/connect/tanishq/f546eb67-a13a-46bb-a8ea-91e2b3eaa50a/Guides-Ecomm-Banner-3.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-f546eb67-a13a-46bb-a8ea-91e2b3eaa50a-m-yFjiV"
                                                    alt="" />
                                            </div>
                                            <div class="p-bg-img">
                                                <img src="https://www.tanishq.co.in/wps/wcm/connect/tanishq/6b9c9176-df13-4b5c-aff3-761857772999/Guides-Ecomm-Banner-1.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-6b9c9176-df13-4b5c-aff3-761857772999-m-yFjiV"
                                                    alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="review-inDetail">
                                        <div class="review-inDetail-header">
                                            <div class="p-details-title">review</div>
                                        </div>
                                        <div class="review-inDetail-content">
                                            <div class="p-review-icon">
                                                <Icon.Star size={20} className="m-1" />
                                                <Icon.Star size={20} className="m-1" />
                                                <Icon.Star size={20} className="m-1" />
                                                <Icon.Star size={20} className="m-1" />
                                                <Icon.Star size={20} className="m-1" />
                                                <sapn class="p-reveiw-text">0 review</sapn>
                                            </div>
                                            <div class="p-r-btn-wrapper">
                                                <button class="p-r-btn">write a review</button>
                                                <button class="p-r-btn">ask a question</button>
                                            </div>
                                        </div>
                                        <div class="write-review-que">
                                            <div class="write-review-link">
                                                <a href="">
                                                    <div class="customer-response review-active-link">reviews</div>
                                                </a>
                                                <a href="">
                                                    <div class="customer-response">questions</div>
                                                </a>
                                            </div>
                                            <div class="review-container">
                                                <div class="review-stars">
                                                    <Icon.Star size={20} />
                                                    <Icon.Star size={20} />
                                                    <Icon.Star size={20} />
                                                    <Icon.Star size={20} />
                                                    <Icon.Star size={20} />
                                                </div>
                                                <div class="write-first-review">
                                                    <button>be th first to write a review</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="suggested-products">
                                        <div class="sggested-product-title">customers who viewd this also viewed </div>
                                        <div class="suggested-product-container">
                                            <div class="s-p-control">
                                                <Icon.ChevronLeft size={20} />
                                            </div>
                                            <div class="s-p-products-wrapper">

                                                <a href="">
                                                    <div class="products">
                                                        <div class="product-image">

                                                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/500073DRAABA32_1.jpg?impolicy=pqmed&imwidth=640"
                                                                alt="" />
                                                        </div>
                                                        <div class="product-info">
                                                            {/* <!-- <div class="hurry">only 1 left in stock</div> --> */}
                                                            <div class="p-name">Dainty Leaf Diamond Hoop Earrings</div>
                                                            <div class="p-price">₹ 35797</div>
                                                            {/* <!-- <div class="p-path">women | earings</div> -->
                                                            <!-- <button class="explorer-btn">explore now</button> --> */}
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="">
                                                    <div class="products">
                                                        <div class="product-image">
                                                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/502118HBEABA09_1.jpg?impolicy=pqmed&imwidth=640"
                                                                alt="" />
                                                        </div>
                                                        <div class="product-info">
                                                            {/* <!-- <div class="hurry">only 1 left in stock</div> --> */}
                                                            <div class="p-name">Dainty Leaf Diamond Hoop Earrings</div>
                                                            <div class="p-price">₹ 35797</div>
                                                            {/* <!-- <div class="p-path">women | earings</div> -->
                                                            <!-- <button class="explorer-btn">explore now</button> --> */}
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="">
                                                    <div class="products">
                                                        <div class="product-image">
                                                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/50D2FFSGPAGA29.jpg?impolicy=pqmed&imwidth=640"
                                                                alt="" />
                                                        </div>
                                                        <div class="product-info">
                                                            {/* <!-- <div class="hurry">only 1 left in stock</div> --> */}
                                                            <div class="p-name">Dainty Leaf Diamond Hoop Earrings</div>
                                                            <div class="p-price">₹ 35797</div>
                                                            {/* <!-- <div class="p-path">women | earings</div> -->
                                                            <!-- <button class="explorer-btn">explore now</button> --> */}
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="">
                                                    <div class="products">
                                                        <div class="product-image">
                                                            <img src="https://staticimg.titan.co.in/Tanishq/Catalog/51D2D1DBPABA00_1.jpg?impolicy=pqmed&imwidth=640"
                                                                alt="" />
                                                        </div>
                                                        <div class="product-info">
                                                            {/* <!-- <div class="hurry">only 1 left in stock</div> --> */}
                                                            <div class="p-name">Dainty Leaf Diamond Hoop Earrings</div>
                                                            <div class="p-price">₹ 35797</div>
                                                            {/* <!-- <div class="p-path">women | earings</div> -->
                                                            <!-- <button class="explorer-btn">explore now</button> --> */}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="s-p-control">
                                                <Icon.ChevronRight size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        ) : (
                            <div className="screen">
                                <div className="cFooterImgContent">
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0b18ddbd/errorPage/404-Desktop.png" alt="" />
                                    <button onClick={() => router('/')} className="checkout-btn">Continue shopping</button>
                                </div>

                            </div>
                        )}
                    </div>
                </AuthProtected>
            )}
            <Footer />
        </div>

    );
}

export default SingleProduct;
