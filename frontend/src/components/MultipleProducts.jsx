import "../components/style.css";
import "../components/responsive.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const MultipleProducts = () => {
    const router = useNavigate()
    const [products, setProducts] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getAllProducts = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get('http://localhost:8000/getAllProducts');
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
    }, [])

    return (
        <div>
            <Navbar />
            {isLoading ? (
                <div className="screen">
                    <div className="loader"></div>
                </div>
            ) : (
                <div>
                    {products?.length ? (
                        <div className="screen">
                            <div className="nav-subcategory">
                                <div className="nav-sc-container">
                                    <li><a href="">price<Icon.ChevronDown /></a></li>
                                    <li><a href="">jewellery type<Icon.ChevronDown /></a></li>
                                    <li><a href="">product<Icon.ChevronDown /></a></li>
                                    <li><a href="">gender<Icon.ChevronDown /></a></li>
                                    <li><a href="">metal color<Icon.ChevronDown /></a></li>
                                    <li><a href="">coin grammage<Icon.ChevronDown /></a></li>
                                    <li><a href="">see more filters<Icon.ChevronDown /></a></li>
                                </div>
                            </div>
                            <div className="nav-services">
                                <div className="nav-service">
                                    <div className="nav-s-img">
                                        <Icon.ShopWindow className="bIcon" />
                                    </div>
                                    <div className="nav-s-text">store locator</div>
                                </div>
                                <div className="nav-service">
                                    <div className="nav-s-img">
                                        <Icon.Shop className="bIcon" />
                                    </div>
                                    <div className="nav-s-text">book an appointment</div>
                                </div>
                                <div className="nav-service">
                                    <div className="nav-s-img">
                                        <Icon.PhoneLandscape className="bIcon" />
                                    </div>
                                    <div className="nav-s-text">live video call</div>
                                </div>
                            </div>

                            <div className="products-container">
                                <div className="path">
                                    <span>Home</span>
                                    <span>|</span>
                                    <span>jewellery</span>
                                </div>
                                <div className="product-count"><span>Jewellery</span></div>
                                <div className="function-btn-wrapper">
                                    <button className="function-btn" disabled><i className="fa-solid fa-repeat"></i>Compare</button>
                                    <button className="function-btn">sort by: best sellers<Icon.ChevronDown /></button>
                                </div>
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
                                                    <div className="p-path">women | earings</div>
                                                    <button className="explorer-btn" onClick={() => router(`/singleProduct/${p._id}`)}>explore now</button>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ) : (  
                        <div className="screen">
                            <div className="spFooterImgContent" >
                                <img src="https://stores.maxfashion.in/VendorpageTheme/Enterprise/EThemeForMax/images/product-not-found.jpg" alt="" />
                                <button onClick={() => router('/')} className="fbtn">Continue shopping</button>
                            </div>
                        </div>
                    )}
                </div>
            )}
            <Footer />

        </div>
    );
}

export default MultipleProducts;