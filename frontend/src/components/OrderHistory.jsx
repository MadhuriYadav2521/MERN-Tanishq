
// import "../components/style.css"
import Navbar from "./Navbar";
import "../components/accordian.css"
const OrderHistory = () => {
    return (
        <div>
            <Navbar />

            <div className="container">
                <details>
                    <summary>Accordion Item 1</summary>
                    <div>
                        <h2>Content for Accordion Item 1</h2>
                    </div>
                </details>
                <details>
                    <summary>Accordion Item 2</summary>
                    <div>
                        <h2>Content for Accordion Item 2</h2>
                    </div>
                </details>
            </div>
        </div>
    );
}

export default OrderHistory;