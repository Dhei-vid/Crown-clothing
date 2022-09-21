import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import Button from "../button/button-component";
import CartItem from "../cart-item/cart-item-component";

import "./cart-dropdown-styles.scss";

const CartDropdown = () => {
  const { cartItems, count } = useContext(CartContext);
  console.log(count);

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

      <Button> GO TO CHECKOUT </Button>
    </div>
  );
};

export default CartDropdown;
