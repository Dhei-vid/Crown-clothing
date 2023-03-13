import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCallback } from "react";

import { selectCart } from "../../store/cart/cart.selectors";

import Button, { button_type_classes } from "../button/button-component";
import CartItem from "../cart-item/cart-item-component";

import { CartDropdownContainer, EmptyMessage } from "./cart-dropdown-styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCart);

  const navigate = useNavigate();

  const cartNavigate = useCallback(() => {
    navigate("/checkout");
  }, []);

  return (
    <CartDropdownContainer>
      <>
        {cartItems.length ? (
          // To get the product data we need to leverage off the cart context
          cartItems.map((items) => <CartItem key={items.id} cartitem={items} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </>

      <Button button_type={button_type_classes.base} onClick={cartNavigate}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
