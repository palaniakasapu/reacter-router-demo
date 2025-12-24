import { useNavigate } from "react-router-dom";
export const Home = () => {
    const navigate = useNavigate();
    return(
        <>
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
            <button onClick={() => navigate('/order-summary', { replace: true })}>Place Order</button>
        </>
    )
}

export default Home;