import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon-style.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon--container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item--count">02</span>
    </div>
  );
};

export default CartIcon;
