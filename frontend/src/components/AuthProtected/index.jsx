import { useContext, useEffect } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"

const AuthProtected = ({ children }) => {
    const { state } = useContext(AuthContext)
    const route = useNavigate();
    if (state?.user) {
        return (children)
    } else {
        return (

            <div className="screen">
                <div className="container-header">
                    <div className="container-title">To view content do login!</div>
                    <div className=" text-center"> <button onClick={() => route('/login')} className="fbtn">Login</button></div>

                </div>
            </div>
        )
    }
}

const SellerProtected = ({ children }) => {
    const { state } = useContext(AuthContext)
    const route = useNavigate();
    useEffect(() => {
        if (!state?.user || state.user?.role !== "seller") {    // Check if user is not logged in or not a seller
            setTimeout(() => {
                console.log(!state?.user, "!state?.user");
                route('/')
            }, 3000)
        }

    }, [state])     // even after page refresh
    console.log(!state?.user, "!state?.user");

    if (state?.user?.role == "seller") {
        return (children)
    } else {
        return (

            <div className="screen">
                <div className="centerMsg">
                    <div className="container-title">Invalid Access!</div>
                </div>
            </div>
        )
    }
}

export { AuthProtected, SellerProtected };
