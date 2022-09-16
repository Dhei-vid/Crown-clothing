import Button from "../button/button-component";
import CartItem from "../cart-item/cart-item-component";

import "./cart-dropdown-styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown--container">
      {/* <CartItem /> */}
      <Button> GO TO CHECKOUT </Button>
    </div>
  );
};

export default CartDropdown;
