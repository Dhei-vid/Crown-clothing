import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

import Button from "../button/button-component";
import CartItem from "../cart-item/cart-item-component";

import "./cart-dropdown-styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

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

      <Link to="/checkout">
        <Button> GO TO CHECKOUT </Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
