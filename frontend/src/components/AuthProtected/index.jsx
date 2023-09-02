import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar"

const AuthProtected = ({ children }) => {
    const { state } = useContext(AuthContext)
    const route = useNavigate();
    if (state?.user) {
        return (children)
    } else {
        return (
          
            <div>
                {  <Navbar />}
                <div className="container-header">
                    <div className="container-title">This content is protected! Do login.</div>
                    <div className=" text-center"> <button onClick={() => route('/login')} className="fbtn">Login</button></div>
                   
                </div>
            </div>
        )
    }
}

export default AuthProtected;
