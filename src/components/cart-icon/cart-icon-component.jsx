import { useContext } from "react";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cartContext";
import {
  CartIconContainer,
  ShoppingIconStyle,
  ItemCount,
} from "./cart-icon-style.jsx";

const CartIcon = () => {
  const { isCartOpen, setCartStatus, cartItems, countHandler } =
    useContext(CartContext);

  const countIcon = () =>
    countHandler(cartItems).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

  const toggleIsCartOpen = () => {
    setCartStatus(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconStyle />
      <ItemCount>{countIcon()}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
