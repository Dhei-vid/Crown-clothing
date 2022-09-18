import Button from "../button/button-component";
import CartItem from "../cart-item/cart-item-component";

import "./cart-dropdown-styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown--container">
      <div>
        {
          // To get the product data we need to leverage off the cart context
          [
            { name: "item 1" },
            { name: "item 2" },
            { name: "item 3" },
            { name: "item 4" },
          ].map((items) => (
            <CartItem cartitem={items} />
          ))
        }
      </div>

      <Button> GO TO CHECKOUT </Button>
    </div>
  );
};

export default CartDropdown;
