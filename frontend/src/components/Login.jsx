import "../components/style.css";
import "../components/responsive.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
    const route = useNavigate();
    const { state, dispatch } = useContext(AuthContext)
    console.log(state);
    const [userData, setUserData] = useState({ email: '', password: '' });
    const handleChange = (event) => {
        event.preventDefault();
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!userData.email || !userData.password) return toast.error("Please fill all the fields!");

        if (userData.password.length < 5)
            return toast.error("Password length should be atleast 5 characters!");

        const response = await axios.post('https://mern-tanishq-backend.onrender.com/login', { userData });
        console.log(response);
        if (response.data.success) {
            dispatch({
                type: "Login",
                payload: response.data.user
            })
            localStorage.setItem("TanishqJWT", JSON.stringify(response.data.token))
            setUserData({ email: '', password: '' });
            toast.success("Logged in!")
            
            if(response.data.user.role == "seller"){
                route('/sellerHome')
            }else{
                route('/')
            }
        } else {
            toast.error(response.data.error)
        }
    }
    useEffect(() => {
        if (state?.user?.name) {
            console.log(state?.user?.name, "state?.user?.name");
            route('/')
            toast("You are already logged in!")
        } else {
            route('/login')
        }
    }, [state])
    return (
        <div>

            <div className="screen">
                <div className="register-container">
                    <div className="left-register-content">
                        <div className="login-title">Login</div>

                        <form onSubmit={handleSubmit}>
                            <div className="input_wrap">
                                <input type="email" name="email" onChange={handleChange} required autoComplete="off" />
                                <label>Enter your email</label>
                            </div>
                            <div className="input_wrap">
                                <input type="password" name="password" onChange={handleChange} required autoComplete="off" />
                                <label>Enter your password</label>
                            </div>
                            <input type="checkbox" name="checkbox" defaultChecked readOnly />
                            <label>Remember Me</label>

                            <p className="form-t-and-c">By continuing, I agree to <span className="t-c-style">Terms of Use</span>
                                & <span className="t-c-style">Privacy Policy</span></p>
                            <div className="sign-up-btn">
                                <input type="submit" value="Login" />

                            </div>
                            <p className="form-t-and-c">New here? <span className="t-c-style" onClick={()=>route('/register')}>Sign up</span></p>

                        </form>

                    </div>
                    <div className="right-register-content">
                        <img src="https://www.hunarcourses.com/blog/wp-content/uploads/2021/04/north-indian-jewellery-sets-1024x768.jpg" alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Login;
