import "../components/style.css";
import "../components/responsive.css";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
    const route = useNavigate();
    const { state } = useContext(AuthContext);
    const [userData, setUserData] = useState({ userName: '', email: '', password: '', cpassword: '', role: '' });
    const handleChange = (event) => {
        event.preventDefault();
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const handleChangeForSelect = (event) => {
        // console.log(event.target.value, "- value", event.target.name, "- name")
        setUserData({ ...userData, ["role"]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!userData.userName || !userData.email || !userData.password || !userData.cpassword || !userData.role)
            return toast.error("Please fill all the fields!");
        if (userData.password.length < 5 || userData.cpassword.length < 5)
            return toast.error("Password length should be atleast 5 characters!");
        if (userData.password !== userData.cpassword)
            return toast.error("Password and Confirm Password not matched!");
        const response = await axios.post('http://localhost:8000/register', { userData });
        console.log(response, "respomse");
        if (response.data.success) {
            setUserData({ userName: '', email: '', password: '', cpassword: '', role: '' });
            toast.success("Registration successful!")
            route('/login')
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
            route('/register')
        }
    }, [state])
    return (
        <div>

            <div className="screen">
                <div className="register-container">
                    <div className="left-register-content">
                        <div className="login-title"> Sign Up </div>

                        <form onSubmit={handleSubmit}>
                            <div className="input_wrap">
                                <input type="text" name="userName" onChange={handleChange} required autoComplete="off" />
                                <label>Enter your name</label>
                            </div>
                            <div className="input_wrap">
                                <input type="email" name="email" onChange={handleChange} required autoComplete="off" />
                                <label>Enter your email</label>
                            </div>
                            <div className="input_wrap">
                                <select onChange={handleChangeForSelect}  >
                                    <option value="" disabled selected>Select your role</option>
                                    <option value="buyer">Buyer</option>
                                    <option value="seller">Seller</option>
                                </select>
                            </div>
                            <div className="input_wrap">
                                <input type="password" name="password" onChange={handleChange} required autoComplete="off" />
                                <label>Enter your password</label>
                            </div>
                            <div className="input_wrap">
                                <input type="password" name="cpassword" onChange={handleChange} required autoComplete="off" />
                                <label>Confirm password</label>
                            </div>
                            <input type="checkbox" name="" id="checkbox" />
                            <label>Remember Me</label>

                            <p className="form-t-and-c">By continuing, I agree to <span className="t-c-style">Terms of Use</span>
                                & <span className="t-c-style">Privacy Policy</span></p>
                            <div className="sign-up-btn">
                                <input type="submit" value="Sign Up" />

                            </div>

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

export default Register;