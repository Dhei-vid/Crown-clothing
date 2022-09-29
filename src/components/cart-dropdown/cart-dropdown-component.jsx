import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";

import Button, { button_type_classes } from "../button/button-component";
import CartItem from "../cart-item/cart-item-component";

import "./cart-dropdown-styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const cartNavigate = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown--container">
      <div>
        {
          // To get the product data we need to leverage off the cart context
          cartItems.map((items) => (
            <CartItem key={items.id} cartItems cartitem={items} />
          ))
        }
      </div>

      <Button type={button_type_classes.base} onClick={cartNavigate}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
