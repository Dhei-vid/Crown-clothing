import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemFromCart, clearCartItem, total } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((items) => (
        <CheckoutItem
          key={items.id}
          cartItem={items}
          reduce={removeItemFromCart}
          increase={addItemToCart}
          deleteItem={clearCartItem}
        />
      ))}

      <span className="total">total: ${total}</span>
    </div>
  );
};

export default CheckOut;
