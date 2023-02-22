import { useSelector, useDispatch } from "react-redux";

import {
  selectCartStatus,
  selectCartCount,
} from "../../store/cart/cart.selectors";
import { setIsCartOpen } from "../../store/cart/cart.action";

import {
  CartIconContainer,
  ShoppingIconStyle,
  ItemCount,
} from "./cart-icon-style";

const CartIcon = () => {
  const dispatch = useDispatch();

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
