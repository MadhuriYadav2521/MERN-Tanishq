import { useContext } from "react";
import Navbar from "../Navbar";
import { AuthContext } from "../../Context/AuthContext";
import { SellerProtected } from "../AuthProtected";

const SellerHome = () => {
    const { state } = useContext(AuthContext)
    return (
        <div>
            <Navbar />
            <SellerProtected>
                <div class="screen">
                    <div style={{ marginTop: "8rem" }}>
                        <div className="admin-panel-title">Welcome {state?.user?.name}</div>



                    </div>
                </div >
            </SellerProtected>
        </div>
    );
}

export default SellerHome;