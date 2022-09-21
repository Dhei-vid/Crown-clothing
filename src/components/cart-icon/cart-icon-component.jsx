import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cartContext";
import "./cart-icon-style.scss";

const CartIcon = () => {
  const { isCartOpen, setCartStatus, count, cartItems } =
    useContext(CartContext);

  const countValue = cartItems.map;

  const toggleIsCartOpen = () => {
    setCartStatus(!isCartOpen);
  };

  return (
    <div className="cart-icon--container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item--count">00</span>
    </div>
  );
};

export default CartIcon;
