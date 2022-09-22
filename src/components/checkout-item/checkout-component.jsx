import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./checkout-styles.scss";

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {cartItems.map((items) => {
        const { id, name, imageUrl, price, quantity } = items;
        return (
          <div key={id}>
            <img src={imageUrl} alt="added product to cart" />
            <h1>{name} </h1>
            <h3> {quantity} </h3>
            <h4> ${price} </h4>
          </div>
        );
      })}
    </div>
  );
};

export default CheckOut;