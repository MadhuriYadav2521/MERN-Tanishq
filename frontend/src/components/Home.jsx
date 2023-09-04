import "../components/style.css";
import "../components/responsive.css";
import * as Icon from "react-bootstrap-icons";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
   
    return (
        <div>

            <div className="screen">
               <Navbar />
                <div className="image-slider">
                    <div id="slider">
                        <input type="radio" name="slider" id="slide1" checked />
                        <input type="radio" name="slider" id="slide2" />
                        <input type="radio" name="slider" id="slide3" />
                        <input type="radio" name="slider" id="slide4" />
                        <div id="slides">
                            <div id="overflow">
                                <div className="inner">
                                    <div className="slide slide_1">
                                        <div className="slide-content">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe16745e5/homepage/HeroBanner/tom-dbanner.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="slide slide_2">
                                        <div className="slide-content">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwdecbdba5/homepage/HeroBanner/desktop-ion.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="slide slide_3">
                                        <div className="slide-content">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw03f65359/homepage/HeroBanner/dordesktopnew.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="slide slide_4">
                                        <div className="slide-content">
                                            <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwf81546aa/homepage/HeroBanner/fod-desktop.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="bullets">
                            <label htmlFor="slide1"></label>
                            <label htmlFor="slide2"></label>
                            <label htmlFor="slide3"></label>
                            <label htmlFor="slide4"></label>
                        </div>
                    </div>

                </div>
                <div className="shop-by-category">
                    <div className="container-header">
                        <div className="container-title">shop jewellery by category</div>
                        <div className="container-subtitle">Browse through your favourite categories. We've got them all!</div>
                        <div className="container-img"><img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" /></div>
                    </div>
                    <div className="sbc-conent-wrapper">
                        <div className="sbc-content-left">
                            <a href="./mutiple-products.html">
                                <div className="sbc-content">
                                    <div className="sbc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw489aca65/homepage/shopByCategory/GoldCoin.png" alt="" />
                                    </div>
                                    <div className="sbc-name">gold coins</div>
                                    <div className="sbc-explorer">explorer<Icon.ChevronRight /></div>
                                </div>
                            </a>
                            <a href="./mutiple-products.html">
                                <div className="sbc-content">
                                    <div className="sbc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw61d76aef/homepage/shopByCategory/Pendant.png" alt="" />
                                    </div>
                                    <div className="sbc-name">earrings</div>
                                    <div className="sbc-explorer">explorer<Icon.ChevronRight /></div>
                                </div>
                            </a>
                            <a href="./mutiple-products.html">
                                <div className="sbc-content">
                                    <div className="sbc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw8ea34f31/homepage/shopByCategory/earrings-new.jpg" alt="" />
                                    </div>
                                    <div className="sbc-name">pendents</div>
                                    <div className="sbc-explorer">explorer<Icon.ChevronRight /></div>
                                </div>
                            </a>
                            <a href="./mutiple-products.html">
                                <div className="sbc-content">
                                    <div className="sbc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw215de9c7/homepage/shopByCategory/CoupleRing.png" alt="" />
                                    </div>
                                    <div className="sbc-name">emgagement rings</div>
                                    <div className="sbc-explorer">explorer<Icon.ChevronRight /></div>
                                </div>
                            </a>
                            <a href="./mutiple-products.html">
                                <div className="sbc-content">
                                    <div className="sbc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwccb8edee/homepage/shopByCategory/Chain.png" alt="" />
                                    </div>
                                    <div className="sbc-name">chains</div>
                                    <div className="sbc-explorer">explorer<Icon.ChevronRight /></div>
                                </div>
                            </a>
                            <a href="./mutiple-products.html">
                                <div className="sbc-content">
                                    <div className="sbc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw94a5b614/homepage/shopByCategory/Bangle.png" alt="" />
                                    </div>
                                    <div className="sbc-name">bangles</div>
                                    <div className="sbc-explorer">explorer<Icon.ChevronRight /></div>
                                </div>
                            </a>
                        </div>
                        <div className="sbc-content-right">
                            <a href="./mutiple-products.html">
                                <div className="sbc-content">
                                    <div className="sbc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw11da1930/homepage/shopByCategory/Ring.png" alt="" />
                                    </div>
                                    <div className="sbc-name">finger rings</div>
                                    <div className="sbc-explorer">explorer<Icon.ChevronRight /></div>
                                </div>
                            </a>
                            <a href="./mutiple-products.html">
                                <div className="sbc-content">
                                    <div className="sbc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw311c9ba4/homepage/shopByCategory/mangalsutras-new.jpg" alt="" />
                                    </div>
                                    <div className="sbc-name">mungalsutra</div>
                                    <div className="sbc-explorer">explorer<Icon.ChevronRight /></div>
                                </div>
                            </a>
                            <a href="./mutiple-products.html">
                                <div className="sbc-content">
                                    <div className="sbc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwefbcce7b/homepage/shopByCategory/Neckwear.png" alt="" />
                                    </div>
                                    <div className="sbc-name">neckwear</div>
                                    <div className="sbc-explorer">explorer<Icon.ChevronRight /></div>
                                </div>
                            </a>
                            <a href="./mutiple-products.html">
                                <div className="sbc-content">
                                    <div className="sbc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw5b3c542d/homepage/shopByCategory/bracelets-new.jpg" alt="" />
                                    </div>
                                    <div className="sbc-name">bracelate</div>
                                    <div className="sbc-explorer">explorer<Icon.ChevronRight /></div>
                                </div>
                            </a>
                            <a href="./mutiple-products.html">
                                <div className="sbc-content">
                                    <div className="sbc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw6e9345c0/homepage/shopByCategory/nosepins-new.jpg" alt="" />
                                    </div>
                                    <div className="sbc-name">nosepin</div>
                                    <div className="sbc-explorer">explorer<Icon.ChevronRight /></div>
                                </div>
                            </a>
                            <a href="./mutiple-products.html">
                                <div className="sbc-content">
                                    <div className="sbc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwacf40d1b/homepage/shopByCategory/pendant-set-new.jpg" alt="" />
                                    </div>
                                    <div className="sbc-name">pendent set</div>
                                    <div className="sbc-explorer">explorer<Icon.ChevronRight /></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="shop-by-collection">
                    <div className="container-header">
                        <div className="container-title">shop by collection</div>
                        <div className="container-subtitle">Whatever the occasion, we've got a beautiful piece of jewellery for you.
                        </div>
                        <div className="container-img"><img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" /></div>
                    </div>
                    <div className="sc-content-wrapper">
                        <a href="">
                            <div className="sc-content">
                                <div className="sc-img">
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2b1c328d/homepage/ShopByCollection/dor-homepage-new.jpg" alt="" />
                                </div>
                                <div className="sc-text">
                                    <div className="sbc-name">dor</div>
                                    <div className="sbc-explorer">exlporer more<Icon.ChevronRight /></div>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="sc-content">
                                <div className="sc-img">
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2b9560ad/homepage/ShopByCollection/exclusive-coins-homepage.jpg" alt="" />
                                </div>
                                <div className="sc-text">
                                    <div className="sbc-name">exclusive coins</div>
                                    <div className="sbc-explorer">exlporer now<Icon.ChevronRight /></div>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="sc-content">
                                <div className="sc-img">
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw38c90fd5/homepage/ShopByCollection/stunning-ear-homepage.jpg" alt="" />
                                </div>
                                <div className="sc-text">
                                    <div className="sbc-name">stunning every ear</div>
                                    <div className="sbc-explorer">exlporer more<Icon.ChevronRight /></div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="top-sellers">
                    <div className="container-header">
                        <div className="container-title">top sellers</div>
                        <div className="container-subtitle">Check out the products that our customers love the most</div>
                        <div className="container-img"><img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd9a3b5d2/Line-Design.svg" alt="" /></div>
                    </div>
                    <div className="ts-content-wrapper">
                        <a href="">
                            <div className="ts-content">
                                <div className="ts-img">
                                    <div className="topSellerRgt">Top Seller</div>
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/51F2JPPGBAAA00_1.jpg" alt="" />
                                </div>
                                <div className="ts-text">
                                    <div className="ts-product-name">Sleek Gold Foxtail Chain</div>
                                    <div className="ts-price">₹ 29201</div>
                                    <span className="explorer-btn1">Explorer</span>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="ts-content">
                                <div className="ts-img">
                                    <div className="topSellerRgt">Top Seller</div>
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/51F2JPPGNAAA00_1.jpg" alt="" />
                                </div>
                                <div className="ts-text">
                                    <div className="ts-product-name">Surreal Modern Abstract Floral Gold Pendant</div>
                                    <div className="ts-price">₹ 5761</div>
                                    <span className="explorer-btn1">Explorer</span>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="ts-content">
                                <div className="ts-img">
                                    <div className="topSellerRgt">Top Seller</div>
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/51F2JPPGDAAA00_1.jpg" alt="" />
                                </div>
                                <div className="ts-text">
                                    <div className="ts-product-name">Radiant R Letter Gold Pendant</div>
                                    <div className="ts-price">₹ 8675</div>
                                    <span className="explorer-btn1">Explorer</span>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div className="ts-content">
                                <div className="ts-img">
                                    <div className="topSellerRgt">Top Seller</div>
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/images/hi-res/504007SJGABA09_1.jpg" alt="" />
                                </div>
                                <div className="ts-text">
                                    <div className="ts-product-name">22 KT Yellow Gold Artsy Stud Earrings</div>
                                    <div className="ts-price">₹ 30604</div>
                                    <span className="explorer-btn1">Explorer</span>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>

                <div className="new-for-you">
                    <div className="container-header">
                        <div className="container-title">new for you</div>
                        <div className="container-subtitle">Our latests relaeses, just for you!</div>
                        <div className="container-img"><img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" /></div>
                    </div>
                    <div className="nfy-content-wrapper">
                        <a href="">
                            <div className="nfy-content">
                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw113e5f6c/homepage/NewForYou/sparkling-avenues.jpg" alt="" />
                                <button className="explorer-btn">Explorer more</button>
                            </div>
                        </a>
                        <a href="">
                            <div className="nfy-content">
                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw6592f9dc/homepage/NewForYou/pretty-in-pink.jpg" alt="" />
                                <button className="explorer-btn">Explorer more</button>
                            </div>
                        </a>
                        <a href="">
                            <div className="nfy-content">
                                <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw34bef508/homepage/NewForYou/zodiac-coins.jpg" alt="" />
                                <button className="explorer-btn">Explorer more</button>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="shop-by-gender">
                    <div className="container-header">
                        <div className="container-title">shop by Gender</div>
                        <div className="container-subtitle">Whatever the occasion, we've got a beautiful piece of jewellery for you.
                        </div>
                        <div className="container-img"><img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" /></div>
                    </div>
                    <div className="sbg-content-wrapper">
                        <a href="">
                            <div className="sc-content">
                                <div className="sc-img">
                                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc0abe627/homepage/ShopByGender/Woman.jpg" alt="" />
                                </div>
                                <div className="sc-text">
                                    <div className="sbc-name">women</div>
                                    <div className="sg-sbc-explorer">exlporer more<Icon.ChevronRight /></div>
                                </div>
                            </div>
                        </a>
                        <div className="sbg-img-wrapper">
                            <a href="">
                                <div className="sc-content">
                                    <div className="sc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwef4310c0/homepage/ShopByGender/Men.jpg" alt="" />
                                    </div>
                                    <div className="sc-text">
                                        <div className="sbc-name">men</div>
                                        <div className="sg-sbc-explorer">exlporer more<Icon.ChevronRight />
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="sc-content">
                                    <div className="sc-img">
                                        <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw24db1907/homepage/ShopByGender/kid.jpg" alt="" />
                                    </div>
                                    <div className="sc-text">
                                        <div className="sbc-name">kids</div>
                                        <div className="sg-sbc-explorer">exlporer more<Icon.ChevronRight />
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="banner-img">
                    <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb321e397/homepage/posters/giftingbannerdesktop.jpg" alt="" />
                    <button className="explorer-btn">Explorer more</button>
                </div>
                <div className="banner-video">
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/omr0ZiQhUAo?autoplay=1&mute=1"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                    <button className="explorer-btn">Explorer more</button>

                </div>
                <div className="rivah-banner">
                    <div className="rivah-img">
                        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw93b25375/homepage/posters/Rivaah-Bride.jpg" alt="" />
                    </div>
                    <div className="rivah-img">
                        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfc13fe09/homepage/posters/rivah_desktop.jpg" alt="" />
                        <a className="explorer-btn">Arrange a Callback</a>
                        <a className="explorer-btn">Explorer more</a>

                    </div>
                </div>

                <div className="jewellery-guides">
                    <div className="container-header">
                        <div className="container-title">jewellery guides</div>
                        <div className="container-subtitle">Check out our ready made guides to make your buying easier.</div>
                        <div className="container-img"><img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" /></div>
                    </div>
                    <div className="jg-content-wrapper">
                        <div className="jg-img">
                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw82419527/images/home/findringsize.svg" alt="" />
                            <h2 className="jg-title">find your ring size</h2>
                            <div className="jg-button">exlpore now
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwff097cd2/images/home/Arrow-right-long.svg" alt="" />
                            </div>
                        </div>
                        <div className="jg-img">
                            <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw40c95bdc/images/home/jewllerycare.svg" alt="" />
                            <h2 className="jg-title">the jewellery care guide</h2>
                            <div className="jg-button">exlpore now
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwff097cd2/images/home/Arrow-right-long.svg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="contact-section">
                    <div className="container-header">
                        <div className="container-title">Connect with us</div>
                        <div className="container-subtitle">We are always available to guide you at your convience</div>
                        <div className="container-img"><img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg" alt="" /></div>
                    </div>
                    <div className="contact-wrapper">
                        <div className="cs-content">
                            <div className="cs-text">
                                <div className="jg-title">connect on</div>
                                <div className="cs-bold">whatsapp</div>
                                <div className="jg-button">Connect
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwff097cd2/images/home/Arrow-right-long.svg" alt="" />
                                </div>
                            </div>
                            <div className="cs-img">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw9fa2f775/images/home/whatsapp-icon.svg" alt="" />
                            </div>
                        </div>
                        <div className="cs-content">
                            <div className="cs-text">
                                <div className="jg-title">book an</div>
                                <div className="cs-bold">Appointment</div>
                                <div className="jg-button">Book
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwff097cd2/images/home/Arrow-right-long.svg" alt="" />
                                </div>
                            </div>
                            <div className="cs-img">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwac5fb555/images/home/marker-icon.svg" alt="" />
                            </div>
                        </div>
                        <div className="cs-content">
                            <div className="cs-text">
                                <div className="jg-title">Schedule a</div>
                                <div className="cs-bold">Video Call</div>
                                <div className="jg-button">Schedule
                                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwff097cd2/images/home/Arrow-right-long.svg" alt="" />
                                </div>
                            </div>
                            <div className="cs-img">
                                <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw153e7692/images/home/video-icon.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

               <Footer />
            </div>


        </div>
    );
}

export default Home;