import { useNavigate } from "react-router-dom";
export const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    
    <>
      <h1>Order Summary</h1>
      <p>Your order has been successfully placed.</p>
      <p>Thank you for shopping with us!</p>
      <button onClick={() => navigate(-1)}>Go to Home</button>
    </>
  );
};
export default OrderSummary;
