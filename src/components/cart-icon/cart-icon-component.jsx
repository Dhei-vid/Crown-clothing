import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CartContext } from "../../context/cartContext";

import {
  selectCartStatus,
  selectCartCount,
} from "../../store/cart/cart.selectors";
import { setIsCartOpen } from "../../store/cart/cart.action";

import {
  CartIconContainer,
  ShoppingIconStyle,
  ItemCount,
} from "./cart-icon-style.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();
  // const { isCartOpen, setCartStatus, count } = useContext(CartContext);

  const count = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectCartStatus);

  const countIcon = () =>
    count.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconStyle />
      <ItemCount>{countIcon()}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
