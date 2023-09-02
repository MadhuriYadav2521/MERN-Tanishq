import "../components/style.css";
import "../components/responsive.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "./Navbar";

const SuccessPage = () => {
    return (
        <div>

            <div className="screen">
               <Navbar />

                <div className="success-bg">
                    <div className="success-msg-container">
                        <div className="success-msg-title">Your order has been placed!</div>
                        <div className="succes-msg-content">Confirmation will be sent to your email.</div>
                        <div className="succes-msg-content">Shipping to <span id="ac_holder"></span> Panvel, MUMBAI, MAHARASHTRA,
                            400064,India</div>
                        <div className="succes-msg-content">Phone Number: <span>9172911770</span></div>
                        <div className="success-msg-last-text">Thanks for shopping with us!</div>
                        <a href="./index.html" className="success-order-continue-shopping-btn">Continue Shopping</a>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default SuccessPage;