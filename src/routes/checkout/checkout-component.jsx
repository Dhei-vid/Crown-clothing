import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>

      {cartItems.map((items) => {
        const { id, name, imageUrl, price, quantity } = items;
        return (
          <div key={id}>
            <img src={imageUrl} alt="added product to cart" />
            <span className="checkout-header">{name} </span>

            <div className="counter">
              <span
                className="decrease"
                onClick={() => removeItemFromCart(items)}
              ></span>
              <span className="qty"> {quantity} </span>
              <span
                className="increase"
                onClick={() => addItemToCart(items)}
              ></span>
            </div>
            <h4> ${price} </h4>
          </div>
        );
      })}
      <div className="total">
        <h1>Total</h1>
      </div>
    </div>
  );
};

export default CheckOut;
