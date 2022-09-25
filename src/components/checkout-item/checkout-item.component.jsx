import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItems }) => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      <img src="" alt="" />
    </div>
  );
};

export default CheckoutItem;
