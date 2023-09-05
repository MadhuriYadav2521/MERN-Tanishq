import "../components/style.css";
import "../components/responsive.css";
import * as Icon from "react-bootstrap-icons";

const Footer = () => {
    return (
        <div>

            <footer style={{marginTop:"2rem"}}>
                <div className="footer-section">
                    <div className="footer-top">
                        <div className="useful-links">
                            <div className="footer-title">
                                <h1 className="jg-title">useful links</h1>
                                <a href="" className="footer-plus-icon">+</a>
                            </div>
                            <div className="f-l-item">
                                <a href="">delivery information</a>
                                <a href="">international shipping</a>
                                <a href="">payment options</a>
                                <a href="">track your orders</a>
                                <a href="">returns</a>
                                <a href="">find a store</a>
                            </div>
                        </div>
                        <div className="information">
                            <div className="footer-title">
                                <h1 className="jg-title">information</h1>
                                <a className="footer-plus-icon">+</a>
                            </div>
                            <div className="f-l-item">
                                <a href="">career</a>
                                <a href="">blog</a>
                                <a href="">offers & contest details</a>
                                <a href="">help & FAQS</a>
                                <a href="">about tanishq</a>
                            </div>

                        </div>
                        <div className="contct-us">
                            <div className="footer-title">
                                <h1 className="jg-title">contact us</h1>
                                <a className="footer-plus-icon">+</a>
                            </div>
                            <div className="f-l-item">
                                <a href="">write to us</a>
                                <a href="">188-266-0123</a>
                                <a href="">chat with us</a>
                            </div>
                        </div>
                        <div className="social-links">
                            <h1 className="footer-text">Download the tanishq app now</h1>
                            <div className="sl-img-wrapper">
                                <div className="sl-img">
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3727ec18/images/footer/appstore-d.png" alt="" />
                                </div>
                                <div className="sl-img">
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwa17f8ad4/images/footer/Component%20145%20–%201@2x.png" alt="" />
                                </div>
                            </div>
                            <div className="social-account">
                                <h1 className="footer-text">follow us on</h1>
                                <div className="sa-img-wrapper">
                                    <div className="sa-img"><Icon.Instagram size={20} /></div>
                                    <div className="sa-img"><Icon.Twitter size={20} /></div>
                                    <div className="sa-img"><Icon.Facebook size={20} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-container-2">
                        <div className="footer-last-div">
                            <div className="footer-last-left-div">
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/visa.svg" alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/master.svg "
                                        alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/paypal.svg "
                                        alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/maestro.svg "
                                        alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/rupay.svg " alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/icici.svg " alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/axis.svg " alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/diners.svg "
                                        alt="" />
                                </div>
                                <div className="footer-payment-image">
                                    <img src="https://staticimg.titan.co.in/Tanishq/Banners/icons/footer/amex.svg " alt="" />
                                </div>
                            </div>
                            <div className="footer-last-right-div">
                                <p>© 2023 Titan Company Limited. All Rights Reserved.</p>
                                <p>Terms & conditions | privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        </div>
    );
}

export default Footer;
