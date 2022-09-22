import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./checkout-styles.scss";

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {cartItems.map((items) => {
        return (
          <div key={items.id}>
            <h1>{items.name} </h1>
            <span> $50</span>
          </div>
        );
      })}
    </div>
  );
};

export default CheckOut;
