import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const initialState = { user: null, cart: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case "Login":
            return { ...state, user: action.payload, cart: action.payload }
        case "Logout":
            localStorage.removeItem("TanishqJWT");
            toast.success("Logged out!")
            return { ...state, user: null,cart: action.payload   }
        case "AddToCart":
            return { ...state, cart: action.payload  };
        case "RemoveFromCart":
            return { ...state, cart: action.payload  };
        case "buyNow":
            return {...state, cart: action.payload  }
        default:
            return state;
    }
}

export const HandleAuth = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function currentUser() {
            const token = JSON.parse(localStorage.getItem("TanishqJWT"));
            console.log(token, "token from auth");
            if (token) {
                console.log("if token");
                const response = await axios.post("https://mern-tanishq-backend.onrender.com/currentUser", { token });
                console.log(response.data.success);
                if (response.data.success) {
                    dispatch({
                        type: "Login",
                        payload: response.data.user,
                    })
                    console.log("after res.scuccess");
                } else {
                    toast.error(response.data.error)
                }
            }
        }
        currentUser();
    }, [])

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
