import "../components/style.css";
import "../components/responsive.css";
import * as Icon from "react-bootstrap-icons";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { state, dispatch } = useContext(AuthContext);
    const route = useNavigate();
    const Logout = () =>{
        dispatch({ type: "Logout"})
        route('/')
    }
    console.log(state?.cart?.totalCartProducts,"totalCartProducts from nav");
    return (
        <div>

            <header>
                <div className="top-navbar">

                    <div className="top-navbar-container">
                        <div className="left-top-nav">
                            <a href="./Add-product.html">
                                <Icon.List className="bIcon" />
                            </a>
                            <a onClick={() => route('/addProduct')} >
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTQuODMgNzQuNzkiPjxkZWZzPjxzdHlsZT4uYntmaWxsOiM4MzI3Mjk7ZmlsbC1ydWxlOmV2ZW5vZGQ7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJiIiBkPSJNMzguNzksNy41NWMtLjYyLTIuOTEsMS4zMi01LjU2LDQuMTUtNS41Nmg3Ljk1YzIuMTIsLjA5LDQuNzctMS41OSw0Ljc3LTEuNTlWMTMuNzNjMCwxMy41MS03LjQyLDE5LjI0LTEwLjg2LDE5Ljc3LS42MiwuMjctMS4wNiwuMDktLjI2LS41Myw0LjY4LTMsNy40Mi0xMC4xNSw3LjY4LTE2LjI0VjQuNTVjLS45NywuNjItMi44MiwuNzEtMi44MiwuNzFoLTYuOTdjLTEuODUsMC0yLjgyLC42Mi0zLjYyLDIuMjltMzUuNTgsMGMuNjItMi45MS0xLjI0LTUuNTYtNC4xNS01LjU2aC03Ljk1Yy0yLjAzLC4wOS00Ljc3LTEuNTktNC43Ny0xLjU5VjEzLjczYzAsMTMuNTEsNy40MiwxOS4yNCwxMC44NiwxOS43NywuNjIsLjI3LDEuMDYsLjA5LC4yNy0uNTMtNC42OC0zLTcuNDItMTAuMTUtNy42OC0xNi4yNFY0LjU1Yy45NywuNjIsMi44MiwuNzEsMi44MiwuNzFoNy4wNmMxLjg1LDAsMi44MywuNjIsMy41MywyLjI5aDBaTTIwLjI2LDYyLjk5Yy0uNzEtMS43Ny0uMTgtMy43MSwuMjYtNC40MWg4LjAzdjQuNDFoMi4wM3YtMTkuNTFzLS42Mi0uMDktMS4wNiwuNjJjLTMsNC43Ny01LjMsNi04LjY1LDkuMzYtMi44MywyLjgyLTQuOTQsNi0zLjg5LDkuNTNoMy4yN1ptLjg4LTUuNzRoNy40MnYtOC4zOWMtMS44NSwzLjQ0LTYuMjcsNS4zLTcuNDIsOC4zOVptODQuOTMtMTUuOGMtMi41NiwyLjAzLTQuNjgsMy44LTUuODMsNi40NC0xLjI0LDIuNjUtMS41OSw2LjQ0LDAsOS43MSwxLjc3LDMuNjIsMy44LDUuNTYsNi4xOCw3Ljk0LDEuNjgsMS44NSw0Ljg2LDUuNTYsMy44LDguODMsLjc5LDAsMS44NS0xLjk0LDIuMDMtMi42NSwuNDQtMi4yOSwuMTgtMy40NC0uNzktNS4xMi0uNjItMS4xNS0xLjk0LTIuMjktMi45MS0zLjQ0LDEuNDEtMS4xNSwyLjkxLTIuODMsNC4xNS00LjUsMS41OS0yLjIxLDIuNTYtNS45MSwuNTMtOS41My0xLjg1LTMuNDQtNy4wNi02LjYyLTcuMTUtNy42OGgwWm0xLjA2LDIwLjM5Yy0yLjAzLTEuNjgtMy4yNy0zLjA5LTQuNS01LjgzLTEuMjQtMi40Ny0xLjMyLTUuMzktLjc5LTcuNDIsLjYyLTIuMjEsMi4xMi0zLjgsMy41My00Ljk0LDEuNTksMS4xNSwzLjI3LDIuNTYsNC41LDQuNTksMi4wMywzLjQ0LDIuMDMsNS45MSwuNzEsOS4yNy0uNzksMS45NC0xLjY4LDMuMDktMy40NCw0LjMzaDBaTS41Nyw0NS4wN2MtLjM1LS43MSwuMTgtMi41NiwyLjMtMi4zOEgxMy4yOGMxLjMyLC4wOSwyLjEyLS44OCwzLjgtLjcxLTIuMzgsMS45NC0yLjY1LDIuOTEtMy4wOSw0Ljc3bC0xLjY4LDEzLjY4Yy0uNDQsNS41NiwxLjE1LDEwLjE1LDUuMywxMy45NS0yLjU2LC4zNS04LjEyLTMuNzEtOC4zLTExLjEyLS4xOC0zLjcxLC44OC0xNS41NCwuODgtMTUuNTQsLjI2LTEuOTQsMS41LTMuMzUsMS41LTMuMzVIMS44Yy0uNjIsLjA5LS45NywuMDktMS4yNCwuNzFILjU3Wm04MS44NCwxNy4zOWgyLjU2di01LjIxaDYuOTd2NS40N2gyLjY1di0xOC44OWgtMi42NXYxMS45MmgtNi45N3YtMTEuOTJoLTIuNTZ2MTguNjNoMFptLTcuMTUtMTQuMjFjLS42MiwuMTgtMS4yNC0uMDktMS44NS0uNjItLjg4LS43OS0xLjI0LTEuNTktMi4zOC0yLjI5LTEuMjQtLjYyLTMtLjcxLTQuMDYsLjA5LS45NywuNzEtLjk3LDIuMywuMDksMy4xOCwyLjAzLDEuNTksNC4yNCwyLjQ3LDYuOCwzLjgsNC42OCwyLjQ3LDUuNDcsNi44LDIuMjEsOS0yLjc0LDEuODUtNi4xOCwyLjAzLTkuMjcsLjg4LTIuMzgtLjk3LTQuMjQtMi45MS00LjUtNS4zLDEuNTksMCwyLjEyLC43MSwyLjc0LDEuNjgsLjk3LDEuMzIsMS41OSwxLjg1LDMsMi40NywyLjAzLC43OSw0LjMzLC41Myw1LjY1LS4yNiwxLjk0LTEuMjQsMS42OC0zLjI3LC4yNi00LjU5LTIuOTEtMi43NC02LjUzLTMuNTMtOC41Ni01LjU2LTEuNzctMS43Ny0yLjM4LTMuNzEtLjUzLTUuNzQsMS41OS0xLjY4LDUuODMtMi4yMSw4LjMtLjA5LDEuMDYsLjk3LDEuODUsMi4xMiwyLjEyLDMuMzVoMFptLTIxLjEtMTAuMDZjMC0xLjQxLDEuMDYtMi40NywyLjQ3LTIuNDcsMS4yNCwwLDIuMzgsMS4wNiwyLjM4LDIuNDcsMCwxLjMyLTEuMTUsMi40Ny0yLjM4LDIuNDctMS40MSwwLTIuNDctMS4xNS0yLjQ3LTIuNDdabTEuMTUsNS42NWgyLjQ3djE5LjE2aC0yLjQ3di0xOS4xNlptLTE5LjI1LDE5LjE2aDEuNzd2LTEzLjE1Yy44OCwyLjU2LDUuMjEsNS45Miw1LjIxLDUuOTIsMCwwLDMuMzUsMi44Myw0Ljk0LDYuNzFsMS4wNiwuNTN2LTE5LjE2aC0xLjc3djEzLjQyYy0uOTctMi41Ni00Ljc3LTUuNTYtNC43Ny01LjU2LTIuOTEtMi41Ni00Ljg2LTYuMDktNS4zLTcuNzdsLTEuMTUtLjM1djE5LjQyaDBaIi8+PC9zdmc+" alt="" />
                            </a>
                        </div>
                        <div className="nav-search-group">
                            <input type="text" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…" />
                            <div className="search-img">
                                <Icon.ShopWindow className="bIcon" />
                            </div>
                            <div className="search-img">
                                <Icon.Mic className="bIcon" />
                            </div>
                            <div className="search-img">
                                <Icon.Search className="bIcon" />
                            </div>
                        </div>
                        <div className="top-menu-wrapper">

                            {state.user ? (
                                <>
                                    {state?.user?.role == "seller" ? (
                                        <div className="menu">
                                            <a onClick={() => route('/sellerHome')}>
                                                <div className="menu-img">
                                                    <Icon.Person className="bIcon" />
                                                </div>
                                                <div className="menu-title">{state.user.name}</div>
                                            </a>
                                        </div>
                                    ) : (
                                        <div className="menu">
                                        <a onClick={() => route('/orderHistory')}>
                                            <div className="menu-img">
                                                <Icon.Person className="bIcon" />
                                            </div>
                                            <div className="menu-title">{state.user.name}</div>
                                        </a>
                                    </div>
                                    )}

                                </>
                            ) : (
                                <div className="menu">
                                    <a onClick={() => route('/login')} >
                                        <div className="menu-img">
                                            <Icon.Person className="bIcon" />
                                        </div>
                                        <div className="menu-title" >account</div>
                                    </a>
                                </div>
                            )}
                            {state?.user?.role == "seller" ? (
                                <>
                                    <div className="menu">
                                        <a onClick={() => route('/addProduct')}>
                                            <div className="menu-img">
                                                <Icon.FolderPlus className="bIcon" />
                                            </div>
                                            <div className="menu-title">Add Product</div>
                                        </a>
                                    </div>
                                    <div className="menu">
                                        <a onClick={() => route('/sellerAllProducts')}>
                                            <div className="menu-img">
                                                <Icon.Box2 className="bIcon" />
                                            </div>
                                            <div className="menu-title">All Products</div>
                                        </a>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="menu">
                                        <a onClick={() => route('/')}>
                                            <div className="menu-img">
                                                <Icon.ShopWindow className="bIcon" />
                                            </div>
                                            <div className="menu-title">stores</div>
                                        </a>
                                    </div>
                                    <div className="menu">
                                        <a onClick={() => route('/')}>
                                            <div className="menu-img">
                                                <Icon.Heart className="bIcon" />
                                            </div>
                                            <div className="menu-title">wishlist</div>
                                        </a>
                                    </div>
                                    <div className="menu" style={{position:"relative"}}>
                                        <a onClick={() => route('/productCart')}>
                                            <div className="menu-img">
                                                <Icon.Cart className="bIcon " />
                                            </div>
                                            <div className="menu-title ">cart</div>
                                          {state?.cart?.totalCartProducts ?(
                                               <> <div className="cBadge"> {state?.cart?.totalCartProducts}</div></>
                                          ):(
                                            <></>
                                          )}
                                        </a>
                                    </div>
                                </>
                            )}
                            {state.user ? (
                                <div className="menu">
                                    <a onClick={Logout}>
                                        <div className="menu-img">
                                            <Icon.BoxArrowRight className="bIcon" />
                                        </div>
                                        <div className="menu-title">Logout</div>
                                    </a>
                                </div>
                            ) : (
                                <div>

                                </div>
                            )}
                        </div>
                    </div>

                    <div className="hidden-nav-categories">
                        <div className="nav-category-container">
                            <ul>
                                <li><a onClick={() => route('/')}>Home</a></li>
                                <li><a onClick={() => route('/login')}>Sign in</a></li>
                                <li><a onClick={() => route('/orderHistory')}>My Orders</a></li>
                                <li><a onClick={() => route('/')}>My Offers</a></li>

                            </ul>
                        </div>
                    </div>

                    <div className="hidden-nav-search-group">
                        <input type="text" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…" />
                        <div className="search-img">
                            <Icon.Camera className="bIcon" />
                        </div>
                        <div className="search-img">
                            <Icon.Mic className="bIcon" />
                        </div>
                        <div className="search-img">
                            <Icon.Search className="bIcon" />
                        </div>
                    </div>

                </div>
                {state?.user?.role == "seller" ? (
                    <></>
                ) : (

                    <div className="nav-categories">
                        <div className="nav-category-container">
                            <ul>
                                <li><a onClick={() => route('/multipleProducts')}>All Jewellery</a></li>
                                <li><a onClick={() => route('/multipleProducts')}>gold</a></li>
                                <li><a onClick={() => route('/multipleProducts')}>diamond</a></li>
                                <li><a onClick={() => route('/multipleProducts')}>earings</a></li>
                                <li><a onClick={() => route('/multipleProducts')}>rings</a></li>
                                <li><a onClick={() => route('/multipleProducts')}>mia</a></li>
                                <li><a onClick={() => route('/multipleProducts')}>collections</a></li>
                                <li><a onClick={() => route('/multipleProducts')}>rivah</a></li>
                                <li><a onClick={() => route('/multipleProducts')}>golden harvest</a></li>
                                <li><a onClick={() => route('/multipleProducts')}>corporate gifting</a></li>
                                <li><a onClick={() => route('/multipleProducts')}>more</a></li>
                            </ul>
                        </div>
                    </div>
                )}
            </header>

        </div>
    );
}

export default Navbar;